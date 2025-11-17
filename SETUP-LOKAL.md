# Setup di Local PC - VERSI STABIL

## Persyaratan
- Node.js v18 atau v20 (download dari https://nodejs.org)
- Git (opsional, untuk clone repo)

## Langkah 1: Setup Project

### Cara A - Download ZIP dari v0
1. Di v0, klik "..." (tiga titik) di kanan atas
2. Pilih "Download ZIP"
3. Extract ke folder: `C:\Users\YourName\multidata-elektronik` (Windows) atau `~/multidata-elektronik` (Mac/Linux)

### Cara B - Clone dari GitHub
\`\`\`bash
git clone https://github.com/bahansoftware12-pixel/v0-multidata-elektronik-website.git
cd v0-multidata-elektronik-website
\`\`\`

## Langkah 2: Install Dependencies

\`\`\`bash
cd multidata-elektronik-website
npm install --legacy-peer-deps
\`\`\`

**Tunggu sampai selesai** (biasanya 3-5 menit)

Jika masih error, coba:
\`\`\`bash
npm install --force
\`\`\`

## Langkah 3: Jalankan di Local

\`\`\`bash
npm run dev
\`\`\`

Akan keluar output seperti ini:
\`\`\`
> dev
> next dev

  ▲ Next.js 14.0.4
  - Local:        http://localhost:3000
\`\`\`

## Langkah 4: Buka di Browser

Buka browser dan pergi ke: **http://localhost:3000**

Website sudah berjalan!

## Untuk Build Production

Jika sudah yakin, build versi production:

\`\`\`bash
npm run build
npm run start
\`\`\`

## Troubleshooting

### Error "npm ERR! code ERESOLVE"
Solusi:
\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

### Port 3000 sudah dipakai
Gunakan port lain:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`
Akses: http://localhost:3001

### Masih ada error?
Coba reset penuh:
\`\`\`bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev
\`\`\`

---

**NEXT STEP:** Setelah versi lokal jalan, lihat file `SETUP-CPANEL.md` untuk deploy ke hosting.
