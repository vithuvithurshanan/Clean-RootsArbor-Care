import Reveal from './Reveal.jsx'

const SERVICES = [
  {
    title: 'Tree Trimming & Pruning',
    text: 'Precision pruning that improves structure, promotes healthy growth and enhances curb appeal.',
    image: '/images/crown-pruning.webp',
    path: 'M12 2 4 12h5v9h6v-9h5L12 2z',
  },
  {
    title: 'Tree Removal',
    text: 'Safe, efficient removal of hazardous, dead or unwanted trees — even in tight, high-risk spaces.',
    image: '/images/tree-removal.webp',
    path: 'M6 3v18M18 3v18M6 12h12M3 6h6M15 6h6M3 18h6M15 18h6',
  },
  {
    title: 'Stump Grinding & Removal',
    text: 'We grind stumps below grade so you can reclaim your yard — fast, clean, no trace left behind.',
    image: '/images/stump-grinding.webp',
    circle: true,
    path: 'M8 12h8M12 8v8',
  },
  {
    title: '24/7 Emergency Service',
    text: 'Storm damage or a tree down on your property? Our crews respond fast, day or night.',
    image: '/images/storm-cleanup.webp',
    path: 'M12 2v6M12 16v6M2 12h6M16 12h6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M19.1 4.9l-4.2 4.2M9.1 14.9l-4.2 4.2',
  },
  {
    title: 'Land & Lot Clearing',
    text: 'Clearing for new construction, gardens or defensible space — clean sites, ready to build.',
    image: '/images/land-clearing.webp',
    path: 'M3 20h18M6 20V10l6-6 6 6v10M10 20v-6h4v6',
  },
  {
    title: 'Tree Health & Consultation',
    text: 'Certified arborist assessments, disease diagnosis and treatment plans to save struggling trees.',
    image: '/images/tree-health.webp',
    path: 'M12 21s-7-5.2-9.5-9C.5 8 2 3.5 6 3c2.4-.3 4 1.2 6 3.5C14 4.2 15.6 2.7 18 3c4 .5 5.5 5 3.5 9-2.5 3.8-9.5 9-9.5 9z',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow eyebrow--dark">What We Do</span>
          <h2>Complete Tree Care Services</h2>
          <p>
            From routine pruning to emergency storm cleanup, our certified arborists handle it
            with precision and care.
          </p>
        </Reveal>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <Reveal as="div" className="s-card" key={service.title}>
              <div className="s-card__thumb">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="s-card__body">
                <div className="s-card__icon">
                  <svg viewBox="0 0 24 24">
                    {service.circle && <circle cx="12" cy="12" r="9" />}
                    <path d={service.path} />
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
