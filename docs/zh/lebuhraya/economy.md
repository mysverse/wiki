---
title: 经济与经验值
description: Ringgit（BR）、1-500 级等级系统、XP 加成，以及 Lebuhraya 中最快的赚钱方法。
lang: zh
translated_from_hash: 5542a6bf
translated_on: '2026-04-21'
needs_review: true
---
# 经济与经验值

Lebuhraya 的一切都围绕着两个数字:您的 **Ringgit (BR)** 和您的**等级**。本页说明两者如何运作、来源为何,以及如何更快地赚取。

## Ringgit (BR) — 已追踪但尚未启用

Lebuhraya 的货币系统**仅部分实施**。您的账户确实带有 BR 余额(初始为 **1000** 并在各会话之间保留),但在当前版本的游戏中:

- **Lebuhraya 中没有任何地方显示您的 BR 余额。** 没有 HUD 显示、没有 leaderstat 条目、没有 Phone 应用显示。唯一读取您余额的脚本是 Tablet 应用内仅限员工使用的管理工具。
- **唯一有效的赚取途径是赛车。** 赢得比赛会调用 `Currency.Debit` 并记入您的账户。您可能预期的所有其他"付款"(Food Delivery、Post Office 薪水、拖车费用、燃油销售、商店购买、维修费用)目前在 Lebuhraya 中均为空操作 — 钩子存在但被注释掉、被占位或被绕过。
- **Lebuhraya 中没有任何地方消耗 BR。** 商店是免费的。油泵不收费。收费站不收费。维修区不收费。住房家具不收费。开发者已准备好基础设施,许多工作系统都有 `rewardMode = "BR"` 分支留作 TODO。
- **内部的每项工作计数器是独立的。** Post Office 会计算一个 `Salary` 值,但它储存在该工作自己的 DataStore 中,而不是您的 BR 账户中。

**这对您意味着什么**:不要根据 BR 来规划您的游戏计划。根据工作的 XP 速率选择工作,根据车辆的驾驶体验(而非价格)选择车辆,并享受目前所有免费的内容。当 BR 启用时,您从赛车赚取的余额将继续保留。

### 目前追踪的内容

- 起始余额:**1000 BR**(在 MYSverse Lebuhraya 各会话之间共享,储存在 DataStore2 键 `ringgit` 之下)。
- 有效的赚取来源:仅比赛奖励。
- 有效的消耗来源:Lebuhraya 特定代码中没有。
- 共享的 MYSverse 系统(Dealership、Tow、TapNGo)包含实时的消耗逻辑,可能会或可能不会在 Lebuhraya 中触发 — 无论哪种情况,您都不会在屏幕上看到扣款。

### 未来将使用 BR 的项目(计划中)

根据代码提示,以下项目已规划但尚未连接:

- PETROMAS / Radtrol 的燃油付款(价格已定义:1/2/3 BR/L)
- 商店购买(商店物品有 `Price` 字段)
- Food Delivery、Checkout、Lumberjack、Fishing — 全部都有空的 `BR` / `Both` 奖励分支
- Post Office 薪水连接到真正的 BR 账户
- 车辆 dealership / 购买
- 维修区的维修费用

## 等级与 XP

共有 **500 级**。每一级需要 **1000 XP** 才能完成。等级上限是固定的 — 您无法升级超过 500 级,但之后 XP 仍会继续累积用于徽章和职业级别。

### 赚取 XP

XP 有两种类型:

**驾驶 XP(被动)。** 每次您在驾驶座上行驶 **1500 stud**,就会获得 **50 XP**。计数器仅在您坐在座位上且移动速度比步行快时前进 — 停下的车辆不会获得 XP。这是大多数玩家最大的单一 XP 来源,尤其是在早期等级。

**工作 XP(主动)。** 每完成一次工作动作会奖励一部分 XP。

| 工作 | XP 奖励 |
|---|---|
| Food Delivery | 每次送达 **250 XP** |
| Taxi | 不等 — 每 stud 行程约 **0.11 至 0.13 XP**(4000-stud 行程 = 440 至 520 XP) |
| 其他工作 | 参见 [Jobs](/lebuhraya/jobs) 了解每项工作的详情 |

### XP 加成叠加

多个奖励会**累加**叠加在您的基础 ×1 倍率之上。最终倍率会应用于每一次 XP 奖励。

| 来源 | 奖励 |
|---|---|
| 双倍 XP 周末(定期活动) | 倍率设为 ×2 |
| XP Boost gamepass | +50% |
| Roblox Premium 会员 | +25% |
| Injury System 启用 | +15% |
| Token XP Boost(消耗品) | +100% |
| Convoy 奖励(最高) | +50% |

因此,Premium 玩家在双倍 XP 周末期间,处于满编 convoy 中并启用 XP Boost token,可以达到远超 ×3 的倍率。叠加这些是达到 500 级最快的方法。

### Convoy 奖励细目

Convoy 奖励以其独特的方式叠加:

- **基础奖励**(加入 convoy):+15%
- **每位额外成员**(超过两人):每人 +5%
- **convoy 中的朋友**:+10%
- **convoy 中的同队**:+10%
- **连击奖励**(在 convoy 中花费的时间):每分钟 +2%,最高 +10%

convoy 总倍率上限为 **+50%**。

## 哪些会重置,哪些会保存

- **正式游戏**:等级、XP、BR、车辆、住房 — 当您离开 server 时全部自动保存。您无需手动保存。
- **Studio / 测试 server**:加入时 XP 会重置为 0。会出现警告信息。这是正常的 — 您的正式进度不会受影响。
- **私人 server**:经济系统已禁用,因此您的余额不会改变,但主游戏中也不会丢失任何东西。

> 如果您是使用 Fast Travel 的员工,请注意基于距离的 XP 在每次 fast-travel 后会暂停 5 分钟以防止偏差。普通玩家无法使用 Fast Travel,因此此冷却时间不适用于他们。

## 快速升级小贴士

1. **在长距离路线上保持在驾驶座上。** 长途驾驶是被动 XP 最大的单一来源。
2. **从 10 级开始做 Food Delivery。** 每次送达 250 XP 是解锁更高级别之前最好的固定速率。
3. **与至少一位同队的朋友结成 convoy。** 同时激活朋友奖励 (+10%) 和同队奖励 (+10%)。
4. **订阅 Roblox Premium。** 您所做的一切都 +25% XP。
5. **将 XP Boost token 保留用于长时间会话。** +100% 基于持续时间,因此在投入时段内使用(整个晚上的赛车或送货)。
6. **周末活动**偶尔为所有人双倍 XP。留意公告。

## 下一步

- [Vehicles](/lebuhraya/vehicles) — 燃油价格与所有权
- [Jobs](/lebuhraya/jobs) — 每项工作的 XP / BR 细目
- [Passes and Boosts](/lebuhraya/passes-and-boosts) — 如何获得 XP Boost gamepass
