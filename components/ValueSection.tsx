const metrics = [
  {
    title: 'More Phone Calls',
    desc: 'Inbound calls from customers actively searching for your services.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: '#3B82F6',
  },
  {
    title: 'More Booking Requests',
    desc: 'Online bookings and appointment requests direct from your website or Google.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: '#818CF8',
  },
  {
    title: 'Better Local Rankings',
    desc: 'Higher positions on Google for city and neighbourhood-specific searches.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: '#34D399',
  },
  {
    title: 'Higher Google Maps Visibility',
    desc: 'More appearances in the local map pack when customers search nearby.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: '#FBBF24',
  },
  {
    title: 'Lower Wasted Ad Spend',
    desc: 'Tighter targeting and negative keywords reduce clicks that never convert.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#F472B6',
  },
  {
    title: 'Cleaner Conversion Tracking',
    desc: 'Know exactly which campaigns, keywords, and channels generate real leads.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: '#A78BFA',
  },
]

export default function ValueSection() {
  return (
    <section
      className="section-pad relative"
      style={{ background: '#060B18' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="section-label mb-4">Real Business Results</p>
            <h2 className="section-heading mb-6">
              A Marketing Agency Focused On{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Real Business Actions
              </span>
            </h2>
            <p className="section-subtext mb-6">
              We do not just chase clicks or impressions. Our campaigns are built around real
              business outcomes: phone calls, booking requests, form submissions, website leads,
              Google Maps actions, and new customer inquiries.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#475569' }}>
              Every campaign we build is tracked against the metrics that matter to your
              bottom line. If it is not generating customer actions, we fix it.
            </p>
            <a href="/contact" className="btn-primary">
              Get Free Marketing Audit
            </a>
          </div>

          {/* Right: metric grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl p-5 flex gap-4 transition-all duration-200"
                style={{
                  background: 'rgba(11, 17, 32, 0.6)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: `${m.color}15`,
                    border: `1px solid ${m.color}25`,
                    color: m.color,
                  }}
                >
                  {m.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: '#E2E8F0' }}>{m.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
