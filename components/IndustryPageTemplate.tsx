import Link from 'next/link'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

interface IndustryPageTemplateProps {
  label: string
  h1: string
  intro: string
  services: { title: string; desc: string }[]
  challenges: { title: string; desc: string }[]
  faqs: FAQItem[]
  relatedIndustries?: { label: string; href: string }[]
}

export default function IndustryPageTemplate({
  label,
  h1,
  intro,
  services,
  challenges,
  faqs,
  relatedIndustries = [],
}: IndustryPageTemplateProps) {
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
          </div>
        </div>
      </section>

      {/* Services for this industry */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-4">Marketing Services We Use For This Industry</h2>
            <p className="section-subtext max-w-xl mx-auto">
              A focused combination of channels that generate leads for your specific type of business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges section */}
      <section className="section-pad bg-slate-50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-heading mb-4">Common Marketing Challenges We Solve</h2>
            </div>
            <div className="space-y-4">
              {challenges.map((c) => (
                <div key={c.title} className="bg-white rounded-xl p-6 border border-slate-100 flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{c.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related industries */}
      {relatedIndustries.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container-main">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Other Industries We Serve</h2>
            <div className="flex flex-wrap gap-3">
              {relatedIndustries.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 hover:bg-blue-100 transition-colors"
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
