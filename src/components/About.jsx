import Reveal from './Reveal.jsx'
import { CheckIcon } from './Icons.jsx'

const POINTS = [
  'Licensed, bonded & fully insured crews',
  'ISA-certified arborists on every job',
  'Free, no-obligation written estimates',
  'Eco-friendly practices & full site cleanup',
  'Modern rigging & equipment for tight spaces',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <Reveal className="about__media">
          <div className="about__frame">
            <img
              src="/images/about-arborist.webp"
              alt="ISA-Certified Arborist Team"
              className="about__img"
              loading="lazy"
              width="720"
              height="540"
            />
          </div>
          <div className="about__badge">
            <strong>15+</strong>
            <span>Years in Business</span>
          </div>
        </Reveal>
        <Reveal className="about__content">
          <span className="eyebrow eyebrow--dark">Why Homeowners Choose Us</span>
          <h2>Rooted in Craft. Grown on Trust.</h2>
          <p>
            Clean Roots Arbor Care is a locally owned tree service built on one idea: treat every
            yard like it's our own. Our ISA-certified arborists combine modern equipment with
            old-fashioned care so your trees — and your property — stay healthy and safe for years
            to come.
          </p>
          <ul className="about__list">
            {POINTS.map((point) => (
              <li key={point}>
                <CheckIcon /> {point}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary">
            Work With Us
          </a>
        </Reveal>
      </div>
    </section>
  )
}
