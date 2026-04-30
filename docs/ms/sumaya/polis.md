---
title: Polis
description: 'Bermain sebagai POLIS di Sumaya — rondaan, tangkapan, pangkat, dan peralatan.'
lang: ms
translated_from_hash: 6c9358fc
translated_on: '2026-04-30'
needs_review: true
---


# Polis

**Polis** ialah pasukan polis Sumaya. Jika anda memilih POLIS dari menu utama, anda menjadi pegawai penguatkuasa undang-undang yang bertugas dari saat anda spawn. Tugas anda adalah menangkap penjenayah, menjalankan perangkap kelajuan, menyahut panggilan 999, dan menjaga keamanan.

## Bermula

Pilih **POLIS** pada menu utama. Kit permulaan anda mengandungi 5 alat:

| Alat | Fungsinya |
|------|-----------|
| **Taser X26P** | Senjata penewasan tidak membawa maut dengan kartrij terhad. Tembak suspek untuk melumpuhkan mereka bagi tujuan tangkapan. |
| **Radar Gun** | Alat tangkap kelajuan secara manual. Lihat [Perangkap kelajuan dan radar](#speed-traps-and-radar). |
| **Whistle** | Isyarat orang ramai / lalu lintas. |
| **Handcuffs** | Alat tangkap sebenar - guna pada suspek yang dikehendaki apabila anda cukup hampir. |
| **Plate Finder** | Cari nombor plat mana-mana kenderaan untuk melihat pemilik berdaftar dan sama ada ia ditandakan sebagai dicuri. |

Beberapa pakaian dan peralatan akan dibuka apabila anda menaikkan tahap sektor POLIS (Duty Belt + Beret pada tahap 1, Reflective Vest pada 10, Reflective Coat pada 20). Lihat [Progression](/sumaya/progression) untuk jadual penuh item kerjaya merentasi ketiga-tiga perkhidmatan kecemasan.

## Item tempat kejadian lalu lintas/jenayah yang boleh diletakkan (dirizab / tidak diedarkan)

Permainan ini mempunyai **5 alat boleh letak** yang ditakrifkan (`Polis Cone`, `Polis Sign`, `Polis Umbrella`, `SCone`, `PBSign`) — setiap satu mempunyai pengendali penempatan yang berfungsi dan kaunter `PlaceableItemsLeft`. Walau bagaimanapun, **ia tidak diberikan kepada pemain POLIS pada masa ini** oleh mana-mana loadout pasukan, NPC, kedai, atau pembukaan kunci. Model dan skrip wujud tetapi laluan pengedaran tidak disambungkan dalam build langsung, jadi anda tidak akan menemuinya dalam inventori anda dalam permainan biasa. Anggaplah ia dirizab untuk kemas kini akan datang.

Pergi ke balai polis untuk kenderaan, atau ronda di jalanan dan perhatikan suspek yang dikehendaki pada aplikasi MDT (Mobile Data Terminal) anda.

## Sistem dikehendaki

Orang awam mengumpul **offence points** setiap kali mereka melakukan jenayah. Jumlah offence points menentukan **tahap wanted star** mereka:

| Mata | Wanted stars |
|------|--------------|
| 10-24 | 1 star |
| 25-49 | 2 stars |
| 50-79 | 3 stars |
| 80-119 | 4 stars |
| 120+ | 5 stars |

Suspek berbintang tinggi lebih sukar untuk ditangkap tetapi memberi bayaran lebih apabila berjaya ditangkap.

### Apa yang memberi offence points?

| Jenayah | Mata |
|---------|------|
| Kemalangan kenderaan (melanggar seseorang) | 5 |
| Memandu laju | 10 |
| Mencuri saku | 20 |
| Merampas kereta | 25 |
| Penyeludupan haiwan | 50 |

Lihat [Crime and Law](/sumaya/crime-and-law) untuk pecahan penuh.

### Melihat pemain yang dikehendaki

Buka aplikasi **MDT** pada telefon anda. Tab **Wanted** menunjukkan semua pemain yang sedang dikehendaki dengan:

- Nama dan headshot
- Tahap bintang
- Bilangan kesalahan
- Masa berlalu sejak kesalahan pertama mereka

Anda boleh menetapkan waypoint minimap pada suspek dari sini untuk menavigasi ke arah mereka.

### Susut wanted

Jika suspek mengelakkan daripada melakukan apa-apa jenayah lagi selama **5 minit**, status wanted mereka akan dikosongkan sepenuhnya. Anda mempunyai jangka masa untuk menangkap mereka.

## Membuat tangkapan

Aliran asas:

1. Cari suspek yang dikehendaki (MDT membantu).
2. Hampiri mereka. Jika mereka dalam mod pasif atau memandu laju, mereka mungkin tidak sedar kehadiran anda.
3. Gunakan alat **handcuffs** anda dalam jarak interaksi.
4. Jika berjaya, mereka ditangkap - dihantar ke penjara untuk tempoh berdasarkan bintang.

### Fasa Tahanan

Sebelum tangkapan akhir, suspek memasuki keadaan **detained**. Setelah ditahan:
- Mereka mengikut anda pada **4-stud offset**, dihadkan dalam **20 studs maximum** (mereka tidak boleh berkeliaran).
- **60-second detain timeout** akan bermula — jika anda tidak menyelesaikan tangkapan dalam 60 s, tahanan akan dilepaskan secara automatik.
- Semasa ditahan, mereka masih boleh cuba **surrender** pada prom untuk mengurangkan masa penjara mereka separuh.

Tahanan berguna apabila anda mahu membawa suspek ke lokasi tertentu (balai polis, prom penyerahan diri) sebelum mendaftarkan mereka.

### Ganjaran tangkapan

Ganjaran berskala mengikut tahap bintang suspek pada masa tangkapan:

| Stars | XP | Ringgit (dompet) |
|-------|-----|------------------|
| 1 | 50 | 150 |
| 2 | 100 | 300 |
| 3 | 175 | 500 |
| 4 | 275 | 800 |
| 5 | 400 | 1,200 |

### Bonus pegawai berdekatan

Jika pemain POLIS lain berada dalam **50 studs** apabila anda membuat tangkapan, mereka mendapat **50% of your XP and Ringgit** secara automatik - tiada tindakan diperlukan. Rondaan berpasangan bagus untuk pendapatan berganda.

### Bonus pencapaian

Setiap **5 arrests** yang anda buat, anda mendapat bonus **+200 Ringgit** di atas ganjaran tangkapan.

## Penjara

Apabila anda menangkap seseorang, mereka dihantar ke penjara. Tempoh penjara bergantung pada wanted stars mereka pada masa tangkapan:

| Stars | Masa penjara |
|-------|--------------|
| 1 | 30 saat |
| 2 | 1 minit |
| 3 | 2 minit |
| 4 | 3 minit |
| 5 | 5 minit |

Semasa dipenjarakan:

- Pemain tidak boleh menukar pasukan.
- HUD penjara menunjukkan masa yang tinggal.
- Apabila pemasa tamat, mereka dilepaskan.

### Penyerahan diri

Penjenayah boleh memilih untuk **surrender** pada prom yang ditetapkan sebelum ditangkap. Penyerahan diri mengurangkan masa penjara separuh, dan membolehkan mereka keluar dengan lebih bersih:

| Stars | Masa penjara penyerahan | Pengunci pasif selepas pelepasan |
|-------|-------------------------|----------------------------------|
| 1 | 15 sec | 60 sec |
| 2 | 30 sec | 2 min |
| 3 | 1 min | 4 min |
| 4 | 90 sec | 6 min |
| 5 | 150 sec | 10 min |

Pengunci pasif bermakna mereka tidak boleh mengaktifkan semula mod pasif sejurus selepas pelepasan - anda masih boleh menangkap mereka jika mereka cuba memulakan rentetan jenayah.

### Meninggalkan untuk mengelak tangkapan (LTAA)

Jika pemain yang dikehendaki log keluar di tengah-tengah kesalahan, mereka akan dikenakan masa penjara yang **worse** semasa kembali:

| Stars | Masa penjara LTAA |
|-------|-------------------|
| 1 | 45 sec |
| 2 | 90 sec |
| 3 | 150 sec |
| 4 | 4 min |
| 5 | 6 min |

Jadi tidak, berhenti tidak akan menyelamatkan anda.

### Pemasa tempur (tetingkap penglibatan)

**30-second combat window** dibuka pada suspek pada saat **taser** anda mengenai sasaran atau **detain** anda berjaya. Semasa pemasa aktif:

- Butang **Reset** mereka dikunci, dan menu utama / pertukaran pasukan dikunci walaupun di bawah 1-star.
- Jika mereka mati atas apa-apa sebab (jatuh, kemalangan, skrip bunuh diri `Health=0`, anda menaser mereka terlalu banyak kali) — combat-evasion jail bermula.
- Jika mereka meninggalkan permainan — combat-evasion jail dijadualkan untuk sesi seterusnya mereka.

Combat-evasion jail adalah **double** tempoh LTAA biasa: 60 / 120 / 240 / 360 / 600 saat pada 1–5 stars, ditambah +30 saat jika mereka ditahan pada masa itu. **Anda menerima XP + Ringgit penuh berskala bintang yang dikreditkan seolah-olah anda telah menangkap mereka dengan bersih**, ditambah pembahagian 50% pegawai berdekatan. Kes tepi engager-offline: kredit hangus, jadi kekal dalam talian jika anda mahu bayaran.

Dalam amalan ini bermakna: setelah anda menaser suspek, anda telah pun mengunci kreditnya. Walaupun mereka berlari ke dalam lalu lintas dan mati, rondaan anda masih dikira.

## Perangkap kelajuan dan radar

Sumaya mempunyai **two separate speeding systems** — zon automatik dan radar gun manual anda.

### Zon perangkap kelajuan (auto)

Terdapat **3 speed trap zones** dalam dunia, setiap satu dengan had yang dipaparkan **50 studs/s**. Jika mana-mana kenderaan (pemain atau NPC) memandu melalui zon melebihi had, permainan menyaman pemandu secara auto: +10 offence points, tiada tindakan pegawai diperlukan. Anda akan melihat notifikasi sepanduk pada HUD anda apabila saman berlaku berhampiran anda.

Zon dikitar semula bagi setiap pemandu pada cooldown 30 saat, jadi seseorang yang memandu laju berulang kali akan mengumpul saman dengan cepat.

Kenderaan kecemasan dengan **siren active** mereka dikecualikan — anda tidak akan menyaman diri sendiri semasa menyahut panggilan.

### Radar gun (manual, untuk pelaju besar)

Radar gun anda adalah alat untuk menangkap pelaju **serious** di luar zon. Halakan pada kenderaan yang bergerak dan tembak:

- Sasaran mestilah bergerak pada **200 studs/s or faster** untuk alat mendaftarkan kenaan. Lebih perlahan daripada itu, alat akan melaporkan "Not speeding" dan tidak melakukan apa-apa.
- Setiap nombor plat yang ditangkap dikenakan cooldown **120-second cooldown** - anda tidak boleh menangkap semula plat yang sama dalam masa dua minit.
- Anda mestilah **on duty** (pasukan POLIS aktif) untuk alat berfungsi.

**Ganjaran setiap tangkapan:** 30 XP + 50 Ringgit + 10 offence points pada pemandu.

Oleh kerana zon hanya berfungsi di bawah 50 studs/s dan radar memerlukan 200+, terdapat jurang luas di mana hanya pegawai bergerak boleh menangkap pelaju. Itulah niche radar.

## Kenderaan

Kenderaan Polis dibuka berdasarkan campuran **player level** dan **sector level**.

| Kenderaan | Player level | Sector level | Harga |
|-----------|--------------|--------------|-------|
| Protan Wira MPV Polis | 1 | 1 | Percuma |
| Protan Waja MPV Polis | 15 | - | 6,500 Ringgit |
| Handai City MPV Polis | 1 | 35 | 12,000 Ringgit |
| Handai Civic MPV Polis | 1 | 55 | 15,000 Ringgit |

Wira ialah kereta rondaan permulaan anda. Civic adalah peringkat tertinggi - laju, berat, lengkap.

Kenderaan Polis mempunyai **ELS sirens**. Dengan siren aktif, anda dikecualikan daripada kesalahan lalu lintas (memandu laju, kemalangan) semasa anda menyahut panggilan.

Lihat [Vehicles](/sumaya/vehicles) untuk butiran.

## Pangkat

Polis mempunyai **16 ranks**, paling banyak antara mana-mana perkhidmatan kecemasan. Gelaran adalah berdasarkan pangkat sebenar MYSverse Police (POLIS).

| Tahap | Pangkat |
|-------|---------|
| 1 | Police Constable |
| 6 | Lance Corporal (L/Cpl) |
| 11 | Corporal (Cpl) |
| 16 | Sergeant (Sgt) |
| 21 | Sergeant Major (SM) |
| 26 | Sub-Inspector (SI) |
| 31 | Probationary Inspector (P/Insp) |
| 36 | Inspector (Insp) |
| 41 | Chief Inspector (C/Insp) |
| 46 | Assistant Superintendent of Police (ASP) |
| 51 | Deputy Superintendent of Police (DSP) |
| 56 | Superintendent of Police (SUPT) |
| 61 | Assistant Commissioner of Police (ACP) |
| 69 | Senior Assistant Commissioner of Police (SAC) |
| 77 | Deputy Commissioner of Police (DCP) |
| 89 | Commissioner of Police (CP) |

Dari tahap 89 dan ke atas anda berada di puncak. Tiada perubahan pangkat semasa anda menuju ke had tahap 100.

## Dikecualikan semasa menyahut panggilan

Jika anda mempunyai **siren active** kenderaan Polis anda, anda tidak boleh disaman kerana memandu laju atau kemalangan semasa anda memandu. Sistem mengiktiraf bahawa anda sedang menyahut panggilan. Matikan siren apabila anda parkir - jika tidak pemain lain mungkin menganggap anda masih menyahut panggilan.

## Petua

- **Gunakan MDT.** Jangan hanya meronda secara membuta tuli. MDT menunjukkan setiap suspek yang dikehendaki dan membolehkan anda menetapkan waypoint kepada mereka secara terus.
- **Berpasangan.** Dua POLIS dalam 50 studs bermakna pegawai bukan-penangkap mendapat 50% daripada ganjaran secara percuma. Bagus untuk grind berasaskan rakan.
- **Jangan terlepas bonus pencapaian.** Setiap 5 tangkapan = +200 Ringgit. Rancang syif anda untuk mencapai 5, 10, 15.
- **Tangkapan 5-star adalah besar.** Satu tangkapan 5-star = 400 XP + 1200 Ringgit. Ia lebih sukar untuk dibuat tetapi berbaloi untuk dinanti.
- **Siren = tiada saman.** Hidupkannya apabila anda memandu ke panggilan - jika tidak memandu laju anda sendiri boleh menyebabkan anda mendapat saman, secara memalukan.
- **Jangan jadi orang yang dikehendaki sendiri.** Melakukan jenayah sebagai POLIS dirancang untuk auto-menurunkan pangkat anda dari pasukan, tetapi pendengar itu tidak disambungkan dalam build semasa - anda kekal pada POLIS. Jangan harap permainan menukar anda kembali kepada awam; tinggalkan pasukan terlebih dahulu jika anda mahu bermain sebagai penjenayah. (Praktiknya: POLIS dilarang dari mod pasif, jadi melakukan jenayah semasa bertugas amat berisiko.)
- **XP bantu kebakaran hanya untuk Kesihatan.** Berlawanan dengan apa yang kelihatan intuitif, POLIS TIDAK memperoleh XP daripada insiden kebakaran berdekatan - permainan menyemak `JobType == "EMS"`, dan POLIS mempunyai `JobType = "Law"`. Hanya pemain Kesihatan mendapat manfaat 10 player XP per blok daripada berdiri dalam 512 studs daripada kebakaran.

## Apa seterusnya?

- [Crime and Law](/sumaya/crime-and-law) untuk apa yang anda hadapi.
- [Bomba](/sumaya/bomba) dan [Kesihatan](/sumaya/kesihatan) untuk perkhidmatan lain.
- [Vehicles](/sumaya/vehicles) untuk katalog kenderaan Polis.
- [Progression](/sumaya/progression) untuk cara XP dan pangkat berfungsi.
