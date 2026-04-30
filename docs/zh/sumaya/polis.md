---
title: 警察
description: 在 Sumaya 扮演 POLIS — 巡逻、逮捕、职级与装备。
lang: zh
translated_from_hash: 6c9358fc
translated_on: '2026-04-30'
needs_review: true
---


# 警察

**Polis** 是 Sumaya 的警察部队。如果您从主菜单选择 POLIS,从您出生的那一刻起,您就是一名执勤的执法人员。您的工作是逮捕罪犯、设置测速陷阱、响应 999 来电,并维持治安。

## 入门

在主菜单上选择 **POLIS**。您的初始装备包含 5 件工具:

| 工具 | 功能 |
|------|------|
| **Taser X26P** | 非致命制服武器,弹匣有限。向嫌疑人开火以使其失去行动能力以便逮捕。 |
| **Radar Gun** | 手动测速捕捉工具。请参阅[测速陷阱与雷达](#speed-traps-and-radar)。 |
| **Whistle** | 人群 / 交通指挥信号。 |
| **Handcuffs** | 实际的逮捕工具 - 当您足够接近时对通缉嫌疑人使用。 |
| **Plate Finder** | 查询任何车辆的车牌,以查看登记车主以及是否被标记为失窃。 |

随着您升级 POLIS 部门,部分服装与装备会解锁(等级 1 的 Duty Belt + Beret,等级 10 的 Reflective Vest,等级 20 的 Reflective Coat)。请参阅 [Progression](/sumaya/progression) 查看横跨三个紧急服务的完整职业物品表。

## 可放置的交通/犯罪现场物品(预留 / 未分发)

游戏定义了 **5 件可放置工具**(`Polis Cone`、`Polis Sign`、`Polis Umbrella`、`SCone`、`PBSign`)— 每件都有可运作的放置处理程序和 `PlaceableItemsLeft` 计数器。然而,**目前任何团队配装、NPC、商店或解锁都不会将它们提供给 POLIS 玩家**。模型和脚本存在,但分发路径在实时构建中尚未连接,因此您在正常游戏中不会在库存中找到这些。视为为未来更新预留。

前往警察局取车,或在街道上巡逻并在您的 MDT(Mobile Data Terminal)应用程序上留意通缉嫌疑人。

## 通缉系统

平民每次犯罪时都会累积 **offence points**。总 offence points 决定他们的 **wanted star** 等级:

| 点数 | Wanted stars |
|------|--------------|
| 10-24 | 1 star |
| 25-49 | 2 stars |
| 50-79 | 3 stars |
| 80-119 | 4 stars |
| 120+ | 5 stars |

更高星级的嫌疑人更难逮捕,但成功逮捕时报酬更高。

### 什么会给予 offence points?

| 罪行 | 点数 |
|------|------|
| 车辆撞击(撞到他人) | 5 |
| 超速 | 10 |
| 扒窃 | 20 |
| 劫车 | 25 |
| 走私动物 | 50 |

请参阅 [Crime and Law](/sumaya/crime-and-law) 查看完整细分。

### 查看通缉玩家

打开手机上的 **MDT** 应用程序。**Wanted** 选项卡显示所有目前被通缉的玩家,包括:

- 姓名和大头照
- 星级
- 罪行计数
- 自首次罪行以来的经过时间

您可以从这里在小地图上为嫌疑人设置航点以导航到他们那里。

### 通缉衰减

如果嫌疑人在 **5 minutes** 内不再犯任何罪行,其通缉状态将完全清除。您有一个时间窗口来抓捕他们。

## 进行逮捕

基本流程:

1. 定位通缉嫌疑人(MDT 有帮助)。
2. 接近他们。如果他们处于被动模式或在超速,他们可能没有意识到您在那里。
3. 在交互范围内使用您的 **handcuffs** 工具。
4. 如果成功,他们将被逮捕 - 送往监狱,时长基于星级。

### 拘留阶段

在最终逮捕之前,嫌疑人进入 **detained** 状态。一旦被拘留:
- 他们以 **4-stud offset** 跟随您,限制在 **20 studs maximum** 范围内(他们无法乱跑)。
- **60-second detain timeout** 启动 — 如果您未在 60 秒内完成逮捕,拘留将自动释放。
- 在被拘留期间,他们仍然可以尝试在提示处 **surrender** 以将自己的监禁时间减半。

当您想在登记前将嫌疑人带到特定地点(警察局、surrender 提示)时,拘留非常有用。

### 逮捕奖励

奖励按逮捕时嫌疑人的星级缩放:

| Stars | XP | Ringgit(钱包) |
|-------|-----|------------------|
| 1 | 50 | 150 |
| 2 | 100 | 300 |
| 3 | 175 | 500 |
| 4 | 275 | 800 |
| 5 | 400 | 1,200 |

### 附近警员奖励

如果您进行逮捕时另一名 POLIS 玩家在 **50 studs** 范围内,他们将自动获得 **50% of your XP and Ringgit** - 无需任何操作。结伴巡逻非常适合双倍收入。

### 里程碑奖励

您每完成 **5 arrests**,在逮捕奖励之上会获得 **+200 Ringgit** 奖励。

## 监狱

当您逮捕某人时,他们将被送往监狱。监禁时长取决于逮捕时他们的 wanted stars:

| Stars | 监禁时间 |
|-------|----------|
| 1 | 30 秒 |
| 2 | 1 分钟 |
| 3 | 2 分钟 |
| 4 | 3 分钟 |
| 5 | 5 分钟 |

被关押期间:

- 玩家无法切换团队。
- 监狱 HUD 显示剩余时间。
- 计时器结束时,他们被释放。

### 自首

罪犯可以在被抓之前选择在指定提示处 **surrender**。自首将监禁时间减半,并能更干净地放他们出去:

| Stars | 自首监禁时间 | 释放后的被动锁定 |
|-------|--------------|------------------|
| 1 | 15 sec | 60 sec |
| 2 | 30 sec | 2 min |
| 3 | 1 min | 4 min |
| 4 | 90 sec | 6 min |
| 5 | 150 sec | 10 min |

被动锁定意味着他们在释放后无法立即重新启用被动模式 - 如果他们试图重新开始犯罪狂潮,您仍然可以逮捕他们。

### 离开以避免逮捕(LTAA)

如果通缉玩家在罪行中途登出,他们在返回时将受到**更糟的**监禁时间:

| Stars | LTAA 监禁时间 |
|-------|---------------|
| 1 | 45 sec |
| 2 | 90 sec |
| 3 | 150 sec |
| 4 | 4 min |
| 5 | 6 min |

所以不,退出救不了您。

### 战斗计时器(交战窗口)

在您的 **taser** 命中或您的 **detain** 成功的那一刻,**30-second combat window** 在嫌疑人身上打开。计时器有效期间:

- 他们的 **Reset** 按钮被锁定,主菜单 / 切换团队即使在 1 星以下也被锁定。
- 如果他们因任何原因死亡(摔落、车祸、自杀脚本 `Health=0`、您电击他们次数过多)— combat-evasion jail 启动。
- 如果他们离开游戏 — combat-evasion jail 会排队等待他们的下一个会话。

Combat-evasion jail 是常规 LTAA 时长的 **double**:1–5 stars 时为 60 / 120 / 240 / 360 / 600 秒,如果当时被拘留则加上 +30 秒。**您将获得按星级缩放的完整 XP + Ringgit,如同您干净利落地逮捕了他们一样**,加上 50% 附近警员的分配。Engager-offline 边缘情况:积分作废,所以如果您想要报酬就保持在线。

实际上这意味着:一旦您电击了嫌疑人,您就已经锁定了积分。即使他们冲入车流并死亡,您的巡逻仍然得分。

## 测速陷阱与雷达

Sumaya 有 **two separate speeding systems** — 自动区域和您的手动 radar gun。

### 测速陷阱区域(自动)

世界上有 **3 speed trap zones**,每个都有公布的限速 **50 studs/s**。如果任何车辆(玩家或 NPC)以超过限速驶过区域,游戏会自动给驾驶员开罚单:+10 offence points,无需警员行动。当罚单在您附近发生时,您会在 HUD 上看到横幅通知。

区域以每位驾驶员 30 秒的冷却时间循环,所以反复超速通过的人会迅速累积罚单。

带 **siren active** 的紧急车辆豁免 — 您响应时不会给自己开罚单。

### Radar gun(手动,用于大超速者)

您的 radar gun 是用于在区域外抓捕**严重**超速者的工具。瞄准移动中的车辆并开火:

- 目标必须以 **200 studs/s or faster** 的速度行驶,工具才会记录命中。比这慢的话,枪会报告 "Not speeding" 并不做任何事情。
- 每个捕获的车牌会获得 **120-second cooldown** - 您无法在两分钟内重新捕获相同的车牌。
- 您必须 **on duty**(POLIS 团队激活)工具才能工作。

**每次捕获的奖励:** 30 XP + 50 Ringgit + 驾驶员的 10 offence points。

由于区域只在 50 studs/s 以下触发,而雷达需要 200+,中间存在一个广阔的差距,只有移动中的警员才能抓到超速者。这就是雷达的利基。

## 车辆

Polis 车辆基于 **player level** 和 **sector level** 的混合解锁。

| 车辆 | Player level | Sector level | 价格 |
|------|--------------|--------------|------|
| Protan Wira MPV Polis | 1 | 1 | 免费 |
| Protan Waja MPV Polis | 15 | - | 6,500 Ringgit |
| Handai City MPV Polis | 1 | 35 | 12,000 Ringgit |
| Handai Civic MPV Polis | 1 | 55 | 15,000 Ringgit |

Wira 是您的入门巡逻车。Civic 是顶级 - 快速、沉重、装备齐全。

Polis 车辆配有 **ELS sirens**。siren 激活时,您在响应时豁免交通罪行(超速、撞车)。

详情请参阅 [Vehicles](/sumaya/vehicles)。

## 警衔

Polis 有 **16 ranks**,是所有紧急服务中最多的。称谓基于真实的 MYSverse Police 警衔(POLIS)。

| 等级 | 警衔 |
|------|------|
| 1 | Police Constable |
| 6 | Lance Corporal (L/Cpl) |
| 11 | Corporal (Cpl) |
| 16 | Sergeant (Sgt) |
| 21 | Sergeant Major (SM) |
| 26 | Sub-Inspector (SI) |
| 31 | Probationary Inspector (P/Insp) |
| 36 | Inspector (Insp) |
| 41 | Chief Inspector (C/Insp) |
| 46 | Assistant Superintendent of Police (ASP) |
| 51 | Deputy Superintendent of Police (DSP) |
| 56 | Superintendent of Police (SUPT) |
| 61 | Assistant Commissioner of Police (ACP) |
| 69 | Senior Assistant Commissioner of Police (SAC) |
| 77 | Deputy Commissioner of Police (DCP) |
| 89 | Commissioner of Police (CP) |

从等级 89 起您处于顶端。在您冲向等级 100 上限时不会有警衔变更。

## 响应时豁免

如果您的 Polis 车辆 **siren active**,您在驾驶时不会因超速或撞车而被开罚单。系统识别您正在执行任务。停车时关闭 siren - 否则其他玩家可能认为您仍在响应。

## 提示

- **使用 MDT。** 不要盲目巡逻。MDT 显示每个通缉嫌疑人,并允许您直接为他们设置航点。
- **结伴。** 两名 POLIS 在 50 studs 内意味着非逮捕警员免费获得 50% 奖励。非常适合基于朋友的刷分。
- **不要错过里程碑奖励。** 每 5 次逮捕 = +200 Ringgit。规划您的轮班以达到 5、10、15。
- **5-star 逮捕是巨大的。** 单次 5-star 抓捕 = 400 XP + 1200 Ringgit。它们更难做到,但值得守候。
- **Siren = 无罚单。** 当您驾驶赶往任务时打开它们 - 否则您自己的超速可能会让您尴尬地拿到罚单。
- **不要让自己被通缉。** 作为 POLIS 犯罪原本应该让您自动从团队降级,但该侦听器在当前 build 中未连接 - 您仍留在 POLIS。不要指望游戏将您切换回平民;如果您想扮演罪犯,请先离开团队。(实际上:POLIS 反正被禁止使用被动模式,所以执勤时犯罪极其危险。)
- **火灾辅助 XP 仅限 Kesihatan。** 与看似直观的相反,POLIS 不会从附近火灾事件中获得 XP - 游戏检查 `JobType == "EMS"`,而 POLIS 的 `JobType = "Law"`。只有 Kesihatan 玩家受益于站在火灾 512 studs 内每方块 10 player XP。

## 接下来呢?

- [Crime and Law](/sumaya/crime-and-law) 了解您面对的对手。
- [Bomba](/sumaya/bomba) 和 [Kesihatan](/sumaya/kesihatan) 了解其他服务。
- [Vehicles](/sumaya/vehicles) 查看 Polis 车辆目录。
- [Progression](/sumaya/progression) 了解 XP 与警衔如何运作。
