import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Dentist Google Ads | Google Ads Management for Dental Clinics | OMA',
  description:
    'Need Google Ads for dentists? OMA helps dental clinics get more patient calls, appointment requests, and treatment inquiries with Google Ads, landing pages, and conversion tracking.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/dentist-google-ads' },
  keywords: [
    'dentist Google Ads',
    'Google Ads for dentists',
    'dental Google Ads',
    'dental PPC agency',
    'Google Ads management for dentists',
  ],
  openGraph: {
    title: 'Dentist Google Ads | Google Ads Management for Dental Clinics | OMA',
    description:
      'Need Google Ads for dentists? OMA helps dental clinics get more patient calls, appointment requests, and treatment inquiries with Google Ads, landing pages, and conversion tracking.',
    url: 'https://onlinemarketingagency.ca/dentist-google-ads',
  },
  twitter: {
    title: 'Dentist Google Ads | Google Ads Management for Dental Clinics | OMA',
    description:
      'Need Google Ads for dentists? OMA helps dental clinics get more patient calls, appointment requests, and treatment inquiries with Google Ads, landing pages, and conversion tracking.',
  },
}

// ── Schemas ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management for Dentists',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Google Ads management for dental clinics, dentists, orthodontists, and cosmetic dentists. Includes campaign strategy, keyword research, landing pages, call tracking, conversion tracking, and ongoing optimization for patient lead generation.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Dental Google Ads Management',
  offers: {
    '@type': 'Offer',
    price: '499',
    priceCurrency: 'CAD',
    description: 'Google Ads management for dentists from $499/month',
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
    'Canadian digital marketing agency providing Google Ads management, dental SEO, Local SEO, and lead generation for dental clinics and healthcare businesses.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do Google Ads work for dentists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Google Ads can generate patient calls and appointment requests quickly for dental clinics. Patients searching for a dentist, emergency dental care, Invisalign, dental implants, or other treatments are already high-intent — they are actively looking to book. When campaigns are structured correctly with strong keywords, negative keywords, location targeting, call tracking, and a well-built landing page, dental Google Ads can produce a consistent flow of new patient inquiries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should a dental clinic spend on Google Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ad budget depends on your city, competition, treatment focus, and growth goals. A small local dental campaign can start at $20 to $50 per day. Competitive markets or high-value treatment campaigns such as dental implants or Invisalign typically require $50 to $150 per day or more. The most important factor is not the budget alone — it is how well the budget is managed, tracked, and optimized. We provide budget recommendations as part of the free audit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Google Ads management for dentists cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads management for dental clinics starts from $499 per month plus your ad spend. The management fee covers campaign strategy, keyword research, ad copywriting, negative keyword management, bid optimization, landing page review, call tracking setup, conversion tracking, monthly reporting, and ongoing improvements. Custom pricing is available for larger clinics or multi-location practices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dental services work best with Google Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'High-intent services with a clear search pattern work best. Emergency dentistry, dental implants, Invisalign, teeth whitening, veneers, cosmetic dentistry, and family dentistry all have strong search volume and patient conversion intent. Services with urgent need — like emergency dental care and root canals — can produce calls within hours of campaign launch. High-value treatments like implants and Invisalign generate consultation inquiries that can produce significant return on ad spend when tracked and optimized correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should dentists use Google Ads or SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads generates patient leads faster than SEO — campaigns can produce calls within days. SEO builds long-term organic visibility that does not require ongoing ad spend to maintain. Most dental clinics benefit from running both: Google Ads for immediate patient acquisition while SEO builds organic rankings over 3 to 6 months. Running both together reduces cost per patient over time as SEO traffic grows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Google Ads help emergency dental clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Emergency dentistry is one of the highest-converting categories for Google Ads. Patients searching for an emergency dentist are in pain and need help immediately — the search to call conversion rate is significantly higher than routine dental searches. Emergency dental campaigns need to be available at all hours, have a prominent click-to-call number, load fast on mobile, and connect patients directly to the clinic without friction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create landing pages for dental ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Landing page strategy is included in our dental Google Ads management. Many dental clinics waste ad budget by sending clicks to a homepage or weak service page with no clear CTA, no click-to-call button, and no appointment form. A properly built dental landing page improves conversion rate significantly and reduces cost per lead. We review your existing pages and recommend improvements or build new landing pages as needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you set up call tracking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Call tracking is a core part of our dental Google Ads setup. Without call tracking, you cannot know which campaigns, keywords, or ads are generating patient calls. We implement call tracking so every phone call from ads is attributed to the campaign and keyword that drove it — giving you clear data on cost per call, call volume, and lead quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you reduce wasted ad spend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Wasted ad spend is one of the most common problems in dental Google Ads accounts. Common causes include broad match keywords triggering irrelevant searches, missing negative keywords, poor location targeting, ads showing for job seeker or student searches, and no conversion tracking to distinguish real leads from irrelevant clicks. Our free Google Ads audit identifies exactly where budget is being wasted and what changes will improve campaign efficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to launch dentist Google Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A new dental Google Ads campaign typically takes 5 to 10 business days to build and launch properly — including keyword research, campaign structure, ad copywriting, negative keyword lists, landing page review, call tracking setup, and conversion tracking. If there is an existing account to audit and restructure, timing depends on what needs to change. We do not rush campaigns at the expense of quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you manage Google Ads for multiple dental locations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We manage Google Ads for multi-location dental clinics with location-specific campaigns, local keyword targeting, separate tracking for each location, and consolidated reporting. Multi-location management requires custom pricing based on the number of locations and complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help if my dental ads get clicks but no appointments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Clicks without appointments is a conversion problem, not just an ads problem. The issue is usually one of three things: wrong keywords attracting low-intent traffic, a landing page that does not convert, or a contact path that is too slow or complicated. We audit your click-to-call setup, form placement, page speed, mobile usability, trust signals, and appointment request flow — then make changes that move clicks into calls.',
      },
    },
  ],
}

// ── Dashboard data ─────────────────────────────────────────────────────────────

const dashMetrics = [
  { label: 'New Patient Calls', value: '94/mo', sub: 'from Google Ads', color: '#C8FF00' },
  { label: 'Cost Per Lead', value: '$31', sub: 'down from $118', color: '#60A5FA' },
  { label: 'Conversion Rate', value: '14.2%', sub: 'up from 3.1%', color: '#34D399' },
  { label: 'Wasted Spend Cut', value: '62%', sub: 'saved on budget', color: '#A78BFA' },
]

const campaignRows = [
  { name: 'Emergency Dentist — GTA', status: 'Active', calls: '38/mo', cpl: '$24', conv: '18.4%' },
  { name: 'Dental Implants — Brampton', status: 'Active', calls: '21/mo', cpl: '$42', conv: '12.1%' },
  { name: 'Invisalign — Mississauga', status: 'Active', calls: '19/mo', cpl: '$38', conv: '11.7%' },
  { name: 'Family Dentist — Toronto', status: 'Active', calls: '16/mo', cpl: '$27', conv: '9.8%' },
]

const auditFindings = [
  { label: 'Broad match wasting $1,240/mo', severity: 'critical' },
  { label: 'Call tracking: active', severity: 'ok' },
  { label: '3 ad groups missing negatives', severity: 'warning' },
]

// ── Page ───────────────────────────────────────────────────────────────────────

export default function DentistGoogleAdsPage() {
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
            { label: 'Dentist Google Ads' },
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
                  Dentist Google Ads · OMA
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl font-black leading-[1.04] mb-6"
                style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
              >
                Dentist Google Ads Management for{' '}
                <span style={{ color: '#C8FF00' }}>More Patient Leads</span>
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Want your dental clinic to get more patient calls, appointment requests, and high-intent
                treatment inquiries from Google? OMA builds and manages Google Ads for dentists with
                keyword strategy, landing pages, call tracking, conversion tracking, and ongoing
                optimization so your budget generates real patient leads.
              </p>

              {/* Trust bullets */}
              <ul className="grid grid-cols-2 gap-2.5 mb-9">
                {[
                  'Built for dental clinics',
                  'Call tracking focused',
                  'Landing page strategy included',
                  'No lock-in contracts',
                  'Clear monthly reporting',
                  'Free Google Ads audit',
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
                  Get a Free Google Ads Audit
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

            {/* Right: Dental Google Ads dashboard visual */}
            <div
              aria-label="Dentist Google Ads dashboard showing new patient calls, appointment requests, cost per lead, keyword performance, and conversion tracking for a dental clinic"
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
                    Dental Google Ads — OMA Campaign Dashboard
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
                          {m.value}
                        </p>
                        <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                          {m.sub}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Campaign rows */}
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="grid grid-cols-5 px-3.5 py-2"
                      style={{ background: '#1E1E24', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      {['Campaign', 'Status', 'Calls', 'CPL', 'Conv.'].map((h) => (
                        <p key={h} className="text-[9px] font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>
                          {h}
                        </p>
                      ))}
                    </div>
                    {campaignRows.map((r) => (
                      <div
                        key={r.name}
                        className="grid grid-cols-5 px-3.5 py-2.5 items-center"
                        style={{ background: '#16161A', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                      >
                        <span className="text-[10px] col-span-1 truncate" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          {r.name}
                        </span>
                        <span
                          className="text-[9px] font-bold px-1.5 py-0.5 rounded inline-block w-fit"
                          style={{ background: 'rgba(200,255,0,0.1)', color: '#C8FF00' }}
                        >
                          {r.status}
                        </span>
                        <span className="text-[10px] font-semibold" style={{ color: '#C8FF00' }}>{r.calls}</span>
                        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{r.cpl}</span>
                        <span className="text-[10px]" style={{ color: '#60A5FA' }}>{r.conv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Audit findings strip */}
                  <div className="flex flex-wrap gap-2">
                    {auditFindings.map((item) => (
                      <span
                        key={item.label}
                        className="text-[10px] font-medium px-2.5 py-1.5 rounded-full"
                        style={{
                          background:
                            item.severity === 'critical'
                              ? 'rgba(239,68,68,0.1)'
                              : item.severity === 'ok'
                              ? 'rgba(200,255,0,0.08)'
                              : 'rgba(251,191,36,0.1)',
                          color:
                            item.severity === 'critical'
                              ? '#FCA5A5'
                              : item.severity === 'ok'
                              ? '#C8FF00'
                              : '#FCD34D',
                          border: `1px solid ${
                            item.severity === 'critical'
                              ? 'rgba(239,68,68,0.2)'
                              : item.severity === 'ok'
                              ? 'rgba(200,255,0,0.15)'
                              : 'rgba(251,191,36,0.2)'
                          }`,
                        }}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── S1: Why Dentists Need Google Ads ──────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="s1-heading"
      >
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16 items-start">

            <div className="lg:col-span-2">
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-5"
                style={{ background: 'rgba(29,78,216,0.08)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.15)' }}
              >
                Why Google Ads for Dentists
              </span>
              <h2
                id="s1-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Patients Search Google When They Are Ready to Book
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                Unlike passive advertising, Google search puts your clinic in front of patients at the
                exact moment they are looking. Searches like <em>dentist near me</em>,{' '}
                <em>emergency dentist near me</em>, <em>dental implants</em>, <em>Invisalign</em>,{' '}
                <em>teeth whitening</em>, <em>cosmetic dentist</em>, <em>family dentist</em>, and{' '}
                <em>dental clinic near me</em> all come from patients actively ready to call or book.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#444' }}>
                Dentist Google Ads can generate patient leads faster than SEO — but only when campaigns
                are built correctly with the right keywords, negative keywords, location targeting,
                landing pages, call tracking, and conversion tracking. A poorly structured dental PPC
                campaign wastes budget without producing appointments.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  n: '01',
                  title: 'High Intent at the Moment of Search',
                  body: 'Patients searching for a dentist have already decided they need care. Google Ads connects your clinic to that demand in real time — before the patient calls a competitor.',
                },
                {
                  n: '02',
                  title: 'Faster Results Than SEO Alone',
                  body: 'SEO builds over months. Google Ads for dentists can generate calls within days of launch. Many practices use both together — Ads for immediate leads, SEO for long-term organic growth.',
                },
                {
                  n: '03',
                  title: 'Treatment-Level Campaign Control',
                  body: 'Unlike broad brand awareness, dental PPC lets you run separate campaigns for emergency care, implants, Invisalign, cosmetic dentistry, and family dental — each targeting patients at different intent levels.',
                },
                {
                  n: '04',
                  title: 'Full Visibility Into Cost Per Lead',
                  body: 'With proper call tracking and conversion tracking, you can see exactly how much each call and appointment request costs — and which campaigns, keywords, and ads are producing the best return.',
                },
                {
                  n: '05',
                  title: 'Budget Control Without Platform Lock-In',
                  body: 'You set the daily budget and can pause campaigns at any time. Unlike SEO, results are immediate but require ongoing spend. Good management maximizes every dollar spent.',
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

      {/* ── S2: What Our Google Ads Management Includes ──────────────────── */}
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
              Dental Google Ads Management
            </span>
            <h2
              id="s2-heading"
              className="text-3xl sm:text-4xl font-black leading-[1.08]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              What Our Google Ads Management for Dentists Includes
            </h2>
            <p className="text-base leading-relaxed mt-4 max-w-2xl mx-auto" style={{ color: '#555' }}>
              Every dental Google Ads engagement is built around your clinic, your services, your city,
              and your patient acquisition goals — not a plug-and-play template.
            </p>
          </div>

          {/* Featured panels */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">

            {/* Google Ads Audit — dark */}
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
                  Start Here
                </span>
                <h3 className="text-2xl font-black mb-3" style={{ color: '#F8FAFC' }}>
                  Google Ads Audit
                </h3>
                <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  We review your account structure, keywords, match types, search terms, wasted spend,
                  conversion tracking, location targeting, ad copy, bidding strategy, and landing page
                  performance. The audit identifies exactly where budget is being lost and where
                  patient lead opportunities exist.
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

            {/* Campaign Strategy — cream */}
            <div
              className="rounded-2xl p-8"
              style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.07)' }}
            >
              <span
                className="text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full inline-block mb-5"
                style={{ background: 'rgba(29,78,216,0.08)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
              >
                Core Service
              </span>
              <h3 className="text-2xl font-black mb-3" style={{ color: '#0F0F12' }}>
                Campaign Strategy
              </h3>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#444' }}>
                We build campaigns around dental services, patient intent, location, budget, competition,
                and treatment value. Each service category — emergency, cosmetic, orthodontic, family —
                gets its own campaign structure to maximize relevance and minimize wasted spend.
              </p>
              <Link
                href="/google-ads-management"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#1D4ED8' }}
              >
                Explore Google Ads management
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Supporting service blocks */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              {
                title: 'Keyword Research',
                body: 'Find high-intent searches patients use before calling or booking — including emergency, cosmetic, family, orthodontic, and implant-related keywords.',
              },
              {
                title: 'Negative Keywords',
                body: 'Reduce wasted spend by filtering irrelevant clicks — job seekers, students, DIY searches, free service searches, and low-intent traffic.',
              },
              {
                title: 'Ad Copywriting',
                body: 'Write clear, compliant, conversion-focused ads for dental searches without misleading claims or exaggerated promises.',
              },
              {
                title: 'Landing Page Strategy',
                body: 'Improve or create landing pages focused on calls, appointment requests, treatment details, trust signals, reviews, and conversion.',
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Call Tracking',
                body: 'Track phone calls from ads to understand which campaigns and keywords generate patient leads — not just clicks.',
              },
              {
                title: 'Conversion Tracking',
                body: 'Set up tracking for calls, forms, appointment requests, and key website actions so every lead is attributed accurately.',
              },
              {
                title: 'Ongoing Optimization',
                body: 'Improve bids, keywords, search terms, ads, landing pages, budgets, and conversion quality every month.',
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

      {/* ── S3: High-Intent Dental Campaigns ─────────────────────────────── */}
      <section
        className="relative section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="s3-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative">
          <div className="text-center mb-10">
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: 'rgba(200,255,0,0.08)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.15)' }}
            >
              Treatment-Level Campaigns
            </span>
            <h2
              id="s3-heading"
              className="text-3xl sm:text-4xl font-black leading-[1.08]"
              style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
            >
              Google Ads Campaigns for High-Value Dental Services
            </h2>
            <p className="text-base leading-relaxed mt-4 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Each dental service has a different patient intent, search volume, and cost per click.
              We build separate campaigns for each so your budget is spent where it produces results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                service: 'Emergency Dentist',
                desc: 'Urgent calls from high-intent patients in pain. High conversion rate. Must be always-on with fast mobile load.',
                badge: 'Highest Intent',
                badgeColor: '#C8FF00',
              },
              {
                service: 'Dental Implants',
                desc: 'Consultation inquiries for high-value treatment. Longer decision cycle but significant patient lifetime value.',
                badge: 'High Value',
                badgeColor: '#60A5FA',
              },
              {
                service: 'Invisalign',
                desc: 'Orthodontic and clear aligner leads. Competitive keywords but strong conversion when landing page is strong.',
                badge: 'High Value',
                badgeColor: '#60A5FA',
              },
              {
                service: 'Cosmetic Dentistry',
                desc: 'Veneers, whitening, and smile makeover inquiries from appearance-motivated patients with strong booking intent.',
                badge: 'High Value',
                badgeColor: '#A78BFA',
              },
              {
                service: 'Family Dentist',
                desc: 'Routine appointment requests and new patient bookings. High volume, consistent demand, broad keyword coverage.',
                badge: 'High Volume',
                badgeColor: '#34D399',
              },
              {
                service: 'Pediatric Dentist',
                desc: 'Parent searches for children\'s dental care. City and near-me searches with high appointment intent.',
                badge: 'Steady Demand',
                badgeColor: '#34D399',
              },
              {
                service: 'Root Canal',
                desc: 'Urgent treatment searches from patients in discomfort. Time-sensitive and high conversion when campaigns are live.',
                badge: 'High Intent',
                badgeColor: '#C8FF00',
              },
              {
                service: 'Teeth Whitening',
                desc: 'Cosmetic service inquiries from patients motivated by appearance. Often paired with wider cosmetic dentistry campaigns.',
                badge: 'Steady Demand',
                badgeColor: '#34D399',
              },
              {
                service: 'Dentures',
                desc: 'Consultation requests from patients seeking full or partial denture solutions. Older demographic with high intent.',
                badge: 'Niche Intent',
                badgeColor: '#A78BFA',
              },
              {
                service: 'Dental Cleaning',
                desc: 'Routine new patient bookings. Good for filling appointment slots and acquiring long-term patients.',
                badge: 'High Volume',
                badgeColor: '#34D399',
              },
            ].map((item) => (
              <div
                key={item.service}
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <span
                  className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full inline-block mb-3"
                  style={{ background: `${item.badgeColor}15`, color: item.badgeColor, border: `1px solid ${item.badgeColor}25` }}
                >
                  {item.badge}
                </span>
                <h3 className="font-bold text-sm mb-1.5" style={{ color: '#F8FAFC' }}>
                  {item.service}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-primary text-sm px-6 py-3.5 inline-block">
              Get a Free Dental Google Ads Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ── S4: Landing Pages ─────────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="s4-heading"
      >
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

            <div>
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full inline-block mb-5"
                style={{ background: 'rgba(29,78,216,0.08)', color: '#1D4ED8', border: '1px solid rgba(29,78,216,0.12)' }}
              >
                Landing Page Strategy
              </span>
              <h2
                id="s4-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Clicks Are Not Enough. Your Landing Page Has to Convert.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                Many dental clinics waste ad budget because clicks land on a homepage or a weak service
                page with no clear call-to-action, no click-to-call button, and no appointment form. A
                strong dental landing page makes it immediately easy for a patient to call, request an
                appointment, understand the service, and trust the clinic.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#444' }}>
                Landing page quality also affects your Google Ads quality score — which directly impacts
                cost per click and ad position. A better landing page reduces your cost per lead while
                improving your position against competitors.
              </p>
              <Link href="/contact" className="btn-primary text-sm px-6 py-3.5 inline-block">
                Request a Landing Page Review
              </Link>
            </div>

            <div>
              <div
                className="rounded-2xl p-6"
                style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="text-xs font-bold tracking-wider uppercase mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  A converting dental landing page includes
                </p>
                <div className="space-y-3">
                  {[
                    'Clear treatment headline above the fold',
                    'Click-to-call phone number visible on mobile',
                    'Appointment request form with minimal fields',
                    'Treatment explanation in plain language',
                    'Dentist and team trust signals',
                    'Patient reviews and testimonials',
                    'Location, hours, and parking information',
                    'Insurance and financing options where available',
                    'Before/after galleries for cosmetic services',
                    'FAQ section for patient questions',
                    'Mobile-first layout with fast load speed',
                    'Single focused CTA — not ten competing options',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── S5: Process ───────────────────────────────────────────────────── */}
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
              Our Dental Google Ads Process
            </span>
            <h2
              id="s5-heading"
              className="text-3xl sm:text-4xl font-black leading-[1.08]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              Our Dentist Google Ads Process
            </h2>
            <p className="text-base leading-relaxed mt-4" style={{ color: '#555' }}>
              A structured process that moves from diagnosis to patient leads without cutting corners.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: '01',
                title: 'Audit',
                body: 'We review your current ads, keywords, search terms, landing pages, tracking setup, competitor ads, and wasted spend. If you do not have an existing account, we assess your competitive landscape and starting budget.',
              },
              {
                step: '02',
                title: 'Strategy',
                body: 'We create a campaign plan based on your dental services, city, competition, budget, and highest-value treatments. Emergency, implant, Invisalign, and family campaigns each get their own strategy.',
              },
              {
                step: '03',
                title: 'Build',
                body: 'We set up or restructure campaigns, ad groups, keywords, negative keyword lists, ad copy, extensions, landing pages, call tracking, and conversion tracking.',
              },
              {
                step: '04',
                title: 'Launch',
                body: 'We launch campaigns with clear conversion goals, geographic targeting, call tracking, and daily budget controls. Initial data collection begins immediately.',
              },
              {
                step: '05',
                title: 'Optimize',
                body: 'We monitor search terms, cost per lead, call quality, conversion rate, wasted spend, and treatment-level performance — making improvements every month.',
              },
              {
                step: '06',
                title: 'Report',
                body: 'We provide clear reporting focused on patient calls, appointment requests, cost per lead, and campaign improvements. No vanity metrics, no confusing dashboards.',
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

      {/* ── S6: Pricing ───────────────────────────────────────────────────── */}
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
                Google Ads Pricing for Dentists
              </span>
              <h2
                id="s6-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                How Much Do Dentist Google Ads Cost?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                Google Ads costs depend on your location, competition, treatment focus, landing page
                quality, and campaign structure. Emergency dental keywords can be competitive but
                convert at a high rate. Dental implant and Invisalign keywords often cost more per
                click but can produce higher-value consultations.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                Without proper tracking, it is impossible to know which keywords generate calls and
                which waste budget. Tracking setup is included in our management service.
              </p>

              {/* Recommended budgets */}
              <div
                className="rounded-xl p-5 mb-6"
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)' }}
              >
                <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: '#888' }}>
                  Recommended ad budgets
                </p>
                {[
                  { label: 'Small local dental campaign', budget: '$20–$50/day' },
                  { label: 'Competitive dental market', budget: '$50–$150/day' },
                  { label: 'Multi-location or implant campaigns', budget: 'Custom' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span className="text-sm" style={{ color: '#444' }}>{b.label}</span>
                    <span className="text-sm font-bold" style={{ color: '#0F0F12' }}>{b.budget}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary text-sm px-6 py-3.5 inline-block">
                Request a Free Google Ads Audit
              </Link>
            </div>

            <div className="lg:col-span-3">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(0,0,0,0.09)' }}
              >
                {[
                  { service: 'Google Ads Audit', price: 'Free', featured: true },
                  { service: 'Google Ads Management for Dentists', price: 'From $499/month', featured: false },
                  { service: 'Landing Page Review', price: 'Included', featured: false },
                  { service: 'Call Tracking Setup', price: 'Custom', featured: false },
                  { service: 'Conversion Tracking Setup', price: 'Custom', featured: false },
                  { service: 'Full Dental Lead Generation Plan', price: 'Custom', featured: false },
                ].map((row) => (
                  <div
                    key={row.service}
                    className="flex items-center justify-between px-6 py-4"
                    style={{
                      background: row.featured ? '#0F0F12' : '#fff',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                    }}
                  >
                    <span className="text-sm font-medium" style={{ color: row.featured ? '#F8FAFC' : '#222' }}>
                      {row.service}
                    </span>
                    <span className="text-sm font-black" style={{ color: row.featured ? '#C8FF00' : '#0F0F12' }}>
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: '#888' }}>
                Management fee is separate from your Google Ads spend. Ad spend goes directly to Google.
                No lock-in contracts. All engagements start with a free audit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── S7: Why Choose OMA ────────────────────────────────────────────── */}
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
                Why Choose OMA for Dental Google Ads?
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                We manage Google Ads for dental clinics with a focus on patient calls and appointment
                requests — not impressions, click-through rates, or metrics that do not connect to
                real patient acquisition.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Google Ads strategy built specifically for dental clinics and patient acquisition',
                'Focused on patient calls, appointment requests, and real lead outcomes',
                'Search campaigns structured around treatment intent — not generic dental terms',
                'Landing page and conversion strategy included from the start',
                'Call tracking to know exactly which campaigns generate patient calls',
                'Negative keyword management to reduce wasted spend every month',
                'Clear reporting focused on cost per lead and campaign improvements',
                'No lock-in contracts — results earn the relationship',
                'Practical recommendations you can understand and hold us accountable to',
                'Google Ads connected to SEO, Local SEO, and website conversion strategy',
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

      {/* ── S8: Trust and Compliance ──────────────────────────────────────── */}
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
                Trust · Clarity · Responsible Messaging
              </span>
              <h2
                id="s8-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Dental Ads Need Trust, Clarity, and Careful Messaging
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                Dental advertising should be clear, professional, and responsible. Ads should not
                overpromise, mislead patients, or make unrealistic claims about outcomes. Google also
                has specific policies around healthcare advertising that must be followed.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                OMA focuses on practical campaign strategy, honest messaging, strong landing pages, and
                proper tracking. We do not write ads that promise outcomes no clinic can guarantee.
                Our ads communicate what your clinic offers, where it is located, how to get in touch,
                and why patients should choose you — clearly and without exaggeration.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#444' }}>
                If you are also looking for long-term visibility, our{' '}
                <Link href="/dental-seo-expert" className="underline underline-offset-2" style={{ color: '#1D4ED8' }}>
                  dental SEO expert
                </Link>{' '}
                service builds organic rankings alongside your paid campaigns, reducing cost per patient
                over time as SEO traffic grows.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-6 space-y-4"
                style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <h3 className="font-black text-base mb-2" style={{ color: '#0F0F12' }}>
                  Trust elements we include in dental ads
                </h3>
                {[
                  { label: 'Clear treatment descriptions', note: 'No vague or misleading claims' },
                  { label: 'Clinic reviews and ratings', note: 'Real social proof near CTAs' },
                  { label: 'Dentist and team bios', note: 'Patient trust through credentials' },
                  { label: 'Location and hours', note: 'Reduces patient friction' },
                  { label: 'Transparent appointment CTAs', note: 'One clear next step' },
                  { label: 'Financing information where available', note: 'Reduces cost barrier' },
                  { label: 'Accurate service details', note: 'Sets correct expectations' },
                  { label: 'Mobile-friendly contact options', note: 'Click-to-call on all devices' },
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
                      <p className="text-sm font-semibold" style={{ color: '#0F0F12' }}>{item.label}</p>
                      <p className="text-xs" style={{ color: '#888' }}>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── S9: FAQ ───────────────────────────────────────────────────────── */}
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
                Dentist Google Ads FAQs
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

      {/* ── S10: Final CTA + Form ─────────────────────────────────────────── */}
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
                Free Google Ads Audit
              </span>
              <h2
                id="s10-heading"
                className="text-3xl sm:text-4xl font-black leading-[1.08] mb-5"
                style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
              >
                Ready to Get More Dental Leads From Google Ads?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Request a free Google Ads audit and we will show you where your dental ad budget is
                being wasted, which keywords have the strongest patient intent, and how to turn more
                clicks into calls and appointment requests.
              </p>

              {/* Audit covers */}
              <div
                className="rounded-xl p-5 mb-8 space-y-2.5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Your free audit covers
                </p>
                {[
                  'Wasted spend from broad match and missing negatives',
                  'Keyword gaps for your treatment categories',
                  'Conversion tracking and call tracking review',
                  'Landing page assessment for your top campaigns',
                  'Competitor ad analysis for your city and services',
                  'Estimated cost per lead improvement opportunity',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{item}</span>
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
                    { label: 'Dental SEO expert', href: '/dental-seo-expert' },
                    { label: 'Google Ads management', href: '/google-ads-management' },
                    { label: 'Local SEO services', href: '/local-seo-services' },
                    { label: 'Google Business Profile', href: '/google-business-profile-optimization' },
                    { label: 'SEO consultant', href: '/seo-consultant' },
                    { label: 'Lead generation', href: '/lead-generation-agency' },
                    { label: 'Website design', href: '/website-design-for-small-business' },
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
                  Request a Free Google Ads Audit
                </h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Tell us about your clinic and we will review your dental Google Ads for free.
                </p>

                <form className="space-y-4" action="/contact" method="GET" aria-label="Free dental Google Ads audit request form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="dental-ads-name"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Name <span aria-hidden="true" style={{ color: '#C8FF00' }}>*</span>
                      </label>
                      <input
                        id="dental-ads-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC' }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dental-ads-clinic"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Clinic Name <span aria-hidden="true" style={{ color: '#C8FF00' }}>*</span>
                      </label>
                      <input
                        id="dental-ads-clinic"
                        name="clinicName"
                        type="text"
                        required
                        placeholder="Your clinic name"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC' }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="dental-ads-email"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Email <span aria-hidden="true" style={{ color: '#C8FF00' }}>*</span>
                      </label>
                      <input
                        id="dental-ads-email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@clinic.ca"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC' }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dental-ads-phone"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Phone
                      </label>
                      <input
                        id="dental-ads-phone"
                        name="phone"
                        type="tel"
                        placeholder="905-000-0000"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC' }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="dental-ads-website"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Website
                      </label>
                      <input
                        id="dental-ads-website"
                        name="website"
                        type="url"
                        placeholder="https://yourclinic.ca"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC' }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dental-ads-city"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        City
                      </label>
                      <input
                        id="dental-ads-city"
                        name="city"
                        type="text"
                        placeholder="Toronto, Mississauga…"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC' }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="dental-ads-budget"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Monthly Ad Budget
                      </label>
                      <select
                        id="dental-ads-budget"
                        name="budget"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors appearance-none"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC' }}
                      >
                        <option value="">Select a budget</option>
                        <option value="under-1000">Under $1,000/month</option>
                        <option value="1000-2000">$1,000–$2,000/month</option>
                        <option value="2000-5000">$2,000–$5,000/month</option>
                        <option value="5000-plus">$5,000+/month</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="dental-ads-goal"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Main Treatment Goal
                      </label>
                      <select
                        id="dental-ads-goal"
                        name="goal"
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors appearance-none"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC' }}
                      >
                        <option value="">Select a goal</option>
                        <option value="emergency">Emergency dentist calls</option>
                        <option value="implants">Dental implant leads</option>
                        <option value="invisalign">Invisalign inquiries</option>
                        <option value="cosmetic">Cosmetic dentistry leads</option>
                        <option value="family">Family dentist bookings</option>
                        <option value="general">General new patient growth</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="dental-ads-message"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="dental-ads-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your clinic, your current ads situation, and what you are trying to achieve."
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none transition-colors"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg py-4 text-sm font-black tracking-wide transition-opacity hover:opacity-90"
                    style={{ background: '#C8FF00', color: '#0F0F12' }}
                  >
                    Request Free Google Ads Audit
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
