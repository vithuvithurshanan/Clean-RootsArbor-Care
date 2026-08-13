import Reveal from './Reveal.jsx'

const STEPS = [
  {
    num: '01',
    title: 'Free Consultation',
    text: 'Call, text or fill the form — we assess your tree and property, on-site or via photos.',
  },
  {
    num: '02',
    title: 'Written Estimate',
    text: 'You get a clear, itemized quote with no hidden fees before any work begins.',
  },
  {
    num: '03',
    title: 'Scheduled Service',
    text: 'Our certified crew arrives on time, fully equipped, and works safely and efficiently.',
  },
  {
    num: '04',
    title: 'Complete Cleanup',
    text: 'We haul debris, rake the site and leave your property cleaner than we found it.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow eyebrow--dark">How It Works</span>
          <h2>Simple, Transparent Process</h2>
          <p>No surprises — just clear communication from first call to final cleanup.</p>
        </Reveal>
        <div className="process__grid">
          {STEPS.map((step) => (
            <Reveal as="div" className="p-step" key={step.num}>
              <div className="p-step__num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
