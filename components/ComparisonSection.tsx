import Link from 'next/link'

const rows = [
  { feature: 'Transparent monthly reporting',        oma: true,  typical: false },
  { feature: 'No lock-in contracts',                 oma: true,  typical: false },
  { feature: 'Tracks calls & leads (not just clicks)', oma: true, typical: false },
  { feature: 'Canadian market experience',           oma: true,  typical: false },
  { feature: 'Direct access to your account team',  oma: true,  typical: false },
  { feature: 'Conversion tracking setup included',  oma: true,  typical: false },
  { feature: 'Fixed monthly price (no surprises)',  oma: true,  typical: false },
  { feature: 'Strategy focused on local ROI',       oma: true,  typical: false },
]

function Check() {
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center mx-auto"
      style={{ background: 'rgba(200,255,0,0.12)', border: '1px solid rgba(200,255,0,0.3)' }}
      aria-label="Yes"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

function Cross() {
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center mx-auto"
      style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' }}
      aria-label="No"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#D1D5DB" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  )
}

export default function ComparisonSection() {
  return (
    <section
      className="section-pad"
      style={{ background: '#F7F6F2' }}
      aria-labelledby="comparison-heading"
    >
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Why OMA</p>
          <h2
            id="comparison-heading"
            className="text-3xl md:text-4xl font-black mb-4 leading-[1.06]"
            style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
          >
            OMA vs. The Typical Agency
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#6B7280' }}>
            Most agencies report impressions and clicks. We report calls, bookings, and revenue.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div
            className="grid grid-cols-[1fr_120px_120px] gap-3 px-5 py-3 rounded-xl mb-3"
            style={{ background: '#0F0F12' }}
          >
            <div className="text-xs font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Feature
            </div>
            <div className="text-center text-xs font-black tracking-wide" style={{ color: '#C8FF00' }}>
              OMA
            </div>
            <div className="text-center text-xs font-semibold tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Typical Agency
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-2">
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1fr_120px_120px] gap-3 items-center px-5 py-3.5 rounded-xl"
                style={{
                  background: i % 2 === 0 ? 'white' : 'rgba(0,0,0,0.025)',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <span className="text-sm font-medium" style={{ color: '#374151' }}>
                  {row.feature}
                </span>
                {row.oma ? <Check /> : <Cross />}
                {row.typical ? <Check /> : <Cross />}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2"
            >
              Get Your Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="text-xs mt-3" style={{ color: '#9CA3AF' }}>
              No contract required · Responds within 24 hours · 100% free
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
