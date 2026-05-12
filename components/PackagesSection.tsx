import Link from 'next/link'

const packages = [
  {
    name: 'Starter Website',
    price: 'From $499',
    priceNote: 'one-time',
    description:
      'A clean, professional website for small businesses that need a stronger online presence.',
    features: [
      'Mobile-first responsive design',
      'Up to 5 pages',
      'Contact form and click-to-call',
      'Basic on-page SEO setup',
      'Google Analytics integration',
      'Fast load speed optimized',
    ],
    cta: 'Get Website Quote',
    href: '/contact',
    highlighted: false,
    badge: null,
  },
  {
    name: 'Ads Management',
    price: 'From $199',
    priceNote: 'per month',
    description:
      'Google Ads and Facebook Ads management for local businesses that want more leads and calls.',
    features: [
      'Google Search Ads setup and management',
      'Facebook or Instagram Ads management',
      'Keyword research and negative keywords',
      'Ad copy writing and testing',
      'Conversion tracking setup',
      'Monthly performance report',
    ],
    cta: 'Start Ads Campaign',
    href: '/contact',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Local Growth System',
    price: 'Custom Pricing',
    priceNote: 'tailored to your business',
    description:
      'SEO, Local SEO, Google Ads, website optimization, Google Business Profile management, and conversion tracking.',
    features: [
      'Everything in Ads Management',
      'Local SEO and Google Maps optimization',
      'Google Business Profile management',
      'Website landing page optimization',
      'Monthly SEO content updates',
      'Full conversion tracking and reporting',
    ],
    cta: 'Request Custom Quote',
    href: '/contact',
    highlighted: false,
    badge: 'Best Value',
  },
]

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="section-pad relative overflow-hidden"
      style={{ background: '#070C1A' }}
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main relative">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Packages</p>
          <h2 className="section-heading mb-4 max-w-2xl mx-auto">
            Simple Marketing Packages For{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Small Businesses
            </span>
          </h2>
          <p className="section-subtext max-w-xl mx-auto">
            Straightforward pricing with no long-term lock-in contracts. Start with what you need
            and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative rounded-2xl p-7 flex flex-col transition-all duration-300"
              style={
                pkg.highlighted
                  ? {
                      background: 'linear-gradient(160deg, #1E3A8A 0%, #1E1B4B 100%)',
                      border: '1px solid rgba(96,165,250,0.3)',
                      boxShadow: '0 24px 80px rgba(37,99,235,0.25), 0 0 0 1px rgba(96,165,250,0.2)',
                    }
                  : {
                      background: 'rgba(11, 17, 32, 0.7)',
                      border: '1px solid rgba(51, 65, 85, 0.5)',
                      backdropFilter: 'blur(8px)',
                    }
              }
            >
              {/* Badge */}
              {pkg.badge && (
                <span
                  className="inline-flex self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                  style={
                    pkg.highlighted
                      ? { color: '#93C5FD', background: 'rgba(147,197,253,0.15)', border: '1px solid rgba(147,197,253,0.25)' }
                      : { color: '#34D399', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }
                  }
                >
                  {pkg.badge}
                </span>
              )}

              <h3
                className="text-xl font-bold mb-1"
                style={{ color: '#F8FAFC' }}
              >
                {pkg.name}
              </h3>

              <div className="mb-4">
                <span
                  className="text-3xl font-extrabold"
                  style={{ color: pkg.highlighted ? '#FFFFFF' : '#F8FAFC' }}
                >
                  {pkg.price}
                </span>
                <span
                  className="text-sm ml-1.5"
                  style={{ color: pkg.highlighted ? 'rgba(147,197,253,0.8)' : '#475569' }}
                >
                  {pkg.priceNote}
                </span>
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: pkg.highlighted ? 'rgba(219,234,254,0.8)' : '#64748B' }}
              >
                {pkg.description}
              </p>

              {/* Divider */}
              <div
                className="mb-6 h-px"
                style={{ background: pkg.highlighted ? 'rgba(147,197,253,0.15)' : 'rgba(51,65,85,0.5)' }}
              />

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: pkg.highlighted ? 'rgba(147,197,253,0.2)' : 'rgba(59,130,246,0.15)',
                        border: pkg.highlighted ? '1px solid rgba(147,197,253,0.3)' : '1px solid rgba(59,130,246,0.2)',
                      }}
                    >
                      <svg
                        className="w-2.5 h-2.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: pkg.highlighted ? '#93C5FD' : '#60A5FA' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: pkg.highlighted ? 'rgba(219,234,254,0.9)' : '#94A3B8' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={pkg.href}
                className={pkg.highlighted ? 'btn-outline-white text-sm' : 'btn-primary text-sm'}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: '#334155' }}>
          All packages include a free marketing audit before you spend a dollar.
        </p>
      </div>
    </section>
  )
}
