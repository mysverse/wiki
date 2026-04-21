---
title: Polis
description: 'Bermain sebagai POLIS di Sumaya — rondaan, tangkapan, pangkat, dan peralatan.'
lang: ms
translated_from_hash: 3c014862
translated_on: '2026-04-21'
needs_review: true
---
# Polis

**Polis** ialah pasukan polis Sumaya. Jika anda memilih POLIS dari menu utama, anda menjadi pegawai penguatkuasa undang-undang yang sedang bertugas sebaik sahaja anda spawn. Tugas anda adalah menangkap penjenayah, menjalankan perangkap laju, menjawab panggilan 999, dan mengekalkan keamanan.

## Mula bermain

Pilih **POLIS** pada menu utama. Kit permulaan anda ialah 5 alat:

| Alat | Fungsinya |
|------|-----------|
| **Taser X26P** | Senjata penumpasan tidak maut dengan kartrij yang terhad. Tembak suspek untuk melumpuhkan mereka demi tangkapan. |
| **Radar Gun** | Alat tangkapan laju manual. Lihat [Perangkap laju dan radar](#speed-traps-and-radar). |
| **Whistle** | Isyarat kepada orang ramai / lalu lintas. |
| **Handcuffs** | Alat tangkapan sebenar - gunakan pada suspek dikehendaki apabila anda cukup dekat. |
| **Plate Finder** | Semak plat lesen mana-mana kenderaan untuk melihat pemilik berdaftar dan sama ada ia ditandakan sebagai curi. |

Beberapa potongan pakaian dan kit dibuka apabila anda menaikkan tahap sektor POLIS (Duty Belt + Beret pada tahap 1, Reflective Vest pada tahap 10, Reflective Coat pada tahap 20). Lihat [Progression](/sumaya/progression) untuk jadual item kerjaya penuh merentasi ketiga-tiga perkhidmatan kecemasan.

## Item tempat kejadian lalu lintas/jenayah yang boleh diletakkan (disimpan / tidak diagihkan)

Permainan ini mempunyai **5 alat boleh letak** yang ditakrifkan (`Polis Cone`, `Polis Sign`, `Polis Umbrella`, `SCone`, `PBSign`) — setiap satu dengan pengendali penempatan yang berfungsi dan kaunter `PlaceableItemsLeft`. Namun, **ia pada masa ini tidak diberikan kepada pemain POLIS** oleh mana-mana loadout pasukan, NPC, kedai, atau unlock. Model dan skrip wujud tetapi laluan pengagihan tidak disambungkan dalam build langsung, jadi anda tidak akan menemuinya dalam inventori anda semasa permainan biasa. Anggap ia disimpan untuk kemas kini masa depan.

Menuju ke balai polis untuk kenderaan, atau ronda jalanan dan perhatikan suspek dikehendaki pada app MDT (Mobile Data Terminal) anda.

## Sistem dikehendaki

Orang awam mengumpul **mata kesalahan** setiap kali mereka melakukan jenayah. Jumlah mata kesalahan menentukan **tahap bintang dikehendaki** mereka:

| Mata | Bintang dikehendaki |
|------|---------------------|
| 10-24 | 1 bintang |
| 25-49 | 2 bintang |
| 50-79 | 3 bintang |
| 80-119 | 4 bintang |
| 120+ | 5 bintang |

Suspek bintang lebih tinggi lebih sukar ditangkap tetapi memberi ganjaran lebih banyak apabila anda berjaya.

### Apa yang memberi mata kesalahan?

| Jenayah | Mata |
|---------|------|
| Kemalangan kenderaan (melanggar seseorang) | 5 |
| Memandu laju | 10 |
| Mencuri saku | 20 |
| Merompak kereta | 25 |
| Pemerdagangan haiwan | 50 |

Lihat [Crime and Law](/sumaya/crime-and-law) untuk pecahan penuh.

### Melihat pemain dikehendaki

Buka app **MDT** pada telefon anda. Tab **Wanted** memaparkan semua pemain yang sedang dikehendaki dengan:

- Nama dan gambar kepala
- Tahap bintang
- Jumlah kesalahan
- Masa berlalu sejak kesalahan pertama mereka

Anda boleh menetapkan waypoint minimap pada suspek dari sini untuk navigasi kepada mereka.

### Pelunturan status dikehendaki

Jika suspek mengelakkan diri daripada melakukan sebarang jenayah lagi selama **5 minit**, status dikehendaki mereka hilang sepenuhnya. Anda mempunyai tempoh untuk menangkap mereka.

## Membuat tangkapan

Aliran asas:

1. Kesan suspek dikehendaki (MDT membantu).
2. Dekati mereka. Jika mereka dalam mod pasif atau memandu laju, mereka mungkin tidak menyedari kehadiran anda.
3. Gunakan alat **handcuffs** anda dalam jarak interaksi.
4. Jika berjaya, mereka ditangkap - dihantar ke penjara untuk tempoh berdasarkan bintang.

### Fasa penahanan

Sebelum tangkapan akhir, suspek memasuki keadaan **detained**. Setelah ditahan:
- Mereka mengikut anda pada **offset 4-stud**, terhad dalam maksimum **20 studs** (mereka tidak boleh mengembara jauh).
- **Tempoh tamat penahanan 60 saat** bermula — jika anda tidak melengkapkan tangkapan dalam 60 s, penahanan dilepaskan secara automatik.
- Semasa ditahan, mereka masih boleh cuba **menyerah diri** pada prompt untuk memotong masa penjara mereka sendiri separuh.

Penahanan berguna apabila anda mahu membawa suspek berjalan ke lokasi tertentu (balai polis, prompt serah diri) sebelum memproses mereka.

### Ganjaran tangkapan

Ganjaran berskala mengikut tahap bintang suspek semasa tangkapan:

| Bintang | XP | Ringgit (dompet) |
|---------|-----|------------------|
| 1 | 50 | 150 |
| 2 | 100 | 300 |
| 3 | 175 | 500 |
| 4 | 275 | 800 |
| 5 | 400 | 1,200 |

### Bonus pegawai berdekatan

Jika pemain POLIS lain berada dalam **50 studs** apabila anda membuat tangkapan, mereka mendapat **50% daripada XP dan Ringgit anda** secara automatik - tiada tindakan diperlukan. Rondaan berpasangan bagus untuk pendapatan berganda.

### Bonus batu tanda

Setiap **5 tangkapan** yang anda buat, anda dapat bonus **+200 Ringgit** di atas ganjaran tangkapan.

## Penjara

Apabila anda menangkap seseorang, mereka dihantar ke penjara. Tempoh penjara bergantung pada bintang dikehendaki mereka semasa tangkapan:

| Bintang | Masa penjara |
|---------|--------------|
| 1 | 30 saat |
| 2 | 1 minit |
| 3 | 2 minit |
| 4 | 3 minit |
| 5 | 5 minit |

Semasa dipenjara:

- Pemain tidak boleh bertukar pasukan.
- HUD penjara memaparkan masa tinggal.
- Apabila pemasa tamat, mereka dibebaskan.

### Serah diri

Penjenayah boleh memilih untuk **menyerah diri** pada prompt yang ditetapkan sebelum ditangkap. Serah diri memotong masa penjara separuh, dan melepaskan mereka lebih bersih:

| Bintang | Masa penjara serah diri | Kunci pasif selepas pembebasan |
|---------|-------------------------|--------------------------------|
| 1 | 15 saat | 60 saat |
| 2 | 30 saat | 2 minit |
| 3 | 1 minit | 4 minit |
| 4 | 90 saat | 6 minit |
| 5 | 150 saat | 10 minit |

Kunci pasif bermakna mereka tidak boleh mengaktifkan semula mod pasif serta-merta selepas pembebasan - anda masih boleh menangkap mereka jika mereka cuba memulakan rentetan jenayah semula.

### Meninggalkan untuk mengelakkan tangkapan (LTAA)

Jika pemain dikehendaki log keluar pertengahan kesalahan, mereka dikenakan masa penjara **lebih teruk** semasa kembali:

| Bintang | Masa penjara LTAA |
|---------|-------------------|
| 1 | 45 saat |
| 2 | 90 saat |
| 3 | 150 saat |
| 4 | 4 minit |
| 5 | 6 minit |

Jadi tidak, berhenti permainan tidak menyelamatkan anda.

## Perangkap laju dan radar

Sumaya mempunyai **dua sistem memandu laju berasingan** — zon automatik dan radar gun manual anda.

### Zon perangkap laju (auto)

Terdapat **2 zon perangkap laju** di dunia, setiap satu dengan had yang disiarkan **50 studs/s**. Jika mana-mana kenderaan (pemain atau NPC) memandu melalui zon melebihi had, permainan akan auto-saman pemandu: +10 mata kesalahan, tiada tindakan pegawai diperlukan. Anda akan melihat pemberitahuan banner pada HUD anda apabila saman berlaku berdekatan anda.

Zon dikitar semula per pemandu pada cooldown 30 saat, jadi seseorang yang memandu laju melaluinya berulang kali akan mengumpul saman dengan cepat.

Kenderaan kecemasan dengan **siren diaktifkan** dikecualikan — anda tidak akan menyaman diri sendiri semasa bertindak balas.

### Radar gun (manual, untuk pemandu laju besar)

Radar gun anda adalah alat untuk menangkap pemandu laju **serius** di luar zon. Hala ke kenderaan yang bergerak dan tembak:

- Sasaran mestilah bergerak **200 studs/s atau lebih laju** untuk alat mendaftarkan kena. Lebih perlahan daripada itu, gun melaporkan "Not speeding" dan tidak melakukan apa-apa.
- Setiap plat lesen yang ditangkap mendapat **cooldown 120 saat** - anda tidak boleh menangkap semula plat yang sama dalam tempoh dua minit.
- Anda mesti **bertugas** (pasukan POLIS aktif) untuk alat berfungsi.

**Ganjaran per tangkapan:** 30 XP + 50 Ringgit + 10 mata kesalahan pada pemandu.

Oleh kerana zon hanya melepaskan di bawah 50 studs/s dan radar memerlukan 200+, terdapat jurang luas yang mana hanya pegawai yang bergerak boleh menangkap pemandu laju. Itulah niche radar.

## Kenderaan

Kenderaan Polis dibuka berdasarkan gabungan **tahap pemain** dan **tahap sektor**.

| Kenderaan | Tahap pemain | Tahap sektor | Harga |
|-----------|--------------|--------------|-------|
| Protan Wira MPV Polis | 1 | 1 | Percuma |
| Protan Waja MPV Polis | 15 | - | 6,500 Ringgit |
| Handai City MPV Polis | 1 | 35 | 12,000 Ringgit |
| Handai Civic MPV Polis | 1 | 55 | 15,000 Ringgit |

Wira adalah kereta ronda permulaan anda. Civic adalah peringkat atas - laju, berat, kit penuh.

Kenderaan Polis mempunyai **siren ELS**. Dengan siren diaktifkan, anda dikecualikan daripada kesalahan lalu lintas (memandu laju, kemalangan) semasa anda bertindak balas.

Lihat [Vehicles](/sumaya/vehicles) untuk butiran.

## Pangkat

Polis mempunyai **16 pangkat**, paling banyak di antara mana-mana perkhidmatan kecemasan. Gelaran adalah berdasarkan pangkat sebenar Polis Diraja Malaysia (PDRM).

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

Dari tahap 89 ke atas anda berada di puncak. Tiada perubahan pangkat ketika anda meneruskan ke had tahap 100.

## Dikecualikan semasa bertindak balas

Jika anda mempunyai **siren diaktifkan** pada kenderaan Polis anda, anda tidak boleh disaman kerana memandu laju atau kemalangan semasa anda memandu. Sistem mengenali anda sedang menjawab panggilan. Matikan siren apabila anda meletak kereta - jika tidak pemain lain mungkin menganggap anda masih bertindak balas.

## Petua

- **Gunakan MDT.** Jangan hanya meronda secara buta. MDT memaparkan setiap suspek dikehendaki dan membolehkan anda menetapkan waypoint terus kepada mereka.
- **Berpasangan.** Dua POLIS dalam 50 studs bermakna pegawai yang tidak membuat tangkapan mendapat 50% daripada ganjaran secara percuma. Bagus untuk grind berasaskan rakan.
- **Jangan terlepas bonus batu tanda.** Setiap 5 tangkapan = +200 Ringgit. Rancang syif anda untuk mencapai 5, 10, 15.
- **Tangkapan 5 bintang sangat besar.** Satu tangkapan 5 bintang = 400 XP + 1200 Ringgit. Mereka lebih sukar dibuat tetapi berbaloi untuk menunggu.
- **Siren = tiada saman.** Hidupkan apabila anda memandu ke panggilan - jika tidak memandu laju anda sendiri boleh menyebabkan anda disaman, memalukan.
- **Jangan jadi dikehendaki sendiri.** Melakukan jenayah sebagai POLIS sepatutnya auto-turunkan anda dari pasukan, tetapi listener itu tidak disambungkan dalam build semasa - anda kekal pada POLIS. Jangan harapkan permainan menukar anda kembali kepada orang awam; tinggalkan pasukan dahulu jika anda mahu bermain sebagai penjenayah. (Secara praktikal: POLIS dilarang daripada mod pasif, jadi melakukan jenayah semasa bertugas adalah sangat berisiko.)
- **Bantu Bomba untuk XP murah.** POLIS yang berdiri berdekatan kebakaran aktif (dalam 512 studs) mendapat **10 XP per blok api** yang dipadamkan, tanpa perlu melakukan apa-apa. Berbaloi untuk melepak.

## Apa seterusnya?

- [Crime and Law](/sumaya/crime-and-law) untuk apa yang anda hadapi.
- [Bomba](/sumaya/bomba) dan [Kesihatan](/sumaya/kesihatan) untuk perkhidmatan lain.
- [Vehicles](/sumaya/vehicles) untuk katalog kenderaan Polis.
- [Progression](/sumaya/progression) untuk bagaimana XP dan pangkat berfungsi.
