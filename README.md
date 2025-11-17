# MULTIDATA Elektronik Website v1.0

Website resmi MULTIDATA Elektronik - Solusi Perbaikan Elektronik Lengkap

## Fitur Utama

- **Homepage** dengan Hero, Services grid, Statistics, Why Choose Us, dan Live Testimonials
- **Layanan** - 8 kategori layanan dengan brand dropdown
- **Harga** - Tabel harga Service Handphone & Laptop
- **Berita & Tips** - Blog dengan 4 artikel, pagination, dan kategori filter
- **Toko Kami** - Galeri lokasi fisik dengan lightbox
- **Hubungi Kami** - Contact form dengan validasi dan demo mode
- **Floating WhatsApp** - Tombol WhatsApp di semua halaman
- **Responsive Design** - Mobile-first, fully responsive
- **Dark Green/Teal Theme** - Modern dark UI dengan accent warna teal

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS v4
- **Animasi**: CSS animations + React hooks
- **Database** (Production): MySQL
- **Preview Mode**: Mock data (no database needed)

## Cara Menjalankan di Local PC

### Prerequisites (Wajib Install Terlebih Dahulu)

1. **Node.js & npm**
   - Download dari https://nodejs.org/ (Pilih LTS version)
   - Setelah install, test di terminal:
     \`\`\`bash
     node --version
     npm --version
     \`\`\`

2. **Git** (Optional, tapi recommended)
   - Download dari https://git-scm.com/

3. **Code Editor** (Optional)
   - Visual Studio Code: https://code.visualstudio.com/

### Step 1: Clone/Download Project

**Opsi A: Menggunakan Git**
\`\`\`bash
git clone <url-repo-anda>
cd multidata-elektronik
\`\`\`

**Opsi B: Download ZIP (jika tidak pake Git)**
1. Download ZIP dari GitHub/v0
2. Extract folder `multidata-elektronik`
3. Buka terminal di folder tersebut

### Step 2: Install Dependencies

Pastikan Anda di folder project, lalu jalankan:

\`\`\`bash
npm install
\`\`\`

Tunggu sampai selesai (bisa 2-5 menit tergantung kecepatan internet).

### Step 3: Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Output akan seperti ini:
\`\`\`
▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local
\`\`\`

### Step 4: Buka di Browser

Buka browser dan akses: **http://localhost:3000**

Jika muncul website MULTIDATA - Berhasil! 🎉

### Navigasi Local Server

- **Homepage**: http://localhost:3000
- **Layanan**: http://localhost:3000/layanan
- **Harga**: http://localhost:3000/harga
- **Berita**: http://localhost:3000/berita
- **Toko Kami**: http://localhost:3000/toko-kami
- **Hubungi Kami**: http://localhost:3000/kontak

### Testing Fitur

1. **Contact Form** - Isi dan submit, lihat popup success
2. **Blog** - Klik artikel untuk baca detail, coba pagination
3. **Services** - Hover brand dropdown untuk expand
4. **Testimonials** - Scroll carousel auto-play
5. **WhatsApp Button** - Klik untuk test link WhatsApp

### Hentikan Server (ketika ingin close)

Tekan di terminal: `Ctrl + C`

---

## Folder Structure

\`\`\`
multidata-elektronik/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── layanan/              # Services page
│   ├── harga/                # Pricing page
│   ├── berita/               # Blog listing
│   ├── berita/[slug]/        # Blog detail
│   ├── kontak/               # Contact page
│   ├── toko-kami/            # Store page
│   └── api/                  # API routes (mock data)
├── components/
│   ├── navigation.tsx        # Header nav
│   ├── footer.tsx            # Footer
│   ├── floating-whatsapp.tsx # WhatsApp button
│   └── sections/             # Homepage sections
├── lib/
│   ├── mock-data.ts          # Mock database
│   └── models.ts             # TypeScript interfaces
├── public/                   # Static files & images
├── package.json              # Dependencies
└── next.config.js            # Next.js config
\`\`\`

---

## Mengedit Konten (Content)

### Edit Text/Copy

Buka file yang sesuai di editor:
- Homepage: `app/page.tsx`
- Navigasi: `components/navigation.tsx`
- Footer: `components/footer.tsx`

Edit text langsung, save file, dan website auto-refresh.

### Edit Mock Data

Semua data dummy disimpan di `lib/mock-data.ts`:

\`\`\`typescript
// Edit articles
export const ARTICLES = [
  { id: 1, title: "Judul Artikel", ... },
  // Tambah/hapus artikel di sini
]

// Edit testimonials
export const TESTIMONIALS = [
  { id: 1, name: "Nama", rating: 5, ... },
  // Tambah testimonial di sini
]

// Edit services
export const SERVICES = [
  { id: 1, name: "Service HP", ... },
]
\`\`\`

### Edit Styling

Main styles: `app/globals.css`

Tailwind classes bisa langsung diubah di component files.

---

## Production Deployment (ke cPanel Nanti)

Saat siap deploy ke hosting, saya akan bantu integrate:
- MySQL database connection
- Email system untuk contact form
- Setup di cPanel dengan Node.js support

Untuk sekarang, fokus test di local dulu.

---

## Troubleshooting

### Error: "Port 3000 already in use"
\`\`\`bash
# Gunakan port lain
npm run dev -- -p 3001
# Akses: http://localhost:3001
\`\`\`

### Error: "Cannot find module"
\`\`\`bash
# Delete node_modules dan install ulang
rm -rf node_modules
npm install
\`\`\`

### Perubahan file tidak ter-update di browser
- Refresh browser (Ctrl + R atau Cmd + R)
- Restart development server

### Website tetap loading
- Cek console browser (F12) untuk error
- Pastikan node version compatible (v18+)
- Coba restart development server

---

## Next Steps

1. **Test semua halaman** dan fitur
2. **Edit mock data** di `lib/mock-data.ts` sesuai konten real Anda
3. **Customize styling** di `app/globals.css` jika perlu
4. **Report bugs/feedback** untuk improvements
5. **Siap deploy?** Hubungi untuk integrasi MySQL + cPanel

---

## Support

Jika ada masalah:
1. Check troubleshooting section di atas
2. Cek console browser (F12)
3. Cek terminal output
4. Hubungi untuk bantuan

Made with ❤️ in Indonesia
