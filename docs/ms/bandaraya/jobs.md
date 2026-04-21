---
title: Jobs
description: >-
  Every job in Bandaraya — postal service, taxi driving, towing, bus driving,
  and agency jobs — with pay rates and ranks.
lang: ms
translated_from_hash: 33dd3a97
translated_on: '2026-04-21'
needs_review: true
---

# Jobs

The quickest ways to earn BR in Bandaraya. All of these are civilian-accessible (with gamepass or group where noted). Police / BOMBA / KKM roles aren't on this page — they earn prestige, not salary. See [Emergency Services](/bandaraya/emergency-services) for those.

## TL;DR

| Job | Access | Pace | Good for |
| --- | --- | --- | --- |
| **Postal Service (POS)** | Visitors / Malaysians / HCC / Developers only | Steady | New players who want reliable BR |
| **Taxi Driver** | Taxi Services team OR Taxi Driver gamepass (150 R$) | Per trip (varies) | Players who like customer service roleplay |
| **Towing** | Towing Services team | Per clamp / tow (500 BR clamp fee) | Players with a towing group |
| **Bus driving** | MyTransit / FirstGroup / Fermuda / Bus Services groups | Per route | Players who like set piece driving |

---

## Postal Service (POS)

The go-to first job. No gamepass needed — but you have to be on a **civilian-ish team**: **Visitors**, **Malaysians**, **High Class Citizen**, or **Developers**. PDRM / BOMBA / KKM / etc. cannot clock in for POS (the game stops you at the start-work step).

### The flow

1. **Start work** at a POS terminal (look for the POS signage — see [Map](/bandaraya/locations)).
2. **Collect packages** from a nearby **Postbox**. You carry them.
3. **Process** collected packages at the **Station**.
4. **Deliver** them to **Mailboxes** around the city.
5. Each delivery pays BR and gives XP.

### Level & salary

Level up as you deliver, and your per-delivery pay goes up.

| Level | XP to next | Salary per delivery |
| --- | --- | --- |
| 1 | 100 | 70 BR |
| 2 | 200 | 80 BR |
| 3 | 300 | 90 BR |
| 5 | 500 | 110 BR |
| 10 | 1,000 | 160 BR |
| 15 | 1,500 | 210 BR |
| **20 (max)** | 2,000 | **260 BR** |

Formula: salary is `60 + (Level × 10)` BR.

You max out at Level 20 for 260 BR/delivery. That's the top end.

Each delivery awards **25 XP**, so:
- Level 1 → 2 takes **4 deliveries** (100 XP)
- Level 10 → 11 takes **40 deliveries**
- Level 19 → 20 takes **76 deliveries**

Total grind from scratch to cap: roughly 760 deliveries over ~19 level-ups.

### Vehicles

POS has 10 dedicated vehicles: **Toyota Hiace Pos Laju** (8 variants), **Toyota Hilux Pos Laju**, and an **EX5** motorcycle for the scrappy couriers.

### Tips

- Keep moving — delivery locations are spread out.
- Motorcycles move faster through traffic; vans carry more at once.
- **Don't go rogue as POS.** Abusing a job team to commit crime is a banable offence.

---

## Taxi Driver

Respond to passenger bookings, drive them where they want to go, collect the fare.

### Access

- **Taxi Driver gamepass** (150 R$) — cheapest way in.
- **OR** join a **Taxi Services** group (SSM-registered).

Gamepass holders can also switch to Taxi Services team from the menu.

### The flow

1. **Sign in** as a driver at a taxi company (Fetch, Flaxim, Tompang, Fermuda, or independent Taxi Services).
2. Your status goes to **Available**.
3. When a passenger books a ride, your UI shows the booking with destination + description.
4. **Accept** the booking (or dismiss).
5. Pick up the passenger.
6. **Start** the trip when they're in the car.
7. Drive them to the destination.
8. **End** the trip — you earn BR (`distance_in_studs × company_rate`, minimum 30 studs), your customer count ticks up.

Sign out when you're done for the shift.

### How the fare is calculated

Per-stud rate depends on the company:

| Company | Rate (BR/stud) |
| --- | --- |
| Yi Heng Taxi Services (the generic "Taxi Services" team) | 0.05 |
| Fetch | 0.05 |
| Fermuda | 0.04 |
| Tompang | 0.03 |
| Flaxim | 0.03 |

A 1 000-stud trip = 50 BR (Yi Heng / Fetch), 40 BR (Fermuda), 30 BR (Tompang / Flaxim). Short trips under 30 studs don't pay out.

### Taxi vehicles

You can rent/drive these from taxi spawners:

| Vehicle | Price (BR) |
| --- | --- |
| Proton Saga | 400 |
| Proton Saga 2022 | 600 |
| Perodua Bezza | 750 |
| Proton Preve | 850 |
| Proton Persona | 1,000 |

### Tips

- **Drive safely.** If your passenger dies in your taxi, the roleplay isn't great.
- **Check the destination before you start.** Some bookings are spam — you can dismiss them.
- **Your money and customer count persist** across sessions. You're building a career.

---

## Towing

You're on the side of order — clamp illegally parked cars, and charge their owners 500 BR to remove it.

### Access

Join a **Towing Services** group (the tow operator groups). The Towing Services team becomes available.

### Tools you get

| Tool | What it does |
| --- | --- |
| **Traffic Wand** | Direct traffic. |
| **Clamp Remover** | Remove clamps (for when a motorist pays). |
| **Tow Toolkit** | Full tow chain. |
| **Tow Placeables** | Put up cones, signs, blockages at your scene. |

### The flow

1. Spot an illegally parked or abandoned civilian car.
2. Approach it and use the **Clamp** tool.
3. The clamp attaches. A 15-minute countdown starts.
4. The owner sees a pay-prompt: **500 BR to remove**.
5. When they pay, the clamp is removed automatically.
6. You earn the fee.

### Tow truck vehicles

3 tow vehicles: **Isuzu Tow Truck**, **Isuzu Tow Truck Bed**, **Toyota Hilux Tow**.

### Tips

- **Clamping is a big move.** Only do it where it's actually justified (blocking a driveway, blocking a zebra crossing, badly parked on a no-parking line). Griefing civilians via arbitrary clamping is a banable offence.
- Actions are logged on Discord via webhook — staff can see who clamped whom.
- Removing a clamp remotely (from the tow tablet) is also an option.

---

## Bus driving

Bus drivers carry passengers, earn per route, and aren't charged fare themselves.

### Access

Join one of: **MyTransit** (5032738 / 10394166), **FirstGroup** / **Fermuda**, or a **Bus Services** operator group. Each has its own rank requirements.

### The flow

1. Spawn a bus at your operator's depot.
2. Drive the routes around KL.
3. Passengers board by sitting in passenger seats — their fare is handled automatically (5 BR from CAG or cash).
4. Drop them off wherever you reach next.

### Bus models available

- **MyTransit**: 10 models (TKL_B5LH, TKL_MINIBUS, TKL_CITIE, TKL_K230UB, TKL_URBANO, MYTR_URBANO, TKL_TEMPORARY, TKL_Harimau Evo, TKL_NL323F, TKL_E500).
- **FirstGroup**: 4 (FG_K230UB, FG_NL323F, Vitaru Urban Mini, FG_MAN Double).
- **Fermuda**: several buses plus crossover cars.
- **Bus Services / SPAD**: various SPAD-registered fleets.

### Tips

- **Drivers ride free.** If you're in the driver seat, no fare is charged.
- **Commuters use CAG cards** — they may or may not have one. If not, the fare is debt; that's between them and the kiosk, not you.
- **Don't skip stops to get lunch.** Roleplay integrity counts.

---

## Job comparison

| Job | Barrier to entry | BR per hour (rough) | Roleplay depth |
| --- | --- | --- | --- |
| **POS** | None | Moderate, steady | Low — delivery loop |
| **Taxi** | 150 R$ or group | Variable, high with volume | High — passengers + traffic |
| **Tow** | Group | High per action, but sparse | Medium |
| **Bus** | Group | Route-dependent | High — fixed routes, traffic |

With **HCC gamepass** your per-action BR goes up across all of these.

## See also

- [Economy](/bandaraya/economy) — full earning/spending reference
- [Gamepasses](/bandaraya/gamepasses) — Taxi Driver, HCC
- [Teams](/bandaraya/teams) — transport team access
- [Vehicles](/bandaraya/vehicles) — spawning, fuel, dealership
- [Tablet](/bandaraya/tablet) — MyTow and Vehicle Management apps
