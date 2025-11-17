# MULTIDATA Elektronik - Fast Preview Version

Ini adalah versi preview yang dioptimalkan untuk loading cepat di browser. Semua data menggunakan mock data (static) tanpa memerlukan database atau API calls.

## Fitur Preview

✅ Homepage dengan Hero, Services, Why Choose Us, Stats, Testimonials
✅ Layanan Service - 8 kategori dengan brand submenu
✅ Harga Service - Tabel pricing untuk Handphone & Laptop
✅ Blog/Berita - 4 artikel dengan filter kategori & pagination
✅ Kontak - Form demo & info kontak lengkap
✅ Testimonial form dengan demo preview
✅ Floating WhatsApp button
✅ Responsive design - mobile, tablet, desktop
✅ Smooth animations & transitions

## Cara Jalanin

\`\`\`bash
npm install
npm run dev
# Buka http://localhost:3000
\`\`\`

## File-file Penting

- `lib/mock-data.ts` - Semua mock data (services, pricing, articles, testimonials, contact info)
- `app/page.tsx` - Homepage
- `app/berita/page.tsx` - Blog listing
- `app/berita/[slug]/page.tsx` - Blog detail
- `app/harga/page.tsx` - Pricing
- `app/layanan/page.tsx` - Services
- `app/kontak/page.tsx` - Contact
- `components/` - Reusable components

## Untuk Production

Ketika siap production, update:

1. **Database Connection** - Replace mock data dengan API calls ke database
2. **Contact Form** - Integrate dengan email service (Nodemailer/SendGrid)
3. **Testimonials** - Simpan ke database dengan admin panel
4. **Blog** - Buat admin panel untuk manage articles

Lihat `DEPLOYMENT.md` untuk panduan production deployment ke cPanel.

## Info

- Next.js 14 (stable version untuk shared hosting)
- Tailwind CSS v4
- Zero database dependency (preview mode)
- Fast loading - semua static mock data
