---
title: Polis
description: 'Bermain sebagai POLIS di Sumaya — rondaan, tangkapan, pangkat, dan peralatan.'
lang: ms
translated_from_hash: 6b0d7450
translated_on: '2026-04-21'
needs_review: true
---
# Polis

**Polis** ialah pasukan polis Sumaya. Jika anda memilih POLIS dari menu utama, anda ialah seorang pegawai penguatkuasa undang-undang yang bertugas sebaik sahaja anda spawn. Tugas anda adalah untuk menangkap penjenayah, mengendalikan perangkap had laju, menjawab panggilan 999, dan menjaga keamanan.

## Bermula

Pilih **POLIS** pada menu utama. Kit permulaan anda ialah 5 alat:

| Alat | Fungsinya |
|------|--------------|
| **Taser X26P** | Senjata lumpuh bukan maut dengan kartrij terhad. Tembak suspek untuk melumpuhkan mereka bagi tangkapan. |
| **Radar Gun** | Alat tangkap kelajuan manual. Lihat [Perangkap had laju dan radar](#speed-traps-and-radar). |
| **Whistle** | Isyarat kawalan orang ramai / lalu lintas. |
| **Handcuffs** | Alat tangkapan sebenar - gunakan pada suspek dikehendaki apabila anda cukup dekat. |
| **Plate Finder** | Cari plat nombor mana-mana kenderaan untuk melihat pemilik berdaftar dan sama ada ia dibenderakan sebagai curian. |

Beberapa kelengkapan pakaian dan kit akan terbuka apabila anda menaikkan taraf sektor POLIS (Duty Belt + Beret pada tahap 1, Reflective Vest pada tahap 10, Reflective Coat pada tahap 20). Lihat [Progression](/sumaya/progression) untuk jadual penuh item kerjaya merentas ketiga-tiga perkhidmatan kecemasan.

## Item lalu lintas/tempat kejadian jenayah yang boleh diletak (dikhaskan / tidak diedarkan)

Permainan ini mempunyai **5 alat boleh diletak** yang ditakrifkan (`Polis Cone`, `Polis Sign`, `Polis Umbrella`, `SCone`, `PBSign`) — setiap satu dengan pengendali peletakan berfungsi dan pembilang `PlaceableItemsLeft`. Walau bagaimanapun, **ia tidak diberikan kepada pemain POLIS pada masa ini** oleh mana-mana loadout pasukan, NPC, kedai, atau unlock. Model dan skrip wujud tetapi laluan pengedaran tidak disambungkan dalam build langsung, jadi anda tidak akan menemuinya dalam inventori anda semasa permainan biasa. Anggap sebagai dikhaskan untuk kemas kini masa hadapan.

Menuju ke balai polis untuk kenderaan, atau meronda di jalanan dan perhatikan suspek dikehendaki pada aplikasi MDT (Mobile Data Terminal) anda.

## Sistem dikehendaki

Orang awam akan mengumpul **mata kesalahan** setiap kali mereka melakukan jenayah. Jumlah mata kesalahan menentukan **tahap bintang dikehendaki** mereka:

| Mata | Bintang dikehendaki |
|--------|--------------|
| 10-24 | 1 bintang |
| 25-49 | 2 bintang |
| 50-79 | 3 bintang |
| 80-119 | 4 bintang |
| 120+ | 5 bintang |

Suspek dengan bintang yang lebih tinggi lebih sukar untuk ditangkap tetapi membayar lebih apabila anda berjaya.

### Apakah yang memberikan mata kesalahan?

| Jenayah | Mata |
|-------|--------|
| Perlanggaran kenderaan (melanggar seseorang) | 5 |
| Memandu laju | 10 |
| Meragut | 20 |
| Rompakan kereta | 25 |
| Pemerdagangan haiwan | 50 |

Lihat [Crime and Law](/sumaya/crime-and-law) untuk pecahan penuh.

### Melihat pemain dikehendaki

Buka aplikasi **MDT** pada telefon anda. Tab **Wanted** memaparkan semua pemain yang sedang dikehendaki dengan:

- Nama dan headshot
- Tahap bintang
- Bilangan kesalahan
- Masa berlalu sejak kesalahan pertama mereka

Anda boleh menetapkan waypoint minimap pada suspek dari sini untuk menavigasi ke arah mereka.

### Susutan dikehendaki

Jika seorang suspek mengelak daripada melakukan apa-apa jenayah lagi selama **5 minit**, status dikehendaki mereka dibersihkan sepenuhnya. Anda mempunyai tempoh untuk menangkap mereka.

## Membuat tangkapan

Aliran asas:

1. Cari suspek dikehendaki (MDT membantu).
2. Dekati mereka. Jika mereka dalam mod pasif atau memandu laju, mereka mungkin tidak sedar anda di situ.
3. Gunakan alat **handcuffs** anda dalam julat interaksi.
4. Jika berjaya, mereka ditangkap - dihantar ke penjara untuk tempoh berdasarkan bintang.

### Fasa tahanan

Sebelum tangkapan akhir, suspek memasuki keadaan **ditahan**. Setelah ditahan:
- Mereka mengikut anda pada **offset 4 stud**, dihadkan kepada maksimum **20 stud** (mereka tidak boleh merayau jauh).
- **Tempoh tamat tahanan 60 saat** bermula — jika anda tidak melengkapkan tangkapan dalam masa 60 s, tahanan dilepaskan secara automatik.
- Semasa ditahan, mereka masih boleh cuba **menyerah diri** pada prompt untuk mengurangkan tempoh penjara mereka separuh.

Tahanan berguna apabila anda ingin membawa suspek ke lokasi tertentu (balai polis, prompt menyerah diri) sebelum memproses mereka.

### Ganjaran tangkapan

Ganjaran berskala mengikut tahap bintang suspek pada masa tangkapan:

| Bintang | XP | Ringgit (dompet) |
|-------|-----|------------------|
| 1 | 50 | 150 |
| 2 | 100 | 300 |
| 3 | 175 | 500 |
| 4 | 275 | 800 |
| 5 | 400 | 1,200 |

### Bonus pegawai berdekatan

Jika pemain POLIS lain berada dalam lingkungan **50 stud** semasa anda membuat tangkapan, mereka mendapat **50% daripada XP dan Ringgit anda** secara automatik - tiada tindakan diperlukan. Rondaan berpasangan amat bagus untuk pendapatan dua kali ganda.

### Bonus pencapaian

Setiap **5 tangkapan** yang anda buat, anda mendapat bonus **+200 Ringgit** sebagai tambahan kepada ganjaran tangkapan.

## Penjara

Apabila anda menangkap seseorang, mereka dihantar ke penjara. Tempoh penjara bergantung pada bintang dikehendaki mereka pada masa tangkapan:

| Bintang | Tempoh penjara |
|-------|-----------|
| 1 | 30 saat |
| 2 | 1 minit |
| 3 | 2 minit |
| 4 | 3 minit |
| 5 | 5 minit |

Semasa dalam penjara:

- Pemain tidak boleh bertukar pasukan.
- HUD penjara menunjukkan masa yang berbaki.
- Apabila pemasa tamat, mereka dibebaskan.

### Menyerah diri

Penjenayah boleh memilih untuk **menyerah diri** pada prompt yang ditetapkan sebelum ditangkap. Menyerah diri mengurangkan tempoh penjara separuh, dan membebaskan mereka dengan lebih bersih:

| Bintang | Tempoh penjara menyerah diri | Kunci pasif selepas dibebaskan |
|-------|---------------------|----------------------------|
| 1 | 15 s | 60 s |
| 2 | 30 s | 2 min |
| 3 | 1 min | 4 min |
| 4 | 90 s | 6 min |
| 5 | 150 s | 10 min |

Kunci pasif bermaksud mereka tidak boleh mengaktifkan semula mod pasif serta-merta selepas dibebaskan - anda masih boleh menangkap mereka jika mereka cuba memulakan rentetan jenayah semula.

### Keluar untuk elak tangkapan (LTAA)

Jika pemain dikehendaki log keluar semasa melakukan kesalahan, mereka dikenakan tempoh penjara yang **lebih teruk** apabila kembali:

| Bintang | Tempoh penjara LTAA |
|-------|----------------|
| 1 | 45 s |
| 2 | 90 s |
| 3 | 150 s |
| 4 | 4 min |
| 5 | 6 min |

Jadi tidak, keluar tidak menyelamatkan anda.

## Perangkap had laju dan radar

Sumaya mempunyai **dua sistem memandu laju yang berasingan** — zon automatik dan radar gun manual anda.

### Zon perangkap had laju (auto)

Terdapat **2 zon perangkap had laju** di dunia, setiap satu dengan had yang dipaparkan sebanyak **50 stud/s**. Jika mana-mana kenderaan (pemain atau NPC) memandu melalui zon melebihi had, permainan akan menyaman pemandu secara automatik: +10 mata kesalahan, tiada tindakan pegawai diperlukan. Anda akan melihat pemberitahuan sepanduk pada HUD anda apabila saman berlaku berhampiran anda.

Zon dikitar semula bagi setiap pemandu dengan cooldown 30 saat, jadi seseorang yang memandu laju melaluinya berulang kali akan mengumpul saman dengan pantas.

Kenderaan kecemasan dengan **siren aktif** dikecualikan — anda tidak akan menyaman diri sendiri semasa menjawab panggilan.

### Radar gun (manual, untuk pemandu laju yang teruk)

Radar gun anda adalah alat untuk menangkap pemandu laju **serius** di luar zon. Halakan pada kenderaan yang bergerak dan tembak:

- Sasaran mestilah bergerak pada **200 stud/s atau lebih pantas** untuk alat mendaftarkan kena. Lebih perlahan daripada itu, alat akan melaporkan "Not speeding" dan tidak melakukan apa-apa.
- Setiap plat nombor yang ditangkap mendapat **cooldown 120 saat** - anda tidak boleh menangkap semula plat yang sama dalam tempoh dua minit.
- Anda mestilah **bertugas** (pasukan POLIS aktif) untuk alat berfungsi.

**Ganjaran setiap tangkapan:** 30 XP + 50 Ringgit + 10 mata kesalahan pada pemandu.

Oleh kerana zon hanya mencetuskan di bawah 50 stud/s dan radar memerlukan 200+, terdapat jurang yang luas di mana hanya pegawai yang bergerak boleh menangkap pemandu laju. Itulah niche radar.

## Kenderaan

Kenderaan Polis terbuka berdasarkan gabungan **tahap pemain** dan **tahap sektor**.

| Kenderaan | Tahap pemain | Tahap sektor | Harga |
|---------|--------------|--------------|-------|
| Protan Wira MPV Polis | 1 | 1 | Percuma |
| Protan Waja MPV Polis | 15 | - | 6,500 Ringgit |
| Handai City MPV Polis | 1 | 35 | 12,000 Ringgit |
| Handai Civic MPV Polis | 1 | 55 | 15,000 Ringgit |

Wira ialah kereta ronda pemula anda. Civic ialah peringkat tertinggi - pantas, berat, lengkap.

Kenderaan Polis mempunyai **siren ELS**. Dengan siren aktif, anda dikecualikan daripada kesalahan lalu lintas (memandu laju, perlanggaran) semasa anda menjawab panggilan.

Lihat [Vehicles](/sumaya/vehicles) untuk butiran.

## Pangkat

Polis mempunyai **16 pangkat**, yang paling banyak antara mana-mana perkhidmatan kecemasan. Gelaran adalah berdasarkan pangkat MYSverse Police sebenar (POLIS).

| Tahap | Pangkat |
|-------|------|
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

Dari tahap 89 ke atas, anda berada di puncak. Tiada perubahan pangkat semasa anda menolak ke had tahap 100.

## Pengecualian semasa menjawab panggilan

Jika anda mempunyai **siren aktif** kenderaan Polis anda, anda tidak boleh disaman kerana memandu laju atau perlanggaran semasa anda memandu. Sistem mengiktiraf anda sedang menjawab panggilan. Matikan siren apabila anda berhenti - jika tidak, pemain lain mungkin menyangka anda masih menjawab panggilan.

## Petua

- **Gunakan MDT.** Jangan hanya meronda secara membuta tuli. MDT menunjukkan setiap suspek dikehendaki dan membolehkan anda meletakkan waypoint secara terus kepada mereka.
- **Berpasangan.** Dua POLIS dalam lingkungan 50 stud bermakna pegawai yang tidak menangkap mendapat 50% daripada ganjaran secara percuma. Bagus untuk grind berasaskan rakan.
- **Jangan terlepas bonus pencapaian.** Setiap 5 tangkapan = +200 Ringgit. Rancang syif anda untuk mencapai 5, 10, 15.
- **Tangkapan 5 bintang sangat besar.** Satu tangkapan 5 bintang = 400 XP + 1200 Ringgit. Ia lebih sukar dibuat tetapi berbaloi untuk menunggu.
- **Siren = tiada saman.** Hidupkan ia apabila anda memandu ke panggilan - jika tidak, memandu laju anda sendiri boleh mendapat saman, memalukan.
- **Jangan menjadi dikehendaki sendiri.** Melakukan jenayah sebagai POLIS sepatutnya menurunkan anda secara automatik daripada pasukan, tetapi pendengar itu tidak disambungkan dalam build semasa - anda kekal pada POLIS. Jangan bergantung pada permainan untuk menukar anda kembali kepada orang awam; tinggalkan pasukan dahulu jika anda ingin bermain sebagai penjenayah. (Secara praktikalnya: POLIS tidak dibenarkan dalam mod pasif, jadi melakukan jenayah semasa bertugas amat berisiko.)
- **Bantu Bomba untuk XP murah.** POLIS yang berdiri berhampiran api yang aktif (dalam lingkungan 512 stud) mendapat **10 XP setiap blok api** yang dipadamkan, tanpa perlu melakukan apa-apa. Berbaloi untuk berlegar.

## Apa seterusnya?

- [Crime and Law](/sumaya/crime-and-law) untuk apa yang anda hadapi.
- [Bomba](/sumaya/bomba) dan [Kesihatan](/sumaya/kesihatan) untuk perkhidmatan lain.
- [Vehicles](/sumaya/vehicles) untuk katalog kenderaan Polis.
- [Progression](/sumaya/progression) untuk cara XP dan pangkat berfungsi.
