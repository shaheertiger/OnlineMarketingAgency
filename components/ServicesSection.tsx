'use client'

import Link from 'next/link'

const featured = [
  {
    num: '01',
    title: 'Google Ads Management',
    desc: 'High-intent search campaigns built around the keywords your customers use when they are ready to buy. We handle strategy, copy, bidding, tracking, and ongoing optimization.',
    outcome: 'Result: More calls. Lower cost per lead.',
    href: '/google-ads-management',
    accent: '#C8FF00',
  },
  {
    num: '02',
    title: 'Local SEO + Google Maps',
    desc: 'Rank at the top of Google Maps and local organic results for neighbourhood and city searches. Includes GBP optimization, citation building, and local keyword strategy.',
    outcome: 'Result: More visibility. More walk-ins and calls.',
    href: '/local-seo-services',
    accent: '#60A5FA',
  },
]

const secondary = [
  { label: 'SEO Services',        desc: 'Organic rankings that compound over time.',          href: '/seo-services' },
  { label: 'Website Design',      desc: 'Lead-gen sites that convert traffic into customers.', href: '/website-design-for-small-business' },
  { label: 'GBP Optimization',    desc: 'Dominate Google Maps for local searches.',            href: '/google-business-profile-optimization' },
  { label: 'Meta Ads',            desc: 'Facebook and Instagram for local demand generation.', href: '/social-media-marketing-agency' },
  { label: 'Landing Pages',       desc: 'High-converting pages for specific campaigns.',       href: '/lead-generation-agency' },
  { label: 'Conversion Tracking', desc: 'Know exactly which campaigns generate real leads.',   href: '/lead-generation-agency' },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad relative"
      style={{ background: '#0F0F12' }}
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

      <div className="container-main relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <p className="section-label-lime mb-4">What We Do</p>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-extrabold leading-[1.06]"
              style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
            >
              Services That Drive
              <br />
              Real Business Growth
            </h2>
          </div>
          <Link href="/contact" className="btn-outline-white text-[13px] px-5 py-2.5 shrink-0 self-start sm:self-auto">
            Get Free Audit
          </Link>
        </div>

        {/* Featured 2-up */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block rounded-2xl p-7 relative overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${s.accent}28`
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}
            >
              <div
                className="text-[5rem] font-black leading-none mb-5 select-none"
                style={{ color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.06em' }}
                aria-hidden="true"
              >
                {s.num}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#F8FAFC' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.48)' }}>
                {s.desc}
              </p>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  background: `${s.accent}12`,
                  color: s.accent,
                  border: `1px solid ${s.accent}22`,
                }}
              >
                {s.outcome}
              </div>
              <div
                className="absolute top-7 right-7 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                style={{ background: s.accent }}
                aria-hidden="true"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#0F0F12" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {secondary.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center justify-between p-4 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(200,255,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              <div>
                <div className="text-sm font-bold mb-0.5" style={{ color: '#F8FAFC' }}>{s.label}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.32)' }}>{s.desc}</div>
              </div>
              <svg
                className="w-4 h-4 shrink-0 ml-3 transition-transform group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.2)" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
