import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About Our Digital Marketing Agency | OnlineMarketingAgency.ca',
  description:
    'OnlineMarketingAgency.ca is a Canadian digital marketing agency founded in 2020. We help local businesses across Canada generate more leads with Google Ads, SEO, and Local SEO. No lock-in contracts.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/about' },
  openGraph: {
    title: 'About OnlineMarketingAgency.ca | Canadian Digital Marketing Agency',
    description: 'Practical, measurable digital marketing for Canadian small businesses. Google Ads, SEO, Local SEO, and website design.',
    url: 'https://onlinemarketingagency.ca/about',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://onlinemarketingagency.ca/#organization',
  name: 'OnlineMarketingAgency.ca',
  alternateName: 'OMA Digital Marketing Canada',
  url: 'https://onlinemarketingagency.ca',
  logo: {
    '@type': 'ImageObject',
    url: 'https://onlinemarketingagency.ca/logo.png',
    width: 200,
    height: 60,
  },
  description:
    'Canadian digital marketing agency founded in 2020, specializing in Google Ads, SEO, Local SEO, Google Business Profile optimization, and website design for small local businesses across Canada.',
  foundingDate: '2020',
  areaServed: { '@type': 'Country', name: 'Canada' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+19056269919',
    email: 'info@onlinemarketingagency.ca',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'CA',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
  },
  knowsAbout: [
    'Google Ads', 'Search Engine Optimization', 'Local SEO',
    'Google Business Profile', 'Website Design', 'Lead Generation',
    'Facebook Advertising', 'Instagram Advertising', 'Digital Marketing',
  ],
}

const stats = [
  { value: '2020', label: 'Founded', sub: 'Canadian-owned and operated' },
  { value: '50+', label: 'Clients Served', sub: 'Across Canada' },
  { value: '$0', label: 'Lock-In Contracts', sub: 'Month to month only' },
  { value: '4.9★', label: 'Google Rating', sub: 'From verified clients' },
]

const caseStudies = [
  {
    category: 'Google Ads',
    client: 'Local Plumber',
    market: 'Hamilton, ON',
    metrics: [
      { label: 'Cost Per Lead', before: '$78', after: '$14.80', change: '–81%' },
      { label: 'Monthly Leads', before: '8', after: '47', change: '+488%' },
    ],
    note: '90-day result after campaign restructure',
  },
  {
    category: 'Local SEO',
    client: 'Dental Clinic',
    market: 'Mississauga, ON',
    metrics: [
      { label: 'Map Rank', before: '#7', after: '#1', change: '↑ 6 spots' },
      { label: 'Monthly Calls', before: '12', after: '61', change: '+408%' },
    ],
    note: '5-month SEO and GBP optimization',
  },
  {
    category: 'Website + Ads',
    client: 'HVAC Contractor',
    market: 'Toronto, ON',
    metrics: [
      { label: 'Conversion Rate', before: '1.2%', after: '6.8%', change: '+467%' },
      { label: 'Revenue Attributed', before: '—', after: '$128K', change: 'From $3.2K spend' },
    ],
    note: 'New website + Google Ads within 60 days',
  },
]

const values = [
  {
    title: 'Lead-focused',
    desc: 'We measure success by calls, bookings, and form submissions — not impressions or click-through rates that do not pay the bills.',
  },
  {
    title: 'Transparent reporting',
    desc: 'Monthly reports in plain language. You always know exactly what we are doing, why we are doing it, and what it is producing.',
  },
  {
    title: 'Built for local businesses',
    desc: 'We specialize exclusively in Canadian small businesses and local service companies. No enterprise brands, no national chains.',
  },
  {
    title: 'No lock-in contracts',
    desc: 'We earn your business month-to-month by delivering results. If we stop performing, you can leave. That keeps us accountable.',
  },
  {
    title: 'Channel-agnostic',
    desc: 'We recommend the channels that will generate the best return for your business — Google Ads, SEO, or both — not the ones with the highest margins for us.',
  },
  {
    title: 'Practical, not theoretical',
    desc: 'Every recommendation is based on what actually works for local businesses in competitive Canadian markets — not textbook strategy.',
  },
]

const services = [
  { label: 'Google Ads Management', href: '/google-ads-management' },
  { label: 'SEO Services', href: '/seo-services' },
  { label: 'Local SEO Services', href: '/local-seo-services' },
  { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
  { label: 'Website Design For Small Business', href: '/website-design-for-small-business' },
  { label: 'Social Media Marketing Agency', href: '/social-media-marketing-agency' },
  { label: 'Lead Generation Agency', href: '/lead-generation-agency' },
]

const testimonials = [
  {
    quote: 'We went from 8 leads a month to 47 — in 90 days. The cost per lead dropped from $78 to under $15. Nothing else we tried came close.',
    name: 'Mark T.',
    role: 'Owner, Plumbing Company',
    location: 'Hamilton, ON',
  },
  {
    quote: 'Our Google Maps ranking went from #7 to #1 for our main keywords in Mississauga. Monthly calls more than tripled. Worth every dollar.',
    name: 'Dr. S. Patel',
    role: 'Owner, Dental Clinic',
    location: 'Mississauga, ON',
  },
  {
    quote: 'We built a new website and launched Google Ads at the same time. Within 60 days we had attributed over $128K in revenue to the campaign.',
    name: 'James R.',
    role: 'Owner, HVAC Company',
    location: 'Toronto, ON',
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumb */}
      <div style={{ background: '#0F0F12' }}>
        <Breadcrumb items={[{ label: 'About' }]} />
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="about-hero-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

        <div className="container-main relative">
          <div className="max-w-3xl">
            <p className="section-label-lime mb-5">About OMA</p>
            <h1
              id="about-hero-heading"
              className="text-4xl sm:text-5xl font-black leading-[1.06] mb-6"
              style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
            >
              A Canadian Digital Marketing Agency{' '}
              <span style={{ color: '#C8FF00' }}>Built for Local Businesses</span>
            </h1>
            <p className="text-lg leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.58)' }}>
              OnlineMarketingAgency.ca was founded in 2020 with one focus: helping Canadian local
              businesses generate more calls, bookings, and customers through Google Ads, SEO, Local
              SEO, and conversion-focused websites. We are not a full-service agency that does everything
              for everyone. We specialize in measurable lead generation for local service businesses.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.38)' }}>
              We work with businesses across Toronto, Mississauga, Brampton, Vaughan, Hamilton, Calgary,
              Vancouver, and across Canada. If your goal is more calls and bookings — not more
              impressions or social followers — we build the system to get you there.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                Get Free Marketing Audit
              </Link>
              <a
                href="tel:+19056269919"
                className="btn-outline-white text-sm px-6 py-3 flex items-center gap-2"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                905-626-9919
              </a>
            </div>

            {/* Contact strip */}
            <div className="flex flex-wrap gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@onlinemarketingagency.ca
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Serving all of Canada · Based in Ontario
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: '#1A1A1F' }} aria-label="Company statistics">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            {stats.map(({ value, label, sub }) => (
              <div key={label} className="px-8 py-7">
                <div
                  className="text-[2.4rem] font-black leading-none mb-1.5"
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
      </section>

      {/* Our Story / Team section */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="our-story-heading"
      >
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4"
                style={{ color: '#1D4ED8' }}
              >
                Our Story
              </p>
              <h2
                id="our-story-heading"
                className="text-3xl md:text-4xl font-black leading-[1.06] mb-6"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Why We Built OMA
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                <p>
                  OnlineMarketingAgency.ca was built out of a frustration we kept seeing in the market:
                  local business owners spending thousands on digital marketing with no clear idea of
                  what they were getting back. Agencies charging management fees without call tracking.
                  Google Ads accounts with no negative keyword lists. SEO reports full of keyword
                  rankings but no explanation of how those rankings translated into phone calls.
                </p>
                <p>
                  We started OMA in 2020 with a simple premise: Canadian local businesses deserve the
                  same quality of digital marketing strategy that enterprise companies get — without
                  the enterprise price tag, the offshore execution, or the lock-in contracts that
                  keep you trapped even when results stop coming.
                </p>
                <p>
                  Our team has been working in digital marketing since 2015, with deep experience in
                  Google Ads, SEO, and local search for service businesses in competitive Canadian markets.
                  Every strategy we recommend, we have tested. Every claim we make, we back with data.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div
                className="rounded-2xl p-6"
                style={{ background: '#fff', border: '1px solid #E5E7EB' }}
              >
                <p
                  className="text-[10px] font-bold tracking-[0.14em] uppercase mb-3"
                  style={{ color: '#1D4ED8' }}
                >
                  Our Specialization
                </p>
                <h3 className="text-lg font-black mb-3" style={{ color: '#0F0F12' }}>
                  Local Lead Generation for Canadian Businesses
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                  We focus on one thing: generating calls, bookings, and qualified leads for local
                  service businesses. Every channel we manage — Google Ads, SEO, Local SEO, or paid
                  social — is optimized with that goal in mind.
                </p>
                <ul className="space-y-2">
                  {[
                    'Google Ads campaign management (from $199/month)',
                    'SEO for local service businesses (from $399/month)',
                    'Google Business Profile optimization',
                    'Conversion-focused website design (from $499)',
                    'Lead generation systems for local markets',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#374151' }}>
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5} style={{ filter: 'drop-shadow(0 0 3px rgba(200,255,0,0.4))' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ background: '#0F0F12', border: '1px solid rgba(200,255,0,0.1)' }}
              >
                <p className="text-xs font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  Service Area
                </p>
                <p className="text-sm font-bold mb-3" style={{ color: '#C8FF00' }}>
                  All of Canada — Focused on Ontario
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  We serve businesses across Canada, with deep experience in Toronto, Mississauga,
                  Brampton, Vaughan, Hamilton, Ottawa, Calgary, Vancouver, and Edmonton. Remote-first,
                  so we work effectively with any local business regardless of location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        className="section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="case-studies-heading"
      >
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label-lime mb-4">Proof</p>
            <h2
              id="case-studies-heading"
              className="text-3xl md:text-4xl font-black leading-[1.06] mb-4"
              style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
            >
              Real Client Results
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Representative examples from actual campaigns. All results verified through call tracking
              and conversion data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {caseStudies.map(({ category, client, market, metrics, note }) => (
              <article
                key={client}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="px-5 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <div
                    className="inline-block text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-2"
                    style={{ background: 'rgba(200,255,0,0.1)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.15)' }}
                  >
                    {category}
                  </div>
                  <div className="text-sm font-bold" style={{ color: '#F8FAFC' }}>{client}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.32)' }}>{market}</div>
                </div>

                <div className="p-5 flex-1 space-y-5">
                  {metrics.map(({ label, before, after, change }) => (
                    <div key={label}>
                      <div className="text-[9px] font-bold mb-2 tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.28)' }}>
                        {label}
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-semibold line-through" style={{ color: 'rgba(255,255,255,0.18)' }}>{before}</span>
                        <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.2)" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-[1.6rem] font-black" style={{ color: '#F8FAFC', letterSpacing: '-0.04em' }}>{after}</span>
                        <span className="text-[10px] font-bold ml-auto px-2 py-0.5 rounded-full" style={{ background: 'rgba(200,255,0,0.12)', color: '#C8FF00' }}>{change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <p className="text-[11px] italic" style={{ color: 'rgba(255,255,255,0.22)' }}>{note}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: 'rgba(255,255,255,0.18)' }}>
            Representative examples. Results vary based on market, budget, and campaign type.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="testimonials-heading"
      >
        <div className="container-main">
          <div className="text-center mb-12">
            <p
              className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4"
              style={{ color: '#1D4ED8' }}
            >
              Client Feedback
            </p>
            <h2
              id="testimonials-heading"
              className="text-3xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(({ quote, name, role, location }) => (
              <blockquote
                key={name}
                className="rounded-2xl p-6"
                style={{ background: '#fff', border: '1px solid #E5E7EB' }}
              >
                <svg className="w-6 h-6 mb-4" fill="#C8FF00" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#374151' }}>{quote}</p>
                <footer>
                  <div className="text-sm font-bold" style={{ color: '#0F0F12' }}>{name}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{role} · {location}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / Values */}
      <section
        className="section-pad"
        style={{ background: '#fff' }}
        aria-labelledby="values-heading"
      >
        <div className="container-main">
          <div className="text-center mb-12">
            <p
              className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4"
              style={{ color: '#1D4ED8' }}
            >
              How We Work
            </p>
            <h2
              id="values-heading"
              className="text-3xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              The Principles Behind Every Campaign
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6"
                style={{ background: '#F7F6F2', border: '1px solid #E5E7EB' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(200,255,0,0.12)', border: '1px solid rgba(200,255,0,0.2)' }}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#0F0F12' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="services-heading"
      >
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4"
                style={{ color: '#1D4ED8' }}
              >
                Our Services
              </p>
              <h2
                id="services-heading"
                className="text-3xl font-black leading-[1.06] mb-5"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                What We Do
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#374151' }}>
                We offer a focused set of digital marketing services — all built around one goal:
                generating more calls, bookings, and customers for your local business in Canada.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
                We do not do social media management, influencer marketing, or brand awareness
                campaigns. We do lead generation for local service businesses, and we do it well.
              </p>
            </div>

            <div className="space-y-2">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 group"
                  style={{ background: '#fff', border: '1px solid #E5E7EB' }}
                >
                  <span className="text-sm font-semibold" style={{ color: '#0F0F12' }}>
                    {s.label}
                  </span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#9CA3AF' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
