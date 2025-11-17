'use client'

import { useState } from 'react'
import { mockTestimonials } from '@/lib/mock-data'

export default function Testimonials() {
  const [testimonials] = useState(mockTestimonials)
  const [form, setForm] = useState({ name: '', rating: 5, comment: '' })
  const [showForm, setShowForm] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Demo Mode: Testimoni tidak tersimpan. Gunakan versi production untuk fitur ini.')
    setForm({ name: '', rating: 5, comment: '' })
  }

  React.useEffect(() => {
    if (testimonials.length >= 10) {
      const timer = setInterval(() => {
        setScrollPosition((prev) => prev - 2)
      }, 30)
      return () => clearInterval(timer)
    }
  }, [testimonials.length])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Apa Kata Pelanggan?</h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Testimoni nyata dari pelanggan yang puas dengan layanan kami.
        </p>

        {/* Demo Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-16 bg-gray-900 rounded-lg p-8 border border-gray-800 animate-slideInUp">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setForm({ ...form, rating: star })}
                      className={`text-3xl transition-colors ${
                        star <= form.rating ? 'text-yellow-400' : 'text-gray-700'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Nama</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama Anda"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Komentar</label>
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Bagikan pengalaman Anda dengan kami..."
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-accent hover:bg-accent-hover text-gray-950 font-semibold rounded-lg transition"
                >
                  Kirim Testimoni
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
                >
                  Tutup
                </button>
              </div>
            </form>
          </div>
        )}

        {!showForm && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 bg-accent hover:bg-accent-hover text-gray-950 font-semibold rounded-lg transition"
            >
              Berikan Testimoni Anda
            </button>
          </div>
        )}

        {/* Display Testimonials */}
        {testimonials.length < 10 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-gray-950 font-bold text-sm">
                    {testimonial.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary mb-2">{testimonial.text}</p>
                <p className="text-xs text-gray-600">{testimonial.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
            <div
              style={{ transform: `translateY(${scrollPosition}px)` }}
              className="transition-transform duration-75 ease-linear"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="p-6 mb-4 rounded-lg bg-gray-800 border border-gray-700 h-48"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-gray-950 font-bold text-xs">
                      {testimonial.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <div className="flex text-yellow-400 text-xs">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary line-clamp-3">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
