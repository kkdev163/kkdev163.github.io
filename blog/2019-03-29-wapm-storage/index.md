---
slug: wapm-storage
title: 前端性能监控平台-存储与计算架构展望
authors: [kkdev163]
tags: [influxdb, web-apm, storage]
---

### 前言

本文首先介绍网易云音乐自研前端性能监控平台的架构现状和当前遇到的问题。随后介绍了 NTSDB 存储引擎可以解决的问题，并进一步给出更符合业界标准的监控平台存储与计算架构。文中 NTSDB 与业界通用架构主要是根据网易数据科学中心时序数据库领域专家-<a href='http://hbasefly.com/author/libisthanksgmail-com/' target='_blank'>范欣欣</a>给出的建议整理而来。

<!--truncate-->

### 当前架构

![image](https://p1.music.126.net/tBao5AUpLEFlGenlxk4y0A==/109951163959092198.png)
浏览器端 SDK 采集的性能数据会经过 Nginx 负载均衡到 NodeJS 服务器, NodeJS 服务器对上报数据做合法校验后, 直接将原始数据转发至 InfluxProxy,InfluxProxy 根据配置将数据按表分片至底层的 InfluxDB 节点。

#### Influx Proxy 的集群的优势

当前我们的存储与计算架构的实现主要是依赖于 InfluxProxy、InfluxDB 所构成的计算存储集群。InfluxProxy 为饿了么开源的[组件](https://github.com/shell909090/influx-proxy),主要提供了以下的功能：

##### 1.按 measurement(数据库表名)做分片。

Proxy 节点中会维护 DB 节点与 measurement 的映射关系,根据该配置，可将同一个数据库的表存入不同的 DB 节点, 以达到横向扩展的目的。配置示意如下：

```javascript
    {
        db1: ['table1'],
        db2: ['table2'],
        db3: ['table3'],
        ...
    }
```

##### 2. 数据备份能力。

InfluxDB 提供 replication 参数设置副本数，但单机版的副本在同一主机上，无法做到高可用。若在 proxy 上将同一张表配置在多个 DB 节点，在数据存入时，Proxy 会将数据写入多个 DB 节点，达到数据备份的目的，在读取时 Proxy 会选择其中一个 DB 节点取出数据，以实现 influxDB 节点的高可用并提高读取性能。配置示意如下：

```javascript
    {
        db1: ['table1', 'table2', 'table3'],
        db2: ['table1', 'table2', 'table3']
    }
```

##### 3. 写失败时，缓存重试能力。

当底层的 DB 节点挂掉时，Proxy 节点会将数据先写入本地文件中，待 DB 节点恢复后，Proxy 节点会将数据重新写入 DB 节点。

##### 4. 高危查询语句过滤能力。

若查询语句中不通过 where duration 指定查询范围, influx 会将符合该查询的全部索引加载至内存中，会产生极大的性能开销。Proxy 会过滤类似的高危查询语句。

#### 当前架构存在的痛点

##### 1. Proxy 节点当前无高可用

Proxy 节点为整个存储与计算的入口, 若 Proxy 节点挂掉，性能监控的全部存储与计算服务就挂掉了。当然这个问题并非特别棘手，后续可以通过搭建多台 Proxy, 由 NodeJS 端做负载均衡来解决该问题。

##### 2. Proxy 是对读写请求做了一层代理，非 master slave 集群模式

Proxy 节点维护了表与 DB 实例的映射关系，做了一层数据读写的代理。但像创建 Petention Policy(数据保留过期策略)、创建 Continue Query(持续查询)等无法做代理和同步，需要手动连接至 DB 节点进行管理。这样会存在什么问题呢？

当只有一两个 DB 节点时, 这样手动管理并没有太大问题。但是当 DB 实例个数继续扩大后, 手动管理分片 A 实例、分片 B 实例、分片 A 副本实例、分片 B 副本实例, 若后续还有数据迁移，则 CQ 配置的管理将是一个噩梦。

##### 3. 扩容和数据迁移成本高

由于 Proxy 是按照表进行数据的分片, 假设一开始只用到了 Proxy 提供的数据备份能力即按以下进行配置：

```javascript
    {
        db1: ['table1', 'table2', 'table3', 'table4'],
        db2: ['table1', 'table2', 'table3', 'table4']
    }
```

当接入的应用数逐步增加后, 一台 db 无法承载 3 张表的存储与计算开销。我们做扩容的工作,比如新申请 2 台机器，把 table3、table4 拆分到新的机器上。

```javascript
    {
        db1: ['table1', 'table2'],
        db2: ['table1', 'table2'],
        db3: ['table3', 'table4'],
        db4: ['table3', 'table4'],
    }
```

除了修改 Proxy 的配置，我们还需要将原本 db1 db2 上的数据迁移到 db3、db4 上。并且把原本针对 table3、table4 的 CQ 配置也迁移到 db3、db4。

##### 4. 仅支持 measurement 层面的分片, 无法按数据分片

假设随着应用的增多，我们已经忍着剧痛，把数据拆成了这种地步：

```javascript
    {
        db1: ['table1'],
        db2: ['table2'],
        db3: ['table3'],
        db4: ['table4'],
    }
```

之后我们又会遇到新的问题：table1 撑满了。。现在我们除了升级 db1 的机器，再没有别的办法扩容了。

### NTSDB

NTSDB 为网易数据科学中心基于 Influx 自研的时序数据库。基本架构示意如下：
![image](https://p1.music.126.net/249sryZCD3i2-6gdvlJtAQ==/109951163959223735.png)

集群拥有 3 台 master 节点, 负责接收数据读写请求、同步数据库管理配置如创建 Petention Policy(数据保留过期策略)、创建 Continue Query(持续查询), master 节点非常轻量。实际的存储与计算任务由 Shard Server 进行。

#### Influx 存储模型简介

![image](https://p1.music.126.net/aMzLd3vJJGPydkRsUWQFYw==/109951163959253224.png)
在一张 Influx 数据库之上可以创建任意多个 Rentention Policy(数据保留策略),  一个 RP 可以[配置](https://docs.influxdata.com/influxdb/v1.7/query_language/database_management/#create-retention-policies-with-create-retention-policy)如下参数：

- DURATION: 数据过期时间, 过期后的数据自动删除。
- REPLICATION: 副本数 。
- SHARD DURATION: shard group 的持续时长, 持续时间结束后会形成新的 ShardGroup.
- SHARD BUCKET: 每个 Shard Group 包含的 Shard 个数。Influx DB 单机版未提供该参数(默认为 1)、NTSDB 提供该配置。

举例来说当配置

```shell
$CREATE RETENTION POLICY "rp_only_week" ON "wapm" >
DURATION 7d >
REPLICATION 2 >
SHARD DURATION 1d  >
SHARD BUCKET 3;
```

我们创建了一个名为`rp_only_week`的 RP, 其数据最长保留 7 天，副本数为 2 个，ShardGroup 的持续时间为 1 天, 每个 ShardGroup 含有 3 个 Shard。

存入数据时是可以指定 RP(未指定时有默认 RP), 我们可以将上报的原始数据存入 7 天的 RP 内, 将聚合过后的数据，存入一年过期的 RP 内。数据的过期，不是将每一条记录的时间与 duration 做对比，而是判断一个 ShardGroup 内的最新的数据是否已经过期，如果最新一条记录都过期了，则整个 ShardGroup 内的数据做批量删除，效率非常高。

 当有数据存入时，influx 会将数据的 measurement + tagKey1 + tagValue1 + tagKey2 + tagValue2 +... 形成 SeriesKey, 并将 SeriesKey 做 hash 运算后存入某个 shard 内。同一个 ShardGroup 内 Shard 个数越多，读写性能越高。可以将 Shard 理解为 Influx 实际做存储与计算引擎。

 回头来看下 NTSDB 的架构：
![image](https://p1.music.126.net/249sryZCD3i2-6gdvlJtAQ==/109951163959223735.png)
一个数据库的数据可分为多个 shard 落到不同的 ShardServer 上，每个 shard 都有自己的副本，存到不同的主机上，以保证高可用。并且我们可以横向无限地增加 ShardServer 的个数，当一台 ShardServer 无法承担一个 Shard 的压力时，我们可以调整 SHARD BUCKET 的数量，让数据均摊到其他节点。而节点的保活、备份、Petention Policy(数据保留过期策略)、Continue Query(持续查询)的管理都可以只连接到一台 master 上进行管理，master 节点会自动同步给其他节点。

可以说 NTSDB 完美地解决了我们当前存储架构的痛点。

### 标准架构

我们当前的架构可以简单抽象为如下流程：
![image](https://p1.music.126.net/FDMpSUh5Cb-oPSOydP5fbQ==/109951163959325299.png)
 我们将所有的原始数据存入 Influx, 并在 Influx 上建立 CQ 做预聚合计算，以提高查询性能。

在此架构之上，我们计划再进一步，引进业界更为通用的存储计算架构：
![image](https://p1.music.126.net/SsF26FVK5sqc8xhWz1a4fw==/109951163959336654.png)

我们引入 Kafka 来做消息队列，有如下几点好处：

- 原本 Server 直接对 Influx, Influx 若挂掉，则这段时间内的数据就会完全丢失。引入消息队列后，数据可以先入队，后消费。
- 可应对高峰流量，高峰流量不常有，如果为了高峰流量而一直预备着高配机器，多少会是一种浪费，而引入 kafka，influx 就不需要有完全匹配高峰流量的配置，高峰时可在 kafka 先缓存，待高峰过后，逐步消费。

引入 Flink 做聚合计算，有如下几点好处：

- 更专业, 大数据分布式计算平台，提供更多的聚合函数，通过写 SQL 就可以完成聚合任务配置。
- 更灵活, 未提供的聚合函数，可通过开发 JAR 包的方式，灵活自定义配置。

网易云音乐基于 Flink 自研的[Magina 平台](https://music-rtfm.hz.netease.com/magina-doc/)可简化 Flink 的使用，让大数据计算更加亲民。

文末再次感谢网易数据科学中心-时序数据库领域专家-<a href='http://hbasefly.com/author/libisthanksgmail-com/' target='_blank'>范欣欣</a>，对云音乐前端性能监控平台的架构改进提出的宝贵建议。

### 参考

- [Influx Db 文档](https://docs.influxdata.com/influxdb/v1.7/query_language/database_management/#create-retention-policies-with-create-retention-policy)
- [刘平：饿了么 Influxdb 实战解析](https://gitbook.cn/books/59428f6f7e850f039399fd02/index.html)
- [范欣欣-时序数据库技术体系 - 初识 InfluxDB](http://hbasefly.com/2017/12/08/influxdb-1/)
- [范欣欣-时序数据库技术体系 - InfluxDB TSM 存储引擎之 TSMFile](http://hbasefly.com/2018/01/13/timeseries-database-4/)
- [范欣欣-时序数据库技术体系 - InfluxDB 多维查询之倒排索引](http://hbasefly.com/2018/02/09/timeseries-database-5/)
- [范欣欣-网易时序数据库，丰富你的技术栈](http://kms.netease.com/#/article/5933)
