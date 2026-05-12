import Link from 'next/link'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb'

interface ProblemItem {
  title: string
  desc: string
}

interface PricingData {
  price: string
  period: string
  bullets: string[]
}

interface ServicePageTemplateProps {
  label: string
  h1: string
  intro: string
  keywords?: string[]
  stats?: { value: string; label: string }[]
  benefits: { title: string; desc: string }[]
  whatWeDoTitle?: string
  whatWeDoBody?: string
  whatWeDo: { title: string; desc: string }[]
  process?: { step: string; title: string; desc: string }[]
  whoItsFor?: string[]
  faqs: FAQItem[]
  relatedServices?: { label: string; href: string }[]
  breadcrumb?: BreadcrumbItem[]
  /** Problems We Solve section */
  problemsIntro?: string[]          // 3-4 prose paragraphs for left column
  problems?: ProblemItem[]          // 3-4 bold items for right column
  /** Pricing callout */
  pricing?: PricingData
  /** Extended prose body (for word count / SEO richness) */
  bodyContent?: React.ReactNode
}

export default function ServicePageTemplate({
  label,
  h1,
  intro,
  keywords = [],
  stats,
  benefits,
  whatWeDoTitle = 'What We Do',
  whatWeDoBody,
  whatWeDo,
  process,
  whoItsFor,
  faqs,
  relatedServices = [],
  breadcrumb = [],
  problemsIntro,
  problems,
  pricing,
  bodyContent,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* ── Breadcrumb ─────────────────────────────────────────────────────────── */}
      {breadcrumb.length > 0 && (
        <div style={{ background: '#0F0F12' }}>
          <Breadcrumb items={breadcrumb} />
        </div>
      )}

      {/* ── Hero ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: '#0F0F12' }}
      >
        {/* Dark grid overlay */}
        <div
          className="absolute inset-0 bg-grid-dark pointer-events-none"
          style={{ opacity: 0.5 }}
          aria-hidden="true"
        />
        {/* Lime radial glow top-right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 80% 0%, rgba(200,255,0,0.12) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="container-main relative">
          <div className="max-w-3xl">
            {/* Lime kicker pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                border: '1px solid #C8FF00',
                background: 'transparent',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: '#C8FF00' }}
                aria-hidden="true"
              />
              <span className="text-xs font-semibold" style={{ color: '#C8FF00' }}>{label}</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-black leading-[1.08] mb-6"
              style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
            >
              {h1}
            </h1>

            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {intro}
            </p>

            {/* Star rating row */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex gap-0.5" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#F59E0B" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                4.9 / 5 · 485 Google Reviews · Trusted by 50+ local businesses
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Get Free Marketing Audit →
              </Link>
              <a href="tel:+19056269919" className="btn-outline-white text-base px-7 py-3.5">
                Call 905-626-9919
              </a>
            </div>

            {/* Keyword chips */}
            {keywords.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2" aria-label="Related topics">
                {keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────────────────── */}
      {stats && stats.length > 0 && (
        <div
          className="py-10"
          style={{
            background: '#0F0F12',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="container-main">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-[2rem] font-black leading-none mb-1"
                    style={{ color: '#C8FF00' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Benefits ────────────────────────────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="benefits-heading"
      >
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Why It Works</p>
            <h2
              id="benefits-heading"
              className="text-3xl sm:text-4xl font-black"
              style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}
            >
              What You Get
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <article
                key={b.title}
                className="rounded-2xl p-6"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                {/* Lime check circle */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(200,255,0,0.12)' }}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#C8FF00" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#0F0F12' }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problems We Solve ───────────────────────────────────────────────────────────────── */}
      {problemsIntro && problems && (
        <section
          className="section-pad"
          style={{ background: '#0F0F12' }}
          aria-labelledby="problems-heading"
        >
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: heading + prose */}
              <div>
                <p className="section-label-lime mb-3">Real Business Problems</p>
                <h2
                  id="problems-heading"
                  className="text-3xl sm:text-4xl font-black mb-8"
                  style={{ color: '#F8FAFC', letterSpacing: '-0.02em' }}
                >
                  Problems We Solve
                </h2>
                <div className="space-y-5">
                  {problemsIntro.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right: bold problem statements */}
              <div className="space-y-6">
                {problems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl p-5"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(200,255,0,0.15)',
                    }}
                  >
                    <p className="text-base font-bold mb-2" style={{ color: '#C8FF00' }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Extended Body Content ───────────────────────────────────────────────────────────────── */}
      {bodyContent && (
        <section
          className="section-pad"
          style={{ background: '#F7F6F2' }}
        >
          <div className="container-main">
            <div className="max-w-3xl mx-auto prose-custom">
              {bodyContent}
            </div>
          </div>
        </section>
      )}

      {/* ── What's Included ─────────────────────────────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#FFFFFF' }}
        aria-labelledby="whats-included-heading"
      >
        <div className="container-main">
          <div className="mb-10">
            <p className="section-label mb-3">What&apos;s Included</p>
            <h2
              id="whats-included-heading"
              className="text-3xl sm:text-4xl font-black mb-4"
              style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}
            >
              {whatWeDoTitle}
            </h2>
            {whatWeDoBody && (
              <p className="text-base leading-relaxed max-w-2xl" style={{ color: '#6B7280' }}>
                {whatWeDoBody}
              </p>
            )}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatWeDo.map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl p-5"
                style={{ background: '#F7F6F2' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {/* Dark badge with number */}
                  <span
                    className="shrink-0 px-2 py-1 rounded text-[11px] font-black"
                    style={{ background: '#0F0F12', color: '#C8FF00' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-bold" style={{ color: '#0F0F12' }}>{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Callout ─────────────────────────────────────────────────────────────────── */}
      {pricing && (
        <section
          className="section-pad"
          style={{ background: '#F7F6F2' }}
          aria-labelledby="pricing-heading"
        >
          <div className="container-main">
            <div
              className="rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto"
              style={{ background: '#0F0F12' }}
            >
              <p className="section-label-lime mb-3">Transparent Pricing</p>
              <h2
                id="pricing-heading"
                className="text-2xl sm:text-3xl font-black mb-2"
                style={{ color: '#F8FAFC', letterSpacing: '-0.02em' }}
              >
                Simple, Honest Pricing
              </h2>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl sm:text-5xl font-black" style={{ color: '#C8FF00' }}>
                  {pricing.price}
                </span>
                <span className="text-base pb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {pricing.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {pricing.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#C8FF00" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5 inline-flex">
                Get Free Audit &amp; Quote →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Process ──────────────────────────────────────────────────────────────────────── */}
      {process && process.length > 0 && (
        <section
          className="section-pad relative overflow-hidden"
          style={{ background: '#0F0F12' }}
          aria-labelledby="process-heading"
        >
          <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" aria-hidden="true" />
          <div className="container-main relative">
            <div className="text-center mb-12">
              <p className="section-label-lime mb-3">Our Process</p>
              <h2
                id="process-heading"
                className="text-3xl sm:text-4xl font-black"
                style={{ color: '#F8FAFC', letterSpacing: '-0.02em' }}
              >
                How It Works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl p-6"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Step badge */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-black"
                    style={{
                      background: 'rgba(200,255,0,0.12)',
                      border: '1px solid rgba(200,255,0,0.2)',
                      color: '#C8FF00',
                    }}
                  >
                    {p.step}
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#F8FAFC' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Who It's For ──────────────────────────────────────────────────────────────────────── */}
      {whoItsFor && whoItsFor.length > 0 && (
        <section
          className="section-pad"
          style={{ background: '#F7F6F2' }}
          aria-labelledby="who-its-for-heading"
        >
          <div className="container-main">
            <div className="text-center mb-10">
              <p className="section-label mb-3">Ideal For</p>
              <h2
                id="who-its-for-heading"
                className="text-3xl sm:text-4xl font-black"
                style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}
              >
                Who This Service Is For
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {whoItsFor.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.09)',
                    color: '#374151',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Services ──────────────────────────────────────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <div
          className="py-10"
          style={{
            background: '#0F0F12',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="container-main">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-full px-4 py-2 transition-all duration-200"
                  style={{
                    color: '#C8FF00',
                    background: 'rgba(200,255,0,0.06)',
                    border: '1px solid rgba(200,255,0,0.15)',
                  }}
                >
                  {s.label}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── FAQ ─────────────────────────────────────────────────────────────────────────── */}
      <FAQSection faqs={faqs} />

      {/* ── CTA ─────────────────────────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
