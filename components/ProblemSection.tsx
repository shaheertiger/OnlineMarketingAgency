const problems = [
  {
    title: 'Not ranking on Google Search',
    desc: 'Competitors appear above you for the searches that bring in paying customers.',
  },
  {
    title: 'No visibility on Google Maps',
    desc: 'Local customers searching nearby cannot find your business listing.',
  },
  {
    title: 'Website not converting visitors',
    desc: 'Traffic arrives but leaves without calling, booking, or filling out a form.',
  },
  {
    title: 'Ad budget wasted on poor leads',
    desc: 'Google or Meta ads are running but not generating qualified inquiries.',
  },
]

export default function ProblemSection() {
  return (
    <section
      className="section-pad relative"
      style={{ background: '#0A0F1E' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(248,113,113,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="section-label mb-4">The Problem</p>
            <h2 className="section-heading mb-6">
              Most Local Businesses Are Not Showing Up{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #F87171, #FB923C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Where Customers Search
              </span>
            </h2>
            <p className="section-subtext mb-8">
              Your customers are searching on Google, Google Maps, Facebook, Instagram, and local
              search results every day. If your business is not visible, your competitors get the
              calls, bookings, and leads. We help fix the full system: traffic, rankings, ads,
              landing pages, tracking, and lead generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-primary">
                Get Free Marketing Audit
              </a>
            </div>
          </div>

          {/* Right: problem cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-5 transition-all duration-200"
                style={{
                  background: 'rgba(11, 17, 32, 0.7)',
                  border: '1px solid rgba(248,113,113,0.1)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(248,113,113,0.12)', border: '1px solid rgba(248,113,113,0.2)' }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#F87171' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{ color: '#E2E8F0' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
