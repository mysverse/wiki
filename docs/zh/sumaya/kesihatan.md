---
title: 医护
description: 在 Sumaya 扮演 Kesihatan — 救护车、治疗与复苏。
lang: zh
translated_from_hash: 48961d5b
translated_on: '2026-04-30'
needs_review: true
---


# 医护

**Kesihatan**（"keh-see-ha-tan"）是 Sumaya 的医疗服务。医生、护士、医务人员。如果你从主菜单选择 Kesihatan，你一出生就是当值的医务人员。

Kesihatan 也很特别，因为**你的工作能提升整个服务器**。继续阅读。

## 开始

在主菜单上选择 **Kesihatan**。你的医疗包会出现在背包中：first aid kit、Bandage、Splint，还有更多随等级解锁。

前往医院获取更多工具和设备，或回应 999 来电和现场事件。

## 受伤系统

Kesihatan 的核心玩法是治疗**伤势** - 玩家或 NPC 遭受的、无法仅通过重生治愈的伤害。

### 受伤系统何时启动

受伤系统**只要服务器中至少有一名 Kesihatan 玩家就会自动启动** — 只要在团队中，你就为所有人打开了开关。当它启动时：

- 玩家和 NPC 会受到正常的伤势，而不是即刻死亡。
- 伤势需要医疗治疗才能痊愈。
- **服务器上每位玩家获得 +15% 玩家等级 XP**（不影响 sector XP）。
- 每位玩家的角色在系统启动时携带 `InjurySystemEnabled = true` 属性。

最后一名 Kesihatan 玩家离开的那一刻，服务器会停用受伤系统。因此，只需以 Kesihatan 身份登入就足以"启动"它 — 不需要手动切换。那 +15% XP 加成是件大事：它适用于每份工作、每次逮捕、每次收获 - 所以当 Kesihatan 启动时,整个服务器都受益。这是有医疗玩家在场的最大单一原因。

### 伤势类型

| 伤势 | 是什么 | 治疗 |
|--------|------------|-----------|
| 轻微割伤 / 瘀伤 | 擦伤、小伤口 | Bandage |
| Broken arm | 减慢手部动画，影响某些工具 | Splint |
| Broken leg | 将走路速度降低至 30% | Splint |
| Traumatic Brain Injury (TBI) | 严重；需要卧床休息 | 医疗床 + 时间 |

### 诊断

在你知道病人哪里有问题之前，你无法治疗他。

1. 装备 **First Aid Kit**。
2. 站在距离病人 **10 studs** 以内。
3. 使用工具包。诊断需时约 **2 seconds**。
4. 显示病人的伤势。

**奖励：**每次诊断 15 XP。

### Bandage（轻微伤口）

1. 装备 **Bandage** 工具。
2. 站在距离病人 10 studs 以内。
3. 使用工具。需时约 3 seconds。
4. 伤口痊愈。Bandage 在角色身上保持 5 分钟，然后消退。

**奖励：**30 XP + 100 Ringgit。

### Splint（骨折）

1. 装备 **Splint**。
2. 站在 10 studs 以内。
3. 应用。需时约 5 seconds。
4. 走路速度恢复正常。

**奖励：**40 XP + 200 Ringgit。

### 影像检查（X-Ray 和 MRI）

要确认严重伤势的诊断，使用医院的影像机器：

- **X-Ray 机器：**确认骨折。
- **MRI 机器：**确认 TBI。

任何一种诊断支付 **20 XP**。

### TBI 与医疗床

TBI 是最严重的伤势。治疗需要病人**躺在医疗床上**约 **30 seconds** 的卧床休息，这会逐步治愈他们。

医院有多张医疗床，加上一台 X-Ray 机器、一台 MRI 机器，以及用于运送病人的 Stretcher。

## 奖励摘要

| 行动 | XP | Ringgit |
|--------|-----|---------|
| 急救诊断 | 15 | 0 |
| Bandage 治疗 | 30 | 100 |
| Splint 治疗 | 40 | 200 |
| X-Ray 诊断 | 20 | 0 |
| MRI 诊断 | 20 | 0 |

另外：

- **每 10 次治疗 +150 Ringgit 奖金。**

## 车辆

Kesihatan 救护车随你的 sector 等级提升而解锁。

| 车辆 | 所需 sector 等级 | 价格 |
|---------|----------------------|-------|
| Tayoti Hiace KKN Ambulance | 1 | 免费 |
| Tayoti Hilux KKN Ambulance | 20 | 8,000 Ringgit |
| Handai City KKN Ambulance | 45 | 12,000 Ringgit |

KKN 代表 Kementerian Kesihatan Nasional（National Ministry of Health）。每辆救护车都有警笛和后部货物空间（用于 Stretcher）。

请参阅 [Vehicles](/sumaya/vehicles) 了解如何召唤它们。

## 阶级

Kesihatan 有 13 个阶级，大致基于实际马来西亚医疗职位。当你的 sector 等级提升时，你的头衔会自动更新。

| 等级 | 阶级 |
|-------|------|
| 1 | Medical Trainee |
| 6 | House Officer |
| 11 | Nurse |
| 16 | Medical Officer |
| 21 | Assistant Medical Officer |
| 26 | Senior Assistant Medical Officer |
| 31 | Deputy Chief Assistant Medical Officer |
| 36 | Chief Assistant Medical Officer |
| 41 | Deputy Director of Health |
| 49 | Director of Health |
| 57 | Senior Director of Health |
| 66 | Deputy Director General of Health |
| 81 | Director General of Health |

从等级 81 起，你已是顶端。在你冲向等级 100 上限时，不再有阶级变化。

## 小贴士

- **为服务器启动受伤系统。**那 +15% XP 加成影响所有人，包括你。整个服务器都受益，并会一直回来接受治疗。
- **早早驻扎在医院。**大多数伤势通过救护车或 999 应用程序进来。靠近医院意味着更快的周转和更多的 XP。
- **Broken leg 是简单的发薪日。**他们走不好，容易被发现，而 Splint 支付 200 Ringgit。
- **TBI 慢但高价值。**在 30 秒卧床休息进行时，你可以诊断和治疗其他病人。不要只是站着观看。
- **大规模伤亡事件。**如果有大型车祸或事件，多名伤员意味着多次快速付款。带上 Stretcher。
- **与 Bomba 合作。**消防员会被烧伤；在你扑灭火灾后，期待 Bandage 客户。奖励：站在距离活动火源 512 studs 以内为你赚取 **10 player XP per block extinguished**（仅限 player XP，没有 SR）- 所以驻扎在火场是 Kesihatan 的免费被动 XP。

## 接下来呢？

- [Polis](/sumaya/polis) 了解执法方面。
- [Bomba](/sumaya/bomba) 了解消防员对应。
- [Vehicles](/sumaya/vehicles) 查看救护车列表。
- [Progression](/sumaya/progression) 了解 XP 如何复合。
