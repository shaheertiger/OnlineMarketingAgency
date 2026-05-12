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
    color: '#3B82F6',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'info@onlinemarketingagency.ca',
    href: 'mailto:info@onlinemarketingagency.ca',
    color: '#818CF8',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Location',
    value: 'Canada',
    href: null,
    color: '#34D399',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{ background: 'linear-gradient(160deg, #060B18 0%, #0A1025 50%, #060B18 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="container-main relative text-center">
          <p className="section-label mb-4">Free Marketing Audit</p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold leading-[1.1] mb-4 max-w-2xl mx-auto"
            style={{ color: '#F8FAFC' }}
          >
            Get Your{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Free Marketing Audit
            </span>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Tell us about your business and we will identify the biggest opportunities to improve
            your online visibility and generate more leads.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section
        id="audit"
        className="section-pad"
        style={{ background: '#070C1A' }}
      >
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: form */}
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#F8FAFC' }}>
                Request Your Free Audit
              </h2>
              <p className="mb-8" style={{ color: '#475569' }}>
                Fill out the form and we will review your business within 1 business day.
              </p>
              <ContactForm />
            </div>

            {/* Right: what to expect */}
            <div className="space-y-6">
              {/* Audit includes */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(11, 17, 32, 0.7)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                }}
              >
                <h3 className="text-lg font-bold mb-5" style={{ color: '#F8FAFC' }}>
                  What Your Audit Includes
                </h3>
                <ul className="space-y-3">
                  {auditIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.25)' }}
                      >
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#60A5FA' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: '#64748B' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(11, 17, 32, 0.7)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                }}
              >
                <h3 className="text-lg font-bold mb-5" style={{ color: '#F8FAFC' }}>What Happens Next</h3>
                <div className="space-y-5">
                  {[
                    { step: '1', title: 'We review your submission', desc: 'We look at your website, Google presence, and competitors.', color: '#3B82F6' },
                    { step: '2', title: 'We prepare your audit', desc: 'We identify your biggest gaps and fastest growth opportunities.', color: '#818CF8' },
                    { step: '3', title: 'We reach out within 1 business day', desc: 'We present findings and walk through recommendations with you.', color: '#34D399' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                        style={{ background: `${item.color}20`, border: `1px solid ${item.color}30`, color: item.color }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-0.5" style={{ color: '#E2E8F0' }}>{item.title}</p>
                        <p className="text-sm" style={{ color: '#475569' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-3">
                {contactDetails.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{
                      background: 'rgba(11, 17, 32, 0.7)',
                      border: '1px solid rgba(51, 65, 85, 0.4)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${c.color}15`, border: `1px solid ${c.color}25`, color: c.color }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: '#475569' }}>{c.title}</p>
                      {c.href ? (
                        <a href={c.href} className="text-sm font-semibold transition-colors duration-150" style={{ color: '#E2E8F0' }}>
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold" style={{ color: '#E2E8F0' }}>{c.value}</p>
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
