---
title: 逮捕与法律
description: Bandaraya 逮捕机制介绍 — LTAA、RTAA、传票、监禁时长和嫌疑人权利。
lang: zh
translated_from_hash: 61b784e3
translated_on: '2026-04-21'
needs_review: true
---
# 逮捕与法律

Bandaraya 的逮捕机制如何运作 — 从警员和嫌疑人的角度来看。

## TL;DR

- **谁可以逮捕**:PDRM(任何级别)、KPTD(任何级别)、Polis Bantuan(级别 2+)。Yang di-Pertuan Persekutuan 也有逮捕工具。
- **逮捕流程**:拘留 → 拖拉 → 上铐 → 逮捕。嫌疑人进入 Arrested 队伍,3 分钟释放计时。
- **LTAA**(leave to avoid arrest):被拘留时断线 → 回来后自动被逮捕 3 分钟。
- **RTAA**(reset to avoid arrest):HP 75 或以下时 reset 按钮被禁用。
- **传票**(Saman):警员当场开出的罚单。
- **申诉**:通过 Malaysia community server 的 moderator 处理。

---

## 谁可以逮捕

不是每个人都能给你上铐。逮捕权仅限于:

| 队伍 | Group | 级别 | 备注 |
| --- | --- | --- | --- |
| **PDRM** | 1182710 | 任何 | 标准警察 |
| **KPTD(军事警察)** | 2817141 | 任何 | 任何级别 — 对 MAF 和平民都可执法 |
| **Polis Bantuan** | 6563708 | 2+ | 技术上范围不限,但通常以交通相关角色扮演 |

**Yang di-Pertuan Persekutuan**(MYSverse 级别 220+)在其 loadout 中携带 `Arrest` 工具用于仪式性角色扮演,但游戏的逮捕代码并不认可他们拥有逮捕权 — 他们实际上无法完成逮捕流程。真正的逮捕需要 PDRM 或 KPTD 参与。

RELA、BOMBA、KKM、MAF 普通成员、SJAM、平民:**没有逮捕权**。他们可以作为证人、报案或在获得同意的情况下搜查,但不能逮捕。

---

## 逮捕流程(警员角度)

### 1. 拘留

- 接近嫌疑人。
- 使用 **Detain** 动作(通过 cuffEvents)。
- 嫌疑人进入拘留状态 — 角色播放投降动画,移动受限。

### 2. 拖拉(可选)

- 你可以将已拘留的嫌疑人拖到你的车辆或拘留区。
- 在逮捕多人时很有用 — 把他们集中在一起。

### 3. 按倒在地(可选,多名嫌疑人)

- 将已拘留的玩家按倒在地。
- 在同时处理多名嫌疑人时,可以这样叠在一起。

### 4. 上铐

- 对已拘留的嫌疑人使用 **Cuff** 工具。
- 播放上铐动画。
- 嫌疑人现在被上铐 — 无法拿出工具,无法奔跑。

### 5. 逮捕

- 使用 Arrest 动作(通过 cuffEvents 或径向菜单)。
- 嫌疑人的队伍变为 **Arrested**。
- 启动 **3 分钟释放计时**。
- 创建 **逮捕记录**,包含:
  - 警员 ID
  - 逮捕时间
  - 位置(X, Y, Z)
  - 类似 `KL-{UserId}-{Index}` 的 **参考编号**
  - 逮捕描述
  - OCG 标记(如果嫌疑人属于 OCG 队伍)

Discord webhook 会触发以记录此次逮捕。

### 基于距离的逮捕

警员可以使用 `ArrestPlayerByDistance` — 在一定范围内逮捕某人而无需实际上铐。用于嫌疑人已被击倒或远距离配合的情况。

---

## 被逮捕是什么感觉(嫌疑人角度)

- 你的队伍变为 **Arrested**(Bright violet)。
- **BlindedLayer** 覆盖你的屏幕(你被蒙上眼睛)。
- **ArrestedGUI** 显示:
  - 逮捕警员的资料
  - 距离释放的 3 分钟倒计时
  - 你的参考编号
- 移动受限;工具被禁用。

3 分钟后,游戏会自动释放你,你可以再次选择队伍。

---

## LTAA — Leave To Avoid Arrest

**在被拘留时断线** 称为 LTAA,并且会被强制执行:

- 游戏会检测到你在被拘留或击倒时离开。
- 你的逮捕 **自动生效** — 3 分钟计时开始。
- 逮捕记录保存到游戏数据库。
- 当你重新加入时 — 即使几分钟后,即使在不同的 session — 你会带着剩余时间回到监狱。

不要在被逮捕时 rage-quit。它会跟着你。

**受伤后离开也适用。** 如果有人把你击倒而你退出,LTAA 追踪器会捕捉到。

---

## RTAA — Reset To Avoid Arrest

**Reset 你的角色** 以逃避拘留 / 逮捕曾是一个已知的漏洞。现在:

- 当你的 HP 为 75 或以下时,**reset 按钮会自动禁用**。
- 在你恢复或得到治疗之前,你实际上无法 reset。

这完全消除了 RTAA 的逃脱途径。

---

## 传票(Saman)

警察可以开出 **传票** — 针对交通或轻微违规的当场罚款。

- 警员使用 **Saman** 工具(需要 PDRM 任何级别,或 Polis Bantuan 级别 2+)。
- 罚款 **立即从你的 BR 余额中扣除**(每张传票最高罚款:**1,000 BR**)。
- 你会收到弹出的 toast 通知。
- 罚款金额、原因和参考编号出现在你的 **SummonsView** GUI 中 — 可通过分页浏览完整历史。
- 警员的开单频率限制为每 **10 秒** 一张。

你无法争辩或拒绝 — 已经付款了。如果你认为某张传票不公正,请通过 community server 申诉(由 moderator 审核)。

---

## 搜查

警员可以使用 **Search** 工具请求搜查你:

- 你会看到一个 **同意弹窗**(Searchee GUI),带有 是 / 否 按钮。
- 如果你同意,警员会看到你的 backpack / 口袋。
- 如果你拒绝,警员无法查看内部(除非他们有合理的怀疑 — 角色扮演规则)。

---

## 指纹识别

**FingerPrint Scanner** 工具 — 识别你的身份。显示在警员的 UI 中。

## 摆脱麻烦

- **熬过这 3 分钟。**
- 通过 Malaysia community server **申诉** — moderator 处理纠纷和封禁。
- **保持角色** — 向警员求情、(在角色扮演中)行贿,或干脆接受逮捕都是合理的。

## 不要做什么

根据 [规则](/bandaraya/rules),以下行为会让你在逮捕之外还被封禁:

- **LTAA**(leave to avoid arrest) — 一般违规
- **RTAA**(reset to avoid arrest) — 一般违规,尽管 reset 按钮现在具有 anti-RTAA 功能
- **穿墙 / 逃离限制区域** — 一般违规
- **在被拘留或逮捕时 glitching 或滥用工具** — 一般违规
- **作为公共服务队伍叛变** — 严重违规

---

## 贴士与陷阱

- **配合。** 你将在 3 分钟内被释放。在角色扮演中反抗逮捕只会让事情变得更糟。
- **不要 LTAA。** 计时会跨 session 持续。你什么都逃不掉。
- **警员,记录你的行动。** 逮捕记录会被追踪;描述保持简短和事实化(它们会永久进入记录)。
- **OCG 成员会被标记** — 逮捕记录带有 `IsOCG` 标记。警员在 MDT 中看得到。
- **使用 MDT** — 警察 tablet 应用可让你对嫌疑人进行 BG-check、查看 BOLO,并发布自己的 BOLO。请参阅 [Tablet](/bandaraya/tablet)。
- **申诉是存在的** — 如果你认为自己被错误逮捕,请在 community server 中跟进。游戏的 moderation 团队会处理。

## 另请参阅

- [紧急服务](/bandaraya/emergency-services) — PDRM 工具和流程
- [Tablet](/bandaraya/tablet) — 警员专用 MDT 应用
- [规则](/bandaraya/rules) — 完整规则文本,LTAA/RTAA 后果
- [战斗与健康](/bandaraya/combat-and-health) — 低 HP 时 reset 被禁用
- [队伍](/bandaraya/teams) — 哪些队伍拥有逮捕权
- [术语表](/bandaraya/glossary) — LTAA、RTAA、MDT、BOLO
