'use client'

import Link from 'next/link'

const industries = [
  { name: 'Barbershops',       outcome: 'More bookings and walk-ins',       href: '/barber-marketing-agency' },
  { name: 'Medical Clinics',   outcome: 'More patient appointments',         href: '/clinic-marketing-agency' },
  { name: 'Dentists',          outcome: 'More new patient calls',            href: '/clinic-marketing-agency' },
  { name: 'Contractors',       outcome: 'More quote requests',               href: '/contractor-marketing-agency' },
  { name: 'Restaurants',       outcome: 'More reservations and orders',      href: '/restaurant-marketing-agency' },
  { name: 'Law Firms',         outcome: 'More consultation inquiries',       href: '/barber-marketing-agency' },
  { name: 'Real Estate',       outcome: 'More buyer and seller leads',       href: '/barber-marketing-agency' },
  { name: 'Auto Businesses',   outcome: 'More service appointments',         href: '/barber-marketing-agency' },
  { name: 'Home Services',     outcome: 'More calls and quote requests',     href: '/contractor-marketing-agency' },
]

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="section-pad"
      style={{ background: '#F7F6F2' }}
      aria-labelledby="industries-heading"
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-[480px_1fr] gap-12 xl:gap-20 items-start">

          {/* Left: Heading */}
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-5">Who We Serve</p>
            <h2
              id="industries-heading"
              className="text-3xl md:text-4xl xl:text-[2.8rem] font-extrabold leading-[1.04] mb-5"
              style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
            >
              Built for Local
              <br />
              Businesses That
              <br />
              <span className="gradient-text-lime">
                Need Real Demand.
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-[380px]" style={{ color: '#6B7280' }}>
              We specialize in lead generation for local service businesses. If your customers find you online,
              we build the system to make sure they find you first.
            </p>
            <Link href="/contact" className="btn-dark text-sm px-6 py-3">
              Get a Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right: Grid */}
          <div className="flex flex-col gap-2.5">
            {industries.map(({ name, outcome, href }) => (
              <Link
                key={name}
                href={href}
                className="group flex items-center justify-between py-4 px-5 rounded-xl border transition-all duration-200"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.14)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div>
                  <span className="text-sm font-bold" style={{ color: '#0F0F12' }}>{name}</span>
                  <span className="text-xs ml-3" style={{ color: '#9CA3AF' }}>{outcome}</span>
                </div>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ml-4"
                  style={{ background: '#C8FF00' }}
                  aria-hidden="true"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#0F0F12" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}

            <div className="mt-2 text-center">
              <p className="text-xs mb-2" style={{ color: '#B0AFA9' }}>
                Don't see your industry?
              </p>
              <Link href="/contact" className="text-sm font-semibold" style={{ color: '#1D4ED8' }}>
                Ask about your vertical →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
