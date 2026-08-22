# Arsitektur Rental Motor Bali

Dokumen ini menjelaskan lokasi tanggung jawab utama proyek agar perubahan dapat dilakukan dengan cepat dan konsisten.

## Gambaran singkat

Website ini adalah aplikasi Next.js App Router dengan TypeScript. Konten katalog dan kontak masih berupa data statis di folder `data/`; belum ada database, API route, atau CMS.

Alur halaman utama:

```text
app/page.tsx
  -> Navbar
  -> Hero
  -> FeatureBar
  -> MotorcycleSection
       -> data/motorcycles.ts
       -> MotorcycleCard
  -> Benefits
  -> RentalSteps
  -> Testimonial
  -> FAQ
  -> CTA
  -> Footer
  -> FloatingWhatsApp
```

Alur halaman detail:

```text
app/motor/[slug]/page.tsx
  -> cari motorcycle berdasarkan slug
  -> jika tidak ditemukan: notFound()
  -> tampilkan detail, harga, spesifikasi, dan CTA WhatsApp
```

## Struktur direktori

```text
app/
  layout.tsx              Root layout, font, metadata global, bahasa halaman
  page.tsx                Komposisi halaman beranda
  globals.css             Token warna dan style global
  motor/[slug]/page.tsx   Halaman detail motor dinamis

components/
  Navbar.tsx              Navigasi dan anchor halaman
  Hero.tsx                Area pembuka beranda
  FeatureBar.tsx          Ringkasan keunggulan layanan
  MotorcycleSection.tsx   Daftar motor dari data katalog
  MotorcycleCard.tsx      Kartu ringkas satu motor
  PricingTable.tsx        Tabel harga di halaman detail
  Benefits.tsx             Keuntungan menyewa
  RentalSteps.tsx          Langkah pemesanan
  Testimonial.tsx          Testimoni pelanggan
  FAQ.tsx                 Pertanyaan umum
  CTA.tsx                 Ajakan menghubungi bisnis
  Footer.tsx              Informasi footer
  FloatingWhatsApp.tsx    Tombol WhatsApp mengambang
  WhatsAppIcon.tsx        Ikon WhatsApp bersama

data/
  motorcycles.ts          Katalog motor, harga, dan helper harga
  site.ts                 Identitas bisnis, kontak, dan helper URL WhatsApp

types/
  motorcycle.ts           Kontrak TypeScript Motorcycle dan RentalPrice

public/images/motorcycles/
  Aset gambar motor yang dirujuk oleh field `image` di katalog

docs/
  ARCHITECTURE.md         Peta proyek dan panduan perubahan
```

## Tempat melakukan perubahan

| Kebutuhan                                             | File utama                                                        |
| ----------------------------------------------------- | ----------------------------------------------------------------- |
| Menambah atau mengubah motor                          | `data/motorcycles.ts`                                             |
| Mengubah harga atau durasi rental                     | `data/motorcycles.ts` pada `pricing`                              |
| Mengubah nomor, email, lokasi, atau template WhatsApp | `data/site.ts`                                                    |
| Mengubah field data motor                             | `types/motorcycle.ts`, lalu sesuaikan pemakaiannya                |
| Mengubah urutan section beranda                       | `app/page.tsx`                                                    |
| Mengubah tampilan satu section                        | Komponen terkait di `components/`                                 |
| Mengubah detail motor                                 | `app/motor/[slug]/page.tsx` dan `components/PricingTable.tsx`     |
| Mengubah font, token warna, atau style global         | `app/layout.tsx` dan `app/globals.css`                            |
| Mengganti gambar motor                                | Tambahkan file ke `public/images/motorcycles/`, lalu ubah `image` |
| Mengubah SEO halaman global                           | `app/layout.tsx`                                                  |

## Kontrak data katalog

Setiap item di `motorcycles` wajib memiliki:

- `id` unik untuk key daftar.
- `slug` unik dan URL-safe karena menjadi URL `/motor/[slug]`.
- `image` yang menunjuk file yang benar-benar ada di `public/`.
- Minimal satu harga pada `pricing`.
- `minDays` dan `maxDays` yang tidak tumpang tindih. Harga dengan `minDays` terbesar diprioritaskan oleh `getRentalPrice`.

Saat menambah motor, `generateStaticParams` dan halaman katalog akan mengambil data secara otomatis. Tidak perlu mendaftarkan route baru secara manual.

## Aturan perubahan

1. Data bisnis tetap di `data/`, jangan menyalin nomor WhatsApp atau harga langsung ke banyak komponen.
2. Komponen menerima data melalui props; hindari mengulang struktur kartu atau tabel di halaman.
3. Gunakan alias import `@/` seperti pola yang sudah ada.
4. Jika menambah field ke `Motorcycle`, cari seluruh pemakaian TypeScript sebelum menyelesaikan perubahan.
5. Untuk perubahan visual, cek desktop dan mobile karena kartu serta halaman detail memakai breakpoint responsive.
6. Jangan menghapus `slug` lama tanpa mempertimbangkan link atau hasil pencarian yang sudah terindeks.

## Validasi sebelum merge

Jalankan dari folder `rentalmotorbali`:

```bash
npm run lint
npm run build
```

Periksa manual:

- Beranda dapat membuka detail dari setiap kartu motor.
- URL `/motor/<slug>` bekerja untuk setiap data katalog.
- URL slug yang salah menghasilkan halaman 404.
- Harga, gambar, metadata, dan pesan WhatsApp mengikuti motor yang dipilih.
- Navigasi anchor dan layout mobile tidak bertabrakan.
