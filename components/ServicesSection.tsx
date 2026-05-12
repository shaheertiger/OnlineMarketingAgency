import Link from 'next/link'

const services = [
  {
    title: 'Google Ads Management',
    description:
      'Build high-intent Google Search campaigns that generate calls, bookings, quote requests, and qualified leads.',
    href: '/google-ads-management',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    keywords: 'Google Ads agency · PPC management · Google Search ads',
  },
  {
    title: 'SEO Services',
    description:
      'Improve your organic visibility with keyword-focused content, technical SEO, on-page SEO, and local search optimization.',
    href: '/seo-services',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    keywords: 'SEO agency · SEO services Canada · organic rankings',
  },
  {
    title: 'Local SEO Services',
    description:
      'Rank higher for city, neighbourhood, and "near me" searches so more local customers find your business.',
    href: '/local-seo-services',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    keywords: 'Local SEO agency · near me SEO · Google Maps SEO',
  },
  {
    title: 'Google Business Profile Optimization',
    description:
      'Improve your Google Maps presence, profile visibility, call volume, direction requests, and local discovery.',
    href: '/google-business-profile-optimization',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    keywords: 'Google Business Profile management · Google Maps ranking',
  },
  {
    title: 'Website Design For Small Business',
    description:
      'Create fast, clean, mobile-friendly websites designed to convert visitors into leads, calls, and bookings.',
    href: '/website-design-for-small-business',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    keywords: 'Website design for small business · lead-gen websites',
  },
  {
    title: 'Facebook And Instagram Ads',
    description:
      'Run Meta ad campaigns that build demand, retarget visitors, and drive customer inquiries for local businesses.',
    href: '/social-media-marketing-agency',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.876V15a1 1 0 01-1.447.894L15 14M3 8.5A1.5 1.5 0 014.5 7h8A1.5 1.5 0 0114 8.5v7A1.5 1.5 0 0112.5 17h-8A1.5 1.5 0 013 15.5v-7z" />
      </svg>
    ),
    keywords: 'Social media marketing agency · Facebook Ads · Instagram Ads',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-slate-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="section-label mb-4">What We Do</p>
          <h2 className="section-heading mb-4 max-w-2xl mx-auto">
            Online Marketing Services Built For Small Business Growth
          </h2>
          <p className="section-subtext max-w-2xl mx-auto">
            Every service we offer is built around one outcome: more customers for your local
            business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="card group flex flex-col"
              aria-label={`Learn about ${service.title}`}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
              <p className="text-xs text-slate-400">{service.keywords}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
