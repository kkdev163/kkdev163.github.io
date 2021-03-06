---
slug: web-apm
title: 云音乐前端性能监控平台
authors: kkdev163
tags: [web, performance, apm]
---

演讲 PPT: [云音乐前端性能监控平台](https://docs.google.com/presentation/d/18qGCugsDHTBBKgdpR-hsF9T4Blg2Yt_cv74NNxkfMJ0/edit#slide=id.g28626a33313_2_982)

演讲场所: 网易-集团前端沙龙

演讲简介: 介绍了云音乐前端性能监控平台。主要包括:

- 1、平台定位、功能模块介绍。
- 2、平台架构设计与搭建之路。
- 3、平台存在的问题与后续的改进规划。

演讲时间: 2019-06-13

:::info
以下为演讲逐字稿
:::

<!--truncate-->

# 演讲逐字稿

### 前言

大家好，我是 kkdev163，来自云音乐前端技术组，今天带来的主题是云音乐 WebAPM 平台。

本次分享会分为三个部分，第一部分将介绍平台的定位及已有的功能模块。希望能让大家了解到平台的功能为何这样设计，了解这个平台可以解决什么问题，对大家的工作可以有哪些帮助等。

第二部分将介绍平台的架构演进之路。

希望能帮助大家掌握搭建通用监控系统所需的技术栈、了解其中的难点与解决思路。为后续解决相似的架构问题，提供参考。

第三部分将介绍平台后续的规划

会点出平台当前存在的不足与后续的改进思路，希望能引起大家的共同思考，帮助平台持续改进。

### 第一部分

我们开始第一部分，平台的定位及已有功能模块的介绍。

- APM 是应用性能监控的简称。
- 它应该帮助开发者提升应用性能质量。
- 它应该提供一种衡量标准，能够证明我们产出的应用具有良好的性能与用户体验。
- 它的终极目标是 Make the web more awesome.

如果从监控手段来分区，平台的功能大致可以分为两个方向。

- 真实用户性能监控，它需要在页面上安装 SDK, 在用户访问页面时，采集上报用户真实的性能数据。

- 实验室合成测试监控，业界常见的性能测试有 Lighthouse、WebpageTest 等。它通过持续地测试来达成监控目的。

#### 真实用户性能监控

我们首先来看下真实用户性能监控。
开发者安装 sdk 后，可以看到应用的访问量数据、页面加载时性能、页面运行时性能、并且可以通过数据分析模块，来进行多维度的数据分析。

##### 访问量数据

访问量数据包含 PV/UV、访问量 Top10 页面、用户浏览器占比、操作系统占比等。

通过这一部分数据，可以让我们对使用我们应用的用户更加了解，可以支撑我们做一些决策，如不再支持某款浏览器、或是性能测试需要覆盖到某个系统版本以上。

##### 加载时性能

APM 会给出不同页面的加载时性能数据，这一部分的数据源是通过 W3C 性能工作组产出的 Navigation API 采集到的。

APM 会计算出页面加载时，关键时间节点的走势，如首次渲染时间、页面完全加载时间等。

除了走势，我们还计算出一段时间内，页面加载过程中各阶段耗时的瀑布流。可以较清晰的看到，页面加载过程中，在哪些阶段有较高的时间开销。。

同时我们也基于 IP 分析出各地区用户的加载性能情况。

并给出了性能样本的分布，如果需要验证应用的秒开率，95%分位数等可以在这里验证。

应用的加载时性能数据是这几块。其中有些部分我们可以有主动优化的能力，如 DOM 解析、资源加载耗时等。

有些部分我们不能做什么，如 TCP 连接、CDN 的地区网络状况等。。但是有了这部分数据，有了与其他应用的对比后，我们也可以尝试去推动上下游进行优化。

##### 页运行时性能

页面运行时性能我们主要通过 W3C 性能工作组产出的 Longtask API 采集页面运行过程中的长耗时任务。

并给出了长耗时任务的走势及持续时长的分布情况。。

那什么是长耗时任务 Longtask 呢？
我们打开 Chrome 的 Performance.

主线程的工作是由这样一个一个的 Task 组成，当一个 Task 的执行超过 50ms 时，就可能会影响一帧的渲染，造成页面的卡顿。。

Longtask 可以用来帮助侦测页面运行时的卡顿率。

##### 数据分析模块

前面的模块都是按照页面整体维度，给出一个性能指标。。

而在数据分析模块中，我们可以选择不同的维度进行分析。。

比如我们这里选择了操作系统维度，来看一看 Android 与 iOS 设备的页面加载性能走势。。可以看到 Android 要比 iOS 高出一秒左右。

内置的事件有

- 页面访问量
- 加载时性能
- 运行时性能

可选的分析维度有

- 页面地址
- 浏览器版本
- 操作系统版本
  等。。

除了这些系统预设的指标之外呢，我们还提供了自定义埋点 API。

可以在数据分析模块，查看到我们开发侧关心的一些埋点事件。可以应对大部分的自定义埋点需求。甚至是 Node JS 服务端的一些埋点，也可以打到 WebAPM 平台中。。

#### 实验室合成监控

APM 平台底层采用的是谷歌的 Lighthouse。

在这个页面,我们只需输入一个 url 地址，就可以发起一次 Lighthouse 测试。

等待数秒后，会展示测试的结果。

我们提供了原始的测试报告供下载。

并从测试报告中提炼了一些关键的指标，这些指标有 FCP、FMP、Speed Index、First CPU Idle、TTI 等。

需要说明的是, 这些指标不是从浏览器的 API 中采集的，他是对页面加载过程中逐帧进行截屏，根据图像算法，来计算出以上的几个指标。所以他会更接近用户的直观感受，会比 RUM 中的指标更会准确。

我们从分析的结果中，还提炼了页面首屏的加载资源，引导开发者去尽量减少关键渲染路径中的资源大小与数量。。

其实谷歌的 Chrome 中已经内置了 Lighthouse 的测试功能，那么我们为什么还要在 APM 平台上来测试呢，有什么区别吗？

我们先来铺垫一个细节，Lighthouse Performance 的分数是根据这五项的指标，按照权重计算出来的

- first-contentful-paint 3
- first-meaningful-paint 1
- speed-index 4
- interactive 5
- first-cpu-idle 2
- estimated-input-latency 0

这几项结果与测试浏览器所在的宿主机的网速、CPU 等都是相关的。所以在不同的宿主环境下测试，结果会存在波动，说直白点就是领导说你的 Lighthouse 分数很低啊，你说我电脑上是好的，这没有说服力。。

了解了这个细节后，我们来回到为什么使用 APM 平台来测试会更好？

首先 APM 的 Lighthouse 测试是在服务端的 Docker 容器内，使用无头浏览器进行测试，所有的页面会在一个相对稳定与一致的宿主浏览器环境下进行测试。。优势一就是测试的宿主环境相对一致。

第二点，我们可以把这个页面加入到定时测试任务中。APM 平台会以 10 分钟一次的频率对页面进行测试，对多次的测试结果求均值。。优势二是降低了减少了单次测试的不稳定性。

第三点，我们将一次次孤立的测试结果，关联上了时间维度，形成了页面性能的走势，对页面的性能优化，可以很明显的体现在走势上，更加地有说服力。。

第四点，我们将孤立的一个页面测试，与组织内的其他页面形成了关联，开发者除了得到一些性能数据以外，也可以更为直观的了解到，自己的页面在组织内到底处于哪个阶段。

我们可以向着组织内的标杆看齐，在此向古典专区的开发者杨老师致敬，我们需要有榜样的力量。。

除了上面的优势外，我们还做尝试与 H5 搭建工具合作。
在页面制作完发布上线时，会将 url 与运营人员的邮箱发送的 WebAPM 平台，平台会将页面加入到定时测试中，并将页面的这一次测试结果与组织内的排名发送给运营人员。。

邮件内会包含上线建议，比如优化超标的图片资源等。。

#### 一部分总结

介绍完 WebAPM 的功能后，我们通过对比做一个总结。。

Lighthouse 的优势是

- 无需接入 SDK, 一个 URL 即可测试。
- FCP FMP 等性能指标更贴近用户直观感受。
- 性能的评分较为的可信。。

Lighthouse 的短板是：

- 如果依赖手工录入 url，页面可能覆盖不全
- 需要模拟页面的前置依赖，如登录等。
- 测试的机型较为单一。

真实用户性能监控的优势是：

- 页面覆盖全
- 无需模拟，用户正常访问就可以采集到页面性能数据
- 机型覆盖广、数据样本量大

真实用户性能监控的短板是：

- 需要接入 SDK, 数据上报存在开销
- 性能指标依赖于浏览器的实现
- 性能指标与用户的感知存在一定的偏差

其实 WebAPM 就是一个数据平台，我们可以利用这些数据，参与需求的决策、主动地发起性能优化、推动上下游优化、优化的成果可以成为我们述职、CPP 的材料。。

### 第二部分 平台的架构演进之路

我们先介绍一个监控系统的简化模型。。

首先需要有一个数据采集端，他可是一个 sdk，日志采集器，也可以是一个传感器。

数据采集后会上报到服务端，服务端对数据做部分的清洗和加工后，写入到时序数据库中。

当前台需要可视化展示时，服务端会发送聚合查询到数据库，然后加工成可视化数据后，返回给前台做展示。

在 WebAPM 中，数据采集端就是浏览器 SDK, 服务器就是 Node JS，时序数据库是 Influx DB, 可视化展示是 Antd。

这个模型中，大家可能对 Influx 最不熟悉了。。

在介绍后续的架构演进之前，我们首先来介绍下，什么是时序数据库？

我们以 Influx DB 为例展开介绍。。

从这个表中，我们可以看到每条记录都包含时间字段，这是时序数据库的特点，并且时序数据库中内置了大量的基于时间的聚合函数。。

比如求一段时间内均值的 Mean 函数。

这段 SQL 就是计算过去 5 分钟时间内，tcp 和 load 指标的平均值。。

我们执行这条 SQL 后，就得到了两个指标的均值。。

事实上 WebAPM 的加载瀑布图正是通过这条 SQL 来实现的。

基于上一条 SQL，我们加上 GROUP BY time()，他就可以计算出过去 5 分钟内，每一分钟的平均值。诶，这个就是关联上时间维度的走势啦。。

事实上，WebAPM 的加载耗时的走势就是通过这条 SQL 来实现的。。

每次，我们已经掌握了时序数据库的基本用法。。

OK, 这个监控架构我们也掌握了。。

但是，我们仍然有些细节需要注意的。

比如当我们从过去 5 分钟，变为计算 7 天的平均值，并且假设我们要统计的是一个大量流量应用，且 7 天有 1000 万条用户数据记录。。

我们是否可以简单粗暴的把 5m 改成 7d 呢？来，我们试一下。。

不好意思，我们真这么做的话，哨兵马上就要报警了，告诉我们内存吃紧了，CPU 要耗尽了。。

那我们怎么来计算这 1000 万条记录，对他们求均值呢？？

其中一个解决思路是，把计算均摊到每分钟。。

原来我们要直接计算 7 天 1000 万个数据点。。

现在我们不这么做了。。

我们在收到数据的时候，就定时的，每一分钟，去计算这一分钟的数据聚合结果并把它保存起来。。

那么这样持续的计算，7 天就会有 10080 个计算结果。。

当我们需要去计算 7 天的均值时，我们不需要再从 1000 万个原始数据中求均值，我们只要在 10080 个数据中计算即可。。

数据的规模量大大降低，当然我们还可以再降，比如一小时计算一次，我们不展开讲。。

那么现在的问题就是如何定时做每分钟的计算呢？？

实际上 Influx 已经提供了这样的能力，叫做 Continue Query，我们简称 CQ 吧。。

创建一个 CQ 很简单，就跟查询是一样的。。

他会定时的，把原始数据，做聚合计算，然后把计算的结果写入到 CQ 表中。。

现在我们回到刚刚的需求，我们只需要稍作变更，从 CQ 表中请均值即可。。。

那么引入 CQ 后，我们的存储与计算模型就长这样了。。

没错，我们已经掌握了时序数据库的高级用法了。

但是随着应用接入越来越多，存入的原始数据就越来越多。。

Influx 会对存入的数据建立内存索引，索引的规模可以用 Series 这个指标来衡量，通过官方文档的图片，我们可以看到，Series 数量级与内存开销的关系图。。

我们当前 Series 的数量级已经达到了 200 万，云主机上的内存压力是蛮大的。。

我们如何来缓解这个问题呢？

其实我们可以在写入数据库前就将原始的数据做聚合，只存入聚合后的数据，那么就可以缓解 DB 的压力。。

现在的问题变成，如何在存入数据数据库前做数据的聚合。。

我们可以直接在 Node JS 上做聚合计算吗？

如果我们的 Node JS 是单机部署的话，只要在 Node JS 上做一个 1 分钟的数据窗口，将聚合后的数据写入数据库，这样的模型看起来好像也是挺合理的。。

但是如果我们的 NodeJS 是集群部署。。

我们如何来协调每一台机器上的数据窗口，进行同步、进行数据结果的汇总，设计将变得复杂。。

如果时间窗口由 1 分钟变成 1 个小时、甚至 1 天，Node JS 也会成为瓶颈。。

如果有一个做聚合计算的中间件就好了。。Flink 就是干这件事的。。Flink 很牛，但是在这里，我们先简单把他理解成做聚合计算的中间件。。

我们来看下引入 Flink 后的数据流。。

首先 SDK 将数据上报到 NodeJS, NodeJS 对数据做清理和加工后，发布到消息队列的原始数据队列里。。Flink 订阅了这个数据，会从队列里不断地取出数据，并根据配置的时间窗口做集合计算，然后将计算后的结果写到计算结果队列中，NodeJS 订阅了这个队列，在收到数据后，将聚合的结果写入到 InfluxDB。

后续前台需要查询数据，仍然是从 InfluxDB 中读取。。

Flink 很牛，那我们应该怎么玩呢？是要自己搭吗？不用，我们现在已经有这样的基础设施。。其他部门可能也都有。。

云音乐 Flink 计算平台-Magina, 在上面我们可以配置一个计算任务的数据输入源，数据输出源，和对数据的操作。。

输入与输出我们这边就是消息队列了。

操作可以通过写 SQL 或者开发一个 Java JAR 包的方式。。

我们这里演示的是 SQL。

我们只要知道这个平台可以做聚合计算、并且操作很便捷就可以。。具体的语法可以后面再了解。。

那引入 Flink 后有哪些优势呢？

首先我们降低了 Influx DB 的存储与计算压力。。
那可能有同学会疑问，你自己的压力小了，别人的压力大了啊，你这是甩锅。。

不是这样的，人家 Flink 平台，肯定是可以动态扩缩容的，可以动态变更算力，我们把计算统一到他这里管理，我们的 Influx 就不需要那么高的配置，对于整个组织来说，是节约资源。。

第二个优势是 Flink 可以通过配置自定义聚合函数，那么我们对数据的加工能力将不受限于 Influx DB 内置的聚合函数。。

第三个优势是
在使用 Influx 社区单机版的前提下，我们整个系统的架构更具有弹性的高可用方案。
有了消息队列以后，我们不需要为了应对峰时的流量而无限提高 Influx 的配置，而且 Influx 挂掉后，数据依然是在聚合并写到消息队列中。。等 Influx 恢复后，数据可以继续写入，挂掉这段时间的数据不会丢失。。

OK, 这就是为大家介绍的通用的监控架构。。我们的时序数据库可以是 Influx DB 也可以换成 ES。
前端展示我们可以自己开发，也可以使用开源的可视化 Grafana，无需开发，只要通过配置就可以做可视化展示。。

这个监控架构有什么用呢？？
其实后端提供的中间件、微服务，都会对服务做监控，以保障服务的可靠性。。那么随着 Node JS 的大力发展，我们前端后续可能也会提供出一些微服务，那么这些服务的保障就需要监控。。如果我们部门的基础设施，无法满足我们的需求。。那么我们就可以自己搭一个监控。。

### 未来规划

最后我们聊一聊未来的规划，

#### 数据精细化展示

我们当前的真实用户数据展示中，会有数据的波动，其中有一部分原因可能是极端性能状况引起。

后续我们引入 Flink 后，可以通过自定义的聚合函数，将头尾 5%的极端数据剔除后请均值。。

#### 性能对比

我们现在通过 Lighthouse 的组织排名，可以比较直观地了解到自己开发的页面的性能水平，与其他页面的差距等。。

但是真实用户性能这块，我们应用的数据仍然是比较孤立的，开发者其实比较难以知道，自己的应用性能到底处于什么水平，是好是差。。

- 后续会考虑将组织内的性能数据，建立性能分档，每个档位对应一个分数，计算出应用的评分。。

- 将相同业务场景的应用进行对比，如同样都是云音乐小程序、同样都是 SSR 的架构
- 并且基于业务场景，给出针对性的优化建议。。

#### Influx 单机版问题。

实际上，我们当前在用的是饿了么的 Influx Proxy 方案，可以通过配置成数据双写，来做数据的备份，以达到高可用的目的。。

也可以配置成数据分片，来提高整个集群的存储计算能力。。

但这个还不是最完美的。。杭研的 NTSDB 是真 Influx 集群，后续我们可能会迁移到 NTSDB 来。。

另外也借着这个机会，感谢 NTSDB 的作者，范欣欣同事，他对 WebAPM 的架构改进提供了指导。。

### 总结

首先我介绍了平台的定位及已有的功能，按照监控手段划分，平台可以分为 2 个方向。

其次我介绍了平台的架构演进，为大家介绍了通用的监控系统技术栈和其中的难点与解决思路。。。

最后我介绍了平台后续的规划，包括精细化数据分析、应用性能对比和 Influx 集群迁移。

感谢大家的耐心聆听，本次分享就到这里。。最后是交流时间。。
