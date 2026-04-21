---
title: Pengangkutan Awam di Bandaraya — Panduan
description: >-
  Pengangkutan awam di Bandaraya — MRT, LRT, monorel, bas, kad CAG, e-hailing,
  dan tol TapNGo.
lang: ms
translated_from_hash: 6f4b75c6
translated_on: '2026-04-21'
needs_review: true
---
# Pengangkutan Awam di Bandaraya — Panduan

Panduan pemain untuk bergerak di sekitar Kuala Lumpur: bas, MRT, Monorel, tol lebuh raya, dan **kad CAG** yang mengikat semuanya.

Semua harga adalah dalam **BR (Bandar Ringgit)**.

## Rujukan pantas

| Apa | Kos (tunai) | Dengan kad CAG | Dengan CAG + pas bulanan |
| --- | --- | --- | --- |
| Tambang bas (kadar rata) | 5 BR | 5 BR (dari kad) | **Percuma** |
| Fast travel MRT / Monorel | Harga penuh | **Diskaun 30 %** | **Diskaun 50 %** |
| Pintu tol TapNGo | 15 BR | **Diskaun 20 %** (12 BR) | Diskaun 20 % (12 BR) |
| Kad CAG (pembelian sekali sahaja) | 100 BR | — | — |
| Pas bulanan | 500 BR | — | Sah selama 30 hari |

**Ringkasnya:** Jika anda menggunakan pengangkutan awam lebih daripada beberapa kali, belilah kad CAG. Jika anda menggunakannya setiap hari, dapatkan pas bulanan.

---

## Rangkaian

### Laluan MRT Kajang
Tiga stesen; fast travel walk-in antara mereka.

- **Conlay**
- **Persiaran KLCC**
- **Ampang Park**

### Laluan KL Monorel
Tiga lagi stesen di laluan yang berasingan.

- **Bukit Bintang**
- **Raja Chulan**
- **Bukit Nanas**

### Bas
Dikendalikan oleh beberapa pengendali di sekitar bandar — **MyTransit**, **FirstGroup**, dan **Fermuda**. Cari tempat duduk penumpang pada model bas yang ditanda; tambang dikenakan secara automatik apabila anda duduk.

### Lebuh raya
Sesetengah laluan lebuh raya melalui **pintu tol TapNGo**. Kenderaan anda dikenakan 15 BR setiap pintu, atau 12 BR jika anda memiliki kad CAG.

---

## Fast travel (MRT & Monorel)

1. Hampiri mana-mana stesen MRT atau Monorel.
2. Panel fast travel akan terbuka menunjukkan stesen lain di laluan anda.
3. Pilih destinasi. Harga yang ditunjukkan bergantung pada sama ada anda memiliki kad CAG:
   - **Tiada kad:** harga BR penuh dicaj daripada dompet anda.
   - **Kad CAG:** diskaun 30 %, dicaj daripada baki kad anda.
   - **Kad CAG + pas bulanan aktif:** diskaun 50 %, tetap dari baki kad.
4. Skrin menjadi hitam; anda tiba di stesen destinasi.

Jika baki CAG anda terlalu rendah untuk menampung tambang berdiskaun, sistem akan kembali mencaj BR penuh daripada dompet anda — UI menunjukkan petunjuk mengingatkan anda untuk tambah nilai.

### Berapa kosnya

Tambang berskala dengan bilangan hop yang anda ambil (asas + setiap hop):

| Perjalanan | Tunai | Dengan CAG (diskaun 30%) | Dengan CAG + pas (diskaun 50%) |
| --- | --- | --- | --- |
| 1 hop (stesen jiran) | 150 BR | 105 BR | 75 BR |
| 2 hop (hujung laluan) | 200 BR | 140 BR | 100 BR |

Formula: `100 + 50 × hop`. Perjalanan pas bulanan penuh membayar balik selepas kira-kira 7 perjalanan.

---

## Bas

Bas beroperasi di seluruh bandar. Tiada tiket untuk dibeli atau butang untuk ditekan — hanya **naik dan duduk**.

- **Tambang:** 5 BR setiap kenaikan, kadar rata.
- **Dibayar melalui kad CAG** jika anda memilikinya; dipotong secara automatik apabila anda duduk di tempat duduk penumpang.
- **Tiada kad, atau kad kosong?** Tambang menjadi **hutang**. Anda masih boleh menaiki, tetapi tambah nilai seterusnya akan menjelaskan hutang sebelum menambah baki anda.
- **Pemegang pas bulanan:** perjalanan adalah **percuma** — penghitung "Saved with CAG" tetap menjejaki nilainya.
- **Pemandu bas tidak dicaj** — tempat duduk pemandu dikecualikan.
- **Had hutang:** 200 BR. Jika sampai, perjalanan seterusnya akan ditolak sehingga anda tambah nilai.

**Pengendalian keluar adalah fleksibel.** Sama ada anda berdiri seperti biasa, ditendang dari tempat duduk, mati, terputus sambungan, atau bas despawn di bawah anda, tambang dicaj tepat sekali bagi kenaikan tersebut.

---

## Pintu tol lebuh raya TapNGo

Apabila kenderaan anda mencapai pintu TapNGo:

1. Pintu memotong **15 BR** daripada dompet anda (atau **12 BR** jika anda memiliki kad CAG — diskaun 20 %, dibayar dari baki kad dengan sandaran ke tunai).
2. Pintu terbuka.
3. Pandu melalui.

Kenderaan yang sudah membayar pintu tertentu tidak akan dicaj dua kali semasa keluar.

---

# Kad CAG (Click And Go)

**Kad CAG** adalah kad transit nilai tersimpan Bandaraya — dimodelkan berdasarkan Touch n Go dunia sebenar Malaysia. Isikan sekali, ketuk secara automatik di bas, MRT, Monorel, dan pintu tol.

## Cara membelinya

1. Cari **kiosk CAG** — satu di sebelah setiap stesen MRT dan Monorel, tambah kiosk pusat di bandar.
2. Berinteraksi dengan kiosk (garisan pandangan diperlukan — prompt tidak akan berfungsi melalui dinding).
3. Pilih **Buy Card** pada panel kiosk. Sahkan caj **100 BR**.
4. Anda akan menerima alat **CAG Card** di dalam backpack anda. Lengkapkannya untuk melihat lencana baki ringkas di atas kad; aktifkannya (klik semasa dipegang) untuk membuka UI dompet anda.

Setelah anda memiliki kad, alat itu akan diberikan secara automatik kepada anda pada setiap spawn.

## Tambah nilai

Di mana-mana kiosk:

1. Pilih **Top Up**.
2. Pilih denominasi: **20 / 50 / 100 / 200 / 500 BR**.
3. Sahkan. Tambah nilai besar (200 BR ke atas) akan meminta pengesahan untuk mengelak klik tersalah.

- **Baki maksimum:** 2 000 BR tersimpan pada satu masa.
- **Hutang diselesaikan dahulu.** Jika anda mempunyai hutang tambang bas yang belum dibayar, tambah nilai akan menjelaskannya sebelum menambah baki sedia ada anda.
- **Butang tambah nilai menjadi kelabu** dengan tag "(max)" apabila denominasi itu akan melebihi had.

## Pas bulanan

- **Harga:** 500 BR di mana-mana kiosk.
- **Tempoh:** 30 hari dari pembelian.
- **Faedah:**
  - **Perjalanan bas percuma** untuk seluruh tempoh.
  - **Diskaun MRT / Monorel digandakan** dari 30 % kepada **50 %**.
- Dipaparkan dalam UI dompet dengan penunjuk aktif `[v]` dan pil status hijau.

Pulang modal sekitar 100 perjalanan bas (500 BR ÷ 5 BR) — tambah apa sahaja penjimatan MRT yang anda timbunkan. Jika anda berulang-alik setiap hari, ia membayar balik dengan cepat.

## Membuka dompet anda

Tiga cara untuk membuka UI dompet:

- **Lengkapkan dan aktifkan** alat CAG Card (klik semasa memegangnya).
- **Tekan Ctrl + W** di mana-mana sahaja, pada bila-bila masa.
- **Buka aplikasi CAG eWallet** pada Phone dalam permainan anda.
- **Tekan Escape** untuk menutup.

## Di dalam dompet

Lima tab:

| Tab | Apa yang anda akan jumpa |
| --- | --- |
| **Buy Card** | Beli kad jika anda belum memilikinya (tersembunyi setelah dimiliki). |
| **Top Up** | Grid butang denominasi. |
| **Pass** | Status pas bulanan anda; beli atau perbaharui. |
| **Designs** | Layari dan lengkapkan reka bentuk kad (lihat di bawah). |
| **History** | 20 transaksi terakhir anda + statistik sepanjang hayat (perjalanan bas, perjalanan MRT, BR dibelanjakan, BR dijimatkan, umur kad). |

---

## Reka bentuk kad

Kad anda mempunyai **reka bentuk visual** — warna dan seni yang dipaparkan pada lencana alat, pratonton dompet, dan aplikasi Phone. Reka bentuk **Classic** adalah percuma dengan setiap kad; yang lain boleh dibuka:

- **Shop** — beli terus di kiosk.
- **Achievements** — peroleh dengan menggunakan kad:
  - **100 perjalanan bas**
  - **50 perjalanan MRT**
  - **10 000 BR belanja sepanjang hayat melalui CAG**
- **Seasonal** — reka bentuk istimewa ditawarkan semasa tempoh **Deepavali, Merdeka, dan Raya**; jika terlepas tempoh, tunggu tahun depan.

Tukar reka bentuk aktif anda dari tab **Designs**. Anda simpan setiap reka bentuk yang pernah anda buka — ia disimpan ke akaun anda.

---

## CAG eWallet (aplikasi Phone)

Pada Phone dalam permainan anda, aplikasi **CAG eWallet** memberi anda pandangan melayari sahaja bagi kad anda tanpa perlu memegang alat atau menekan Ctrl + W.

Lima tab di bahagian bawah:

| Tab | Tujuan |
| --- | --- |
| **Home** | Kad baki dengan reka bentuk aktif anda, pintasan tindakan pantas (Reload, Tap, Pass, Designs), 2 transaksi terakhir. |
| **Trips** | Sejarah penuh dengan cip berkod warna (bus / mrt / gate / topup) dan jalur statistik di atas. |
| **Tap** | Skrin penerangan dengan pratonton kad condong dan nombor diskaun langsung — peringatan berguna tentang apa yang kad beri anda. |
| **Pass** | Status pas sebagai kad tiket kuning dengan ringkasan penggunaan dan penjimatan. |
| **Me** | Reka bentuk aktif anda sebagai hero + grid reka bentuk (dimiliki vs. terkunci), tambah statistik sepanjang hayat. |

**Penting:** semua butang pembelian dalam aplikasi (Reload, Buy/Renew Pass, Change Design) **deep-link** ke kiosk terdekat. Jika anda cukup dekat (dalam lingkungan 24 studs), UI kiosk akan terbuka secara automatik. Jika tidak, anda akan mendapat notifikasi memberitahu kiosk mana yang terdekat dan sejauh mana — pergi ke sana untuk menyelesaikan tindakan. Kiosk adalah sumber tunggal kebenaran untuk transaksi.

---

## Petua & perkara untuk diingat

- **Beli kad sebelum perjalanan pertama anda.** Ia membayar balik dalam ~7 perjalanan MRT atau ~7 tol.
- **Simpan baki kecil pada kad.** Anda tidak perlu memaksimumkannya — tambang bas sangat kecil.
- **Hutang adalah senyap tetapi nyata.** Jika kad anda kosong, bas tetap membenarkan anda menaiki tetapi merekodkan tambang sebagai hutang. Tambah nilai untuk menjelaskannya; anda akan mencapai had hutang 200 BR akhirnya.
- **Anda tidak boleh cash out.** Wang di atas kad adalah sehala — belanjakan untuk pengangkutan, jangan simpan simpanan di situ. (Ini sepadan dengan Touch n Go sebenar.)
- **Pas bulanan bertimbun dengan diskaun MRT**, tetapi tidak dengan tambang bas — pas = bas percuma, bukan bas berdiskaun.
- **Prompt kiosk memerlukan garisan pandangan** — jika anda tidak dapat melihat kiosk, anda tidak boleh berinteraksi dengannya. Berjalan mengelilingi halangan.
- **Sesi kiosk tamat masa selepas 60 saat.** Jika anda menjauh, cukup berinteraksi semula.
- **Alat mempunyai had kadar.** Tekan butang berulang-ulang dalam UI dompet akan mengunci anda seketika. Klik sekali dan tunggu tindakan diproses (butang menunjukkan "…" semasa sibuk).
- **Teksi dan e-hailing TIDAK menggunakan CAG.** Mereka menggunakan tambang berasaskan BR sendiri — bawa tunai untuk itu.
- **Jika CAG dinyahdayakan** (penyelenggaraan / acara): semua kiosk menyembunyikan prompt mereka, kad dilucutkan, dan pengangkutan kembali kepada caj BR biasa. Baki dompet, reka bentuk, dan pas anda dipelihara untuk kembali aktif.

---

## Ketersediaan ciri

Seluruh sistem CAG boleh ditogol mati oleh staf melalui bendera admin. Apabila itu berlaku:

- Kiosk tidak menunjukkan prompt interaksi.
- Kad anda dibuang sementara dari backpack anda.
- Aplikasi Phone memaparkan skrin "CAG eWallet is currently unavailable".
- Bas, MRT, dan TapNGo mencaj harga BR penuh daripada dompet anda tanpa diskaun.
- **Tiada apa yang hilang** — baki, reka bentuk, dan pas anda akan tersambung semula sebaik bendera dihidupkan semula.

---

## Lihat juga

- [Peraturan](/bandaraya/rules)
- [Ekonomi](/bandaraya/economy) — mata wang, kedai, gamepass
- [Peta](/bandaraya/locations) — di mana stesen dan terminal berada
- [Kerja](/bandaraya/jobs) — memandu bas, teksi
- [Glosari](/bandaraya/glossary) — CAG, TapNGo, MRT
