// Mock data untuk preview - semua static, no database
export const mockServices = [
  {
    id: 1,
    name: 'Service Handphone',
    description: 'Perbaikan berbagai merek HP, dari kerusakan software hingga hardware.',
    image: '/service-hp.jpg',
    icon: '📱',
  },
  {
    id: 2,
    name: 'Service TV',
    description: 'Solusi untuk semua masalah TV Anda, termasuk panel, suara, dan daya.',
    image: '/service-tv.jpg',
    icon: '📺',
  },
  {
    id: 3,
    name: 'Service Laptop',
    description: 'Layanan perbaikan laptop untuk semua brand, software dan hardware.',
    image: '/service-laptop.jpg',
    icon: '💻',
  },
  {
    id: 4,
    name: 'Service Komputer',
    description: 'Rawat dan perbaiki PC Anda dengan layanan profesional kami.',
    image: '/service-komputer.jpg',
    icon: '🖥️',
  },
  {
    id: 5,
    name: 'Service Printer',
    description: 'Mengatasi masalah printer dari macet, hasil cetak buruk, hingga koneksi.',
    image: '/service-printer.jpg',
    icon: '🖨️',
  },
  {
    id: 6,
    name: 'Service Speaker',
    description: 'Kembalikan kualitas suara speaker Anda, dari portable hingga home theater.',
    image: '/service-speaker.jpg',
    icon: '🔊',
  },
  {
    id: 7,
    name: 'Service Amplifier',
    description: 'Perbaikan amplifier untuk audio yang jernih dan bertenaga kembali.',
    image: '/service-amplifier.jpg',
    icon: '🎵',
  },
  {
    id: 8,
    name: 'Dan Lain-lain',
    description: 'Layanan tambahan untuk berbagai perangkat elektronik lainnya.',
    image: '/service-lainnya.jpg',
    icon: '⚙️',
  },
]

export const mockPricing = [
  {
    id: 1,
    category: 'Handphone',
    items: [
      { name: 'Ganti LCD', price: 'Rp 300.000 - Rp 1.500.000', warranty: '1 Minggu' },
      { name: 'Mati Total (Matot)', price: 'Rp 250.000 - Rp 900.000', warranty: '1 Minggu' },
      { name: 'Masalah Software / Lupa Poa', price: 'Rp 100.000 - Rp 350.000', warranty: '1 Minggu' },
    ],
  },
  {
    id: 2,
    category: 'Laptop',
    items: [
      { name: 'Install Ulang OS', price: 'Rp 150.000 - Rp 300.000', warranty: '1 Minggu' },
      { name: 'Ganti Keyboard', price: 'Rp 250.000 - Rp 750.000', warranty: '1 Minggu' },
      { name: 'Upgrade RAM / SSD', price: 'Rp 100.000 (Jasa)', warranty: '1 Minggu' },
    ],
  },
]

export const mockArticles = [
  {
    id: 1,
    title: '5 Tips Jitu Merawat Baterai Laptop Agar Awet Tahan Lama',
    slug: '5-tips-jitu-merawat-baterai-laptop',
    category: 'Tips & Trik',
    date: '15 Jul 2024',
    excerpt: 'Baterai laptop adalah komponen vital. Dengan perawatan yang sempurna, bisa mempertahankan umurnya secara signifikan. Hindari...',
    content: `Baterai laptop adalah komponen vital. Dengan perawatan yang sempurna, bisa mempertahankan umurnya secara signifikan.

1. Jangan Overcharge - Hindari mengcharge sampai 100% setiap hari
2. Kurangi Brightness - Layar adalah pengonsumsi daya terbesar
3. Close Background Apps - Tutup aplikasi yang tidak digunakan
4. Maintain Temperature - Jaga suhu laptop tetap normal

Dengan tips ini, baterai laptop Anda bisa tahan lebih lama.`,
    image: '/blog-laptop-battery.jpg',
  },
  {
    id: 2,
    title: 'Kenali Tanda-Tanda Kerusakan LCD Pada Smartphone Anda',
    slug: 'kenali-tanda-tanda-kerusakan-lcd',
    category: 'Info Layanan',
    date: '12 Jul 2024',
    excerpt: 'Layar smartphone rentan rusak. Pelajari gejala awal kerusakan LCD agar Anda bisa segera mengantisipasi dan...',
    content: `Layar smartphone rentan rusak. Pelajari gejala awal kerusakan LCD agar Anda bisa segera mengantisipasi.

Tanda-tanda kerusakan LCD:
- Munculnya garis-garis vertikal atau horizontal
- Warna layar tidak normal atau fade
- Area layar tidak responsif
- Layar bergerak-gerak sendiri

Segera bawa ke bengkel untuk perbaikan sebelum kerusakan bertambah parah.`,
    image: '/blog-lcd-damage.jpg',
  },
  {
    id: 3,
    title: 'Teknologi Terbaru: Apa itu Solid State Drive (SSD)?',
    slug: 'teknologi-terbaru-apa-itu-solid-state-drive',
    category: 'Teknologi',
    date: '8 Jul 2024',
    excerpt: 'SSD menawarkan kecepatan yang jauh melampaui hard disk konvensional. Pahami keunggulannya dan mengapa banyak yang mengupgrade menggunakan upgrade RAM dan SSD dengan komponen berkualitas dan harga terjangkau. Rasakan...',
    content: `SSD menawarkan kecepatan yang jauh melampaui hard disk konvensional.

Keuntungan SSD:
- Kecepatan baca/tulis 10x lebih cepat dari HDD
- Konsumsi daya lebih rendah
- Tidak ada bagian mekanik yang bergerak
- Lebih tahan terhadap guncangan

Upgrade ke SSD akan membuat performa perangkat Anda upgrade secara signifikan.`,
    image: '/blog-ssd-technology.jpg',
  },
  {
    id: 4,
    title: 'Jangan Panik! Langkah Pertama Saat Laptop Terkena Air',
    slug: 'langkah-pertama-laptop-terkena-air',
    category: 'Tips & Trik',
    date: '5 Jul 2024',
    excerpt: 'Kecelakaan bisa terjadi kapan saja. Ketahu apa yang harus dilakukan ketika laptop Anda tersirami kopi atau terkena cairan lainnya. Jangan asal-asalan...',
    content: `Kecelakaan bisa terjadi kapan saja. Berikut langkah-langkah yang harus Anda lakukan:

1. Matikan Laptop Segera - Hindari short circuit
2. Lepas Baterai - Jika bisa dilepas
3. Lap dengan Handuk - Ambil cairan yang masih di permukaan
4. Biarkan Kering - Minimal 24 jam di tempat yang kering
5. Bawa ke Teknisi - Jangan coba nyalakan sendiri

Laptop yang terkena cairan perlu penanganan serius untuk menghindari kerusakan permanen.`,
    image: '/blog-laptop-water.jpg',
  },
]

export const mockTestimonials = [
  {
    id: 1,
    name: 'Andi Pratama',
    date: '10 April 2024',
    rating: 5,
    text: 'Pelayanan sangat cepat dan profesional. Laptop saya yang mati total bisa hidup kembali dalam waktu singkat. Harga juga sangat terjangkau.',
  },
  {
    id: 2,
    name: 'Citra Lestari',
    date: '8 April 2024',
    rating: 5,
    text: 'Harga terjangkau dan hasil yang memuaskan. Teknisi mereka benar-benar tahu apa yang mereka lakukan. Terima kasih banyak!',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    date: '5 April 2024',
    rating: 5,
    text: 'Luar biasa! Kerusakan AC saya yang awalnya terasa impossible ternyata bisa diperbaiki. Pelayanan HP saya yang tersirami juga bekerja dengan sempurna.',
  },
  {
    id: 4,
    name: 'Devi Aringi',
    date: '2 April 2024',
    rating: 5,
    text: 'Sangat puas dengan pelayanan yang memuaskan. Laptup saya yang rusak bisa diperbaiki dengan cepat dan efisien. Pasti kembali lagi!',
  },
  {
    id: 5,
    name: 'Rian Syahputra',
    date: '30 March 2024',
    rating: 5,
    text: 'Prosesnya sangat profesional dan jujur. Kami tidak dipukuli harga apalagi digombal dengan diagnosis yang berlebihan. Terima kasih.',
  },
  {
    id: 6,
    name: 'Fajar Nugraha',
    date: '28 March 2024',
    rating: 5,
    text: 'Service HP saya yang rusak di sini. Hasilnya sangat memuaskan dan garansi yang diberikan juga cukup baik. Ditambah lokasi yang strategis dan harga terjangkau.',
  },
]

export const mockStats = [
  { label: 'Pelanggan Puas', value: '1000+' },
  { label: 'Service yang sudah di tangani', value: '500+' },
  { label: 'Tingkat Kepuasan', value: '98%' },
  { label: 'Tahun Berpengalaman', value: '15+' },
]

export const mockContactInfo = {
  alamat: 'Jalan Kemiri VII Ngebug, Winong Lor, Gebang, Kab Purworejo, Jawa Tengah',
  jam: 'Senin - Minggu 09.00 - 21.30',
  telepon: '+62 812-4304-9073',
  whatsapp: '+62 812-4304-9073',
  email: 'multidataelektronik@gmail.com',
}
