---
title: Bomba
description: >-
  Bermain sebagai BOMBA di Sumaya — jentera bomba, hidran, dan insiden
  kebakaran.
lang: ms
translated_from_hash: 7eb0c900
translated_on: '2026-04-30'
needs_review: true
---


# Bomba

**Bomba** ialah pasukan bomba Malaysia. Jika anda memilih BOMBA dari menu utama, anda bertugas sebagai pegawai bomba.

## Mula bermain

Pilih **BOMBA** pada menu utama. Anda muncul dengan **Fire Extinguisher** di dalam beg galas anda dan BombaGui pada skrin — tiada daftar masuk diperlukan. **Hose** sendiri bukan alat permulaan: anda mengambilnya dari salur hose pada jentera bomba atau hydrant apabila anda tiba di lokasi insiden.

Pergi ke balai bomba untuk mendapatkan kenderaan, atau tunggu amaran kebakaran muncul pada minimap anda.

## Cara kebakaran berfungsi

Kebakaran muncul di Sumaya kira-kira **setiap 6 minit** selagi sekurang-kurangnya seorang pemain BOMBA aktif di server. Apabila kebakaran bermula:

- Amaran besar muncul pada minimap dan kad tugasan anda.
- Kebakaran terdiri daripada banyak **blok api** individu (antara 3 hingga 6 setiap insiden), setiap satunya perlu dipadamkan.
- Pancaran panduan merah menunjukkan arah ke lokasi insiden.

Hanya satu kebakaran aktif pada satu masa di server. Apabila kebakaran dipadamkan (atau tamat masa), satu lagi boleh muncul.

### Kepelbagaian insiden

Sumaya pada masa ini berputar antara **sembilan templat kebakaran**, setiap satu pra-bina dengan lokasi dan susun atur bloknya sendiri:

- **3 Kemalangan Kereta** — Luar Balai Polis, Luar Hazbank, Dekat MFC.
- **6 Kebakaran Bangunan** — Jalan Padas Dua (dua varian), Kedai Emas Tai Loi, Perbankan Elektronik, Klinik KKN Lama, Radtrol Jalan Kepala Ikan.

Server memilih satu secara rawak setiap insiden. Kad pada HUD tugasan anda memaparkan **IncidentType** ("Car Crash" atau "Building Fire") dan nama **Location** supaya anda tahu apa yang anda menuju sebelum tiba. Aplikasi MDT mengambil data yang sama secara automatik — dispatcher melihat rentetan lokasi yang dapat dibaca, bukan hanya koordinat.

## Memadamkan kebakaran

### Hose

1. Lengkapkan hose anda.
2. Cari sumber air - sama ada **hydrant** (beberapa diletakkan di sekitar bandar — cari model tiang merah/kuning) atau **tanker truck**.
3. Sambungkan hujung hose ke prompt sumber air.
4. Sasarkan blok api dan semburkan.

Setiap blok api memerlukan kira-kira **10 pukulan** daripada hose sebelum padam sepenuhnya. Hose mencapai sehingga **256 studs** - cukup untuk kebanyakan insiden, dan membolehkan anda berdiri pada jarak yang selamat.

### Hydrant

Hydrant ditetapkan di sekitar peta di dalam `Workspace.HydrantConnections`. Peta semasa mempunyai segelintir model hydrant — tidak cukup untuk meliputi seluruh bandar, jadi rancang laluan di sekitarnya. Setiap hydrant menyokong dua salur hose, jadi dua pegawai bomba boleh berkongsi satu.

### Tanker (tahap sektor 65)

Setelah anda mencapai tahap sektor 65, anda boleh memunculkan trak **Sanica P360 Tanker**. Tanker membolehkan anda memerangi kebakaran di mana-mana yang bersambung ke jalan, walaupun tanpa hydrant berdekatan - sangat berguna untuk insiden luar bandar.

## Ganjaran

Setiap blok api yang anda padamkan membayar:

- **5 XP** (kedua-dua pemain dan sektor)
- **15 Ringgit** (dompet)

Tambah bonus pencapaian:

- Bonus **+150 Ringgit** setiap **15 blok** yang anda padamkan.

**Pemain Kesihatan** yang berdiri berdekatan dengan kebakaran aktif (dalam 512 studs) mendapat **10 XP tahap pemain bagi setiap blok yang dipadamkan** tetapi tiada ganjaran Ringgit dan tiada XP sektor Kesihatan - hanya XP pemain. Polis tidak mendapat manfaat daripada ini kerana penapis hanya sepadan dengan `JobType == "EMS"` (Polis adalah `JobType = "Law"`). Jadi terdapat insentif terbina dalam untuk paramedik mengikuti kebakaran.

Ganjaran hanya dikira apabila anda berada dalam **512 studs** dari blok api semasa ia dipadamkan - jadi kekal dengan insiden, jangan mengembara jauh.

## Kenderaan

Kenderaan Bomba dibuka apabila tahap sektor anda meningkat.

| Kenderaan | Tahap sektor diperlukan | Harga |
|---------|----------------------|-------|
| Merze Atego LFRT | 1 | Percuma |
| Sanica 94D LFRT | 20 | 9,000 Ringgit |
| Tayoti Hiace (Bomba) | 40 | 12,000 Ringgit |
| Sanica P310 FRT | 40 | 13,000 Ringgit |
| Sanica P360 Tanker | 65 | 20,000 Ringgit |

Setiap trak mempunyai kapasiti dan pengendalian yang berbeza. Atego ialah pemula yang lincah; Tanker ialah utiliti berat. LFRT bermaksud "Light Fire Rescue Tender", FRT bermaksud "Fire Rescue Tender".

Lihat [Vehicles](/sumaya/vehicles) untuk cara memunculkannya.

## Pangkat

Bomba mempunyai 13 pangkat, berdasarkan Jabatan Bomba dan Penyelamat sebenar MYSverse (Bomba MYSverse). Tajuk anda dikemas kini secara automatik apabila tahap sektor anda meningkat.

| Tahap | Pangkat |
|-------|------|
| 1 | Pegawai Bomba (PB) |
| 6 | Pegawai Bomba Kanan (PBK) |
| 11 | Pegawai Bomba Tinggi (PBT) |
| 16 | Penolong Penguasa Bomba (PPgB) |
| 21 | Penolong Kanan Penguasa Bomba (PKPgB) |
| 26 | Timbalan Penguasa Bomba (TPgB) |
| 31 | Penolong Penguasa Bomba (Tahap Balai) |
| 36 | Penguasa Bomba (PgB) |
| 41 | Penguasa Bomba Kanan (PgKB) |
| 49 | Penolong Pesuruhjaya Bomba (PPjB) |
| 57 | Penolong Kanan Pesuruhjaya Bomba (PKPjB) |
| 65 | Timbalan Pesuruhjaya Bomba (TPjB) |
| 76 | Pesuruhjaya Bomba (PjB) |

Singkatan kurungan pangkat mengikut skim lencana Bomba dunia sebenar. Dari tahap 76 ke atas anda berada di puncak - tiada lagi perubahan pangkat walaupun anda menuju ke had tahap 100.

## Tip

- **Bekerja sebagai satu pasukan.** Dua pegawai bomba pada satu kebakaran bermakna blok dibersihkan lebih cepat, bermakna bonus pencapaian datang lebih cepat, bermakna lebih banyak Ringgit setiap minit.
- **Kedudukan penting.** Cari tempat di mana beberapa blok berada dalam julat hose dan jangan terus bertukar. Tetap, bukan tergesa-gesa.
- **Kekal dalam 512 studs.** Jika anda mengembara jauh dari kebakaran untuk mengisi semula atau memandu, anda berhenti dikira untuk ganjaran pada blok yang dipadamkan semasa anda berada di luar julat.
- **Siren = dikecualikan kesalahan.** Tersangkut dengan saman laju? Pasangkan siren ELS anda semasa memandu kenderaan Bomba untuk mengelak disaman.
- **Simpan untuk Tanker.** Sehingga anda mencapai tahap 65, anda akan bergantung kepada hydrant. Tanker adalah pengubah permainan kerana anda membawa air bersama anda.
- **Perhatikan kesihatan anda.** Berdiri terlalu dekat dengan api mencederakan anda dari masa ke masa. Jika anda melihat kesihatan anda menurun, undur dan semburkan dari jauh.

## Apa seterusnya?

- [Kesihatan](/sumaya/kesihatan) jika anda ingin tahu tentang aspek perubatan.
- [Polis](/sumaya/polis) untuk penguatkuasaan undang-undang.
- [Vehicles](/sumaya/vehicles) untuk senarai penuh kenderaan Bomba.
- [Progression](/sumaya/progression) untuk cara XP berfungsi merentas perkhidmatan.
