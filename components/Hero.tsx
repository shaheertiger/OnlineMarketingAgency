import Link from 'next/link'

function MetricCard({
  label,
  value,
  change,
  positive = true,
}: {
  label: string
  value: string
  change: string
  positive?: boolean
}) {
  return (
    <div
      className="rounded-xl p-4 transition-all duration-200"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <p className="text-xs font-medium mb-1" style={{ color: '#64748B' }}>{label}</p>
      <p className="text-xl font-bold" style={{ color: '#F8FAFC' }}>{value}</p>
      <p
        className="text-xs font-semibold mt-1"
        style={{ color: positive ? '#34D399' : '#F87171' }}
      >
        {change}
      </p>
    </div>
  )
}

const trustBadges = [
  'No lock-in contracts',
  'Free marketing audit',
  'Results in 30 days',
  'Canadian agency',
]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060B18 0%, #0A1025 50%, #060B18 100%)' }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute orb-pulse"
          style={{
            top: '-10%',
            right: '-5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute orb-float"
          style={{
            bottom: '-15%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(79,70,229,0.14) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute orb-pulse"
          style={{
            top: '40%',
            left: '40%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            animationDelay: '1.5s',
          }}
        />
      </div>

      <div className="container-main relative section-pad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Urgency pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6"
              style={{
                background: 'rgba(37, 99, 235, 0.12)',
                border: '1px solid rgba(37, 99, 235, 0.3)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
              <span className="text-xs font-semibold" style={{ color: '#60A5FA' }}>
                Free audits available — limited spots this month
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] mb-5"
              style={{ color: '#F8FAFC' }}
            >
              Digital Marketing Agency For Local Businesses That Need{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA 0%, #818CF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                More Leads
              </span>
            </h1>

            <p className="text-lg leading-relaxed mb-3" style={{ color: '#CBD5E1' }}>
              More calls. More bookings. Better local visibility.
            </p>
            <p className="text-base leading-relaxed mb-9" style={{ color: '#64748B' }}>
              We help small businesses across Canada get more customers with Google Ads, SEO, Local
              SEO, website design, Facebook Ads, and Google Business Profile optimization.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-7">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Get Free Marketing Audit
              </Link>
              <a href="tel:9056269919" className="btn-secondary text-base px-8 py-4 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                905-626-9919
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-2.5">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm"
                  style={{ color: '#64748B' }}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#34D399' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Dashboard visual */}
          <div className="relative lg:justify-self-end w-full max-w-lg mx-auto lg:mx-0">
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                background: 'rgba(11, 17, 32, 0.85)',
                border: '1px solid rgba(51, 65, 85, 0.6)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(96,165,250,0.05)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Dashboard header */}
              <div
                className="flex items-center justify-between mb-5 pb-4"
                style={{ borderBottom: '1px solid rgba(51, 65, 85, 0.5)' }}
              >
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#F8FAFC' }}>Marketing Performance</p>
                  <p className="text-xs" style={{ color: '#475569' }}>Last 30 days vs. previous period</p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    color: '#34D399',
                    background: 'rgba(52, 211, 153, 0.1)',
                    border: '1px solid rgba(52, 211, 153, 0.2)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <MetricCard label="Phone Calls"     value="247"  change="+84% this month" />
                <MetricCard label="Form Leads"      value="91"   change="+62% this month" />
                <MetricCard label="Google Maps Rank" value="#2"  change="+6 positions" />
                <MetricCard label="Ad Spend ROI"    value="4.8x" change="+1.2x vs. last month" />
              </div>

              {/* Chart bar mockup */}
              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <p className="text-xs font-semibold mb-3" style={{ color: '#64748B' }}>Monthly Lead Volume</p>
                <div className="flex items-end gap-1.5 h-14">
                  {[30, 45, 42, 55, 60, 72, 80, 91, 85, 95, 88, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 11
                            ? 'linear-gradient(180deg, #3B82F6, #4F46E5)'
                            : i >= 8
                            ? 'rgba(59,130,246,0.35)'
                            : 'rgba(59,130,246,0.15)',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[10px]" style={{ color: '#334155' }}>Jan</span>
                  <span className="text-[10px]" style={{ color: '#334155' }}>Dec</span>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                >
                  <p className="text-lg font-bold text-white">+284%</p>
                  <p className="text-[10px] font-medium" style={{ color: '#93C5FD' }}>Total Growth</p>
                </div>
                <div
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="text-lg font-bold" style={{ color: '#F8FAFC' }}>$12</p>
                  <p className="text-[10px] font-medium" style={{ color: '#475569' }}>Cost / Lead</p>
                </div>
                <div
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="text-lg font-bold" style={{ color: '#F8FAFC' }}>#1</p>
                  <p className="text-[10px] font-medium" style={{ color: '#475569' }}>Local Rank</p>
                </div>
              </div>
            </div>

            {/* Floating notification badge */}
            <div
              className="absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{
                background: 'rgba(11, 17, 32, 0.97)',
                border: '1px solid rgba(51, 65, 85, 0.7)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs" style={{ color: '#475569' }}>New inbound call</p>
                <p className="text-sm font-semibold" style={{ color: '#F8FAFC' }}>Local customer inquiry</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            </div>

            {/* Floating top-right badge */}
            <div
              className="absolute -top-4 -right-4 rounded-xl px-3 py-2 hidden sm:flex items-center gap-2"
              style={{
                background: 'rgba(52, 211, 153, 0.12)',
                border: '1px solid rgba(52, 211, 153, 0.25)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <svg className="w-4 h-4" style={{ color: '#34D399' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-xs font-bold" style={{ color: '#34D399' }}>+284% Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
