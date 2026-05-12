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
    <div className="bg-white rounded-xl p-4 shadow-md border border-slate-100">
      <p className="text-xs text-slate-500 font-medium mb-1">{label}</p>
      <p className="text-xl font-bold text-slate-900">{value}</p>
      <p className={`text-xs font-semibold mt-1 ${positive ? 'text-emerald-600' : 'text-red-500'}`}>
        {change}
      </p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container-main relative section-pad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="section-label mb-4">Digital Marketing Agency Canada</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] mb-6">
              Digital Marketing Agency For Local Businesses That Need More Leads
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              We help small businesses get more calls, bookings, and customers with Google Ads, SEO,
              Local SEO, website design, Facebook Ads, Instagram Ads, and Google Business Profile
              optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Get Free Marketing Audit
              </Link>
              <Link href="/#services" className="btn-secondary text-base px-7 py-3.5">
                View Our Services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {['Google Ads', 'Local SEO', 'Website Design', 'Google Business Profile'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-600 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Dashboard visual */}
          <div className="relative lg:justify-self-end w-full max-w-lg mx-auto lg:mx-0">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 sm:p-6">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Marketing Performance</p>
                  <p className="text-xs text-slate-500">Last 30 days vs. previous period</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Active
                </span>
              </div>

              {/* Metric cards grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <MetricCard label="Phone Calls" value="247" change="+84% this month" />
                <MetricCard label="Form Leads" value="91" change="+62% this month" />
                <MetricCard label="Google Maps Rank" value="#2" change="+6 positions" />
                <MetricCard label="Ad Spend ROI" value="4.8x" change="+1.2x vs. last month" />
              </div>

              {/* Chart bar mockup */}
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-slate-600 mb-3">Monthly Lead Volume</p>
                <div className="flex items-end gap-2 h-16">
                  {[30, 45, 42, 55, 60, 72, 80, 91, 85, 95, 88, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm transition-all"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 11 ? '#2563eb' : i >= 8 ? '#93c5fd' : '#dbeafe',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-slate-400">Jan</span>
                  <span className="text-[10px] text-slate-400">Dec</span>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="bg-blue-600 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-white">+284%</p>
                  <p className="text-[10px] text-blue-200 font-medium">Total Growth</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-slate-900">$12</p>
                  <p className="text-[10px] text-slate-500 font-medium">Cost / Lead</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-slate-900">#1</p>
                  <p className="text-[10px] text-slate-500 font-medium">Local Rank</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">New inbound call</p>
                <p className="text-sm font-semibold text-slate-900">Local customer inquiry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
