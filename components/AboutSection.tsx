import Link from 'next/link'

const values = [
  {
    title: 'Focused on lead generation',
    desc: 'Every strategy we build is measured against calls, bookings, and contact form submissions.',
    color: '#3B82F6',
  },
  {
    title: 'Clear monthly reporting',
    desc: 'You get a plain-language report each month showing exactly what happened and what changed.',
    color: '#818CF8',
  },
  {
    title: 'No lock-in contracts',
    desc: 'We earn your business by delivering results, not by trapping you in long-term agreements.',
    color: '#34D399',
  },
  {
    title: 'Built for local businesses',
    desc: 'We specialize in Canadian local businesses, not large national brands or e-commerce stores.',
    color: '#FBBF24',
  },
]

export default function AboutSection() {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <p className="section-label mb-4">About Us</p>
            <h2 className="section-heading mb-6">
              A Practical Online Marketing Agency For{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Local Businesses
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
              OnlineMarketingAgency.ca was built for business owners who want clear, effective, and
              measurable marketing. We focus on the channels that drive customer action: Google
              Search, Google Maps, SEO, Google Ads, Meta Ads, landing pages, websites, and
              conversion tracking.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#475569' }}>
              We work with small businesses across Canada, from single-location service companies to
              multi-location franchises. If your goal is more calls, bookings, and customers, we
              build the system to get you there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary">
                Learn About Us
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get Free Audit
              </Link>
            </div>
          </div>

          {/* Right: values */}
          <div className="space-y-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: 'rgba(11, 17, 32, 0.6)',
                  border: '1px solid rgba(51, 65, 85, 0.4)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: `${v.color}15`,
                    border: `1px solid ${v.color}25`,
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: v.color }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: '#E2E8F0' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
