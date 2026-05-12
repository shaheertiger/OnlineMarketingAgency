import Link from 'next/link'

const packages = [
  {
    name: 'Starter Website',
    price: 'Starting From $499',
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
  },
  {
    name: 'Ads Management',
    price: 'Starting From $199',
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
  },
]

export default function PackagesSection() {
  return (
    <section id="packages" className="section-pad bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Packages</p>
          <h2 className="section-heading mb-4 max-w-2xl mx-auto">
            Simple Marketing Packages For Small Businesses
          </h2>
          <p className="section-subtext max-w-xl mx-auto">
            Straightforward pricing with no long-term lock-in contracts. Start with what you need
            and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-7 border flex flex-col ${
                pkg.highlighted
                  ? 'bg-blue-600 border-blue-500 shadow-xl shadow-blue-100'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {pkg.highlighted && (
                <span className="inline-flex self-start text-xs font-bold uppercase tracking-widest text-blue-200 bg-blue-700 rounded-full px-3 py-1 mb-4">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-xl font-bold mb-1 ${
                  pkg.highlighted ? 'text-white' : 'text-slate-900'
                }`}
              >
                {pkg.name}
              </h3>
              <div className="mb-3">
                <span
                  className={`text-2xl font-extrabold ${
                    pkg.highlighted ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {pkg.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    pkg.highlighted ? 'text-blue-200' : 'text-slate-500'
                  }`}
                >
                  {pkg.priceNote}
                </span>
              </div>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  pkg.highlighted ? 'text-blue-100' : 'text-slate-600'
                }`}
              >
                {pkg.description}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        pkg.highlighted ? 'text-blue-200' : 'text-blue-600'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        pkg.highlighted ? 'text-blue-50' : 'text-slate-600'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={pkg.href}
                className={
                  pkg.highlighted
                    ? 'btn-outline-white text-sm'
                    : 'btn-primary text-sm'
                }
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
