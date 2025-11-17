import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-950">M</span>
              </div>
              <span className="font-bold">MULTIDATA</span>
            </div>
            <p className="text-sm text-text-secondary">
              Solusi terpercaya untuk semua kebutuhan perbaikan elektronik Anda. Dengan teknologi terkini dan tim profesional.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-accent transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 6a1 1 0 11-2 0 1 1 0 012 0zM13 12a1 1 0 11-2 0 1 1 0 012 0zM13 18a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.1H3V21h4V8.1zM10.88 8.1h-3.88V21h3.88v-5.087c0-5.185 6.783-5.592 6.783 0V21H22v-6.635c0-7.84-8.028-7.592-9.856-3.714v-1.42z" />
              </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Service Handphone
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Service Laptop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Service TV
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Service Komputer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Service Printer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Layanan Lainnya
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Harga Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Berita & Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-text-secondary">Jalan Kemiri VII Ngebug, Winong Lor, Gebang, Kab Purworejo, Jawa Tengah</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-text-secondary">+62 812-4304-9073</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-text-secondary">multidataelectronik@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-text-secondary">Senin - Minggu, 09.00 - 21.30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-text-secondary">
          <p>© 2025 MULTIDATA Elektronik. All rights reserved.</p>
          <p className="mt-2">Made with <span className="text-red-500">❤</span> in Indonesia</p>
        </div>
      </div>
    </footer>
  )
}
