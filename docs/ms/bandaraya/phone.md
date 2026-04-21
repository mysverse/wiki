---
title: Telefon
description: >-
  Telefon dalam permainan di Bandaraya — MyPay, e-hailing, 999, MyCar, MyTow,
  mesej, dan aplikasi lain.
lang: ms
translated_from_hash: 466708b8
translated_on: '2026-04-21'
needs_review: true
---
# Telefon

Setiap pemain di Bandaraya membawa **Telefon dalam permainan** — ikon pada topbar yang membuka peranti berbilang aplikasi. Berbeza dengan **Tablet** (yang merupakan alat khusus pasukan); Telefon adalah universal.

## Ringkasan

- Ketuk ikon telefon pada topbar anda.
- Ketuk aplikasi untuk membukanya.
- Banyak aplikasi tersedia; yang paling berguna di Bandaraya ialah **MyPay**, **e-hailing**, **CAG eWallet**, **999**, **MyCar**, dan **MyTow**.

---

## Cara membukanya

Telefon berada pada topbar anda. Ketuk ikon tersebut. Pada mudah alih, ikon topbar berada di bahagian atas skrin; pada desktop, di tempat yang sama. Overlay telefon akan muncul masuk.

## Aplikasi — universal (semua permainan MYSverse)

| Aplikasi | Fungsinya |
| --- | --- |
| **MYSair** | Tempahan penerbangan / perjalanan antara pengalaman. |
| **Elections** | Pilihan raya MYSverse — mengundi, melihat kempen. |
| **Blog** | Membaca siaran blog komuniti. |
| **NWS** | National Wire Services — suapan berita rasmi dalam permainan. |
| **Parlimen** | Melihat prosiding Parlimen. |
| **Message** | Sembang rakan ke rakan ("wasap"). |
| **Camera** | Mengambil foto dalam permainan. |
| **Settings** | Tetapan telefon — imej latar belakang, dan lain-lain. |
| **Rafahia** | Aplikasi jenama pakaian — melayari katalog. |

## Aplikasi — khusus Bandaraya

Aplikasi ini ditambah apabila anda berada di Bandaraya. Ia tidak muncul di Lebuhraya atau pengalaman lain.

### MyPay — hantar BR kepada pemain lain

Pemindahan BR rakan ke rakan. Seperti MyPay / DuitNow dunia sebenar Malaysia.

1. Buka **MyPay**.
2. **Cari** pemain mengikut nama.
3. Pilih mereka daripada senarai.
4. Masukkan jumlah (BR pecahan disokong — dibundarkan kepada 2 perpuluhan), atau ketuk prasetel **jumlah pantas**.
5. Ketuk **Send**.

Penerima akan mendapat pemberitahuan pada telefon mereka sendiri dengan butang **Accept / Deny**. Jika mereka menerima, BR akan berpindah. Jika ditolak atau diabaikan, tiada apa yang berlaku.

**Baki** ditunjukkan pada skrin hantar supaya anda tahu berapa yang boleh dibelanjakan. Pemindahan memerlukan:
- Kedua-dua pemain berada **dalam server yang sama** (anda tidak boleh hantar merentasi server)
- Kedua-dua pemain tidak berada dalam **senarai sekatan penipuan** (jarang berlaku — hanya jika admin telah menandakan akaun)
- Anda benar-benar memiliki BR tersebut — debit disemak sebelum kredit

Jika MyPay dilumpuhkan buat sementara waktu (admin mengalih `MyPayEnabled`), anda akan melihat skrin "dilumpuhkan" sebaliknya — aplikasi akan kelabu dan tiada pemindahan akan berlaku.

Setiap pemindahan yang selesai direkodkan ke Discord permainan (untuk keterlihatan moderasi).

### e-hailing — tempah teksi

Tempah perjalanan tanpa perlu berjalan ke meja syarikat teksi fizikal.

1. Buka **e-hailing**.
2. Masukkan **destinasi** anda dan (pilihan) **keterangan**.
3. Pilih pemandu daripada senarai yang tersedia.
4. Tunggu mereka menerima, kemudian diambil.

Tambang dikira berdasarkan jarak × kadar syarikat (lihat [Pekerjaan — Pemandu Teksi](/bandaraya/jobs#how-the-fare-is-calculated)).

### CAG eWallet

Paparan baca sahaja bagi kad transit Click And Go anda. Baki, perjalanan, pas bulanan, reka bentuk, statistik seumur hidup. **Butang pembelian akan membawa terus ke kiosk fizikal terdekat** — anda tidak boleh membeli terus dari telefon. Lihat [Pergerakan](/bandaraya/getting-around#the-cag-ewallet-phone-app).

### 999 — laporan kecemasan

Laporkan jenayah, kebakaran, kecemasan perubatan, atau kemalangan.

1. Buka **999**.
2. Isi **jenis** (apa yang sedang berlaku) dan **keterangan** (butiran).
3. Hantar.

Amaran akan memberitahu pasukan kecemasan yang berkaitan (POLIS untuk jenayah, BOMBA untuk kebakaran, KKM untuk perubatan). Jangan salah guna ini — panggilan palsu membazir masa responden.

Juga tersedia di Lebuhraya.

### MyCar — kawal kenderaan yang anda spawn

Kawal kenderaan anda dari jauh tanpa duduk di dalamnya — lampu, hon, isyarat kecemasan, kunci pintu.

### MyTow

MyTow yang sama seperti aplikasi Tablet, tetapi pada telefon anda. Laporkan keperluan untuk tunda, atau jejak tugas tunda anda. Berguna jika anda seorang awam yang kereta dikepit dan ingin menghubungi pengendali tunda.

## Cara aplikasi muncul / hilang

Aplikasi dengan sekatan "tempat" hanya muncul di tempat tersebut. Sebagai contoh, **e-hailing** hanya muncul di Bandaraya; **Rules** hanya muncul di Lebuhraya. Apabila anda mengembara ke pengalaman MYSverse yang berbeza (melalui MYSair), grid aplikasi anda akan berubah.

## Petua & perkara perlu diketahui

- **Input teks mudah alih** telah dibetulkan dalam v3.15.3 — jika anda mendapati mana-mana medan teks telefon tidak bertindak balas pada mudah alih, laporkan sebagai regresi.
- **Telefon ≠ Tablet.** Tablet ialah alat yang anda lengkapkan daripada backpack anda (terhad pasukan). Telefon ialah permukaan aplikasi topbar universal.
- **MyPay memerlukan penerima menerima** — jangan cuba memaksa bayaran kepada seseorang. Mereka mesti dalam talian.
- **999 pergi kepada pemain sebenar** (pegawai bertugas), bukan NPC. Bersabarlah.
- **CAG eWallet pada telefon adalah baca sahaja** — untuk membeli / tambah nilai / tukar pas anda mesti melawat kiosk. Telefon hanya menunjukkan maklumat anda.

## Lihat juga

- [Tablet](/bandaraya/tablet) — alat terhad pasukan dengan aplikasi berbeza (MDT, MyEmergency, dan lain-lain)
- [Pergerakan](/bandaraya/getting-around) — CAG eWallet (pada telefon)
- [Pekerjaan](/bandaraya/jobs) — e-hailing menempah tempahan untuk peranan Pemandu Teksi
- [Ekonomi](/bandaraya/economy) — mata wang BR (pemindahan MyPay)
- [Perkhidmatan Kecemasan](/bandaraya/emergency-services) — panggilan 999 pergi kepada POLIS/BOMBA/KKM bertugas
