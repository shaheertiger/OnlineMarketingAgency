'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

// ─── Dashboard visual data ─────────────────────────────────────────────────────

type HealthStatus = 'ok' | 'warning' | 'critical'

const healthItems: { label: string; value: string; status: HealthStatus }[] = [
  { label: 'WordPress Core', value: 'Up to date', status: 'ok' },
  { label: 'Plugin Status', value: '2 updates pending', status: 'warning' },
  { label: 'Security Scan', value: 'No threats found', status: 'ok' },
  { label: 'Backup Status', value: 'Last: 6h ago', status: 'ok' },
  { label: 'Page Speed', value: '91 / 100', status: 'ok' },
  { label: 'Uptime Monitor', value: '99.9% / 30d', status: 'ok' },
  { label: 'Broken Links', value: '1 found', status: 'warning' },
  { label: 'Contact Forms', value: 'All passing', status: 'ok' },
]

const recentEdits = [
  { item: 'Hero CTA text updated', time: '2d ago' },
  { item: 'Service page image replaced', time: '5d ago' },
  { item: 'Phone number updated — footer', time: '9d ago' },
]

// ─── Pricing data ─────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Essential Website Care',
    price: '$199',
    period: '/month',
    tag: null,
    bestFor: 'Small business websites that need reliable monthly updates, backups, basic checks, and light website support.',
    features: [
      'Monthly WordPress & plugin update check',
      'Monthly website backup',
      'Basic security check',
      'Broken link check',
      'Contact form test',
      'Up to 45 minutes of website edits',
      'Monthly maintenance summary',
    ],
    cta: 'Get Essential Care',
    highlighted: false,
  },
  {
    name: 'Growth Website Care',
    price: '$349',
    period: '/month',
    tag: 'Most Popular',
    bestFor: 'Businesses that rely on their website for leads, calls, bookings, quote requests, or appointment requests.',
    features: [
      'Everything in Essential Care',
      'Bi-weekly update checks',
      'Security monitoring',
      'Speed & performance review',
      'Up to 1.5 hours of website edits',
      'Basic SEO maintenance',
      'GA4 & Search Console check',
      'CTA and form review',
      'Priority support',
    ],
    cta: 'Get Growth Care',
    highlighted: true,
  },
  {
    name: 'Premium Website Management',
    price: '$499',
    period: '/month',
    tag: null,
    bestFor: 'Businesses that need ongoing website management, content support, SEO support, landing page edits, and higher-priority technical help.',
    features: [
      'Everything in Growth Care',
      'Weekly update checks',
      'Advanced backup monitoring',
      'Monthly performance optimization',
      'Up to 3 hours of website edits',
      'Landing page updates',
      'Blog upload support',
      'Advanced SEO checks',
      'Conversion improvement recommendations',
      'Priority support',
      'Monthly action report',
    ],
    cta: 'Get Premium Management',
    highlighted: false,
  },
]

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'What is included in a website maintenance package?',
    a: 'Our website maintenance packages include WordPress and plugin updates, monthly website backups, security checks, broken link checks, contact form testing, and a set number of website edit hours depending on the plan. Growth and Premium plans add performance reviews, SEO maintenance, GA4 and Search Console checks, and priority support.',
  },
  {
    q: 'How much does website maintenance cost?',
    a: 'Our website maintenance packages start at $199/month for the Essential plan, $349/month for the Growth plan, and $499/month for the Premium plan. Each plan is designed for a different level of website activity and business reliance on the site.',
  },
  {
    q: 'Do you offer WordPress maintenance packages?',
    a: 'Yes. All of our website maintenance packages include WordPress support — WordPress core updates, plugin updates, theme updates, backup monitoring, security checks, and basic troubleshooting. We work with standard WordPress and popular page builders including Elementor.',
  },
  {
    q: 'How often should a website be updated?',
    a: 'WordPress core, plugins, and themes should be reviewed and updated at minimum monthly — and ideally every two weeks. Outdated plugins and themes are among the most common causes of website security vulnerabilities, broken functionality, and compatibility issues. Our packages handle this on your behalf.',
  },
  {
    q: 'Do you include website backups?',
    a: 'Yes. Every website maintenance package includes regular website backups. Backups are a safety net — if something breaks after an update or is compromised, a recent backup allows for restoration. We recommend off-site or cloud backups as part of any serious maintenance plan.',
  },
  {
    q: 'Do you check website security?',
    a: 'Yes. Our plans include basic security checks covering outdated plugins, known vulnerability flags, suspicious activity indicators, and general security health. We flag issues for your attention and recommend next steps. For advanced malware cleanup or full security audits, those are quoted separately.',
  },
  {
    q: 'Can you make content edits each month?',
    a: 'Yes. All of our website maintenance plans include a set number of edit hours each month. Essential includes up to 45 minutes, Growth includes up to 1.5 hours, and Premium includes up to 3 hours. Typical edits include text changes, image swaps, offer updates, CTA changes, business hours, and phone number updates.',
  },
  {
    q: 'Do you test contact forms?',
    a: 'Yes. Form testing is part of all maintenance plans. Broken contact forms, quote request forms, appointment forms, and inquiry forms are one of the most common — and most costly — issues on small business websites. We test forms monthly to help ensure leads are not being missed.',
  },
  {
    q: 'Can you fix broken pages or links?',
    a: 'Yes. All plans include a broken link check. When broken links, missing pages, or redirect issues are found, they are flagged and, where applicable, corrected within your monthly edit hours. Larger structural issues may require a separate quote.',
  },
  {
    q: 'Is SEO included in website maintenance?',
    a: 'Basic SEO maintenance is included in Growth and Premium plans — this covers metadata review, heading structure, internal link checks, sitemap health, indexability, and alt text review. Full SEO campaigns, keyword strategy, content creation, and link building are separate services.',
  },
  {
    q: 'What is not included in monthly website maintenance?',
    a: 'Standard maintenance packages do not include full website redesigns, custom-coded features, major development projects, full malware cleanup, hosting migrations, new multi-page builds, full SEO campaigns, Google Ads management, CRM integrations, large copywriting projects, or bulk ecommerce product uploads. These can be quoted separately.',
  },
  {
    q: 'Can you maintain a website you did not build?',
    a: 'Yes. We can maintain WordPress websites we did not build, provided we have appropriate admin access and the site is built on standard WordPress (with or without common page builders like Elementor, Divi, or WPBakery). We do an initial audit before starting to understand the setup.',
  },
  {
    q: 'Do you offer one-time website fixes?',
    a: 'We primarily offer ongoing monthly maintenance packages rather than one-off fixes. However, we can discuss single-session support for businesses with a specific issue. For most businesses, an ongoing plan provides better value and prevents issues from compounding.',
  },
  {
    q: 'Can website maintenance help prevent lost leads?',
    a: 'Yes. Broken contact forms, slow page speeds, outdated content, and poor mobile experience all directly affect whether website visitors take action. Consistent maintenance keeps the conversion paths on your site working — forms, CTAs, phone links, booking buttons — which reduces the chance of losing leads to preventable technical issues.',
  },
]

// ─── Status dot helper ─────────────────────────────────────────────────────────

function StatusDot({ status }: { status: HealthStatus }) {
  const color = status === 'ok' ? '#4ade80' : status === 'warning' ? '#fbbf24' : '#f87171'
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: color,
        display: 'inline-block',
        flexShrink: 0,
        boxShadow: `0 0 6px ${color}80`,
      }}
    />
  )
}

// ─── Check icon ────────────────────────────────────────────────────────────────

function Check({ color = '#C8FF00' }: { color?: string }) {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

// ─── FAQ accordion item ────────────────────────────────────────────────────────

function FAQRow({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: isOpen ? '#ffffff' : '#F7F6F2',
        border: isOpen ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(0,0,0,0.06)',
        transition: 'all 0.2s',
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold" style={{ color: '#0F0F12' }}>{q}</span>
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: isOpen ? '#C8FF00' : 'rgba(0,0,0,0.07)',
            transition: 'transform 0.25s, background 0.2s',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={isOpen ? '#0F0F12' : '#6B7280'} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-base leading-relaxed" style={{ color: '#374151' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WebsiteMaintenancePackagesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Maintenance',
    name: 'Website Maintenance Packages',
    description:
      'Monthly website maintenance packages for small businesses — WordPress updates, backups, security checks, website edits, performance monitoring, and ongoing website support. Plans from $199/month.',
    provider: {
      '@type': ['Organization', 'ProfessionalService'],
      name: 'OnlineMarketingAgency.ca',
      url: 'https://onlinemarketingagency.ca',
      telephone: '+19056269919',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
    },
    areaServed: { '@type': 'Country', name: 'Canada' },
    url: 'https://onlinemarketingagency.ca/website-maintenance-packages',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Website Maintenance Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Essential Website Care',
          price: '199',
          priceCurrency: 'CAD',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: '199', priceCurrency: 'CAD', unitCode: 'MON' },
        },
        {
          '@type': 'Offer',
          name: 'Growth Website Care',
          price: '349',
          priceCurrency: 'CAD',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: '349', priceCurrency: 'CAD', unitCode: 'MON' },
        },
        {
          '@type': 'Offer',
          name: 'Premium Website Management',
          price: '499',
          priceCurrency: 'CAD',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: '499', priceCurrency: 'CAD', unitCode: 'MON' },
        },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#0F0F12', paddingTop: '5rem', paddingBottom: '5rem' }}
        aria-labelledby="hero-h1"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-60" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(200,255,0,0.06) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 container-main">
          <div style={{ background: '#0F0F12' }}>
            <Breadcrumb
              items={[
                { label: 'Services', href: '/#services' },
                { label: 'Website Maintenance Packages' },
              ]}
            />
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — copy */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(200,255,0,0.1)',
                  border: '1px solid rgba(200,255,0,0.25)',
                  borderRadius: 999,
                  padding: '0.35rem 1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C8FF00', display: 'inline-block' }} />
                <span style={{ color: '#C8FF00', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em' }}>
                  WEBSITE MAINTENANCE — CANADA
                </span>
              </div>

              <h1
                id="hero-h1"
                style={{
                  color: '#F8FAFC',
                  fontSize: 'clamp(2rem, 4.5vw, 3.1rem)',
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.25rem',
                }}
              >
                Website Maintenance Packages{' '}
                <span style={{ color: '#C8FF00' }}>for Small Businesses</span>
              </h1>

              <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: 510 }}>
                Keep your website updated, secure, fast, and working properly without chasing developers every time something breaks. OMA provides monthly website maintenance packages from{' '}
                <strong style={{ color: '#F8FAFC' }}>$199 to $499/month</strong> — covering updates, backups, security checks, website edits, and ongoing website support for small businesses.
              </p>

              {/* Trust bullets */}
              <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'WordPress support available',
                  'Monthly website care plans',
                  'Backups and security checks',
                  'Website edits included',
                  'No unnecessary tech jargon',
                ].map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem' }}>
                <a
                  href="#pricing"
                  style={{
                    background: '#C8FF00',
                    color: '#0F0F12',
                    fontWeight: 700,
                    padding: '0.9rem 1.75rem',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  View Maintenance Packages
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="tel:+19056269919"
                  style={{
                    background: 'transparent',
                    color: '#ffffff',
                    fontWeight: 600,
                    padding: '0.9rem 1.75rem',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: '1rem',
                    border: '1.5px solid rgba(255,255,255,0.22)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 905-626-9919
                </a>
              </div>
            </div>

            {/* Right — Website Health Dashboard */}
            <div
              style={{
                background: '#16161A',
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 28px 72px rgba(0,0,0,0.55)',
              }}
              aria-label="Website maintenance dashboard showing WordPress updates, backups, security checks, page speed, uptime monitoring, and support requests."
            >
              {/* Titlebar */}
              <div style={{ background: '#1E1E24', padding: '0.7rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                  <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
                  <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
                  <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.04em' }}>WEBSITE HEALTH DASHBOARD</span>
                <span
                  style={{
                    background: 'rgba(200,255,0,0.15)',
                    border: '1px solid rgba(200,255,0,0.3)',
                    color: '#C8FF00',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: 999,
                    letterSpacing: '0.05em',
                  }}
                >
                  LIVE
                </span>
              </div>

              {/* Health score tile */}
              <div style={{ padding: '1.25rem 1.25rem 0' }}>
                <div
                  style={{
                    background: 'rgba(200,255,0,0.07)',
                    border: '1px solid rgba(200,255,0,0.18)',
                    borderRadius: 12,
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <div style={{ color: '#C8FF00', fontSize: '2.4rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em' }}>94</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', marginTop: 2 }}>WEBSITE HEALTH SCORE</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '94%', background: 'linear-gradient(90deg, #C8FF00, #86efac)', borderRadius: 3 }} />
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', marginTop: 6 }}>2 items need attention</div>
                  </div>
                </div>

                {/* Health item rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1rem' }}>
                  {healthItems.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: 8,
                        padding: '0.5rem 0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <StatusDot status={item.status} />
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem' }}>{item.label}</span>
                      </div>
                      <span
                        style={{
                          color: item.status === 'ok' ? 'rgba(255,255,255,0.7)' : item.status === 'warning' ? '#fbbf24' : '#f87171',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Recent edits strip */}
                <div
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    borderRadius: 10,
                    padding: '0.75rem 1rem',
                    marginBottom: '1.25rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.6rem' }}>RECENT CONTENT EDITS</div>
                  {recentEdits.map((e) => (
                    <div key={e.item} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>{e.item}</span>
                      <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem' }}>{e.time}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.7rem' }}>Support used: 38 min / 45 min</span>
                    <div style={{ height: 4, width: 80, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '84%', background: '#C8FF00', borderRadius: 2 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY MAINTENANCE MATTERS ───────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="why-heading">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">Why It Matters</p>
              <h2
                id="why-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
              >
                Your Website Is Not Something You Launch Once and Ignore
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                <p>
                  A website is a working business asset. It needs to be updated, tested, backed up, and checked on a regular basis — the same way you maintain any other critical piece of your operations. Without active maintenance, websites become progressively more vulnerable, slower, and less effective at generating leads.
                </p>
                <p>
                  WordPress websites in particular require ongoing attention. Plugins, themes, and the core platform release updates regularly. When those updates are skipped, compatibility issues, security gaps, and broken functionality follow. Most small business owners find out something has gone wrong only after a lead form has been silently failing for weeks, or a Google speed audit flags the site as slow.
                </p>
                <p>
                  Our website maintenance packages give small businesses a reliable, affordable way to keep their website performing, protected, and conversion-ready — without needing an in-house developer or chasing freelancers for every small fix.
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold mb-4" style={{ color: '#0F0F12' }}>Common consequences of poor website maintenance:</p>
              <div className="space-y-3">
                {[
                  { issue: 'Broken contact forms', detail: 'Leads submit and hear nothing — the form stopped working weeks ago.' },
                  { issue: 'Slow page speed', detail: 'Visitors leave before the page loads. Google ranks you lower.' },
                  { issue: 'Plugin conflicts', detail: 'An outdated plugin breaks a page, a checkout, or a booking flow.' },
                  { issue: 'Security vulnerabilities', detail: 'Unpatched plugins are the most common cause of hacked WordPress sites.' },
                  { issue: 'Broken links and missing pages', detail: 'Visitors and search engines hit dead ends that damage trust and rankings.' },
                  { issue: 'Poor mobile experience', detail: 'A theme or plugin update breaks the mobile layout without you knowing.' },
                  { issue: 'Missed SEO opportunities', detail: 'Metadata errors, missing sitemaps, and indexing issues go undetected.' },
                  { issue: 'Lost leads and revenue', detail: 'Every issue above has a direct cost — in lost calls, bookings, and trust.' },
                ].map(({ issue, detail }) => (
                  <div
                    key={issue}
                    className="flex gap-4 rounded-xl p-4"
                    style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.07)' }}
                  >
                    <div
                      className="w-2 shrink-0 rounded-full mt-1"
                      style={{ background: '#0F0F12', alignSelf: 'flex-start', height: 16 }}
                    />
                    <div>
                      <div className="text-sm font-bold mb-0.5" style={{ color: '#0F0F12' }}>{issue}</div>
                      <div className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ───────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#ffffff' }} aria-labelledby="included-heading">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="section-label mb-4">What You Get</p>
            <h2
              id="included-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
            >
              What Our Website Maintenance Packages Include
            </h2>
          </div>

          {/* Two featured panels */}
          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            <div
              className="rounded-2xl p-8"
              style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(200,255,0,0.12)', border: '1px solid rgba(200,255,0,0.2)' }}
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-2" style={{ color: '#F8FAFC' }}>WordPress & Plugin Updates</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                WordPress core, plugins, and themes are updated carefully and tested to avoid breaking changes. We check update compatibility before applying, especially for page builder sites and custom setups.
              </p>
              <ul className="space-y-2">
                {['WordPress core updates', 'Plugin updates (compatibility tested)', 'Theme updates', 'Page builder compatibility checks'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(200,255,0,0.12)', border: '1px solid rgba(200,255,0,0.2)' }}
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-2" style={{ color: '#F8FAFC' }}>Backups, Security & Form Testing</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Regular backups protect against data loss. Security checks flag known vulnerabilities and suspicious activity. Form testing helps ensure your contact, quote, and appointment forms are delivering leads — not silently failing.
              </p>
              <ul className="space-y-2">
                {['Scheduled website backups', 'Security vulnerability checks', 'Contact & lead form testing', 'Broken link identification'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Supporting service grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Website Edits',
                desc: 'Text updates, image swaps, CTA edits, offer changes, page edits, and basic layout adjustments handled each month.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                ),
              },
              {
                title: 'Performance Checks',
                desc: 'Page speed, image weight, mobile performance, and technical bottlenecks reviewed and flagged monthly.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
              },
              {
                title: 'SEO Maintenance',
                desc: 'Metadata, headings, internal links, sitemap, alt text, and basic technical SEO health reviewed and noted.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                ),
              },
              {
                title: 'Analytics & Tracking',
                desc: 'GA4, Google Search Console, conversion tracking, and form submission data reviewed for accuracy.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="rounded-2xl p-5"
                style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(0,0,0,0.06)' }}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#0F0F12" strokeWidth={2}>
                    {icon}
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{ color: '#0F0F12' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────────────── */}
      <section id="pricing" className="section-pad" style={{ background: '#0F0F12' }} aria-labelledby="pricing-heading">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" aria-hidden="true" />
        <div className="container-main relative">
          <div className="text-center mb-14">
            <p className="section-label-lime mb-4">Pricing</p>
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06] mb-4"
              style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
            >
              Choose the Website Maintenance Plan That Fits Your Business
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              All plans are month-to-month. No lock-in contracts. You can upgrade or cancel at any time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl flex flex-col"
                style={{
                  background: plan.highlighted ? '#ffffff' : 'rgba(255,255,255,0.04)',
                  border: plan.highlighted ? '2px solid #C8FF00' : '1px solid rgba(255,255,255,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {plan.tag && (
                  <div
                    style={{
                      background: '#C8FF00',
                      color: '#0F0F12',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textAlign: 'center',
                      padding: '0.35rem 1rem',
                    }}
                  >
                    {plan.tag.toUpperCase()}
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <h3
                    className="text-lg font-black mb-1"
                    style={{ color: plan.highlighted ? '#0F0F12' : '#F8FAFC', letterSpacing: '-0.02em' }}
                  >
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span
                      style={{
                        color: plan.highlighted ? '#0F0F12' : '#C8FF00',
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        letterSpacing: '-0.04em',
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: plan.highlighted ? '#6B7280' : 'rgba(255,255,255,0.38)' }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className="text-xs leading-relaxed mb-5 pb-5"
                    style={{
                      color: plan.highlighted ? '#6B7280' : 'rgba(255,255,255,0.4)',
                      borderBottom: plan.highlighted ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <strong style={{ color: plan.highlighted ? '#374151' : 'rgba(255,255,255,0.65)' }}>Best for: </strong>
                    {plan.bestFor}
                  </p>

                  <ul className="space-y-2.5 flex-1 mb-7">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check color={plan.highlighted ? '#0F0F12' : '#C8FF00'} />
                        <span style={{ color: plan.highlighted ? '#374151' : 'rgba(255,255,255,0.65)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '0.85rem 1.5rem',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      background: plan.highlighted ? '#0F0F12' : 'rgba(200,255,0,0.12)',
                      color: plan.highlighted ? '#C8FF00' : '#C8FF00',
                      border: plan.highlighted ? 'none' : '1px solid rgba(200,255,0,0.25)',
                    }}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: 'rgba(255,255,255,0.22)' }}>
            All plans are month-to-month. Ad spend, hosting, domain, and third-party software costs are separate. Pricing is in CAD.
          </p>
        </div>
      </section>

      {/* ── WORDPRESS MAINTENANCE ─────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="wp-heading">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">WordPress Support</p>
              <h2
                id="wp-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
              >
                WordPress Maintenance Without the Headache
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                <p>
                  WordPress powers more websites than any other platform — and it requires more active maintenance than business owners often expect. Plugins, themes, forms, tracking scripts, and page builders each introduce their own update cycles, compatibility requirements, and failure points.
                </p>
                <p>
                  When plugin updates conflict with your theme, or when a form plugin update silently breaks your lead form, most business owners find out only after losing leads for days or weeks. Regular WordPress maintenance catches these issues early, before they affect your revenue.
                </p>
                <p>
                  Our WordPress maintenance packages handle the day-to-day platform upkeep so you are not dealing with update errors, broken layouts, or plugin conflicts on your own.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-bold mb-3" style={{ color: '#0F0F12' }}>WordPress maintenance includes:</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Plugin updates',
                    'Theme updates',
                    'WordPress core updates',
                    'Backup setup',
                    'Security checks',
                    'Elementor / page builder edits',
                    'Form testing',
                    'Basic troubleshooting',
                    'Speed checks',
                    'SEO health checks',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
                      <Check color="#0F0F12" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div
                className="rounded-2xl p-6"
                style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="text-xs font-bold mb-3" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>WHAT WE SUPPORT</p>
                {[
                  ['WordPress.org (self-hosted)', 'ok'],
                  ['Elementor', 'ok'],
                  ['WPBakery / Visual Composer', 'ok'],
                  ['Divi Builder', 'ok'],
                  ['Contact Form 7 / WPForms / Gravity Forms', 'ok'],
                  ['WooCommerce (light maintenance)', 'ok'],
                  ['Custom coded plugins', 'note'],
                  ['Webflow / Squarespace / Wix', 'no'],
                ].map(([item, type]) => (
                  <div key={String(item)} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{item}</span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.6rem',
                        borderRadius: 6,
                        background: type === 'ok' ? 'rgba(74,222,128,0.12)' : type === 'note' ? 'rgba(251,191,36,0.12)' : 'rgba(248,113,113,0.12)',
                        color: type === 'ok' ? '#4ade80' : type === 'note' ? '#fbbf24' : '#f87171',
                      }}
                    >
                      {type === 'ok' ? 'Supported' : type === 'note' ? 'Case by case' : 'Not supported'}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-5"
                style={{ background: 'rgba(200,255,0,0.05)', border: '1px solid rgba(200,255,0,0.15)' }}
              >
                <p className="text-xs font-semibold mb-1.5" style={{ color: '#C8FF00' }}>Note on scope</p>
                <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                  Complex development, custom coding, major redesigns, full malware removal, hosting migrations, and large new page builds are outside standard maintenance packages and may require a separate quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WEBSITE EDITS ─────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#ffffff' }} aria-labelledby="edits-heading">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Monthly Edits</p>
            <h2
              id="edits-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06] mb-4"
              style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
            >
              Need Small Website Changes Done Without Waiting Weeks?
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Many business owners lose hours chasing developers for changes that should take 20 minutes. Our maintenance packages include monthly edit time so updates get done promptly, without a separate project quote for every small change.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              'Update phone numbers and business hours',
              'Change service copy or descriptions',
              'Replace images or update the gallery',
              'Update offers, promotions, or seasonal content',
              'Add or update client testimonials',
              'Edit CTAs and button text',
              'Update forms or add new form fields',
              'Replace banners or header images',
              'Upload and format blog posts',
              'Add tracking codes or pixels',
              'Update menu items or service pages',
              'Add new simple sections to existing pages',
            ].map((edit) => (
              <div
                key={edit}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <Check color="#0F0F12" />
                <span className="text-sm leading-snug" style={{ color: '#374151' }}>{edit}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: plan.highlighted ? '#0F0F12' : '#F7F6F2',
                  border: plan.highlighted ? '2px solid #C8FF00' : '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <div className="text-sm font-bold mb-2" style={{ color: plan.highlighted ? 'rgba(255,255,255,0.5)' : '#9CA3AF' }}>{plan.name}</div>
                <div
                  className="text-2xl font-black mb-1"
                  style={{ color: plan.highlighted ? '#C8FF00' : '#0F0F12', letterSpacing: '-0.03em' }}
                >
                  {plan.name === 'Essential Website Care'
                    ? '45 min / mo'
                    : plan.name === 'Growth Website Care'
                    ? '1.5 hrs / mo'
                    : '3 hrs / mo'}
                </div>
                <div className="text-xs" style={{ color: plan.highlighted ? 'rgba(255,255,255,0.4)' : '#9CA3AF' }}>of website edits included</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY, BACKUPS, LEAD PROTECTION ───────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F12' }} aria-labelledby="security-heading">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label-lime mb-4">Security & Protection</p>
              <h2
                id="security-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
              >
                Your Website Should Not Be a Weak Point in Your Business
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <p>
                  Most website problems are preventable. Outdated plugins, skipped updates, missing backups, and untested forms are not bad luck — they are gaps in maintenance. Consistent website care reduces the likelihood that a technical issue becomes a revenue issue.
                </p>
                <p>
                  We do not promise a completely hack-proof website — no one can. What we do is handle the routine maintenance that significantly reduces your exposure to common vulnerabilities and makes recovery faster when something does go wrong.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  ),
                  title: 'Backups help with recovery',
                  detail: 'A recent backup means a compromised or broken site can be restored quickly. Without one, recovery can take days — or be impossible.',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  ),
                  title: 'Updates reduce vulnerability',
                  detail: 'Outdated plugins are the most common attack vector for WordPress sites. Regular updates close known security gaps before they are exploited.',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  ),
                  title: 'Security checks flag risks early',
                  detail: 'Monthly security checks identify known vulnerabilities, flagged plugins, and suspicious patterns before they become serious problems.',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  title: 'Form testing protects lead flow',
                  detail: 'Broken forms are invisible to the business owner and costly. Monthly form tests catch failures before they silently drain your inquiry pipeline.',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  ),
                  title: 'Tracking checks preserve reporting accuracy',
                  detail: 'GA4 and conversion tracking break quietly. If your analytics data is wrong, your marketing decisions are built on bad information.',
                },
              ].map(({ icon, title, detail }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-xl p-5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(200,255,0,0.1)', border: '1px solid rgba(200,255,0,0.18)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2}>
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold mb-1" style={{ color: '#F8FAFC' }}>{title}</div>
                    <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="industries-heading">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Who We Serve</p>
            <h2
              id="industries-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
            >
              Website Maintenance for Businesses That Depend on Their Website
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { industry: 'Contractors & Home Services', outcome: 'Protect quote forms, service pages, and emergency service listings.' },
              { industry: 'Dental & Medical Clinics', outcome: 'Keep appointment forms, patient inquiry pages, and service content updated.' },
              { industry: 'Restaurants & Cafes', outcome: 'Update menus, hours, seasonal offers, and location details without delays.' },
              { industry: 'Barbershops & Salons', outcome: 'Keep booking links, service pages, and pricing information working correctly.' },
              { industry: 'Law Firms', outcome: 'Maintain practice area pages, consultation forms, and professional credibility.' },
              { industry: 'Real Estate Businesses', outcome: 'Update landing pages, lead forms, and property-related content efficiently.' },
              { industry: 'Auto Businesses', outcome: 'Maintain service pages, financing forms, and inventory-related information.' },
              { industry: 'Retail Stores', outcome: 'Update offers, seasonal banners, product descriptions, and store information.' },
              { industry: 'Professional Services', outcome: 'Maintain trust, keep forms working, and support active conversion paths.' },
            ].map(({ industry, outcome }) => (
              <div
                key={industry}
                className="rounded-2xl p-5"
                style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div className="text-sm font-bold mb-1.5" style={{ color: '#0F0F12' }}>{industry}</div>
                <div className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#ffffff' }} aria-labelledby="process-heading">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="section-label mb-4">How It Works</p>
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
            >
              Our Website Maintenance Process
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: '01',
                title: 'Audit',
                detail: 'We review your website platform, plugins, forms, tracking setup, page speed, security basics, backup configuration, and any current issues. This gives us a clear baseline before maintenance begins.',
              },
              {
                step: '02',
                title: 'Plan',
                detail: 'We recommend the right maintenance package based on your website size, update frequency, business reliance on the site, and lead generation requirements.',
              },
              {
                step: '03',
                title: 'Maintain',
                detail: 'We handle updates, backups, security checks, form testing, broken link identification, edit requests, and basic troubleshooting based on your package. Work is completed on a regular schedule — not when something breaks.',
              },
              {
                step: '04',
                title: 'Improve',
                detail: 'We identify small improvements for speed, SEO, CTAs, forms, and conversion paths. Growth and Premium plan clients receive structured recommendations each month.',
              },
              {
                step: '05',
                title: 'Report',
                detail: 'We provide a clear monthly summary of what maintenance was completed, what issues were found, what was fixed, and what we recommend for the next period.',
              },
            ].map(({ step, title, detail }, i, arr) => (
              <div key={step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black shrink-0"
                    style={{ background: '#0F0F12', color: '#C8FF00', letterSpacing: '-0.02em' }}
                  >
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px flex-1 my-2" style={{ background: 'rgba(0,0,0,0.1)', minHeight: 32 }} />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-black mb-2" style={{ color: '#0F0F12' }}>{title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S NOT INCLUDED ───────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="scope-heading">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">Clear Scope</p>
              <h2
                id="scope-heading"
                className="text-3xl font-black leading-[1.06] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
              >
                What Is Not Included in Monthly Website Maintenance
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#374151' }}>
                We believe in clear scope — no surprises, no scope creep, and no ambiguity about what is and is not covered. Standard website maintenance packages are designed for ongoing upkeep, not major development or new builds.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
                The following items fall outside standard maintenance packages and can be quoted separately if needed:
              </p>
            </div>

            <div>
              <div
                className="rounded-2xl p-7"
                style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div className="space-y-3">
                  {[
                    'Full website redesigns',
                    'Custom-coded features or new functionality',
                    'Major development projects',
                    'Full malware cleanup and security restoration',
                    'Hosting migrations',
                    'New multi-page builds',
                    'Full SEO campaigns',
                    'Google Ads management',
                    'Complex CRM integrations',
                    'Large copywriting or content creation projects',
                    'Bulk ecommerce product uploads',
                    'Video production or photography',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(0,0,0,0.06)' }}
                        aria-hidden="true"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: '#374151' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-5" style={{ color: '#9CA3AF' }}>
                  Items outside standard scope can be quoted separately. Contact us to discuss your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY OMA ───────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#0F0F12' }} aria-labelledby="why-oma-heading">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-30" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label-lime mb-4">Why OMA</p>
              <h2
                id="why-oma-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
              >
                Website Maintenance Built Around Business Outcomes, Not Tech Tasks
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Most website maintenance services focus on technical tasks in isolation. We approach maintenance as part of a broader business health picture — your website needs to load fast, stay secure, and convert visitors into leads. Those three goals drive every maintenance decision we make.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                OMA also offers{' '}
                <Link href="/seo-services" className="font-semibold underline" style={{ color: '#C8FF00' }}>SEO services</Link>,{' '}
                <Link href="/google-ads-management" className="font-semibold underline" style={{ color: '#C8FF00' }}>Google Ads management</Link>, and{' '}
                <Link href="/website-design-for-small-business" className="font-semibold underline" style={{ color: '#C8FF00' }}>website design for small businesses</Link> — so maintenance clients have a single team managing their entire web presence.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { title: 'Plans from $199 to $499/month', detail: 'Transparent, flat-rate pricing. No hourly billing surprises.' },
                { title: 'WordPress support available', detail: 'We work with standard WordPress setups and common page builders.' },
                { title: 'Website edits included', detail: 'Every plan includes monthly edit time for real business updates.' },
                { title: 'SEO and conversion-aware', detail: 'We flag SEO issues, broken CTAs, and form problems — not just plugin version numbers.' },
                { title: 'Backups and security checks', detail: 'Core maintenance fundamentals included in every plan.' },
                { title: 'No lock-in contracts', detail: 'Month-to-month. If we stop delivering value, you can cancel.' },
                { title: 'Transparent monthly reporting', detail: 'Plain-language summaries of what was done and what was found.' },
                { title: 'Connected to marketing and SEO', detail: 'Maintenance is part of a lead generation strategy, not a standalone task.' },
              ].map(({ title, detail }) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-xl p-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <Check />
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: '#F8FAFC' }}>{title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internal links strip */}
          <div
            className="mt-14 rounded-2xl p-6"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p className="text-xs font-bold mb-4" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>RELATED SERVICES FROM OMA</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Website Design for Small Businesses', href: '/website-design-for-small-business' },
                { label: 'SEO Services', href: '/seo-services' },
                { label: 'Local SEO Services', href: '/local-seo-services' },
                { label: 'Google Ads Management', href: '/google-ads-management' },
                { label: 'Lead Generation Services', href: '/lead-generation-agency' },
                { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-semibold px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="faq-heading">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
            >
              Website Maintenance Package Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQRow
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ──────────────────────────────────────────────────── */}
      <section id="contact" className="section-pad" style={{ background: '#0F0F12' }} aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" aria-hidden="true" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left — copy */}
            <div>
              <p className="section-label-lime mb-4">Get Started</p>
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-5"
                style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
              >
                Ready to Stop Worrying About Website Updates?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Choose a website maintenance package that keeps your site updated, backed up, monitored, and ready to support your business. Request a quick website review and we will recommend the right plan for your situation.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Essential', price: '$199/mo', detail: 'Updates, backups, checks, 45 min edits' },
                  { label: 'Growth', price: '$349/mo', detail: 'Bi-weekly checks, 1.5 hrs edits, SEO, priority support', highlight: true },
                  { label: 'Premium', price: '$499/mo', detail: 'Weekly checks, 3 hrs edits, performance + advanced SEO' },
                ].map(({ label, price, detail, highlight }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-xl p-4"
                    style={{
                      background: highlight ? 'rgba(200,255,0,0.07)' : 'rgba(255,255,255,0.04)',
                      border: highlight ? '1px solid rgba(200,255,0,0.2)' : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div>
                      <div className="text-sm font-bold" style={{ color: highlight ? '#C8FF00' : '#F8FAFC' }}>{label} — {price}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#pricing"
                  style={{
                    background: '#C8FF00',
                    color: '#0F0F12',
                    fontWeight: 700,
                    padding: '0.9rem 1.5rem',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    textAlign: 'center',
                  }}
                >
                  View Website Maintenance Packages
                </a>
                <a
                  href="tel:+19056269919"
                  style={{
                    background: 'transparent',
                    color: '#ffffff',
                    fontWeight: 600,
                    padding: '0.9rem 1.5rem',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    border: '1.5px solid rgba(255,255,255,0.22)',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 905-626-9919
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div
              className="rounded-2xl p-8"
              style={{ background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <h3 className="text-xl font-black mb-1" style={{ color: '#0F0F12' }}>Request a Website Maintenance Plan</h3>
              <p className="text-sm mb-6" style={{ color: '#6B7280' }}>We will review your website and recommend the right plan.</p>

              <form
                action="https://formsubmit.co/info@onlinemarketingagency.ca"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Website Maintenance Package Inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.1)', color: '#0F0F12' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Business Name</label>
                    <input
                      type="text"
                      name="business"
                      placeholder="Your business"
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.1)', color: '#0F0F12' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@business.com"
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.1)', color: '#0F0F12' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="905-000-0000"
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.1)', color: '#0F0F12' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Website URL</label>
                  <input
                    type="url"
                    name="website"
                    placeholder="https://yourwebsite.com"
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                    style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.1)', color: '#0F0F12' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Website Platform</label>
                    <select
                      name="platform"
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.1)', color: '#374151' }}
                    >
                      <option value="">Select platform</option>
                      <option value="WordPress">WordPress</option>
                      <option value="Elementor (WordPress)">Elementor (WordPress)</option>
                      <option value="Wix">Wix</option>
                      <option value="Squarespace">Squarespace</option>
                      <option value="Webflow">Webflow</option>
                      <option value="Shopify">Shopify</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Maintenance Need</label>
                    <select
                      name="maintenance_need"
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                      style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.1)', color: '#374151' }}
                    >
                      <option value="">Select need</option>
                      <option value="Monthly updates and backups">Monthly updates and backups</option>
                      <option value="Website edits">Website edits</option>
                      <option value="Security issues">Security issues</option>
                      <option value="Broken form or page">Broken form or page</option>
                      <option value="Ongoing management">Ongoing management</option>
                      <option value="All of the above">All of the above</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Message (optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your website and what you need help with..."
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none"
                    style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.1)', color: '#0F0F12' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-bold rounded-lg py-3.5 text-base transition-all"
                  style={{ background: '#C8FF00', color: '#0F0F12' }}
                >
                  Request Website Maintenance Plan
                </button>

                <p className="text-center text-xs" style={{ color: '#9CA3AF' }}>
                  No obligation. We will review your site and recommend the right plan.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE STICKY CTA ─────────────────────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        style={{ background: '#0F0F12', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem' }}
      >
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href="tel:+19056269919"
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              fontWeight: 600,
              padding: '0.8rem',
              borderRadius: 8,
              textDecoration: 'none',
              fontSize: '0.88rem',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            Call Now
          </a>
          <a
            href="#pricing"
            style={{
              flex: 2,
              background: '#C8FF00',
              color: '#0F0F12',
              fontWeight: 700,
              padding: '0.8rem',
              borderRadius: 8,
              textDecoration: 'none',
              fontSize: '0.88rem',
              textAlign: 'center',
            }}
          >
            View Packages
          </a>
        </div>
      </div>
    </>
  )
}
