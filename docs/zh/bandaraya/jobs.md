---
title: 工作
description: Bandaraya 的各种工作 — 邮政服务、出租车、拖车、巴士司机以及机构岗位 — 包括薪资和级别说明。
lang: zh
translated_from_hash: 33dd3a97
translated_on: '2026-04-21'
needs_review: true
---
# 工作

在 Bandaraya 赚取 BR 的最快途径。以下全部都是平民可做的工作（如下注明,部分需要 gamepass 或加入 group)。PDRM / BOMBA / KKM 等岗位不在此页 — 那些岗位赚的是声望，不是薪水。那些请参考 [紧急服务](/bandaraya/emergency-services)。

## 简要概览

| 工作 | 进入条件 | 节奏 | 适合 |
| --- | --- | --- | --- |
| **Postal Service (POS)** | 仅限 Visitors / Malaysians / HCC / Developers | 稳定 | 想要稳定赚取 BR 的新玩家 |
| **Taxi Driver** | Taxi Services 队伍 或 Taxi Driver gamepass (150 R$) | 按次计费（有差异） | 喜欢客户服务类角色扮演的玩家 |
| **Towing** | Towing Services 队伍 | 按次锁车 / 拖车计费（锁车费 500 BR） | 有拖车 group 的玩家 |
| **开巴士** | MyTransit / FirstGroup / Fermuda / Bus Services group | 按路线计费 | 喜欢固定路线驾驶的玩家 |

---

## Postal Service (POS)

最常见的首选工作。不需要 gamepass — 但你必须处于 **偏平民的队伍**： **Visitors**、 **Malaysians**、 **High Class Citizen** 或 **Developers**。PDRM / BOMBA / KKM 等等不能作为 POS 打卡上班（游戏会在开始工作那一步挡住你）。

### 流程

1. 在 POS 终端机前 **开工**（寻找 POS 标牌 — 见 [地图](/bandaraya/locations)）。
2. 从附近的 **Postbox** **收取包裹**。你会随身携带。
3. 把收取的包裹在 **Station** **处理**。
4. **派送**到城市里的 **Mailboxes**。
5. 每一次派送会获得 BR 并给予 XP。

### 等级与薪资

一边派送一边升级，每次派送的薪水也会提升。

| 等级 | 下一级所需 XP | 每次派送薪水 |
| --- | --- | --- |
| 1 | 100 | 70 BR |
| 2 | 200 | 80 BR |
| 3 | 300 | 90 BR |
| 5 | 500 | 110 BR |
| 10 | 1,000 | 160 BR |
| 15 | 1,500 | 210 BR |
| **20（上限）** | 2,000 | **260 BR** |

公式：薪水是 `60 + (等级 × 10)` BR。

你在 Level 20 封顶，每次派送 260 BR。那是最高的。

每一次派送给予 **25 XP**，所以：
- Level 1 → 2 需要 **4 次派送**（100 XP）
- Level 10 → 11 需要 **40 次派送**
- Level 19 → 20 需要 **76 次派送**

从零到封顶的总过程：约 760 次派送，大约 19 次升级。

### 车辆

POS 有 10 种专用车辆： **Toyota Hiace Pos Laju**（8 种变体）、 **Toyota Hilux Pos Laju**，以及给爆发派快递员的 **EX5** 电单车。

### 小贴士

- 持续前进 — 派送地点分布得很广。
- 电单车在拥堵中移动较快；货车一次能载更多。
- **不要以 POS 身份做乱。** 滥用工作队伍来作案是可被封禁的违规行为。

---

## Taxi Driver

响应乘客预订、把他们载到目的地、收取车资。

### 进入条件

- **Taxi Driver gamepass** (150 R$) — 最便宜的办法。
- **或者** 加入 **Taxi Services** group（SSM 注册）。

持有 gamepass 的人也可以从菜单切换到 Taxi Services 队伍。

### 流程

1. 在出租车公司（Fetch、Flaxim、Tompang、Fermuda 或独立 Taxi Services）作为司机 **登入**。
2. 你的状态会转为 **Available**。
3. 当乘客预订行程时，你的 UI 会显示包含目的地和描述的预订。
4. **接受**预订（或取消）。
5. 接载乘客。
6. 乘客上车后 **开始**行程。
7. 把他们载到目的地。
8. **结束**行程 — 你会获得 BR（`stud 距离 × 公司费率`，最少 30 stud），你的乘客数会增加。

当班次结束时登出。

### 车资如何计算

每 stud 的费率取决于公司：

| 公司 | 费率（BR/stud） |
| --- | --- |
| Yi Heng Taxi Services（通用的 "Taxi Services" 队伍） | 0.05 |
| Fetch | 0.05 |
| Fermuda | 0.04 |
| Tompang | 0.03 |
| Flaxim | 0.03 |

1 000-stud 的行程 = 50 BR（Yi Heng / Fetch）、40 BR（Fermuda）、30 BR（Tompang / Flaxim）。不足 30 stud 的短程不付费。

### 出租车车辆

你可以从出租车生成点租用/驾驶这些车：

| 车辆 | 价格（BR） |
| --- | --- |
| Proton Saga | 400 |
| Proton Saga 2022 | 600 |
| Perodua Bezza | 750 |
| Proton Preve | 850 |
| Proton Persona | 1,000 |

### 小贴士

- **安全驾驶。** 乘客在你车里死亡的话，角色扮演体验不会太好。
- **开始前检查目的地。** 有些预订是垃圾 — 你可以取消。
- **你的钱和乘客数会在 session 之间保存。** 你在累积职业生涯。

---

## Towing

你站在秩序一方 — 锁住违法停车的车，并向车主收取 500 BR 才能解开。

### 进入条件

加入 **Towing Services** group（拖车经营者的 group）。Towing Services 队伍会变得可用。

### 你会得到的工具

| 工具 | 作用 |
| --- | --- |
| **Traffic Wand** | 指挥交通。 |
| **Clamp Remover** | 解除锁车（车主付款时用）。 |
| **Tow Toolkit** | 完整的拖车链。 |
| **Tow Placeables** | 在现场放置锥筒、标牌、路障。 |

### 流程

1. 发现违法停放或被遗弃的平民车。
2. 靠近并使用 **Clamp** 工具。
3. 锁扣装上。15 分钟倒数开始。
4. 车主会看到付费提示： **500 BR 解锁**。
5. 他们付款后，锁扣会自动解除。
6. 你获得该笔费用。

### 拖车车辆

3 款拖车： **Isuzu Tow Truck**、 **Isuzu Tow Truck Bed**、 **Toyota Hilux Tow**。

### 小贴士

- **锁车是一个大动作。** 只在真正合理的情况下执行（堵住车道、堵住斑马线、严重违停在禁停线上）。随意锁车骚扰平民是可被封禁的违规行为。
- 动作会通过 webhook 记录在 Discord 上 — 工作人员可以看到是谁锁了谁。
- 远程解锁（从拖车 tablet）也是一种选择。

---

## 开巴士

巴士司机载客，按路线赚钱，本身不用付车资。

### 进入条件

加入其中之一： **MyTransit**（5032738 / 10394166）、 **FirstGroup** / **Fermuda**，或 **Bus Services** 经营者的 group。每一个都有自己的级别要求。

### 流程

1. 在你所属经营者的车场 spawn 一辆巴士。
2. 驾驶 KL 周围的路线。
3. 乘客坐上乘客座位即登车 — 他们的车资会自动处理（CAG 卡或现金 5 BR）。
4. 到下一个站时让他们下车。

### 可用的巴士型号

- **MyTransit**：10 款（TKL_B5LH、TKL_MINIBUS、TKL_CITIE、TKL_K230UB、TKL_URBANO、MYTR_URBANO、TKL_TEMPORARY、TKL_Harimau Evo、TKL_NL323F、TKL_E500）。
- **FirstGroup**：4 款（FG_K230UB、FG_NL323F、Vitaru Urban Mini、FG_MAN Double）。
- **Fermuda**：几辆巴士加上跨界车。
- **Bus Services / SPAD**：各种 SPAD 注册的车队。

### 小贴士

- **司机免费搭乘。** 如果你坐在司机位置，不会被扣车资。
- **通勤者使用 CAG 卡** — 他们可能有也可能没有。如果没有，车资变成欠款；那是他们和 kiosk 的事，不关你的事。
- **不要为了去吃午饭而跳过站点。** 角色扮演的完整性很重要。

---

## 工作比较

| 工作 | 进入门槛 | 每小时 BR（约略） | 角色扮演深度 |
| --- | --- | --- | --- |
| **POS** | 无 | 中等，稳定 | 低 — 派送循环 |
| **Taxi** | 150 R$ 或 group | 起伏，量大时高 | 高 — 乘客 + 交通 |
| **Tow** | group | 每次行动高，但次数少 | 中 |
| **Bus** | group | 取决于路线 | 高 — 固定路线、交通 |

有 **HCC gamepass** 的话，以上所有工作每次行动的 BR 都会提升。

## 另见

- [经济](/bandaraya/economy) — 完整的赚钱/花钱参考
- [Gamepasses](/bandaraya/gamepasses) — Taxi Driver、HCC
- [队伍](/bandaraya/teams) — 交通队伍进入条件
- [车辆](/bandaraya/vehicles) — spawn、燃油、车行
- [Tablet](/bandaraya/tablet) — MyTow 和 Vehicle Management 应用
