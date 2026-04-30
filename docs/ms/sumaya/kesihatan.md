---
title: Kesihatan
description: >-
  Bermain sebagai Kesihatan di Sumaya — ambulans, rawatan, dan menghidupkan
  semula.
lang: ms
translated_from_hash: 48961d5b
translated_on: '2026-04-30'
needs_review: true
---


# Kesihatan

**Kesihatan** ("keh-see-ha-tan") ialah perkhidmatan perubatan Sumaya. Doktor, jururawat, paramedik. Jika anda memilih Kesihatan dari menu utama, anda menjadi pekerja perubatan yang bertugas sebaik sahaja anda spawn.

Kesihatan juga istimewa kerana **kerja anda menggalakkan seluruh pelayan**. Teruskan membaca.

## Bermula

Pilih **Kesihatan** pada menu utama. Kit perubatan anda spawn dalam beg galas anda: first aid kit, Bandage, Splint, dan banyak lagi yang dibuka mengikut tahap.

Pergi ke hospital untuk lebih banyak alat dan peralatan, atau respons kepada panggilan 999 dan insiden lapangan.

## Sistem kecederaan

Permainan teras Kesihatan adalah merawat **kecederaan** - kerosakan yang dialami oleh pemain atau NPC yang tidak boleh disembuhkan dengan respawn semata-mata.

### Apabila sistem kecederaan aktif

Sistem kecederaan **auto-aktif setiap kali sekurang-kurangnya seorang pemain Kesihatan berada di pelayan** — semata-mata dengan berada dalam pasukan, anda menghidupkan suis untuk semua orang. Apabila ia hidup:

- Pemain dan NPC boleh mengalami kecederaan sebenar dan bukan mati serta-merta.
- Kecederaan memerlukan rawatan perubatan untuk sembuh.
- **Setiap pemain di pelayan mendapat +15% XP tahap pemain** (XP sektor tidak terjejas).
- Setiap watak pemain membawa atribut `InjurySystemEnabled = true` semasa sistem aktif.

Pelayan menyahaktifkan sistem kecederaan sebaik sahaja pemain Kesihatan terakhir keluar. Jadi sekadar log masuk sebagai Kesihatan sudah cukup untuk "mengaktifkan" ia — tiada togol manual diperlukan. Galakan +15% XP itu adalah satu perkara besar: ia terpakai pada setiap kerja, setiap penangkapan, setiap penuaian - jadi apabila Kesihatan hidup, seluruh pelayan mendapat manfaat. Ini adalah sebab tunggal terbesar untuk mempunyai pemain perubatan.

### Jenis kecederaan

| Kecederaan | Apa itu | Rawatan |
|--------|------------|-----------|
| Luka kecil / lebam | Calar, luka kecil | Bandage |
| Broken arm | Memperlahankan animasi tangan, menjejaskan alat tertentu | Splint |
| Broken leg | Mengurangkan kelajuan berjalan kepada 30% | Splint |
| Traumatic Brain Injury (TBI) | Teruk; memerlukan rehat di katil | Katil perubatan + masa |

### Diagnosis

Anda tidak boleh menyembuhkan seseorang sehingga anda tahu apa masalahnya.

1. Lengkapkan **First Aid Kit**.
2. Berdiri dalam jarak **10 studs** dari pesakit.
3. Gunakan kit. Diagnosis mengambil masa kira-kira **2 seconds**.
4. Kecederaan pesakit dipaparkan.

**Ganjaran:** 15 XP setiap diagnosis.

### Bandage (luka kecil)

1. Lengkapkan alat **Bandage**.
2. Berdiri dalam jarak 10 studs dari pesakit.
3. Gunakan alat. Mengambil masa kira-kira 3 seconds.
4. Luka sembuh. Bandage kekal 5 minit pada watak, kemudian pudar.

**Ganjaran:** 30 XP + 100 Ringgit.

### Splint (tulang patah)

1. Lengkapkan **Splint**.
2. Berdiri dalam jarak 10 studs.
3. Sapukan. Mengambil masa kira-kira 5 seconds.
4. Kelajuan berjalan kembali normal.

**Ganjaran:** 40 XP + 200 Ringgit.

### Pengimejan (X-Ray dan MRI)

Untuk pengesahan diagnosis bagi kecederaan serius, gunakan mesin pengimejan di hospital:

- **Mesin X-Ray:** mengesahkan tulang patah.
- **Mesin MRI:** mengesahkan TBI.

Mana-mana diagnosis membayar **20 XP**.

### TBI dan katil perubatan

TBI adalah kecederaan paling serius. Rawatan memerlukan pesakit untuk **berbaring di atas katil perubatan** selama kira-kira **30 seconds** rehat di katil, yang menyembuhkannya secara beransur-ansur.

Hospital mempunyai beberapa katil perubatan, ditambah mesin X-Ray, mesin MRI, dan Stretcher untuk mengangkut pesakit.

## Ringkasan ganjaran

| Tindakan | XP | Ringgit |
|--------|-----|---------|
| Diagnosis pertolongan cemas | 15 | 0 |
| Penyembuhan Bandage | 30 | 100 |
| Penyembuhan Splint | 40 | 200 |
| Diagnosis X-Ray | 20 | 0 |
| Diagnosis MRI | 20 | 0 |

Tambahan:

- **+150 Ringgit bonus setiap 10 rawatan.**

## Kenderaan

Ambulans Kesihatan dibuka apabila tahap sektor anda meningkat.

| Kenderaan | Tahap sektor diperlukan | Harga |
|---------|----------------------|-------|
| Tayoti Hiace KKN Ambulance | 1 | Percuma |
| Tayoti Hilux KKN Ambulance | 20 | 8,000 Ringgit |
| Handai City KKN Ambulance | 45 | 12,000 Ringgit |

KKN bermaksud Kementerian Kesihatan Nasional (National Ministry of Health). Setiap ambulans mempunyai siren dan ruang kargo belakang (untuk Stretcher).

Lihat [Vehicles](/sumaya/vehicles) untuk cara spawn mereka.

## Pangkat

Kesihatan mempunyai 13 pangkat, secara longgar berdasarkan jawatan penjagaan kesihatan Malaysia sebenar. Tajuk anda dikemas kini secara automatik apabila tahap sektor anda meningkat.

| Tahap | Pangkat |
|-------|------|
| 1 | Medical Trainee |
| 6 | House Officer |
| 11 | Nurse |
| 16 | Medical Officer |
| 21 | Assistant Medical Officer |
| 26 | Senior Assistant Medical Officer |
| 31 | Deputy Chief Assistant Medical Officer |
| 36 | Chief Assistant Medical Officer |
| 41 | Deputy Director of Health |
| 49 | Director of Health |
| 57 | Senior Director of Health |
| 66 | Deputy Director General of Health |
| 81 | Director General of Health |

Dari tahap 81 ke atas, anda berada di kemuncak. Tiada perubahan pangkat lagi semasa anda menolak ke had tahap 100.

## Tip

- **Aktifkan sistem kecederaan untuk pelayan.** Galakan +15% XP menjejaskan semua orang, termasuk anda. Seluruh pelayan mendapat manfaat dan akan terus kembali untuk rawatan.
- **Kem di hospital awal-awal.** Kebanyakan kecederaan masuk melalui ambulans atau aplikasi 999. Berada dekat dengan hospital bermakna pusing ganti lebih cepat dan lebih banyak XP.
- **Broken leg adalah hari gaji yang mudah.** Mereka tidak boleh berjalan dengan baik, mereka mudah dikesan, dan Splint membayar 200 Ringgit.
- **TBI adalah perlahan tetapi bernilai tinggi.** Semasa rehat katil 30-saat sedang berjalan, anda boleh mendiagnosis dan merawat pesakit lain. Jangan hanya berdiri dan menonton.
- **Acara mangsa beramai-ramai.** Jika ada kemalangan atau insiden besar, banyak mangsa bermakna banyak bayaran cepat. Bawa Stretcher.
- **Bekerja dengan Bomba.** Bomba terbakar; selepas anda padamkan kebakaran, jangkakan pelanggan Bandage. Bonus: berdiri dalam jarak 512 studs dari kebakaran aktif memperolehi anda **10 player XP per block extinguished** (player XP sahaja, tiada SR) - jadi mengkem di kebakaran adalah XP pasif percuma untuk Kesihatan.

## Apa seterusnya?

- [Polis](/sumaya/polis) untuk sisi penguatkuasaan undang-undang.
- [Bomba](/sumaya/bomba) untuk rakan sejawat bomba.
- [Vehicles](/sumaya/vehicles) untuk senarai ambulans.
- [Progression](/sumaya/progression) untuk cara XP berkompaun.
