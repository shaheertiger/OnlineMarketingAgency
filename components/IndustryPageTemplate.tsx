import Link from 'next/link'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb'

interface IndustryPageTemplateProps {
  label: string
  h1: string
  intro: string
  services: { title: string; desc: string }[]
  challenges: { title: string; desc: string }[]
  faqs: FAQItem[]
  relatedIndustries?: { label: string; href: string }[]
  breadcrumb?: BreadcrumbItem[]
}

export default function IndustryPageTemplate({
  label,
  h1,
  intro,
  services,
  challenges,
  faqs,
  relatedIndustries = [],
  breadcrumb = [],
}: IndustryPageTemplateProps) {
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
          </div>
        </div>
      </section>

      {/* ── Services for this industry ──────────────────────────────────────── */}
      <section
        className="section-pad relative"
        style={{ background: '#070C1A' }}
        aria-labelledby="services-heading"
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)' }}
          aria-hidden="true"
        />
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="section-heading mb-4">
              Marketing Services We Use For This Industry
            </h2>
            <p className="section-subtext max-w-xl mx-auto">
              A focused combination of channels that generate leads for your specific type of business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(11, 17, 32, 0.7)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}
                  aria-hidden="true"
                >
                  <span className="text-sm font-bold" style={{ color: '#60A5FA' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#F8FAFC' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenges ──────────────────────────────────────────────────────── */}
      <section
        className="section-pad relative"
        style={{ background: '#060B18' }}
        aria-labelledby="challenges-heading"
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.15), transparent)' }}
          aria-hidden="true"
        />
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 id="challenges-heading" className="section-heading mb-4">
                Common Marketing Challenges We Solve
              </h2>
            </div>
            <div className="space-y-4">
              {challenges.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl p-6 flex gap-4"
                  style={{
                    background: 'rgba(11, 17, 32, 0.6)',
                    border: '1px solid rgba(51, 65, 85, 0.4)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1" style={{ color: '#E2E8F0' }}>{c.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Industries ──────────────────────────────────────────────── */}
      {relatedIndustries.length > 0 && (
        <section
          className="py-10"
          style={{ background: '#070C1A', borderTop: '1px solid rgba(51,65,85,0.3)' }}
          aria-labelledby="related-industries-heading"
        >
          <div className="container-main">
            <h2 id="related-industries-heading" className="text-base font-bold mb-5" style={{ color: '#94A3B8' }}>
              Other Industries We Serve
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedIndustries.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-xl px-4 py-2 transition-all duration-200"
                  style={{
                    color: '#60A5FA',
                    background: 'rgba(37,99,235,0.08)',
                    border: '1px solid rgba(37,99,235,0.2)',
                  }}
                >
                  {i.label}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} />
      <CTASection />
    </>
  )
}
