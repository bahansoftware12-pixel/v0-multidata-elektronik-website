# Deployment ke cPanel - Step by Step Guide

## Persiapan

1. **Shared Hosting dengan Node.js Support**
   - Pastikan hosting support Node.js (v18+)
   - Contoh: Hostinger, Niagahoster, DomPDF, etc.
   - Tanya support jika tidak yakin

2. **MySQL Database**
   - Hosting Anda sudah sediakan, tidak perlu install apapun
   - Catat credentials: hostname, username, password, database name

3. **FTP/SFTP Credentials**
   - Dapat dari hosting provider
   - Gunakan untuk upload file

4. **Gmail App Password** (untuk email)
   - Aktifkan 2FA di akun Gmail
   - Generate app password: https://myaccount.google.com/apppasswords
   - Gunakan password ini di config

---

## Step 1: Prepare Project untuk Production

Di PC lokal Anda:

\`\`\`bash
# Di folder project
npm run build

# Check jika berhasil
ls -la .next
\`\`\`

Jika ada folder `.next`, berarti build successful.

---

## Step 2: Upload ke Hosting

### Via cPanel File Manager (Paling Mudah)

1. Login ke cPanel Anda
2. Buka **File Manager**
3. Navigate ke folder `public_html` atau sesuai domain
4. Upload semua file project ke sana (kecuali folder `node_modules` dan `.git`)

**File/Folder yang wajib upload:**
\`\`\`
- app/
- components/
- lib/
- public/
- scripts/
- .next/ (hasil build di step 1)
- package.json
- package-lock.json
- next.config.js
- tsconfig.json
- .env.production (file konfigurasi, buat nanti)
\`\`\`

**Yang TIDAK perlu upload:**
- `node_modules/` (akan install di server)
- `.git/` (optional)
- `.gitignore`
- `README.md` (optional)

### Via FTP/SFTP

1. Download FileZilla atau Cyberduck
2. Koneksi dengan FTP credentials
3. Upload file ke `public_html/multidata-elektronik/`

---

## Step 3: Setup di cPanel

### 3.1 Setup Node.js Application

1. Login cPanel
2. Cari **Node.js**
3. Klik **Create Application**
4. Isi form:
   - **App Mode**: Production
   - **Node.js version**: 18.x atau 20.x
   - **Application root**: Folder upload Anda (misal: `public_html/multidata-elektronik`)
   - **Application startup file**: `server.js` atau `npm start`
   - **Application URL**: Domain Anda
   - **Port**: cPanel assign otomatis

5. Klik **Create** dan tunggu process selesai

### 3.2 Database Setup

Di cPanel atau phpmyadmin:

1. **Create Database**
   - Nama: `multidata_db`
   - Catat nama lengkapnya

2. **Create MySQL User**
   - Username: `multidata_user`
   - Password: Generate strong password (catat!)
   - Add privileges untuk database

3. **Run init script** (via SSH atau cPanel Terminal):
   \`\`\`bash
   mysql -u multidata_user -p multidata_db < scripts/init-db.sql
   \`\`\`

---

## Step 4: Setup Environment Variables

Di cPanel:

1. SSH ke server atau gunakan cPanel Terminal
2. Buat file `.env.production`:
   \`\`\`bash
   cd ~/public_html/multidata-elektronik
   nano .env.production
   \`\`\`

3. Isi dengan:
   \`\`\`
   # Database
   DATABASE_HOST=localhost
   DATABASE_USER=multidata_user
   DATABASE_PASSWORD=YourPasswordHere
   DATABASE_NAME=multidata_db

   # Email
   MAIL_HOST=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USER=your-email@gmail.com
   MAIL_PASSWORD=your-app-password
   MAIL_FROM=noreply@yourdomain.com

   # Node
   NODE_ENV=production
   \`\`\`

4. Save: `Ctrl + X` → `Y` → `Enter`

---

## Step 5: Install Dependencies & Build

Masih di cPanel Terminal/SSH:

\`\`\`bash
cd ~/public_html/multidata-elektronik

# Install dependencies
npm install --production

# Build production
npm run build

# Start app
npm start
\`\`\`

Atau di cPanel Node.js panel: **Start Application**

---

## Step 6: Test Website

1. Akses domain Anda di browser
2. Cek semua halaman berfungsi
3. Test contact form
4. Cek email masuk

---

## Step 7: Setup Auto-Restart

Di cPanel Node.js:

1. Pilih aplikasi Anda
2. Set **Restart Policy**: `On Crash` atau `On Server Reboot`
3. Save

---

## Monitoring & Logs

### View Application Logs

cPanel → Node.js → Select App → View Logs

### View Error Logs

cPanel → Error Logs

### Check if Running

cPanel → Node.js → Status

---

## Update Website (setelah deploy)

1. Upload file yang berubah via FTP
2. Di cPanel: SSH terminal
   \`\`\`bash
   cd ~/public_html/multidata-elektronik
   npm run build
   # cPanel auto-restart, atau manual restart di cPanel
   \`\`\`

---

## Troubleshooting Production

### 502 Bad Gateway
- Server restart di cPanel
- Check app status di Node.js panel
- View error logs

### Database Connection Error
- Verify credentials di `.env.production`
- Test connection: `mysql -u user -p -h host dbname`
- Check MySQL running di hosting

### Emails Not Sending
- Verify Gmail app password (jangan password biasa)
- Check MAIL_FROM valid
- Check hosting allow SMTP port 587

### Slow Performance
- Check server resource usage
- Optimize database queries
- Cache static assets
- Contact hosting untuk upgrade

---

## Backup Strategy

Regular backup:

\`\`\`bash
# Database backup
mysqldump -u multidata_user -p multidata_db > backup-$(date +%Y%m%d).sql

# Files backup
tar -czf backup-$(date +%Y%m%d).tar.gz ~/public_html/multidata-elektronik/

# Download backups dari cPanel Backup feature
\`\`\`

---

## Support dari Hosting

Jika ada masalah:
- Hubungi support hosting Anda
- Tanyakan: Node.js version, MySQL support, port availability
- Minta bantuan setup jika diperlukan

---

## Checklist Before Going Live

- [ ] Domain configured
- [ ] SSL certificate active (HTTPS)
- [ ] Node.js app running
- [ ] Database connected & populated
- [ ] Email working
- [ ] Contact form tested
- [ ] All pages accessible
- [ ] Mobile responsive checked
- [ ] Backup system in place
- [ ] Error monitoring setup

---

Made with ❤️ for MULTIDATA Elektronik
\`\`\`

```json file="" isHidden
