---
slug: tsdb-part2
title: Corona 技术专题-时序数据分析(下)
authors: [kkdev163]
tags: [时序数据库、clickhouse、es]
---

### 一. 前言

在 [Corona 技术专题-时序数据分析(上)](/blog/tsdb-part1)中，我们介绍了什么是时序数据分析、时序数据库的特点 和 经典时序数据库 InfluxDB。本篇文章将继续围绕时序数据分析专题，介绍 ElasticSearch、ClickHouse 两款数据库在时序分析上的应用。

### 二. ElasticSearch

#### 2.1 简介

Elasticsearch 是一款基于 Apache Lucene 的分布式搜索和分析引擎，用于全文检索、日志分析、数据可视化等场景。它支持实时搜索、数据聚合、自动化分片和复制等功能，并提供了 RESTful API 和丰富的插件生态系统。Elasticsearch 被广泛应用于企业级搜索和日志分析等领域。

#### 2.2 在 Corona 中的应用场景

在设计 Corona 平台时，我们引入 ES 的主要目的是用于 存储异常监控的原始日志，并借助 ES 的全文检索能力，提供丰富、灵活的日志搜索功能。

下图为 Corona 的搜索面板，在此处我们意图搜索包含 undefined 信息的错误日志。

<img src="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27195122214/ecce/e54c/d851/cacd03354eaae9fa27a3777cb01a88f0.png" width="400"/>
下图为 Corona 的搜索结果列表，展示了包含 undefined 错误信息的 Issue。

<img src="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27195252659/b9d4/8b16/d67f/430607bd6805c276d19df601b0d7ff43.png" width="400"/>

关于 ES 搜索的概念，在这篇文章中不作更多展开，感兴趣的读者可以参考[ES(ElasticSearch) 搜索基本概念简介](https://kms.netease.com/article/52242)。

除了日志的搜索功能外，Corona 也希望为用户展示异常发生的时序趋势图。由于原始日志的存储我们已经使用了 ES 进行存储，在设计时序分析功能实现时，我们其实是有两条技术实现路线可供选择:

1. 将原始日志另写入一份至消息队列 -> Flink 聚合 -> InfluxDB
2. 使用 ES 的聚合能力，基于原始日志直接做时序数据分析。

考虑到架构的简洁、减少依赖等因素，并参考了 ES 与 InfluxDB 的性能对比文章后，我们最终选择了方案二。 以下是使用 ES 做的一些时序分析功能演示:

下图为应用整体的异常趋势图:
![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27195565010/e546/0e4f/6ef9/256ae76ed1037ae0be842c3e05a899bb.png)

下图为单条 issue 的异常趋势图:
![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27195581099/6821/aa64/e406/c29529b8e3608cfeaeff0f6b137c900b.png)

#### 2.3 表结构设计及查询示例

ES 在写入数据前，不要求建立表结构。ES 会根据写入的数据自动推断数据类型进行存储。但为了避免类型的错误推断导致后续查询功能不符合预期，建议是在写入数据前，对表结构进行约束。

ES 对表结构进行约束的方式是创建模板。模板中可包含 索引匹配规则 (可理解为表名)，表中的数据结构类型。

下面我们创建一个演示的模板，模板中的索引包含了 5 个字段

- project_id: 应用 ID，类型为 long
- issue_id: 聚合错误 ID, 类型为 long
- os: 上报操作系统，类型为 keyword
- ts: 上报时间，类型为 date
- error_obj: 错误详情对象，JSON 类型，JSON 中包含 message 字段，message 为文本类型，支持分词检索。

```JSON
PUT _template/template_web_demo
{
   "indx_patterns": ["web_demo_*"],
   "mappings": {
      "_doc": {
          "project_id": {
              "type": "long"
          },
          "issue_id": {
	          "type": "long"
          },
          "os": {
              "type": "keyword"
          },
          "ts": {
              "type": "date"
          },
          "error_obj": {
              "properties": {
                 "message": {
                     "type": "text",
                     "fields": {
                        "keyword": {
                            "type": "keyword",
                            "ignore_above": 256
                        }
                     }
                 }
              }
          }
      }
   }
}
```

以下是一些示例数据：

```javascript
[
  {
    id: 1,
    project_id: 1,
    issue_id: 1,
    os: "iphone",
    ts: "2023-04-27 15:00:00",
    error_obj: {
      message: "Cannot read properties of undefined (reading 'providerLog')",
    },
  },
  {
    id: 2,
    project_id: 1,
    issue_id: 2,
    os: "android",
    ts: "2023-04-27 15:01:00",
    error_obj: {
      message: "e.forEach is not a function')",
    },
  },
];
```

查询示例: 查询项目 id 为 1 的所有 issue 的最近 7 天每日上报量走势

```JSON
{
  "query": {
    "bool": {
      "filter": {
        "bool": {
          "must": [
            { // 指定查询的项目id 为 1
              "term": {
                "project_id": 1
              }
            },
            { // 指定查询时间范围 >= 2023-04-21 00:00:00
              "range": {
                "ts": {
                  "gte": 1682006400000
                }
              }
            },
            { // 指定查询时间范围 <= 2023-04-27 23:59:59
              "range": {
                "ts": {
                  "lte": 1682611199000
                }
              }
            }
          ]
        }
      }
    }
  },
  "aggs": { // 聚合，按 issue_id 字段做聚合
    "issueId": {
      "terms": {
        "field": "issue_id"
      },
      "aggs": { // 子聚合，按时间1天粒度做聚合
        "series": {
          "date_histogram": {
            "field": "ts",
            "interval": "1d",
            "format": "yyyy-MM-dd HH:mm:ss",
            "time_zone": "+08:00"
          }
        }
      }
    }
  }
  "size": 0, // 只统计聚合结果，不返回原文档
}
```

对于首次接触 ES 的同学来看，这个查询条件看上去会比较地复杂。上面的查询如果用 InfluxDB SQL 的话其实就是:

```SQL
SELECT COUNT()
FROM `web_demo`
WHERE
  project_id = 1 AND
  time>=1682006400000 AND
  time <=1682611199000
GROUP BY issue_id, time(1d);
```

### 2.4 数据读写架构

> 本节我们只介绍 ES 在 Corona 时序数据场景下的应用层架构

**1) 基于原始日志做时序分析**

Corona 平台的异常日志原始日志由异常日志清洗服务做预处理后批量写入 ES。可视化管理后台在后续可直接请求 ES 做时序数据分析。
![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27201538834/5897/e416/6bb2/5282867cd6389055ddaf92e95df0bab2.png)
**2) 基于聚合数据做时序分析**

在 Corona 的告警场景，考虑到查询聚合表会比查询原始表有更高的性能，并且为了方便追溯告警的历史走势，我们在应用层配置了定时任务做分钟级的数据聚合，告警任务在执行时，直接读取分钟级聚合表。
![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27201542231/258d/21ab/a664/34ba5a29faff6ea0a4817507acaf6646.png)

### 2.5 存在的痛点

Corona 使用 ES 做时序分析的场景相对来说还比较有限。对于 ES 在时序分析下的性能，是否存在瓶颈，尚未有深入的探索。我们的痛点主要是集中在使用姿势上。

通过 2.3 节 的示例，读者不难发现，在时序分析场景，ES 查询的请求体的书写 和 理解 相对于 InfluxDB 来说，具有一定的复杂度。 如果我们的项目需要用到 ES 来做时序分析，建议是在应用层封装一些 Utils 工具类，协助做请求体生成 和 数据解析。NodeJS 环境下推荐基于 [bodybuilder](https://www.npmjs.com/package/bodybuilder) 做上层的封装。

### 三. ClickHouse

#### 3.1 ClickHouse 简介

ClickHouse 是 OLAP(on-Line Analytic Processing) 联机分析处理数据库。在数据分析时，可直接对亿级原始日志做在线的实时聚合计算，并且能在秒级给出聚合结果。

#### 3.2 在 Corona 中的应用场景

Corona 在引入 ClickHouse 之初，是为了补充原有 性能监控架构 的分析能力(如多维的分位数 P50、P95 统计能力)，随着我们对 ClickHouse 使用经验的积累 和 特性原理的认识，我们发现在 Corona 的性能分析应用场景上，ClickHouse 能够完全取代 Flink 、InfluxDB 的作用。并且整体的架构更加简洁，数据分析的方式也更加灵活、轻便。

目前 Corona 上的建设的性能监控指标，已完全由 ClickHouse 提供存储与数据分析的能力。主要的分析功能有:

1). 基于上报数据维度字段，提供多维的组合筛选能力
2). 在线实时聚合计算，统计 平均值、分位数、PV、UV 走势

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27203697679/8f89/97b2/e027/7a308942880eee04a2ab0c2cf155e706.png)
3). 按照某个维度聚合，对比不同维度值的走势

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27203727019/b63c/a464/52d4/c878914b569e737d0f99c7b283d811f0.png)
4). 查看不同维度值的占比
![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27203746572/18c9/d7bb/79ff/9379c160676d61043f15a56bf2f4795f.png)
5). 统计指标值的详细分布情况
![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27203752779/7787/66d2/0044/82ac157d3e60894c677232dda1c5a091.png)

#### 3.3 表结构设计及查询示例

ClickHouse 在写入数据前，需要使用建表语句创建表结构。以 ReactNative 启动耗时监控为例, 以下为示例的表结构:

```SQL
CREATE TABLE rn_monitor_cold_boot_stage_local
(
    `appName` String, -- 应用名，如 云音乐
    `osName` String, -- 操作系统名
    `appVersion` String, -- 应用版本
    `rnModuleName` String, -- ReactNative 模块名
    `deviceTag` String, -- 设备性能
    `uploadTime` DateTime, -- 日志到达服务端时间
    `uid` String, -- 用户 uid
    `stageName` String, -- 阶段
    `stageCost` Float32, -- 阶段耗时
)
ENGINE = MergeTree
PARTITION BY (appName, osName, toYYYYMMDD(uploadTime))
ORDER BY (rnModuleName, uploadTime)
TTL uploadTime + toIntervalDay(90)
SETTINGS index_granularity = 8192, use_minimalistic_part_header_in_zookeeper = 1
```

在示例表结构中，uploadTime 为时间列， stageCost 为数值列，其他字段都为维度列。

MergeTree 是 ClickHouse 中最重要的表引擎，这种表引擎的特点是，数据在批量写入时，ClickHouse 会将数据写入新的临时分区中, ClickHouse 会在后台对 临时分区 与 已有的数据分区 做 Merge，以此来提高数据的写入性能。

PARTITION BY 数据的分区策略，示例表以 appName, osName, 上报时间(天) 所组成的联合键 建立分区。 ClickHouse 会为每个分区建立一个目录，合理的分区策略，可以让 ClickHouse 在后续查找数据时，直接选中分区目录，大大降低扫描的数据行数。

ORDER BY 数据的排序键，ClickHouse 默认会为排序键建立索引。

TTL 数据自动过期时间，90 天。

index_granularity 索引粒度为 8192 行(可理解为 8192 行数据，建立一条索引)。

示例数据如下:

```JSON
{
   "appName": "music"
   "osName": "android",
   "appVersion": "8.9.0",
   "rnModuleName": "rn-playlistrank",
   "deviceTag": "高端机",
   "uploadTime": "2023-04-27 12:00:00",
   "uid": "9999999",
   "stageName": "render",
   "stageCost": 1000
}
```

查询示例:

```SQL
SELECT
	toStartOfDay(uploadTime) as "time",
	avg(stageCost) AS "avg",
	quantiles(0.5, 0.9)(stageCost) AS "quantiles",
	count() AS "pv",
	uniq(uid) AS "uv"
FROM rn_monitor_cold_boot_stage_shard
WHERE
   uploadTime>=1682006400 AND
   uploadTime<=1682611199 AND
   stageName='render' AND
   rnModuleName='rn-playlistrank'
GROUP BY toStartOfDay(uploadTime)
ORDER BY toStartOfDay(uploadTime) ASC
```

查询结果示例:
![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27206521249/9c51/5849/7d58/8e6680e9d7da26baad1b1941e7ad81af.png)

以上的查询示例，包含了 平均值、分位值、PV、UV 的统计，是 Corona 性能监控分析最基础 SQL。其他的性能分析都是基于该 SQL 的变种。

#### 3.4 数据读写架构 及 配套建设

得益于 ClickHouse 的高性能 (举例来说，当上述的示例 SQL 的扫描数据量级达到 6 亿行时，也仅需 2 秒就可以完成数据分析），
![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27206860033/532e/16ce/5261/fe4aa4e5ecd9abd708917bd8ba3d0e11.png)
在绝大多数的场景，我们可以直接使用 ClickHouse 直接对原始数据做实时聚合分析，这也使得我们的性能分析架构变得简洁。

**数据写入**
在数据写入前，我们使用自建的「性能日志处理服务」订阅不同的 性能日志，每个消费者订阅一种日志类型，在预处理后，会根据每张表的建表分区规则，在服务端对数据做预分区，每个分区的数据单独批量写入 ClickHouse。以此达到 批量写入 同时又减少 ClickHouse 在后台对数据做再次分区的开销，提高写入性能。

数据批量写入时，使用了自建的集群版 ClickHouse NodeJsClient，做数据 Schema 校验 并 随机请求集群中的 Node 达到数据均匀分片的目的。
![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207198216/af50/824e/2c70/8b35903bd05edb81a90aaa0a8272382e.png)
**数据查询**
细心的读者可能发现了，我们在上面示例中，我们所建的示例表，是以 `_local` 结尾，而我们的查询示例表是以 `_shard` 结尾。

事实上，我们在建表时，会同时创建 local 表 与 shard 表。在数据写入时，性能日志处理服务是直连每个 ClickHouse node 向 local 表写入数据。可以理解为每个 node 只保存了 整个完整表的 1/4 行的数据。在查询时，查询任意一个节点的 shard 表，ClickHouse 会在后台自动汇总 4 个 node 的全部数据做分析。
![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207917384/122c/e08b/999b/5008a4c20dcc5edabb16e182b21df83f.png)
注: 该图 local 表中的行号仅用于示意分片的数据量级，并非实际的存储或索引行号。

在自建的性能日志处理服务 和 可视化后台 上，我们也加入了一些监控指标，来观测 ClickHouse 集群的读写健康度。

**写入侧监控:**

- 每分钟 批量写入的请求数
- 每分钟 批量写入的日志数
- 每分钟 不同分区的写入日志数
- 每分钟 忽略的日志数(Schema 校验不通过)
  ![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207965120/4a7d/d9c6/43d7/396230093cd4f2e5a2f6f45fa0bf8363.png)
- 数据消费的延时
- 数据批量转换耗时
- 数据批量转换条数
  ![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207977929/ca03/235f/f6ad/052ffea26bf69274158d7da4c08c531d.png)
- 数据分区转换并写入 ClickHouse 耗时
- ClickHouse 写入请求耗时
  ![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207991931/70c9/2b9c/ed2f/99cf455cbf0d5c155ca48bb1646d69d2.png)

**查询侧监控**:

- 每分钟总查询次数
- 每分钟平均查询耗时
- 慢查询 SQL 详情
  ![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27208225232/e89a/eead/4021/d81fd0e8f671586b7576401debacd15c.png)

#### 3.5 存在的痛点

ClickHouse 在 Corona 的性能分析场景满足了我们绝大多数的诉求，如果非要让笔者想一个痛点的话，那可能是缺少像 InfluxDB 一样的 CQ ( Continue Query) 能力。什么情况下需要 CQ 呢？

ClickHouse 虽然具有强大的实时在线分析能力，但是他的处理性能也是有资源开销的。在机器资源有限的前提下，如果需要做时间跨度大，数据量级超几百亿的分析，也是有相当大的资源开销和等待时间的。

举例来说，在 Corona 比较分析 App 版本性能走势场景时，由于 App 发版时间跨度大，每个版本仅存在一段时间的高峰流量期，如果需要客观地对比每个 App 的性能，需要让每个版本的样本量尽可能大，我们如果还是选择在线分析的话，就需要把 时间跨度拉到好几个月。此时数据分析的等待时间就会特别长。

为了解决等待耗时长的问题，我们还是转为离线分析的思路，在应用层，每日对 Top3 日活的版本做性能归档快照。在分析 App 版本走势时，使用归档快照数据做分析。

如果 ClickHouse 原生具备 InfluxDB 的 Continue Query 能力，可能实现起来会相对容易些。

#### 3.6 更多 ClickHouse 资料

- [ClickHouse 使用实践与规范](https://kms.netease.com/article/48727#1max_concurrent_queries)
- [ClickHouse 中最重要的表引擎：MergeTree 的深度原理解析](https://www.cnblogs.com/traditional/p/15218743.html)
- [监控体系引入 ClickHouse 调研](https://docs.popo.netease.com/lingxi/3d876d69fb66428d9b23e09f67ac099b#edit)
