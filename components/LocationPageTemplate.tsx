import Link from 'next/link'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

const allServices = [
  { label: 'Google Ads Management', href: '/google-ads-management', desc: 'High-intent search campaigns that generate calls within days.' },
  { label: 'SEO Services', href: '/seo-services', desc: 'Long-term organic rankings that compound over time.' },
  { label: 'Local SEO', href: '/local-seo-services', desc: 'Google Maps visibility and near-me search rankings.' },
  { label: 'Google Business Profile', href: '/google-business-profile-optimization', desc: 'Optimize your GBP to dominate the local map pack.' },
  { label: 'Website Design', href: '/website-design-for-small-business', desc: 'Fast, mobile-first sites built to convert visitors into leads.' },
  { label: 'Facebook & Instagram Ads', href: '/social-media-marketing-agency', desc: 'Meta advertising to build local demand and retarget visitors.' },
  { label: 'Lead Generation', href: '/lead-generation-agency', desc: 'Multi-channel systems combining ads, SEO, and tracking.' },
]

export interface LocationService {
  label: string
  href: string
  desc: string
}

export interface LocationStat {
  value: string
  label: string
}

export interface LocationFAQ {
  question: string
  answer: string
}

export interface LocationPageTemplateProps {
  city: string
  province: string
  slug: string
  population: string
  tagline: string
  intro: string
  marketContext: string
  whyOMA: string
  stats: LocationStat[]
  services?: LocationService[]
  industries: string[]
  faqs: FAQItem[]
  nearbyAreas?: string[]
}

export default function LocationPageTemplate({
  city,
  province,
  slug,
  population,
  tagline,
  intro,
  marketContext,
  whyOMA,
  stats,
  services = allServices,
  industries,
  faqs,
  nearbyAreas = [],
}: LocationPageTemplateProps) {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="location-h1"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-50" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(200,255,0,0.07) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="container-main relative">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide"
              style={{ background: 'rgba(200,255,0,0.08)', border: '1px solid rgba(200,255,0,0.2)', color: '#C8FF00' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" aria-hidden="true" />
              Digital Marketing Agency · {city}, {province}
            </div>

            <h1
              id="location-h1"
              className="text-4xl sm:text-5xl font-black leading-[1.05] mb-6"
              style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
            >
              Digital Marketing Agency in {city}
              <span className="block mt-1" style={{ color: '#C8FF00' }}>
                {tagline}
              </span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {intro}
            </p>

            {/* Review badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#F59E0B">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                4.9 / 5 · 47 Google Reviews · Trusted by 50+ local businesses
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Get Free {city} Marketing Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="tel:+19056269919" className="btn-outline-white text-base px-7 py-3.5">
                Call 905-626-9919
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────────────── */}
      <section
        className="py-10 border-t border-b"
        style={{ background: '#0F0F12', borderColor: 'rgba(255,255,255,0.07)' }}
        aria-label={`${city} marketing statistics`}
      >
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-[2rem] font-black leading-none mb-1.5" style={{ color: '#C8FF00', letterSpacing: '-0.04em' }}>
                  {value}
                </div>
                <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Context ──────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-labelledby="market-heading">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="section-label mb-4">The {city} Market</p>
              <h2
                id="market-heading"
                className="text-3xl font-black mb-6 leading-[1.06]"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                Why {city} Businesses Need a Smarter Marketing Strategy
              </h2>
              <div className="prose-sm space-y-4" style={{ color: '#374151' }}>
                {marketContext.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Why OMA</p>
              <h2
                className="text-3xl font-black mb-6 leading-[1.06]"
                style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
              >
                The Right Agency for {city} Local Businesses
              </h2>
              <div className="space-y-4" style={{ color: '#374151' }}>
                {whyOMA.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-2">
                  Get Free Audit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ───────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'white' }} aria-labelledby="services-heading">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Our Services in {city}</p>
            <h2
              id="services-heading"
              className="text-3xl font-black leading-[1.06]"
              style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
            >
              Digital Marketing Services for {city} Businesses
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group rounded-2xl p-6 block transition-all duration-200"
                style={{ background: '#F7F6F2', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold" style={{ color: '#0F0F12' }}>{svc.label}</h3>
                  <svg className="w-4 h-4 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="#C8FF00" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ──────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#0F0F12' }} aria-labelledby="industries-heading">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" aria-hidden="true" />
        <div className="container-main relative">
          <div className="text-center mb-10">
            <p className="section-label-lime mb-4">Who We Serve</p>
            <h2
              id="industries-heading"
              className="text-3xl font-black"
              style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
            >
              {city} Industries We Work With
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Areas ────────────────────────────────────────────────────── */}
      {nearbyAreas.length > 0 && (
        <section
          className="py-10"
          style={{ background: '#F7F6F2', borderTop: '1px solid rgba(0,0,0,0.06)' }}
          aria-labelledby="nearby-heading"
        >
          <div className="container-main">
            <h2 id="nearby-heading" className="text-sm font-bold mb-4" style={{ color: '#9CA3AF' }}>
              Also Serving
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{ background: 'white', border: '1px solid rgba(0,0,0,0.08)', color: '#6B7280' }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <FAQSection faqs={faqs} />

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <CTASection
        heading={`Ready to Grow Your ${city} Business?`}
        subheading={`Get a free marketing audit and see exactly where your ${city} business is losing leads online — and how to fix it.`}
      />
    </>
  )
}
