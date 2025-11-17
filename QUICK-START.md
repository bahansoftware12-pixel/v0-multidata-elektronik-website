# QUICK START - MULTIDATA Elektronik Website v1.0

Panduan tercepat untuk jalankan website di PC lokal Anda.

## 5 Menit Setup

### Step 1: Install Node.js (Jika belum punya)

Download dari: https://nodejs.org/
- Pilih **LTS** version
- Install seperti biasa (next → next → finish)

Verify:
\`\`\`bash
node --version
npm --version
\`\`\`

---

### Step 2: Download Project

**Option A: Download ZIP**
1. Download ZIP dari link yang diberikan
2. Extract ke folder (misal: `C:\Projects\multidata-elektronik`)

**Option B: Git Clone**
\`\`\`bash
git clone <link-repo>
cd multidata-elektronik
\`\`\`

---

### Step 3: Install Dependencies (3-5 menit)

Buka terminal di folder project, ketik:
\`\`\`bash
npm install
\`\`\`

Tunggu selesai... (jangan diinterupsi)

---

### Step 4: Run Website

\`\`\`bash
npm run dev
\`\`\`

Akan muncul output:
\`\`\`
▲ Next.js 14.2.25
  - Local:        http://localhost:3000
  - Environments: .env.local
\`\`\`

---

### Step 5: Buka Browser

Klik atau copy-paste ke browser:
\`\`\`
http://localhost:3000
\`\`\`

**SELESAI!** Website udah jalan! 🎉

---

## Apa yang Bisa Di-Test

1. **Homepage** - Scroll lihat semua section
2. **Navigasi** - Klik menu di header
3. **Contact Form** - Isi dan submit
4. **Blog** - Klik artikel untuk baca
5. **WhatsApp Button** - Klik tombol di kanan bawah
6. **Mobile View** - Press F12, pilih device mobile

---

## Jalankan Lagi (Besok/Kapan saja)

\`\`\`bash
# Buka terminal di folder project
npm run dev

# Akses http://localhost:3000
\`\`\`

---

## Stop Website

Tekan di terminal: **Ctrl + C**

---

## Kalau Ada Error

### Error: "Port 3000 already in use"
\`\`\`bash
npm run dev -- -p 3001
# Akses: http://localhost:3001
\`\`\`

### Error: "npm command not found"
- Node.js belum install dengan benar
- Restart komputer setelah install Node.js

### Website tidak muncul / blank
- Refresh browser (Ctrl + R)
- Cek terminal ada error apa
- Restart development server

---

## Edit Konten (Text, Data, etc)

Buka file dengan editor (VS Code, Notepad++, dll):

**Text/Copy:**
- `app/page.tsx` → Edit hero text, tagline, dll
- `components/navigation.tsx` → Edit menu
- `components/footer.tsx` → Edit footer text

**Mock Data (Articles, Services, Testimonials):**
- `lib/mock-data.ts` → Edit di sini

**Styling/Design:**
- `app/globals.css` → Edit CSS & colors
- Edit Tailwind classes di component files

Save file → Browser auto-refresh

---

## Lanjut ke Production (cPanel)

Saat siap deploy:
1. Baca file: `SETUP-CPANEL.md`
2. Setup MySQL database
3. Setup email (Gmail)
4. Upload ke hosting
5. Konfigurasi di cPanel Node.js

---

## Support & Dokumentasi Lengkap

- **README.md** - Full documentation
- **SETUP-CPANEL.md** - Production deployment guide
- **DEPLOYMENT.md** - Detailed hosting guide

---

Enjoy! Hubungi jika ada pertanyaan 👍
