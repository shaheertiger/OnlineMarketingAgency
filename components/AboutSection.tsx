import Link from 'next/link'

const values = [
  {
    title: 'Focused on lead generation',
    desc: 'Every strategy we build is measured against calls, bookings, and contact form submissions.',
  },
  {
    title: 'Clear monthly reporting',
    desc: 'You get a plain-language report each month showing exactly what happened and what changed.',
  },
  {
    title: 'No lock-in contracts',
    desc: 'We earn your business by delivering results, not by trapping you in long-term agreements.',
  },
  {
    title: 'Built for local businesses',
    desc: 'We specialize in Canadian local businesses, not large national brands or e-commerce stores.',
  },
]

export default function AboutSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <p className="section-label mb-4">About Us</p>
            <h2 className="section-heading mb-6">
              A Practical Online Marketing Agency For Local Businesses
            </h2>
            <p className="section-subtext mb-4">
              OnlineMarketingAgency.ca was built for business owners who want clear, effective, and
              measurable marketing. We focus on the channels that drive customer action: Google
              Search, Google Maps, SEO, Google Ads, Meta Ads, landing pages, websites, and
              conversion tracking.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
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
              <div key={v.title} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
