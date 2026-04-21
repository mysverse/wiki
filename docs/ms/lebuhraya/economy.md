---
title: Ekonomi & XP
description: >-
  Ringgit (BR), tahap 1-500, pendaraban XP, dan cara terpantas untuk memperoleh
  di Lebuhraya.
lang: ms
translated_from_hash: 5542a6bf
translated_on: '2026-04-21'
needs_review: true
---
# Ekonomi & XP

Segala-galanya di Lebuhraya berkisar pada dua nombor: **Ringgit (BR)** anda dan **tahap** anda. Halaman ini menerangkan cara kedua-duanya berfungsi, dari mana ia datang, dan bagaimana untuk memperoleh dengan lebih pantas.

## Ringgit (BR) — dijejaki tetapi belum aktif

Sistem mata wang Lebuhraya **dilaksanakan sebahagian sahaja**. Akaun anda memang membawa baki BR (bermula pada **1000** dan berkekalan merentasi sesi), tetapi dalam versi permainan semasa:

- **Tiada apa-apa di Lebuhraya memaparkan baki BR anda.** Tiada bacaan HUD, tiada entri leaderstat, tiada aplikasi Phone yang menunjukkannya. Satu-satunya skrip yang membaca baki anda ialah alat admin khusus kakitangan di dalam aplikasi Tablet.
- **Satu-satunya laluan pendapatan aktif ialah perlumbaan.** Memenangi perlumbaan memanggil `Currency.Debit` dan mengkreditkan akaun anda. Setiap "pembayaran" lain yang anda jangkakan (Food Delivery, gaji Post Office, yuran tunda, jualan minyak, pembelian kedai, kos pembaikan) kini menjadi no-op di Lebuhraya — hooknya wujud tetapi dikomen, distub, atau dipintas.
- **Tiada apa-apa di Lebuhraya membelanjakan BR.** Kedai adalah percuma. Pam minyak tidak mengenakan caj. Tol tidak mengenakan caj. Zon pembaikan tidak mengenakan caj. Perabot perumahan tidak mengenakan caj. Pembangun telah menyediakan infrastrukturnya dan banyak sistem kerja mempunyai cabang `rewardMode = "BR"` yang ditinggalkan sebagai TODO.
- **Pembilang per-kerja dalaman adalah berasingan.** Post Office mengira nilai `Salary`, tetapi ia disimpan dalam DataStore kerja itu sendiri, bukan dalam akaun BR anda.

**Apa ertinya ini kepada anda**: jangan rancang permainan anda berdasarkan BR. Pilih kerja berdasarkan kadar XPnya, pilih kenderaan berdasarkan cara ia dipandu (bukan harga), dan nikmati semuanya secara percuma buat masa sekarang. Apabila BR aktif kelak, baki anda dari perlumbaan akan dibawa ke hadapan.

### Apa yang dijejaki sekarang

- Baki permulaan: **1000 BR** (dikongsi merentasi sesi MYSverse Lebuhraya, disimpan di bawah kunci DataStore2 `ringgit`).
- Sumber pendapatan aktif: Ganjaran perlumbaan sahaja.
- Sumber perbelanjaan aktif: tiada dalam kod khusus Lebuhraya.
- Sistem MYSverse berkongsi (Dealership, Tow, TapNGo) mengandungi logik perbelanjaan langsung yang mungkin atau mungkin tidak dicetus di Lebuhraya — anda tidak akan nampak caj di skrin walau apa-apa pun.

### Apa yang akan guna BR kelak (dirancang)

Berdasarkan petunjuk dalam kod, yang berikut telah dirancang tetapi belum disambung:

- Pembayaran minyak di PETROMAS / Radtrol (harga sudah ditakrifkan: 1/2/3 BR/L)
- Pembelian kedai (item kedai mempunyai medan `Price`)
- Food Delivery, Checkout, Lumberjack, Fishing — semuanya mempunyai cabang ganjaran `BR` / `Both` kosong
- Gaji Post Office yang disambung ke akaun BR sebenar
- Dealership kenderaan / pembelian
- Kos pembaikan di zon pembaikan

## Tahap dan XP

Terdapat **500 tahap**. Setiap tahap memerlukan **1000 XP** untuk dilengkapkan. Had tahap adalah tetap — anda tidak boleh naik tahap melepasi 500, tetapi XP terus bertambah ke arah lencana dan tier kerjaya selepas itu.

### Memperoleh XP

Terdapat dua jenis XP:

**XP Pemanduan (pasif).** Setiap kali anda memandu **1500 stud** di tempat duduk pemandu, anda memperoleh **50 XP**. Pembilang hanya bergerak semasa anda berada di tempat duduk dan bergerak lebih laju daripada berjalan — kereta yang berhenti tidak memperoleh XP. Ini adalah sumber XP terbesar tunggal untuk kebanyakan pemain, terutamanya pada tahap awal.

**XP Kerja (aktif).** Setiap tindakan kerja yang dilengkapkan memberikan sebahagian XP.

| Kerja | Ganjaran XP |
|---|---|
| Food Delivery | **250 XP** setiap penghantaran |
| Taxi | Berubah-ubah — kira-kira **0.11 hingga 0.13 XP setiap stud** perjalanan (perjalanan 4000-stud = 440 hingga 520 XP) |
| Kerja lain | Lihat [Jobs](/lebuhraya/jobs) untuk butiran setiap kerja |

### Tindanan pendarab XP

Pelbagai bonus ditindan **secara tambahan** di atas pendarab asas ×1 anda. Pendarab akhir dikenakan pada setiap ganjaran XP.

| Sumber | Bonus |
|---|---|
| Hujung minggu XP Berganda (acara berkala) | Pendarab ditetapkan kepada ×2 |
| Gamepass XP Boost | +50% |
| Keahlian Roblox Premium | +25% |
| Injury System diaktifkan | +15% |
| Token XP Boost (boleh guna) | +100% |
| Bonus Convoy (sehingga) | +50% |

Jadi pemain Premium dalam konvoi penuh semasa hujung minggu XP berganda, dengan token XP Boost aktif, boleh mencapai jauh melebihi pendarab ×3. Menindan semua ini adalah cara terpantas untuk mencapai tahap 500.

### Pecahan bonus convoy

Bonus convoy ditindan dengan caranya sendiri:

- **Bonus asas** untuk berada dalam convoy: +15%
- **Setiap ahli tambahan** (melebihi dua): +5% setiap seorang
- **Rakan dalam convoy**: +10%
- **Pasukan sama dalam convoy**: +10%
- **Bonus streak** (masa dihabiskan dalam convoy): +2% seminit, sehingga +10%

Jumlah pendarab convoy dihadkan pada **+50%**.

## Apa yang reset dan apa yang disimpan

- **Permainan langsung**: Tahap, XP, BR, kenderaan, perumahan — semuanya disimpan secara automatik apabila anda meninggalkan server. Anda tidak perlu menyimpan secara manual.
- **Studio / server ujian**: XP reset kepada 0 apabila anda masuk. Mesej amaran akan muncul. Ini adalah normal — kemajuan langsung anda tidak terjejas.
- **Server peribadi**: Ekonomi dimatikan jadi baki anda tidak berubah, tetapi tiada apa-apa hilang dalam permainan utama.

> Jika anda kakitangan yang menggunakan Fast Travel, ambil perhatian bahawa XP berdasarkan jarak dihentikan seketika selama 5 minit selepas setiap fast-travel untuk mengelakkan herotan. Pemain biasa tidak mempunyai akses kepada Fast Travel, jadi cooldown ini tidak terpakai kepada mereka.

## Petua untuk naik tahap dengan pantas

1. **Kekal di tempat duduk pemandu pada laluan panjang.** Pemanduan jarak jauh adalah sumber tunggal terbesar XP pasif.
2. **Lakukan Food Delivery bermula pada Tahap 10.** 250 XP setiap penghantaran adalah kadar rata terbaik sehingga tier lebih tinggi terbuka.
3. **Convoy bersama sekurang-kurangnya seorang rakan dalam pasukan sama.** Mengaktifkan kedua-dua bonus rakan (+10%) dan bonus pasukan sama (+10%).
4. **Langgan Roblox Premium.** +25% XP pada segala yang anda lakukan.
5. **Simpan token XP Boost untuk sesi panjang.** +100% berdasarkan tempoh, jadi gunakannya semasa blok komitmen (sepanjang petang perlumbaan atau penghantaran).
6. **Acara hujung minggu** kadangkala menggandakan XP untuk semua orang. Perhatikan pengumuman.

## Langkah seterusnya

- [Vehicles](/lebuhraya/vehicles) — Harga minyak dan pemilikan
- [Jobs](/lebuhraya/jobs) — Pecahan XP / BR setiap kerja
- [Passes and Boosts](/lebuhraya/passes-and-boosts) — Cara mendapatkan gamepass XP Boost
