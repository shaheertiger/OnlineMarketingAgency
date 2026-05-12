import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Dental SEO Expert | SEO Services for Dentists & Dental Clinics | OMA',
  description:
    'Need a dental SEO expert? OMA helps dentists and dental clinics improve Google rankings, Local SEO, Google Business Profile visibility, website traffic, patient calls, and appointment requests.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/dental-seo-expert' },
  keywords: [
    'dental SEO expert',
    'SEO for dentists Canada',
    'dental SEO services Canada',
  ],
  openGraph: {
    title: 'Dental SEO Expert | SEO Services for Dentists & Dental Clinics | OMA',
    description:
      'Need a dental SEO expert? OMA helps dentists and dental clinics improve Google rankings, Local SEO, Google Business Profile visibility, website traffic, patient calls, and appointment requests.',
    url: 'https://onlinemarketingagency.ca/dental-seo-expert',
  },
  twitter: {
    title: 'Dental SEO Expert | SEO Services for Dentists & Dental Clinics | OMA',
    description:
      'Need a dental SEO expert? OMA helps dentists and dental clinics improve Google rankings, Local SEO, Google Business Profile visibility, website traffic, patient calls, and appointment requests.',
  },
}

// ── Schemas ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dental SEO Services',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Dental SEO services for dentists, orthodontists, cosmetic dentists, and multi-location dental clinics in Canada. Local SEO, technical SEO, treatment page strategy, Google Business Profile optimization, and conversion-focused website improvements.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Dental SEO',
  offers: {
    '@type': 'Offer',
    price: '499',
    priceCurrency: 'CAD',
    description: 'Dental Local SEO from $499/month',
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
    'Canadian digital marketing agency providing dental SEO services, Google Ads management, Local SEO, and lead generation for dental clinics and healthcare businesses.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a dental SEO expert do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dental SEO expert audits your clinic website, identifies why it is not ranking for patient searches, analyzes competitors in your local market, and builds a strategy to increase organic visibility. This includes technical SEO cleanup, treatment page optimization, local SEO, Google Business Profile improvements, review strategy, and conversion-focused changes to turn website traffic into patient calls and appointment requests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do dentists need SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The majority of new dental patients start their search on Google. Searches like "dentist near me," "dental implants Toronto," or "emergency dentist open now" happen thousands of times per month in most Canadian cities. If your clinic does not appear in the top results or Google Maps for these searches, competitors get those calls. SEO builds the long-term visibility that puts your clinic in front of patients actively looking for the services you offer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does dental SEO cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dental SEO pricing depends on your clinic size, city, competitive landscape, number of treatment services, current website condition, and growth goals. OMA offers a free dental SEO audit to start. Local dental SEO and consulting services start from $499 per month. Technical audits and full growth plans are custom-quoted based on scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take for a dental clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Business Profile improvements and local map pack gains can appear in 4 to 8 weeks. Broader organic ranking improvements for competitive dental keywords typically take 3 to 6 months of consistent optimization. The timeline depends on your starting point, market competition, and how quickly technical and content improvements can be implemented. We report on progress monthly throughout.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Local SEO for dentists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local SEO for dentists is the process of optimizing your dental clinic\'s online presence so it appears in Google Maps, the local map pack, and city-based search results. It includes Google Business Profile optimization, local citation building, review strategy, city-specific service pages, and local keyword targeting. Most new dental patients use local search before booking — Local SEO ensures your clinic is visible when they do.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can SEO help my dental clinic show up on Google Maps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Google Maps visibility is one of the primary outcomes of dental Local SEO. We optimize your Google Business Profile, build consistent local citations, improve your review volume and recency, create location-specific content, and implement schema markup — all of which are signals Google uses to determine local map pack rankings for dental searches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you optimize Google Business Profile for dental clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Google Business Profile optimization is a core part of our dental SEO service. We complete every section of your GBP listing, select the correct primary and secondary categories, add keyword-rich service descriptions, upload professional photos, build a review generation strategy, manage Q&A, and publish regular posts — all of which improve your map pack rankings and patient conversions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dental services should have their own SEO pages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each high-intent service should have a dedicated, optimized page. These include dental implants, emergency dentistry, Invisalign, teeth whitening, veneers, dental crowns and bridges, root canals, pediatric dentistry, family dentistry, cosmetic dentistry, dentures, and dental cleanings and check-ups. City-specific versions of these pages further expand your local ranking footprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SEO better than Google Ads for dentists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO and Google Ads serve different purposes. Google Ads generates patient calls immediately but stops working the moment you pause your budget. SEO builds long-term organic visibility that compounds over time and does not require ongoing ad spend to maintain. Most dental clinics benefit from running both: Google Ads for immediate lead flow while SEO builds, reducing cost per patient acquisition over 6 to 12 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you also manage Google Ads for dental clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We manage Google Ads campaigns for dental clinics targeting high-intent searches like emergency dentist, dental implants, Invisalign, and teeth whitening. Google Ads management starts from $199 per month plus ad spend. Many dental clients combine SEO and Google Ads for both immediate and long-term patient acquisition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help if my dental website gets traffic but no appointments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Traffic without appointments is a conversion problem. We review your appointment CTAs, phone number visibility, mobile usability, page load speed, trust signals, doctor bios, service explanations, and lead paths. Our dental SEO work includes conversion-focused improvements — not just rankings — because the goal is more patients, not just more visitors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes dental SEO different from regular SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dental SEO requires understanding treatment-specific search intent, patient trust signals, healthcare compliance considerations, and the local competitive landscape of dental services. Patients searching for a dentist are choosing a healthcare provider — content, trust signals, reviews, and doctor bios all influence both rankings and conversion. Dental SEO also involves a large number of distinct treatment pages, each targeting different patient searches at different stages of intent.',
      },
    },
  ],
}

// ── Dashboard data ─────────────────────────────────────────────────────────────

const dashMetrics = [
  { label: 'New Patient Calls', before: '9/mo', after: '61/mo', change: '+578%', color: '#C8FF00' },
  { label: 'Organic Sessions', before: '280/mo', after: '2,940/mo', change: '+950%', color: '#60A5FA' },
  { label: 'Technical Score', before: '38/100', after: '96/100', change: '+58 pts', color: '#34D399' },
  { label: 'Map Pack Wins', before: '0', after: '6', change: '+6 cities', color: '#A78BFA' },
]

const rankingRows = [
  { keyword: '"dentist near me"', before: 'Not ranked', after: '#2', delta: 'New', up: true },
  { keyword: '"dental implants Toronto"', before: 'Page 3', after: '#4', delta: '+17', up: true },
  { keyword: '"emergency dentist Mississauga"', before: 'Page 2', after: '#3', delta: '+9', up: true },
  { keyword: '"Invisalign Brampton"', before: '#14', after: '#2', delta: '+12', up: true },
]

const auditIssues = [
  { label: '4 thin treatment pages', severity: 'critical' },
  { label: 'GBP: fully optimized', severity: 'ok' },
  { label: 'Page speed: 3.1s mobile', severity: 'warning' },
]

// ── Page ───────────────────────────────────────────────────────────────────────

export default function DentalSEOExpertPage() {
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
            { label: 'Dental SEO Expert' },
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
                  Dental SEO Expert · Canada
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl font-black leading-[1.04] mb-6"
                style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
              >
                Dental SEO Expert for{' '}
                <span style={{ color: '#C8FF00' }}>Dentists and Dental Clinics</span>
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Want your dental clinic to rank higher on Google and attract more new patient calls, appointment
                requests, and treatment inquiries? OMA is a dental SEO expert helping dental practices grow with
                SEO, Local SEO, Google Business Profile optimization, technical SEO, content strategy, and
                conversion-focused website improvements.
              </p>

              {/* Trust bullets */}
              <ul className="grid grid-cols-2 gap-2.5 mb-9">
                {[
                  'Local SEO focused',
                  'Built for dental clinics',
                  'No lock-in contracts',
                  'Clear monthly reporting',
                  'SEO audits available',
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
                  Get a Free Dental SEO Audit
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

            {/* Right: Dental SEO dashboard visual */}
            <div
              aria-label="Dental SEO audit dashboard showing Google rankings, local visibility, new patient calls, and appointment requests for a dental clinic"
              role="img"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: '#16161A', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
              >
                {/* Titlebar */}
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
                      Dental SEO Performance · OMA
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#C8FF00' }} aria-hidden="true" />
                    <span className="text-[10px] font-semibold" style={{ color: '#C8FF00' }}>Live</span>
                  </div>
                </div>

                {/* Metric tiles */}
                <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  {dashMetrics.map(({ label, before, after, change, color }) => (
                    <div key={label} className="p-4" style={{ background: '#16161A' }}>
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

                {/* Traffic trend bars */}
                <div className="px-5 pt-4 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Organic Traffic Trend
                    </span>
                    <span className="text-[9px] font-semibold" style={{ color: '#C8FF00' }}>12 months</span>
                  </div>
                  <div className="flex items-end gap-1 h-12" aria-hidden="true">
                    {[8, 10, 11, 14, 17, 22, 31, 42, 55, 70, 88, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{ height: `${h}%`, background: i > 8 ? '#C8FF00' : 'rgba(200,255,0,0.25)' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Keyword ranking table */}
                <div className="px-5 pt-3 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Dental Keyword Rankings
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {rankingRows.map(({ keyword, before, after, delta }) => (
                      <div
                        key={keyword}
                        className="flex items-center justify-between py-1.5 px-2 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.03)' }}
                      >
                        <span
                          className="text-[10px] font-medium truncate mr-2"
                          style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '55%' }}
                        >
                          {keyword}
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[9px] line-through" style={{ color: 'rgba(255,255,255,0.2)' }}>{before}</span>
                          <span className="text-[10px] font-bold" style={{ color: '#F8FAFC' }}>{after}</span>
                          <span
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(200,255,0,0.12)', color: '#C8FF00' }}
                          >
                            {delta}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Issues strip */}
                <div className="flex gap-2 px-5 py-4 mt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {auditIssues.map(({ label, severity }) => {
                    const colors = {
                      critical: { bg: 'rgba(239,68,68,0.12)', text: '#F87171', dot: '#EF4444' },
                      warning: { bg: 'rgba(251,191,36,0.1)', text: '#FCD34D', dot: '#FBBF24' },
                      ok: { bg: 'rgba(52,211,153,0.1)', text: '#6EE7B7', dot: '#34D399' },
                    }
                    const c = colors[severity as keyof typeof colors]
                    return (
                      <div
                        key={label}
                        className="flex items-center gap-1.5 text-[9px] font-semibold px-2 py-1 rounded-full"
                        style={{ background: c.bg, color: c.text }}
                      >
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

      {/* ── Section 1: Why Dental Clinics Need SEO ─────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="why-seo-heading">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-start">

            <div>
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
                Why SEO Matters for Dentists
              </p>
              <h2
                id="why-seo-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Patients Search on Google Before They Call a Dentist
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                <p>
                  Before a patient picks up the phone to book a dental appointment, they search Google. Searches
                  like <strong>dentist near me</strong>, <strong>emergency dentist</strong>,{' '}
                  <strong>dental implants</strong>, <strong>Invisalign</strong>, and{' '}
                  <strong>teeth whitening near me</strong> represent real patients in your city actively looking
                  for a clinic to call. If your dental practice does not appear at the top of those results —
                  in Google Search and Google Maps — those patients call a competitor instead.
                </p>
                <p>
                  The majority of dental patients do not search past the first page. Most click one of the first
                  three Google Maps listings or the top two organic results. Visibility in these positions is not
                  a marketing advantage — it is a patient acquisition requirement. Dental SEO builds that
                  visibility systematically, based on how your specific patients search in your specific city.
                </p>
                <p>
                  Unlike Google Ads, SEO generates leads without ongoing ad spend. Rankings built through
                  consistent optimization continue driving patient calls month after month, and the value of
                  the channel increases over time as your content authority and local signals grow. Many dental
                  clinics that invest in SEO alongside{' '}
                  <Link href="/google-ads-management" className="font-semibold underline" style={{ color: '#0F0F12' }}>
                    Google Ads management
                  </Link>{' '}
                  see their cost per new patient decrease significantly within 6 to 12 months.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: 'Treatment Searches',
                  desc: 'Patients search for specific services — dental implants, cosmetic dentistry, root canals, family dentist — before choosing a clinic. Ranking for these searches drives high-intent patient calls.',
                },
                {
                  label: 'Local and Near-Me Searches',
                  desc: 'City-based and near-me dental searches are among the highest-converting searches on Google. Appearing in the local map pack for these searches is directly tied to new patient volume.',
                },
                {
                  label: 'Emergency Searches',
                  desc: 'Emergency dentist searches have urgent intent and high conversion rates. A clinic that ranks for emergency dental queries in their city captures patients who need to book immediately.',
                },
                {
                  label: 'Cosmetic and Elective Treatments',
                  desc: 'Patients researching Invisalign, veneers, teeth whitening, and dental implants compare multiple clinics online before deciding. SEO puts your clinic in that consideration set.',
                },
                {
                  label: 'Competitive Local Markets',
                  desc: 'Most Canadian cities have multiple dental clinics competing for the same patient searches. Without SEO, your competitors with active, well-optimized listings consistently outrank you.',
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

      {/* ── Section 2: What Our Dental SEO Services Include ────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }} aria-labelledby="services-heading">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
              Full-Scope Dental SEO
            </p>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06] mb-4"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              What Our Dental SEO Services Include
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              A complete dental SEO service — from technical cleanup and treatment page strategy to local
              visibility and patient conversion.
            </p>
          </div>

          {/* Two featured panels */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {/* Dental SEO Audit — dark featured */}
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
                Dental SEO Audit
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                A thorough review of your dental website covering page structure, indexing, metadata, headings,
                treatment page quality, internal links, technical issues, page speed, schema markup, and current
                search visibility. You get a clear picture of what is holding your clinic back on Google and what
                to fix first for the fastest ranking gains.
              </p>
              <ul className="space-y-2 mt-auto">
                {[
                  'Website crawl and indexing review',
                  'Treatment page quality assessment',
                  'Technical SEO issue identification',
                  'Current ranking snapshot by keyword',
                  'Competitor gap analysis',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Local SEO — cream featured */}
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
                Local SEO for Dentists &{' '}
                <Link href="/google-business-profile-optimization" className="underline decoration-dotted" style={{ color: '#1D4ED8' }}>
                  GBP Optimization
                </Link>
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>
                Optimize your clinic for local dental searches, near-me searches, and Google Maps visibility.
                We build and optimize city-specific treatment pages, improve your Google Business Profile,
                build local citations across dental and healthcare directories, and manage your review strategy
                to improve both rankings and patient trust.
              </p>
              <ul className="space-y-2 mt-auto">
                {[
                  'GBP audit, optimization, and management',
                  'City + treatment page creation',
                  'Local citation building',
                  'Review generation strategy',
                  'Near-me and local keyword targeting',
                ].map((b) => (
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

          {/* Supporting service blocks */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: 'Keyword Research',
                desc: 'Find the treatment searches, local searches, and comparison searches your patients use before calling or booking.',
              },
              {
                title: 'On-Page SEO',
                desc: 'Optimize page titles, H1s, headings, treatment copy, internal links, image alt text, CTAs, and keyword targeting across every key page.',
              },
              {
                title: 'Technical SEO',
                desc: 'Crawlability, indexing, page speed, sitemaps, canonical tags, schema markup, broken links, redirects, and mobile usability.',
              },
              {
                title: 'Treatment Page Strategy',
                desc: 'Create or improve dedicated pages for dental implants, Invisalign, emergency dentistry, whitening, veneers, crowns, and family dentistry.',
              },
              {
                title: 'Conversion SEO',
                desc: 'Appointment CTAs, click-to-call buttons, trust signals, doctor bios, insurance information, and patient lead paths — so traffic turns into appointments.',
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

      {/* ── Section 3: Local SEO for Dentists ─────────────────────────────── */}
      <section className="section-pad relative" style={{ background: '#0F0F12' }} aria-labelledby="local-seo-heading">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            <div>
              <p className="section-label-lime mb-5">Local Search for Dental Clinics</p>
              <h2
                id="local-seo-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
              >
                Local SEO for Dentists: Show Up Where Patients Search
              </h2>
              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.52)' }}>
                <p>
                  Most new dental patients choose a clinic based on Google Maps results and local search rankings.
                  When a patient in your neighbourhood searches for a dentist, a dental clinic that appears in the
                  top three Google Maps results captures the majority of those calls. Clinics below the map pack
                  receive a fraction of that traffic — regardless of how good their actual care is.
                </p>
                <p>
                  Local SEO for dentists requires optimization across multiple signals:{' '}
                  <strong style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Google Business Profile, local citations, reviews, city and neighbourhood content, service
                    area pages, internal linking, and schema markup.
                  </strong>{' '}
                  Each of these signals contributes to where your clinic ranks on Google Maps for local dental searches.
                </p>
                <p>
                  Dental clinics should rank for both service keywords and city-specific keywords:
                  dentist in Toronto, emergency dentist Mississauga, dental implants Brampton, Invisalign Vaughan,
                  teeth whitening Ottawa, family dentist Surrey, cosmetic dentist Calgary. City-specific treatment
                  pages make this possible — and they compound in value over time.
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
                { title: 'GBP Optimization', desc: 'Complete Google Business Profile audit, category selection, service descriptions, photos, and ongoing management.' },
                { title: 'Treatment Pages', desc: 'Dedicated, keyword-optimized pages for each dental service your clinic offers — the foundation of organic rankings.' },
                { title: 'Service Area Pages', desc: 'Location-specific landing pages for every city and neighbourhood you want to rank in on Google Maps.' },
                { title: 'Local Keywords', desc: 'City and treatment keyword research built around how patients in your market search before booking.' },
                { title: 'Review Strategy', desc: 'A process for generating genuine patient reviews on Google — one of the top local ranking signals.' },
                { title: 'Citation Building', desc: 'Consistent practice name, address, and phone number across Google, Apple Maps, Yelp, dental directories, and local listings.' },
                { title: 'Internal Linking', desc: 'Link architecture that connects your treatment, city, and blog pages to build topical authority for dental searches.' },
                { title: 'Schema Markup', desc: 'Structured data for your dental practice: LocalBusiness, DentalClinic, FAQPage, and BreadcrumbList schemas.' },
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

      {/* ── Section 4: SEO for High-Value Dental Services ──────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="treatments-heading">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
              Treatment-Specific SEO
            </p>
            <h2
              id="treatments-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06] mb-4"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              SEO for Dental Services That Drive Real Patient Demand
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Each dental treatment attracts a different type of patient search at a different stage of intent.
              We build SEO strategies around the specific services that drive the highest patient value for
              your clinic.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              {
                service: 'Emergency Dentistry',
                intent: 'Urgent searches',
                outcome: 'More same-day calls from patients searching for immediate dental care in your city.',
              },
              {
                service: 'Dental Implants',
                intent: 'High-value searches',
                outcome: 'More consultation requests from patients researching implant options and pricing.',
              },
              {
                service: 'Invisalign',
                intent: 'Elective treatment',
                outcome: 'More treatment inquiries from patients comparing Invisalign providers in your area.',
              },
              {
                service: 'Cosmetic Dentistry',
                intent: 'Appearance-driven',
                outcome: 'More veneer, bonding, and whitening leads from patients wanting aesthetic improvements.',
              },
              {
                service: 'Family Dentistry',
                intent: 'Recurring appointments',
                outcome: 'More new family patients searching for a regular dental home in your neighbourhood.',
              },
              {
                service: 'Pediatric Dentistry',
                intent: 'Parent-driven searches',
                outcome: 'More parent inquiries for children\'s dental appointments, first visits, and check-ups.',
              },
              {
                service: 'Root Canal Treatment',
                intent: 'Urgent need',
                outcome: 'More urgent treatment calls from patients searching for endodontic care near them.',
              },
              {
                service: 'Dental Cleanings',
                intent: 'Routine bookings',
                outcome: 'More new patient registrations from people searching for a cleaning and check-up.',
              },
              {
                service: 'Dentures',
                intent: 'Consultation searches',
                outcome: 'More consultation requests from patients evaluating denture and removable appliance options.',
              },
              {
                service: 'Crowns and Bridges',
                intent: 'Restorative searches',
                outcome: 'More restorative treatment inquiries from patients with damaged or missing teeth.',
              },
              {
                service: 'Teeth Whitening',
                intent: 'Quick cosmetic wins',
                outcome: 'More whitening bookings from patients comparing in-office and take-home options.',
              },
              {
                service: 'Dental Veneers',
                intent: 'Premium cosmetic',
                outcome: 'More high-value consultation requests from patients researching porcelain veneers.',
              },
            ].map(({ service, intent, outcome }) => (
              <div
                key={service}
                className="rounded-2xl p-5"
                style={{ background: '#fff', border: '1px solid #E5E7EB' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-black" style={{ color: '#0F0F12' }}>{service}</h3>
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 ml-2"
                    style={{ background: 'rgba(29,78,216,0.06)', color: '#1D4ED8' }}
                  >
                    {intent}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{outcome}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary text-sm px-7 py-3.5">
              Get a Free Dental SEO Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 5: Dental SEO Process ─────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }} aria-labelledby="process-heading">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
              How We Work
            </p>
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              Our Dental SEO Process
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: '01',
                title: 'Audit',
                desc: 'We review your dental website, current keyword rankings, Google Business Profile, treatment pages, technical issues, competitor landscape, local visibility, review volume, and conversion paths. You get a full diagnostic — not a generic checklist.',
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'We build a dental SEO plan based on your specific services, city, competitive situation, and highest-value patient searches. The strategy identifies what to fix, what to build, and what will move rankings fastest for your clinic.',
              },
              {
                step: '03',
                title: 'Optimization',
                desc: 'We improve your website structure, page titles, metadata, treatment pages, internal links, technical SEO, Google Business Profile, and schema markup — systematically, in order of impact.',
              },
              {
                step: '04',
                title: 'Content Growth',
                desc: 'We create or improve treatment pages, city and neighbourhood pages, patient FAQ content, and blog posts targeting searches your future patients are making right now.',
              },
              {
                step: '05',
                title: 'Tracking and Reporting',
                desc: 'We monitor keyword rankings, organic traffic, patient calls, form submissions, Google Maps actions, local visibility, and conversion performance. Monthly reports in clear language — no vanity metrics, no jargon.',
              },
            ].map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-6 mb-0">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-black text-sm"
                    style={{ background: '#0F0F12', color: '#C8FF00' }}
                  >
                    {step}
                  </div>
                  {i < 4 && (
                    <div className="w-px flex-1 my-3" style={{ background: '#E5E7EB', minHeight: '2.5rem' }} aria-hidden="true" />
                  )}
                </div>
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
                How Much Does Dental SEO Cost?
              </h2>
              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: '#374151' }}>
                <p>
                  Dental SEO pricing depends on your clinic size, city, competitive landscape, number of
                  treatment services, current website condition, and patient growth goals. A single-location
                  family dentist in a smaller city has different needs from a multi-location cosmetic and implant
                  clinic in Toronto.
                </p>
                <p>
                  We offer a free dental SEO audit to assess your specific situation before recommending a plan.
                  No lock-in contracts. You can start with an audit and build from there.
                </p>
              </div>
              <Link href="/contact" className="btn-primary text-sm px-6 py-3.5 inline-block">
                Request a Free Dental SEO Audit
              </Link>
            </div>

            <div className="space-y-2">
              {[
                { service: 'Dental SEO Audit', price: 'Free', note: 'Full review with no commitment required', featured: true },
                { service: 'Local Dental SEO', price: 'From $499/month', note: 'GBP, citations, local content, map pack rankings', featured: false },
                { service: 'Dental SEO Consulting', price: 'From $499/month', note: 'Strategy, on-page optimization, reporting', featured: false },
                { service: 'Technical SEO Audit', price: 'Custom', note: 'Full technical crawl with prioritized fix list', featured: false },
                { service: 'Dental Content Strategy', price: 'Custom', note: 'Treatment pages, city pages, patient FAQs, blog plan', featured: false },
                { service: 'Full Dental SEO Growth Plan', price: 'Custom', note: 'Technical + local + content + conversion in one plan', featured: false },
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
                    <p className="text-sm font-bold" style={{ color: featured ? '#F8FAFC' : '#0F0F12' }}>
                      {service}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: featured ? 'rgba(255,255,255,0.38)' : '#9CA3AF' }}>
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
                Why Choose OMA as Your Dental SEO Expert?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Dental SEO requires a practitioner who understands the patient search journey, treatment-specific
                intent, local ranking signals, and healthcare trust requirements. We combine the technical SEO
                expertise of a digital agency with the local search focus required to grow a dental practice.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                  Get Your Free Dental SEO Audit
                </Link>
                <Link href="/seo-services" className="btn-outline-white text-sm px-6 py-3">
                  Our SEO Services
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  title: 'SEO strategy built for dental clinics',
                  desc: 'Not a generic agency playbook. A dental SEO strategy built around your treatments, your city, your patients, and your competitive landscape.',
                },
                {
                  title: 'Patient calls and appointments first',
                  desc: 'Rankings are the means. Patient calls, appointment requests, and form submissions are the goal. Every optimization decision is made with that outcome in mind.',
                },
                {
                  title: 'Local SEO, technical SEO, and treatment pages in one',
                  desc: 'We handle the full dental SEO stack — not just one layer. Technical fixes, local optimization, treatment page strategy, and conversion improvements under one roof.',
                },
                {
                  title: 'Google Business Profile optimization included',
                  desc: 'GBP is the most important local SEO asset for any dental clinic. We include full GBP optimization and management as part of our dental SEO service.',
                },
                {
                  title: 'Clear monthly reporting',
                  desc: 'Keyword rankings, organic traffic, patient calls, appointment form submissions, and Google Maps actions — reported monthly in plain language.',
                },
                {
                  title: 'No lock-in contracts',
                  desc: 'We earn your business through results, not because you are committed to a 12-month retainer you cannot exit.',
                },
              ].map(({ title, desc }) => (
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
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 8: Trust and E-E-A-T ───────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }} aria-labelledby="trust-heading">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-start">

            <div>
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
                E-E-A-T for Dental Websites
              </p>
              <h2
                id="trust-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Dental SEO Needs Trust, Not Just Keywords
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                <p>
                  Dental websites fall into Google's Your Money or Your Life (YMYL) category — pages where the
                  content can directly affect a person's health or financial wellbeing. Google applies higher
                  scrutiny to these sites, and the quality of trust signals on your website directly affects both
                  your rankings and the conversion rate of patients who land on your pages.
                </p>
                <p>
                  A patient choosing a dental clinic wants to know who is treating them, what qualifications the
                  dentist holds, what other patients have experienced, and what the process looks like. A website
                  that does not answer these questions — regardless of how well-optimized the metadata is —
                  will convert fewer visitors into appointments.
                </p>
                <p>
                  OMA improves both your search visibility and the trust architecture of your website. We
                  ensure that your{' '}
                  <Link href="/seo-consultant" className="font-semibold underline" style={{ color: '#0F0F12' }}>
                    SEO strategy
                  </Link>{' '}
                  is paired with the on-page trust signals that turn organic search traffic into patient bookings.
                  If your website also needs a structural redesign to support this,
                  our{' '}
                  <Link href="/website-design-for-small-business" className="font-semibold underline" style={{ color: '#0F0F12' }}>
                    website design for dental clinics
                  </Link>{' '}
                  addresses both conversion and technical SEO at the same time.
                </p>
              </div>
            </div>

            <div>
              <div
                className="rounded-2xl p-8"
                style={{ background: '#F7F6F2', border: '1px solid #E5E7EB' }}
              >
                <h3 className="text-base font-black mb-6" style={{ color: '#0F0F12' }}>
                  Trust Signals We Help Your Clinic Build
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Dentist and Team Bios',
                      desc: 'Credentials, education, specializations, and photos for every practitioner at your clinic.',
                    },
                    {
                      title: 'Patient Reviews and Testimonials',
                      desc: 'Google Reviews, embedded testimonials, and a system for consistently generating new authentic reviews.',
                    },
                    {
                      title: 'Treatment FAQs',
                      desc: 'Detailed patient questions and answers for each treatment — structured data that improves both rankings and patient confidence.',
                    },
                    {
                      title: 'Appointment CTAs',
                      desc: 'Clear, visible appointment request buttons, phone numbers, and online booking links on every page.',
                    },
                    {
                      title: 'Insurance and Financing Information',
                      desc: 'Accepted insurance providers, payment options, and financing details that remove hesitation from prospective patients.',
                    },
                    {
                      title: 'Location and Contact Details',
                      desc: 'Clinic address, hours, phone number, and a map embedded on your contact page — consistent with your GBP listing.',
                    },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                        style={{ background: '#1D4ED8' }}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-bold mb-0.5" style={{ color: '#0F0F12' }}>{title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 9: FAQ ─────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="faq-heading">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#1D4ED8' }}>
                Common Questions
              </p>
              <h2
                id="faq-heading"
                className="text-3xl font-black leading-[1.06]"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Dental SEO FAQs
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
                    style={{ color: '#0F0F12', background: '#fff' }}
                  >
                    {faq.name}
                  </dt>
                  <dd
                    className="px-6 py-5 text-sm leading-relaxed"
                    style={{ color: '#374151', background: '#F7F6F2' }}
                  >
                    {faq.acceptedAnswer.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Section 10: Final CTA + Form ───────────────────────────────────── */}
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
              <p className="section-label-lime mb-5">Free Dental SEO Audit</p>
              <h2
                id="final-cta-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-5"
                style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
              >
                Ready to Get More New Patients From Google?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Request a free dental SEO audit and we will show you what is holding your website back, where
                your biggest ranking opportunities are, and how to turn more organic traffic into patient calls
                and appointment requests. No commitment required.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { label: 'What we review', value: 'Website, rankings, GBP, treatment pages, technical issues, competitor landscape' },
                  { label: 'What you get', value: 'A clear action plan focused on patient growth — not a sales pitch' },
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
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.28)' }}>
                  Prefer to call?
                </p>
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
                    { label: 'SEO Consultant', href: '/seo-consultant' },
                    { label: 'SEO Services', href: '/seo-services' },
                    { label: 'Local SEO', href: '/local-seo-services' },
                    { label: 'GBP Optimization', href: '/google-business-profile-optimization' },
                    { label: 'Google Ads', href: '/google-ads-management' },
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
                aria-label="Request a free dental SEO audit"
              >
                <div
                  className="px-6 py-5"
                  style={{ background: '#1E1E24', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <h3 className="text-base font-black" style={{ color: '#F8FAFC' }}>
                    Request Free Dental SEO Audit
                  </h3>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    We will review your clinic website and respond within 1 business day.
                  </p>
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
                        placeholder="Dr. Sarah Chen"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="clinicName" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Clinic Name *
                      </label>
                      <input
                        id="clinicName"
                        name="clinicName"
                        type="text"
                        required
                        placeholder="Bright Smile Dental"
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
                        placeholder="dr.chen@clinic.ca"
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
                        placeholder="416-555-0100"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="website" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Clinic Website
                      </label>
                      <input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://yourclinic.ca"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Toronto"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                      />
                    </div>
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
                      <option value="" style={{ background: '#1E1E24' }}>Select your main goal</option>
                      {[
                        'More new patient calls',
                        'Rank higher on Google Maps',
                        'Improve organic rankings',
                        'Fix technical SEO issues',
                        'Treatment page strategy',
                        'Full dental SEO growth plan',
                      ].map((opt) => (
                        <option key={opt} value={opt} style={{ background: '#1E1E24' }}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      Tell us about your clinic or current SEO challenges
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Number of locations, key services, current SEO situation..."
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg outline-none resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#F8FAFC' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg font-black text-sm transition-opacity duration-150 hover:opacity-90"
                    style={{ background: '#C8FF00', color: '#0F0F12' }}
                  >
                    Request Free Dental SEO Audit
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
