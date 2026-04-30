---
title: "Kesihatan (Medical)"
description: "Playing Kesihatan (medical) in Sumaya — ambulances, treatment, and revival."
---

# Kesihatan (Medical)

**Kesihatan** ("keh-see-ha-tan") is Sumaya's medical service. Doctors, nurses, paramedics. If you pick Kesihatan from the main menu, you're a medical worker on duty as soon as you spawn.

Kesihatan is also special because **your job boosts the entire server**. Keep reading.

## Getting started

Pick **Kesihatan** on the main menu. Your medical kit spawns in your backpack: first aid kit, bandage, splint, and more unlocked by level.

Head to the hospital for more tools and equipment, or respond to 999 calls and field incidents.

## The injury system

Kesihatan's core gameplay is treating **injuries** - damage sustained by players or NPCs that can't be healed by simply respawning.

### When the injury system is active

The injury system **auto-activates whenever at least one Kesihatan player is on the server** — just by being on the team, you flip the switch for everyone. When it's on:

- Players and NPCs can suffer proper injuries instead of insta-dying.
- Injuries require medical treatment to heal.
- **Every player on the server gets +15% player-level XP** (sector XP is unaffected).
- Each player's character carries an `InjurySystemEnabled = true` attribute while the system is live.

The server deactivates the injury system the moment the last Kesihatan player leaves. So just logging in as Kesihatan is enough to "activate" it — no manual toggle needed. That +15% XP boost is a big deal: it applies to every job, every arrest, every harvest - so when Kesihatan is on, the whole server benefits. This is the single biggest reason to have medical players on.

### Injury types

| Injury | What it is | Treatment |
|--------|------------|-----------|
| Minor cuts / bruises | Scrapes, small wounds | Bandage |
| Broken arm | Slows down hand animations, affects certain tools | Splint |
| Broken leg | Reduces walk speed to 30% | Splint |
| Traumatic Brain Injury (TBI) | Severe; requires bed rest | Medical bed + time |

### Diagnosis

You can't heal someone until you know what's wrong.

1. Equip the **First Aid Kit**.
2. Stand within **10 studs** of the patient.
3. Use the kit. The diagnosis takes about **2 seconds**.
4. The patient's injury is displayed.

**Reward:** 15 XP per diagnosis.

### Bandage (minor wounds)

1. Equip the **Bandage** tool.
2. Stand within 10 studs of the patient.
3. Use the tool. Takes about 3 seconds.
4. Wound healed. The bandage lasts 5 minutes on the character, then fades.

**Reward:** 30 XP + 100 Ringgit.

### Splint (broken bones)

1. Equip the **Splint**.
2. Stand within 10 studs.
3. Apply. Takes about 5 seconds.
4. Walk speed returns to normal.

**Reward:** 40 XP + 200 Ringgit.

### Imaging (X-Ray and MRI)

For diagnosis confirmation on serious injuries, use the imaging machines at the hospital:

- **X-Ray machine:** confirms broken bones.
- **MRI machine:** confirms TBI.

Either diagnosis pays **20 XP**.

### TBI and medical beds

TBI is the most serious injury. Treatment requires the patient to **lie on a medical bed** for about **30 seconds** of bed rest, which gradually heals them.

The hospital has multiple medical beds, plus an X-Ray machine, an MRI machine, and a stretcher for transporting patients.

## Rewards summary

| Action | XP | Ringgit |
|--------|-----|---------|
| First aid diagnosis | 15 | 0 |
| Bandage heal | 30 | 100 |
| Splint heal | 40 | 200 |
| X-Ray diagnosis | 20 | 0 |
| MRI diagnosis | 20 | 0 |

Plus:

- **+150 Ringgit bonus every 10 treatments.**

## Vehicles

Kesihatan ambulances unlock as your sector level rises.

| Vehicle | Sector level required | Price |
|---------|----------------------|-------|
| Tayoti Hiace KKN Ambulance | 1 | Free |
| Tayoti Hilux KKN Ambulance | 20 | 8,000 Ringgit |
| Handai City KKN Ambulance | 45 | 12,000 Ringgit |

KKN stands for Kementerian Kesihatan Nasional (National Ministry of Health). Each ambulance has a siren and rear cargo space (for the stretcher).

See [Vehicles](/sumaya/vehicles) for how to spawn them.

## Ranks

Kesihatan has 13 ranks, loosely based on real Malaysian healthcare positions. Your title updates automatically as your sector level rises.

| Level | Rank |
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

From level 81 onward, you're the top. No further rank changes as you push to the level 100 cap.

## Tips

- **Activate the injury system for the server.** The +15% XP boost affects everyone, including you. The whole server benefits and will keep coming back for treatment.
- **Camp the hospital early.** Most injuries come in via ambulance or the 999 app. Staying close to the hospital means faster turnover and more XP.
- **Broken legs are the easy payday.** They can't walk well, they're easy to spot, and the splint pays 200 Ringgit.
- **TBI is slow but high-value.** While the 30-second bed rest is running, you can diagnose and treat other patients. Don't just stand and watch.
- **Mass casualty events.** If there's a big crash or incident, multiple casualties means multiple fast payouts. Bring stretchers.
- **Work with Bomba.** Firefighters get burned; after you put out a fire, expect bandage customers. Bonus: standing within 512 studs of an active fire earns you **10 player XP per block extinguished** (player XP only, no SR) - so camping a fire is free passive XP for Kesihatan.

## What next?

- [Polis](/sumaya/polis) for the law enforcement side.
- [Bomba](/sumaya/bomba) for the firefighter counterpart.
- [Vehicles](/sumaya/vehicles) for the ambulance list.
- [Progression](/sumaya/progression) for how XP compounds.
