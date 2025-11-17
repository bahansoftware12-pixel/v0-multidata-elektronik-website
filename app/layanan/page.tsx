import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'

const services = [
  {
    title: 'Service HP',
    description: 'Perbaikan berbagai merek HP, dari kerusakan software hingga hardware.',
    image: '/mobile-phone-repair.jpg',
    hasSubMenu: true,
    brands: ['Samsung', 'Xiaomi', 'Oppo', 'Vivo', 'iPhone', 'Realme', 'Infinix', 'Asus'],
  },
  {
    title: 'Service TV',
    description: 'Solusi untuk semua masalah TV Anda, termasuk panel, suara, dan daya.',
    image: '/television-service.jpg',
    hasSubMenu: true,
    brands: ['Samsung', 'LG', 'Sony', 'Sharp', 'Polytron', 'Panasonic', 'TCL'],
  },
  {
    title: 'Service Laptop',
    description: 'Layanan perbaikan laptop untuk semua brand, software dan hardware.',
    image: '/laptop-repair.jpg',
    hasSubMenu: true,
    brands: ['Asus', 'Lenovo', 'HP', 'Dell', 'Acer', 'MSI', 'Apple'],
  },
  {
    title: 'Service Komputer',
    description: 'Rawat dan perbaiki PC Anda dengan layanan profesional kami.',
    image: '/computer-service.jpg',
    hasSubMenu: false,
  },
  {
    title: 'Service Printer',
    description: 'Mengatasi masalah printer dari macet hingga konektor.',
    image: '/printer-repair.jpg',
    hasSubMenu: false,
  },
  {
    title: 'Service Speaker',
    description: 'Kembalikan kualitas suara speaker Anda dari portable hingga home theater.',
    image: '/speaker-service.jpg',
    hasSubMenu: false,
  },
  {
    title: 'Service Amplifier',
    description: 'Perbaikan amplifier untuk audio yang jernih dan bertenaga kembali.',
    image: '/amplifier-repair.jpg',
    hasSubMenu: false,
  },
  {
    title: 'Dan Lain-lain',
    description: 'Layanan tambahan untuk berbagai perangkat elektronik lainnya.',
    image: '/electronics-repair.jpg',
    hasSubMenu: false,
  },
]

export const metadata = {
  title: 'Layanan Service - MULTIDATA Elektronik',
  description: 'Jelajahi semua layanan perbaikan elektronik kami dengan harga terjangkau dan bergaransi.',
}

export default function LayananPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Layanan Service Kami</h1>
          <p className="text-text-secondary max-w-2xl">
            Kami menyediakan berbagai layanan perbaikan elektronik dengan teknisi profesional dan berpengalaman. Hubungi kami untuk konsultasi.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="relative h-40 overflow-hidden bg-gray-800">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition">{service.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{service.description}</p>
                  
                  {service.hasSubMenu && (
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-xs text-text-secondary mb-3">Brand yang kami layani:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.brands?.map((brand, i) => (
                          <a
                            key={i}
                            href={`https://wa.me/6281243049073?text=Halo%20MULTIDATA%20Elektronik,%20saya%20ingin%20service%20${brand}%20${service.title.replace('Service', '')}`}
                            className="text-xs bg-gray-800 hover:bg-accent hover:text-gray-950 px-3 py-1 rounded transition"
                          >
                            {brand}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {!service.hasSubMenu && (
                    <a
                      href={`https://wa.me/6281243049073?text=Halo%20MULTIDATA%20Elektronik,%20saya%20ingin%20service%20${service.title.replace('Service', '')}`}
                      className="inline-block text-sm text-accent hover:text-accent-hover transition"
                    >
                      Hubungi untuk Konsultasi →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
