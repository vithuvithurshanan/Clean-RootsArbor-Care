import Reveal from './Reveal.jsx'
import { PhoneIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg"></div>
      <div className="hero__overlay"></div>
      <div className="container hero__inner">
        <Reveal className="hero__content">
          <span className="eyebrow">🌿 Licensed, Bonded &amp; Insured</span>
          <h1>
            Healthy Trees. <br />
            <span>Safer Property.</span>
            <br />
            Trusted Care.
          </h1>
          <p className="hero__lead">
            Clean Roots Arbor Care brings certified-arborist expertise to every trim, removal and
            stump job — done right, done safe, done clean.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary btn--lg">
              Get a Free Estimate
            </a>
            <a href="tel:+17164513377" className="btn btn--ghost btn--lg">
              <PhoneIcon />
              Call (716) 451-3377
            </a>
          </div>
          <div className="hero__trust">
            <div className="hero__trust-item">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className="hero__trust-item">
              <strong>4,200+</strong>
              <span>Trees Cared For</span>
            </div>
            <div className="hero__trust-item">
              <strong>4.9★</strong>
              <span>Average Rating</span>
            </div>
          </div>
        </Reveal>
      </div>
      <svg className="hero__wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,40 C240,100 480,0 720,40 C960,80 1200,20 1440,60 L1440,100 L0,100 Z"></path>
      </svg>
    </section>
  )
}
