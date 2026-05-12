const steps = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We review your website, ads, SEO, Google Business Profile, conversion tracking, and competitors to find exactly where you are losing leads.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We identify the fastest opportunities to generate more calls, bookings, and leads based on your industry, location, and budget.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We create or improve your campaigns, landing pages, website content, local SEO assets, and Google Business Profile to start driving results.',
  },
  {
    number: '04',
    title: 'Optimize',
    description:
      'We monitor results every month and improve performance based on real lead data, not just clicks or impressions.',
  },
]

export default function ProcessSection() {
  return (
    <section className="section-pad bg-slate-900">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            How We Grow Your Business Online
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            A clear, repeatable process focused on generating real leads for your local business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px bg-slate-700 -translate-y-1/2 z-0"
                  style={{ width: 'calc(100% - 2rem)' }}
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 bg-slate-800 rounded-2xl p-6 border border-slate-700 h-full">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="btn-primary text-base px-8 py-3.5">
            Start With A Free Audit
          </a>
        </div>
      </div>
    </section>
  )
}
