'use client'

import { useState } from 'react'

const services = [
  {
    title: 'Service HP',
    description: 'Perbaikan berbagai merek HP, dari kerusakan software hingga hardware.',
    image: '/mobile-phone-repair.jpg',
    hasSubMenu: true,
    brands: ['Samsung', 'Xiaomi', 'Oppo', 'Vivo', 'iPhone', 'Realme', 'Infinix'],
  },
  {
    title: 'Service TV',
    description: 'Solusi untuk semua masalah TV Anda, termasuk panel, suara, dan daya.',
    image: '/television-service.jpg',
    hasSubMenu: true,
    brands: ['Samsung', 'LG', 'Sony', 'Sharp', 'Polytron', 'Panasonic'],
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

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Layanan Service Kami</h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan perbaikan elektronik dengan teknisi profesional dan berpengalaman.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-800">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition">{service.title}</h3>
              <p className="text-sm text-text-secondary">{service.description}</p>

              {/* Brand submenu */}
              {service.hasSubMenu && expandedService === index && (
                <div className="mt-4 pt-4 border-t border-gray-800 animate-slideInUp">
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

              {/* Non-brand service - direct WhatsApp button */}
              {!service.hasSubMenu && (
                <a
                  href={`https://wa.me/6281243049073?text=Halo%20MULTIDATA%20Elektronik,%20saya%20ingin%20service%20${service.title.replace('Service', '')}`}
                  className="mt-4 inline-block text-sm text-accent hover:text-accent-hover transition"
                >
                  Hubungi untuk Konsultasi →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
