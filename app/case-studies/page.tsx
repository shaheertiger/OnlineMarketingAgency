import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'
import { SITE_URL } from '@/lib/site'
import { caseStudies } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Case Studies | Local Business Marketing Results | OMA',
  description:
    'Real digital marketing results for local businesses across the GTA — a Brampton barbershop, a Mississauga dental clinic, and a Toronto HVAC company. See what we did and what changed.',
  alternates: { canonical: `${SITE_URL}/case-studies` },
  openGraph: {
    title: 'Case Studies | Local Business Marketing Results | OMA',
    description:
      'Real digital marketing results for local businesses across the Greater Toronto Area. See the strategy and the outcomes.',
    url: `${SITE_URL}/case-studies`,
  },
  twitter: {
    title: 'Case Studies | Local Business Marketing Results | OMA',
    description:
      'Real digital marketing results for local businesses across the Greater Toronto Area.',
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Case Studies — OnlineMarketingAgency.ca',
  url: `${SITE_URL}/case-studies`,
  numberOfItems: caseStudies.length,
  itemListElement: caseStudies.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE_URL}/case-studies/${c.slug}`,
    name: c.headline,
  })),
}

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div style={{ background: '#0F0F12' }}>
        <Breadcrumb items={[{ label: 'Case Studies' }]} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden section-pad" style={{ background: '#0F0F12' }} aria-labelledby="cs-heading">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative text-center max-w-3xl mx-auto">
          <p className="section-label-lime mb-5">Case Studies</p>
          <h1 id="cs-heading" className="text-4xl sm:text-5xl font-black leading-[1.06] mb-5" style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}>
            Real Businesses. <span style={{ color: '#C8FF00' }}>Real Results.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            A closer look at how we helped local businesses across the Greater Toronto Area get more calls,
            bookings, and customers — the starting point, what we did, and what changed.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-label="Case studies">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-5">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group rounded-2xl p-7 flex flex-col transition-all duration-200"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: '#F7F6F2', color: '#6B7280' }}>
                    {c.industry} · {c.city}
                  </span>
                  <span className="text-2xl font-black" style={{ color: '#1D4ED8', letterSpacing: '-0.03em' }}>{c.metric}</span>
                </div>
                <h2 className="text-base font-bold leading-snug mb-3 flex-1" style={{ color: '#0F0F12' }}>{c.headline}</h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>{c.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto" style={{ color: '#0F0F12' }}>
                  Read case study
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <p className="text-xs mt-8 text-center" style={{ color: '#9CA3AF' }}>
            Representative examples based on real client engagements. Results vary by market, budget, and competition.
          </p>
        </div>
      </section>

      <CTASection
        heading="Want Results Like These?"
        subheading="Get a free marketing audit and a clear plan for generating more leads from your local market."
      />
    </>
  )
}
