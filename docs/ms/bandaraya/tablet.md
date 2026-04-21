---
title: Tablet
description: >-
  Alat tablet khas pasukan di Bandaraya — MDT, MyEmergency, MyTow, KKM Logger,
  dan aplikasi lain.
lang: ms
translated_from_hash: 0b131099
translated_on: '2026-04-21'
needs_review: true
---

# Tablet

**Tablet** dalam permainan ialah peranti pelbagai aplikasi yang memaparkan ciri tambahan untuk pasukan anda. Aplikasi dibuka berdasarkan warna pasukan anda — pegawai PDRM nampak MDT, operator tunda nampak MyTow, dan sebagainya.

> **Tablet ≠ Telefon.** [Telefon](/bandaraya/phone) ialah permukaan aplikasi topbar universal (MyPay, e-hailing, CAG, 999, MyCar, dan lain-lain). Tablet pula ialah **alat** khas pasukan yang anda lengkapkan daripada backpack anda.

## TL;DR

- Lengkapkan **alat tablet** anda untuk membuka peranti.
- Aplikasi muncul berdasarkan pasukan anda.
- Tablet juga memaparkan notifikasi dan amaran.
- Topbar mendapat ikon untuk togol pantas.

---

## Menggunakan tablet

1. Buka backpack anda.
2. Lengkapkan alat **Tablet** (diberi jika pasukan anda layak).
3. UI tablet akan terbuka.
4. Klik ikon aplikasi untuk masuk ke aplikasi tersebut.
5. Lengkapkan alat lain atau tekan ikon togol untuk menutup.

Topbar mendapat ikon yang terikat dengan tablet — ketik ikon itu untuk togol buka/tutup tanpa perlu lengkapkan.

---

## Aplikasi

### MDT — Mobile Data Terminal (PDRM)

Terminal maklumat polis. UI autentik polis dengan jenama Polis, tab mendatar, medan data monospace.

#### BG Check
Semak mana-mana pemain:
- Pasukan dan pangkat
- Status BOLO aktif
- Rekod tangkapan terakhir
- Kedudukan semasa mereka

Berguna untuk membuat keputusan sama ada mahu memberhentikan seseorang.

#### Senarai BOLO
Lihat semua BOLO aktif (amaran Be On the LookOut) secara masa nyata. BOLO akan dibatalkan secara automatik apabila suspek ditangkap.

#### Tambah BOLO
Letakkan pemain dalam BOLO dengan sebab:
- Semua pegawai bertugas akan dimaklumkan dengan lencana, bunyi, dan amaran toast.
- Disiarkan kepada seluruh pasukan PDRM secara masa nyata.

Khas PDRM sahaja; pasukan lain akan nampak tab yang dikelabukan.

### MyEmergency

Aplikasi koordinasi perkhidmatan kecemasan — untuk pasukan kecemasan (PDRM, BOMBA, KKM, SJAM). Uruskan panggilan insiden, selaraskan respons berbilang pasukan.

### Vehicle Management

Aplikasi kenderaan serbaguna — sesiapa yang ada tablet boleh guna untuk kegunaan asas. Ciri-ciri termasuk:
- **Carian plat** — cari maklumat pendaftaran kenderaan
- **Pengurusan pendaftaran** — daftar kenderaan yang anda miliki
- **Penjejakan spawn** — lihat kenderaan yang telah anda spawn

### MyTow

Aplikasi operator tunda:
- Lihat tundaan aktif
- Mohon kerja tunda
- Urus klem dari jauh (buka klem daripada tablet, tanpa perlu berjalan balik)

### KKM Logger

Aplikasi kementerian kesihatan:
- Log tindakan perubatan
- Jejaki rawatan pesakit
- Laporan insiden untuk audit perubatan

Khas KKM sahaja.

### Developer App

Alat dan diagnostik pembangun. Pembangun sahaja.

---

## Notifikasi

Tablet menerima notifikasi melalui dua saluran acara:

- **Notifikasi tablet** — amaran global (panggilan kebakaran, panggilan 999, BOLO, pengumuman admin).
- **Notifikasi khusus aplikasi** — dalam konteks aplikasi tertentu (contoh: tempahan baharu untuk pemandu teksi, amaran MDT untuk PDRM).

Apabila notifikasi tiba, ikon tablet pada topbar akan mendapat penunjuk visual, dan aplikasi yang berkaitan akan berdenyut.

---

## Sekatan pasukan

Aplikasi yang anda nampak bergantung pada `TeamColor` pasukan anda:

| Pasukan | Aplikasi tersedia |
| --- | --- |
| **PDRM, KPTD, Polis Bantuan** | MDT, MyEmergency, Vehicle Management |
| **BOMBA** | MyEmergency, Vehicle Management |
| **KKM, SJAM** | KKM Logger, MyEmergency, Vehicle Management |
| **Towing Services** | MyTow, Vehicle Management |
| **MyTransit, Bus Services** | Vehicle Management |
| **Developers** | Developer App + semua lain |
| **Awam (Visitors, Malaysians)** | Vehicle Management sahaja (carian plat asas) |

Jika aplikasi yang anda jangkakan tiada di situ, semak pasukan anda.

---

## Tip & perkara penting

- **Alat tablet kekal merentasi spawn** — anda tidak akan hilangnya apabila mati.
- **Togol topbar lebih pantas daripada melengkapkan** untuk tinjauan cepat.
- **MDT BG Check dikemas kini secara langsung** — lokasi sasaran adalah terkini.
- **BOLO dibatalkan automatik apabila ditangkap** — tiada pembersihan manual diperlukan.
- **Carian plat berfungsi untuk semua orang** — anda tidak perlu jadi PDRM untuk mencari plat kenderaan.

## Lihat juga

- [Perkhidmatan Kecemasan](/bandaraya/emergency-services) — peranan PDRM / BOMBA / KKM yang menggunakan tablet
- [Tangkapan & Undang-undang](/bandaraya/arrest-and-law) — bagaimana BOLO / BG check berfungsi dalam tangkapan
- [Pekerjaan](/bandaraya/jobs) — MyTow untuk operator tunda
- [Kenderaan](/bandaraya/vehicles) — pendaftaran dan carian plat
