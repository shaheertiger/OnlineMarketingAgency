import Link from 'next/link'

const values = [
  'Lead-focused. Every campaign is built around calls, bookings, and form submissions — not vanity metrics.',
  'Transparent. You always know what we are doing, why, and what it is producing.',
  'Local-specialized. We focus exclusively on Canadian small businesses and local service companies.',
  'No lock-in contracts. We earn your business month-to-month through results.',
]

const stats = [
  { value: '2020',  label: 'Founded',               sub: 'Canadian-owned and operated' },
  { value: '50+',   label: 'Clients Served',         sub: 'Across Canada' },
  { value: '$0',    label: 'Lock-In Contracts',       sub: 'Month to month only' },
  { value: '100%',  label: 'Local Business Focus',   sub: 'No enterprise brands' },
]

export default function AboutSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: '#0F0F12' }}
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left */}
          <div>
            <p className="section-label-lime mb-5">About OMA</p>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-extrabold mb-6 leading-[1.06]"
              style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
            >
              A Practical Digital Marketing Agency
              <br />
              For Local Businesses.
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.52)' }}>
              OnlineMarketingAgency.ca was built for business owners who want clear, measurable marketing — not jargon, not vanity metrics, and not 12-month lock-in agreements.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.52)' }}>
              We work with small businesses across Canada — from single-location barbershops to multi-location home service companies. Our job is to build the system that gets your phone ringing.
            </p>

            <ul className="space-y-3 mb-9">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>
                  <span
                    className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: 'rgba(200,255,0,0.1)', border: '1px solid rgba(200,255,0,0.2)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-[10px] h-[10px]" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {v}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary text-sm px-5 py-2.5">
                About Our Agency
              </Link>
              <Link href="/contact" className="btn-outline-white text-sm px-5 py-2.5">
                Get Free Audit
              </Link>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-3.5">
            {stats.map(({ value, label, sub }) => (
              <div
                key={label}
                className="rounded-2xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="text-[2.2rem] font-black mb-1"
                  style={{ color: '#C8FF00', letterSpacing: '-0.04em' }}
                >
                  {value}
                </div>
                <div className="text-sm font-bold mb-0.5" style={{ color: '#F8FAFC' }}>{label}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.32)' }}>{sub}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
