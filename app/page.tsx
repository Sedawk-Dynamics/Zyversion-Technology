import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import About from '@/components/sections/About'
import WhyUs from '@/components/sections/WhyUs'
import Services from '@/components/sections/Services'
import FounderReveal from '@/components/sections/FounderReveal'
import Founder from '@/components/sections/Founder'
import Values from '@/components/sections/Values'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <WhyUs />
      <Services />
      <FounderReveal />
      {/* <Founder /> */}
      <Values />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
