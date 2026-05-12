'use client'

const caseStudies = [
  {
    category: 'Google Ads',
    client: 'Local Plumber',
    market: 'Hamilton, ON',
    metrics: [
      { label: 'Cost Per Lead', before: '$78',  after: '$14.80', change: '–81%' },
      { label: 'Monthly Leads', before: '8',    after: '47',     change: '+488%' },
    ],
    note: '90-day result after campaign restructure',
  },
  {
    category: 'Local SEO',
    client: 'Dental Clinic',
    market: 'Mississauga, ON',
    metrics: [
      { label: 'Map Rank',      before: '#7',  after: '#1',   change: '↑ 6 spots' },
      { label: 'Monthly Calls', before: '12',  after: '61',   change: '+408%' },
    ],
    note: '5-month SEO and GBP optimization',
  },
  {
    category: 'Website + Ads',
    client: 'HVAC Contractor',
    market: 'Toronto, ON',
    metrics: [
      { label: 'Conversion Rate',     before: '1.2%',  after: '6.8%',   change: '+467%' },
      { label: 'Revenue Attributed',  before: '—',     after: '$128K',  change: 'From $3.2K spend' },
    ],
    note: 'New website + Google Ads within 60 days',
  },
]

const kpis = [
  { value: '–41%',   label: 'Avg. Cost Per Lead Reduction' },
  { value: '+380%',  label: 'Avg. Lead Volume Increase' },
  { value: '4.8×',   label: 'Average Google Ads ROAS' },
  { value: '30 days', label: 'To First Meaningful Results' },
]

export default function ValueSection() {
  return (
    <section
      id="results"
      className="section-pad relative"
      style={{ background: '#111218' }}
      aria-labelledby="results-heading"
    >
      <div className="container-main">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="section-label-lime mb-4">Proof</p>
            <h2
              id="results-heading"
              className="text-3xl md:text-4xl font-extrabold leading-[1.06]"
              style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
            >
              Real Metrics.
              <br />
              Real Lead Growth.
            </h2>
          </div>

          {/* KPI strip */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {kpis.map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-[1.8rem] font-black leading-none mb-1"
                  style={{ color: '#C8FF00', letterSpacing: '-0.04em' }}
                >
                  {value}
                </div>
                <div className="text-xs font-medium leading-tight" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {caseStudies.map(({ category, client, market, metrics, note }) => (
            <article
              key={client}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Card header */}
              <div className="px-5 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div
                  className="inline-block text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-2"
                  style={{
                    background: 'rgba(200,255,0,0.1)',
                    color: '#C8FF00',
                    border: '1px solid rgba(200,255,0,0.15)',
                  }}
                >
                  {category}
                </div>
                <div className="text-sm font-bold" style={{ color: '#F8FAFC' }}>{client}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.32)' }}>{market}</div>
              </div>

              {/* Metrics */}
              <div className="p-5 flex-1 space-y-5">
                {metrics.map(({ label, before, after, change }) => (
                  <div key={label}>
                    <div
                      className="text-[9px] font-bold mb-2 tracking-wider uppercase"
                      style={{ color: 'rgba(255,255,255,0.28)' }}
                    >
                      {label}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm font-semibold line-through" style={{ color: 'rgba(255,255,255,0.18)' }}>
                        {before}
                      </span>
                      <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.2)" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      <span
                        className="text-[1.6rem] font-black"
                        style={{ color: '#F8FAFC', letterSpacing: '-0.04em' }}
                      >
                        {after}
                      </span>
                      <span
                        className="text-[10px] font-bold ml-auto px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(200,255,0,0.12)', color: '#C8FF00' }}
                      >
                        {change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="px-5 py-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <p className="text-[11px] italic" style={{ color: 'rgba(255,255,255,0.22)' }}>{note}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: 'rgba(255,255,255,0.18)' }}>
          Representative examples. Results vary based on market, budget, and campaign type.
        </p>
      </div>
    </section>
  )
}
