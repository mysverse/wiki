---
title: "Vehicles"
description: "Cars, boats, ambulances, spawners, and customization in Sumaya."
---

# Vehicles

Sumaya has a large vehicle catalog: civilian cars (free and premium), fishing trawlers, police cars, fire trucks, and ambulances. This page covers how to spawn them, the full catalog with prices, and how to customize and care for them.

## How to spawn a vehicle

Look for **vehicle spawner kiosks** around town. They show up as interactive prompts on street corners, dealerships, and at stations.

1. Walk up to a spawner and press the interact prompt.
2. A vehicle menu opens, showing cars available to you.
3. Pick one. You'll see its name, price, and requirements.
4. Choose **rent** or **buy**:
   - **Rent**: pay a smaller one-time cost, the vehicle disappears when you respawn, log out, or spawn a different one.
   - **Buy**: pay the full price, the vehicle is yours permanently (and persists across sessions).

### What if a vehicle is grayed out?

If you can't spawn a vehicle, the spawner will tell you why. Usually it's one of:

- **Player level too low** (you need a higher player level).
- **Sector level too low** (for team vehicles, e.g. Bomba Sanica Tanker at sector level 65).
- **Wrong team** (police cars require POLIS team, etc.).
- **You already have a job vehicle out** (e.g. a trawler while fishing).

Civilian vehicle spawners show only civilian cars, team spawners show only team vehicles, fishing-boat spawners show only trawlers.

## Civilian cars

Most civilian cars spawn **free** (they don't have a price set). A few are premium. All civilian cars are at **player level 1** - no level gate - but the paid ones cost Ringgit.

### Free civilian cars

These spawn without a price. You can take them out any time:

- Perosatu Axia (compact hatchback)
- Perosatu Myvi 2020 (hatchback)
- Perosatu Bezza (sedan)
- Perosatu Alza (MPV)
- Perosatu Ativa (compact SUV)
- Perosatu Aruz (SUV)
- Protan Wira (compact sedan)
- Protan Wira Aeroback (hatchback)
- Protan Putra (sport coupe)
- Protan Waja (sedan)
- Protan Preve (sedan)
- Protan Saga 1985 (compact sedan)
- Protan Exora (MPV)
- Handai City (MPV)
- Handai Civic (MPV)
- Protan S70 (sedan)
- Protan X70 (SUV)
- Tayoti Hilux (pickup truck)

### Premium civilian cars

| Vehicle | Rent | Buy |
|---------|------|-----|
| Protan X50 (compact SUV) | 2,000 Ringgit | 10,000 Ringgit |
| Merzda Miata (roadster) | 2,400 Ringgit | 12,000 Ringgit |
| Nisun S15 Silvia | 2,400 Ringgit | 20,000 Ringgit |
| Joguar XJ308 R | 2,400 Ringgit | 29,000 Ringgit |

The Joguar XJ308 R is the most expensive civilian vehicle in the game.

## Fishing trawlers

Trawlers spawn at fishing-boat spawners at docks, and only appear if you're clocked in to the **Fishing Sector**. See [Fishing](/sumaya/jobs-fishing).

| Trawler | Price |
|---------|-------|
| Tier 1 Trawler | Free (as long as you're on a fishing shift) |
| Tier 2 Trawler | 25,000 Ringgit |
| Tier 3 Trawler | 37,000 Ringgit |

Higher tiers carry more fish.

## Police vehicles (POLIS only)

Available only if you're on the POLIS team. Gated by a mix of **player level** and **sector level** (POLIS sector).

| Vehicle | Player level | Sector level | Price |
|---------|--------------|--------------|-------|
| Protan Wira MPV Polis | 1 | 1 | Free |
| Protan Waja MPV Polis | 15 | - | 6,500 Ringgit |
| Handai City MPV Polis | 1 | 35 | 12,000 Ringgit |
| Handai Civic MPV Polis | 1 | 55 | 15,000 Ringgit |

The Wira is your starter patrol car. The Civic is the top-tier.

## Bomba vehicles (BOMBA only)

Available only on the BOMBA team. Gated by Bomba sector level.

| Vehicle | Sector level | Price |
|---------|--------------|-------|
| Merze Atego LFRT | 1 | Free |
| Sanica 94D LFRT | 20 | 9,000 Ringgit |
| Tayoti Hiace (Bomba) | 40 | 12,000 Ringgit |
| Sanica P310 FRT | 40 | 13,000 Ringgit |
| Sanica P360 Tanker | 65 | 20,000 Ringgit |

LFRT = Light Fire Rescue Tender. FRT = Fire Rescue Tender. The P360 Tanker is the heavy-utility apex Bomba vehicle, carrying its own water supply.

## Ambulances (Kesihatan only)

Available only on the Kesihatan team. Gated by Kesihatan sector level.

| Vehicle | Sector level | Price |
|---------|--------------|-------|
| Tayoti Hiace KKN Ambulance | 1 | Free |
| Tayoti Hilux KKN Ambulance | 20 | 8,000 Ringgit |
| Handai City KKN Ambulance | 45 | 12,000 Ringgit |

"KKN" stands for **Kementerian Kesihatan Nasional** (National Ministry of Health). Each ambulance has cargo room for the stretcher.

## Emergency sirens (ELS)

Polis, Bomba, and Kesihatan vehicles all have an **Emergency Lighting System (ELS)**. While driving an emergency vehicle with the siren on:

- You have **flashing red/blue/white lights**.
- You're **exempt from offences** - speeding and crashes don't count.
- Other players get audio/visual warning that you're coming.

Turn the siren off when you park. The exemption only applies while actively driving with the siren active.

## Customization

Civilian vehicles with `Color = true` support color customization. Look for the **Paint / Customize** option when you spawn a vehicle, or from your vehicle profile. You can change:

- **Body color** - the car's paint.
- **Rim color** - the wheel rims, where the model has rim parts tagged.
- **Window tint** - any `Color3`, applied to parts tagged `VehicleWindow`.

Some vehicles (**Protan Wira**, **Protan Saga**, **Perosatu Axia**, **Perosatu Myvi 2020**) have pre-set palettes (e.g. White, Silver, Black, Red, Beige). Other customizable vehicles accept any color.

Team vehicles usually are not customizable.

## Fuel

Fuel is effectively **unlimited** in Sumaya right now - you don't need to worry about running out or refueling at gas stations. The fuel gauge on boats is tracked per-shift (for fishing trawlers), but cars run without fuel limits.

## Collision toggle

From your **Phone > Collision** app, you can toggle vehicle collisions on or off. With collisions off:

- Your vehicle **phases through** other vehicles.
- Useful for getting out of tight parking or when another player rams you.
- Turn collisions back on when you want to drive normally.

See [Phone and UI](/sumaya/phone) for more on the Collision app.

## Ownership and persistence

- **Rented vehicles** disappear when you respawn, log out, or spawn a different one.
- **Bought vehicles** stay yours permanently. They show up in your profile's Owned Vehicles list.
- If you buy a vehicle and later want to sell it, check the spawner - some vehicles may be sellable for partial refund (this varies).
- If your owned vehicle is **carjacked** by someone else, it's marked stolen in the plate database, and Polis can recover it.

## Plates and registration

Every vehicle has a **license plate**. When you spawn a vehicle:

- The plate is tied to your user ID as the registered owner.
- POLIS can look up any plate from the MDT to see who owns a vehicle.
- If your vehicle is stolen, the plate status flags it.

## Tips

- **Rent before buying.** Try a car at rent price first before dropping 10,000+ Ringgit.
- **Upgrade your team vehicle as you level.** The higher-tier Bomba and Polis cars are faster and tougher.
- **Sirens for cops and fire crews = no tickets.** Always flip your siren on when responding so you don't cite yourself.
- **Don't park in traffic lanes.** Left-behind civilian cars can be carjacked; if you own it and don't want it stolen, park somewhere quieter.
- **Phasing mode for parking.** If someone's blocking you in, enable collision toggle to drive through them.
- **Save for a Tier 2 or 3 trawler.** If you're committing to fishing, the bigger boats pay for themselves quickly.

## What next?

- [Crime and Law](/sumaya/crime-and-law) for how carjacking works in detail.
- [Polis](/sumaya/polis) for the police vehicle catalog.
- [Bomba](/sumaya/bomba) for fire truck details.
- [Kesihatan](/sumaya/kesihatan) for ambulance details.
- [Phone and UI](/sumaya/phone) for the Collision and Profile apps.
