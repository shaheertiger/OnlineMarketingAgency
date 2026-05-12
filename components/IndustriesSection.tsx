import Link from 'next/link'

const industries = [
  {
    title: 'Barbershop Marketing',
    desc: 'Get more haircut bookings, phone calls, and local visibility with Google Ads, Local SEO, and Google Business Profile optimization.',
    href: '/barber-marketing-agency',
    hasPage: true,
  },
  {
    title: 'Clinic Marketing',
    desc: 'Attract more patients with targeted search ads, local SEO, and a professional website built to generate appointment requests.',
    href: '/clinic-marketing-agency',
    hasPage: true,
  },
  {
    title: 'Contractor Marketing',
    desc: 'Generate more quote requests and project leads with Google Ads, Local SEO, and a lead-focused website.',
    href: '/contractor-marketing-agency',
    hasPage: true,
  },
  {
    title: 'Restaurant Marketing',
    desc: 'Drive more reservations, online orders, and walk-in customers with Google Business Profile, Local SEO, and social media ads.',
    href: '/restaurant-marketing-agency',
    hasPage: true,
  },
  {
    title: 'Lawyer Marketing',
    desc: 'Get more consultation requests and qualified leads with Google Ads, SEO, and a conversion-ready legal website.',
    href: '/contact',
    hasPage: false,
  },
  {
    title: 'Dentist Marketing',
    desc: 'Fill your appointment calendar with new patients through Local SEO, Google Ads, and Google Business Profile management.',
    href: '/contact',
    hasPage: false,
  },
  {
    title: 'Real Estate Marketing',
    desc: 'Generate more buyer and seller leads with targeted Google Ads, Facebook Ads, and local SEO strategies.',
    href: '/contact',
    hasPage: false,
  },
  {
    title: 'Auto Business Marketing',
    desc: 'Increase service bookings and vehicle sales with Google Search ads, Local SEO, and targeted social media campaigns.',
    href: '/contact',
    hasPage: false,
  },
  {
    title: 'Home Services Marketing',
    desc: 'Generate more service calls and quotes with Google Local Service Ads, SEO, and Google Business Profile optimization.',
    href: '/contact',
    hasPage: false,
  },
  {
    title: 'Local Retail Marketing',
    desc: 'Drive more foot traffic and online sales with Google Shopping, Local SEO, and targeted social media advertising.',
    href: '/contact',
    hasPage: false,
  },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-pad bg-slate-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Industries We Serve</p>
          <h2 className="section-heading mb-4 max-w-2xl mx-auto">
            Digital Marketing For Local Service Businesses
          </h2>
          <p className="section-subtext max-w-2xl mx-auto">
            We work with local businesses across Canada that need more calls, bookings, and
            customers from their online presence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="card group flex flex-col"
              aria-label={industry.title}
            >
              <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {industry.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">{industry.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                {industry.hasPage ? 'Learn more' : 'Get in touch'}
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
