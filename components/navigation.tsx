'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-gray-950/95 backdrop-blur-md border-b border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="font-bold text-gray-950">M</span>
            </div>
            <span className="hidden md:inline font-bold text-lg">MULTIDATA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-accent transition text-sm">
              Beranda
            </Link>
            <Link href="/layanan" className="hover:text-accent transition text-sm">
              Layanan Service
            </Link>
            <Link href="/harga" className="hover:text-accent transition text-sm">
              Harga
            </Link>
            <Link href="/berita" className="hover:text-accent transition text-sm">
              Berita
            </Link>
            <Link href="/toko-kami" className="hover:text-accent transition text-sm">
              Toko Kami
            </Link>
            <Link href="/kontak" className="hover:text-accent transition text-sm">
              Kontak
            </Link>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-900 rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-900 rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-900">
            <Link href="/" className="block py-2 hover:text-accent transition">
              Beranda
            </Link>
            <Link href="/layanan" className="block py-2 hover:text-accent transition">
              Layanan Service
            </Link>
            <Link href="/harga" className="block py-2 hover:text-accent transition">
              Harga
            </Link>
            <Link href="/berita" className="block py-2 hover:text-accent transition">
              Berita
            </Link>
            <Link href="/toko-kami" className="block py-2 hover:text-accent transition">
              Toko Kami
            </Link>
            <Link href="/kontak" className="block py-2 hover:text-accent transition">
              Kontak
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
