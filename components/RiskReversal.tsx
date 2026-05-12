'use client'

import Link from 'next/link'

const reasons = [
  {
    title: 'No Lock-In Contracts',
    desc: 'Month-to-month only. We earn your business every month through results, not paperwork.',
  },
  {
    title: 'Lead-Focused Strategy',
    desc: 'Every campaign is built around calls, bookings, and form submissions — not clicks or impressions.',
  },
  {
    title: 'Built for Local Businesses',
    desc: 'We work exclusively with small businesses and local service companies across Canada.',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Plain-language monthly reports showing exactly what your marketing spend is generating.',
  },
  {
    title: 'Fast Execution',
    desc: 'Most campaigns launch within 7 days. New websites typically live within 14 days of kickoff.',
  },
  {
    title: 'Conversion Tracking Included',
    desc: 'Full call and form tracking on every engagement. You always know what is working.',
  },
  {
    title: 'Channel Agnostic',
    desc: 'We recommend the channels with the best return for your business, not the highest margin for us.',
  },
  {
    title: 'Free Audit First',
    desc: 'Before spending anything, we audit your presence and show you where your biggest opportunities are.',
  },
]

export default function RiskReversal() {
  return (
    <section
      className="section-pad"
      style={{ background: '#F7F6F2' }}
      aria-labelledby="why-heading"
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 xl:gap-20 items-start">

          {/* Left: Heading */}
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-5">Why OMA</p>
            <h2
              id="why-heading"
              className="text-4xl md:text-[2.8rem] font-black leading-[1.02] mb-6"
              style={{ color: '#0F0F12', letterSpacing: '-0.035em' }}
            >
              Zero Fluff.
              <br />
              Clear Work.
              <br />
              Real Growth.
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-[340px]" style={{ color: '#6B7280' }}>
              We have a clear mandate: more calls, more bookings, and better cost per lead for local Canadian businesses. Nothing else.
            </p>
            <Link href="/contact" className="btn-dark text-sm px-6 py-3">
              Start With a Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right: Reasons */}
          <div className="grid sm:grid-cols-2 gap-3.5">
            {reasons.map(({ title, desc }) => (
              <div
                key={title}
                className="p-5 rounded-2xl"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: '#C8FF00' }}
                    aria-hidden="true"
                  >
                    <svg className="w-[11px] h-[11px]" fill="none" viewBox="0 0 24 24" stroke="#0F0F12" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold mb-1" style={{ color: '#0F0F12' }}>{title}</div>
                    <div className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
