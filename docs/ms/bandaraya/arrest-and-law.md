---
title: Tangkapan & Undang-Undang
description: >-
  Bagaimana tangkapan berfungsi di Bandaraya — LTAA, RTAA, saman, tempoh
  penjara, dan hak suspek.
lang: ms
translated_from_hash: 61b784e3
translated_on: '2026-04-21'
needs_review: true
---
# Tangkapan & Undang-Undang

Bagaimana tangkapan berfungsi di Bandaraya — dari perspektif pegawai dan suspek.

## TL;DR

- **Siapa boleh menangkap**: PDRM (mana-mana pangkat), KPTD (mana-mana pangkat), Polis Bantuan (pangkat 2+). Yang di-Pertuan Persekutuan juga mempunyai alat tangkapan.
- **Aliran tangkapan**: tahan → seret → gari → tangkap. Suspek masuk ke pasukan Arrested, pemasa pelepasan 3 minit.
- **LTAA** (leave to avoid arrest): disconnect semasa ditahan → auto-ditangkap selama 3 minit apabila kembali.
- **RTAA** (reset to avoid arrest): butang reset dinyahaktifkan pada HP 75 atau ke bawah.
- **Saman**: denda di tempat kejadian oleh pegawai.
- **Rayuan**: melalui moderator community server Malaysia.

---

## Siapa boleh menangkap

Bukan semua orang boleh menggari anda. Kuasa tangkapan terhad kepada:

| Pasukan | Group | Pangkat | Nota |
| --- | --- | --- | --- |
| **PDRM** | 1182710 | Mana-mana | Polis standard |
| **KPTD (Polis Tentera)** | 2817141 | Mana-mana | Mana-mana pangkat — menguatkuasakan merentasi MAF dan orang awam |
| **Polis Bantuan** | 6563708 | 2+ | Secara teknikal skop mana-mana, tetapi biasanya diroleplay sebagai skop transit |

**Yang di-Pertuan Persekutuan** (pangkat MYSverse 220+) membawa alat `Arrest` dalam loadout mereka untuk roleplay upacara, tetapi kod tangkapan permainan tidak mengiktiraf mereka sebagai mempunyai kuasa tangkapan — mereka sebenarnya tidak boleh memproses tangkapan. Untuk tangkapan sebenar, libatkan PDRM atau KPTD.

RELA, BOMBA, KKM, anggota biasa MAF, SJAM, orang awam: **tiada kuasa tangkapan**. Mereka boleh menjadi saksi, membuat panggilan, atau menggeledah dengan izin, tetapi tidak boleh menangkap.

---

## Aliran tangkapan (perspektif pegawai)

### 1. Tahan

- Hampiri suspek.
- Gunakan tindakan **Detain** (melalui cuffEvents).
- Suspek ditahan dalam keadaan ditahan — watak mereka memainkan animasi menyerah, pergerakan dihadkan.

### 2. Seret (pilihan)

- Anda boleh menyeret suspek yang ditahan ke kenderaan atau kawasan tahanan anda.
- Berguna apabila menangkap beberapa orang — kekalkan mereka dalam kumpulan.

### 3. Baring (pilihan, beberapa pesalah)

- Baringkan pemain yang ditahan di atas tanah.
- Susun beberapa begini apabila berurusan dengan beberapa suspek serentak.

### 4. Gari

- Gunakan alat **Cuff** pada suspek yang ditahan.
- Animasi gari dimainkan.
- Suspek kini digari — tidak boleh mengeluarkan alat, tidak boleh berlari.

### 5. Tangkap

- Gunakan tindakan Arrest (melalui cuffEvents atau menu radial).
- Pasukan suspek bertukar kepada **Arrested**.
- **Pemasa pelepasan 3 minit** bermula.
- **Rekod tangkapan** dicipta dengan:
  - ID Pegawai
  - Masa tangkapan
  - Lokasi (X, Y, Z)
  - **Nombor rujukan** seperti `KL-{UserId}-{Index}`
  - Deskripsi tangkapan
  - Penanda OCG (jika suspek berada dalam pasukan OCG)

Webhook Discord diaktifkan untuk merekodkan tangkapan.

### Tangkapan berasaskan jarak

Pegawai boleh menggunakan `ArrestPlayerByDistance` — menangkap seseorang dalam julat tanpa menggari mereka secara fizikal. Digunakan untuk situasi di mana suspek sudah tumbang atau patuh dari jauh.

---

## Bagaimana rasanya ditangkap (perspektif suspek)

- Pasukan anda bertukar kepada **Arrested** (Bright violet).
- **BlindedLayer** menutupi skrin anda (anda diikat mata).
- **ArrestedGUI** memaparkan:
  - Info pegawai yang menangkap
  - Kiraan detik 3 minit sehingga pelepasan
  - Nombor rujukan anda
- Pergerakan dihadkan; alat dinyahaktifkan.

Selepas 3 minit, permainan melepaskan anda secara automatik dan anda boleh memilih pasukan semula.

---

## LTAA — Leave To Avoid Arrest

**Disconnect semasa ditahan** dipanggil LTAA, dan ia dikuatkuasakan:

- Permainan mengesan bahawa anda keluar semasa ditahan atau tumbang.
- Tangkapan anda **diterapkan secara automatik** — pemasa 3 minit bermula.
- Rekod tangkapan disimpan ke pangkalan data permainan.
- Apabila anda menyertai semula — walaupun beberapa minit kemudian, walaupun dalam session yang berbeza — anda kembali dalam penjara dengan baki masa.

Jangan rage-quit semasa tangkapan. Ia akan mengikut anda.

**Juga terpakai jika cedera dan keluar.** Jika seseorang telah menumbangkan anda dan anda berhenti, penjejak LTAA akan menangkapnya.

---

## RTAA — Reset To Avoid Arrest

**Reset watak anda** untuk melarikan diri daripada tahanan / tangkapan adalah eksploit yang diketahui. Sekarang:

- **Butang reset dinyahaktifkan secara automatik** apabila HP anda pada 75 atau ke bawah.
- Anda secara fizikal tidak boleh reset sehingga anda regen atau dirawat.

Ini menghapuskan laluan pelarian RTAA sepenuhnya.

---

## Saman

Polis boleh mengeluarkan **saman** — denda di tempat kejadian untuk kesalahan trafik atau kecil.

- Pegawai menggunakan alat **Saman** (memerlukan PDRM mana-mana pangkat, atau Polis Bantuan pangkat 2+).
- Denda **ditolak segera** daripada baki BR anda (denda maksimum setiap saman: **1,000 BR**).
- Anda menerima notifikasi popup toast.
- Jumlah denda, sebab, dan nombor rujukan muncul dalam GUI **SummonsView** anda — layari sejarah penuh anda dengan pagination.
- Pegawai dihadkan kadar kepada satu saman setiap **10 saat**.

Anda tidak boleh mempertikaikan atau menolak — ia sudah dibayar. Jika anda fikir sesuatu saman itu tidak adil, rayu melalui community server (semakan moderator).

---

## Geledah

Pegawai boleh memohon untuk menggeledah anda dengan alat **Search**:

- Anda mendapat **popup izin** (Searchee GUI) dengan butang Ya / Tidak.
- Jika anda memberikan izin, pegawai melihat backpack / poket anda.
- Jika anda menolak, pegawai tidak dapat melihat ke dalam (kecuali mereka mempunyai sebab munasabah — peraturan roleplay).

---

## Cap Jari

Alat **FingerPrint Scanner** — mengenal pasti anda. Muncul dalam UI pegawai.

## Keluar daripada masalah

- **Tunggu 3 minit itu habis.**
- **Rayu** melalui community server Malaysia — moderator mengendalikan pertikaian dan ban.
- **Kekal dalam watak** — merayu kepada pegawai, menawarkan rasuah (dalam roleplay), atau sekadar menerima tangkapan adalah semua sah.

## Apa JANGAN buat

Mengikut [Rules](/bandaraya/rules), perkara berikut akan membuat anda diban melebihi tangkapan:

- **LTAA** (leave to avoid arrest) — pelanggaran am
- **RTAA** (reset to avoid arrest) — pelanggaran am, walaupun butang reset kini anti-RTAA
- **Glitching menembus dinding / melarikan diri dari kawasan larangan** — pelanggaran am
- **Glitching atau menyalahgunakan alat semasa ditahan atau ditangkap** — pelanggaran am
- **Menjadi rogue sebagai pasukan perkhidmatan awam** — pelanggaran berat

---

## Tips & perangkap

- **Bekerjasama.** Anda akan dilepaskan dalam 3 minit. Melawan tangkapan dari segi roleplay akan menjadikannya lebih teruk.
- **Jangan LTAA.** Pemasa berterusan merentasi session. Anda tidak melarikan diri daripada apa-apa.
- **Pegawai, log tindakan anda.** Rekod tangkapan dijejak; kekalkan deskripsi pendek dan faktual (ia masuk ke rekod secara kekal).
- **Ahli OCG ditandakan** — rekod tangkapan membawa penanda `IsOCG`. Pegawai melihat ini dalam MDT.
- **Gunakan MDT** — app tablet polis membolehkan anda BG-check suspek, periksa BOLO, dan keluarkan BOLO sendiri. Lihat [Tablet](/bandaraya/tablet).
- **Rayuan wujud** — jika anda fikir anda ditangkap secara salah, teruskan dalam community server. Pasukan moderasi permainan mengendalikannya.

## Lihat juga

- [Perkhidmatan Kecemasan](/bandaraya/emergency-services) — alat dan aliran PDRM
- [Tablet](/bandaraya/tablet) — app MDT untuk pegawai
- [Peraturan](/bandaraya/rules) — teks peraturan penuh, akibat LTAA/RTAA
- [Pertempuran & Kesihatan](/bandaraya/combat-and-health) — reset dinyahaktifkan pada HP rendah
- [Pasukan](/bandaraya/teams) — pasukan mana mendapat kuasa tangkapan
- [Glosari](/bandaraya/glossary) — LTAA, RTAA, MDT, BOLO
