---
title: Kesihatan
description: >-
  Bermain sebagai Kesihatan di Sumaya — ambulans, rawatan, dan menghidupkan
  semula.
lang: ms
translated_from_hash: 9a0207af
translated_on: '2026-04-21'
needs_review: true
---
# Kesihatan

**Kesihatan** ("keh-see-ha-tan") ialah perkhidmatan perubatan Sumaya. Doktor, jururawat, paramedik. Jika anda memilih Kesihatan dari menu utama, anda menjadi pekerja perubatan yang bertugas sebaik sahaja anda spawn.

Kesihatan juga istimewa kerana **tugas anda memberi boost kepada seluruh server**. Teruskan membaca.

## Bermula

Pilih **Kesihatan** pada menu utama. Kit perubatan anda akan spawn dalam backpack: kit pertolongan cemas, pembalut, splint, dan banyak lagi yang boleh dibuka mengikut level.

Pergi ke hospital untuk lebih banyak alat dan kelengkapan, atau sambut panggilan 999 dan kejadian di lapangan.

## Sistem kecederaan

Gameplay utama Kesihatan adalah merawat **kecederaan** - kerosakan yang dialami oleh pemain atau NPC yang tidak boleh disembuhkan hanya dengan respawn.

### Bila sistem kecederaan aktif

Sistem kecederaan **auto-aktif setiap kali sekurang-kurangnya seorang pemain Kesihatan berada di server** — sekadar berada dalam pasukan, anda sudah mengaktifkan suis untuk semua orang. Apabila ia aktif:

- Pemain dan NPC boleh mengalami kecederaan sebenar dan bukan terus mati.
- Kecederaan memerlukan rawatan perubatan untuk sembuh.
- **Setiap pemain di server mendapat +15% XP peringkat pemain** (XP sektor tidak terjejas).
- Setiap karakter pemain membawa atribut `InjurySystemEnabled = true` semasa sistem aktif.

Server akan menyahaktifkan sistem kecederaan sebaik sahaja pemain Kesihatan terakhir keluar. Jadi sekadar log masuk sebagai Kesihatan sudah cukup untuk "mengaktifkan" ia — tidak perlu toggle manual. Boost +15% XP itu sangat besar: ia dikenakan pada setiap tugas, setiap tangkapan, setiap tuaian - jadi bila Kesihatan aktif, seluruh server mendapat manfaat. Inilah sebab terbesar kenapa perlu ada pemain perubatan.

### Jenis kecederaan

| Kecederaan | Apa itu | Rawatan |
|--------|------------|-----------|
| Luka / lebam kecil | Calar, luka kecil | Pembalut |
| Tangan patah | Melambatkan animasi tangan, menjejaskan alat tertentu | Splint |
| Kaki patah | Mengurangkan kelajuan berjalan kepada 30% | Splint |
| Kecederaan Otak Traumatik (TBI) | Serius; memerlukan rehat di katil | Katil perubatan + masa |

### Diagnosis

Anda tidak boleh merawat seseorang sehingga anda tahu apa masalahnya.

1. Lengkapkan **First Aid Kit**.
2. Berdiri dalam jarak **10 stud** dari pesakit.
3. Guna kit tersebut. Diagnosis mengambil masa kira-kira **2 saat**.
4. Kecederaan pesakit akan dipaparkan.

**Ganjaran:** 15 XP setiap diagnosis.

### Pembalut (luka kecil)

1. Lengkapkan alat **Bandage**.
2. Berdiri dalam jarak 10 stud dari pesakit.
3. Guna alat itu. Mengambil masa kira-kira 3 saat.
4. Luka sembuh. Pembalut kekal 5 minit pada karakter, kemudian hilang.

**Ganjaran:** 30 XP + 100 Ringgit.

### Splint (tulang patah)

1. Lengkapkan **Splint**.
2. Berdiri dalam jarak 10 stud.
3. Sapu. Mengambil masa kira-kira 5 saat.
4. Kelajuan berjalan kembali normal.

**Ganjaran:** 40 XP + 200 Ringgit.

### Pengimejan (X-Ray dan MRI)

Untuk pengesahan diagnosis bagi kecederaan serius, guna mesin pengimejan di hospital:

- **Mesin X-Ray:** mengesahkan tulang patah.
- **Mesin MRI:** mengesahkan TBI.

Mana-mana diagnosis membayar **20 XP**.

### TBI dan katil perubatan

TBI ialah kecederaan paling serius. Rawatan memerlukan pesakit **berbaring di katil perubatan** selama kira-kira **30 saat** rehat katil, yang akan menyembuhkan mereka secara beransur-ansur.

Hospital mempunyai beberapa katil perubatan, serta mesin X-Ray, mesin MRI, dan pengusung untuk mengangkut pesakit.

## Ringkasan ganjaran

| Tindakan | XP | Ringgit |
|--------|-----|---------|
| Diagnosis pertolongan cemas | 15 | 0 |
| Rawatan pembalut | 30 | 100 |
| Rawatan splint | 40 | 200 |
| Diagnosis X-Ray | 20 | 0 |
| Diagnosis MRI | 20 | 0 |

Tambahan:

- **+150 Ringgit bonus setiap 10 rawatan.**

## Kenderaan

Ambulans Kesihatan akan dibuka apabila level sektor anda meningkat.

| Kenderaan | Level sektor diperlukan | Harga |
|---------|----------------------|-------|
| Tayoti Hiace KKN Ambulance | 1 | Percuma |
| Tayoti Hilux KKN Ambulance | 20 | 8,000 Ringgit |
| Handai City KKN Ambulance | 45 | 12,000 Ringgit |

KKN bermaksud Kementerian Kesihatan Nasional. Setiap ambulans mempunyai siren dan ruang kargo belakang (untuk pengusung).

Lihat [Vehicles](/sumaya/vehicles) untuk cara spawn mereka.

## Pangkat

Kesihatan mempunyai 13 pangkat, longgar berasaskan jawatan penjagaan kesihatan sebenar Malaysia. Gelaran anda akan dikemaskini secara automatik apabila level sektor anda meningkat.

| Level | Pangkat |
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

Dari level 81 ke atas, anda sudah di puncak. Tiada perubahan pangkat lagi selepas itu sehingga anda mencapai had level 100.

## Tip

- **Aktifkan sistem kecederaan untuk server.** Boost +15% XP itu memberi kesan kepada semua orang, termasuk anda. Seluruh server mendapat manfaat dan akan datang semula untuk rawatan.
- **Duduk dekat hospital awal-awal.** Kebanyakan kecederaan tiba melalui ambulans atau aplikasi 999. Berada dekat hospital bermakna giliran lebih cepat dan lebih banyak XP.
- **Kaki patah ialah pendapatan mudah.** Mereka tak boleh berjalan elok, mudah dikesan, dan splint bayar 200 Ringgit.
- **TBI lambat tetapi bernilai tinggi.** Semasa rehat katil 30 saat berjalan, anda boleh diagnosis dan rawat pesakit lain. Jangan cuma berdiri tengok.
- **Kejadian mangsa ramai.** Jika ada kemalangan atau insiden besar, banyak mangsa bermakna banyak bayaran cepat. Bawa pengusung.
- **Bekerjasama dengan Bomba.** Anggota bomba akan melecur; selepas anda padamkan kebakaran, jangkakan pelanggan pembalut.

## Apa seterusnya?

- [Polis](/sumaya/polis) untuk sisi penguatkuasa undang-undang.
- [Bomba](/sumaya/bomba) untuk rakan anggota bomba.
- [Vehicles](/sumaya/vehicles) untuk senarai ambulans.
- [Progression](/sumaya/progression) untuk bagaimana XP bergabung.
