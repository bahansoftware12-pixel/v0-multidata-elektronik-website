'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import { mockPricing } from '@/lib/mock-data'

export default function HargaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Daftar Harga Layanan Service</h1>
          <p className="text-text-secondary max-w-2xl mb-12">
            Temukan estimasi biaya perbaikan untuk perangkat elektronik Anda. Harga dapat berubah sesuai kondisi perangkat.
          </p>

          {mockPricing.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-accent">Service {category.category}</h2>
              <div className="overflow-x-auto bg-gray-900 rounded-lg border border-gray-800">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="px-6 py-4 text-left text-sm font-semibold">No</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Jenis Kerusakan</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Kisaran Harga</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Garansi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                        <td className="px-6 py-4 text-sm">{index + 1}</td>
                        <td className="px-6 py-4 text-sm">{item.name}</td>
                        <td className="px-6 py-4 text-sm">{item.price}</td>
                        <td className="px-6 py-4 text-sm text-accent">{item.warranty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="mb-12 bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Elektronik Lainnya</h2>
            <p className="text-text-secondary mb-6">
              Untuk kategori Speaker, Amplifier, Kulkas, Mesin Cuci, AC, dan perangkat elektronik lainnya, silahkan hubungi kami untuk konsultasi harga.
            </p>
            <a
              href="https://wa.me/6281243049073?text=Halo%20MULTIDATA,%20saya%20ingin%20tahu%20harga%20layanan%20service%20untuk%20perangkat%20saya"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-gray-950 font-semibold rounded-lg transition"
            >
              Konsultasi Gratis via WhatsApp
            </a>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Catatan Penting</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Harga di atas adalah estimasi biaya perbaikan untuk perangkat dengan kondisi perrangkat.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Biaya jasa belum termasuk harga spare parts yang diperlukan.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Garansi service yang kami berikan adalah 1 minggu-1 bulan setelah perbaikan.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Harga dapat berubah sesuai dengan tingkat kompleksitas kerusakan perangkat Anda.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
