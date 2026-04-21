---
title: Tangkapan & Undang-Undang
description: >-
  Bagaimana tangkapan berfungsi di Bandaraya — LTAA, RTAA, saman, tempoh
  penjara, dan hak suspek.
lang: ms
translated_from_hash: 6371bf02
translated_on: '2026-04-21'
needs_review: true
---
# Tangkapan & Undang-Undang

Bagaimana tangkapan berfungsi di Bandaraya — dari perspektif pegawai dan suspek.

## TL;DR

- **Siapa yang boleh menangkap**: POLIS (sebarang pangkat), KPTD (sebarang pangkat), Polis Bantuan (pangkat 2+). Yang di-Pertuan Persekutuan juga memiliki alat tangkapan.
- **Aliran tangkapan**: tahan → heret → gari → tangkap. Suspek dipindahkan ke pasukan Arrested, pemasa pelepasan 3 minit.
- **LTAA** (leave to avoid arrest): keluar permainan semasa ditahan → auto-ditangkap selama 3 minit apabila kembali.
- **RTAA** (reset to avoid arrest): butang reset dinyahaktifkan pada HP 75 atau kurang.
- **Saman**: denda serta-merta daripada pegawai.
- **Rayuan**: melalui moderator pelayan komuniti Malaysia.

---

## Siapa yang boleh menangkap

Bukan semua orang boleh memakaikan anda gari. Kuasa tangkapan terhad kepada:

| Pasukan | Grup | Pangkat | Nota |
| --- | --- | --- | --- |
| **POLIS** | 1182710 | Sebarang | Polis standard |
| **KPTD (Polis Tentera)** | 2817141 | Sebarang | Sebarang pangkat — menguatkuasakan merentas MAF dan orang awam |
| **Polis Bantuan** | 6563708 | 2+ | Secara teknikal skop-sebarang, tetapi biasanya diroleplaykan dalam skop transit |

**Yang di-Pertuan Persekutuan** (MYSverse pangkat 220+) membawa alat `Arrest` dalam loadout mereka untuk roleplay istiadat, tetapi kod tangkapan permainan tidak mengiktiraf mereka mempunyai kuasa tangkapan — mereka tidak boleh memproses tangkapan sebenar. Untuk tangkapan sebenar, libatkan POLIS atau KPTD.

RELA, BOMBA, KKM, anggota bawahan MAF, SJAM, orang awam: **tiada kuasa tangkapan**. Mereka boleh menyaksikan, menghubungi, atau menggeledah dengan persetujuan, tetapi tidak boleh menangkap.

---

## Aliran tangkapan (perspektif pegawai)

### 1. Tahan

- Dekati suspek.
- Gunakan tindakan **Detain** (melalui cuffEvents).
- Suspek dipegang dalam keadaan ditahan — watak mereka memainkan animasi menyerah diri, pergerakan disekat.

### 2. Heret (pilihan)

- Anda boleh menghereti suspek yang ditahan ke kenderaan atau kawasan tahanan.
- Berguna apabila menangkap ramai orang — pastikan mereka dalam satu kumpulan.

### 3. Baring (pilihan, pesalah berganda)

- Baringkan pemain yang ditahan atas tanah.
- Susun beberapa orang begini apabila berurusan dengan berbilang suspek serentak.

### 4. Gari

- Gunakan alat **Cuff** pada suspek yang ditahan.
- Animasi gari dimainkan.
- Suspek kini digari — tidak boleh keluarkan alat, tidak boleh berlari.

### 5. Tangkap

- Gunakan tindakan Arrest (melalui cuffEvents atau menu radial).
- Pasukan suspek bertukar kepada **Arrested**.
- **Pemasa pelepasan 3 minit** bermula.
- **Rekod tangkapan** dicipta dengan:
  - ID pegawai
  - Masa tangkapan
  - Lokasi (X, Y, Z)
  - **Nombor rujukan** seperti `KL-{UserId}-{Index}`
  - Keterangan tangkapan
  - Bendera OCG (jika suspek berada dalam pasukan OCG)

Webhook Discord dicetuskan untuk log tangkapan.

### Tangkapan berasaskan jarak

Pegawai boleh menggunakan `ArrestPlayerByDistance` — menangkap seseorang dalam lingkungan tanpa menggarinya secara fizikal. Digunakan untuk situasi di mana suspek sudah tumbang atau akur dari jauh.

---

## Bagaimana rasa ditangkap (perspektif suspek)

- Pasukan anda bertukar kepada **Arrested** (Bright violet).
- **BlindedLayer** menutup skrin anda (anda ditutup mata).
- **ArrestedGUI** menunjukkan:
  - Maklumat pegawai yang menangkap
  - Kiraan detik 3 minit sebelum pelepasan
  - Nombor rujukan anda
- Pergerakan disekat; alat dinyahaktifkan.

Selepas 3 minit, permainan membebaskan anda secara automatik dan anda boleh memilih pasukan semula.

---

## LTAA — Leave To Avoid Arrest

**Memutuskan sambungan semasa ditahan** dipanggil LTAA, dan ia dikuatkuasakan:

- Permainan mengesan bahawa anda keluar semasa ditahan atau tumbang.
- Tangkapan anda **dikenakan secara auto** — pemasa 3 minit bermula.
- Rekod tangkapan disimpan ke pangkalan data permainan.
- Apabila anda masuk semula — walaupun beberapa minit kemudian, walaupun dalam sesi berbeza — anda kembali dalam penjara dengan baki masa.

Jangan rage-quit semasa tangkapan. Ia akan mengikut anda.

**Turut terpakai jika tercedera dan keluar.** Jika seseorang menumbangkan anda dan anda keluar, penjejak LTAA akan menangkapnya.

---

## RTAA — Reset To Avoid Arrest

**Me-reset watak anda** untuk melepaskan diri daripada tahanan / tangkapan ialah eksploit yang diketahui. Kini:

- **Butang reset dinyahaktifkan secara automatik** apabila HP anda pada 75 atau kurang.
- Anda secara fizikal tidak boleh reset sehingga anda regen atau dipulihkan.

Ini menghapuskan laluan keluar RTAA sepenuhnya.

---

## Saman

Polis boleh mengeluarkan **saman** — denda serta-merta untuk kesalahan lalu lintas atau kesalahan kecil.

- Pegawai menggunakan alat **Saman** (memerlukan POLIS sebarang pangkat, atau Polis Bantuan pangkat 2+).
- Denda **dipotong serta-merta** daripada baki BR anda (denda maksimum setiap saman: **1,000 BR**).
- Anda menerima notifikasi toast popup.
- Jumlah denda, sebab, dan nombor rujukan muncul dalam GUI **SummonsView** anda — semak imbas sejarah penuh dengan penomboran.
- Pegawai dihadkan kepada satu saman setiap **10 saat**.

Anda tidak boleh membantah atau menolak — ia sudah dibayar. Jika anda fikir saman itu tidak adil, buat rayuan melalui pelayan komuniti (semakan moderator).

---

## Geledah

Pegawai boleh meminta untuk menggeledah anda dengan alat **Search**:

- Anda mendapat **popup persetujuan** (GUI Searchee) dengan butang Ya / Tidak.
- Jika anda bersetuju, pegawai melihat beg galas / poket anda.
- Jika anda menolak, pegawai tidak boleh melihat ke dalam (melainkan mereka mempunyai sebab munasabah — peraturan roleplay).

---

## Cap jari

Alat **FingerPrint Scanner** — mengenal pasti anda. Muncul dalam UI pegawai.

## Cara keluar daripada masalah

- **Tunggu sampai habis 3 minit.**
- **Buat rayuan** melalui pelayan komuniti Malaysia — moderator mengendalikan pertikaian dan larangan.
- **Kekal dalam watak** — merayu kepada pegawai, menawarkan rasuah (dalam roleplay), atau sekadar menerima tangkapan adalah semua sah.

## Apa yang TIDAK BOLEH buat

Mengikut [Peraturan](/bandaraya/rules), perkara berikut akan menyebabkan anda dilarang selain daripada tangkapan:

- **LTAA** (leave to avoid arrest) — pelanggaran umum
- **RTAA** (reset to avoid arrest) — pelanggaran umum, walaupun butang reset kini anti-RTAA
- **Glitching menembus dinding / melepaskan diri dari kawasan terhad** — pelanggaran umum
- **Glitching atau menyalahguna alat semasa ditahan atau ditangkap** — pelanggaran umum
- **Bertindak rogue sebagai pasukan perkhidmatan awam** — pelanggaran berat

---

## Tip & jerangkap

- **Bekerjasama.** Anda akan dibebaskan dalam 3 minit. Menentang tangkapan dari sudut roleplay akan memburukkan keadaan.
- **Jangan LTAA.** Pemasa berterusan merentas sesi. Anda tidak melepaskan diri daripada apa-apa.
- **Pegawai, log tindakan anda.** Rekod tangkapan dijejaki; pastikan keterangan pendek dan faktual (ia masuk ke dalam rekod secara kekal).
- **Ahli OCG akan ditanda** — rekod tangkapan membawa bendera `IsOCG`. Pegawai melihat ini dalam MDT.
- **Gunakan MDT** — aplikasi tablet polis membolehkan anda BG-check suspek, semak BOLO, dan mengeluarkan BOLO sendiri. Lihat [Tablet](/bandaraya/tablet).
- **Rayuan wujud** — jika anda fikir anda ditangkap secara salah, teruskan di pelayan komuniti. Pasukan moderasi permainan mengendalikannya.

## Lihat juga

- [Perkhidmatan Kecemasan](/bandaraya/emergency-services) — alat dan aliran POLIS
- [Tablet](/bandaraya/tablet) — aplikasi MDT untuk pegawai
- [Peraturan](/bandaraya/rules) — teks peraturan penuh, akibat LTAA/RTAA
- [Pertempuran & Kesihatan](/bandaraya/combat-and-health) — reset dinyahaktifkan pada HP rendah
- [Pasukan](/bandaraya/teams) — pasukan mana yang mendapat kuasa tangkapan
- [Glosari](/bandaraya/glossary) — LTAA, RTAA, MDT, BOLO
