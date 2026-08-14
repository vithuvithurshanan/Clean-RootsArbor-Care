import { useState } from 'react'
import Topbar from './components/Topbar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Stats from './components/Stats.jsx'
import Process from './components/Process.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import LegalModal from './components/LegalModal.jsx'

export default function App() {
  const [legalTab, setLegalTab] = useState(null) // 'terms' | 'privacy' | null

  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Process />
        <Gallery />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer
        onOpenTerms={() => setLegalTab('terms')}
        onOpenPrivacy={() => setLegalTab('privacy')}
      />
      <BackToTop />
      <LegalModal
        isOpen={Boolean(legalTab)}
        initialTab={legalTab || 'terms'}
        onClose={() => setLegalTab(null)}
      />
    </>
  )
}
