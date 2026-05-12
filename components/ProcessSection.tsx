'use client'

const steps = [
  {
    num: '01',
    title: 'Audit',
    desc: 'We analyze your website, Google rankings, ad accounts, Google Business Profile, competitors, and current conversion setup to identify the biggest gaps and opportunities.',
    color: '#1D4ED8',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We build a focused action plan around the channels most likely to generate calls, bookings, and leads for your specific business and market.',
    color: '#7C3AED',
  },
  {
    num: '03',
    title: 'Launch',
    desc: 'We execute fast. Campaigns go live, websites get built, and your digital presence gets optimized — typically within 7 to 14 days of kickoff.',
    color: '#C8FF00',
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Every month we review lead data, adjust bids, improve copy, and identify new growth opportunities. Performance compounds over time.',
    color: '#10B981',
  },
]

export default function ProcessSection() {
  return (
    <section
      className="section-pad"
      style={{ background: 'white' }}
      aria-labelledby="process-heading"
    >
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label mb-4">How It Works</p>
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-extrabold leading-[1.06]"
            style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}
          >
            A Clear Growth System,
            <br />
            Not Random Tactics.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-10 relative">
          {/* Connector line — desktop */}
          <div
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, #1D4ED8, #7C3AED, #9ca00040, #10B98140)' }}
            aria-hidden="true"
          />

          {steps.map(({ num, title, desc, color }) => (
            <div key={num} className="relative">
              {/* Step circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black mb-5 relative z-10"
                style={{
                  background: `${color}14`,
                  border: `1.5px solid ${color}28`,
                  color,
                  letterSpacing: '-0.03em',
                }}
              >
                {num}
              </div>
              <h3 className="text-base font-bold mb-2.5" style={{ color: '#0F0F12' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
