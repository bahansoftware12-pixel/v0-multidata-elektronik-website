'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import { mockArticles } from '@/lib/mock-data'

const ITEMS_PER_PAGE = 6

export default function BeritaPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredArticles =
    selectedCategory === 'all'
      ? mockArticles
      : mockArticles.filter((a) => a.category === selectedCategory)

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const categories = ['all', 'Tips & Trik', 'Info Layanan', 'Teknologi']

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Berita & Informasi Terkini</h1>
          <p className="text-text-secondary max-w-2xl mb-12">
            Dapatkan update terbaru, tips perawatan, informasi layanan, dan promo spesial dari MULTIDATA Elektronik.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-accent text-gray-950'
                    : 'bg-gray-900 text-text-secondary hover:border-accent border border-gray-800'
                }`}
              >
                {cat === 'all' ? 'Semua' : cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {currentArticles.map((article) => (
              <Link key={article.id} href={`/berita/${article.slug}`}>
                <div className="group cursor-pointer bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden bg-gray-800">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-gray-950 text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-text-secondary mb-4 line-clamp-2 flex-1">{article.excerpt}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                      <span className="text-xs text-text-secondary">{article.date}</span>
                      <span className="text-sm text-accent group-hover:translate-x-1 transition">
                        Baca Selengkapnya →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded border border-gray-800 hover:border-accent transition disabled:opacity-50"
              >
                ←
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded transition ${
                    currentPage === page
                      ? 'bg-accent text-gray-950'
                      : 'border border-gray-800 hover:border-accent'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded border border-gray-800 hover:border-accent transition disabled:opacity-50"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
