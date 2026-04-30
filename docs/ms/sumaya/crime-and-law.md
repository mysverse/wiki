---
title: Jenayah & Undang-Undang
description: 'Rompakan kereta, mencopet, bintang dicari, dan penjara di Sumaya.'
lang: ms
translated_from_hash: b576d4fe
translated_on: '2026-04-30'
needs_review: true
---


# Jenayah & Undang-Undang

Sumaya membenarkan anda bermain di pihak penjenayah jika anda mahu. Halaman ini meliputi tiga jenayah utama yang tersedia untuk pemain, cara sistem offence points dan wanted star berfungsi, dan apa yang berlaku jika anda ditangkap.

**Perhatian:** Permainan ini diatur untuk auto-demote pemain perkhidmatan kecemasan (POLIS, BOMBA, Kesihatan) apabila mereka melakukan jenayah, tetapi listener untuk peristiwa demotion itu kini tidak disambungkan dalam build live. Pada praktiknya, seorang polis atau ahli bomba yang melakukan carjacking terhadap seseorang masih kekal dalam pasukannya - auto-demote sebenarnya tidak menyingkirkan anda. Walaupun begitu, pegawai yang sedang bertugas dan memegang alat jenayah akan secara automatik keluar dari passive mode, dan pasukan Polis tetap tidak boleh menggunakan passive langsung, jadi melakukan jenayah semasa bertugas adalah tidak praktikal dan tidak sesuai untuk roleplay. Tukar ke Visitors atau Malaysians dahulu jika anda ingin menjadi penjenayah.

## Sistem offence

Setiap jenayah yang anda lakukan menambah **offence points**. Lebih banyak mata, lebih banyak **wanted stars** yang anda dapat, yang mempengaruhi cara polis bertindak balas terhadap anda dan berapa lama anda akan duduk di penjara jika ditangkap.

### Ambang wanted star

| Offence points | Wanted stars |
|----------------|--------------|
| 0-9 | Tiada |
| 10-24 | 1 star |
| 25-49 | 2 stars |
| 50-79 | 3 stars |
| 80-119 | 4 stars |
| 120+ | 5 stars |

### Pereputan wanted

Jika anda berjaya bersembunyi (tiada offence baharu) selama **5 minit berturut-turut**, status wanted anda akan reset sepenuhnya. Pemasa pereputan yang singkat bermaksud melakukan satu jenayah besar dan bersembunyi sudah memadai untuk mengelak dikejar.

## Jenayah yang boleh anda lakukan

### Carjacking

Curi kenderaan orang lain yang diparkir.

**Apa yang anda perlu:**
- Alat **Slim Jim** (percuma daripada NPC **Abang Samseng (Carjack)** - cari dia di peta dan tahan proximity prompt). Slim Jim **dihabiskan** apabila digunakan, jadi anda perlu kembali untuk satu lagi bagi setiap carjack.
- Anda tidak boleh berada dalam pasukan penguatkuasaan undang-undang.
- Anda tidak boleh berada dalam passive mode, ditangkap, atau dalam tahanan.

**Cara ia berfungsi:**
1. Hampiri kenderaan yang diparkir tanpa penumpang dengan Slim Jim dilengkapkan.
2. Tahan F (atau setara mudah alih) selama **3 saat** dalam jarak 15 studs dari tempat duduk pemandu.
3. Kenderaan itu kini dicuri - milik anda untuk dipandu.
4. Satu **drop-off zone** akan diberikan kepada anda secara rawak (ditunjukkan pada minimap).
5. Pandu kenderaan yang dicuri ke drop-off zone untuk menjualnya.

**Ganjaran:** **500 hingga 1,200 Ringgit** (rawak, dibayar ke akaun bank anda).

**Had:**
- Kenderaan yang dicuri akan auto-despawn selepas **5 minutes**. Anda akan menerima amaran pada baki 60 saat dan 10 saat.
- Anda hanya boleh memiliki **satu kenderaan curi pada satu masa**.
- Selepas melakukan carjacking sekali, anda berada dalam **5-minute personal cooldown** sebelum boleh carjack lagi.
- Slim Jim **dihabiskan** apabila digunakan - anda perlukan yang baharu untuk carjack berikutnya.
- Anda tidak boleh mencuri kenderaan anda sendiri (sistem mengetahui pemiliknya melalui plat nombor).

**Offence:** +25 points (akan mencecah 2 stars jika anda tiada apa-apa lain sebelum ini).

### Mencopet

Curi Ringgit terus dari dompet pemain lain.

**Apa yang anda perlu:**
- Alat **Pickpocket Knife** (percuma daripada NPC **Abang Samseng (Pickpocket)** - tahan proximity prompt untuk "Take Pickpocket Knife", ~1.5 saat).

**Cara ia berfungsi:**
1. Lengkapkan alat **Pickpocket Knife**.
2. Hampiri sasaran anda dalam jarak **8 studs**.
3. Tahan tindakan selama **2 saat** tanpa dikesan.
4. Sejumlah Ringgit secara rawak akan dipindahkan dari dompet mereka ke dompet anda.

**Ganjaran:** **80 hingga 300 Ringgit** (jumlah rawak, daripada dompet mangsa).

**Had:**
- Selepas anda mencopet seseorang, terdapat **30-second cooldown** sebelum anda boleh mencopet lagi.
- Mangsa ada **60-second cooldown** yang menjadikan mereka tidak boleh dicopet lagi.
- Terdapat tetingkap pemulihan **180-second** di mana mangsa mungkin boleh melaporkan / menuntut semula.

**Offence:** +20 points.

#### Mencopet NPC

Anda juga boleh mencopet **NPC awam** yang berjalan di sekitar peta:

- Sehingga 10 NPC berada di luar pada satu masa.
- Setiap satu membawa antara 50 dan 200 Ringgit.
- NPC respawn 2 minit selepas mereka dicopet.

Mencopet NPC juga mengenakan offence points, tetapi NPC tidak boleh mengejar atau melaporkan anda, jadi ia adalah cara berisiko lebih rendah untuk farm.

### Penyeludupan haiwan

Seludup hidupan liar haram merentasi Sumaya untuk bayaran tunai.

**Cara ia berfungsi:**
1. Cari **NPC penjenayah** yang berdiri di "criminal part" (berputar di sekitar peta setiap 5 minit - cari spawn yang ditonjolkan).
2. Terima kerja melalui prompt.
3. Alat haiwan haram akan diberikan kepada anda.
4. Anda diberitahu **destinasi** (drop-off part tertentu).
5. Bawa haiwan itu ke destinasi untuk dibayar.

**Haiwan yang tersedia:**

| Haiwan | Bayaran (ke bank) |
|--------|------------------|
| Illegal Turtle Egg | 400 Ringgit |
| Illegal Pangolin | 1,000 Ringgit |
| Illegal Hornbill | 2,000 Ringgit |

Haiwan yang anda terima adalah rawak.

**Had:**
- Cooldown 5 minit antara kerja.
- Anda perlu membawa haiwan itu ke destinasi - tidak boleh menjatuhkannya atau ditangkap di tengah jalan.

**Offence:** +50 points - itu 1 star dalam satu tindakan. Terus melakukannya dan anda akan meningkat dengan cepat.

### Offence lain

Beberapa tindakan lain menambah offence points walaupun ia bukan benar-benar "crime sprees":

| Offence | Points | Passive lock |
|---------|--------|--------------|
| Kemalangan kenderaan (melanggar pemain lain atau kereta yang diparkir) | 5 | 30 saat |
| Memandu laju di dalam zon perangkap kelajuan | 10 | 60 saat |

"Passive lock" bermaksud togol passive mode anda dilumpuhkan untuk satu tempoh selepas offence - jadi anda tidak boleh menjadi kebal serta-merta.

## Pengecualian

Anda **tidak boleh disaman** kerana memandu laju atau kemalangan jika:

- Anda berada dalam **kenderaan kecemasan** (Polis, Bomba, Kesihatan) dengan **siren aktif**. Begini cara responder yang bertugas mengelak penalti dalam perjalanan ke panggilan.
- Anda sedang berada dalam **passive mode** semasa berlaku kemalangan. Pemandu passive tidak terkumpul mata offence kemalangan. (Anda masih akan menerima kerosakan kecederaan jika sistem kecederaan dihidupkan, walaupun begitu — passive melindungi daripada PvP dan tiket offence, bukan fizik kemalangan.)

Selain itu, semua orang adalah sasaran adil.

## Ditangkap

Jika seorang pemain POLIS berjaya menggunakan gari ke atas anda semasa anda dicari, anda **ditangkap** dan dihantar ke penjara.

### Tempoh penjara

| Wanted stars semasa tangkapan | Masa penjara |
|------------------------|-----------|
| 1 | 30 saat |
| 2 | 1 minit |
| 3 | 2 minit |
| 4 | 3 minit |
| 5 | 5 minit |

### Semasa di penjara

- HUD penjara menunjukkan baki masa anda.
- Anda tidak boleh menukar pasukan.
- Apabila pemasa tamat, anda dibebaskan dan offence anda direset.

### Menyerah diri

Daripada lari dari polis, anda boleh menghampiri **surrender prompt** (biasanya berhampiran balai polis atau lokasi awam) dan menyerah diri. Ini memotong masa penjara anda kira-kira separuh:

| Stars | Masa penjara jika menyerah | Passive lock selepas dibebaskan |
|-------|---------------------------|----------------------------|
| 1 | 15 saat | 1 minit |
| 2 | 30 saat | 2 minit |
| 3 | 1 minit | 4 minit |
| 4 | 90 saat | 6 minit |
| 5 | 150 saat | 10 minit |

Passive lock bermaksud anda tidak boleh togol passive mode untuk tempoh tersebut selepas dibebaskan - jadi polis masih ada tetingkap untuk menangkap anda jika anda mula semula.

### Keluar di tengah-tengah offence

Jika anda log keluar semasa dicari, anda akan menjalani lebih **banyak** masa penjara pada sesi seterusnya:

| Stars | Masa penjara LTAA |
|-------|----------------|
| 1 | 45 saat |
| 2 | 90 saat |
| 3 | 150 saat |
| 4 | 4 minit |
| 5 | 6 minit |

(LTAA = "Leave To Avoid Arrest".) Berhenti tidak menyelamatkan anda.

### Pemasa pertempuran (tetingkap engagement)

Saat seorang pegawai POLIS **menase** anda atau **menahan** anda, anda memasuki **30-second combat window**. Semasa pemasa berdetik:

- Banner merah **"ENGAGED — CANNOT RESET"** muncul di bahagian atas skrin anda dengan saat berdetik.
- Butang **Reset** dikunci. Mengetuk Reset menunjukkan toast "Cannot Reset" dan tidak melakukan apa-apa.
- **Menu utama / pertukaran pasukan** dikunci, walaupun anda di bawah ambang wanted-star untuk kunci `Wanted` biasa.
- Setiap tase/tahanan baharu **menyegarkan** pemasa (tidak bertindan).

**Mati atau keluar semasa tetingkap ini** mengarahkan anda ke **combat-evasion jail** yang adalah *dua kali* tempoh LTAA biasa — sangat lebih teruk daripada menjalankan tangkapan yang bersih:

| Stars | Combat-evasion jail | (vs. LTAA biasa) |
|-------|---------------------|--------------------|
| 1 | 60 saat | 45 s |
| 2 | 2 minit | 90 s |
| 3 | 4 minit | 150 s |
| 4 | 6 minit | 4 min |
| 5 | 10 minit | 6 min |

Jika anda berada dalam tahanan semasa kematian/keluar, tambahan **+30 saat** akan ditambah. Pegawai yang terlibat (jika masih dalam talian apabila anda respawn / sertai semula) mendapat XP dan SR penuh berskala bintang seolah-olah mereka telah menangkap anda dengan bersih.

**Terjemahan:** jika seorang polis telah menase anda, langkah paling bersih adalah menyerah diri atau menerima tangkapan. Reset / Alt-F4 akan mengenakan anda lebih banyak masa, bukan kurang.

### Cooldown reset (di luar pertempuran)

Walaupun anda *tidak* berada dalam pertempuran, menekan butang Reset tidak lagi membunuh anda serta-merta. Modal cooldown 12 saat muncul dengan butang Cancel, kemudian watak anda dimuat semula dengan bersih (tiada animasi kematian, tiada alat yang dijatuhkan, tiada skrin respawn). Berguna untuk pemulihan watak yang tersangkut tanpa kehilangan barang yang dipegang. Cooldown akan auto-batal jika anda kena tase, ditangkap, atau keluar dari permainan di tengah pengiraan.

## Petua

- **Rancang laluan anda.** Sebelum anda carjack, semak di mana drop-off zone berada - jika ia di seberang bandar dan anda tidak boleh sampai di sana dalam 5 minit, anda telah hilang kereta.
- **Jangan lakukan jenayah dalam passive mode.** Anda tidak boleh carjack, mencopet, atau menyeludup semasa dalam passive mode - sistem menghalangnya.
- **Perhatikan offence points lawan stars.** Pada 25 mata anda menjadi sasaran 2-star; ganjaran polis untuk menangkap anda baru sahaja berganda. Masa untuk bersembunyi dan biarkan pereputan berlaku.
- **Mencopet NPC untuk grinding selamat.** Risiko lebih rendah daripada mencopet pemain, ganjaran serupa. Bagus untuk grinding pencapaian penjejakan offence jika ada.
- **Penyeludupan haiwan adalah 50 points setiap larian.** Satu larian = minimum 1 star. Dua larian tanpa pereputan = 3 stars. Jangan tamak.
- **Menyerah diri sebelum 5 stars.** Jika anda sudah membank tunai Hornbill, menyerah diri mengekalkan offence anda bersih dan meminimumkan downtime.

## Apa seterusnya?

- [Polis](/sumaya/polis) untuk melihat sisi yang lain.
- [Telefon dan UI](/sumaya/phone) untuk togol Passive Mode dan aplikasi MDT.
- [Kenderaan](/sumaya/vehicles) untuk apa yang anda boleh curi (mana-mana kereta yang diparkir yang bukan milik anda).
