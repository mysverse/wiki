---
title: 消防
description: 在 Sumaya 扮演 BOMBA — 消防车、消火栓与火灾响应。
lang: zh
translated_from_hash: c822a3e4
translated_on: '2026-04-21'
needs_review: true
---
# 消防

**BOMBA** 是马来西亚的消防队。如果你在主菜单选择 BOMBA,你就以消防员身份执勤。

## 入门

在主菜单选择 **BOMBA**。你会带着 **灭火器** 出生在背包里,屏幕上显示 BombaGui — 无需打卡。**消防水带** 本身不是初始工具:你抵达事故现场后,从消防车或消火栓上的水带接口取用。

前往消防局取用车辆,或等待小地图上弹出火警警报。

## 火灾如何运作

只要服务器上至少有一名 BOMBA 玩家在线,Sumaya 内大约 **每 6 分钟** 就会出现一场火灾。当火灾开始时:

- 一个大型警报会出现在你的小地图和任务卡上。
- 火灾由许多独立的 **火焰方块** 组成,每一个都需要被扑灭。
- 红色引导光束会指向事故地点。

服务器上同一时间只有一场进行中的火灾。一旦火灾被扑灭(或超时),新的火灾就可以出现。

## 扑灭火灾

### 水带

1. 装备你的消防水带。
2. 找到水源 - 可以是 **消火栓**(镇上散布几个 — 寻找红/黄色立柱模型)或 **运水罐车**。
3. 将水带末端连接到水源提示。
4. 瞄准火焰方块并喷水。

每个火焰方块需要水带约 **10 次喷击** 才能完全熄灭。水带可达 **256 stud** - 这对大多数事故来说绰绰有余,并让你可以保持安全距离。

### 消火栓

消火栓固定在地图各处,位于 `Workspace.HydrantConnections` 内。当前地图只有少量消火栓模型 — 不足以覆盖整个城镇,因此请围绕它们规划路线。每个消火栓支持两个水带接口,所以两名消防员可以共用一个。

### 罐车(区域等级 65)

一旦你达到区域等级 65,就可以生成 **Sanica P360 Tanker** 罐车。罐车让你能在任何与道路相连的地方扑灭火灾,即使附近没有消火栓 - 对乡村事故非常实用。

## 奖励

每扑灭一个火焰方块可获得:

- **5 XP**(玩家和区域均得)
- **15 Ringgit**(钱包)

加上里程碑奖金:

- 每扑灭 **15 个方块** 获得 **+150 Ringgit** 奖金。

**其他 EMS**(Polis 或 Kesihatan)在火灾中协助可获得 **每个方块 10 XP**,但没有 Ringgit 奖励。他们因到场而获奖,但灭火的主要收入是你的。

奖励仅在火焰方块熄灭时你处于其 **512 stud** 范围内才计算 - 所以坚守事故现场,不要走开。

## 车辆

Bomba 车辆随着你的区域等级提升而解锁。

| 车辆 | 所需区域等级 | 价格 |
|---------|----------------------|-------|
| Merze Atego LFRT | 1 | 免费 |
| Sanica 94D LFRT | 20 | 9,000 Ringgit |
| Tayoti Hiace (Bomba) | 40 | 12,000 Ringgit |
| Sanica P310 FRT | 40 | 13,000 Ringgit |
| Sanica P360 Tanker | 65 | 20,000 Ringgit |

每辆车的容量和操控性各不相同。Atego 是灵活的入门车型;Tanker 是重型实用车。LFRT 代表 "Light Fire Rescue Tender",FRT 代表 "Fire Rescue Tender"。

请参阅 [Vehicles](/sumaya/vehicles) 了解如何生成它们。

## 阶级

Bomba 拥有 13 个阶级,基于现实中的马来西亚消防与拯救局(Jabatan Bomba dan Penyelamat Malaysia)。你的头衔会随着区域等级提升而自动更新。

| 等级 | 阶级 |
|-------|------|
| 1 | Fire Officer (PB) |
| 6 | Senior Fire Officer (PBK) |
| 11 | Leading Fire Officer (PBT) |
| 16 | Assistant Fire Superintendent (PPgB) |
| 21 | Senior Assistant Fire Superintendent (PKPgB) |
| 26 | Deputy Fire Superintendent (TPgB) |
| 31 | Assistant Fire Superintendent (Station Level) |
| 36 | Fire Superintendent (PgB) |
| 41 | Senior Fire Superintendent (PgKB) |
| 49 | Assistant Fire Commissioner (PPjB) |
| 57 | Senior Assistant Fire Commissioner (PKPjB) |
| 65 | Deputy Fire Commissioner (TPjB) |
| 76 | Fire Commissioner (PjB) |

阶级括号缩写遵循现实中的 Bomba 徽章体系。从等级 76 起你已是顶级 - 即使你冲向等级 100 的上限,也不会再有阶级变化。

## 小贴士

- **团队合作。** 两名消防员同时灭火意味着方块清得更快,意味着里程碑奖金来得更快,意味着每分钟更多的 Ringgit。
- **位置很重要。** 找一个多个方块都在水带范围内的位置,不要不停换位。稳扎稳打,不要慌乱。
- **保持在 512 stud 内。** 如果你为了补水或开车而离开火灾现场,在你超出范围期间扑灭的方块就不再计入你的奖励。
- **警笛 = 免罚。** 被超速罚单缠上了?驾驶 Bomba 车辆时打开你的 ELS 警笛即可避免被开罚单。
- **为 Tanker 储钱。** 在你达到等级 65 之前,你都得依靠消火栓。Tanker 是改变格局的车辆,因为你能把水随身带着走。
- **注意你的健康值。** 离火太近会随时间损伤你。如果你看到健康值下降,请退后并从更远处喷水。

## 接下来呢?

- [Kesihatan](/sumaya/kesihatan) 如果你对医疗方面感兴趣。
- [Polis](/sumaya/polis) 了解执法。
- [Vehicles](/sumaya/vehicles) 查看完整的 Bomba 车辆列表。
- [Progression](/sumaya/progression) 了解 XP 在各服务间的运作方式。
