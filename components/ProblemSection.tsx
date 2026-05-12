import Link from 'next/link'

const proofPoints = [
  { metric: '+127%', label: 'More phone calls',        sub: 'Avg. across Google Ads clients' },
  { metric: '#1',    label: 'Map ranking achieved',    sub: 'For target local keywords' },
  { metric: '–41%',  label: 'Cost per lead reduction', sub: 'Within first 60 days' },
  { metric: '4.8×',  label: 'Return on ad spend',      sub: 'Google Ads average' },
  { metric: '30d',   label: 'To first results',        sub: 'Typical new client timeline' },
  { metric: '$0',    label: 'Lock-in contracts',       sub: 'Stay because results work' },
]

export default function ProblemSection() {
  return (
    <section
      className="section-pad"
      style={{ background: '#F7F6F2' }}
      aria-labelledby="differentiator-heading"
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* LEFT: Bold POV */}
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-5">Our Point of View</p>
            <h2
              id="differentiator-heading"
              className="text-4xl md:text-[3.2rem] xl:text-[3.6rem] font-black leading-[1.0] mb-6"
              style={{ color: '#0F0F12', letterSpacing: '-0.035em' }}
            >
              Most Agencies
              <br />
              Track Clicks.
              <br />
              <span className="gradient-text-lime">
                We Track
                <br />
                Customers.
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-[420px]" style={{ color: '#6B7280' }}>
              Click-through rates and impression counts don't pay your rent. We build every campaign around what
              actually matters — calls, bookings, and form submissions from real customers in your market.
            </p>
            <Link href="/contact" className="btn-dark text-sm px-6 py-3">
              See How We Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* RIGHT: Proof grid */}
          <div className="grid sm:grid-cols-2 gap-3.5">
            {proofPoints.map(({ metric, label, sub }) => (
              <div
                key={label}
                className="p-5 rounded-2xl transition-all duration-200 group"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div
                  className="text-[2.2rem] font-black leading-none mb-1.5"
                  style={{ color: '#0F0F12', letterSpacing: '-0.04em' }}
                >
                  {metric}
                </div>
                <div className="text-sm font-bold mb-0.5" style={{ color: '#0F0F12' }}>{label}</div>
                <div className="text-xs" style={{ color: '#9CA3AF' }}>{sub}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
