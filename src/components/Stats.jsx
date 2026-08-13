import StatCounter from './StatCounter.jsx'

const STATS = [
  { target: 4200, label: 'Trees Serviced' },
  { target: 15, label: 'Years Experience' },
  { target: 98, label: '% Client Satisfaction' },
  { target: 24, label: '/7 Emergency Response' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((stat) => (
          <StatCounter key={stat.label} target={stat.target} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
