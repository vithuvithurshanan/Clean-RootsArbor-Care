import { useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from './Icons.jsx'

export default function Contact() {
  const iframeRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.kdlead.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    // Listen for GHL iframe resize messages
    function onMessage(e) {
      if (!iframeRef.current) return
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
        if (
          data &&
          data.type === 'iframe-resize' &&
          data.id === 'inline-BBjntj0DNSRtiP5FbZV5' &&
          data.height
        ) {
          iframeRef.current.style.height = data.height + 'px'
        }
      } catch (_) {}
    }
    window.addEventListener('message', onMessage)

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
      window.removeEventListener('message', onMessage)
    }
  }, [])

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <Reveal className="contact__info">
          <span className="eyebrow eyebrow--dark">Get In Touch</span>
          <h2>Let's Talk About Your Trees</h2>
          <p>Reach out for a free estimate, or call our emergency line if you need us right now.</p>

          <div className="info-row">
            <PhoneIcon />
            <div>
              <strong>Phone</strong>
              <a href="tel:+17164513377" style={{ color: 'inherit' }}>(716) 451-3377</a>
            </div>
          </div>

          <div className="info-row">
            <PinIcon />
            <div>
              <strong>Address</strong>
              <span>1260 Clinton St, Buffalo, NY 14206</span>
            </div>
          </div>
          <div className="info-row">
            <ClockIcon />
            <div>
              <strong>Hours</strong>
              <span>Mon–Sat 7AM–6PM · 24/7 Emergency</span>
            </div>
          </div>

          <div className="socials">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.8c0-.5.2-.8 1-.8z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="svg--outline" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="Google">
              <svg viewBox="0 0 24 24">
                <path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4c-.2 1.2-1 2.3-2.1 3v2.5h3.4c2-1.8 3-4.5 3-7.4z" />
                <path d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.5c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.6v2.6C4.3 19.6 7.9 22 12 22z" />
                <path d="M6.2 13.7c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.3H2.6C1.9 8.7 1.5 10.3 1.5 12s.4 3.3 1.1 4.7l3.6-3z" />
                <path d="M12 5.8c1.5 0 2.9.5 3.9 1.5l3-3C17.2 2.6 14.8 1.6 12 1.6 7.9 1.6 4.3 4 2.6 7.3l3.6 2.6c.8-2.5 3.1-4.1 5.8-4.1z" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal className="contact__form contact__form--embed">
          <iframe
            ref={iframeRef}
            src="https://link.kdlead.com/widget/form/BBjntj0DNSRtiP5FbZV5"
            style={{ width: '100%', height: '782px', border: 'none', borderRadius: '8px', display: 'block' }}
            id="inline-BBjntj0DNSRtiP5FbZV5"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Clean roots arbor care Form"
            data-height="782"
            data-layout-iframe-id="inline-BBjntj0DNSRtiP5FbZV5"
            data-form-id="BBjntj0DNSRtiP5FbZV5"
            title="Clean roots arbor care Form"
          ></iframe>
        </Reveal>
      </div>
    </section>
  )
}
