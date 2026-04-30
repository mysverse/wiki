---
title: Pengangkutan Awam di Bandaraya — Panduan
description: >-
  Pengangkutan awam di Bandaraya — MRT, LRT, monorel, bas, kad CAG, e-hailing,
  dan tol TapNGo.
lang: ms
translated_from_hash: a5dce02d
translated_on: '2026-04-30'
needs_review: true
---
# Pengangkutan Awam di Bandaraya — Panduan

Panduan pemain untuk bergerak di sekitar Kuala Lumpur: bas, MRT, Monorail, tol lebuh raya, dan **kad CAG** yang menyatukan semuanya.

Semua harga dalam **BR (Bandar Ringgit)**.

## Rujukan pantas

| Apa | Kos (tunai) | Dengan kad CAG | Dengan CAG + pas bulanan |
| --- | --- | --- | --- |
| Tambang bas (kadar rata) | 5 BR | 5 BR (dari kad) | **Percuma** |
| Fast travel MRT / Monorail | Harga penuh | **Diskaun 30 %** | **Diskaun 50 %** |
| Pintu tol lebuh raya TapNGo | 15 BR | **Diskaun 20 %** (12 BR) | Diskaun 20 % (12 BR) |
| Kad CAG (pembelian sekali sahaja) | 100 BR | — | — |
| Pas bulanan | 500 BR | — | Sah selama 30 hari |

**TL;DR:** Jika anda menggunakan pengangkutan awam lebih daripada beberapa kali, belilah kad CAG. Jika anda menggunakannya setiap hari, dapatkan pas bulanan.

---

## Rangkaian

### MRT Laluan Kajang
Tiga stesen; fast travel berjalan kaki antara mereka.

- **Conlay**
- **Persiaran KLCC**
- **Ampang Park**

### Laluan KL Monorail
Tiga lagi stesen di laluan berasingan.

- **Bukit Bintang**
- **Raja Chulan**
- **Bukit Nanas**

### Bas
Dikendalikan oleh beberapa operator di sekitar bandar — **MyTransit**, **FirstGroup**, dan **Fermuda**. Cari tempat duduk penumpang pada model bas bertag; tambang dicaj secara automatik apabila anda duduk.

### Lebuh raya
Sesetengah laluan lebuh raya melalui **pintu tol TapNGo**. Kenderaan anda dicaj 15 BR setiap pintu, atau 12 BR jika anda memiliki kad CAG.

---

## Fast travel (MRT & Monorail)

1. Berjalan ke mana-mana stesen MRT atau Monorail.
2. Panel fast travel akan dibuka dan memaparkan stesen-stesen lain di laluan anda.
3. Pilih destinasi. Harga yang dipaparkan bergantung pada sama ada anda memiliki kad CAG:
   - **Tiada kad:** harga BR penuh dicaj dari dompet anda.
   - **Kad CAG:** diskaun 30 %, dicaj dari baki kad anda.
   - **Kad CAG + pas bulanan aktif:** diskaun 50 %, masih dari baki kad.
4. Skrin menjadi gelap; anda tiba di stesen destinasi.

Jika baki CAG anda terlalu rendah untuk menampung tambang berdiskaun, sistem akan kembali mencaj BR penuh dari dompet anda — UI menunjukkan pemberitahuan agar anda menambah nilai.

### Berapa harganya

Tambang berskala mengikut bilangan hop yang anda ambil (asas + setiap hop):

| Perjalanan | Tunai | Dengan CAG (diskaun 30%) | Dengan CAG + pas (diskaun 50%) |
| --- | --- | --- | --- |
| 1 hop (stesen bersebelahan) | 150 BR | 105 BR | 75 BR |
| 2 hop (hujung laluan) | 200 BR | 140 BR | 100 BR |

Formula: `100 + 50 × hops`. Perjalanan menggunakan pas bulanan penuh mengimbangi kos selepas kira-kira 7 perjalanan.

---

## Bas

Bas beroperasi di seluruh bandar. Tiada tiket untuk dibeli atau butang untuk ditekan — hanya **naik dan duduk**.

- **Tambang:** 5 BR setiap kali naik, kadar rata.
- **Dibayar melalui kad CAG** jika anda mempunyainya; ditolak secara automatik apabila anda duduk di tempat duduk penumpang.
- **Tiada kad, atau kad kosong?** Tambang menjadi **hutang**. Anda masih boleh menaiki, tetapi tambah nilai seterusnya akan menjelaskan hutang sebelum menambah baki.
- **Pemegang pas bulanan:** perjalanan adalah **percuma** — kaunter "Saved with CAG" tetap menjejak nilai yang dijimatkan.
- **Pemandu bas tidak dicaj** — tempat duduk pemandu dikecualikan.
- **Had hutang:** 200 BR. Capai had ini dan perjalanan selanjutnya ditolak sehingga anda menambah nilai.

**Pengendalian keluar adalah fleksibel.** Sama ada anda bangun secara biasa, ditendang keluar dari tempat duduk, mati, disconnect, atau bas despawn di bawah anda, tambang dicaj tepat sekali sahaja untuk perjalanan tersebut.

---

## Pintu tol lebuh raya TapNGo

Apabila kenderaan anda sampai di pintu TapNGo:

1. Pintu menolak **15 BR** dari dompet anda (atau **12 BR** jika anda memiliki kad CAG — diskaun 20 %, dibayar dari baki kad dengan sandaran ke tunai).
2. Pintu dibuka.
3. Pandu melaluinya.

Kenderaan yang telah membayar di pintu tertentu tidak akan dicaj dua kali ketika keluar.

---

## Kad CAG (Click And Go)

**Kad CAG** ialah kad pengangkutan nilai tersimpan di Bandaraya — dimodelkan berdasarkan Touch n Go sebenar di Malaysia. Tambah nilai sekali, tap secara automatik di bas, MRT, Monorail, dan pintu tol lebuh raya.

## Cara membeli

1. Cari **kiosk CAG** — terdapat satu di setiap stesen MRT / Monorail, dan **dua** di Raja Chulan dan Ampang Park (stesen-stesen itu mempunyai dua pintu masuk). Jumlah 8 kiosk.
2. Berinteraksi dengan kiosk (memerlukan garis pandang — prompt tidak akan berfungsi melalui dinding).
3. Pilih **Buy Card** pada panel kiosk. Sahkan caj **100 BR**.
4. Anda akan menerima alat **CAG Card** di backpack anda. Lengkapkan untuk melihat lencana baki ringkas di atas kad; aktifkannya (klik semasa dipegang) untuk membuka UI dompet anda.

Setelah anda memiliki kad, alat itu akan diberikan kepada anda secara automatik pada setiap spawn.

## Menambah nilai

Di mana-mana kiosk:

1. Pilih **Top Up**.
2. Pilih denominasi: **20 / 50 / 100 / 200 / 500 BR**.
3. Sahkan. Tambah nilai besar (200 BR ke atas) akan meminta pengesahan untuk mengelakkan klik tersilap.

- **Baki maksimum:** 2 000 BR disimpan serentak.
- **Hutang dijelaskan dahulu.** Jika anda mempunyai hutang tambang bas yang belum berbayar, tambah nilai akan menjelaskannya sebelum menambah baki tersedia anda.
- **Butang tambah nilai menjadi kelabu** dengan tag "(max)" apabila denominasi akan melebihi had.

## Pas bulanan

- **Harga:** 500 BR di mana-mana kiosk.
- **Tempoh:** 30 hari dari pembelian.
- **Keistimewaan:**
  - **Perjalanan bas percuma** untuk sepanjang tempoh.
  - **Diskaun MRT / Monorail digandakan** dari 30 % kepada **50 %**.
- Ditunjukkan dalam UI dompet dengan penunjuk aktif `[v]` dan pil status hijau.

Pulang modal sekitar 100 perjalanan bas (500 BR ÷ 5 BR) — tambah pula penjimatan MRT yang anda kumpul. Jika anda berulang-alik setiap hari, ia cepat menguntungkan.

## Membuka dompet anda

Tiga cara untuk membuka UI dompet:

- **Lengkapkan dan aktifkan** alat CAG Card (klik semasa memegangnya).
- **Tekan Ctrl + W** di mana-mana sahaja, pada bila-bila masa.
- **Buka aplikasi CAG eWallet** pada Phone dalam permainan anda.
- **Tekan Escape** untuk menutup.

## Di dalam dompet

Lima tab:

| Tab | Apa yang anda akan temui |
| --- | --- |
| **Buy Card** | Beli kad jika anda belum memilikinya (tersembunyi setelah dimiliki). |
| **Top Up** | Grid butang denominasi. |
| **Pass** | Status pas bulanan anda; beli atau baharui. |
| **Designs** | Semak imbas dan pakai reka bentuk kad (lihat di bawah). |
| **History** | 20 transaksi terakhir anda + statistik seumur hidup (perjalanan bas, perjalanan MRT, BR dibelanjakan, BR dijimatkan, umur kad). |

---

## Reka bentuk kad

Kad anda mempunyai **reka bentuk visual** — warna dan seni yang dipaparkan pada lencana alat, pratonton dompet, dan aplikasi Phone. Reka bentuk **Classic** percuma dengan setiap kad; yang lain boleh dibuka:

- **Shop** — beli terus di kiosk.
- **Achievements** — dapatkan dengan menggunakan kad:
  - **100 perjalanan bas**
  - **50 perjalanan MRT**
  - **10 000 BR perbelanjaan seumur hidup melalui CAG**
- **Seasonal** — reka bentuk istimewa yang ditawarkan semasa tetingkap **Deepavali, Merdeka, dan Raya**; terlepas tetingkap, tunggu sehingga tahun depan.

Tukar reka bentuk aktif anda dari tab **Designs**. Anda menyimpan setiap reka bentuk yang pernah dibuka — semuanya disimpan ke akaun anda.

---

## CAG eWallet (aplikasi Phone)

Pada Phone dalam permainan anda, aplikasi **CAG eWallet** memberikan pandangan baca-sahaja pada kad anda tanpa perlu memegang alat atau menekan Ctrl + W.

Lima tab di bahagian bawah:

| Tab | Tujuan |
| --- | --- |
| **Home** | Kad baki dengan reka bentuk aktif anda, pintasan tindakan pantas (Reload, Tap, Pass, Designs), 2 transaksi terakhir. |
| **Trips** | Sejarah penuh dengan cip berkod warna (bus / mrt / gate / topup) dan jalur statistik di atas. |
| **Tap** | Skrin penerangan dengan pratonton kad yang condong dan nombor diskaun langsung — peringatan berguna tentang apa yang kad boleh beri. |
| **Pass** | Status pas sebagai kad tiket kuning dengan ringkasan penggunaan dan penjimatan. |
| **Me** | Wira reka bentuk aktif anda + grid reka bentuk (dimiliki vs. terkunci), serta statistik seumur hidup. |

**Penting:** semua butang pembelian dalam aplikasi (Reload, Buy/Renew Pass, Change Design) **pautan dalam (deep-link)** ke kiosk terdekat. Jika anda cukup dekat (dalam 24 stud), UI kiosk akan dibuka secara automatik. Jika tidak, anda akan mendapat toast yang memberitahu anda kiosk mana yang terdekat dan seberapa jauh — pergi ke sana untuk menyelesaikan tindakan. Kiosk adalah satu-satunya sumber kebenaran bagi transaksi.

---

## Tip & perkara penting

- **Beli kad sebelum perjalanan pertama anda.** Ia mengimbangi kos dalam ~7 perjalanan MRT atau ~7 tol.
- **Simpan baki kecil pada kad.** Anda tidak perlu memaksimumkannya — tambang bas kecil sahaja.
- **Hutang senyap tetapi nyata.** Jika kad anda kosong, bas masih membenarkan anda menaiki tetapi merekod tambang sebagai hutang. Tambah nilai untuk menjelaskannya; anda akan mencapai had hutang 200 BR akhirnya.
- **Anda tidak boleh mengeluarkan tunai.** Wang pada kad adalah sehala — belanjakan pada pengangkutan, jangan simpan simpanan di sana. (Ini sepadan dengan Touch n Go sebenar.)
- **Pas bulanan bertindan dengan diskaun MRT**, tetapi bukan dengan tambang bas — pas = bas percuma, bukan bas berdiskaun.
- **Prompt kiosk memerlukan garis pandang** — jika anda tidak dapat melihat kiosk, anda tidak boleh berinteraksi dengannya. Berjalanlah mengelilingi halangan.
- **Sesi kiosk tamat selepas 60 saat.** Jika anda berundur, cuma berinteraksi semula.
- **Alat mempunyai had kadar.** Menekan butang berulang-ulang dalam UI dompet akan mengunci anda seketika. Klik sekali dan tunggu tindakan diproses (butang menunjukkan "…" semasa sibuk).
- **Teksi dan e-hailing TIDAK menggunakan CAG.** Mereka menggunakan tambang berasaskan BR sendiri — bawa tunai untuk itu.
- **Jika CAG dilumpuhkan** (penyelenggaraan / acara): semua kiosk menyembunyikan prompt mereka, kad dinyah-lengkap, dan pengangkutan kembali kepada caj BR biasa. Baki dompet, reka bentuk, dan pas anda dikekalkan untuk bila ia kembali aktif.

---

## Ketersediaan ciri

Keseluruhan sistem CAG boleh dimatikan oleh kakitangan melalui flag admin. Apabila itu berlaku:

- Kiosk tidak menunjukkan prompt interaksi.
- Kad anda dikeluarkan dari backpack anda buat sementara waktu.
- Aplikasi Phone menunjukkan skrin "CAG eWallet is currently unavailable".
- Bas, MRT, dan TapNGo mencaj harga BR penuh dari dompet anda tanpa diskaun.
- **Tiada apa yang hilang** — baki, reka bentuk, dan pas anda akan disambung semula saat flag dihidupkan semula.

---

## Lihat juga

- [Peraturan](/bandaraya/rules)
- [Ekonomi](/bandaraya/economy) — mata wang, kedai, gamepass
- [Peta](/bandaraya/locations) — di mana stesen dan terminal berada
- [Pekerjaan](/bandaraya/jobs) — memandu bas, teksi
- [Glosari](/bandaraya/glossary) — CAG, TapNGo, MRT
