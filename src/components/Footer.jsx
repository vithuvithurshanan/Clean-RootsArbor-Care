export default function Footer({ onOpenTerms, onOpenPrivacy }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="brand brand--footer">
            <div className="footer__logo-card">
              <img
                src="/images/logo.webp"
                alt="Clean Roots Arbor Care logo"
                className="footer__logo-img"
              />
            </div>
          </a>
          <p>
            Professional, insured tree care rooted in trust — serving Buffalo, NY &amp; surrounding
            areas.
          </p>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <a href="#services">Tree Trimming</a>
          <a href="#services">Tree Removal</a>
          <a href="#services">Stump Grinding</a>
          <a href="#services">Emergency Service</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="tel:+17164513377">(716) 451-3377</a>
          <a href="mailto:hello@cleanrootsarbor.com">hello@cleanrootsarbor.com</a>
          <span>1260 Clinton St, Buffalo, NY 14206</span>
        </div>
      </div>
      <div className="footer__bottom container">
        <span>&copy; {year} Clean Roots Arbor Care. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '18px' }}>
          <button
            onClick={onOpenTerms}
            style={{ color: 'inherit', font: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Terms &amp; Conditions
          </button>
          <button
            onClick={onOpenPrivacy}
            style={{ color: 'inherit', font: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Privacy Policy
          </button>
        </div>
        <span>Licensed &amp; Insured · License #TC-00921</span>
      </div>
    </footer>
  )
}
