---
title: "Economy and XP"
description: "Ringgit (BR), levels 1-500, XP multipliers, and the fastest ways to earn in Lebuhraya."
---

# Economy and XP

Everything in Lebuhraya revolves around two numbers: your **Ringgit (BR)** and your **level**. This page explains how both work, where they come from, and how to earn faster.

## Ringgit (BR) — tracked but not yet live

Lebuhraya's currency system is **partially implemented**. Your account does carry a BR balance (it starts at **1000** and persists across sessions), but in the current version of the game:

- **Nothing in Lebuhraya displays your BR balance.** There's no HUD readout, no leaderstat entry, no Phone app that shows it. The only script that reads your balance is a staff-only admin tool inside the Tablet app.
- **The only active earn path is racing.** Winning races calls `Currency.Debit` and credits your account. Every other "payment" you might expect (Food Delivery, Post Office salary, tow fees, fuel sales, shop purchases, repair costs) is currently a no-op in Lebuhraya — the hooks exist but are commented out, stubbed, or bypassed.
- **Nothing in Lebuhraya spends BR.** Shops are free. Fuel pumps don't charge. Tolls don't charge. Repair zones don't charge. Housing furniture doesn't charge. Developers have the infrastructure ready and many job systems have `rewardMode = "BR"` branches left as TODOs.
- **Internal per-job counters are separate.** Post Office computes a `Salary` value, but it's stored in that job's own DataStore, not your BR account.

**What this means for you**: don't budget your game plans around BR. Pick jobs for their XP rate, pick vehicles for how they drive (not their price tag), and enjoy everything currently for free. When BR goes live, your race-earned balance will carry forward.

### What's tracked right now

- Starting balance: **1000 BR** (shared across MYSverse Lebuhraya sessions, stored under DataStore2 key `ringgit`).
- Active earn source: Race rewards only.
- Active spend sources: none in Lebuhraya-specific code.
- Shared MYSverse systems (Dealership, Tow, TapNGo) contain live spend logic that may or may not trigger in Lebuhraya — you won't see charges on-screen either way.

### What will eventually use BR (planned)

Based on code hints the following are planned but not currently wired up:

- Fuel payments at PETROMAS / Radtrol (prices already defined: 1/2/3 BR/L)
- Shop purchases (shop items have a `Price` field)
- Food Delivery, Checkout, Lumberjack, Fishing — all have empty `BR` / `Both` reward branches
- Post Office salary bridging to the real BR account
- Vehicle dealership / purchases
- Repair costs at repair zones

## Levels and XP

There are **500 levels**. Each level requires **1000 XP** to complete. The level cap is firm — you can't level past 500, but XP continues to tick towards badges and career tiers after that.

### Earning XP

There are two kinds of XP:

**Driving XP (passive).** Every time you drive **1500 studs** in a driver seat, you earn **50 XP**. The counter only advances while you're in the seat and moving faster than a walk — stopped cars don't earn XP. This is the single biggest source of XP for most players, especially in early levels.

**Job XP (active).** Each completed job action awards a chunk of XP.

| Job | XP reward |
|---|---|
| Food Delivery | **250 XP** per delivery |
| Taxi | Varies — about **0.11 to 0.13 XP per stud** of the trip (a 4000-stud trip = 440 to 520 XP) |
| Other jobs | See [Jobs](/lebuhraya/jobs) for per-job details |

### The XP multiplier stack

Multiple bonuses stack **additively** on top of your base ×1 multiplier. The final multiplier is applied to every XP award.

| Source | Bonus |
|---|---|
| Double XP weekend (periodic events) | Multiplier set to ×2 |
| XP Boost gamepass | +50% |
| Roblox Premium membership | +25% |
| Injury System enabled | +15% |
| Token XP Boost (consumable) | +100% |
| Convoy bonus (up to) | +50% |

So a Premium player in a full convoy during a double-XP weekend, with an XP Boost token active, can reach well above ×3 multiplier. Stacking these is the fastest way to hit level 500.

### Convoy bonus breakdown

Convoy bonuses stack in their own way:

- **Base bonus** for being in a convoy: +15%
- **Per additional member** (beyond two): +5% each
- **Friend in the convoy**: +10%
- **Same team in the convoy**: +10%
- **Streak bonus** (time spent in convoy): +2% per minute, up to +10%

The total convoy multiplier is capped at **+50%**.

## What resets and what saves

- **Live game**: Level, XP, BR, vehicles, housing — all saved automatically when you leave the server. You don't need to manually save.
- **Studio / test servers**: XP resets to 0 when you join. A warning message appears. This is normal — your live progress is not affected.
- **Private servers**: The economy is disabled so your balance doesn't change, but nothing is lost in the main game.

> If you're a staff member who uses Fast Travel, note that distance-based XP is paused for 5 minutes after each fast-travel to prevent skew. Normal players don't have access to Fast Travel, so this cooldown doesn't apply to them.

## Tips for levelling fast

1. **Stay in the driver seat on long routes.** Long-distance driving is the single biggest source of passive XP.
2. **Do Food Delivery starting at Level 10.** 250 XP per delivery is the best flat rate until higher tiers unlock.
3. **Convoy with at least one friend on the same team.** Activates both the friend bonus (+10%) and the same-team bonus (+10%).
4. **Subscribe to Roblox Premium.** +25% XP on everything you do.
5. **Save XP Boost tokens for long sessions.** The +100% is duration-based, so use it during commitment blocks (a full evening of racing or delivery).
6. **Weekend events** occasionally double XP for everyone. Watch for announcements.

## Next steps

- [Vehicles](/lebuhraya/vehicles) — Fuel pricing and ownership
- [Jobs](/lebuhraya/jobs) — Per-job XP / BR breakdown
- [Passes and Boosts](/lebuhraya/passes-and-boosts) — How to get the XP Boost gamepass
