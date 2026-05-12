import Link from 'next/link'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

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
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 section-pad">
        <div className="container-main">
          <div className="max-w-3xl">
            <p className="section-label mb-4">{label}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">{h1}</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Get Free Marketing Audit
              </Link>
              <Link href="/#services" className="btn-secondary text-base px-7 py-3.5">
                View All Services
              </Link>
            </div>
            {keywords.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad bg-slate-50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-heading mb-4">{whatWeDoTitle}</h2>
            {whatWeDoBody && <p className="section-subtext">{whatWeDoBody}</p>}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed pl-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container-main">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 hover:bg-blue-100 transition-colors"
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

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTASection />
    </>
  )
}
