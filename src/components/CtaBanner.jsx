import Reveal from './Reveal.jsx'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <Reveal as="div" className="container cta-banner__inner">
        <div>
          <h2>Got a tree that needs attention?</h2>
          <p>Get a free, no-pressure estimate from a certified arborist today.</p>
        </div>
        <a href="#contact" className="btn btn--light btn--lg">
          Get Free Estimate
        </a>
      </Reveal>
    </section>
  )
}
