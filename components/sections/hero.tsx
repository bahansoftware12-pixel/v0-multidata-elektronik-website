'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-gray-950 to-gray-950 -z-10" />
      
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm mb-6 border border-accent/30">
          Terpercaya Sejak 2007
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          MULTIDATA Elektronik
        </h1>

        <p className="text-2xl md:text-3xl text-accent font-semibold mb-4">
          SOLUSI ELEKTRONIK ANDA
        </p>

        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
          Kami menyediakan layanan perbaikan perangkat elektronik yang terpercaya, bergaransi, terjangkau, dan cepat untuk semua masalah perangkat Anda.
        </p>

        <a
          href="https://wa.me/6281243049073"
          className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-gray-950 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Hubungi Kami Sekarang
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
