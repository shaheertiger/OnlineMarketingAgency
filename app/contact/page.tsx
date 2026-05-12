import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Get Your Free Marketing Audit',
  description:
    'Contact OnlineMarketingAgency.ca to get your free marketing audit. We help local businesses in Canada grow with Google Ads, SEO, Local SEO, and lead generation.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/contact' },
}

const contactDetails = [
  {
    title: 'Phone',
    value: '905-626-9919',
    href: 'tel:9056269919',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'info@onlinemarketingagency.ca',
    href: 'mailto:info@onlinemarketingagency.ca',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Location',
    value: 'Canada',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const auditIncludes = [
  'Website performance and conversion audit',
  'Google Business Profile review',
  'Google rankings check for target keywords',
  'Competitor visibility analysis',
  'Active ad campaign review (if applicable)',
  'Biggest gaps and growth opportunities identified',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-20">
        <div className="container-main text-center">
          <p className="section-label mb-4">Free Marketing Audit</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4 max-w-2xl mx-auto">
            Get Your Free Marketing Audit
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            Tell us about your business and we will identify the biggest opportunities to improve
            your online visibility and generate more leads.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section id="audit" className="section-pad bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Request Your Free Audit
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form and we will review your business within 1 business day.
              </p>
              <ContactForm />
            </div>

            {/* Right: what to expect */}
            <div className="space-y-8">
              {/* Audit includes */}
              <div className="card">
                <h3 className="text-lg font-bold text-slate-900 mb-4">What Your Audit Includes</h3>
                <ul className="space-y-3">
                  {auditIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">What Happens Next</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'We review your submission',
                      desc: 'We look at your website, Google presence, and competitors.',
                    },
                    {
                      step: '2',
                      title: 'We prepare your audit',
                      desc: 'We identify your biggest gaps and fastest growth opportunities.',
                    },
                    {
                      step: '3',
                      title: 'We reach out within 1 business day',
                      desc: 'We present findings and walk through recommendations with you.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-3">
                {contactDetails.map((c) => (
                  <div key={c.title} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">{c.title}</p>
                      {c.href ? (
                        <a href={c.href} className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-slate-900">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
