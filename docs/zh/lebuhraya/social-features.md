---
title: 社交功能
description: Lebuhraya 的车队、999 紧急呼叫及游戏内手机功能。
lang: zh
translated_from_hash: "4c6589bb"
translated_on: 2026-05-18
needs_review: true
---
# 社交功能

Lebuhraya 拥有几个专为提升多人游戏体验而设计的系统 —— **Convoy** 系统让玩家一起赚取奖励,**999 紧急呼叫**系统实现玩家主导的角色扮演,**Phone** 用于应用程序和通讯,以及 **Tokens** 提供临时加成。

## Convoy

一起开车,赚取更多。Convoy 通过可叠加的 XP 倍率奖励协作游玩。

### 创建 convoy

1. 打开 convoy 菜单(从主菜单或顶栏)。
2. 选择 **Create convoy** —— 您将成为队长。
3. 可以邀请特定玩家,或将 convoy 设为公开,让 500 stud 范围内的其他玩家申请加入。

### 加入 convoy

- **通过邀请**:队长向您发送邀请;请在 30 秒内接受,否则会失效。您也可以拒绝。
- **通过申请**:打开 convoy 菜单,查看 500 stud 范围内的公开 convoy,并申请加入。队长有 30 秒时间批准您的申请,否则将失效。

双方握手均使用相同的 30 秒超时 —— 如果错过了,只需重新邀请或重新申请即可。

### Convoy 规则

- **最大规模**:6 名成员
- **距离要求**:您必须保持在另一名 convoy 成员的 **200 stud** 范围内,奖励才会生效
- **队长**:设定邀请规则,并可移除成员

### 奖励如何叠加

Convoy 奖励会加入到您现有的 XP 倍率叠加中(请参阅[经济与 XP](/lebuhraya/economy#the-xp-multiplier-stack))。

| 组成部分 | 数值 |
|---|---|
| 基本 convoy 奖励 | +15% |
| 每位额外成员(两名之后) | 每人 +5% |
| Convoy 中的好友 | +10% |
| Convoy 中的同队成员 | +10% |
| 连续奖励(convoy 时长) | 每分钟 +2%,上限 +10% |
| **convoy 奖励最高总值** | **+50%** |

Convoy 车辆中的乘客可获得驾驶员奖励的一半。

配置良好的 6 人 convoy(好友、同队、一起开车 5 分钟以上)可以持续达到 +50% 的上限。

## 999 紧急呼叫系统

Lebuhraya 的紧急服务由玩家主导。任何玩家都可以拨打 999;紧急队伍的玩家负责响应。

### 拨打 999

1. 打开您的 **Phone**(顶栏图标)。
2. 点击 **999** 应用程序。
3. 选择事故类型:
   - **Car Crash**
   - **Injured Person**
4. 您的呼叫会广播给所有在岗的紧急响应人员。

每个活跃事故会显示在响应人员的寻呼机上,并附有您的位置。

### 响应(紧急队伍)

如果您属于 **Bomba**、**Polis Trafik**、**Undercover Police** 或 **Kesihatan**:

1. 装备您的 **Pager** 工具。
2. 查看活跃事故面板。
3. 点击以接受事故 —— 它将成为您分配到的案件。
4. 驾车前往该位置。
5. 根据事故类型处理事故:
   - **Car Crash** —— 使用扩张器/链锯救出被困驾驶员(Bomba)、处理伤势(Kesihatan)、管理现场(Polis)。
   - **Injured Person** —— 稳定伤者并运送到医院(Kesihatan)。
6. 一旦您抵达现场,且最低响应时间(**30 秒**)已过,即可处理事故以获得奖励。

### 限制

- 同时最多可存在 **10 个活跃事故**。
- 呼叫者重复拨打 999 有冷却时间。
- 如果您在事故处理中途更换队伍,您的任务将被取消。

## The Phone

每位玩家都可以从顶栏访问手机。

### 内置功能

- **999 紧急呼叫**
- **GPS 导航** —— 设定前往任何 POI 的路径点
- **系统时钟**显示游戏内时间

### 应用程序

- **Rafahia App v3.0** —— MYSverse 社区的统一社交应用(消息、个人资料、跨体验功能)。

随着 MYSverse 平台增添新功能,未来可能会出现更多手机应用。

### 手机提示

- 当你需要在世界中保持行动同时执行快速操作时，使用 Phone。
- GPS waypoint 是在没有 staff-only fast travel 的情况下到达 POI 的最安全方式。
- 如果 emergency 或 GPS screen 为空，等角色完全 load 后关闭手机再打开。

## MyPod Music Player

**MyPod** 是顶栏音乐播放器。它不是车辆 spawner。

MyPod 会做的事：

- 播放音乐时显示 mini player bar。
- 打开完整播放器，包含 track list、album-art panel、progress scrubber 和 volume slider。
- 支持 play/pause、previous/next、shuffle、repeat 和 favourites。
- 如果启用 **Auto-play**，当你坐进车辆时可以自动播放随机曲目。

MyPod **不会**做的事：

- 它不会 spawn 车辆。
- 它不会 despawn 车辆。
- 它不会替代地图中的实体车辆 spawner pads/markers。

## The Tablet

可从顶栏访问的辅助设备。可以把它视为您的"职业 HUD" —— 屏幕更大,数据比手机更多。

### 应用程序

- **Vehicle** —— 查看附近任何玩家的车辆登记和驾驶执照信息。适用于角色扮演场景(抽查、保险查询)。执照可见度受队伍限制 —— 只有某些队伍(APJ、Polis)可以查看完整的执照详情。
- **Developer** *(仅限工作人员)* —— 管理员审查视图,显示玩家详情、BR 余额、POS 金钱和消息历史。
- **Moderator** *(仅限工作人员)* —— 额外的工作人员审查工具。

## Report 系统

当你需要向 MYSverse 团队发送反馈、bug report 或玩家举报时，使用游戏内 **Report** 系统。

### 应包含什么

好的报告要具体：

- **发生了什么** — 例如 "Vehicle spawner opened but Spawn did nothing."
- **在哪里** — 城镇、商店、spawner、道路或大致 landmark。
- **你当时在做什么** — 队伍、车辆、工作、工具、菜单。
- **是否重复发生** — 一次、每次、仅 mobile、仅 private server。
- 如果是玩家行为问题，提供 **玩家名称**。

### 何时使用

Report 可用于：

- 损坏的菜单、缺失按钮、文字被裁切或无法阅读的 UI
- 车辆 spawn/fuel/repair 问题
- 无法完成的 job tasks
- 地图洞、卡住点或糟糕 collision
- abusive 玩家行为
- 关于 balance、payouts 和 roleplay tools 的反馈

不要把正常 team locks、gamepass requirements 或 fuel-pump mismatch warnings 当作问题；那些是预期的游戏规则。

## Identity Card (IC)

Lebuhraya 会在 Phone / Tablet app 中为每位玩家发放**马来西亚风格身份证**，使用真实马来西亚 IC 格式生成：

```
YYMMDD-PB-XXXX
```

- **YYMMDD** — 你的 Roblox 账号加入日期（年、月、日）。
- **PB** — 玩家来源代码。多数玩家默认为 **14**（MYSverse KL 区域）；专用 ID（Kad Polis、KKM、BOMBA、SJAM、PHG、MKT）使用不同代码。
- **XXXX** — 你的 Roblox 账号 ID 后四位。

因此，如果你在 2020 年 3 月 15 日加入 Roblox，并且账号 ID 以 6789 结尾，你的 IC 会是 **200315-14-6789**。每次游玩你的 IC 都一致，不会改变。

特殊身份证（执法用 Kad Polis、医疗用 KKM 等）会根据你的队伍自动发放。使用 `/me show IC` 或与 roleplay NPC 互动即可出示。

## 驾驶执照

每位玩家都会在背包中获得一个 **Driving Licence** tool。执照号码根据你的账号加入日期和 Roblox 账号 ID 后四位生成，因此每位玩家都是独一无二的，并且在不同会话中保持一致。

**APJ 官员**可以吊销玩家的执照若干分钟。被吊销的玩家会看到横幅:*"APJ: Your driver licence has been suspended for X minutes."* 吊销会自动解除,或者可以由 APJ 成员提前撤销。

执照被吊销在技术上并不会阻止您开车,但这是角色扮演的后果 —— 请配合演出。

## 代币和加成

部分临时优势来自 **token** —— 您库存中的消耗型加成物品。

| Token | 效果 |
|---|---|
| **2× XP Boost** | 在设定时长内将您的 XP 倍率加倍 |
| **2× Season Pass Boost** | 将 Season Pass XP 进度加倍(在赛季进行中时) |
| **Team Access Pass** | 在不拥有 gamepass 的情况下授予受 gamepass 限制队伍的临时访问权限 |

### 如何获得 token

- 职业等级奖励(在某分支中晋升)
- Season Pass 等级奖励
- 促销活动
- 有时与 gamepass 捆绑
- 由 private server owner 在 event 或 roleplay session 中授予

### 如何使用 token

从你的 inventory 激活 token（**Main Menu -> More -> Tokens**）。当至少一个 token 运行时，**Active Tokens HUD** 会自动出现 — 每个 active token 显示 icon、name 和 **M:SS countdown**。Tokens 可并行运行（你可以同时拥有 2× XP Boost + Season Pass Boost + Team Access）。

Tokens **在激活时即消耗** — 一旦开始计时就不能暂停。请留给连续游玩的时段。

## 聊天和消息

标准 Roblox 聊天可通过 **/**(斜线)使用。如果您只想与当前队伍交流,可选择队伍聊天。对角色扮演友好 —— 请保持聊天内容干净,并尊重 MYSverse 社区规则。

## 下一步

- [经济与 XP](/lebuhraya/economy) —— convoy 倍率的适用位置
- [工作](/lebuhraya/jobs) —— 紧急队伍工作详情
- [通行证与加成](/lebuhraya/passes-and-boosts) —— Gamepass 与 token 对比
