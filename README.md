# Rental Motor Bali

Website rental motor Bali berbasis Next.js App Router dan TypeScript. Halaman beranda menampilkan section layanan dan katalog motor; setiap motor memiliki halaman detail dinamis dengan harga dan tombol WhatsApp.

## Mulai cepat

Pastikan Node.js dan npm tersedia, lalu jalankan dari folder proyek ini:

```bash
npm install
npm run dev
```

Jangan menyalin harga atau nomor WhatsApp langsung ke komponen. Ubah sumber datanya agar semua halaman tetap konsisten.

## Menambah motor baru

1. Tambahkan gambar ke `public/images/motorcycles/`.
2. Tambahkan object baru ke array `motorcycles` di `data/motorcycles.ts`.
3. Pastikan `id` dan `slug` unik, `image` sesuai nama file, serta rentang `pricing` tidak tumpang tindih.
4. Jalankan lint dan build.

Halaman `/motor/[slug]`, link dari katalog, metadata detail, dan pesan WhatsApp dibuat dari data tersebut. Route baru tidak perlu didaftarkan manual.

## Alur halaman

Beranda dirakit di `app/page.tsx` dengan urutan `Navbar`, hero, fitur, katalog, manfaat, langkah rental, testimoni, FAQ, CTA, footer, dan tombol WhatsApp mengambang.

Halaman detail di `app/motor/[slug]/page.tsx` mencari motor berdasarkan `slug`. Motor yang tidak ditemukan dikirim ke `notFound()`. Komponen `PricingTable` menangani tampilan harga dan helper di `data/site.ts` membentuk URL WhatsApp.

## Panduan untuk Programmer

- Baca `docs/ARCHITECTURE.md` sebelum melakukan perubahan lintas file.
- Perubahan konten bisnis dimulai dari folder `data/`.
- Perubahan layout atau tampilan dimulai dari komponen yang bertanggung jawab, bukan dari halaman root.
- Pertahankan alias import `@/` dan tipe `Motorcycle`.
- Jangan menghapus `slug` yang sudah dipakai tanpa memikirkan link dan SEO.
- Setelah perubahan, cek beranda, satu halaman detail, URL slug salah, serta tampilan mobile.

## Deploy

Proyek ini dapat dideploy ke Vercel. Jalankan `npm run build` secara lokal sebelum push untuk menangkap error TypeScript, route, atau aset lebih awal.
