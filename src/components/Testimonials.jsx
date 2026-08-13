import Reveal from './Reveal.jsx'

const REVIEWS = [
  {
    text: '"Clean Roots removed a massive oak leaning toward our roof. Fast, careful, and the yard was spotless after. Couldn\'t ask for more."',
    initials: 'RM',
    name: 'Rachel M.',
    role: 'Homeowner',
  },
  {
    text: '"Called them at 11pm after a storm dropped a limb on our fence. They showed up before sunrise. Genuinely 24/7."',
    initials: 'DK',
    name: 'David K.',
    role: 'Property Manager',
  },
  {
    text: '"Fair pricing, real arborists, no upselling. They saved a tree two other companies told me to cut down."',
    initials: 'SP',
    name: 'Sara P.',
    role: 'Homeowner',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <Reveal className="section-head section-head--light">
          <span className="eyebrow">Client Reviews</span>
          <h2>What Our Customers Say</h2>
        </Reveal>
        <Reveal className="t-track">
          {REVIEWS.map((review) => (
            <div className="t-card" key={review.name}>
              <div className="t-stars">★★★★★</div>
              <p>{review.text}</p>
              <div className="t-author">
                <span className="t-avatar">{review.initials}</span>
                <div>
                  <strong>{review.name}</strong>
                  <small>{review.role}</small>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
