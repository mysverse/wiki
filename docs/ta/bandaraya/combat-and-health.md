---
title: Combat & Health
description: 'Weapons, armor, injuries, and the medical system in Bandaraya.'
lang: ta
translated_from_hash: b70f1d8e
translated_on: '2026-04-21'
needs_review: true
---

# Combat & Health

Bandaraya uses **ACS (Advanced Combat System)** for weapons and a detailed health system (internal name: **Saude**, Portuguese for "health"). This page explains what happens when bullets fly and when blood runs — from both sides.

## TL;DR

- Most civilians can't carry guns. You need the **Firearms Licence gamepass** (1,250 R$), or you need to be on a team that issues them (PDRM, KPTD, MAF, Developers, Moderation, Yang di-Pertuan Persekutuan).
- Bullets pass through transparent / non-colliding / **Glass / Ignorable** parts. They stop at **Armor / EShield** parts. Some vehicles are bulletproof.
- When injured: you lose **blood** (Sangue) and gain **pain** (Dor). Bleed, splint, bandage. Medics (KKM / SJAM) can stabilise you.
- **Reset button disables at or below 75 HP** — you can't suicide out of a sticky situation.
- **Bleedout timer is 5 minutes when KKM or SJAM are online.** Passive HP regen is also disabled while medics are on-shift. If no medic saves you in time, you respawn.

---

## Weapons

### How to get a weapon

| Source | Requirement |
| --- | --- |
| **Ammulaysia (Gun Dealer)** | Firearms Licence gamepass (1,250 R$). Legal, above-board. 5-minute cooldown between purchases. |
| **Illegal Dealer (Hacker)** | Black-market. 5-minute cooldown (also resets if you reset/rejoin). |
| **Team issue** | PDRM (X26P, CL2), KPTD (X26P TAC), MAF GGK/UTK (various), Developers / Moderation (HK-P30L), Yang di-Pertuan Persekutuan (Glock 19, M4A1, MP5A3). |
| **Armoury** | Team-gated armouries at IPD Dang Wangi and other bases. |

Civilians can't walk around with rifles. The Firearms Licence unlocks Ammulaysia for sidearms; teams get duty weapons.

### Shooting (ACS basics)

- **Left-click** to fire.
- **R** to reload.
- **B** (or tool-specific) to holster.
- Recoil, spread, and rate-of-fire vary by weapon.
- Running fire is less accurate than aimed shots.

ACS has been battle-tested — normal DPS is up to ~1500 with legit weapons, peak ~3000. The anti-cheat has been tuned to allow real combat without kicking legit players.

### Bullet penetration

Bullets passing through parts depend on what the part is:

- **Passes through** any part that is:
  - **Transparent**
  - **Non-colliding**
  - Named **Glass** or **Ignorable**
- **Stops at** any part named:
  - **Armor** — always blocks bullets
  - **EShield** — energy shield, blocks bullets

This matters for cover: a chest-high wall might not stop a round if it's transparent; a wooden fence will stop one if it's collidable.

### Bulletproof vehicles

Some vehicles have `Armor` parts placed around the cabin — they're **fully bulletproof** inside.

- **AV4** (PDRM) — 29 armour parts around the cabin
- **V150** (PDRM)
- **UTK Hilux variants** — bulletproof cabin

Regular civilian cars are **not** bulletproof. A Proton Persona will not stop a round.

---

## Armour you wear

Body armour is modelled via `Protecao` (Portuguese for "protection"):

| Item | What it does |
| --- | --- |
| **Vest** | Torso protection. Durability + damage reduction per hit. |
| **Helmet** | Head protection. Without a helmet, headshots are lethal immediately. |
| **Blast protection** | Reduces explosion damage (both vest and helmet have blast stats). |

**Tip:** motorcycles used to insta-kill you without a helmet. That's been removed, but helmets are still worth wearing for headshot protection.

Armour wears down with hits; get it replaced at an armoury or staging area.

---

## Taking damage

Bandaraya models health as three dimensions, not just HP:

| Stat | What it is | When it matters |
| --- | --- | --- |
| **Sangue** (Blood) | Blood level, 0–100 | Drops as you bleed. At 0 you flatline. |
| **Dor** (Pain) | Pain level | High pain blurs your screen and slows you. |
| **HP** (Humanoid) | Standard Roblox health | Dropping to 0 kills you outright. |

Plus stamina, oxygen, and a host of stances (running, surrendered, cuffed, bleeding, downed, etc.).

### States you can enter

| State | What it means | How you got there |
| --- | --- | --- |
| **Ferido** (Injured) | Below full health | Any damage |
| **Sangrando** (Bleeding) | Actively losing blood | Gunshot, major trauma |
| **Caido** (Downed) | Incapacitated, not dead | Serious damage; can be revived |
| **Balloonbleed / bbleeding** | Critical bleeding | Compound wounds |
| **Dead** | RIP | Caido too long, or HP 0 |

### Visual effects when hurt

| Effect | When it kicks in |
| --- | --- |
| Blur | Pain / injury |
| Colour correction desaturation | Blood loss |
| Vignette (corners darken) | Low health |
| Dirty overlay | Injury / combat damage |

---

## Medical kit items

Located in your kit if you have the right team/tool access. Full list:

### Pain & stimulants

| Item | Purpose |
| --- | --- |
| **Morfina** | Morphine — pain relief |
| **Epinefrina** | Epinephrine — stimulant, helps revive |
| **Aspirina** | Aspirin — mild pain relief |
| **Energetico** | Energy drink — stamina |

### Blood & IV

| Item | Purpose |
| --- | --- |
| **SacoDeSangue** | Blood bag — restores blood volume |
| **Catheter** | IV catheter |

### Wound care

| Item | Purpose |
| --- | --- |
| **Bandagem** | Bandage — dresses wounds, slows bleeding |
| **Tourniquet** | Full tourniquet — stops bleeding in a limb |
| **Splint** | Stabilises fractures |
| **Prolene / Nylon** | Suture materials |

### Airway (advanced, KKM)

| Item | Purpose |
| --- | --- |
| **ETube** | Endotracheal tube |
| **NPA** | Nasopharyngeal airway |
| **BVM** | Bag valve mask |
| **NRB** | Non-rebreather mask |
| **O2** | Oxygen supply |
| **Suction** | Clear airway |

### Surgical (advanced, KKM)

| Item | Purpose |
| --- | --- |
| **Scalpel** | Cut |
| **Clamp** | Surgical clamp |
| **Anesthetic** | Anaesthesia |
| **Skit** | Surgical kit |

### Other

| Item | Purpose |
| --- | --- |
| **Defib** | Defibrillator — restart flatlined heart |

---

## Getting healed

### Self-heal (civilians)

- **Passive regen:** 1% of max HP per second (applied in 3-second ticks of 3% each) when not actively being healed (`TraumaKitHealing` pauses it) and not bleeding.
- **Bandage yourself** — slows bleed, adds some HP.
- **Drink / food** — minor boost.

### Medic-heal (KKM / SJAM)

A medic can:

1. **Stop the bleed** with a tourniquet or bandage.
2. **Restore blood** with a blood bag.
3. **Relieve pain** with morphine.
4. **Defib** if your heart stopped.
5. **Perform surgery** (KKM only) — scalpel, anaesthetic, suture.

Sit tight and don't run away.

### Bleedout timer

- **KKM or SJAM online** (teams: Institutional white / Forest green): 5-minute bleedout window once downed. Passive regen is disabled — medics have to save you.
- **No medics online:** you can respawn whenever (the game doesn't hold you hostage if there's no medic).

### Reset button

The reset button is **disabled at 75 HP or below** — this is to stop **RTAA** (resetting to avoid arrest). If you're injured, fight through it or wait for a medic.

See [Arrest & Law](/bandaraya/arrest-and-law#rtaa).

---

## Hardpoint — capture / raid gamemode

**Hardpoint** is a capture-point gamemode reserved almost entirely for **OCG vs OCG** group events. It's not an everyday feature — it runs when an OCG leader triggers a raid.

How it works (verified):

- An OCG leader (rank 150+ in the main OCG group) types **`:startraid <Defenders> <Hostiles>`** in chat, picking two of: `BC` (Basilicata Camorra), `OCG-Beta`, `Nightraiders`, `Ekstranet`.
- The **Point** (a capture trigger in `Workspace.HardPoints`) activates — becomes visible, trigger goes solid.
- Players in the designated defender / hostile groups touch the trigger to capture for their team. Dead players can't capture (`DeathCap = false`).
- **Timer:** 300 seconds on the active point. Teams accumulate score while they hold it.
- **Win threshold:** 1250 points, or an OCG admin types **`:cancelraid`**.
- **HardpointUI** shows two progress bars (Home / Away) + announcement frame + score + timer.

If you're not OCG, you can watch but not score. PDRM / KPTD / BOMBA / KKM don't participate.

---

## Tips & gotchas

- **Cover is not obvious.** Transparent parts don't stop bullets. Crouch behind something solid and named.
- **Helmets save heads.** If you're going into a firefight, wear one.
- **KKM or SJAM online means 5-minute bleedouts.** If no medic team is online, you can respawn faster.
- **Reset is anti-RTAA at or below 75 HP.** Don't try.
- **Your pain stat persists until healed.** Blur and slowdown stick around.
- **Don't shoot first as a public service team.** It's a severe violation.
- **Gun shop cooldowns.** 5 minutes between purchases at Ammulaysia and Illegal Dealer. The cooldown also resets on rejoin to stop abuse.

## See also

- [Arrest & Law](/bandaraya/arrest-and-law) — detainment, arrest mechanics, LTAA / RTAA
- [Emergency Services](/bandaraya/emergency-services) — KKM + SJAM roles
- [Economy](/bandaraya/economy) — Ammulaysia and Illegal Dealer shops
- [Gamepasses](/bandaraya/gamepasses) — Firearms Licence
- [Vehicles](/bandaraya/vehicles) — bulletproof vehicle list
- [Rules](/bandaraya/rules) — combat etiquette and severe violations
