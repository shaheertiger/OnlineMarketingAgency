'use client'

const steps = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We review your website, ads, SEO, Google Business Profile, conversion tracking, and competitors to find exactly where you are losing leads.',
    color: '#3B82F6',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We identify the fastest opportunities to generate more calls, bookings, and leads based on your industry, location, and budget.',
    color: '#818CF8',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We create or improve your campaigns, landing pages, website content, local SEO assets, and Google Business Profile to start driving results.',
    color: '#A78BFA',
  },
  {
    number: '04',
    title: 'Optimize',
    description:
      'We monitor results every month and improve performance based on real lead data, not just clicks or impressions.',
    color: '#34D399',
  },
]

export default function ProcessSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: '#060B18' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(79,70,229,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.2), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main relative">
        <div className="text-center mb-16">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="section-heading mb-4">
            How We Grow Your Business{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Online
            </span>
          </h2>
          <p className="section-subtext max-w-xl mx-auto">
            A clear, repeatable process focused on generating real leads for your local business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
          {/* Connector line - desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, rgba(51,65,85,0.5) 20%, rgba(51,65,85,0.5) 80%, transparent 95%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <div key={step.number} className="relative z-10 flex flex-col">
              {/* Step number circle */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 text-white font-extrabold text-sm relative"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}30, ${step.color}15)`,
                    border: `1px solid ${step.color}40`,
                    boxShadow: `0 0 20px ${step.color}20`,
                    color: step.color,
                  }}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="hidden sm:block lg:hidden flex-1 h-px"
                    style={{ background: `linear-gradient(90deg, ${step.color}40, transparent)` }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: 'rgba(11, 17, 32, 0.7)',
                  border: `1px solid rgba(51, 65, 85, 0.5)`,
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `${step.color}30`
                  el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${step.color}15`
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(51, 65, 85, 0.5)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: '#F8FAFC' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="/contact" className="btn-primary text-base px-9 py-4">
            Start With A Free Audit
          </a>
          <p className="text-sm mt-4" style={{ color: '#334155' }}>No commitment required</p>
        </div>
      </div>
    </section>
  )
}
