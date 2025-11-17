import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MULTIDATA Elektronik - Solusi Elektronik Anda',
  description: 'Layanan perbaikan elektronik terpercaya dengan teknologi profesional, cepat, dan bergaransi di Purworejo.',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  themeColor: '#0a0f0d',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-gray-950 text-white font-sans">
        {children}
      </body>
    </html>
  )
}
