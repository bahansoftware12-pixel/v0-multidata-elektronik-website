'use client'

import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import Link from 'next/link'
import { mockArticles } from '@/lib/mock-data'

interface ArticleDetail {
  id: number
  title: string
  slug: string
  category: string
  excerpt: string
  content: string
  image: string
  date: string
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const articles = mockArticles.filter((a) => a.slug === params.slug)

  if (articles.length === 0) {
    return { title: 'Artikel Tidak Ditemukan' }
  }

  const article = articles[0]
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const article = mockArticles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  // Get related articles by category
  const relatedArticles = mockArticles.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 3)

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/berita" className="text-accent hover:text-accent-hover transition mb-8 inline-flex items-center gap-2">
            ← Kembali ke Berita
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm mb-4 border border-accent/30">
              {article.category}
            </span>
            <h1 className="text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center justify-between text-text-secondary text-sm">
              <span>{article.date}</span>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-lg mb-12 bg-gray-800">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-text-secondary whitespace-pre-wrap">{article.content}</div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Butuh Bantuan?</h3>
            <p className="text-text-secondary mb-6">
              Hubungi kami untuk berkonsultasi tentang perangkat elektronik Anda.
            </p>
            <a
              href="https://wa.me/6281243049073"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-gray-950 font-semibold rounded-lg transition"
            >
              Hubungi Kami via WhatsApp
            </a>
          </div>

          {relatedArticles.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Artikel Terkait</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/berita/${related.slug}`}>
                    <div className="group cursor-pointer bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-accent/50 transition">
                      <div className="relative h-40 overflow-hidden bg-gray-800">
                        <img
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold mb-2 group-hover:text-accent transition line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-sm text-text-secondary line-clamp-2">{related.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
