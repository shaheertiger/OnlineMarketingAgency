import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'SEO Consultant in Canada | SEO Strategy for Small Businesses',
  description:
    'Need an SEO consultant to improve your Google rankings, local visibility, traffic, and leads? OMA helps Canadian small businesses with SEO audits, Local SEO, technical SEO, content strategy, and search growth.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/seo-consultant' },
  keywords: ['SEO consultant Canada', 'SEO consulting services', 'local SEO consultant'],
  openGraph: {
    title: 'SEO Consultant in Canada | SEO Strategy for Small Businesses',
    description:
      'Need an SEO consultant to improve your Google rankings, local visibility, traffic, and leads? OMA helps Canadian small businesses with SEO audits, Local SEO, technical SEO, content strategy, and search growth.',
    url: 'https://onlinemarketingagency.ca/seo-consultant',
  },
  twitter: {
    title: 'SEO Consultant in Canada | SEO Strategy for Small Businesses',
    description:
      'Need an SEO consultant to improve your Google rankings, local visibility, traffic, and leads? OMA helps Canadian small businesses with SEO audits, Local SEO, technical SEO, content strategy, and search growth.',
  },
}

// ── Schemas ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Consulting',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'SEO consulting for small businesses in Canada. SEO audits, local SEO, technical SEO, keyword research, content strategy, and conversion-focused optimization.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'SEO Consulting',
  offers: {
    '@type': 'Offer',
    price: '499',
    priceCurrency: 'CAD',
    description: 'SEO consulting from $499/month',
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
  areaServed: { '@type': 'Country', name: 'Canada' },
  description:
    'Canadian digital marketing agency providing SEO consulting, Google Ads, Local SEO, and lead generation for small businesses.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an SEO consultant do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An SEO consultant audits your website, identifies why you are not ranking, analyzes what competitors are doing better, and creates a strategy to improve your organic visibility. This includes technical SEO cleanup, on-page optimization, local SEO, content planning, and ongoing performance monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an SEO consultant cost in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO consulting in Canada typically starts from $499 per month for ongoing strategy and optimization. A one-time SEO audit may be free or fixed-price. The total cost depends on your website size, market competition, and growth goals. OMA offers a free SEO audit to start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SEO worth it for small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. For most local service businesses, SEO is one of the highest-ROI marketing channels because it targets people who are actively searching for your service. Unlike ads, the results compound over time — rankings earned today continue generating leads without ongoing ad spend.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most small businesses see meaningful improvements in 3 to 6 months. Google Business Profile and local map pack improvements can happen faster — sometimes within 4 to 8 weeks. Competitive organic rankings for high-volume keywords take longer. We report monthly so you can track progress throughout.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an SEO consultant and an SEO agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An SEO consultant provides strategy, audits, and recommendations — often working directly with your team. An SEO agency typically handles full execution. OMA operates as both: we provide the strategy and handle the implementation, from technical fixes to content creation and local optimization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Local SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Local SEO is a core part of our SEO consulting service. We optimize your Google Business Profile, build local citations, create city-specific service pages, improve your map pack rankings, and help you appear in front of customers searching in your city or neighborhood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help if my website gets traffic but no leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Traffic without leads is a conversion problem. We review your landing pages, call-to-action placement, phone number visibility, page load speed, trust signals, and user experience. Our SEO consulting includes conversion-focused optimization — not just rankings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you also manage Google Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We manage Google Ads campaigns for local businesses across Canada starting from $199 per month plus ad spend. Many of our clients combine SEO consulting with Google Ads management for maximum lead volume — paid search for immediate results, SEO for long-term growth.',
      },
    },
  ],
}

// ── Stat data ──────────────────────────────────────────────────────────────────

const auditMetrics = [
  { label: 'Organic Traffic', before: '34/mo', after: '847/mo', change: '+2,391%', color: '#C8FF00' },
  { label: 'Keywords Ranking', before: '4', after: '63', change: '+59', color: '#60A5FA' },
  { label: 'Technical Score', before: '41/100', after: '94/100', change: '+53 pts', color: '#34D399' },
  { label: 'Map Pack Wins', before: '0', after: '7', change: '+7 cities', color: '#A78BFA' },
]

const rankingRows = [
  { keyword: '"plumber Toronto"', before: 'Page 2', after: '#3', delta: '+14', up: true },
  { keyword: '"HVAC contractor near me"', before: 'Not ranked', after: '#5', delta: 'New', up: true },
  { keyword: '"dentist Mississauga"', before: '#12', after: '#2', delta: '+10', up: true },
  { keyword: '"roofing contractor Brampton"', before: 'Page 3', after: '#4', delta: '+18', up: true },
]

const issues = [
  { label: '3 missing title tags', severity: 'critical' },
  { label: 'Mobile speed: 2.8s', severity: 'warning' },
  { label: 'GBP: fully optimized', severity: 'ok' },
]

// ── Page ───────────────────────────────────────────────────────────────────────

export default function SEOConsultantPage() {
  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <div style={{ background: '#0F0F12' }}>
        <Breadcrumb items={[{ label: 'Services', href: '/#services' }, { label: 'SEO Consultant' }]} />
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
                  SEO Consultant · Canada
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl font-black leading-[1.04] mb-6"
                style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
              >
                SEO Consultant for{' '}
                <span style={{ color: '#C8FF00' }}>Small Businesses</span>{' '}
                in Canada
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Want to rank higher on Google, attract better traffic, and turn more visitors into real leads?
                OMA helps Canadian small businesses improve search visibility with practical SEO strategy, Local SEO,
                technical SEO, content planning, and conversion-focused optimization.
              </p>

              {/* Trust bullets */}
              <ul className="grid grid-cols-2 gap-2.5 mb-9">
                {[
                  'No lock-in contracts',
                  'Free SEO audits',
                  'Local SEO focused',
                  'Monthly reporting',
                  'Built for small businesses',
                  'Canada-wide service',
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
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  905-626-9919
                </a>
              </div>
            </div>

            {/* Right: Dashboard visual */}
            <div aria-label="SEO audit dashboard showing organic growth metrics" role="img">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: '#16161A', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
              >
                {/* Dashboard titlebar */}
                <div
                  className="flex items-center justify-between px-5 py-3.5"
                  style={{ background: '#1E1E24', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                    </div>
                    <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      SEO Audit Report · OMA
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#C8FF00' }} aria-hidden="true" />
                    <span className="text-[10px] font-semibold" style={{ color: '#C8FF00' }}>Live</span>
                  </div>
                </div>

                {/* Metric tiles */}
                <div className="grid grid-cols-2 gap-px p-0" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  {auditMetrics.map(({ label, before, after, change, color }) => (
                    <div
                      key={label}
                      className="p-4"
                      style={{ background: '#16161A' }}
                    >
                      <p className="text-[9px] font-bold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        {label}
                      </p>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-xs line-through" style={{ color: 'rgba(255,255,255,0.2)' }}>{before}</span>
                        <span className="text-lg font-black" style={{ color, letterSpacing: '-0.03em' }}>{after}</span>
                      </div>
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                        style={{ background: `${color}18`, color }}
                      >
                        {change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Traffic trend bar */}
                <div className="px-5 pt-4 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Organic Traffic Trend
                    </span>
                    <span className="text-[9px] font-semibold" style={{ color: '#C8FF00' }}>12 months</span>
                  </div>
                  <div className="flex items-end gap-1 h-12" aria-hidden="true">
                    {[12, 15, 14, 18, 22, 28, 35, 44, 58, 72, 91, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i > 8 ? '#C8FF00' : 'rgba(200,255,0,0.25)' }} />
                    ))}
                  </div>
                </div>

                {/* Rankings table */}
                <div className="px-5 pt-3 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Keyword Ranking Movement
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {rankingRows.map(({ keyword, before, after, delta }) => (
                      <div key={keyword} className="flex items-center justify-between py-1.5 px-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <span className="text-[10px] font-medium truncate mr-2" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '55%' }}>{keyword}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[9px] line-through" style={{ color: 'rgba(255,255,255,0.2)' }}>{before}</span>
                          <span className="text-[10px] font-bold" style={{ color: '#F8FAFC' }}>{after}</span>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: 'rgba(200,255,0,0.12)', color: '#C8FF00' }}>{delta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Issues bar */}
                <div className="flex gap-2 px-5 py-4 mt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {issues.map(({ label, severity }) => {
                    const colors = { critical: { bg: 'rgba(239,68,68,0.12)', text: '#F87171', dot: '#EF4444' }, warning: { bg: 'rgba(251,191,36,0.1)', text: '#FCD34D', dot: '#FBBF24' }, ok: { bg: 'rgba(52,211,153,0.1)', text: '#6EE7B7', dot: '#34D399' } }
                    const c = colors[severity as keyof typeof colors]
                    return (
                      <div key={label} className="flex items-center gap-1.5 text-[9px] font-semibold px-2 py-1 rounded-full" style={{ background: c.bg, color: c.text }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.dot }} aria-hidden="true" />
                        {label}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 1: Why Hire an SEO Consultant ──────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="why-hire-heading">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-start">

            <div>
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
                The Case for SEO
              </p>
              <h2
                id="why-hire-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Why Hire an SEO Consultant?
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                <p>
                  If your website is not generating consistent leads from Google, the problem is almost never just keywords.
                  Most small business websites have a combination of technical issues, thin content, weak page structure,
                  missing local signals, and no clear strategy — each one quietly killing your ability to rank.
                </p>
                <p>
                  An SEO consultant identifies exactly what is holding your site back, what your competitors are doing better,
                  and what needs to change to grow your organic visibility. The goal is not a rankings report. The goal is
                  more calls, more bookings, and more customers from Google search.
                </p>
                <p>
                  Real SEO combines technical cleanup, stronger page structure, useful content, internal linking,
                  local optimization, and authority signals — all built around the search intent of your actual customers,
                  not generic keyword lists.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: 'Technical SEO',
                  desc: 'Indexing errors, page speed, canonical tags, broken links, and schema markup that block Google from reading your site properly.',
                },
                {
                  label: 'On-Page Optimization',
                  desc: 'Page titles, H1s, content structure, internal linking, and keyword targeting aligned to how your customers actually search.',
                },
                {
                  label: 'Local Search Signals',
                  desc: 'Google Business Profile, city pages, local citations, and map pack optimization that put you in front of customers searching nearby.',
                },
                {
                  label: 'Content Strategy',
                  desc: 'Service pages, location pages, FAQs, and blog posts built around buyer-intent searches — not traffic for traffic\'s sake.',
                },
                {
                  label: 'Conversion Architecture',
                  desc: 'Traffic means nothing without leads. We fix phone number visibility, CTAs, trust signals, and lead paths alongside rankings.',
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 rounded-2xl"
                  style={{ background: '#fff', border: '1px solid #E5E7EB' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center font-black text-sm"
                    style={{ background: '#0F0F12', color: '#C8FF00' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1" style={{ color: '#0F0F12' }}>{item.label}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 2: What's Included ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }} aria-labelledby="included-heading">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
              Full-Scope SEO Consulting
            </p>
            <h2
              id="included-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06] mb-4"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              What Our SEO Consulting Includes
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              A complete SEO consulting service built for local service businesses — from audit to execution.
            </p>
          </div>

          {/* Two featured panels */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {/* SEO Audit — featured */}
            <div
              className="rounded-2xl p-8 flex flex-col"
              style={{ background: '#0F0F12', border: '1px solid rgba(200,255,0,0.1)' }}
            >
              <div
                className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1.5 rounded-full mb-6 self-start"
                style={{ background: 'rgba(200,255,0,0.1)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.15)' }}
              >
                Start here
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: '#F8FAFC', letterSpacing: '-0.02em' }}>
                SEO Audit
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                A full technical and on-page review of your website — page titles, headings, indexing, speed,
                internal links, content quality, metadata, and current search visibility. You get a clear
                picture of what is working, what is broken, and what to fix first.
              </p>
              <ul className="space-y-2 mt-auto">
                {['Website crawl & indexing check', 'Page speed analysis', 'Meta & heading review', 'Current rankings snapshot', 'Competitor gap analysis'].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Local SEO — featured */}
            <div
              className="rounded-2xl p-8 flex flex-col"
              style={{ background: '#F7F6F2', border: '1px solid #E5E7EB' }}
            >
              <div
                className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1.5 rounded-full mb-6 self-start"
                style={{ background: 'rgba(29,78,216,0.08)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
              >
                Local SEO
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}>
                Local SEO &{' '}
                <Link href="/google-business-profile-optimization" className="underline decoration-dotted" style={{ color: '#1D4ED8' }}>
                  Google Business Profile
                </Link>
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>
                Optimize for city-based searches, "near me" searches, and Google Maps visibility. We build
                location-specific service pages, optimize your Google Business Profile, build local citations,
                and track your map pack rankings city by city.
              </p>
              <ul className="space-y-2 mt-auto">
                {['GBP audit & optimization', 'City + service page creation', 'Local citation building', 'Review strategy & response', 'Near-me search targeting'].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: '#374151' }}>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#0F0F12" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Supporting grid — remaining 5 services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: 'Keyword Research',
                desc: 'Identify the exact searches your customers make before they call, book, or request a quote.',
              },
              {
                title: 'On-Page SEO',
                desc: 'Titles, H1s, content structure, internal links, image alt text, CTAs, and keyword targeting.',
              },
              {
                title: 'Technical SEO',
                desc: 'Crawlability, speed, sitemaps, robots.txt, canonical tags, schema, broken links, and mobile usability.',
              },
              {
                title: 'Content Strategy',
                desc: 'Service pages, city pages, blog posts, FAQs, and comparison content based on buyer intent.',
              },
              {
                title: 'Conversion SEO',
                desc: 'CTAs, forms, trust signals, phone visibility, and lead paths — so traffic turns into revenue.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-5"
                style={{ background: '#F7F6F2', border: '1px solid #E5E7EB' }}
              >
                <h3 className="text-sm font-bold mb-2" style={{ color: '#0F0F12' }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Local SEO ───────────────────────────────────────────── */}
      <section className="section-pad relative" style={{ background: '#0F0F12' }} aria-labelledby="local-seo-heading">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            <div>
              <p className="section-label-lime mb-5">Local Search</p>
              <h2
                id="local-seo-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
              >
                Local SEO Consultant for Canadian Businesses
              </h2>
              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.52)' }}>
                <p>
                  When your customers need a service, they search on Google first — on Google Search and Google Maps.
                  Local SEO puts your business in front of those customers at the exact moment they are looking for
                  what you offer.
                </p>
                <p>
                  We provide local SEO consulting for businesses across Canada, including{' '}
                  <strong style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Toronto, Mississauga, Brampton, Vaughan, Markham, Oakville, Hamilton, Ottawa, and Montreal.
                  </strong>{' '}
                  Our local SEO work is built around your specific city, service type, and competitive landscape.
                </p>
              </div>

              <Link
                href="/local-seo-services"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#C8FF00' }}
              >
                See our Local SEO services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Service Pages', desc: 'Location-specific pages targeting city + service keyword combinations.' },
                { title: 'City Pages', desc: 'Dedicated landing pages for every city and neighbourhood you serve.' },
                { title: 'GBP Optimization', desc: 'Complete Google Business Profile audit, optimization, and ongoing management.' },
                { title: 'Local Keywords', desc: 'City-specific keyword research targeting how your customers actually search.' },
                { title: 'Review Strategy', desc: 'Systems to generate more reviews — the most important local ranking signal.' },
                { title: 'Local Citations', desc: 'Consistent NAP across Yelp, YellowPages, BBB, HomeStars, and industry directories.' },
                { title: 'Internal Linking', desc: 'Link structure that connects service and city pages to build local topical authority.' },
                { title: 'Location Content', desc: 'Neighbourhood-specific content that matches how nearby customers search.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <h3 className="text-sm font-bold mb-1.5" style={{ color: '#F8FAFC' }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 4: Who This Is For ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="who-for-heading">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
              Industries We Serve
            </p>
            <h2
              id="who-for-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              SEO Consulting for Businesses<br className="hidden sm:block" /> That Need More Leads
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { industry: 'Barbershops', outcome: 'More bookings and walk-in clients from Google Maps searches.' },
              { industry: 'Dental Clinics', outcome: 'More new patient appointments from local organic search.' },
              { industry: 'Medical Clinics', outcome: 'More consultation requests and appointment bookings.' },
              { industry: 'Contractors', outcome: 'More quote requests from homeowners searching for trades.' },
              { industry: 'Restaurants', outcome: 'More reservations, orders, and walk-in customers.' },
              { industry: 'Lawyers', outcome: 'More consultation calls from people searching legal help.' },
              { industry: 'Real Estate', outcome: 'More buyer and seller inquiries from local property searches.' },
              { industry: 'Home Services', outcome: 'More inbound calls for HVAC, plumbing, electrical, and cleaning.' },
              { industry: 'Auto Businesses', outcome: 'More service bookings and repair inquiries from local search.' },
              { industry: 'Local Retail', outcome: 'More in-store visits and online purchases from nearby shoppers.' },
              { industry: 'Physiotherapy', outcome: 'More new patient referrals and direct appointment requests.' },
              { industry: 'Professional Services', outcome: 'More qualified inquiries from business owners and individuals.' },
            ].map(({ industry, outcome }) => (
              <div
                key={industry}
                className="rounded-2xl p-5"
                style={{ background: '#fff', border: '1px solid #E5E7EB' }}
              >
                <h3 className="text-sm font-black mb-2" style={{ color: '#0F0F12' }}>{industry}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{outcome}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary text-sm px-7 py-3.5">
              Get a Free SEO Audit for Your Business
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 5: SEO Process ─────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }} aria-labelledby="process-heading">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
              How It Works
            </p>
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              Our SEO Process
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: '01',
                title: 'Audit',
                desc: 'We review your website, current rankings, competitor performance, technical issues, content gaps, local presence, and conversion paths. You get a full picture of where you stand and what is costing you organic traffic.',
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'We create a clear SEO plan based on your services, target cities, industry competition, and highest-value keywords. No generic playbooks — a strategy built around your specific business and market.',
              },
              {
                step: '03',
                title: 'Optimization',
                desc: 'We improve your site structure, page titles, metadata, service pages, internal links, technical SEO, Google Business Profile, schema markup, and content — systematically, in order of impact.',
              },
              {
                step: '04',
                title: 'Content Growth',
                desc: 'We create or improve pages that can rank for buyer-intent searches, local service searches, and industry-specific questions — building the topical authority Google rewards with higher rankings.',
              },
              {
                step: '05',
                title: 'Tracking & Reporting',
                desc: 'We monitor keyword rankings, organic traffic, calls, form submissions, local visibility, and conversion performance. Monthly reports in plain language — no vanity metrics.',
              },
            ].map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-6 mb-0">
                {/* Step line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-black text-sm"
                    style={{ background: '#0F0F12', color: '#C8FF00' }}
                  >
                    {step}
                  </div>
                  {i < 4 && <div className="w-px flex-1 my-3" style={{ background: '#E5E7EB', minHeight: '2.5rem' }} aria-hidden="true" />}
                </div>
                {/* Content */}
                <div className={i < 4 ? 'pb-8' : ''} style={{ paddingTop: '0.45rem' }}>
                  <h3 className="text-base font-black mb-2" style={{ color: '#0F0F12' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Pricing ─────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="pricing-heading">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 xl:gap-20 items-start">

            <div>
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
                Transparent Pricing
              </p>
              <h2
                id="pricing-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                How Much Does an SEO Consultant Cost?
              </h2>
              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: '#374151' }}>
                <p>
                  SEO consulting pricing depends on your website size, market competition, and growth goals. We offer
                  a free audit to every new client so we can assess your situation before recommending a plan.
                </p>
                <p>
                  We do not charge a percentage of ad spend. No lock-in contracts. You can start with an audit
                  and decide from there.
                </p>
              </div>
              <Link href="/contact" className="btn-primary text-sm px-6 py-3.5 inline-block">
                Request a Free SEO Audit
              </Link>
            </div>

            <div className="space-y-2">
              {[
                { service: 'SEO Audit', price: 'Free', note: 'Start here — no commitment required', featured: true },
                { service: 'SEO Consulting', price: 'From $499/month', note: 'Strategy, optimization, reporting', featured: false },
                { service: 'Local SEO', price: 'From $499/month', note: 'GBP, citations, local content, rankings', featured: false },
                { service: 'Technical SEO Audit', price: 'Custom', note: 'Full technical crawl, prioritized fix list', featured: false },
                { service: 'Content Strategy', price: 'Custom', note: 'Service pages, location pages, blog plan', featured: false },
                { service: 'Full SEO Growth Plan', price: 'Custom', note: 'Technical + local + content + conversion', featured: false },
              ].map(({ service, price, note, featured }) => (
                <div
                  key={service}
                  className="flex items-center justify-between p-4 rounded-xl"
                  style={
                    featured
                      ? { background: '#0F0F12', border: '1px solid rgba(200,255,0,0.15)' }
                      : { background: '#fff', border: '1px solid #E5E7EB' }
                  }
                >
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: featured ? '#F8FAFC' : '#0F0F12' }}
                    >
                      {service}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: featured ? 'rgba(255,255,255,0.38)' : '#9CA3AF' }}
                    >
                      {note}
                    </p>
                  </div>
                  <span
                    className="text-sm font-black shrink-0 ml-4"
                    style={{ color: featured ? '#C8FF00' : '#0F0F12' }}
                  >
                    {price}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 7: Why Choose OMA ──────────────────────────────────────── */}
      <section className="section-pad relative" style={{ background: '#0F0F12' }} aria-labelledby="why-oma-heading">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            <div>
              <p className="section-label-lime mb-5">Why OMA</p>
              <h2
                id="why-oma-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
              >
                Why Choose OMA as Your SEO Consultant?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                We are not a generalist agency that does everything. We are a Canadian digital marketing team
                specialized in helping local service businesses rank, get found, and generate more leads from
                Google — with clear reporting and no lock-in contracts.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                  Get Your Free SEO Audit
                </Link>
                <Link href="/seo-services" className="btn-outline-white text-sm px-6 py-3">
                  Our SEO Services
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { title: 'SEO strategy without the jargon', desc: 'Clear plans, plain-language reporting, and real explanations of what we are doing and why.' },
                { title: 'Leads, calls, and bookings first', desc: 'Rankings are the means. Calls, bookings, and form submissions are the goal. We optimize for business outcomes.' },
                { title: 'Built for local service businesses', desc: 'Barbershops, contractors, clinics, lawyers, home service companies. We understand what moves the needle in local search.' },
                { title: 'Technical + local + content in one', desc: 'We handle the full SEO stack — not just one layer. Technical fixes, local optimization, and content strategy under one roof.' },
                { title: 'No lock-in contracts', desc: 'We earn your business month-to-month through results. Not because you are trapped in a 12-month agreement.' },
                { title: 'SEO + lead generation, connected', desc: 'Our SEO work integrates with ' },
              ].map(({ title, desc }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(200,255,0,0.1)', border: '1px solid rgba(200,255,0,0.2)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: '#F8FAFC' }}>{title}</p>
                    {i < 5 ? (
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>{desc}</p>
                    ) : (
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                        {desc}
                        <Link href="/lead-generation-agency" className="underline" style={{ color: 'rgba(200,255,0,0.7)' }}>
                          lead generation
                        </Link>{' '}
                        and{' '}
                        <Link href="/google-ads-management" className="underline" style={{ color: 'rgba(200,255,0,0.7)' }}>
                          Google Ads management
                        </Link>{' '}
                        for clients who want both channels working together.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 8: FAQ ─────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }} aria-labelledby="faq-heading">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
                Questions
              </p>
              <h2
                id="faq-heading"
                className="text-3xl font-black leading-[1.06]"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                SEO Consultant FAQs
              </h2>
            </div>

            <dl className="space-y-3">
              {faqSchema.mainEntity.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid #E5E7EB' }}
                >
                  <dt
                    className="px-6 py-5 text-sm font-bold"
                    style={{ color: '#0F0F12', background: '#F7F6F2' }}
                  >
                    {faq.name}
                  </dt>
                  <dd
                    className="px-6 py-5 text-sm leading-relaxed"
                    style={{ color: '#374151', background: '#fff' }}
                  >
                    {faq.acceptedAnswer.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Section 9: Final CTA + Form ────────────────────────────────────── */}
      <section
        className="section-pad relative"
        style={{ background: '#0F0F12' }}
        aria-labelledby="final-cta-heading"
        id="audit"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

            {/* Left: copy */}
            <div>
              <p className="section-label-lime mb-5">Free SEO Audit</p>
              <h2
                id="final-cta-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-5"
                style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
              >
                Ready to Improve Your Google Rankings?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Request a free SEO audit and we will show you what is holding your website back, where your biggest
                ranking opportunities are, and how to turn more organic traffic into real leads. No commitment required.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { label: 'What we review', value: 'Website, rankings, GBP, competitors, technical issues, local presence' },
                  { label: 'What you get', value: 'A clear action plan — not a sales pitch' },
                  { label: 'Cost', value: 'Free — no strings attached' },
                  { label: 'Timeline', value: 'Audit delivered within 2–3 business days' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-sm font-bold" style={{ color: '#F8FAFC' }}>{label}: </span>
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.28)' }}>Prefer to call?</p>
                <a
                  href="tel:+19056269919"
                  className="flex items-center gap-3 text-base font-bold"
                  style={{ color: '#C8FF00' }}
                  aria-label="Call OMA at 905-626-9919"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  905-626-9919
                </a>
                <a
                  href="mailto:info@onlinemarketingagency.ca"
                  className="flex items-center gap-3 text-sm"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@onlinemarketingagency.ca
                </a>
              </div>

              {/* Related services */}
              <div className="pt-8 mt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  Related Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'SEO Services', href: '/seo-services' },
                    { label: 'Local SEO', href: '/local-seo-services' },
                    { label: 'Google Ads', href: '/google-ads-management' },
                    { label: 'GBP Optimization', href: '/google-business-profile-optimization' },
                    { label: 'Website Design', href: '/website-design-for-small-business' },
                    { label: 'Lead Generation', href: '/lead-generation-agency' },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-opacity duration-150 hover:opacity-80"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div>
              <form
                action="/contact"
                method="GET"
                className="rounded-2xl overflow-hidden"
                style={{ background: '#16161A', border: '1px solid rgba(255,255,255,0.08)' }}
                aria-label="Request a free SEO audit"
              >
                <div className="px-6 py-5" style={{ background: '#1E1E24', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="text-base font-black" style={{ color: '#F8FAFC' }}>Request Free SEO Audit</h3>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.38)' }}>We will review your site and respond within 1 business day.</p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-1"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC', ringColor: '#C8FF00' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Business Name *
                      </label>
                      <input
                        id="business"
                        name="businessName"
                        type="text"
                        required
                        placeholder="Smith Plumbing"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@business.ca"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="905-555-0100"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      Website URL
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://yourbusiness.ca"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="industry" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                      >
                        <option value="" style={{ background: '#1E1E24' }}>Select industry</option>
                        {['Barbershop / Salon', 'Clinic / Medical', 'Contractor / Trades', 'Dental', 'Home Services', 'Law Firm', 'Real Estate', 'Restaurant', 'Auto Service', 'Retail', 'Professional Services', 'Other'].map((opt) => (
                          <option key={opt} value={opt} style={{ background: '#1E1E24' }}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="goal" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Main Goal
                      </label>
                      <select
                        id="goal"
                        name="goal"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                      >
                        <option value="" style={{ background: '#1E1E24' }}>Select goal</option>
                        {['Rank higher on Google', 'More calls / leads', 'Google Maps visibility', 'Fix technical SEO', 'Content strategy', 'Full SEO growth plan'].map((opt) => (
                          <option key={opt} value={opt} style={{ background: '#1E1E24' }}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      Anything else we should know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your current SEO challenges or goals..."
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg font-black text-sm transition-opacity duration-150 hover:opacity-90"
                    style={{ background: '#C8FF00', color: '#0F0F12' }}
                  >
                    Request Free SEO Audit
                  </button>

                  <p className="text-center text-[10px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
                    No lock-in contracts. No spam. We will respond within 1 business day.
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
