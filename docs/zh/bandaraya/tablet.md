---
title: 平板电脑
description: Bandaraya 的队伍专属平板工具 — MDT、MyEmergency、MyTow、KKM Logger 及其他应用。
lang: zh
translated_from_hash: 1d97fc65
translated_on: '2026-04-21'
needs_review: true
---
# 平板电脑

游戏内的**平板电脑**是一台多应用设备,为你的队伍提供额外功能。应用会根据你的队伍颜色来解锁 —— POLIS 警员看到 MDT,拖车员看到 MyTow,如此类推。

> **平板 ≠ 手机。**[手机](/bandaraya/phone)是通用的 topbar 应用界面(MyPay、e-hailing、CAG、999、MyCar 等)。平板则是你从 backpack 中装备的队伍专属**工具**。

## TL;DR

- 装备你的**平板工具**来开启设备。
- 应用会根据你的队伍出现。
- 平板也会显示通知和警报。
- Topbar 会有一个图标方便快速切换。

---

## 使用平板

1. 打开你的 backpack。
2. 装备**平板**工具(如果你的队伍符合资格就会获得)。
3. 平板界面就会打开。
4. 点击应用图标进入该应用。
5. 装备其他工具或按切换图标来关闭。

Topbar 会有一个与平板相关的图标 —— 点击它就能切换开关而无需装备。

---

## 应用

### MDT — Mobile Data Terminal(POLIS)

警方信息终端。具备 Polis 品牌标识的警方风格真实界面、横向标签和等宽字体数据栏。

#### BG Check
查询任何玩家:
- 队伍和阶级
- 当前 BOLO 状态
- 最后逮捕记录
- 他们当前的位置

用来决定是否要拦截某人非常有用。

#### BOLO 列表
实时查看所有活跃的 BOLO(Be On the LookOut 警报)。嫌疑人被逮捕时,BOLO 会自动清除。

#### 添加 BOLO
以一个理由将玩家列入 BOLO:
- 所有在班警员都会收到徽章、声音和 toast 警报通知。
- 实时广播到整个 POLIS 队伍。

仅限 POLIS;其他队伍只会看到灰掉的标签。

### MyEmergency

紧急服务协调应用 —— 供紧急队伍(POLIS、BOMBA、KKM、SJAM)使用。管理事故来电,协调多队伍响应。

### Vehicle Management

通用车辆应用 —— 任何人只要有平板都可以使用其基本功能。功能包括:
- **车牌查询** —— 查询车辆的注册信息
- **注册管理** —— 注册你拥有的车辆
- **Spawn 追踪** —— 查看你已 spawn 的车辆

### MyTow

拖车员应用:
- 查看活跃的拖车任务
- 申请拖车工作
- 远程管理车锁(直接从平板移除车锁,无需走回去)

### KKM Logger

卫生部应用:
- 记录医疗行动
- 追踪病人治疗
- 为医疗审计进行事故报告

仅限 KKM。

### Developer App

开发者工具和诊断。仅限开发者。

---

## 通知

平板通过两个事件频道接收通知:

- **平板通知** —— 全局警报(火灾出动、999 来电、BOLO、管理员公告)。
- **应用专属通知** —— 在特定应用的情境内(例如:计程车司机的新订单、POLIS 的 MDT 警报)。

当通知到达时,topbar 上的平板图标会显示视觉指示,相关应用会跳动。

---

## 队伍限制

你能看到哪些应用取决于你队伍的 `TeamColor`:

| 队伍 | 可用应用 |
| --- | --- |
| **POLIS、KPTD、Polis Bantuan** | MDT、MyEmergency、Vehicle Management |
| **BOMBA** | MyEmergency、Vehicle Management |
| **KKM、SJAM** | KKM Logger、MyEmergency、Vehicle Management |
| **Towing Services** | MyTow、Vehicle Management |
| **MyTransit、Bus Services** | Vehicle Management |
| **Developers** | Developer App + 所有其他 |
| **平民(Visitors、Malaysians)** | 仅 Vehicle Management(基本车牌查询) |

如果你期待的应用不在那里,检查一下你的队伍。

---

## 贴士与注意事项

- **平板工具在 spawn 之间保持** —— 你死了也不会丢失它。
- **Topbar 切换比装备更快**,适合快速查看。
- **MDT BG Check 实时更新** —— 目标的位置是即时的。
- **BOLO 在逮捕时自动清除** —— 无需手动清理。
- **车牌查询对任何人都有效** —— 你无需是 POLIS 也能查询车牌。

## 另请参阅

- [紧急服务](/bandaraya/emergency-services) —— 使用平板的 POLIS / BOMBA / KKM 角色
- [逮捕与法律](/bandaraya/arrest-and-law) —— BOLO / BG check 如何融入逮捕程序
- [工作](/bandaraya/jobs) —— 给拖车员的 MyTow
- [车辆](/bandaraya/vehicles) —— 注册与车牌查询
