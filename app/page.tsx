import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import WhyChooseUs from '@/components/sections/why-choose-us'
import Statistics from '@/components/sections/statistics'
import Testimonials from '@/components/sections/testimonials'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
