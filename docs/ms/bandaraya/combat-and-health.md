---
title: Pertempuran & Kesihatan
description: 'Senjata, perisai, kecederaan, dan sistem perubatan di Bandaraya.'
lang: ms
translated_from_hash: '56782173'
translated_on: '2026-04-21'
needs_review: true
---
# Pertempuran & Kesihatan

Bandaraya menggunakan **ACS (Advanced Combat System)** untuk senjata dan sistem kesihatan yang terperinci (nama dalaman: **Saude**, bahasa Portugis untuk "kesihatan"). Halaman ini menerangkan apa yang berlaku apabila peluru berterbangan dan apabila darah mengalir — dari kedua-dua belah pihak.

## TL;DR

- Kebanyakan orang awam tidak boleh membawa senjata api. Anda perlukan **gamepass Firearms Licence** (1,250 R$), atau anda perlu berada dalam pasukan yang mengeluarkannya (POLIS, KPTD, MAF, Developers, Moderation, Yang di-Pertuan Persekutuan).
- Peluru menembusi bahagian yang lutsinar / tidak berlanggar / **Glass / Ignorable**. Ia berhenti pada bahagian **Armor / EShield**. Sesetengah kenderaan kalis peluru.
- Apabila cedera: anda kehilangan **darah** (Sangue) dan dapat **kesakitan** (Dor). Berdarah, bidai, balut. Paramedik (KKM / SJAM) boleh menstabilkan anda.
- **Butang reset dilumpuhkan pada 75 HP atau lebih rendah** — anda tidak boleh bunuh diri untuk lepaskan diri daripada situasi susah.
- **Pemasa bleedout ialah 5 minit apabila KKM atau SJAM berada dalam talian.** Regenerasi HP pasif juga dilumpuhkan semasa paramedik bertugas. Jika tiada paramedik menyelamatkan anda tepat pada masanya, anda akan respawn.

---

## Senjata

### Cara mendapatkan senjata

| Sumber | Keperluan |
| --- | --- |
| **Ammulaysia (Gun Dealer)** | Gamepass Firearms Licence (1,250 R$). Sah, tidak menyalahi undang-undang. Cooldown 5 minit antara pembelian. |
| **Illegal Dealer (Hacker)** | Pasaran gelap. Cooldown 5 minit (juga reset jika anda reset/rejoin). |
| **Team issue** | POLIS (X26P, CL2), KPTD (X26P TAC), MAF GGK/UTK (pelbagai), Developers / Moderation (HK-P30L), Yang di-Pertuan Persekutuan (Glock 19, M4A1, MP5A3). |
| **Armoury** | Armoury berpagar pasukan di IPD Dang Wangi dan pangkalan lain. |

Orang awam tidak boleh berjalan-jalan dengan rifle. Firearms Licence membuka Ammulaysia untuk senjata sampingan; pasukan mendapat senjata bertugas.

### Menembak (asas ACS)

- **Klik kiri** untuk tembak.
- **R** untuk muat semula.
- **B** (atau khusus tool) untuk sarungkan.
- Recoil, serakan, dan kadar tembakan berbeza mengikut senjata.
- Tembakan sambil berlari kurang tepat berbanding tembakan yang dibidik.

ACS telah diuji dalam pertempuran — DPS biasa adalah sehingga ~1500 dengan senjata sah, puncak ~3000. Anti-cheat telah ditala untuk membolehkan pertempuran sebenar tanpa kick pemain sah.

### Penembusan peluru

Peluru yang menembusi bahagian bergantung pada jenis bahagian tersebut:

- **Menembusi** sebarang bahagian yang:
  - **Transparent**
  - **Non-colliding**
  - Dinamakan **Glass** atau **Ignorable**
- **Berhenti pada** sebarang bahagian yang dinamakan:
  - **Armor** — sentiasa menghalang peluru
  - **EShield** — perisai tenaga, menghalang peluru

Ini penting untuk perlindungan: dinding setinggi dada mungkin tidak menghentikan peluru jika ia lutsinar; pagar kayu akan menghentikannya jika ia boleh berlanggar.

### Kenderaan kalis peluru

Sesetengah kenderaan mempunyai bahagian `Armor` yang diletakkan di sekeliling kabin — ia **kalis peluru sepenuhnya** di dalam.

- **AV4** (POLIS) — 29 bahagian perisai di sekeliling kabin
- **V150** (POLIS)
- **Variasi UTK Hilux** — kabin kalis peluru

Kereta awam biasa **tidak** kalis peluru. Proton Persona tidak akan menghentikan peluru.

---

## Perisai yang anda pakai

Perisai badan dimodelkan melalui `Protecao` (bahasa Portugis untuk "perlindungan"):

| Item | Fungsi |
| --- | --- |
| **Vest** | Perlindungan torso. Ketahanan + pengurangan kerosakan setiap hit. |
| **Helmet** | Perlindungan kepala. Tanpa helmet, headshot adalah maut serta-merta. |
| **Blast protection** | Mengurangkan kerosakan letupan (kedua-dua vest dan helmet mempunyai stat blast). |

**Tip:** motosikal dulu bunuh anda serta-merta tanpa helmet. Itu telah dibuang, tetapi helmet masih berbaloi dipakai untuk perlindungan headshot.

Perisai haus dengan hit; dapatkan gantian di armoury atau kawasan staging.

---

## Menerima kerosakan

Bandaraya memodelkan kesihatan sebagai tiga dimensi, bukan hanya HP:

| Stat | Apakah ia | Bila ia penting |
| --- | --- | --- |
| **Sangue** (Darah) | Tahap darah, 0–100 | Menurun apabila anda berdarah. Pada 0, jantung anda berhenti. |
| **Dor** (Kesakitan) | Tahap kesakitan | Kesakitan tinggi mengaburkan skrin anda dan memperlahankan anda. |
| **HP** (Humanoid) | Kesihatan Roblox standard | Menurun ke 0 membunuh anda terus. |

Tambah stamina, oksigen, dan pelbagai posisi (berlari, menyerah, digari, berdarah, tumbang, dll.).

### Keadaan yang anda boleh masuki

| Keadaan | Maksudnya | Bagaimana anda sampai ke sana |
| --- | --- | --- |
| **Ferido** (Cedera) | Di bawah kesihatan penuh | Sebarang kerosakan |
| **Sangrando** (Berdarah) | Aktif kehilangan darah | Tembakan, trauma besar |
| **Caido** (Tumbang) | Lumpuh, tidak mati | Kerosakan serius; boleh dihidupkan semula |
| **Balloonbleed / bbleeding** | Pendarahan kritikal | Luka majmuk |
| **Dead** | RIP | Caido terlalu lama, atau HP 0 |

### Kesan visual apabila cedera

| Kesan | Bila ia berlaku |
| --- | --- |
| Blur | Kesakitan / kecederaan |
| Desaturasi pembetulan warna | Kehilangan darah |
| Vignette (sudut menjadi gelap) | Kesihatan rendah |
| Lapisan kotor | Kecederaan / kerosakan pertempuran |

---

## Item kit perubatan

Terletak dalam kit anda jika anda mempunyai akses pasukan/tool yang betul. Senarai penuh:

### Kesakitan & perangsang

| Item | Tujuan |
| --- | --- |
| **Morfina** | Morfin — pelega kesakitan |
| **Epinefrina** | Epinefrin — perangsang, membantu menghidupkan semula |
| **Aspirina** | Aspirin — pelega kesakitan ringan |
| **Energetico** | Minuman tenaga — stamina |

### Darah & IV

| Item | Tujuan |
| --- | --- |
| **SacoDeSangue** | Beg darah — memulihkan isipadu darah |
| **Catheter** | Kateter IV |

### Rawatan luka

| Item | Tujuan |
| --- | --- |
| **Bandagem** | Pembalut — membalut luka, memperlahankan pendarahan |
| **Tourniquet** | Tourniquet penuh — menghentikan pendarahan pada anggota |
| **Splint** | Menstabilkan patah tulang |
| **Prolene / Nylon** | Bahan jahitan |

### Saluran udara (lanjutan, KKM)

| Item | Tujuan |
| --- | --- |
| **ETube** | Tiub endotrakeal |
| **NPA** | Saluran udara nasofaring |
| **BVM** | Bag valve mask |
| **NRB** | Topeng non-rebreather |
| **O2** | Bekalan oksigen |
| **Suction** | Membersihkan saluran udara |

### Pembedahan (lanjutan, KKM)

| Item | Tujuan |
| --- | --- |
| **Scalpel** | Memotong |
| **Clamp** | Pengapit pembedahan |
| **Anesthetic** | Ubat bius |
| **Skit** | Kit pembedahan |

### Lain-lain

| Item | Tujuan |
| --- | --- |
| **Defib** | Defibrilator — menghidupkan semula jantung yang terhenti |

---

## Mendapat rawatan

### Rawatan sendiri (orang awam)

- **Regenerasi pasif:** 1% HP maksimum sesaat (digunakan dalam tick 3 saat sebanyak 3% setiap satu) apabila tidak sedang dirawat secara aktif (`TraumaKitHealing` menjedakannya) dan tidak berdarah.
- **Balut diri sendiri** — memperlahankan pendarahan, menambah sedikit HP.
- **Minuman / makanan** — peningkatan kecil.

### Rawatan paramedik (KKM / SJAM)

Seorang paramedik boleh:

1. **Menghentikan pendarahan** dengan tourniquet atau pembalut.
2. **Memulihkan darah** dengan beg darah.
3. **Melegakan kesakitan** dengan morfin.
4. **Defib** jika jantung anda terhenti.
5. **Melakukan pembedahan** (KKM sahaja) — scalpel, ubat bius, jahitan.

Duduk diam dan jangan lari.

### Pemasa bleedout

- **KKM atau SJAM dalam talian** (pasukan: Institutional white / Forest green): Tetingkap bleedout 5 minit setelah tumbang. Regenerasi pasif dilumpuhkan — paramedik yang perlu menyelamatkan anda.
- **Tiada paramedik dalam talian:** anda boleh respawn bila-bila masa (permainan tidak menahan anda sebagai tebusan jika tiada paramedik).

### Butang reset

Butang reset **dilumpuhkan pada 75 HP atau lebih rendah** — ini untuk menghentikan **RTAA** (reset untuk elak penahanan). Jika anda cedera, lawan terus atau tunggu paramedik.

Lihat [Penahanan & Undang-Undang](/bandaraya/arrest-and-law#rtaa).

---

## Hardpoint — mod permainan rampasan / serbuan

**Hardpoint** ialah mod permainan titik rampasan yang dikhaskan hampir keseluruhannya untuk acara kumpulan **OCG vs OCG**. Ia bukan ciri harian — ia berjalan apabila seorang ketua OCG mencetuskan serbuan.

Cara ia berfungsi (disahkan):

- Seorang ketua OCG (rank 150+ dalam kumpulan OCG utama) menaip **`:startraid <Defenders> <Hostiles>`** dalam chat, memilih dua daripada: `BC` (Basilicata Camorra), `OCG-Beta`, `Nightraiders`, `Ekstranet`.
- **Point** (pencetus rampasan dalam `Workspace.HardPoints`) diaktifkan — menjadi kelihatan, pencetus menjadi solid.
- Pemain dalam kumpulan pembela / musuh yang ditetapkan menyentuh pencetus untuk merampas untuk pasukan mereka. Pemain mati tidak boleh merampas (`DeathCap = false`).
- **Pemasa:** 300 saat pada titik aktif. Pasukan mengumpul skor semasa mereka memegangnya.
- **Ambang kemenangan:** 1250 mata, atau admin OCG menaip **`:cancelraid`**.
- **HardpointUI** menunjukkan dua bar kemajuan (Home / Away) + bingkai pengumuman + skor + pemasa.

Jika anda bukan OCG, anda boleh menonton tetapi tidak boleh menjaringkan. POLIS / KPTD / BOMBA / KKM tidak mengambil bahagian.

---

## Tip & perangkap

- **Perlindungan tidak semestinya jelas.** Bahagian lutsinar tidak menghentikan peluru. Mencangkung di belakang sesuatu yang padu dan dinamakan.
- **Helmet selamatkan kepala.** Jika anda akan masuk baku tembak, pakai satu.
- **KKM atau SJAM dalam talian bermaksud bleedout 5 minit.** Jika tiada pasukan paramedik dalam talian, anda boleh respawn lebih cepat.
- **Reset adalah anti-RTAA pada 75 HP atau lebih rendah.** Jangan cuba.
- **Stat kesakitan anda kekal sehingga dirawat.** Blur dan perlahan akan kekal.
- **Jangan tembak dulu sebagai pasukan perkhidmatan awam.** Itu pelanggaran teruk.
- **Cooldown kedai senjata.** 5 minit antara pembelian di Ammulaysia dan Illegal Dealer. Cooldown juga reset semasa rejoin untuk menghentikan penyalahgunaan.

## Lihat juga

- [Penahanan & Undang-Undang](/bandaraya/arrest-and-law) — penahanan, mekanik penangkapan, LTAA / RTAA
- [Perkhidmatan Kecemasan](/bandaraya/emergency-services) — peranan KKM + SJAM
- [Ekonomi](/bandaraya/economy) — kedai Ammulaysia dan Illegal Dealer
- [Gamepass](/bandaraya/gamepasses) — Firearms Licence
- [Kenderaan](/bandaraya/vehicles) — senarai kenderaan kalis peluru
- [Peraturan](/bandaraya/rules) — etika pertempuran dan pelanggaran teruk
