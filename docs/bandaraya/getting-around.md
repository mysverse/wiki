---
title: "Getting Around Bandaraya — Public Transport Guide"
description: "Public transport in Bandaraya — MRT, LRT, monorail, buses, CAG card, e-hailing, and TapNGo tolls."
---

# Getting Around Bandaraya — Public Transport Guide

A player's guide to moving around Kuala Lumpur: buses, MRT, Monorail, highway tolls, and the **CAG card** that ties it all together.

All prices are in **BR (Bandar Ringgit)**.

## Quick reference

| What | Cost (cash) | With CAG card | With CAG + monthly pass |
| --- | --- | --- | --- |
| Bus ride (flat fare) | 5 BR | 5 BR (from card) | **Free** |
| MRT / Monorail fast travel | Full price | **30 % off** | **50 % off** |
| TapNGo highway gate | 15 BR | **20 % off** (12 BR) | 20 % off (12 BR) |
| CAG card (one-time purchase) | 100 BR | — | — |
| Monthly pass | 500 BR | — | Lasts 30 days |

**TL;DR:** If you use public transport more than a few times, buy a CAG card. If you use it every day, get the monthly pass.

---

## The network

### MRT Kajang Line
Three stations; walk-in fast travel between them.

- **Conlay**
- **Persiaran KLCC**
- **Ampang Park**

### KL Monorail Line
Three more stations on a separate line.

- **Bukit Bintang**
- **Raja Chulan**
- **Bukit Nanas**

### Buses
Run by several operators around the city — **MyTransit**, **FirstGroup**, and **Fermuda**. Look for passenger seats on tagged bus models; fare is charged automatically when you sit down.

### Highways
Some highway routes pass through **TapNGo toll gates**. Your vehicle is charged 15 BR per gate, or 12 BR if you hold a CAG card.

---

## Fast travel (MRT & Monorail)

1. Walk up to any MRT or Monorail station.
2. A fast-travel panel opens showing the other stations on your line.
3. Pick a destination. The price shown depends on whether you hold a CAG card:
   - **No card:** full BR price charged from your wallet.
   - **CAG card:** 30 % off, charged from your card balance.
   - **CAG card + active monthly pass:** 50 % off, still from card balance.
4. Screen fades to black; you arrive at the destination station.

If your CAG balance is too low to cover the discounted fare, the system falls back to charging full BR from your wallet — the UI shows a hint reminding you to top up.

### What it costs

Fare scales with how many hops you take (base + per-hop):

| Trip | Cash | With CAG (30% off) | With CAG + pass (50% off) |
| --- | --- | --- | --- |
| 1 hop (neighbour station) | 150 BR | 105 BR | 75 BR |
| 2 hops (end of the line) | 200 BR | 140 BR | 100 BR |

Formula: `100 + 50 × hops`. A full monthly pass ride pays for itself after about 7 trips.

---

## Buses

Buses operate across the city. There's no ticket to buy or button to press — just **board and sit**.

- **Fare:** 5 BR per boarding, flat.
- **Paid via CAG card** if you have one; deducted automatically when you sit in a passenger seat.
- **No card, or card empty?** The fare becomes **debt**. You still ride, but your next top-up settles the debt before adding to your balance.
- **Monthly pass holders:** rides are **free** — the "Saved with CAG" counter tracks the value anyway.
- **Bus drivers are not charged** — the driver seat is exempt.
- **Debt cap:** 200 BR. Reach it and further rides are refused until you top up.

**Exit handling is forgiving.** Whether you stand up normally, get kicked from the seat, die, disconnect, or the bus despawns under you, the fare is charged exactly once for that boarding.

---

## TapNGo highway gates

When your vehicle reaches a TapNGo gate:

1. The gate deducts **15 BR** from your wallet (or **12 BR** if you own a CAG card — 20 % off, paid from card balance with fallback to cash).
2. The gate opens.
3. Drive through.

A vehicle that has already paid a specific gate won't be double-charged on the way out.

---

# The CAG (Click And Go) card

The **CAG card** is Bandaraya's stored-value transit card — modelled on Malaysia's real-life Touch n Go. Load it up once, tap automatically across buses, MRT, Monorail, and highway gates.

## How to buy one

1. Find a **CAG kiosk** — one next to every MRT and Monorail station, plus a central kiosk in the city.
2. Interact with the kiosk (line of sight required — the prompt won't work through walls).
3. Pick **Buy Card** on the kiosk panel. Confirm the **100 BR** charge.
4. You'll receive a **CAG Card** tool in your backpack. Equip it to see a compact balance badge above the card; activate it (click while held) to open your wallet UI.

Once you own a card, the tool is automatically granted to you on every spawn.

## Topping up

At any kiosk:

1. Choose **Top Up**.
2. Pick a denomination: **20 / 50 / 100 / 200 / 500 BR**.
3. Confirm. Large top-ups (200 BR+) prompt for confirmation to prevent misclicks.

- **Max balance:** 2 000 BR stored at once.
- **Debt settles first.** If you have unpaid bus fare debt, the top-up clears that before adding to your available balance.
- **Top-up buttons grey out** with a "(max)" tag when the denomination would exceed the cap.

## The monthly pass

- **Price:** 500 BR at any kiosk.
- **Duration:** 30 days from purchase.
- **Perks:**
  - **Free bus rides** for the whole period.
  - **MRT / Monorail discount doubles** from 30 % to **50 %**.
- Shown in the wallet UI with a `[v]` active indicator and a green status pill.

Breaks even around 100 bus rides (500 BR ÷ 5 BR) — plus whatever MRT savings you stack on top. If you commute daily, it pays for itself fast.

## Opening your wallet

Three ways to open the wallet UI:

- **Equip and activate** the CAG Card tool (click while holding it).
- **Press Ctrl + W** anywhere, any time.
- **Open the CAG eWallet app** on your in-game Phone.
- **Press Escape** to close.

## Inside the wallet

Five tabs:

| Tab | What you'll find |
| --- | --- |
| **Buy Card** | Purchase a card if you don't have one yet (hidden once owned). |
| **Top Up** | Grid of denomination buttons. |
| **Pass** | Status of your monthly pass; buy or renew. |
| **Designs** | Browse and equip card designs (see below). |
| **History** | Your last 20 transactions + lifetime stats (bus trips, MRT trips, BR spent, BR saved, card age). |

---

## Card designs

Your card has a **visual design** — the colour and art that show on the tool badge, wallet preview, and Phone app. The **Classic** design is free with every card; others are unlockable:

- **Shop** — buy them outright at kiosks.
- **Achievements** — earn them by using the card:
  - **100 bus trips**
  - **50 MRT trips**
  - **10 000 BR lifetime spend via CAG**
- **Seasonal** — special designs offered during **Deepavali, Merdeka, and Raya** windows; miss the window, wait until next year.

Change your active design from the **Designs** tab. You keep every design you've ever unlocked — they're saved to your account.

---

## The CAG eWallet (Phone app)

On your in-game Phone, the **CAG eWallet** app gives you a browse-only view of your card without needing to hold the tool or press Ctrl + W.

Five tabs at the bottom:

| Tab | Purpose |
| --- | --- |
| **Home** | Balance card with your active design, quick-action shortcuts (Reload, Tap, Pass, Designs), last 2 transactions. |
| **Trips** | Full history with colour-coded chips (bus / mrt / gate / topup) and a stats strip at the top. |
| **Tap** | An explainer screen with a tilted card preview and live discount numbers — handy refresher on what the card gets you. |
| **Pass** | Pass status as a yellow ticket card with usage summary and savings. |
| **Me** | Your active design hero + designs grid (owned vs. locked), plus lifetime stats. |

**Important:** all purchase buttons in the app (Reload, Buy/Renew Pass, Change Design) **deep-link** to the nearest kiosk. If you're close enough (within 24 studs), the kiosk UI opens automatically. If not, you get a toast telling you which kiosk is nearest and how far away it is — head there to complete the action. The kiosk is the single source of truth for transactions.

---

## Tips & gotchas

- **Buy the card before your first trip.** It pays for itself in ~7 MRT rides or ~7 tolls.
- **Keep a small balance on the card.** You don't need to max it out — bus fares are tiny.
- **Debt is silent but real.** If your card is empty, buses still let you ride but record the fare as debt. Top up to clear it; you'll hit the 200 BR debt cap eventually.
- **You can't cash out.** Money on the card is one-way — spend it on transport, don't store savings there. (This matches the real Touch n Go.)
- **Monthly pass stacks with MRT discount**, but not with the bus fare — pass = free buses, not discounted buses.
- **Kiosk prompts require line of sight** — if you can't see the kiosk, you can't interact with it. Walk around the obstacle.
- **Kiosk sessions time out after 60 seconds.** If you step away, just interact again.
- **Tools rate-limit.** Spamming buttons in the wallet UI briefly locks you out. Click once and wait for the action to process (the button shows "…" while busy).
- **Taxis and e-hailing are NOT on CAG.** They use their own BR-based fares — carry cash for those.
- **If CAG gets disabled** (maintenance / event): all kiosks hide their prompts, the card is unequipped, and transport falls back to plain BR charges. Your wallet balance, designs, and pass are preserved for when it comes back on.

---

## Feature availability

The entire CAG system can be toggled off by staff via an admin flag. When that happens:

- Kiosks show no interact prompt.
- Your card is temporarily removed from your backpack.
- The Phone app shows a "CAG eWallet is currently unavailable" screen.
- Buses, MRT, and TapNGo charge the full BR price from your wallet with no discount.
- **Nothing is lost** — your balance, designs, and pass resume the moment the flag is turned back on.

---

## See also

- [Rules](/bandaraya/rules)
- [Economy](/bandaraya/economy) — currency, shops, gamepasses
- [Map](/bandaraya/locations) — where stations and terminals are
- [Jobs](/bandaraya/jobs) — bus-driving, taxis
- [Glossary](/bandaraya/glossary) — CAG, TapNGo, MRT
