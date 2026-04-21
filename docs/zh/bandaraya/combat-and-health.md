---
title: 战斗与健康
description: Bandaraya 的武器、护甲、受伤机制和医疗系统。
lang: zh
translated_from_hash: b70f1d8e
translated_on: '2026-04-21'
needs_review: true
---
# 战斗与健康

Bandaraya 的武器使用 **ACS (Advanced Combat System)**,还有一套详细的健康系统(内部名称:**Saude**,葡萄牙语“健康”的意思)。这一页讲解子弹飞来飞去、血流满地时会发生什么 — 从双方角度来看。

## TL;DR

- 大部分平民都不能带枪。你需要 **Firearms Licence gamepass**(1,250 R$),或者你得在会发枪的队伍里(PDRM、KPTD、MAF、Developers、Moderation、Yang di-Pertuan Persekutuan)。
- 子弹会穿透透明的 / 不会碰撞的 / **Glass / Ignorable** 部件。它们会被 **Armor / EShield** 部件挡下。有些车辆是防弹的。
- 受伤时:你会流失 **血液** (Sangue),并累积 **疼痛** (Dor)。流血、打夹板、包扎。医护人员(KKM / SJAM)可以稳定你的状况。
- **重置按钮在 75 HP 或以下会被禁用** — 你不能用自杀来逃脱麻烦的状况。
- **KKM 或 SJAM 在线时,bleedout 计时是 5 分钟。** 医护人员值班时,被动 HP 回血也会被禁用。如果没有医护人员及时救你,你就会 respawn。

---

## 武器

### 如何拿到武器

| 来源 | 要求 |
| --- | --- |
| **Ammulaysia (Gun Dealer)** | Firearms Licence gamepass(1,250 R$)。合法,光明正大。购买之间有 5 分钟冷却时间。 |
| **Illegal Dealer (Hacker)** | 黑市。5 分钟冷却时间(reset/rejoin 也会重置)。 |
| **Team issue** | PDRM(X26P、CL2)、KPTD(X26P TAC)、MAF GGK/UTK(各种)、Developers / Moderation(HK-P30L)、Yang di-Pertuan Persekutuan(Glock 19、M4A1、MP5A3)。 |
| **Armoury** | IPD Dang Wangi 和其他基地的团队限定军械库。 |

平民不能拿着步枪到处走。Firearms Licence 可以在 Ammulaysia 买副武器;队伍则拿值勤武器。

### 射击(ACS 基础)

- **左键**开火。
- **R** 换弹。
- **B**(或特定工具键)收枪。
- 后坐力、散布和射速因武器而异。
- 边跑边射比瞄准射击准度差。

ACS 经过实战检验 — 合法武器的正常 DPS 大约 ~1500,峰值 ~3000。反作弊已调整到可以允许真正的战斗,不会踢走合法玩家。

### 子弹穿透

子弹能否穿透部件,要看部件是什么样的:

- **穿透**任何符合以下条件的部件:
  - **Transparent**
  - **Non-colliding**
  - 命名为 **Glass** 或 **Ignorable**
- **停在**任何命名为以下名称的部件:
  - **Armor** — 永远挡子弹
  - **EShield** — 能量护盾,挡子弹

这对掩护很重要:如果一堵齐胸高的墙是透明的,它可能挡不住子弹;木栅栏如果是会碰撞的,就会挡住子弹。

### 防弹车辆

有些车辆的座舱周围放了 `Armor` 部件 — 车内**完全防弹**。

- **AV4** (PDRM) — 座舱周围有 29 个装甲部件
- **V150** (PDRM)
- **UTK Hilux 变体** — 防弹座舱

一般的平民车辆**不**防弹。Proton Persona 挡不住子弹。

---

## 你穿的护甲

身体护甲通过 `Protecao` (葡萄牙语“保护”的意思)来建模:

| 物品 | 作用 |
| --- | --- |
| **Vest** | 躯干保护。耐久度 + 每次受击的伤害减免。 |
| **Helmet** | 头部保护。没戴头盔,headshot 直接致命。 |
| **Blast protection** | 减少爆炸伤害(vest 和 helmet 都有爆炸属性)。 |

**提示:** 以前没戴头盔,被摩托车撞到会秒死。那个机制已经去掉了,但头盔仍然值得戴,可以防 headshot。

护甲会随着受击而磨损;去军械库或集结区换新的。

---

## 受伤

Bandaraya 把健康建模成三个维度,不只是 HP:

| 属性 | 是什么 | 什么时候重要 |
| --- | --- | --- |
| **Sangue** (血液) | 血量,0–100 | 流血时会下降。到 0 就心跳停止。 |
| **Dor** (疼痛) | 疼痛程度 | 高疼痛会让你的屏幕模糊并减慢你的速度。 |
| **HP** (Humanoid) | 标准 Roblox 血量 | 降到 0 直接死亡。 |

还有体力、氧气和一堆姿态(奔跑、投降、被铐、流血、倒下等等)。

### 你可能进入的状态

| 状态 | 意思是什么 | 怎么进入的 |
| --- | --- | --- |
| **Ferido** (受伤) | 血量未满 | 任何伤害 |
| **Sangrando** (流血) | 正在流失血液 | 枪伤,重大创伤 |
| **Caido** (倒下) | 失能,但没死 | 严重伤害;可以被救活 |
| **Balloonbleed / bbleeding** | 危急出血 | 复合伤口 |
| **Dead** | RIP | Caido 太久,或 HP 0 |

### 受伤时的视觉效果

| 效果 | 什么时候出现 |
| --- | --- |
| Blur | 疼痛 / 受伤 |
| 色彩校正去饱和 | 失血 |
| Vignette(角落变暗) | 低血量 |
| 脏污叠加层 | 受伤 / 战斗伤害 |

---

## 医疗包物品

如果你有合适的团队/工具权限,就会在你的 kit 里。完整清单:

### 止痛 & 兴奋剂

| 物品 | 用途 |
| --- | --- |
| **Morfina** | 吗啡 — 止痛 |
| **Epinefrina** | 肾上腺素 — 兴奋剂,帮助复苏 |
| **Aspirina** | 阿司匹林 — 轻度止痛 |
| **Energetico** | 能量饮料 — 体力 |

### 血液 & 静脉

| 物品 | 用途 |
| --- | --- |
| **SacoDeSangue** | 血袋 — 恢复血量 |
| **Catheter** | 静脉导管 |

### 伤口护理

| 物品 | 用途 |
| --- | --- |
| **Bandagem** | 绷带 — 包扎伤口,减缓流血 |
| **Tourniquet** | 止血带 — 止住肢体出血 |
| **Splint** | 稳定骨折 |
| **Prolene / Nylon** | 缝合材料 |

### 气道(进阶,KKM)

| 物品 | 用途 |
| --- | --- |
| **ETube** | 气管内插管 |
| **NPA** | 鼻咽气道 |
| **BVM** | 面罩气囊 |
| **NRB** | 非再呼吸面罩 |
| **O2** | 氧气供应 |
| **Suction** | 清理气道 |

### 手术(进阶,KKM)

| 物品 | 用途 |
| --- | --- |
| **Scalpel** | 切 |
| **Clamp** | 外科钳 |
| **Anesthetic** | 麻醉 |
| **Skit** | 手术包 |

### 其他

| 物品 | 用途 |
| --- | --- |
| **Defib** | 除颤器 — 重启心跳停止的心脏 |

---

## 接受治疗

### 自我治疗(平民)

- **被动回血:** 每秒恢复最大 HP 的 1%(每 3 秒以 3% 为一 tick 结算),前提是没在被主动治疗中(`TraumaKitHealing` 会暂停它)而且没在流血。
- **自己包扎** — 减缓流血,恢复一些 HP。
- **喝 / 吃** — 小幅提升。

### 医护治疗 (KKM / SJAM)

医护人员可以:

1. **止血** — 用止血带或绷带。
2. **补血** — 用血袋。
3. **止痛** — 用吗啡。
4. **Defib** — 如果你的心跳停了。
5. **做手术**(只有 KKM)— 手术刀、麻醉、缝合。

坐好别乱跑。

### Bleedout 计时

- **KKM 或 SJAM 在线**(队伍:Institutional white / Forest green):倒下之后有 5 分钟 bleedout 窗口。被动回血会被禁用 — 必须靠医护人员救你。
- **没有医护在线:** 你可以随时 respawn(没医护的话,游戏不会把你扣着)。

### 重置按钮

重置按钮在 **75 HP 或以下会被禁用** — 这是为了阻止 **RTAA**(reset 来逃避逮捕)。如果你受伤了,硬撑过去或等医护。

见 [Arrest & Law](/bandaraya/arrest-and-law#rtaa)。

---

## Hardpoint — 占点 / 突袭游戏模式

**Hardpoint** 是一个占点游戏模式,基本上完全保留给 **OCG vs OCG** 的团体活动。它不是日常功能 — 只有 OCG 领袖发起突袭时才会运行。

运作方式(已验证):

- 一位 OCG 领袖(主 OCG 团队中 rank 150+)在聊天栏输入 **`:startraid <Defenders> <Hostiles>`**,从以下两个选项中选:`BC`(Basilicata Camorra)、`OCG-Beta`、`Nightraiders`、`Ekstranet`。
- **Point**(`Workspace.HardPoints` 中的占点触发器)启动 — 变成可见,触发器变成实体。
- 指定的 defender / hostile 队伍的玩家碰触发器来为自己队伍占点。死掉的玩家不能占点 (`DeathCap = false`)。
- **计时:** 启用的点上是 300 秒。队伍占着的时候会累计分数。
- **获胜门槛:** 1250 分,或者 OCG admin 输入 **`:cancelraid`**。
- **HardpointUI** 显示两条进度条(Home / Away) + 公告框 + 分数 + 计时。

如果你不是 OCG,你可以看但不能得分。PDRM / KPTD / BOMBA / KKM 不参加。

---

## 小贴士 & 陷阱

- **掩护不一定显眼。** 透明部件挡不住子弹。蹲在结实的、有命名的东西后面。
- **头盔救命。** 要去打枪战,戴一个。
- **KKM 或 SJAM 在线就是 5 分钟 bleedout。** 如果没有医护团队在线,你可以更快 respawn。
- **重置在 75 HP 或以下会反 RTAA。** 别试。
- **你的疼痛属性在治疗前一直都在。** Blur 和减速不会消失。
- **作为公共服务团队,别先开枪。** 这是严重违规。
- **枪店冷却时间。** Ammulaysia 和 Illegal Dealer 购买之间要等 5 分钟。重新加入时冷却时间也会重置以防滥用。

## 另见

- [Arrest & Law](/bandaraya/arrest-and-law) — 拘留、逮捕机制、LTAA / RTAA
- [Emergency Services](/bandaraya/emergency-services) — KKM + SJAM 角色
- [Economy](/bandaraya/economy) — Ammulaysia 和 Illegal Dealer 店铺
- [Gamepasses](/bandaraya/gamepasses) — Firearms Licence
- [Vehicles](/bandaraya/vehicles) — 防弹车辆列表
- [Rules](/bandaraya/rules) — 战斗礼仪和严重违规
