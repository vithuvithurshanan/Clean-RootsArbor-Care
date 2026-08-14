import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)

      const sections = LINKS.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="nav"
      style={{ boxShadow: scrolled ? '0 6px 24px rgba(15,43,29,0.08)' : 'none' }}
    >
      <div className="container nav__inner">
        <a href="#home" className="brand">
          <img
            src="/images/logo.webp"
            alt="Clean Roots Arbor Care logo"
            className="brand__logo"
            width="169"
            height="126"
            style={{ height: '72px', width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </a>
        <nav className={`nav__links${isOpen ? ' is-open' : ''}`}>
          {LINKS.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? 'is-active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
        <a href="#contact" className="btn btn--primary nav__cta">
          Get Free Estimate
        </a>
        <button
          className={`nav__toggle${isOpen ? ' is-active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
