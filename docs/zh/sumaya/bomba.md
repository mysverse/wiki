---
title: 消防
description: 在 Sumaya 扮演 BOMBA — 消防车、消火栓与火灾响应。
lang: zh
translated_from_hash: 7eb0c900
translated_on: '2026-04-30'
needs_review: true
---


# 消防

**Bomba** 是马来西亚消防队。如果你从主菜单选择 BOMBA,你就以消防员身份执勤。

## 入门指南

在主菜单选择 **BOMBA**。你出生时背包里会有一支 **Fire Extinguisher**,屏幕上会显示 BombaGui — 无需打卡。**Hose** 本身不是起始工具:你抵达事故现场时从消防车或 hydrant 上的 hose 接口取得。

前往消防局取用车辆,或等待火灾警报在你的小地图上弹出。

## 火灾运作方式

只要服务器上至少有一名 BOMBA 玩家活跃,火灾大约 **每 6 分钟** 在 Sumaya 出现一次。当火灾开始时:

- 一个大型警报会出现在你的小地图和任务卡上。
- 火灾由许多独立的 **火焰方块** 组成(每场事故约 3 到 6 个),每一个都需要被扑灭。
- 红色引导光束指向事故现场。

服务器上同时只有一场活动火灾。火灾被扑灭(或超时)后,新的火灾才会出现。

### 事故类型

Sumaya 目前在 **九个火灾模板** 之间轮换,每个都预先构建了自己的位置和方块布局:

- **3 个车辆碰撞事故** — 警察局外、Hazbank 外、MFC 附近。
- **6 个建筑火灾** — Jalan Padas Dua(两个变体)、Kedai Emas Tai Loi、Perbankan Elektronik、旧 KKN 诊所、Radtrol Jalan Kepala Ikan。

服务器每场事故随机挑选一个。你任务 HUD 上的卡片会显示 **IncidentType**("Car Crash" 或 "Building Fire")以及 **Location** 名称,这样你在抵达之前就知道要去面对什么。MDT 应用程序会自动获取相同的数据 — 调度员看到的是可读的位置字符串,而不仅是坐标。

## 扑灭火灾

### Hose

1. 装备你的 hose。
2. 寻找水源 - 可以是 **hydrant**(镇上有几个 — 寻找红/黄色柱状模型)或 **tanker truck**。
3. 将 hose 末端连接到水源提示处。
4. 瞄准火焰方块并喷射。

每个火焰方块需要 hose 大约 **10 次** 击中才能完全熄灭。Hose 范围可达 **256 studs** - 对大多数事故来说绰绰有余,并让你保持安全距离。

### Hydrant

Hydrant 固定在地图上 `Workspace.HydrantConnections` 内。当前地图只有少数 hydrant 模型 — 不足以覆盖整个城镇,所以围绕它们规划路线。每个 hydrant 支持两个 hose 接口,因此两位消防员可以共用一个。

### Tanker(部门等级 65)

一旦你达到部门等级 65,你就能召唤 **Sanica P360 Tanker** 卡车。Tanker 让你在任何与道路相连的地方扑灭火灾,即使附近没有 hydrant - 对乡村事故非常有用。

## 奖励

你扑灭的每个火焰方块支付:

- **5 XP**(玩家与部门皆有)
- **15 Ringgit**(钱包)

加上里程碑奖励:

- 每扑灭 **15 个方块** 获得 **+150 Ringgit** 奖励。

**Kesihatan 玩家** 站在活动火灾附近(512 studs 内)可获得 **每扑灭一个方块 10 玩家级 XP**,但没有 Ringgit 奖励,也没有 Kesihatan 部门 XP - 只有玩家 XP。Polis 不享受此福利,因为过滤器只匹配 `JobType == "EMS"`(Polis 是 `JobType = "Law"`)。因此医护人员有内建的诱因来跟随火灾。

只有当你在火焰方块被扑灭时位于 **512 studs** 以内,奖励才会计算 - 所以坚持留在事故现场,不要走远。

## 车辆

Bomba 车辆随你的部门等级提升而解锁。

| 车辆 | 所需部门等级 | 价格 |
|---------|----------------------|-------|
| Merze Atego LFRT | 1 | 免费 |
| Sanica 94D LFRT | 20 | 9,000 Ringgit |
| Tayoti Hiace (Bomba) | 40 | 12,000 Ringgit |
| Sanica P310 FRT | 40 | 13,000 Ringgit |
| Sanica P360 Tanker | 65 | 20,000 Ringgit |

每辆卡车有不同的容量和操控性。Atego 是灵活的入门款;Tanker 是重型实用车。LFRT 代表 "Light Fire Rescue Tender",FRT 代表 "Fire Rescue Tender"。

请参阅 [Vehicles](/sumaya/vehicles) 了解如何召唤它们。

## 警衔

Bomba 有 13 个警衔,基于 MYSverse 真实的消防与救援部门(Bomba MYSverse)。你的头衔会随着部门等级上升而自动更新。

| 等级 | 警衔 |
|-------|------|
| 1 | Pegawai Bomba (PB) |
| 6 | Pegawai Bomba Kanan (PBK) |
| 11 | Pegawai Bomba Tinggi (PBT) |
| 16 | Penolong Penguasa Bomba (PPgB) |
| 21 | Penolong Kanan Penguasa Bomba (PKPgB) |
| 26 | Timbalan Penguasa Bomba (TPgB) |
| 31 | Penolong Penguasa Bomba(Balai级别) |
| 36 | Penguasa Bomba (PgB) |
| 41 | Penguasa Bomba Kanan (PgKB) |
| 49 | Penolong Pesuruhjaya Bomba (PPjB) |
| 57 | Penolong Kanan Pesuruhjaya Bomba (PKPjB) |
| 65 | Timbalan Pesuruhjaya Bomba (TPjB) |
| 76 | Pesuruhjaya Bomba (PjB) |

警衔括号缩写遵循现实世界 Bomba 徽章方案。从等级 76 起你就是顶端 - 即使你向等级 100 上限推进也不再有警衔变化。

## 提示

- **作为团队合作。** 一场火灾有两位消防员意味着方块清除得更快,意味着里程碑奖励来得更快,意味着每分钟更多 Ringgit。
- **位置很重要。** 找一个多个方块都在 hose 范围内的地点,不要不断切换。稳定,而非急躁。
- **保持在 512 studs 内。** 如果你为了补水或开车而远离火灾,你超出范围期间扑灭的方块就不再计入奖励。
- **警笛 = 免责。** 因超速被开罚单卡住?驾驶 Bomba 车辆时打开你的 ELS 警笛以避免被开罚单。
- **为 Tanker 存钱。** 在你达到等级 65 之前,你将依赖 hydrant。Tanker 是个游戏改变者,因为你把水带在身边。
- **注意你的健康。** 站得离火太近会随时间伤害你。如果你看到健康下降,后退并从更远处用 hose。

## 接下来呢?

- [Kesihatan](/sumaya/kesihatan) 如果你对医疗方面感兴趣。
- [Polis](/sumaya/polis) 用于执法。
- [Vehicles](/sumaya/vehicles) 获取完整的 Bomba 车辆列表。
- [Progression](/sumaya/progression) 了解 XP 如何在各部门间运作。
