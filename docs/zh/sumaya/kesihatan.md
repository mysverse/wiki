---
title: 医护
description: 在 Sumaya 扮演 Kesihatan — 救护车、治疗与复苏。
lang: zh
translated_from_hash: 9a0207af
translated_on: '2026-04-21'
needs_review: true
---
# 医护

**Kesihatan**（读作 "keh-see-ha-tan"）是 Sumaya 的医疗服务。包括医生、护士、护理人员。如果你从主菜单选择 Kesihatan，一出生就是在值班的医疗人员。

Kesihatan 还有一点特别之处,那就是**你的工作能为整个 server 带来加成**。继续读下去。

## 如何开始

在主菜单选择 **Kesihatan**。你的医疗包会出现在 backpack 里:急救包、绷带、夹板,更多道具会随着等级解锁。

前往医院获取更多工具和装备,或者回应 999 来电和现场事故。

## 受伤系统

Kesihatan 的核心玩法是治疗**伤势** - 玩家或 NPC 所受的伤害,无法单靠重生来恢复。

### 受伤系统何时启动

受伤系统**只要至少有一名 Kesihatan 玩家在 server 上就会自动启用** — 只要你在队伍里,就为所有人开启了这个开关。启用时:

- 玩家和 NPC 会出现真正的伤势,而不是当场死亡。
- 伤势需要医疗治疗才能康复。
- **server 上的每位玩家获得 +15% 玩家等级 XP**(sector XP 不受影响)。
- 当系统启用时,每位玩家角色都会带有 `InjurySystemEnabled = true` 属性。

最后一位 Kesihatan 玩家离开的那一刻,server 就会关闭受伤系统。所以只要以 Kesihatan 身份上线就足以"激活"它 — 无需手动切换。那 +15% XP 加成意义重大:它适用于每份工作、每次逮捕、每次采收 - 所以当 Kesihatan 在线时,整个 server 都受益。这是必须要有医疗玩家的最大理由。

### 伤势类型

| 伤势 | 描述 | 治疗 |
|--------|------------|-----------|
| 轻微擦伤 / 瘀伤 | 擦伤、小伤口 | 绷带 |
| 手臂骨折 | 减慢手部动画,影响某些工具 | 夹板 |
| 腿部骨折 | 将行走速度降至 30% | 夹板 |
| 创伤性脑损伤 (TBI) | 严重;需要卧床休息 | 医疗床 + 时间 |

### 诊断

在你不知道病人出了什么问题之前,无法治疗他。

1. 装备 **First Aid Kit**。
2. 站在病人 **10 stud** 范围内。
3. 使用这套工具。诊断约需 **2 秒**。
4. 病人的伤势会显示出来。

**奖励:** 每次诊断 15 XP。

### 绷带(轻伤)

1. 装备 **Bandage** 工具。
2. 站在病人 10 stud 范围内。
3. 使用该工具。约需 3 秒。
4. 伤口愈合。绷带在角色身上维持 5 分钟,然后消失。

**奖励:** 30 XP + 100 Ringgit。

### 夹板(骨折)

1. 装备 **Splint**。
2. 站在 10 stud 范围内。
3. 使用。约需 5 秒。
4. 行走速度恢复正常。

**奖励:** 40 XP + 200 Ringgit。

### 影像诊断(X-Ray 和 MRI)

对于严重伤势的诊断确认,请使用医院的影像设备:

- **X-Ray 机:** 确认骨折。
- **MRI 机:** 确认 TBI。

任何一种诊断都支付 **20 XP**。

### TBI 与医疗床

TBI 是最严重的伤势。治疗需要病人**躺在医疗床上**进行大约 **30 秒**的卧床休息,这会逐渐让他恢复。

医院有多张医疗床,还有一台 X-Ray 机、一台 MRI 机,以及用来运送病人的担架。

## 奖励总览

| 动作 | XP | Ringgit |
|--------|-----|---------|
| 急救诊断 | 15 | 0 |
| 绷带治疗 | 30 | 100 |
| 夹板治疗 | 40 | 200 |
| X-Ray 诊断 | 20 | 0 |
| MRI 诊断 | 20 | 0 |

另外:

- **每 10 次治疗获得 +150 Ringgit 额外奖励。**

## 车辆

Kesihatan 救护车会随着你的 sector 等级上升而解锁。

| 车辆 | 需要 sector 等级 | 价格 |
|---------|----------------------|-------|
| Tayoti Hiace KKN Ambulance | 1 | 免费 |
| Tayoti Hilux KKN Ambulance | 20 | 8,000 Ringgit |
| Handai City KKN Ambulance | 45 | 12,000 Ringgit |

KKN 代表 Kementerian Kesihatan Nasional(国家卫生部)。每辆救护车都有警笛和后部货舱(用来放担架)。

关于如何 spawn 它们,请看 [Vehicles](/sumaya/vehicles)。

## 军衔

Kesihatan 有 13 个军衔,大致基于真实的马来西亚医疗职位。你的头衔会随着 sector 等级上升而自动更新。

| 等级 | 军衔 |
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

从等级 81 起,你已站在顶端。之后在冲向 100 级上限的过程中,不会再有军衔变化。

## 贴士

- **为 server 启用受伤系统。** +15% XP 加成影响每一个人,包括你自己。整个 server 都受益,玩家也会不断回来接受治疗。
- **早点守在医院。** 大多数伤者通过救护车或 999 app 前来。待在医院附近意味着更快周转、更多 XP。
- **腿部骨折是轻松赚钱的好时机。** 他们走不稳,容易辨认,而夹板付 200 Ringgit。
- **TBI 虽慢但价值高。** 在 30 秒卧床休息期间,你可以诊断和治疗其他病人。别只站着看。
- **大规模伤亡事件。** 如果有大型车祸或事故,多名伤者就代表多笔快速收入。记得带担架。
- **与 Bomba 合作。** 消防员会烧伤;灭火后,预料会有绷带顾客上门。

## 接下来呢?

- [Polis](/sumaya/polis) 了解执法方面。
- [Bomba](/sumaya/bomba) 了解消防员的对应工作。
- [Vehicles](/sumaya/vehicles) 查看救护车列表。
- [Progression](/sumaya/progression) 了解 XP 如何累积。
