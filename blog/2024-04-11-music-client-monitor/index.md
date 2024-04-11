---
slug: music-client-monitor
title: Corona技术专题-网易云音乐大前端性能监控服务的设计与实现
authors: [kkdev163]
tags: [大前端性能监控、ClickHouse]
---

## 一. 前言

2022年，结合业务侧的体验治理诉求，云音乐公技团队与大前端业务团队快速从 0 到 1 搭建了大前端性能监控服务，覆盖了 20+ 个监控场景，100+ 个监控看板。目前服务已在业务中经历过1年多的落地、打磨，本文将对平台侧的设计与实现做一次回顾总结。

<!--truncate-->

经典的性能监控数据处理链路可以分为以下几个环节: 端侧 SDK 日志采集上报 -> 日志传输 -> 数据消费建模入库 -> 数据可视化分析。
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926476299/14f6/aaa8/ebff/3d144f873b9f05bb8dd392cdad195f16.png)

本文会聚焦介绍「数据消费建模入库」到「数据可视化分析」的设计与实现，不涉及端侧数据采集 SDK 的部分。

## 二. 技术架构概览

在整体技术架构选型中，时序数据库的选择是重中之重，因为它是连接数据消费入库、数据可视化分析的关键一环。时序数据库的选择决定了整体架构的数据写入策略、吞吐量、表结构设计、数据分析方法、数据查询效率等等。

鉴于过往使用 InfluxDB 遇到的痛点以及业务侧对分位数统计、多维实时分析等场景的诉求，经过调研后我们选择了 ClickHouse 作为存储数据库。ClickHouse 经过一年多在业务中的验证，很好地满足了云音乐的性能分析诉求。更多关于时序数据库的对比介绍可以参考笔者的这篇文章: [《Corona技术专题-时序数据分析》](https://juejin.cn/post/7294164045631864866?searchId=20240402182742D3170DDAF621E70830DB)。

在大前端性能监控服务从 0 到 1 的快速建设期，团队规划建设覆盖 5 个端，20+ 个监控指标项。

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926409718/41bb/ee5f/c0ba/05d9e2722f515f6034d0214daa081526.png)

平台侧如何在有限的时间、人力条件下快速完成平台基础能力建设并完成众多指标的数据消费建模、分析看板搭建，是笔者在做技术架构设计时遇到的另一个重要命题。

为了应对上述的挑战，在数据消费建模阶段笔者设计了在线配置化的数据消费建模服务。在数据可视化分析阶段，笔者抽象设计了3种衡量型看板、6种过程分析型看板，在搭建可视化页面时，只需声明式地使用 Schema 描述页面所需的看板，即可快速完成可视化分析页面的搭建。

## 三. 在线配置化的数据消费服务

### 3.1 数据消费服务的主要工作
我们首先来介绍下数据消费服务的主要工作，我们以客户端冷启动监控为例，以下是一条简化的客户端上报日志:

```javascript
{
  "props": {
    "mspm": "NativeApplication",
    "category": "Perf",
    "type": "coldBoot",
    "coldBootDataType": "000",
    "coldBootData": [{
      "name": "LAUNCH",
      "during": 800,
      "module": [{
        "name": "initNetwork",
        "during": 21
      }, {
        "name": "initNavigator",
        "during": 6
      }, ...
      ]
    }, {
      "name": "MAIN_PAGE",
      "during": 100,
      "module": [...]
    }],
    "brand": "Apple",
    "model": "iphone13,4",
    "appname": "music",
  },
  "os": "iphone",
  "osver": "15.5",
  "appver": "9.0.25",
  "buildver": "4742",
  "logtime": 1711958766,
}
```
其中 ```props.type``` 是区分不同监控项的唯一标识。如 ```coldBoot``` 代表客户端冷启动监控项。 这条日志中会带有此监控项的特征字段，如 ```props.coldBootDataType``` 用来区分不同的启动类型，```props.coldBootData ``` 包含了冷启动中各阶段和子模块的详细耗时数据。其他字段如 ```os```、```osver``` 等为所有监控项都会带有的通用字段。

针对这条客户端上报的冷启动日志，业务上可能会有如下的分析诉求:
- 分析整体启动耗时(LAUNCH + MAIN_PAGE) 的平均值、P50、P90 耗时。
- 分析单独阶段如 LAUNCH 的平均值、P50、P90 耗时。
- 分析单独模块如 initNetwork 的平均值、P50、P90 耗时。

为了满足以上分析诉求，在数据消费服务层，会将一条原始日志转换为多条适合查询分析的数据库记录如:

```javascript
[
  {
    "table": "cold_boot_multi_stage",  // 多阶段汇总表
    "row": {
      "stageName": "LAUNCH,MAIN_PAGE",
      "stageCost": "900",
      "coldBootDataType": "000",
      "appName": "music",
      "appVersion": "9.0.25",
      // 省略其他字段
    }
  },
  {
    "table": "cold_boot_stage",   // 单阶段表
    "row": {
      "stageName": "LAUNCH",
      "stageCost": 800,
      // 省略其他字段
    }
  },
  {
    "table": "cold_boot_stage",  // 单阶段表
    "row": {
      "stageName": "MAIN_PAGE",
      "stageCost": 100,
      // 省略其他字段
    }
  },
  {
    "table": "cold_boot_module",  // 单模块表
    "row": {
      "stageName": "MAIN_PAGE",
      "moduleName": "initNetwork",
      "moduleCost": 21
      // 省略其他字段
    }
  },
  // ... 省略其他模块耗时
]
```
接着数据消费服务会将转换后的数据库记录批量写入数据库中。

所以如下图所示，总体来说数据消费服务做的主要工作是:
- 针对不同监控项，校验上报数据的合法性，过滤异常数据，如针对冷启动监控，需要剔除耗时超过 xx 分钟的异常数据。
- 对上报日志进行转换，将原始上报日志，转换为适合查询分析的多条数据库记录。
- 将转换后的数据库记录批量写入数据库中。

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/35138666696/b574/052f/110d/8fd53c498f6430c36a1e56b38723290b.png?imageView&thumbnail=1000x0)

### 3.2 建设在线配置式的数据消费服务的背景

数据消费服务，在接入一个新增的客户端监控场景时，常规的做法需要经过以下几个开发步骤:
1. 根据与客户端约定的日志格式， Mock 日志的上报 
2. 在代码库中新增一个消费 Service，订阅新的日志类型
3. 在 Service 中，编写数据的有效性校验、过滤、字段转换代码
4. 在代码库中，编写转换后的数据库模型 Schema
5. 编写数据库建表的 SQL 语句
6. 手动登录数据库，做数据库的表结构变更
7. 将开发好的 Service 代码通过部署系统发布上线

如果后续遇到监控项有新增字段，步骤 3~7 需要反复地进行。这样的开发方式在应对一两个监控指标时还能接受，但面对 20+ 个监控指标的建设需求时，显然会占用大量开发时间、并且人工操作数据库也容易出现疏漏。为此笔者对数据消费服务进行了在线配置化的改造升级，改造后整体的开发步骤变为:
1. 消费服务会自动探测新增的上报指标，可指定规则，采集样例日志
2. **基于线上样例日志, 在线编写数据的校验、转换代码**
3. 通过在线勾选，完成数据库建模，并一键完成表结构变更
4. 在线实时发布

经过改造升级后，新指标的数据消费、建模的关键步骤缩减至只有1步，即在线编写数据的校验、转换代码。

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/35117875716/886e/5916/d75d/97cd6ccb067d09b6c734b9ee21b453c8.png?imageView&thumbnail=900x0)

### 3.3 升级后的开发演示

**1.自动探测新增的上报日志类型:**

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34922998762/6896/1ecf/35b3/59613ac8b3e9542320ee6993ea90030f.png?imageView&thumbnail=900x0)

点击编辑可进入消费者配置详情页。

**2.查看采集样例日志 & 设置采集规则**


![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34923082474/59db/5ce4/b07b/16234efed71106c9ea5208d60804a64c.png?imageView&thumbnail=900x0)

**3.编写日志转换逻辑**

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34923099495/437b/5ed0/54c7/bdd7a3dbb7e9253a64f14b11c6689b84.png?imageView&thumbnail=900x0)

**4.配置数据库 Schema**

通过转换后的数据结构，可自动推断出 ClickHouse 表结构，开发者只需勾选确认即可: 

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34923127405/64f9/f403/6e0c/6b9b41279213357e32ac175e1b4f3b33.png?imageView&thumbnail=0x500)

保存后，会出现 「创建数据库」 一键建表按钮，建表后点击推送配置，即可完成新增数据源的消费逻辑。

经过在线配置升级后，极大地提高了数据消费逻辑的开发效率，同时通过一键建表，数据校验(转换得到的数据与 Schema、Schema 与数据库表结构之间的双向校验)等机制避免了人工操作数据库带来的风险。 下图为引入在线配置后的数据消费流程图:

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/35138820370/d7e9/d290/8102/cafc128ba1c0d205050f4877153d1f86.png?imageView&thumbnail=1000x0)

### 3.4 数据消费服务的可观测性建设
为了确保消费服务本身的稳定性，笔者也在服务开发过程中，设计了关键埋点。上报埋点通过 Grafana 可搭建出消费服务自身的可观测性看板，以下是一些看板示例:

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34923349910/5fcd/2ca4/58dd/c4ed665c7e00637fe8339872ff0ee3eb.png?imageView&thumbnail=900x0)

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34923424285/c0cd/d91d/1d89/dae2c364087560807f1aaf6c307df489.png?imageView&thumbnail=900x0)

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34923426552/b6d2/37a2/6f8d/019786f43c179fb9b9ea1eb187d7e326.png?imageView&thumbnail=900x0)

其中比较关键的指标是消费延时，它可以用来度量数据消费服务目前的资源(如pod数)是否合理，若 pod 数过少，则 Kafka 日志会出现堆积，该指标的数值会上涨，开发者在查询最新日志时，延迟会变高。笔者针对这类关键指标也配置了告警，当日志出现堆积时，能及时响应处理。

## 四. 数据可视化服务

### 4.1 设计基于 Schema 报表搭建能力的背景
在常规的做法下，开发一个新增的监控场景页面，每次都需要经过以下几个步骤:
1. 页面交互设计；梳理拆分前端组件、后端接口。
2. 开发新指标的后端数据分析接口
3. 封装新指标的看板组件（调用新指标的数据分析接口、前端图表展示适配）
4. 将多个新增看板组件，组装成页面

如果沿用此开发模式，将无法承载如此多的监控指标接入诉求，为此笔者抽象设计了基于 Schema 的报表搭建能力。具体的做法是
1. 通用业务看板抽象(3种衡量型看板、6种分析型看板)
2. 前后端一体化的看板组件封装

在开发具体指标的监控页面时，只需编写页面看板的 Schema (描述需要的看板、查询的表)即可。

此过程本质上是通过极致的抽象封装，达到高度的复用，降低开发成本。

### 4.2 3种衡量型看板、6种过程分析型看板介绍
每个监控页，会包含 1 个多维组合筛选器、1 个衡量型指标看板、多个过程分析型看板。

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925985351/46e7/7ed1/c61c/77683c6878613750697d5513cd8484c9.png)

#### 4.2.1 3种衡量型看板
衡量型指标看板为该场景下的首个看板，用于量化该场景的性能，同时根据该看板下指标的涨跌衡量该场景的优化结果；
该看板下指标的升降需要与用户的实际体验有正相关，对开发者进行性能优化有正向指引作用。平台抽象了 3 种衡量型指标：

**1.数值型**

看板作用:  数值型指标可统计出样本的平均值、分位值(P50、P75、P90) 的走势。分位值含义为: 将性能样本数据从低到高排序，第百分之 X 个的样本性能值作为该指标的 X 分位值。 P50 可用于衡量中位数性能，P90 可用于衡量长尾用户的性能。

适用场景举例:  如 FPS 值大小、内存大小等

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926029600/dafc/4dbf/54ac/bbe5adfa6bbdff572371055000a61c87.png?imageView&thumbnail=600x0)


**2.生命周期型**

看板作用:  是数值型指标的一种特例，开发者需要同时关注整体耗时与多个子阶段的耗时。
适用场景举例: 冷启动耗时、音频起播耗时。

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926025993/1bf5/643d/1316/741f2efa49861a9d5c84f32ad2ae24ac.png?imageView&thumbnail=600x0)

**3.样本量比值型**

看板作用:  样本量比值型的计算公式为 X样本量 / Y样本量 。 由于计算公式为样本量的比值，所以不具有 平均值、分位数 的统计意义。

适用指标场景举例:  非正常关闭率、音频播放错误率等

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926026951/888c/93f2/465b/6b104edf3b7bea70508f6d72e161e470.png?imageView&thumbnail=600x0)

#### 4.2.2 6种过程型分析看板
过程型分析看板用于对衡量型指标的波动做解构、归因分析。是面向开发者的，用于辅助发现问题。一个场景下会提供多个过程型分析看板。

平台目前设计了 6 种过程分析型看板：
- 多维对比-走势图看板
- 性能分档占比-走势图
- 维度占比率-走势图
- 维度分布排序图
- 指标值-正态分布图
- 特征维度聚合-Top列表

**1.多维对比-走势图看板**

看板作用:  用于对比分析不同维度值的性能走势差异，可用于性能变化的归因分析。选择 「对比维度」 和 「维度值」 后，看板将展示多条「维度值」的变化趋势。

场景举例:  举例来说，我们可以选择对比机型维度，并选择不同档位的机型，分析不同档位机型下的性能差异。
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926132978/18c8/2ee7/ded1/6f756675458bafb8a6bdd8416955944f.png?imageView&thumbnail=700x0)

我们也可以选择「应用版本」维度，并勾选样本量最大的几个应用版本，分析是否是由于某个迭代版本的性能变化，引起了整体性能的变化。
![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926133805/9984/79e8/66b4/aa8f16c2f6b358d15c5ce92720b0a1d9.png?imageView&thumbnail=700x0)

**2.性能分档占比-走势图**

看板作用:  对性能数据做分档，查看不同分档的占比趋势。可用于评估不同档位的变化情况。

场景举例:  如页面启动场景，可将耗时在 0~500ms 归为「好」，500~1500ms 归为「中」，1500ms 以上归为「差」。
![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926160733/c24c/e9a1/26fc/76f8dbf9fd0cbd5a18a98ce788c12f35.png?imageView&thumbnail=600x0)


**3.维度占比率-走势图**

看板作用:  提供 维度值占比率 的变化趋势，可用于归因分析。

场景举例: 以RN场景举例，该场景包含特征维度：『资源加载方式』、『API预加载是否命中』。

当『页面渲染耗时』指标升高时，开发者可通过该看板，分析出是由于资源加载走网络的占比升高，导致了
『页面渲染耗时』的升高。

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926188960/48ce/4e64/29db/840ade969417b460d1d03aa2b7d75060.png?imageView&thumbnail=600x0)

「API预加载命中率」= API预加载维度值中  命中次数 /  总次数

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926188973/f148/6ea2/e09e/81bf711928f34451faebc18c1e7f2ce1.png?imageView&thumbnail=600x0)


**4.维度分布排序图**

看板作用: 总览性地对比不同维度下的 采集量、性能差异。

场景举例: 如播放卡顿场景可以总览性地了解在哪些机型、版本下分布较高

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926223259/c7c2/b0b3/0b15/940d09e0ef3e30a14397f2302f35eedf.png?imageView&thumbnail=600x0)


**5.样本值-正态分布图**

看板作用:  精细化分析性能数据的分布情况

场景举例:  如下例可看出耗时区间在 450-500 ms 的样本量和样本占比率，意味着 10% 的用户在 450 ~ 500 ms 之间打开页面。累加占比的含义为 0 ~ 500 区间的样本量占比为 80%, 意味着 80% 的用户可以在 500ms 以内打开页面。

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926238047/fea3/b089/d425/abe95bd7c1acf00274a7624e3804ced1.png?imageView&thumbnail=600x0)

**6.特征维度聚合-Top列表**

看板作用:  按某个特征维度聚合，查看 性能概览、排序、走势。

场景举例:  以页面维度做聚合，对比不同页面的 样本量、性能 差异，并可按 样本量、性能 做排序。

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/34926247006/f937/fa85/20ef/ff615aab49f735a6c3983891c3518fc4.png?imageView&thumbnail=600x0)


### 4.3 页面开发过程
通过抽象后，我们来看搭建一个如下复杂度的报表(客户端-页面启动监控)所需的开发成本:

这个页面包括一个头部筛选器 一个数值型的衡量看板:

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925396097/19ab/a8a7/b462/e230c3bc677fcf64c977b708ce0cfc31.png?imageView&thumbnail=600x0)

维度对比走势看板、样本值分布图看板:

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925405215/bd42/975c/405b/0257d8bafd2652bce1ec84c721959f61.png?imageView&thumbnail=600x0)

维度值分布看板、页面维度的详情看板:

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925411195/c70f/3c0d/b111/e71777fded4276c5a395b1bf01198985.png?imageView&thumbnail=600x0)

开发这样复杂度的页面过程:

1. 声明报表需要的头部筛选器
> filterItems 中的每一个 key 会映射至后端数据源。

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925455221/0efa/5aa0/a2eb/65535f1f3aca1fc2a79be2cd243b96dd.png?imageView&thumbnail=600x0)

2. 声明报表对应的数据源
> 通过数据源声明查询的表，统计的字段，查询的固定条件(会组合上筛选器条件)等。

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925471089/a16e/6220/f59c/3b2cb5939bfaefce468e40d38583af33.png?imageView&thumbnail=600x0)

3. 声明需要的看板
> 通过 graphType 声明所需的看板类型，apiParams 关联后端数据源。

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925491372/16d0/5d31/a43a/580a7ab3228aa5e81037530ae1fa4f11.png?imageView&thumbnail=600x0)

4. 将配置传入 Schema 容器

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925495193/cb36/8e7e/410f/e5c2e23a6136a1c617e6030bd58533e0.png?imageView&thumbnail=600x0)


经过以上声明式的描述，我们快速完成了前端页面搭建。笔者在开发过程中实测，在开发客户端-页面启动监控项时，从数据消费建模到可视化报表呈现整体仅用了 1 个小时的时间。

### 4.4 智能分析的初步尝试

在提供丰富的报表供业务分析外，云音乐在智能辅助分析方面也做了初步的探索，如业务发现某个 ReactNative 应用未达到基线时
，除了通过手动地调整头部筛选器进行逐个维度的下钻分析，或是通过过程分析型看板分析外。
开发者也可通过辅助分析功能，进行快速归因分析。

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925816312/9a43/b4af/8482/ff6d4c1f1c41fe0342773de64b65a317.png?imageView&thumbnail=900x0)

平台会通过分析树的方式，从整体维度进行拆解，展示不同维度的样本量、是否通过基线情况，辅助开发者快速判断出劣化的维度。

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925860525/7db5/40af/63ed/45c7daaf5cdefd47f1fe7ebd435040dc.png?imageView&thumbnail=900x0)


### 4.5 可视化服务的可观测性建设
同样为了保障可视化服务本身的稳定性，笔者也在开发过程中设计了关键埋点。包括:

整体的慢查询:

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925724329/f183/a4e9/7ab9/163ce5a7145419db1d89e98c9269187f.png?imageView&thumbnail=900x0)

分表的慢查询:

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34925766340/af0c/106f/8482/2f23fa42ebb56ba03913e1817d775f59.png?imageView&thumbnail=900x0)

## 五. 总结

本文主要介绍了云音乐大前端性能监控服务在从 0 到 1 快速搭建期的整体设计与实现。重点介绍了配置式在线消费建模服务与基于 Schema 的报表搭建能力。
目前云音乐大前端性能监控服务在云⾳乐的⽤户性能优化、防劣化治理、发版决策等研发活动中承担着关键作⽤。未来云音乐也会在智能分析方向上持续发力，为开发者提供出更易用的辅助分析功能，降低开发者的数据分析门槛。