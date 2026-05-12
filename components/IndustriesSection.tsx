'use client'

import Link from 'next/link'

const industries = [
  {
    title: 'Barbershop Marketing',
    desc: 'Get more haircut bookings, phone calls, and local visibility with Google Ads, Local SEO, and Google Business Profile optimization.',
    href: '/barber-marketing-agency',
    hasPage: true,
    icon: '✂️',
  },
  {
    title: 'Clinic Marketing',
    desc: 'Attract more patients with targeted search ads, local SEO, and a professional website built to generate appointment requests.',
    href: '/clinic-marketing-agency',
    hasPage: true,
    icon: '🏥',
  },
  {
    title: 'Contractor Marketing',
    desc: 'Generate more quote requests and project leads with Google Ads, Local SEO, and a lead-focused website.',
    href: '/contractor-marketing-agency',
    hasPage: true,
    icon: '🔨',
  },
  {
    title: 'Restaurant Marketing',
    desc: 'Drive more reservations, online orders, and walk-in customers with Google Business Profile, Local SEO, and social media ads.',
    href: '/restaurant-marketing-agency',
    hasPage: true,
    icon: '🍽️',
  },
  {
    title: 'Lawyer Marketing',
    desc: 'Get more consultation requests and qualified leads with Google Ads, SEO, and a conversion-ready legal website.',
    href: '/contact',
    hasPage: false,
    icon: '⚖️',
  },
  {
    title: 'Dentist Marketing',
    desc: 'Fill your appointment calendar with new patients through Local SEO, Google Ads, and Google Business Profile management.',
    href: '/contact',
    hasPage: false,
    icon: '🦷',
  },
  {
    title: 'Real Estate Marketing',
    desc: 'Generate more buyer and seller leads with targeted Google Ads, Facebook Ads, and local SEO strategies.',
    href: '/contact',
    hasPage: false,
    icon: '🏡',
  },
  {
    title: 'Auto Business Marketing',
    desc: 'Increase service bookings and vehicle sales with Google Search ads, Local SEO, and targeted social media campaigns.',
    href: '/contact',
    hasPage: false,
    icon: '🚗',
  },
  {
    title: 'Home Services Marketing',
    desc: 'Generate more service calls and quotes with Google Local Service Ads, SEO, and Google Business Profile optimization.',
    href: '/contact',
    hasPage: false,
    icon: '🏠',
  },
  {
    title: 'Local Retail Marketing',
    desc: 'Drive more foot traffic and online sales with Google Shopping, Local SEO, and targeted social media advertising.',
    href: '/contact',
    hasPage: false,
    icon: '🛍️',
  },
]

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="section-pad relative"
      style={{ background: '#0A0F1E' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Industries We Serve</p>
          <h2 className="section-heading mb-4 max-w-2xl mx-auto">
            Digital Marketing For{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Local Service Businesses
            </span>
          </h2>
          <p className="section-subtext max-w-2xl mx-auto">
            We work with local businesses across Canada that need more calls, bookings, and
            customers from their online presence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group relative rounded-2xl p-5 flex flex-col transition-all duration-300"
              style={{
                background: 'rgba(11, 17, 32, 0.6)',
                border: '1px solid rgba(51, 65, 85, 0.4)',
                backdropFilter: 'blur(8px)',
              }}
              aria-label={industry.title}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(96,165,250,0.25)'
                el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(96,165,250,0.1)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(51, 65, 85, 0.4)'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-sm font-bold leading-snug" style={{ color: '#E2E8F0' }}>
                  {industry.title}
                </h3>
                <span className="text-lg shrink-0">{industry.icon}</span>
              </div>
              <p className="text-xs leading-relaxed flex-1" style={{ color: '#475569' }}>
                {industry.desc}
              </p>
              <div
                className="mt-4 flex items-center gap-1 text-xs font-bold transition-all duration-200"
                style={{ color: '#60A5FA', opacity: 0 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = '1')}
              >
                {industry.hasPage ? 'Learn more' : 'Get in touch'}
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
