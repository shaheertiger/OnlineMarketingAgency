'use client'

import Link from 'next/link'

const guarantees = [
  {
    title: 'No Lock-In Contracts',
    desc: 'Cancel anytime. We earn your business every month by delivering results, not by trapping you in a 12-month agreement.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    color: '#34D399',
  },
  {
    title: 'Free Audit Before You Spend',
    desc: 'We review your website, ads, SEO, and competitors before you pay a dollar. You will know exactly what we plan to do and why.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#3B82F6',
  },
  {
    title: 'Plain-Language Monthly Reports',
    desc: 'No vanity metrics. Every report shows calls generated, leads received, cost per lead, and what we are doing next month.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: '#818CF8',
  },
  {
    title: 'Results In 30 Days Or We Fix It',
    desc: 'Google Ads campaigns go live within 7 days. If you are not seeing leads within 30 days, we audit and rebuild at no charge.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#FBBF24',
  },
]

export default function RiskReversal() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: '#0A0F1E' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main relative">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Our Commitment</p>
          <h2 className="section-heading mb-4 max-w-2xl mx-auto">
            Zero Risk.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #34D399, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Real Results.
            </span>{' '}
            No Fluff.
          </h2>
          <p className="section-subtext max-w-xl mx-auto">
            Every agency promises results. Here is what we actually back them with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl p-6 flex flex-col transition-all duration-300"
              style={{
                background: 'rgba(11, 17, 32, 0.7)',
                border: '1px solid rgba(51, 65, 85, 0.4)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = `${g.color}30`
                el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${g.color}15`
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(51, 65, 85, 0.4)'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${g.color}15`,
                  border: `1px solid ${g.color}25`,
                  color: g.color,
                }}
              >
                {g.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#F8FAFC' }}>{g.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#475569' }}>{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary text-base px-9 py-4">
            Claim Your Free Audit
          </Link>
          <p className="text-sm mt-4" style={{ color: '#334155' }}>
            No commitment. No pressure. Just a clear picture of your growth opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
