import Link from 'next/link'

const plans = [
  {
    name: 'Starter Website',
    price: '$499',
    priceNote: 'one-time',
    badge: null,
    desc: 'A clean, mobile-optimized lead-gen website for small businesses.',
    features: [
      '5-page website build',
      'Mobile-first responsive design',
      'Click-to-call + contact form',
      'Google Analytics setup',
      'Basic on-page SEO',
      'Fast loading optimized',
    ],
    cta: 'Get Started',
    href: '/contact',
    highlight: false,
  },
  {
    name: 'Ads Management',
    price: '$199',
    priceNote: '/month + ad spend',
    badge: 'Most Popular',
    desc: 'Full Google Ads setup and management built to generate real leads.',
    features: [
      'Google Search Ads campaign setup',
      'Keyword research and strategy',
      'Ad copy writing and testing',
      'Bid strategy management',
      'Negative keyword management',
      'Conversion tracking setup',
      'Dynamic call tracking',
      'Monthly performance report',
    ],
    cta: 'Get Free Audit',
    href: '/contact',
    highlight: true,
  },
  {
    name: 'Local Growth System',
    price: 'Custom',
    priceNote: 'pricing',
    badge: 'Best Value',
    desc: 'Full-stack local marketing — Ads, SEO, GBP, and website working together.',
    features: [
      'Everything in Ads Management',
      'Local SEO and GBP optimization',
      'Citation building and cleanup',
      'Review generation system',
      'Monthly strategy calls',
      'Competitor monitoring',
      'Quarterly landing page updates',
      'Priority support',
    ],
    cta: 'Book a Call',
    href: '/contact',
    highlight: false,
  },
]

export default function PackagesSection() {
  return (
    <section
      id="pricing"
      className="section-pad relative"
      style={{ background: '#0A0E1C' }}
      aria-labelledby="pricing-heading"
    >
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

      <div className="container-main relative">
        <div className="text-center mb-12">
          <p className="section-label-lime mb-4">Pricing</p>
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-[1.06]"
            style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
          >
            Clear Pricing. No Hidden Fees.
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.48)' }}>
            Month-to-month pricing. No lock-in. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={
                plan.highlight
                  ? {
                      background: '#F7F6F2',
                      border: '1px solid rgba(200,255,0,0.3)',
                      boxShadow: '0 0 60px rgba(200,255,0,0.1)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {/* Card header */}
              <div
                className="px-6 py-5 border-b"
                style={{ borderColor: plan.highlight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)' }}
              >
                {plan.badge && (
                  <div
                    className="inline-block text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3"
                    style={
                      plan.highlight
                        ? { background: '#0F0F12', color: '#C8FF00' }
                        : { background: 'rgba(200,255,0,0.1)', color: '#C8FF00', border: '1px solid rgba(200,255,0,0.15)' }
                    }
                  >
                    {plan.badge}
                  </div>
                )}
                <div
                  className="text-base font-bold mb-1"
                  style={{ color: plan.highlight ? '#0F0F12' : '#F8FAFC' }}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span
                    className="text-[2.4rem] font-black"
                    style={{ color: plan.highlight ? '#0F0F12' : '#F8FAFC', letterSpacing: '-0.04em' }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: plan.highlight ? '#6B7280' : 'rgba(255,255,255,0.38)' }}
                  >
                    {plan.priceNote}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: plan.highlight ? '#6B7280' : 'rgba(255,255,255,0.48)' }}
                >
                  {plan.desc}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 py-5 flex-1">
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: plan.highlight ? '#C8FF00' : 'rgba(200,255,0,0.15)' }}
                      >
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke={plan.highlight ? '#0F0F12' : '#C8FF00'} strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span
                        className="text-sm"
                        style={{ color: plan.highlight ? '#374151' : 'rgba(255,255,255,0.6)' }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <Link
                  href={plan.href}
                  className={`${plan.highlight ? 'btn-primary' : 'btn-outline-white'} w-full justify-center`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: 'rgba(255,255,255,0.22)' }}>
          All plans are month-to-month. No setup fees. No lock-in. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
