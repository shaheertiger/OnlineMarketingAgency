import Link from 'next/link'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb'

interface Benefit {
  title: string
  desc: string
}

interface ServicePageTemplateProps {
  label: string
  h1: string
  intro: string
  keywords: string[]
  benefits: Benefit[]
  whatWeDoTitle?: string
  whatWeDoBody?: string
  whatWeDo: { title: string; desc: string }[]
  faqs: FAQItem[]
  relatedServices?: { label: string; href: string }[]
  breadcrumb?: BreadcrumbItem[]
}

export default function ServicePageTemplate({
  label,
  h1,
  intro,
  keywords,
  benefits,
  whatWeDoTitle = 'What We Do',
  whatWeDoBody,
  whatWeDo,
  faqs,
  relatedServices = [],
  breadcrumb = [],
}: ServicePageTemplateProps) {
  return (
    <>
      {/* ── Breadcrumb ──────────────────────────────────────────────────────── */}
      {breadcrumb.length > 0 && (
        <div style={{ background: '#060B18' }}>
          <Breadcrumb items={breadcrumb} />
        </div>
      )}

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: 'linear-gradient(160deg, #060B18 0%, #0A1025 50%, #060B18 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

        <div className="container-main relative">
          <div className="max-w-3xl">
            <p className="section-label mb-4">{label}</p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold leading-[1.08] mb-6"
              style={{ color: '#F8FAFC' }}
            >
              {h1}
            </h1>
            <p className="text-lg leading-relaxed mb-9" style={{ color: '#94A3B8' }}>{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Get Free Marketing Audit
              </Link>
              <Link href="/#services" className="btn-secondary text-base px-7 py-3.5">
                View All Services
              </Link>
            </div>

            {/* Keyword tags — semantic keyword signals */}
            {keywords.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2" aria-label="Related topics">
                {keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      color: '#60A5FA',
                      background: 'rgba(37,99,235,0.1)',
                      border: '1px solid rgba(37,99,235,0.2)',
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

      {/* ── Benefits ────────────────────────────────────────────────────────── */}
      <section
        className="section-pad relative"
        style={{ background: '#070C1A' }}
        aria-labelledby="benefits-heading"
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)' }}
          aria-hidden="true"
        />
        <div className="container-main">
          <h2 id="benefits-heading" className="sr-only">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <article
                key={b.title}
                className="rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: 'rgba(11, 17, 32, 0.7)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(37,99,235,0.12)',
                    border: '1px solid rgba(37,99,235,0.2)',
                  }}
                  aria-hidden="true"
                >
                  <span className="text-base font-bold" style={{ color: '#60A5FA' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#F8FAFC' }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ──────────────────────────────────────────────────────── */}
      <section
        className="section-pad relative"
        style={{ background: '#060B18' }}
        aria-labelledby="what-we-do-heading"
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.15), transparent)' }}
          aria-hidden="true"
        />
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="what-we-do-heading" className="section-heading mb-4">{whatWeDoTitle}</h2>
            {whatWeDoBody && <p className="section-subtext">{whatWeDoBody}</p>}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 transition-all duration-200"
                style={{
                  background: 'rgba(11, 17, 32, 0.6)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                    }}
                    aria-hidden="true"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: '#E2E8F0' }}>{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed pl-10" style={{ color: '#475569' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ────────────────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section
          className="py-10"
          style={{ background: '#070C1A', borderTop: '1px solid rgba(51,65,85,0.3)' }}
          aria-labelledby="related-heading"
        >
          <div className="container-main">
            <h2 id="related-heading" className="text-base font-bold mb-5" style={{ color: '#94A3B8' }}>
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-xl px-4 py-2 transition-all duration-200"
                  style={{
                    color: '#60A5FA',
                    background: 'rgba(37,99,235,0.08)',
                    border: '1px solid rgba(37,99,235,0.2)',
                  }}
                >
                  {s.label}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <FAQSection faqs={faqs} />

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
