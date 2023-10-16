---
slug: tsdb-part1
title: Corona 技术专题-时序数据分析(上)
authors: [kkdev163]
tags: [时序数据库、influxdb]
---

### 一. 前言

在 Corona 平台的技术体系建设中，时序数据库承担了时序数据的「存储」和「分析」 的关键作用。本系列文章将分为上、下 两篇 介绍三款数据库在 Corona 时序分析场景下的应用。 上篇介绍 InfluxDB ，下篇介绍 ElasticSearch、ClickHouse 。 通过本系列文章的阅读，您将掌握时序数据库的基本概念、特点，从而帮助您更好地理解 Corona 的设计与使用。

<!--truncate-->

### 二. 时序数据库简介

#### 2.1 时序数据分析

时序数据是按时间顺序排序的一组数字序列，它可以反应某一现象的变化规律。在我们的日常生活中时序数据随处可见，如「天气预报时序走势图」它反映了温度随时间变化的规律; 如「油价时序走势图」 它反应了油价随时间变化的规律:

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25814972757/24f6/3597/6072/776369703f0b6cee8911e1e70b59f14c.png)

在应用监控领域，时序走势图 能够反应「应用健康度」随时间变化的趋势，是用户最为关注的几类图表之一:
![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25815108848/035d/b85c/4202/b119c485590f3ba77ce617b1c764934e.png)

除了分钟级粒度的数据，有时也需要按 「小时级」、「天级」 粒度查看走势数据：

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25815134080/fb90/76ff/2430/35b3938287844f0789251a69bebef9b5.png)

除了整体维度，用户也可以按某个特征维度对走势数据做分类(下表对比了不同档次机型的加载时间走势):
![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25815159791/87d8/db18/29f8/f11d5e43457ebfbbf0ce1505be9ac969.png)

对时序数据做上述分析的过程我们可以称其为时序数据分析。便于存储时序数据、提供时序数据分析能力的数据库我们称其为时序数据库。

#### 2.2 时序数据库特点

1.  时间列

时序数据库的主要查询和分析能力与「时间」字段有较大关联，所以在设计时序数据库的表结构时 通常会将 「时间」字段作为「索引」字段。

这样的设计方便应用快速筛选出目标范围的时序数据，并且时序数据库也提供了一系列 「时间」相关的工具函数，方便我们在时序数据上按不同的时间粒度(如 分钟、小时、天 )做聚合分析。

2. 维度列

在储存时序数据时，通常会附带上这条数据的维度信息，维度信息可以在后续分析时作为 过滤 或 聚合的条件。如 天气时序数据中，会有 「城市」维度，维度值为 北京、上海、杭州 等。 油价时序数据中，会有「汽油标号」维度，维度值为 92、95、98 等。

在表结构设计时通常高频的查询 和 聚合 维度也是建议作为「索引」字段存储。

3. 数值列

时序数据的数值，如天气时序数据中的 「温度值」、油价时序数据中的「价格」，会作为数值列进行存储。

时序数据库会提供一系列的工具函数对数值列做分析计算。常见的分析函数有：

- avg 求平均值
- max 求最大值
- min 求最小值

组合以上的功能特点，我们可以运用时序数据库就做一些常见的时序分析，如:

查询 2023 年 2 月份杭州每天的平均温度值走势 SQL：

```SQL
SELECT toStartOfDay(time), avg(degree)
FROM table_temperature
WHERE
    time>='2023-02-01' AND
    time<'2023-03-01' AND
    city='杭州'
GROUP BY toStartOfDay(time)
```

查询 最近 10 年各品类汽油每年的平均价格走势 SQL:

```SQL
SELECT toYear(time), model, avg(price)
FROM table_gas
WHERE
    time>='2013-01-01' AND
    time<'2023-01-01'
GROUP BY toYear(time), model
```

4. 数据过期时间 TTL

时序数据的另一个特点是关注近期的数据，距离当前比较久远的数据相对来说没那么重要，有时出于存储容量的考虑，我们甚至会希望自动删除老旧的数据。

时序数据库一般会提供 TTL (Time To Live) 功能，在设计数据库表结构时，一般会根据数据表的聚合粒度设置相应的过期时间。如 原始数据 或 分钟级的数据 保留 30 天， 小时 或 天级的 聚合数据 保留 1 年。

### 三. InfluxDB

介绍完了时序数据分析与时序数据库的特点，我们首先来看 InfluxDB 在 Corona 中的应用。

#### 3.1 简介

[InfluxDB](https://docs.influxdata.com/influxdb/v2.6/get-started/) 是一款经典的开源时序数据库。在 InfluxDB 中有几个常用的概念

1.  measurement

measurement 是 InfluxDB 中的数据表。一张 measurment 中可包含 一个时间列(time column)、多个维度列(tag column)、多个数值列(field column)。

用户无需手动使用 CREATE 语句创建 measurment，InfluxDB 会在写入的数据时动态创建 measurement、动态新增维度列与数据列。

2. tag

tag column 是 InfluxDB 中的维度列，InfluxDB 会为所有的维度列建立索引。在设计表结构时，我们需要将经常作为查询条件、聚合条件的字段作为 tag 列进行存储。

在设计 tag 列时，需要特别留意的是 tag 列的潜在值是要可收敛的，不能是无限增长的。

举几个对比的例子:
Good Case| Bad Case
---|---
监控页面的域名(location.host) | 监控页面的 URL (location.href)
设备操作系统 | 设备 UUID
歌曲文件类型 | 歌曲 ID

原因是 InfluxDB 为了 查询/写入 性能，会为所有的 tag 列建立索引，而索引的规模直接影响内存的占用开销。若 tag 列设计不合理，极易造成 InfluxDB 的内存持续增长甚至出现 OOM 的情况。

3. field

field column 是 InfluxDB 中的数值列，数据类型可以是 数字、字符串型。在设计表结构时，我们需要将未来用于 数值统计分析 的字段作为 field 列存储。一些不常作为查询条件、无法收敛的额外信息也可以放到 field 列进行存储。

5. retention policy

RR(retention policy) 数据保留策略，是 InfluxDB 的 TTL 实现机制。RP 可以在创建数据库后随时新增、变更。我们可以为一个数据库创建多个 RP。如:

- `create retention policy one_week on apm_log duration 7d default;`
- `create retention policy one_year on apm_log duration 365d;`

在数据写入时，我们可以根据数据的重要度、时效性 显示地指定使用哪个 RP，数据在超过保留时间后，就会自动删除。

6. continue query

CQ(continue query) 持续查询，可用于 数据归档、降采样。举例来说当我们采集的原始数据是分级的，我们可以使用 CQ 功能，将原始表的数据聚合写入小时级表。

```SQL
CREATE CONTINUE QUERY "cq_event" ON "apm_log"
BEGIN
  SELECT SUM("pv") as pv
  INTO "one_year"."cq_hour_event"
  FROM "one_week"."cq_minute_event"
  GROUP BY time(1h), *
END
```

创建完 CQ 任务后，InfluxDB 就会每小时执行一次聚合任务。这样后续在查询的时候，可以直接从聚合查询，加快查询速度。

#### 3.2 在 Corona 中的应用场景

InfluxDB 在 Corona 平台中主要有以下几个应用场景:

- 1.  存储 C 端用户上报的 访问量、性能 等「预聚合结果」数据
- 2. 存储平台自身运行健康度的 「原始」数据

1. 存储「预聚合结果」数据

在平台上线初期，我们曾使用 InfluxDB 直接存储用户端上报的原始日志，并使用 CQ 功能聚合出 分钟级、小时级 粒度的聚合表。 但随着接入应用数的增多、上报日志量 的持续增长，CQ 功能查询的内存开销出现了成倍的增长，导致 InfluxDB 的查询性能骤降。

随后我们在架构中引入了 流计算引擎 Flink , C 端上报数据经过 外部计算引擎 预聚合后，再存入 InfluxDB。 经过这样的调整后，InfluxDB 只存储 C 端用户 每分钟、每小时的 聚合结果，每分钟存储量只与 series 量级(group by 维度组合结果量级) 挂钩，不再与用户量直接关联。 InfluxDB 自身的查询性能也得到保障。

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25813626113/3a14/a156/48e9/8d00d4f9ff0fcc7a33191dd04ae751c9.png)

举例来说，我们可以在 Flink 中配置分钟级 PV 聚合任务：

```SQL
SELECT
   TUMBLE_START(PROCTIME(), INTERVAL '1' MINUTE) as wTime,
   count(os) as pv,
   os as osName,
   moduleName as moduleName
FROM performance_log
WHERE
    props['mspm'] = 'ReactNativeApplication'
GROUP BY
    TUMBLE(PROCTIME(), INTERVAL '1' MINUTE),
    os,
    props['moduleName']
```

我们将 Flink 的聚合结果，写入 InfluxDB 表中，表结构示例如下 (moduleName、osName 为 tag 列, pv 为 field 列):

| time                | moduleName | osName  | pv    |
| ------------------- | ---------- | ------- | ----- |
| 2023-01-01 12:00:00 | rn-app-1   | android | 10000 |
| 2023-01-01 12:00:00 | rn-app-1   | iphone  | 8000  |
| 2023-01-01 12:00:00 | rn-app-2   | android | 5000  |
| 2023-01-01 12:00:00 | rn-app-2   | iphone  | 4000  |
| 2023-01-01 12:01:00 | rn-app-1   | android | 10000 |
| 2023-01-01 12:01:00 | ...        | ...     | ...   |
| ...                 | ...        | ...     | ...   |

这样在查询 每小时、每天 PV 走势时，我们可以直接基于 分钟级表 的数据做分析，相较于查询 每个用户上报的原始日志，查询数据量级大幅降低、性能大幅提升。 (聪明的读者一定想到了，这里的 Flink 与 之前介绍的 InfluxDB CQ 的作用其实是一致的)

后续我们可以这样查询 InfluxDB:

```sql
SELECT
   moduleName,
   osName,
   sum(pv) AS pv
FROM rn_minute_pv
WHERE
   moduleName='rn-app-1' AND
   osName='android' AND
   time>='2023-01-01' AND
   time<='2023-01-02'
GROUP BY time(1h)
```

查询结果:
time|moduleName|osName|pv
----|----|----|----
2023-01-01 12:00:00| rn-app-1 | android | 600000 |
2023-01-01 13:00:00| rn-app-1 | android | 600000 |
2023-01-01 14:00:00 | rn-app-1 | android | 600000 |
...|...|...|...

2. 存储 「原始」数据

Corona 使用 InfluxDB 的另一个场景是存储 平台自身运行健康度的 「原始」数据，提升平台自身运行的可观测。 相较于 C 端场景 的海量数据，机器、集群的健康度数据量级较为可控，我们可以使用 InfluxDB 进行存储、 CQ 计算。

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25813618765/8a94/0cef/531a/149c1e8d843c1c290ffec87a95f98538.png)

例如当我们需要观测 自建的「数据消费服务」的健康度时，我们使用 InfluxDB 采集每个进程 每次批量处理的 事件数，同时包含 机器、进程、事件上报平台 等维度列。 表结构示例如下:
time| hostname| pid | platform | events
---|---|---|---|---
2023-01-01 12:00:03| music-corona-worker-1 | 130616 | web | 10
2023-01-01 12:00:04| music-corona-worker-1 | 128204 | android | 50
2023-01-01 12:00:04| music-corona-worker-2 | 33096 | ios | 30
...|...|...|...|...

有了原始数据表，我们可以按 hostname 维度、platform 维度 观测集群的数据消费健康度。可视化方案推荐使用 [Grafna](https://grafana.com/docs/grafana/latest/) :

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25811684057/f86e/5476/6ad1/44105d090fb5944ae4d17cfe14e1acbb.png)

#### 3.3 集群部署

[InfluxDB](https://docs.influxdata.com/influxdb/v2.6/get-started/) 目前在社区只开源了单机版，如果我们有 高可用、节点扩展 等需求 可以尝试使用官方付费服务。 除此之外 国内厂商 也有一些高可用实践，主要的两个技术路线代表有

- 饿了么 [influx-proxy](https://github.com/shell909090/influx-proxy)
- 网易 [NTSDB](https://kms.netease.com/article/5933) (内网可见)

1. influx-proxy

influx-proxy 是一个 HTTP 代理服务，对 InfluxDB 客户端透明。 influx-proxy 主要提供了以下功能:

- 以 measurement 粒度做数据分片、横向扩展节点
- 可以实现数据的双写备份
- 写失败时，缓存重试能力
- 高危查询语句过滤能力

![](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25816109124/5d67/951f/d9b8/3d14ac8f57d5d4554b30697384d194fd.png)
架构图取自[influx-proxy](https://github.com/shell909090/influx-proxy)

2. NTSDB

NTSDB 是网易自研的一款高性能分布式时序数据库，核心功能是为时序数据业务提供三高服务：读写服务高可用、数据高可靠以及读写高性能。除此之外，NTSDB 还拥有非常便捷的扩容缩容能力。

由于 NTSDB 尚未对集团外部开放，本文就不过多展开，内网用户可以参考这篇[介绍文章](https://kms.netease.com/article/5933), 外网用户可以通过 [NTSDB 作者博客](http://hbasefly.com/category/%e6%97%b6%e5%ba%8f%e6%95%b0%e6%8d%ae%e5%ba%93/) 学习更多时序数据库底层实现原理。

### 四.小结

InfluxDB 作为一款经典的时序数据库，能够满足时序分析场景下的大部分诉求，并且使用时也足够轻便 和 灵活。但在业务的实践的过程中，我们也踩了一些坑，其中最痛的还是 内存的持续增长 导致 OOM 的问题。 在集群资源有限的前提下，我们也逐渐摸索到了 InfluxDB 的使用边界 和 驾驭它的正确姿势。

下篇文章我们将继续介绍时序数据分析专题，并为你带来 ElasticSearch、ClickHouse 两款数据库在时序分析场景下的应用介绍，他们在使用姿势、 数据分析能力上 与 InfluxDB 又会有哪些差异呢？
