import Link from 'next/link'

const services = [
  {
    title: 'Google Ads Management',
    description:
      'Build high-intent Google Search campaigns that generate calls, bookings, quote requests, and qualified leads.',
    href: '/google-ads-management',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: '#3B82F6',
    tag: 'PPC · Google Search',
  },
  {
    title: 'SEO Services',
    description:
      'Improve your organic visibility with keyword-focused content, technical SEO, on-page SEO, and local search optimization.',
    href: '/seo-services',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: '#818CF8',
    tag: 'Organic · Rankings',
  },
  {
    title: 'Local SEO Services',
    description:
      'Rank higher for city, neighbourhood, and "near me" searches so more local customers find your business.',
    href: '/local-seo-services',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: '#34D399',
    tag: 'Near Me · Maps SEO',
  },
  {
    title: 'Google Business Profile',
    description:
      'Improve your Google Maps presence, profile visibility, call volume, direction requests, and local discovery.',
    href: '/google-business-profile-optimization',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: '#FBBF24',
    tag: 'GBP · Maps Ranking',
  },
  {
    title: 'Website Design',
    description:
      'Create fast, clean, mobile-friendly websites designed to convert visitors into leads, calls, and bookings.',
    href: '/website-design-for-small-business',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#F472B6',
    tag: 'Web · Conversion',
  },
  {
    title: 'Facebook & Instagram Ads',
    description:
      'Run Meta ad campaigns that build demand, retarget visitors, and drive customer inquiries for local businesses.',
    href: '/social-media-marketing-agency',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.876V15a1 1 0 01-1.447.894L15 14M3 8.5A1.5 1.5 0 014.5 7h8A1.5 1.5 0 0114 8.5v7A1.5 1.5 0 0112.5 17h-8A1.5 1.5 0 013 15.5v-7z" />
      </svg>
    ),
    color: '#A78BFA',
    tag: 'Meta · Social Ads',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad relative"
      style={{ background: '#070C1A' }}
    >
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.2), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label mb-4">What We Do</p>
          <h2 className="section-heading mb-4 max-w-2xl mx-auto">
            Online Marketing Services Built For{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Small Business Growth
            </span>
          </h2>
          <p className="section-subtext max-w-xl mx-auto">
            Every service we offer is built around one outcome: more customers for your local business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative rounded-2xl p-6 flex flex-col transition-all duration-300"
              style={{
                background: 'rgba(11, 17, 32, 0.6)',
                border: '1px solid rgba(51, 65, 85, 0.5)',
                backdropFilter: 'blur(8px)',
              }}
              aria-label={`Learn about ${service.title}`}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = `${service.color}30`
                el.style.boxShadow = `0 12px 48px rgba(0,0,0,0.4), 0 0 0 1px ${service.color}20, inset 0 1px 0 ${service.color}10`
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(51, 65, 85, 0.5)'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}25`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              <h3 className="text-base font-bold mb-2" style={{ color: '#F8FAFC' }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#64748B' }}>
                {service.description}
              </p>

              {/* Tag */}
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    color: service.color,
                    background: `${service.color}12`,
                    border: `1px solid ${service.color}20`,
                  }}
                >
                  {service.tag}
                </span>
                <span
                  className="text-sm font-semibold flex items-center gap-1 transition-all duration-200"
                  style={{ color: service.color }}
                >
                  Learn more
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
