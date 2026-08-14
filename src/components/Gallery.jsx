import Reveal from './Reveal.jsx'

const ITEMS = [
  { image: '/images/storm-cleanup.webp', label: 'Emergency Storm Cleanup', variant: 'g-item--tall' },
  { image: '/images/tree-removal.webp', label: 'Precision Tree Removal' },
  { image: '/images/crown-pruning.webp', label: 'Crown Pruning & Trimming' },
  { image: '/images/stump-grinding.webp', label: 'Deep Stump Grinding' },
  { image: '/images/land-clearing.webp', label: 'Land & Lot Clearing', variant: 'g-item--wide' },
  { image: '/images/tree-health.webp', label: 'Tree Health Consultation' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow eyebrow--dark">Recent Work</span>
          <h2>Featured Arbor Projects</h2>
          <p>A showcase of real tree care, trimming, and removal jobs completed by our crew.</p>
        </Reveal>
        <div className="gallery__grid">
          {ITEMS.map((item) => (
            <Reveal
              as="div"
              className={`g-item${item.variant ? ' ' + item.variant : ''}`}
              key={item.label}
            >
              <div className="g-item__card">
                <img
                  src={item.image}
                  alt={item.label}
                  className="g-item__img"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="g-item__overlay">
                  <span className="g-item__title">{item.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
