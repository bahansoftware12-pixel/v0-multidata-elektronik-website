const mysql = require('mysql2/promise')

async function seedDb() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'multidata_db',
  })

  try {
    // Clear existing data
    await connection.execute('DELETE FROM service_brands')
    await connection.execute('DELETE FROM service_categories')
    await connection.execute('DELETE FROM articles')
    await connection.execute('DELETE FROM pricing')
    await connection.execute('DELETE FROM testimonials')

    // Seed service categories
    const categories = [
      ['Service HP', 'service-hp', 'Perbaikan berbagai merek HP, dari kerusakan software hingga hardware.', '/images/services/hp.jpg', true],
      ['Service TV', 'service-tv', 'Solusi untuk semua masalah TV Anda, termasuk panel, suara, dan daya.', '/images/services/tv.jpg', true],
      ['Service Laptop', 'service-laptop', 'Layanan perbaikan laptop untuk semua brand, software dan hardware.', '/images/services/laptop.jpg', true],
      ['Service Komputer', 'service-komputer', 'Rawat dan perbaiki PC Anda dengan layanan profesional kami.', '/images/services/komputer.jpg', false],
      ['Service Printer', 'service-printer', 'Mengatasi masalah printer dari macet, hasil cetak buruk, hingga konektor.', '/images/services/printer.jpg', false],
      ['Service Speaker', 'service-speaker', 'Kembalikan kualitas suara speaker Anda, dari portable hingga home theater.', '/images/services/speaker.jpg', false],
      ['Service Amplifier', 'service-amplifier', 'Perbaikan amplifier untuk audio yang jernih dan bertenaga kembali.', '/images/services/amplifier.jpg', false],
      ['Dan Lain-lain', 'dan-lain-lain', 'Layanan tambahan untuk berbagai perangkat elektronik lainnya.', '/images/services/lainnya.jpg', false],
    ]

    for (const cat of categories) {
      await connection.execute(
        'INSERT INTO service_categories (name, slug, description, image, has_brands) VALUES (?, ?, ?, ?, ?)',
        cat
      )
    }

    // Get category IDs
    const [cats] = await connection.execute('SELECT id, slug FROM service_categories')
    const catMap = {}
    cats.forEach(c => { catMap[c.slug] = c.id })

    // Seed service brands for categories with has_brands = true
    const hpBrands = ['Samsung', 'Xiaomi', 'Oppo', 'Vivo', 'iPhone', 'Realme', 'Infinix', 'Asus', 'OnePlus']
    const tvBrands = ['Samsung', 'LG', 'Sony', 'Sharp', 'Polytron', 'Panasonic', 'TCL']
    const laptopBrands = ['Asus', 'Lenovo', 'HP', 'Dell', 'Acer', 'MSI', 'Apple']

    for (const brand of hpBrands) {
      await connection.execute(
        'INSERT INTO service_brands (category_id, name) VALUES (?, ?)',
        [catMap['service-hp'], brand]
      )
    }
    for (const brand of tvBrands) {
      await connection.execute(
        'INSERT INTO service_brands (category_id, name) VALUES (?, ?)',
        [catMap['service-tv'], brand]
      )
    }
    for (const brand of laptopBrands) {
      await connection.execute(
        'INSERT INTO service_brands (category_id, name) VALUES (?, ?)',
        [catMap['service-laptop'], brand]
      )
    }

    // Seed pricing data
    const pricings = [
      ['Handphone', 'Ganti LCD', 300000, 1500000, '1 Minggu', null],
      ['Handphone', 'Mati Total (Matot)', 250000, 900000, '1 Minggu', null],
      ['Handphone', 'Masalah Software / Lupa Pola', 100000, 350000, '1 Minggu', null],
      ['Laptop', 'Install Ulang OS', 150000, 300000, '1 Bulan', null],
      ['Laptop', 'Ganti Keyboard', 250000, 750000, '1 Bulan', null],
      ['Laptop', 'Upgrade RAM / SSD', 100000, 100000, '1 Bulan', 'Harga jasa saja'],
    ]

    for (const pricing of pricings) {
      await connection.execute(
        'INSERT INTO pricing (category, service_type, price_min, price_max, warranty_period, notes) VALUES (?, ?, ?, ?, ?, ?)',
        pricing
      )
    }

    // Seed articles (18 total for 3 pages)
    const articles = [
      ['5 Tips Jitu Merawat Baterai Laptop Agar Awet Tahan Lama', '5-tips-jitu-merawat-baterai-laptop-agar-awet-tahan-lama', 'Tips & Trik', 'Baterai laptop adalah komponen vital. Dengan beberapa langkah sederhana, Anda bisa memperpanjang umurnya secara signifikan.', 'Konten artikel lengkap...', '/images/articles/1.jpg', new Date('2024-07-15')],
      ['Kenali Tanda-Tanda Kerusakan LCD pada Smartphone Anda', 'kenali-tanda-tanda-kerusakan-lcd-pada-smartphone-anda', 'Info Layanan', 'Layar smartphone rentan rusak. Pelajari gejala awal kerusakan LCD seperti dead pixel, flickering, dan tanda-tanda lainnya.', 'Konten artikel lengkap...', '/images/articles/2.jpg', new Date('2024-07-12')],
      ['Promo Spesial: Diskon 20% Untuk Servis Ganti Baterai!', 'promo-spesial-diskon-20-untuk-servis-ganti-baterai', 'Promo Spesial', 'Jangan lewatkan kesempatan emas ini! Dapatkan diskon 20% untuk layanan ganti baterai semua perangkat.', 'Konten artikel lengkap...', '/images/articles/3.jpg', new Date('2024-07-10')],
      ['Teknologi Terbaru: Apa itu Solid State Drive (SSD)?', 'teknologi-terbaru-apa-itu-solid-state-drive-ssd', 'Teknologi', 'SSD menawarkan kecepatan yang jauh melampaui hard disk konvensional. Pelajari lebih lanjut tentang teknologi ini.', 'Konten artikel lengkap...', '/images/articles/4.jpg', new Date('2024-07-08')],
      ['Cara Membersihkan Laptop dengan Benar dan Aman', 'cara-membersihkan-laptop-dengan-benar-dan-aman', 'Tips & Trik', 'Pembersihan rutin dapat meningkatkan performa laptop Anda. Ikuti panduan lengkap kami untuk membersihkan dengan aman.', 'Konten artikel lengkap...', '/images/articles/5.jpg', new Date('2024-07-06')],
      ['Kenapa TV LED Anda Bergaris? Ini Penyebab dan Solusinya', 'kenapa-tv-led-anda-bergaris-ini-penyebab-dan-solusinya', 'Info Layanan', 'TV bergaris bisa disebabkan berbagai faktor. Kami jelaskan penyebab dan cara mengatasinya dengan mudah.', 'Konten artikel lengkap...', '/images/articles/6.jpg', new Date('2024-07-05')],
      ['Promo Akhir Tahun: Gratis Cek Kondisi untuk 100 Pelanggan Pertama!', 'promo-akhir-tahun-gratis-cek-kondisi', 'Promo Spesial', 'Manfaatkan promo gratis cek kondisi perangkat Anda tanpa biaya apapun. Terbatas hanya 100 pelanggan pertama!', 'Konten artikel lengkap...', '/images/articles/7.jpg', new Date('2024-07-03')],
      ['Jangan Panik! Langkah Pertama Saat Laptop Terkena Air', 'jangan-panik-langkah-pertama-saat-laptop-terkena-air', 'Tips & Trik', 'Laptop terkena air bisa diatasi dengan langkah-langkah tepat. Pelajari apa yang harus dilakukan segera.', 'Konten artikel lengkap...', '/images/articles/8.jpg', new Date('2024-07-01')],
      ['Peningkatan Kapasitas RAM dan SSD Untuk Performa Maksimal', 'peningkatan-kapasitas-ram-dan-ssd-untuk-performa-maksimal', 'Info Layanan', 'Upgrade RAM dan SSD akan membuat performa perangkat Anda meningkat drastis. Konsultasikan dengan kami sekarang.', 'Konten artikel lengkap...', '/images/articles/9.jpg', new Date('2024-06-29')],
      ['Teknologi Fast Charging: Aman atau Berbahaya untuk Baterai?', 'teknologi-fast-charging-aman-atau-berbahaya', 'Teknologi', 'Fast charging memberikan kemudahan namun ada pertimbangan untuk kesehatan baterai jangka panjang.', 'Konten artikel lengkap...', '/images/articles/10.jpg', new Date('2024-06-27')],
      ['5 Tanda Printer Anda Perlu Di-Service Segera', '5-tanda-printer-anda-perlu-di-service-segera', 'Tips & Trik', 'Printer yang tidak terawat bisa menyebabkan masalah serius. Ketahui tanda-tanda kapan perlu service.', 'Konten artikel lengkap...', '/images/articles/11.jpg', new Date('2024-06-25')],
      ['Layanan Baru: Service Komputer dan Laptop di Tempat!', 'layanan-baru-service-komputer-dan-laptop-di-tempat', 'Info Layanan', 'Kami kini menyediakan layanan service on-site untuk kenyamanan Anda. Hubungi kami untuk jadwal layanan.', 'Konten artikel lengkap...', '/images/articles/12.jpg', new Date('2024-06-23')],
      ['Promo Bundle: Service HP + Ganti Baterai Hemat 30%!', 'promo-bundle-service-hp-ganti-baterai-hemat-30', 'Promo Spesial', 'Paket hemat spesial untuk service HP dan ganti baterai dalam satu kali kunjungan. Cek syarat dan ketentuan.', 'Konten artikel lengkap...', '/images/articles/13.jpg', new Date('2024-06-21')],
      ['Cara Mengoptimalkan Performa Komputer Tanpa Upgrade Hardware', 'cara-mengoptimalkan-performa-komputer-tanpa-upgrade', 'Tips & Trik', 'Performa komputer lambat tidak selalu perlu hardware baru. Ada cara lain untuk mengoptimalkannya.', 'Konten artikel lengkap...', '/images/articles/14.jpg', new Date('2024-06-19')],
      ['Dead Pixel vs Stuck Pixel: Perbedaan dan Cara Mengatasinya', 'dead-pixel-vs-stuck-pixel-perbedaan-dan-solusi', 'Teknologi', 'Memahami perbedaan keduanya akan membantu Anda mengatasi masalah layar dengan lebih efektif.', 'Konten artikel lengkap...', '/images/articles/15.jpg', new Date('2024-06-17')],
      ['Kapan Waktu Tepat Mengganti Thermal Paste Laptop?', 'kapan-waktu-tepat-mengganti-thermal-paste-laptop', 'Info Layanan', 'Thermal paste yang sudah lama dapat mengurangi efisiensi pendinginan. Ketahui waktu penggantian yang tepat.', 'Konten artikel lengkap...', '/images/articles/16.jpg', new Date('2024-06-15')],
      ['Mitos atau Fakta? 7 Kesalahpahaman Tentang Service Elektronik', 'mitos-atau-fakta-7-kesalahpahaman-tentang-service-elektronik', 'Tips & Trik', 'Banyak mitos tentang service elektronik beredar. Mari kita bedakan mana yang fakta dan mana yang mitos.', 'Konten artikel lengkap...', '/images/articles/17.jpg', new Date('2024-06-13')],
      ['Promo Spesial Ramadan: Diskon hingga 25% Semua Layanan!', 'promo-spesial-ramadan-diskon-25-semua-layanan', 'Promo Spesial', 'Rayakan Ramadan bersama MULTIDATA dengan diskon fantastis hingga 25% untuk semua layanan service kami.', 'Konten artikel lengkap...', '/images/articles/18.jpg', new Date('2024-06-11')],
    ]

    for (const article of articles) {
      await connection.execute(
        'INSERT INTO articles (title, slug, category, excerpt, content, image, published_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        article
      )
    }

    // Seed sample testimonials
    const testimonials = [
      ['Andi Pratama', 5, 'Pelayanan sangat cepat dan profesional. Laptop saya yang bermasalah langsung diperbaiki dalam waktu 2 jam. Teknisi mereka benar-benar tahu apa yang mereka lakukan. Terima kasih!'],
      ['Citra Lestari', 5, 'Harga terjangkau dan hasil reparasi bagus. Saya sangat puas dengan layanan MULTIDATA. Akan merekomendasikan ke teman-teman saya.'],
      ['Budi Santoso', 5, 'Luar biasa! Kerusakan AC dan switch TV saya yang tadinya saya pikir sudah parah, ternyata masih bisa diperbaiki. Gadget berharga dalam waktu singkat. Mulai dari sini.'],
      ['Dewi Argadi', 5, 'Sangat puas dengan pelayanan. Cepat, merah, dan bergaransi. Ganap puas dengan pelayanan pabrik mereka. Recommended!'],
      ['Rian Syahputra', 5, 'Proses perbaikan AC dan switch TV saya yang tadinya saya pikir cukup rumit, tapi mereka handle dengan mudah. Terima kasih untuk service terbaik!'],
      ['Fajair Nugroho', 5, 'Service HP saya di tempat membuat saya bisa pulang lebih cepat dari yang diperkirakan. Gadget lengkap untuk proses perbaikan yang cepat dan efisien.'],
    ]

    for (const [name, rating, comment] of testimonials) {
      await connection.execute(
        'INSERT INTO testimonials (name, rating, comment) VALUES (?, ?, ?)',
        [name, rating, comment]
      )
    }

    console.log('✓ Database seeded successfully')
    await connection.end()
  } catch (error) {
    console.error('Seeding error:', error)
    process.exit(1)
  }
}

seedDb()
