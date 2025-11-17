export default function WhyChooseUs() {
  const features = [
    {
      title: 'Terpercaya',
      description: 'Kami memiliki pengalaman lebih dari 15 tahun dalam industri perbaikan elektronik.',
      icon: '🛡️',
    },
    {
      title: 'Bergaransi',
      description: 'Semua perbaikan kami berikan garansi untuk kepuasan dan keamanan Anda.',
      icon: '✓',
    },
    {
      title: 'Harga Terjangkau',
      description: 'Kami menawarkan harga kompetitif tanpa mengorbankan kualitas layanan.',
      icon: '💰',
    },
    {
      title: 'Cepat',
      description: 'Proses pengerjaan cepat dengan teknisi berpengalaman dan profesional.',
      icon: '⚡',
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Mengapa Memilih Kami?</h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Alasan mengapa ribuan pelanggan mempercayakan perangkat elektronik mereka kepada kami.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
