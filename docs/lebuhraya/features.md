---
title: "Gameplay Features in Lebuhraya"
description: "Explore all the gameplay features in Lebuhraya including fuel system, garage mechanics, emergency services, and roleplay elements."
---

# Gameplay Features in Lebuhraya

Lebuhraya is more than just driving; it's packed with features that create an engaging roleplay and progression experience. Here are some of the key gameplay systems:

## ⛽ Fuel System (Beta)

- **Introduced:** v3.5.0 ("Fuel Up, Rev Up")
- **Mechanics:**
  - Vehicles consume fuel and require refueling at any of the 5 petrol stations across the map.
  - Vehicles will not operate when fuel is empty and may require a tow from KEMRonda.
  - Currently, refueling does **not** cost any in-game currency or XP.
  - Fuel types and consumption values are subject to adjustment based on feedback.
- **Updates:**
  - Internal re-implementation to each vehicle's drive script (v3.5.2).
  - Adjusted fuel consumption values based on feedback (v3.5.2).
  - Fixed issue where fuel gauges do not show up on touchscreen/mobile devices (v3.5.13).

## 🚓 Laws and Offences System

- **Introduced:** v3.5.12
- **Passive Lock:**
  - Triggered when a player breaks an in-game law (e.g., speeding caught by radar gun or speed trap).
  - While Passive Lock is active, toggling Passive Mode is disabled.
  - Skilled drivers can still escape by out-maneuvering officers.
  - Future expansions may include driving on the wrong side of the road, bank robbery, etc.
- **Points-Based Offence & Arrest System:**
  - Offences carry points; points stack until a threshold is reached.
  - **Threshold:** 10 points → player becomes arrestable.
  - **Example:** Speeding = 4 points (3 catches at ≥200 SPS to become arrestable).
  - No direct penalty on an arrested player beyond a respawn.
  - All Law Enforcement (LE) officers within 64 studs of an arrest earn **100 XP**.
- **Law Enforcement (LE) Teams involved:** Polis Trafik (gamepass), KEMRonda (gamepass), APJ (free).
- **Balance:** Point values, speed thresholds, and arrest rules are subject to tuning based on feedback.

## 🎣 Fishing System

- **Introduced:** v3.5.5
- **Location:** Old scenic road (_jalan lama_) near Bandar Seri Putra.
- **How to Fish:**
  1.  Go to the **Fishing Port** and equip your **Fishing Rod**.
  2.  Click/tap on the water to cast your line.
  3.  When 'Shake' circles appear, tap/click them quickly.
  4.  Hold click/touch to keep the white rectangle inside the moving 'fishing' bar (keep it green).
  5.  Your catch appears in your inventory.
- **Selling Your Catch (for XP):**
  1.  Approach **the Fishmonger**.
  2.  With the Fishing Rod equipped, click/tap the fish in your inventory to select it.
  3.  Press the green **Sell** button.
- **Sale Multipliers (XP):**
  - **Fishing Port:** 0.5x XP
  - **Bandar Seri Putra:** 1x XP
  - **Kampung Merbang:** 2x XP
- **Updates:**
  - Fixed leaderboard rendering and fishing rod target issues (v3.5.6).
  - Added 2-second cooldown after a catch (v3.5.6).
  - Added 30-second failsafe for Fishing Rod tool (v3.5.12).

## 📖 School System (SMK MYS II)

<iframe src="https://drive.google.com/file/d/1DT9HRYlIiE41ghdgqlo7duRMyCD-a1Qi/preview" width="100%" height="480" allow="autoplay" style="border: none; border-radius: 12px;"></iframe>

- **Location:** SMK Lebuhraya in Bandar Seri Putra (near Putra Mahkota spawn, Masjid BSP).
- **Mechanics (v3.2.0 - initial release, details may have evolved):**
  - Learn facts about History, Geography, Science, Mathematics (Malaysian secondary school syllabus).
  - Attend classes (learning half and quiz half).
  - Correct quiz answers award XP (e.g., +50 XP initially, later +250 XP as of v3.3.13).
  - Perfect attendance bonus for attending all classes in a day (+100 XP).
- **Updates:**
  - School Quiz Leaderboards (persistent server and player list) (v3.3.13). Faster correct answers = higher score.
  - Refreshed History/Sejarah question bank, removed irrelevant questions (v3.5.6).
  - NSN Nismo car unlockable via "Quiz Master (Advanced)" challenge at SMK MYS II (v3.5.0).

## ⭐ XP, Progression, and Challenges

- **Leveling:** Max level is **500** (v3.4.23). Each level requires 1,000 XP (v3.0.5).
- **XP Earning:**
  - Driving: +50 XP per 1,000 studs (v3.0.5, stud tracking reduced from 2000).
  - Visiting Landmarks: +100 XP per unique landmark per session (v3.0.3).
  - Job-specific tasks (see [Teams](./teams.md)).
  - School Quizzes: +250 XP per correct answer (v3.3.13).
  - Challenges.
- **XP Multipliers (v3.3.24):**
  - **50% XP Boost Gamepass:** 1.5x XP.
  - **Roblox Premium:** 1.25x XP.
  - Stack for a max of 1.75x XP.
  - Multipliers do not stack with special events (e.g., 2XP weekends cap at 2x).
- **Daily & Weekly Challenges (Beta, v3.3.24):**
  - Reset daily at 12 AM MYT (GMT+8), weekly on Monday.
  - Variety of challenges, including career-specific and unique quests.
  - Rewards can include XP, cosmetics, and vehicles.
- **Challenge-Unlockable Vehicles:**
  - Tayoti Supra Mark V (Jersik Race Track lap < 45s) (v3.4.4).
  - NSN S15 Silvia (3 laps at Jersik Race Track, each < 45s) (v3.4.19).
  - NSN Nismo (Quiz Master Advanced: 28 questions < 2s each at SMK MYS II) (v3.5.0).
- **Tier Skips / Level Skips (v3.3.25):**
  - Purchasable skips containing 1,000 XP each.
  - Bulk packages up to 50 levels (up to 30% discount).

## 🗺️ Map & Exploration

- **Key Locations:** Putra Mahkota, Jersik, Bandar Seri Putra, Kampung Merbang, RnR Sungai Merbang.
- **New Scenic Route (Jalan Lama) (v3.3.12):** Starts at Bandar Seri Putra, ends near Haunted House. Bypasses Putra Mahkota toll.
- **Map Size Reduction (v3.3.12):** Reduced by ~50% for performance and less boring long drives. Easier Bus Driver XP.
- **Roblox Terrain Upgrades (v3.3.16):** Started with Kampung Merbang for a more traditional feel.
- **Landmarks:**
  - Balai Bomba Jersik (v3.4.4) - Historical build, future functional use for fire incidents.
  - Toll Plaza Construction Site (near end of _jalan lama_) (v3.4.4).
  - Building preparations for new playable area in Putra Mahkota (v3.4.24).
  - Building ground for industrial complex of petroleum and gas (v3.5.10).
- **Spawn Switcher Images (v3.4.9):** Background images to show teleport destination.

## 📱 Player Tools & Communication

- **Mobile Phone (v3.3.12):** Access RMU catalogs, take selfies. Topbar icon. Rafahia 3rd-party app added (v3.5.9). Fixed missing third-party apps (v3.5.14).
- **Tablet (v3.3.12):** For Polis Trafik & KEMRonda. Look up vehicle info by plate. Topbar icon.
- **Chat System:**
  - Malay chat filter enhancements (multiple updates, e.g., v3.3.14, v3.4.14).
  - Chat filter extended to display names (v3.4.27).
  - Periodic reminders to mute/report/block disruptive players (v3.4.27).
  - Announcements in chat (repeats every 5 mins, v3.4.23).
  - Channel tabs for chat (enabled v3.4.28, reverted v3.4.29 due to Roblox issues).
- **MyPod Personal Music Player (v3.0.11):** Access via music icon on top bar. Plays music only for you.

## 🏡 House Customization

- **Location:** Kampung Merbang (v3.0.0).
- **Mechanics:** Build houses on plots. Fixed building issues (v3.1.4). Fixed Kampung Merbang house plots (v3.4.1).
- **Furniture:** Kampung-inspired furniture (v3.0.1). Improved furniture placement collision logic (v3.4.11).

## 🪓 Lumberjack System

- **Location:** H Plantation Jersik area.
- **How It Works:**
  1. Join the **Lumberjack** team (free at Level 150).
  2. Equip your **Axe** from your tools.
  3. Approach a tree and swing to chop it down.
  4. Collect the lumber.
  5. Sell your lumber at the **lumber shop** for XP rewards.
- Trees respawn after being cut, allowing continuous harvesting.

## 🚚 Trucking & Logistics System

- **Team:** Logistics (free at Level 75).
- **How It Works:**
  1. Spawn a truck from the **Truck Spawner**.
  2. Attach trailers at designated **hook points**.
  3. Follow waypoints to deliver freight between locations.
  4. Complete deliveries for XP rewards.
- **Tools:** Logistics Guide for tracking deliveries.

## 🗑️ Waste Disposal System

- **Team:** Waste Disposal (free at Level 25).
- **How It Works:**
  1. Spawn a waste disposal truck from the **Waste Spawner**.
  2. Drive to rubbish bins around Lebuhraya to collect waste.
  3. Bring collected waste to the **incinerator** for disposal.
  4. Earn XP for completed runs.
- **Tools:** Waste Disposal Guide for tracking collection points.

## 🏥 Medical System (KKN Medic)

- **Team:** Kesihatan (free at Level 200).
- **Hospital Zone:** KKN Medic Hospital in Bandar Seri Putra.
- **Tools:** Splint, First Aid Kit, Bandage, Kesihatan Booklet.
- **Gameplay:**
  - Toggle on/off duty via the Duty Toggle Button.
  - Respond to injured players and provide medical assistance.
  - Use the Action Menu to perform medical procedures.

## 🤕 Injury System

- **Mechanics:**
  - Players can sustain injuries from vehicle crashes and other incidents.
  - Injury notifications appear on screen when hurt.
  - Kesihatan team members can respond to treat injured players.
  - The crash service generates crash incidents that can cause injuries.

## 🏪 KeluargaMart (Convenience Store)

- **Location:** Various locations across Lebuhraya.
- **Features:**
  - Browse and purchase items from the store inventory.
  - Items include food, drinks, and other consumables.
  - Interact via the KeluargaMart UI when near a store.

## 🎫 Token System

- **Mechanics:**
  - Tokens are special items that provide temporary boosts or effects.
  - Active tokens are displayed in the **Active Tokens HUD** on screen.
  - Tokens can be earned through challenges, events, or purchased from the shop.

## 🚦 Traffic System

- **Traffic Lights:** Automated traffic light controllers manage intersections with configurable green, yellow, and red phases.
- **Red Light Detection:** Running a red light while driving triggers a **Red Light Violation** offence (1 point) and a 60-second Passive Lock. A 10-second cooldown prevents repeat penalties.
- **Speed Traps:** Automated speed detection zones that catch speeding vehicles.

## Miscellaneous Systems

- **R15 Characters (v3.3.16):** Game transitioned to modern R15 character rigs.
- **Festive Decorations:** Ramadan (v3.3.0), Hari Raya (v3.3.15), Chinese New Year (v3.4.30), Deepavali (v3.4.22), New Year Countdown (v3.4.26).
- **Data Management:** DataStore2 module replaced with Roblox's migration tool (v3.5.9). Report data loss if any.
- **Private Servers:** XP does not save in private servers (notification added v3.3.23).

These features contribute to the dynamic and evolving world of Lebuhraya. Keep an eye on in-game announcements for the latest additions!
