import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Get Your Free Marketing Audit',
  description:
    'Contact OnlineMarketingAgency.ca to get your free marketing audit. We help local businesses in Canada grow with Google Ads, SEO, Local SEO, and lead generation.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/contact' },
}

const auditIncludes = [
  { icon: '🔍', label: 'Website performance & conversion audit' },
  { icon: '📍', label: 'Google Business Profile review' },
  { icon: '📈', label: 'Google rankings for your target keywords' },
  { icon: '🏆', label: 'Competitor visibility analysis' },
  { icon: '💰', label: 'Active ad campaign review (if applicable)' },
  { icon: '⚡', label: 'Biggest gaps & fastest growth opportunities' },
]

const nextSteps = [
  {
    step: '01',
    title: 'We review your submission',
    desc: 'We look at your website, Google presence, and top competitors within 24 hours.',
    color: '#1D4ED8',
  },
  {
    step: '02',
    title: 'We prepare your free audit',
    desc: 'We identify exactly where you are losing leads and what to do about it.',
    color: '#7C3AED',
  },
  {
    step: '03',
    title: 'We reach out within 1 business day',
    desc: 'We walk through your findings and give you a clear action plan — no obligation.',
    color: '#C8FF00',
  },
]

const miniTestimonials = [
  { name: 'Ahmad K.', role: 'Barbershop, Brampton', quote: 'Went from 3 to 18 new clients a week.' },
  { name: 'Priya M.', role: 'Dental Clinic, Mississauga', quote: 'Hit #1 on Google Maps in 3 months.' },
  { name: 'James T.', role: 'HVAC, Toronto', quote: '4.8× ROAS. Best investment we\'ve made.' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: '#F7F6F2',
          paddingTop: 'calc(68px + 3rem)',
          paddingBottom: '3rem',
        }}
      >
        <div className="absolute inset-0 bg-grid-light pointer-events-none opacity-60" aria-hidden="true" />

        <div className="container-main relative text-center">
          {/* Urgency badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{
              background: 'rgba(200,255,0,0.12)',
              border: '1px solid rgba(200,255,0,0.3)',
              color: '#0F0F12',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#16A34A' }} aria-hidden="true" />
            Free audit · No contract · Response within 24 hours
          </div>

          <h1
            className="text-4xl sm:text-5xl font-black leading-[1.04] mb-4"
            style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
          >
            Get Your Free{' '}
            <span className="gradient-text-lime">Marketing Audit</span>
          </h1>

          <p className="text-lg max-w-xl mx-auto mb-6" style={{ color: '#6B7280' }}>
            We review your website, Google presence, and ads — then show you exactly where
            you are losing leads and how to fix it.
          </p>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#F59E0B">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: '#374151' }}>4.9/5 · 47 Google Reviews</span>
            </div>
            <span className="text-sm" style={{ color: '#9CA3AF' }}>·</span>
            <span className="text-sm font-semibold" style={{ color: '#374151' }}>50+ local businesses helped across Canada</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        id="audit"
        className="section-pad"
        style={{ background: '#F7F6F2' }}
      >
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">

            {/* Left: Form card */}
            <div
              className="rounded-2xl p-7 sm:p-8"
              style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 4px 40px rgba(0,0,0,0.06)' }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-black mb-1.5" style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}>
                  Request Your Free Audit
                </h2>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Fill in your details and we will review your business within 1 business day.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right: Social proof + process */}
            <div className="space-y-5">

              {/* Mini testimonials */}
              <div
                className="rounded-2xl p-5"
                style={{ background: '#0F0F12' }}
              >
                <div className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  What Clients Say
                </div>
                <div className="space-y-4">
                  {miniTestimonials.map((t) => (
                    <div key={t.name} className="flex gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                        style={{ background: 'rgba(200,255,0,0.12)', color: '#C8FF00' }}
                      >
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
                          {t.name} · {t.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit includes */}
              <div
                className="rounded-2xl p-5"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <h3 className="text-base font-bold mb-4" style={{ color: '#0F0F12' }}>
                  What Your Free Audit Includes
                </h3>
                <ul className="space-y-2.5">
                  {auditIncludes.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs"
                        style={{ background: 'rgba(29,78,216,0.07)' }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm" style={{ color: '#374151' }}>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What happens next */}
              <div
                className="rounded-2xl p-5"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <h3 className="text-base font-bold mb-4" style={{ color: '#0F0F12' }}>
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {nextSteps.map((item) => (
                    <div key={item.step} className="flex gap-3.5">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0"
                        style={{
                          background: item.color === '#C8FF00' ? 'rgba(200,255,0,0.12)' : `${item.color}15`,
                          color: item.color,
                          border: `1px solid ${item.color === '#C8FF00' ? 'rgba(200,255,0,0.25)' : `${item.color}25`}`,
                        }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-0.5" style={{ color: '#0F0F12' }}>{item.title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div
                className="rounded-2xl p-5"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <h3 className="text-base font-bold mb-3" style={{ color: '#0F0F12' }}>
                  Prefer to Talk Now?
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+19056269919"
                    className="flex items-center gap-3 py-2.5 px-4 rounded-xl transition-colors"
                    style={{ background: 'rgba(29,78,216,0.06)', color: '#1D4ED8' }}
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-bold">905-626-9919</span>
                  </a>
                  <a
                    href="mailto:info@onlinemarketingagency.ca"
                    className="flex items-center gap-3 py-2.5 px-4 rounded-xl transition-colors"
                    style={{ background: 'rgba(0,0,0,0.03)', color: '#374151' }}
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">info@onlinemarketingagency.ca</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
