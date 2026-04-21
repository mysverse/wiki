---
title: Jobs
description: >-
  Every job in Lebuhraya — grouped by agency (Pengangkutan and more) with pay
  rates.
lang: zh
translated_from_hash: f9a54a87
translated_on: '2026-04-21'
needs_review: true
---

# Jobs

Every job in Lebuhraya belongs to a team (see [Teams and Careers](/lebuhraya/teams)). This page is the reference for what you actually **do** on each job — how to start it, the gameplay loop, typical rewards, and where the job takes place.

Jobs are grouped by the **agency** that organises them.

---

## Pengangkutan (Transport)

### Taxi Driver

**Unlock**: Taxi Driver gamepass (or the Bandaraya gamepass, which includes Taxi access).

**How to start**: Join the Taxi Driver team from the Main Menu. Toggle your **Duty** status to on from the TaxiGui on screen.

**What you do**:
1. When you're on duty, a pickup point is assigned — drive to the NPC waiting for a taxi.
2. The NPC gets in your taxi. Drive to the marked dropoff point.
3. The mission completes when you stop within range (about 50 studs) of the dropoff.
4. A new mission is assigned immediately.

**Rewards**:
- **XP** scales with distance: about **0.11 to 0.13 XP per stud**. A 4000-stud fare pays 440–520 XP.
- **BR** is paid per completed fare; scales with distance.

**Vehicle**: Any vehicle works, but for best earnings use a purpose-built taxi — Protan Saga Taxi, Perosatu Bezza Taxi, Protan Preve Taxi. Higher-tier Taxi Driver ranks unlock better models (and more passenger capacity).

### Bus Driver

**Unlock**: Free — this is one of two free teams.

**How to start**: Join the Bus Driver team. Spawn a bus via MyPod and begin a route from the **Depoh Bas** in Bandar Seri Putra.

**What you do**: Drive fixed bus routes, stopping at designated bus stops to pick up and drop off NPC passengers. Each full route pays XP and BR.

**Vehicle**: Buses — Intero Citie, TKL_K230UB, TKL_Harimau Evo, Tayoti Hiace Passenger/Transport variants.

**Bus company affiliations**: Three external Roblox groups represent in-universe bus operators — **FirstGroup PLC**, **Fertua Transport**, and **Hornbill Bus**. Join any of them to carry their livery / branding on select buses (purely roleplay; the groups are community-run).

### Logistics (Trucking)

**Unlock**: Level 75, or earlier with the Season 1 Season Pass.

**How to start**: Join the Logistics team. Head to a freight contract point (marked ProximityPrompts around the map) and take on a delivery.

**What you do**:
1. A freight truck spawns for you.
2. Drive the loaded truck to the delivery destination.
3. Earn XP and BR on successful delivery.

**Vehicle**: Heavy-freight trucks — Rolvo FM, Rolvo FM RORO Truck, Sanica P310.

---

## Perkhidmatan (Services)

### Food Delivery

**Unlock**: Level 10. This is usually your first real job.

**How to start**: Join the Food Delivery team. A delivery is assigned to you automatically.

**What you do**:
1. Go to the shop shown on your waypoint (one of the [12 shops](/lebuhraya/shops)).
2. Interact with the shop NPC to pick up the food order (your character will receive the food item as a tool).
3. Drive to the customer's location on your waypoint.
4. Interact with the customer NPC to hand over the order.

**Rewards**: **250 XP flat** per delivery, plus BR.

**Vehicle**: Any. A motorcycle (Handai EX5) is often fastest for winding streets.

### Post Office

**Unlock**: Level 50.

**How to start**: Join the Post Office team and visit **Pos Nasional Jersik** to pick up a delivery route.

**What you do**: Collect packages from postboxes in one of the four postal zones (**Bandar Seri Putra**, **Jersik**, **Kampung Merbang**, **Putra Mahkota**), process them, and deliver to the marked mailbox addresses.

**Rewards**: **25 XP per package** plus a salary that scales with your **Post Office level**. The job has its own internal level system, separate from your main player level:

- Max Post Office level: **20**
- XP per Post Office level: `100 × level` (so Level 1 needs 100 XP, Level 20 needs 2,000 XP)
- Salary per package: `60 + (level × 10)` BR — at Level 1 you earn 70 BR per delivery, at Level 20 you earn 260 BR

Switching zones forces you to stop the current job, so pick a zone and stick with it for a productive session.

**Vehicle**: Handai EX5 Pos (motorcycle) or Tayoti Hilux Pos (truck).

### Waste Disposal

**Unlock**: Level 25 (older game text may still say 50 — level 25 is the current in-game value).

**How to start**: Join the Waste Disposal team. Read the **Waste Disposal Guide** tool in your inventory.

**What you do**: Collect rubbish from bins placed around the map, load it onto your truck, and deliver to one of the **Stesen Insinerasi** (incineration stations — one in Bandar Seri Putra, one in Jersik).

**Vehicle**: Rubbish truck (team-issue).

---

## Kecemasan (Emergency)

### Bomba

**Unlock**: Bomba gamepass.

**How to start**: Join the Bomba team. Equip your **Pager** tool to receive emergency alerts. When a 999 call comes in (fire, crash), accept the incident.

**What you do**:
- **Firefighting**: Respond to fires, use hoses and fire extinguishers.
- **Rescue**: Use spreaders and chainsaws to extract trapped drivers.
- **Medical assist**: Bomba responds to car crashes alongside Kesihatan.

**Tools**: Chainsaw, Spreaders, Fire (hose), Pager.

**Vehicle**: Fire trucks — Merze Atego LFRT Bomba, Sanica P310 FRT Bomba, Sanica 94D LFRT Bomba, Sanica P360 Tanker, Masubi Triton variants, Tayoti Hiace MTV EMRS.

**Rewards**: XP per incident resolved. Larger incidents pay more.

### Kesihatan (KKN Medic)

**Unlock**: Level 200.

**How to start**: Join the Kesihatan team. Equip your **Pager** tool. Accept 999 medical incidents.

**What you do**:
1. Respond to the incident location (within 12 studs to interact).
2. **Assess** the patient's injuries — don't dawdle. Waiting longer than 60 seconds before assessing incurs a survival penalty.
3. **Treat** the injuries in the correct order using your tools (Splint, First Aid Kit, Bandage). Wrong treatments reduce the patient's survival score by 3 per mistake.
4. **Stabilise** — a successful stabilisation gives +15 survival.
5. Load the patient onto a stretcher, then into your ambulance (must be within 25 studs of the ambulance to load).
6. Transport to **Klinik Kesihatan Bandar Seri Putra** or another hospital zone.

**Mechanics**:
- A 6-step treatment process per patient.
- Patients have a **survival score** that decays over time (by default 5 per 30 seconds, scaled by injury severity). Each completed step boosts survival by 5.
- A patient can be Survived, Critical, or Dead — final state determines your XP multiplier.
- NPC patient behavior varies — some are cooperative, some aggressive. Aggressive patients decay faster.
- 5-second cooldown between patients. Patients time out after 5 minutes if not treated.

**Tools**: Splint, First Aid Kit, Bandage, Kesihatan Booklet, Pager.

**Vehicle**: Tayoti Hiace KKN Ambulance, Handai City KKN RRV, Tayoti Hilux KKN RRV.

**Rewards**: XP per treatment step and transport bonus, multiplied by survival outcome.

---

## Polis (Police)

All police teams share the 999 emergency dispatch and can use the same enforcement tools. What differs is where they spawn, the uniform, and the vehicle liveries.

### KEMRonda

**Unlock**: KEMRonda gamepass.

**How to start**: Join the KEMRonda team.

**What you do**: Highway auxiliary patrol — assist stranded motorists, tow damaged vehicles, set up traffic management (cones, signs) around incidents.

**Tools**: Powertorch, Placeables SCone, Placeables PBSign, Advanced Tool Kit.

**Vehicle**: KEMRonda PB Peronda Hilux variants, iZu Tow Truck KEMRonda, iZu Tow Bed KEMRonda.

### Polis Trafik

**Unlock**: Polis Trafik gamepass.

**How to start**: Join the Polis Trafik team.

**What you do**: Traffic law enforcement — use the **Radar Gun** to catch speeders, respond to 999 incidents, issue tickets.

**Automatic offences**: The game detects two traffic violations automatically — **running a red light** and **speeding**. Each detected offence:
- Shows a red notification on the offending driver's screen
- Adds a point to their violation record
- Triggers a 60-second "passive lock" that blocks certain interactions

Polis Trafik players can be notified of detected offences and respond.

**Tools**: Taser X26P, Radar Gun, Whistle, Torchlight, Placeables PolisCone, Placeables PolisSign, Placeables PolisUmbrella.

**Vehicle**: Handai Civic Type R HPV Polis, Masubi Lancer HPV Polis, Kasaki Ninja Polis, and various escort variants.

### Undercover Police

**Unlock**: Undercover Police gamepass.

**How to start**: Join the Undercover Police team.

**What you do**: Same toolkit as Polis Trafik, but on unmarked vehicles. Better for discreet operations and observation.

**Tools**: Same as Polis Trafik.

**Vehicle**: Unmarked variants — Protan Persona Taxi (yes, really), Protan Saga Unmarked, Perosatu Bezza Unmarked, Protan X70 Unmarked, Masubi Lancer HPV Polis Tartan.

---

## Penguatkuasaan (Enforcement)

### APJ

**Unlock**: Level 300.

**How to start**: Join the APJ team.

**What you do**: Road Transport Agency — the equivalent of Malaysia's Jabatan Pengangkutan Jalan. Inspect vehicles, enforce road transport regulations, coordinate with police.

**Tools**: Torchlight, Placeables SCone.

**Vehicle**: Protan Inspira APJ, Protan X70 APJ.

---

## Sumber (Resources)

### Power Nasional

**Unlock**: Level 100.

**How to start**: Join the Power Nasional team.

**What you do**: National electric utility contractor work. Respond to power outages, inspect infrastructure, set up safety cones while working.

**Tools**: Placeables SCone.

### Lumberjack

**Unlock**: Level 150, or earlier with the Season 1 Season Pass.

**How to start**: Join the Lumberjack team, equip your **Axe** tool, head to the lumberjack zone (near H Plantation in Jersik).

**What you do**:
1. Chop trees with the axe (you must be within 8–15 studs of the tree).
2. Wood accumulates in your per-player storage.
3. Sell wood at the shop for XP.

**Rewards**: **3 XP per kilogram** of wood sold.

**Storage capacity grows with your Lumberjack level**:

| Player Level | Storage (kg) |
|---|---|
| 1 | 10 |
| 50 | ~40 |
| 100 | ~79 |
| 200 | ~189 |
| 500 | ~984 |

Formula: `10 + (level-1)×0.5 + (level-1)²×0.00197`, so storage grows almost linearly early on and accelerates at high levels.

---

## Back to school

### School

**How to start**: Head to **SMK MYS II** (the secondary school POI on the highway). Walk into any of the four classroom zones — Matematik, Sains, Sejarah, Geografi (Math, Science, History, Geography).

**What you do**: Classes run on a **2-minute bell cycle** — the bell chimes as classes begin and end. While in a class, a quiz starts. Each question is timed — answer faster for a bigger bonus.

**Scoring per correct answer**:
- Base score: **10 points**
- Time bonus: up to a full bonus if you answer within **2.5 seconds**; decays linearly to zero after that
- **250 XP** per correct answer (multipliers apply)

The school also powers the weekly **Quiz Master** challenge, where answering 21 questions correctly within 3 seconds each unlocks the **BMY M5 CS** as a vehicle reward (currently inactive — watch for event relaunches).

**Why go**: Passive, low-pressure XP while you read; the school is one of the few AFK-friendly spots that still awards experience. Great between job shifts.

## Community jobs (Malaysians group)

These activities are available to anyone on the **Malaysians** team (join the MYSverse group at rank 1+).

### Fishing

**How to start**: Equip a fishing rod and head to the **Fishing Port** (in the map's coastal area) or any water.

**What you do**:
1. Cast your rod.
2. Wait for a bite.
3. Shake the rod (follow on-screen prompts) to reel in.
4. Sell fish at shops for BR.

**What you can catch**: The current fish roster has 10 entries, weighted roughly by chance:

| Catch | Rarity | Notes |
|---|---|---|
| Torpedo Scad | Chance 60 | Most common real fish |
| Indian Mackerel | Chance 55 | Very common |
| Snapper | Chance 45 | Common |
| Pomfret | Chance 45 | Common |
| Siakap (sea bass) | Chance 40 | Common |
| Red Snapper | Chance 35 | Uncommon |
| Tin Can | Chance 20 | Junk — reels in but has no reward |
| Boot | Chance 20 | Junk — reels in but has no reward |
| Yifish | **Chance 0.5** | **Extremely rare** — a fishing legend among players |
| meow | — | Separate easter egg, very rare |

**Casting range**: up to 80 studs from where you're standing.

**Selling**: Fish can be sold at fishing-port shop zones. Current reward is **XP only** — the BR reward path is unimplemented in the current Sell module. Rare catches give bigger XP payouts than common fish.

### Checkout

**How to start**: Work a cashier station at one of the shops.

**What you do**: Serve NPC customers — select the food items they want, take payment, issue change. Good for social roleplay and small XP gains.

---

## Open to everyone

### Racing

**How to start**: Open the **LBHRY_RaceMenu** (topbar). Select a track.

**What you do**:
- **Time Trial** — race alone against the clock. Set track records.
- **PvP Lobby** — create or join a lobby, wait for players to load in, start the race.

**Rewards**: XP and BR based on finish time. Faster = higher payout.

**Tracks**: Currently the game has one active track — **Test Sprint** — a short 3-checkpoint, 1-lap proving loop open to any vehicle class (Civ) and any level. Base payout is 1,500 XP / 300 BR. PvP lobbies support 2–6 players with a 30-second pre-race lobby and 5-second start countdown. The "Jersik Race Track" POI is the in-world location where racing happens.

Expect more tracks as the game updates — the race system supports time badges (e.g. sub-30s, sub-20s medals) for tracks that designers configure.

### Convoy

**How to start**: In the Main Menu or convoy icon, create a convoy (you become the leader) or browse public convoys within 500 studs and request to join.

**What you do**: Drive with up to 6 people in the same convoy. Stay within 200 studs of each other to keep the bonus active. The more friends and same-team members you have, the higher the XP multiplier — up to +50% on top of the base XP stack.

See [Social Features](/lebuhraya/social-features) for the full breakdown.

### Housing

**How to start**: Visit **Pangsapuri Seri Putra** in Bandar Seri Putra to claim an available plot.

**What you do**: Place a house template (3 Kampung styles or 1 Modern Terrace), customise the paint, add furniture, lock/unlock doors, toggle lights.

See [Housing](/lebuhraya/housing) for details.

---

## 999 Emergency system

Any player can call 999 (see [Social Features](/lebuhraya/social-features)). If you're on an emergency team (Bomba, Polis Trafik, Undercover Police, Kesihatan), equip your **Pager** to see active incidents and accept one.

- Incident types: **Car Crash**, **Injured Person**.
- Up to **10 incidents** can be open at once.
- A resolved incident takes at least **30 seconds** before rewards are paid out — this is the minimum response window to discourage instant-resolve farming.
- If the incident is cancelled or you change teams, your assignment is dropped.

---

## Which job should I start with?

- **Level 10**: Food Delivery is the classic starter. 250 XP per delivery, short routes, uses any vehicle.
- **Got the MYSverse group?** Fishing is chill and self-paced.
- **Want action?** Bomba or Polis Trafik (requires gamepass) — lots of 999 incidents, social roleplay.
- **Want to drive for hours?** Logistics or Taxi (Taxi needs gamepass, Logistics needs Level 75 or Season 1 Pass).

## Next steps

- [Teams and Careers](/lebuhraya/teams) — Rank titles and tier progression
- [World and Map](/lebuhraya/map) — Where every job's buildings are located
