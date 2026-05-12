import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'SEO Services Ontario | Local SEO for Ontario Businesses | OMA',
  description:
    'Need SEO services in Ontario? OMA helps Ontario businesses improve Google rankings, Local SEO, Google Business Profile visibility, website traffic, calls, and leads.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/seo-services-ontario' },
  keywords: [
    'SEO services Ontario',
    'SEO company Ontario',
    'SEO agency Ontario',
    'Local SEO Ontario',
    'SEO consultant Ontario',
  ],
  openGraph: {
    title: 'SEO Services Ontario | Local SEO for Ontario Businesses | OMA',
    description:
      'Need SEO services in Ontario? OMA helps Ontario businesses improve Google rankings, Local SEO, Google Business Profile visibility, website traffic, calls, and leads.',
    url: 'https://onlinemarketingagency.ca/seo-services-ontario',
  },
  twitter: {
    title: 'SEO Services Ontario | Local SEO for Ontario Businesses | OMA',
    description:
      'Need SEO services in Ontario? OMA helps Ontario businesses improve Google rankings, Local SEO, Google Business Profile visibility, website traffic, calls, and leads.',
  },
}

// ── Schemas ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services Ontario',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'SEO services for Ontario businesses including Local SEO, technical SEO, Google Business Profile optimization, content strategy, on-page SEO, and conversion-focused website improvements.',
  areaServed: { '@type': 'AdministrativeArea', name: 'Ontario, Canada' },
  serviceType: 'SEO Services',
  offers: {
    '@type': 'Offer',
    price: '499',
    priceCurrency: 'CAD',
    description: 'Local SEO Ontario from $499/month',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://onlinemarketingagency.ca/#organization',
  name: 'OnlineMarketingAgency.ca',
  url: 'https://onlinemarketingagency.ca',
  telephone: '+19056269919',
  email: 'info@onlinemarketingagency.ca',
  areaServed: { '@type': 'AdministrativeArea', name: 'Ontario, Canada' },
  description:
    'Ontario SEO agency providing SEO services, Local SEO, Google Business Profile optimization, Google Ads management, and lead generation for small and local businesses across Ontario.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are SEO services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO services are a set of strategies and technical improvements that help your website rank higher on Google for the searches your customers use. This includes technical SEO, keyword research, on-page optimization, local SEO, content strategy, Google Business Profile optimization, and conversion-focused improvements. The goal is to increase organic visibility so more potential customers find your business before they find a competitor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my Ontario business need SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Ontario customers search on Google before choosing a local business. If your business does not appear for service-based searches, city searches, or "near me" searches, you lose those leads to competitors who do. SEO builds long-term visibility that continues working without paying for every click. For small and local businesses in Ontario, strong SEO means more calls, more bookings, more quote requests, and more customers over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do SEO services cost in Ontario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO pricing depends on your website size, industry competition, number of target cities, current rankings, technical condition, and growth goals. OMA offers a free SEO audit to identify your biggest opportunities. Local SEO services start from $499 per month. Technical SEO audits and full SEO growth plans are custom-quoted based on scope and market complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Business Profile improvements and local map pack gains can appear in 4 to 8 weeks. Broader organic ranking improvements for competitive Ontario keywords typically require 3 to 6 months of consistent work. Timeline depends on your starting point, market competition, and how quickly technical and content improvements are implemented. We monitor and report on progress monthly throughout the engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Local SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local SEO is the process of optimizing your online presence to appear in Google Maps, the local pack, and city-based search results. It includes Google Business Profile optimization, local citation building, review strategy, city-specific service pages, and local keyword targeting. Local SEO is essential for any Ontario business that serves customers in a specific city or region.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can SEO help my business show up on Google Maps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Google Maps visibility is one of the primary outcomes of Local SEO. We optimize your Google Business Profile, build consistent local citations, improve your review volume, create location-specific content, and implement local schema markup — all signals Google uses to determine map pack rankings for local searches in Ontario.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you optimize Google Business Profile listings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Google Business Profile optimization is included in our Local SEO service. We complete every section of your GBP listing, select correct categories, add keyword-rich service descriptions, upload professional photos, build a review generation strategy, manage Q&A, and publish regular posts — all of which improve your local map pack rankings and customer conversions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SEO better than Google Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO and Google Ads serve different purposes. Google Ads generates leads immediately but stops the moment you pause your budget. SEO builds long-term organic visibility that compounds over time without requiring ongoing ad spend. Most Ontario businesses benefit from both: Google Ads for immediate lead flow while SEO builds, reducing cost per lead over 6 to 12 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you also offer Google Ads management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We manage Google Ads campaigns for Ontario businesses targeting high-intent service searches. Google Ads management starts from $199 per month plus ad spend. Many Ontario clients combine SEO and Google Ads for both immediate and long-term lead generation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of Ontario businesses do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with small and local businesses across Ontario including contractors, clinics, dentists, barbershops, restaurants, lawyers, real estate businesses, auto businesses, home service companies, retail stores, professional services, and multi-location businesses. If your business depends on local customers finding you on Google, SEO can make a measurable difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help if my website gets traffic but no leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Traffic without leads is a conversion problem. We review your CTAs, phone number visibility, mobile usability, page speed, trust signals, service page structure, and lead paths. Our SEO work includes conversion-focused improvements alongside rankings — because the goal is more customers, not just more visitors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create city pages and service pages for SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. City pages and service pages are a core part of Ontario SEO strategy. We build optimized pages targeting specific cities like Toronto, Mississauga, Brampton, Vaughan, Oakville, Hamilton, London, Ottawa, Barrie, and others — paired with service pages covering your exact offerings. This expands your local ranking footprint across the Ontario markets you serve.',
      },
    },
  ],
}

// ── Dashboard data ─────────────────────────────────────────────────────────────

const dashMetrics = [
  { label: 'Organic Leads', before: '6/mo', after: '74/mo', change: '+1,133%', color: '#C8FF00' },
  { label: 'Organic Sessions', before: '310/mo', after: '4,180/mo', change: '+1,248%', color: '#60A5FA' },
  { label: 'Technical Score', before: '41/100', after: '97/100', change: '+56 pts', color: '#34D399' },
  { label: 'Map Pack Cities', before: '0', after: '9', change: '+9 cities', color: '#A78BFA' },
]

const rankingRows = [
  { keyword: '"contractor near me Ontario"', before: 'Not ranked', after: '#3', delta: 'New', up: true },
  { keyword: '"SEO company Ontario"', before: 'Page 4', after: '#5', delta: '+25', up: true },
  { keyword: '"local SEO Toronto"', before: 'Page 2', after: '#2', delta: '+11', up: true },
  { keyword: '"dentist Mississauga"', before: '#18', after: '#3', delta: '+15', up: true },
]

const auditIssues = [
  { label: '6 pages missing title tags', severity: 'critical' },
  { label: 'GBP: fully optimized', severity: 'ok' },
  { label: 'Mobile speed: 2.8s', severity: 'warning' },
]

// ── Page ───────────────────────────────────────────────────────────────────────

export default function SEOServicesOntarioPage() {
  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <div style={{ background: '#0F0F12' }}>
        <Breadcrumb
          items={[
            { label: 'Services', href: '/#services' },
            { label: 'SEO Services Ontario' },
          ]}
        />
      </div>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* Left: copy */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(200,255,0,0.08)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.15)' }}
                >
                  SEO Services Ontario · OMA
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl font-black leading-[1.04] mb-6"
                style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
              >
                SEO Services Ontario for{' '}
                <span style={{ color: '#C8FF00' }}>Local Business Growth</span>
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Want your Ontario business to rank higher on Google and get more calls, bookings, quote
                requests, and leads? OMA helps businesses grow with SEO services Ontario, Local SEO, Google
                Business Profile optimization, content strategy, technical SEO, and conversion-focused website
                improvements.
              </p>

              {/* Trust bullets */}
              <ul className="grid grid-cols-2 gap-2.5 mb-9">
                {[
                  'Ontario-focused SEO strategy',
                  'Built for small businesses',
                  'Local SEO focused',
                  'No lock-in contracts',
                  'Clear monthly reporting',
                  'Free SEO audit available',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    <span
                      className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
                      style={{ background: 'rgba(200,255,0,0.1)', border: '1px solid rgba(200,255,0,0.2)' }}
                      aria-hidden="true"
                    >
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary text-sm px-6 py-3.5">
                  Get a Free SEO Audit
                </Link>
                <a
                  href="tel:+19056269919"
                  className="btn-outline-white text-sm px-6 py-3.5 flex items-center gap-2"
                  aria-label="Call OMA at 905-626-9919"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  905-626-9919
                </a>
              </div>
            </div>

            {/* Right: Ontario SEO dashboard visual */}
            <div
              aria-label="SEO services Ontario dashboard showing Google rankings, local visibility, organic traffic, calls, form leads, and Google Maps performance"
              role="img"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: '#16161A', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
              >
                {/* Titlebar */}
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{ background: '#1E1E24', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                  </div>
                  <span className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Ontario SEO Performance — OMA Dashboard
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(200,255,0,0.1)', color: '#C8FF00' }}
                  >
                    Live
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  {/* Metric tiles */}
                  <div className="grid grid-cols-2 gap-3">
                    {dashMetrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl p-3.5"
                        style={{ background: '#1E1E24', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <p className="text-[10px] font-medium mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          {m.label}
                        </p>
                        <p className="text-xl font-black mb-0.5" style={{ color: m.color }}>
                          {m.after}
                        </p>
                        <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                          was {m.before} &nbsp;·&nbsp;{' '}
                          <span style={{ color: '#C8FF00' }}>{m.change}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bar chart strip */}
                  <div
                    className="rounded-xl p-3.5"
                    style={{ background: '#1E1E24', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <p className="text-[10px] font-medium mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Organic Traffic Growth — Ontario
                    </p>
                    <div className="flex items-end gap-1 h-10">
                      {[18, 22, 28, 34, 42, 55, 68, 80, 88, 95, 100, 100].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{ height: `${h}%`, background: i >= 9 ? '#C8FF00' : 'rgba(200,255,0,0.25)' }}
                        />
                      ))}
                    </div>
                    <p className="text-[9px] mt-1.5" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      12-month trend · Ontario organic sessions
                    </p>
                  </div>

                  {/* Keyword ranking rows */}
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="px-3.5 py-2"
                      style={{ background: '#1E1E24', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <p className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Ontario Keyword Rankings
                      </p>
                    </div>
                    {rankingRows.map((r) => (
                      <div
                        key={r.keyword}
                        className="flex items-center justify-between px-3.5 py-2.5"
                        style={{ background: '#16161A', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                      >
                        <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                          {r.keyword}
                        </span>
                        <div className="flex items-center gap-3 shrink-0 ml-3">
                          <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                            {r.before}
                          </span>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span className="text-[11px] font-bold" style={{ color: '#C8FF00' }}>
                            {r.after}
                          </span>
                          <span
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(200,255,0,0.1)', color: '#C8FF00' }}
                          >
                            {r.delta}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Audit issues strip */}
                  <div className="flex flex-wrap gap-2">
                    {auditIssues.map((issue) => (
                      <span
                        key={issue.label}
                        className="text-[10px] font-medium px-2.5 py-1.5 rounded-full"
                        style={{
                          background:
                            issue.severity === 'critical'
                              ? 'rgba(239,68,68,0.1)'
                              : issue.severity === 'ok'
                              ? 'rgba(200,255,0,0.08)'
                              : 'rgba(251,191,36,0.1)',
                          color:
                            issue.severity === 'critical'
                              ? '#FCA5A5'
                              : issue.severity === 'ok'
                              ? '#C8FF00'
                              : '#FCD34D',
                          border: `1px solid ${
                            issue.severity === 'critical'
                              ? 'rgba(239,68,68,0.2)'
                              : issue.severity === 'ok'
                              ? 'rgba(200,255,0,0.15)'
                              : 'rgba(251,191,36,0.2)'
                          }`,
                        }}
                      >
                        {issue.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── S1: Why Ontario Businesses Need SEO ───────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="s1-heading"
      >
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16 items-start">

            {/* Left: header + intro */}
            <div className="lg:col-span-2">
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-5"
                style={{ background: 'rgba(29,78,216,0.08)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.15)' }}
              >
                Why SEO Matters in Ontario
              </span>
              <h2
                id="s1-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Your Customers Search on Google Before They Call
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                Before choosing a contractor, dentist, clinic, restaurant, or any local service provider,
                Ontario customers open Google. They search for things like <em>contractor near me</em>,{' '}
                <em>dentist in Ontario</em>, <em>barber shop Toronto</em>,{' '}
                <em>restaurant Mississauga</em>, <em>lawyer Brampton</em>,{' '}
                <em>clinic Vaughan</em>, <em>home services Ottawa</em>, or{' '}
                <em>SEO company Ontario</em>. If your business does not appear, competitors who do
                appear get those calls.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#444' }}>
                SEO services Ontario builds long-term visibility so your business ranks where customers
                are already searching — without depending entirely on paid ads for every lead.
              </p>
            </div>

            {/* Right: numbered cards */}
            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  n: '01',
                  title: 'Local and Near-Me Searches Drive Real Calls',
                  body: 'Searches like "plumber near me" or "emergency dentist Mississauga" come from people who need a service now. If you rank for these searches, you capture high-intent leads before your competitor does.',
                },
                {
                  n: '02',
                  title: 'Google Maps Visibility Directly Affects Revenue',
                  body: 'The local map pack — the three businesses shown at the top of Google local results — captures a significant share of all clicks. Businesses not in that three-pack miss the majority of local traffic.',
                },
                {
                  n: '03',
                  title: 'Organic Rankings Reduce Cost Per Lead Over Time',
                  body: 'Unlike Google Ads, organic SEO rankings do not stop the moment you pause spending. A strong SEO foundation compounds over months, reducing your cost per lead as organic volume grows.',
                },
                {
                  n: '04',
                  title: 'Ontario Has Strong Competition in Most Industries',
                  body: 'Toronto, Mississauga, Brampton, Vaughan, Hamilton, and other Ontario markets are competitive. A clear SEO strategy that targets the right keywords and cities separates your business from competitors relying on weak or outdated websites.',
                },
                {
                  n: '05',
                  title: 'Content and Technical Quality Are Now Table Stakes',
                  body: 'Google evaluates page speed, mobile usability, content relevance, schema markup, and site structure. Businesses with technically sound, content-rich websites consistently outrank those without — regardless of how long they have been online.',
                },
              ].map((card) => (
                <div
                  key={card.n}
                  className="flex gap-5 p-5 rounded-xl"
                  style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)' }}
                >
                  <span
                    className="text-2xl font-black shrink-0 leading-none"
                    style={{ color: '#C8FF00', WebkitTextStroke: '1px rgba(0,0,0,0.12)' }}
                  >
                    {card.n}
                  </span>
                  <div>
                    <h3 className="font-bold text-base mb-1.5" style={{ color: '#0F0F12' }}>
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#555' }}>
                      {card.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── S2: What Our SEO Services Include ────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#ffffff' }}
        aria-labelledby="s2-heading"
      >
        <div className="container-main">
          <div className="text-center mb-12">
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: 'rgba(29,78,216,0.06)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
            >
              Our SEO Services in Ontario
            </span>
            <h2
              id="s2-heading"
              className="text-3xl sm:text-4xl font-black leading-[1.08]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              What Our Ontario SEO Services Include
            </h2>
            <p className="text-base leading-relaxed mt-4 max-w-2xl mx-auto" style={{ color: '#555' }}>
              Every SEO engagement is built around your business, your market, your competition, and your
              actual growth goals — not a generic checklist.
            </p>
          </div>

          {/* Featured panels */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">

            {/* SEO Audit — dark panel */}
            <div
              className="relative rounded-2xl overflow-hidden p-8"
              style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
              <div className="relative">
                <span
                  className="text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full inline-block mb-5"
                  style={{ background: 'rgba(200,255,0,0.08)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.15)' }}
                >
                  Foundation
                </span>
                <h3 className="text-2xl font-black mb-3" style={{ color: '#F8FAFC' }}>
                  SEO Audit
                </h3>
                <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  We review your website structure, indexing, metadata, headings, content quality, page
                  speed, internal links, technical issues, and ranking opportunities. The audit identifies
                  what is holding your Ontario business back and prioritizes the highest-impact fixes.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#C8FF00' }}
                >
                  Request a free audit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Local SEO — cream panel */}
            <div
              className="rounded-2xl p-8"
              style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.07)' }}
            >
              <span
                className="text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full inline-block mb-5"
                style={{ background: 'rgba(29,78,216,0.08)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
              >
                Most Popular
              </span>
              <h3 className="text-2xl font-black mb-3" style={{ color: '#0F0F12' }}>
                Local SEO Ontario
              </h3>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#444' }}>
                Optimize for city-based searches, Google Maps visibility, Google Business Profile
                performance, reviews, local citations, and "near me" searches. Local SEO Ontario is
                the highest-ROI service for businesses that depend on local customers finding them
                through Google.
              </p>
              <Link
                href="/local-seo-services"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#1D4ED8' }}
              >
                Explore Local SEO services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Supporting service blocks */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: 'Keyword Research',
                body: 'Find the searches Ontario customers use before they call, book, or request a quote — mapped to your services and cities.',
              },
              {
                title: 'On-Page SEO',
                body: 'Improve titles, H1s, content structure, internal links, image alt text, service pages, and calls-to-action.',
              },
              {
                title: 'Technical SEO',
                body: 'Review crawlability, indexing, page speed, sitemap, robots.txt, canonical tags, schema markup, broken links, and mobile usability.',
              },
              {
                title: 'Content Strategy',
                body: 'Plan service pages, city pages, industry pages, blog posts, FAQs, and comparison content based on buyer intent.',
              },
              {
                title: 'Conversion SEO',
                body: 'Improve CTAs, forms, phone visibility, trust signals, and landing page structure to turn more organic traffic into real leads.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-5"
                style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <h3 className="font-bold text-sm mb-2" style={{ color: '#0F0F12' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#555' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: Local SEO Ontario ─────────────────────────────────────────── */}
      <section
        className="relative section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="s3-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

            <div>
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-5"
                style={{ background: 'rgba(200,255,0,0.08)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.15)' }}
              >
                Local SEO Ontario
              </span>
              <h2
                id="s3-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
              >
                Show Up Where Ontario Customers Actually Search
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Most Ontario customers use Google Maps, the local pack, and "near me" searches before
                contacting a business. If your business is not visible in those results, the calls and
                leads go to whoever is.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                We help Ontario businesses build strong local visibility across{' '}
                <strong style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Toronto, Mississauga, Brampton, Vaughan, Markham, Oakville, Burlington, Hamilton,
                  Milton, Kitchener, Waterloo, London, Barrie, Ottawa, Windsor, Guelph, Cambridge,
                  Oshawa, Pickering, Ajax, Whitby, Richmond Hill, Newmarket, and Niagara
                </strong>{' '}
                — as well as the smaller markets between them.
              </p>
              <Link href="/contact" className="btn-primary text-sm px-6 py-3.5 inline-block">
                Get a Free Local SEO Audit
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '📍', title: 'Google Business Profile', body: 'Complete optimization of every GBP section, categories, services, photos, review strategy, and regular posts.' },
                { icon: '🏙️', title: 'City Landing Pages', body: 'Dedicated, optimized pages for every Ontario city and region your business serves.' },
                { icon: '🔍', title: 'Local Keyword Targeting', body: 'City-based and near-me keyword research mapped to your actual services and conversion intent.' },
                { icon: '⭐', title: 'Review Strategy', body: 'Systems to increase review volume and recency on Google Business Profile and other platforms.' },
                { icon: '📋', title: 'Local Citations', body: 'Consistent NAP data across directories, aggregators, and local listing sites that influence map pack rankings.' },
                { icon: '🔗', title: 'Internal Linking', body: 'City and service page internal linking structures that distribute ranking signals across your entire Ontario presence.' },
                { icon: '📐', title: 'Schema Markup', body: 'LocalBusiness, Service, and FAQ schema that help Google understand your location, services, and relevance.' },
                { icon: '📝', title: 'Location-Based Content', body: 'City-specific service content, FAQs, and landing pages built around local search intent and buyer questions.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="text-xl mb-2 block" role="presentation">{item.icon}</span>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: '#F8FAFC' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── S4: Industries Served ─────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="s4-heading"
      >
        <div className="container-main">
          <div className="text-center mb-10">
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: 'rgba(29,78,216,0.08)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
            >
              Ontario Businesses We Help
            </span>
            <h2
              id="s4-heading"
              className="text-3xl sm:text-4xl font-black leading-[1.08]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              SEO for Ontario Businesses That Need More Leads
            </h2>
            <p className="text-base leading-relaxed mt-4 max-w-2xl mx-auto" style={{ color: '#555' }}>
              Every industry has different search intent, competition levels, and conversion patterns.
              We tailor SEO strategy to what actually drives results in your market.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { industry: 'Contractors', outcome: 'More quote requests from homeowners searching for local trades' },
              { industry: 'Barbershops', outcome: 'More bookings and calls from local near-me and city searches' },
              { industry: 'Clinics', outcome: 'More appointment requests from patients searching for local healthcare' },
              { industry: 'Dentists', outcome: 'More new patient inquiries and treatment-specific search visibility' },
              { industry: 'Restaurants', outcome: 'More local discovery, Google Maps visibility, and reservations' },
              { industry: 'Lawyers', outcome: 'More qualified consultations from high-intent legal searches' },
              { industry: 'Real Estate', outcome: 'More buyer and seller leads from local property search traffic' },
              { industry: 'Auto Businesses', outcome: 'More calls and form submissions from nearby vehicle searches' },
              { industry: 'Home Services', outcome: 'More local service requests from emergency and routine searches' },
              { industry: 'Retail Stores', outcome: 'More product discovery and walk-in visits from local intent searches' },
              { industry: 'Professional Services', outcome: 'More qualified inquiries from service-specific Ontario searches' },
              { industry: 'Multi-Location', outcome: 'Stronger city-by-city visibility across all Ontario markets served' },
            ].map((item) => (
              <div
                key={item.industry}
                className="rounded-xl p-5"
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <h3 className="font-bold text-sm mb-2" style={{ color: '#0F0F12' }}>
                  {item.industry}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#666' }}>
                  {item.outcome}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-primary text-sm px-6 py-3.5 inline-block">
              Get a Free SEO Audit for Your Ontario Business
            </Link>
          </div>
        </div>
      </section>

      {/* ── S5: Ontario SEO Process ───────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#ffffff' }}
        aria-labelledby="s5-heading"
      >
        <div className="container-main">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: 'rgba(29,78,216,0.06)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
            >
              Our Ontario SEO Process
            </span>
            <h2
              id="s5-heading"
              className="text-3xl sm:text-4xl font-black leading-[1.08]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              How We Build SEO Results for Ontario Businesses
            </h2>
            <p className="text-base leading-relaxed mt-4" style={{ color: '#555' }}>
              A clear, repeatable process focused on business outcomes — not activity metrics.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: '01',
                title: 'Audit',
                body: 'We review your website, current rankings, competitors, technical issues, content quality, Google Business Profile, local visibility, and conversion paths. The audit identifies your biggest opportunities in the Ontario market.',
              },
              {
                step: '02',
                title: 'Strategy',
                body: 'We build a clear SEO plan based on your services, Ontario market, city targets, industry, competition, and highest-value keywords. No generic templates — every plan is built for your specific situation.',
              },
              {
                step: '03',
                title: 'Optimization',
                body: 'We improve your site structure, metadata, service pages, internal links, technical SEO, Google Business Profile, and content based on audit findings and strategy priorities.',
              },
              {
                step: '04',
                title: 'Content Growth',
                body: 'We create or improve pages that can rank for buyer-intent searches, city-based searches, local searches, and industry-specific questions Ontario customers ask before buying.',
              },
              {
                step: '05',
                title: 'Tracking',
                body: 'We monitor rankings, organic traffic, calls, form submissions, Google Maps actions, local visibility, and conversion performance — and report on it clearly every month.',
              },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-black text-sm"
                    style={{ background: '#C8FF00', color: '#0F0F12' }}
                  >
                    {item.step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px flex-1 my-2" style={{ background: 'rgba(0,0,0,0.1)' }} />
                  )}
                </div>
                <div className={i < arr.length - 1 ? 'pb-8' : ''}>
                  <h3 className="font-black text-lg mb-2" style={{ color: '#0F0F12' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#555' }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6: Pricing ──────────────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="s6-heading"
      >
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            <div className="lg:col-span-2">
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-5"
                style={{ background: 'rgba(29,78,216,0.08)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
              >
                SEO Pricing Ontario
              </span>
              <h2
                id="s6-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                How Much Do SEO Services Cost in Ontario?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                SEO pricing depends on your website size, industry competition, number of target cities,
                current rankings, technical condition, and growth goals.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#444' }}>
                We start with a free audit so you understand exactly what the work involves before
                committing to anything.
              </p>
              <Link href="/contact" className="btn-primary text-sm px-6 py-3.5 inline-block">
                Request a Free SEO Audit
              </Link>
            </div>

            <div className="lg:col-span-3">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(0,0,0,0.09)' }}
              >
                {[
                  { service: 'SEO Audit', price: 'Free', featured: true },
                  { service: 'Local SEO Ontario', price: 'From $499/month', featured: false },
                  { service: 'SEO Consulting', price: 'From $499/month', featured: false },
                  { service: 'Technical SEO Audit', price: 'Custom', featured: false },
                  { service: 'SEO Content Strategy', price: 'Custom', featured: false },
                  { service: 'Full SEO Growth Plan', price: 'Custom', featured: false },
                ].map((row) => (
                  <div
                    key={row.service}
                    className="flex items-center justify-between px-6 py-4"
                    style={{
                      background: row.featured ? '#0F0F12' : '#fff',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                    }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: row.featured ? '#F8FAFC' : '#222' }}
                    >
                      {row.service}
                    </span>
                    <span
                      className="text-sm font-black"
                      style={{ color: row.featured ? '#C8FF00' : '#0F0F12' }}
                    >
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: '#888' }}>
                Pricing varies by market competition, scope, and number of target locations. All engagements
                begin with a free SEO audit. No lock-in contracts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── S7: Why Choose OMA ───────────────────────────────────────────── */}
      <section
        className="relative section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="s7-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

            <div>
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-5"
                style={{ background: 'rgba(200,255,0,0.08)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.15)' }}
              >
                Why OMA
              </span>
              <h2
                id="s7-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
              >
                Why Choose OMA for SEO Services in Ontario?
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                We are an Ontario-based SEO agency focused on real business outcomes — calls, bookings,
                form submissions, and qualified leads — not just rankings and traffic numbers.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Clear SEO strategy without confusing jargon or agency smoke-and-mirrors',
                'Focused on calls, leads, bookings, and real business growth — not vanity metrics',
                'Built for local businesses and small companies across Ontario',
                'Ontario-focused Local SEO strategy that reflects how customers actually search',
                'Local SEO, technical SEO, content strategy, and Google Ads under one roof',
                'Google Business Profile optimization included in every Local SEO engagement',
                'Transparent monthly reporting on rankings, traffic, and conversions',
                'No lock-in contracts — we earn the relationship every month',
                'Practical recommendations you can understand and act on',
                'SEO strategy connected to conversion and lead generation from the start',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: 'rgba(200,255,0,0.1)', border: '1px solid rgba(200,255,0,0.2)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── S8: Trust / E-E-A-T ──────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#ffffff' }}
        aria-labelledby="s8-heading"
      >
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            <div className="lg:col-span-3">
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-5"
                style={{ background: 'rgba(29,78,216,0.06)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
              >
                Experience · Expertise · Authority · Trust
              </span>
              <h2
                id="s8-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Ontario SEO Built on Actual Results
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                We work with Ontario contractors, clinics, dentists, restaurants, barbershops, lawyers,
                and service businesses who need real lead growth — not agencies who want a long retainer
                with slow results.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                Our approach combines{' '}
                <Link href="/seo-services" className="underline underline-offset-2" style={{ color: '#1D4ED8' }}>
                  technical SEO
                </Link>
                ,{' '}
                <Link href="/local-seo-services" className="underline underline-offset-2" style={{ color: '#1D4ED8' }}>
                  Local SEO services
                </Link>
                ,{' '}
                <Link href="/google-business-profile-optimization" className="underline underline-offset-2" style={{ color: '#1D4ED8' }}>
                  Google Business Profile optimization
                </Link>
                , content strategy, and{' '}
                <Link href="/lead-generation-agency" className="underline underline-offset-2" style={{ color: '#1D4ED8' }}>
                  lead generation
                </Link>{' '}
                into a single Ontario-focused growth strategy.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#444' }}>
                If you are looking for an{' '}
                <Link href="/seo-consultant" className="underline underline-offset-2" style={{ color: '#1D4ED8' }}>
                  SEO consultant
                </Link>{' '}
                who can assess your situation and give honest recommendations before selling a package,
                that is where we start every relationship — with a free audit.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-6 space-y-4"
                style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <h3 className="font-black text-base mb-2" style={{ color: '#0F0F12' }}>
                  What clients can expect
                </h3>
                {[
                  { label: 'Clear audit within 5 business days', note: 'No filler reports' },
                  { label: 'Monthly ranking and traffic updates', note: 'In plain language' },
                  { label: 'Conversion improvements alongside SEO', note: 'Not just rankings' },
                  { label: 'Ontario market expertise', note: 'Not one-size-fits-all templates' },
                  { label: 'Google Business Profile included', note: 'In every Local SEO plan' },
                  { label: 'No lock-in contracts', note: 'Month-to-month by default' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span
                      className="w-4 h-4 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: '#0F0F12' }}
                      aria-hidden="true"
                    >
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#0F0F12' }}>
                        {item.label}
                      </p>
                      <p className="text-xs" style={{ color: '#888' }}>
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── S9: FAQ ──────────────────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="s9-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-4"
                style={{ background: 'rgba(29,78,216,0.08)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
              >
                Frequently Asked Questions
              </span>
              <h2
                id="s9-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08]"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                SEO Services Ontario FAQs
              </h2>
            </div>

            <dl className="space-y-5">
              {faqSchema.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  className="rounded-xl p-6"
                  style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)' }}
                >
                  <dt className="font-bold text-base mb-2" style={{ color: '#0F0F12' }}>
                    {faq.name}
                  </dt>
                  <dd className="text-sm leading-relaxed" style={{ color: '#555' }}>
                    {faq.acceptedAnswer.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── S10: Final CTA + Form ────────────────────────────────────────── */}
      <section
        className="relative section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="s10-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

            {/* Left: CTA copy */}
            <div>
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-5"
                style={{ background: 'rgba(200,255,0,0.08)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.15)' }}
              >
                Free SEO Audit
              </span>
              <h2
                id="s10-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
              >
                Ready to Improve Your Google Rankings in Ontario?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Request a free SEO audit and we will show you what is holding your website back, where
                your biggest ranking opportunities are, and how to turn more organic traffic into real
                leads for your Ontario business.
              </p>

              {/* What the audit covers */}
              <div
                className="rounded-xl p-5 mb-8 space-y-2.5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Your free audit covers
                </p>
                {[
                  'Current ranking positions for your target Ontario keywords',
                  'Technical issues holding your website back in Google',
                  'Google Business Profile optimization gaps',
                  'Competitor comparison for your Ontario market',
                  'Top ranking opportunities by service and city',
                  'Conversion issues preventing leads from organic traffic',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="tel:+19056269919"
                className="flex items-center gap-3 mb-8"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                aria-label="Call OMA at 905-626-9919"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-base font-semibold">905-626-9919</span>
              </a>

              {/* Related services */}
              <div>
                <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Related services
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'SEO consultant', href: '/seo-consultant' },
                    { label: 'Local SEO services', href: '/local-seo-services' },
                    { label: 'Google Business Profile', href: '/google-business-profile-optimization' },
                    { label: 'Google Ads management', href: '/google-ads-management' },
                    { label: 'Website design', href: '/website-design-for-small-business' },
                    { label: 'Lead generation', href: '/lead-generation-agency' },
                    { label: 'SEO Barrie', href: '/barrie' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xs px-3 py-1.5 rounded-full transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        color: 'rgba(255,255,255,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Lead form */}
            <div>
              <div
                className="rounded-2xl p-7"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
              >
                <h3 className="font-black text-xl mb-1" style={{ color: '#F8FAFC' }}>
                  Request a Free SEO Audit
                </h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Tell us about your Ontario business and we will review your SEO for free.
                </p>

                <form className="space-y-4" action="/contact" method="GET" aria-label="Free SEO audit request form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="seo-ontario-name"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Name <span aria-hidden="true" style={{ color: '#C8FF00' }}>*</span>
                      </label>
                      <input
                        id="seo-ontario-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#F8FAFC',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="seo-ontario-business"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Business Name <span aria-hidden="true" style={{ color: '#C8FF00' }}>*</span>
                      </label>
                      <input
                        id="seo-ontario-business"
                        name="businessName"
                        type="text"
                        required
                        placeholder="Your business name"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#F8FAFC',
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="seo-ontario-email"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Email <span aria-hidden="true" style={{ color: '#C8FF00' }}>*</span>
                      </label>
                      <input
                        id="seo-ontario-email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#F8FAFC',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="seo-ontario-phone"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Phone
                      </label>
                      <input
                        id="seo-ontario-phone"
                        name="phone"
                        type="tel"
                        placeholder="905-000-0000"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#F8FAFC',
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="seo-ontario-website"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Website
                      </label>
                      <input
                        id="seo-ontario-website"
                        name="website"
                        type="url"
                        placeholder="https://yoursite.ca"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#F8FAFC',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="seo-ontario-city"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        City
                      </label>
                      <input
                        id="seo-ontario-city"
                        name="city"
                        type="text"
                        placeholder="Toronto, Mississauga…"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#F8FAFC',
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="seo-ontario-industry"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Industry
                      </label>
                      <input
                        id="seo-ontario-industry"
                        name="industry"
                        type="text"
                        placeholder="Contractor, clinic, restaurant…"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#F8FAFC',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="seo-ontario-goal"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Main Goal
                      </label>
                      <select
                        id="seo-ontario-goal"
                        name="goal"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors appearance-none"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#F8FAFC',
                        }}
                      >
                        <option value="">Select a goal</option>
                        <option value="more-calls">More calls from Google</option>
                        <option value="rank-higher">Rank higher in Ontario</option>
                        <option value="google-maps">Show up on Google Maps</option>
                        <option value="more-leads">More leads and form submissions</option>
                        <option value="seo-audit">Understand my current SEO</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="seo-ontario-message"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="seo-ontario-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your business and what you are trying to achieve with SEO in Ontario."
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#F8FAFC',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg py-4 text-sm font-black tracking-wide transition-opacity hover:opacity-90"
                    style={{ background: '#C8FF00', color: '#0F0F12' }}
                  >
                    Request Free SEO Audit
                  </button>

                  <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    No lock-in contracts. Free audit with no obligation.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
