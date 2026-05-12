const stats = [
  { value: '50+',     label: 'Local Businesses Helped' },
  { value: '4.8×',   label: 'Average ROAS' },
  { value: '–41%',   label: 'Avg. Cost Per Lead Drop' },
  { value: '4.9★',   label: '47 Google Reviews' },
  { value: '$0',     label: 'Lock-In Contracts' },
]

export default function StatsStrip() {
  return (
    <section
      className="py-10"
      style={{ background: '#0F0F12' }}
      aria-label="Agency statistics"
    >
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div
                className="text-[2.4rem] font-black leading-none mb-1.5"
                style={{ color: '#C8FF00', letterSpacing: '-0.04em' }}
              >
                {value}
              </div>
              <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.42)' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
