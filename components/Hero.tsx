'use client'

import Link from 'next/link'

const barData = [3,4,5,4,6,7,6,8,7,9,8,10,9,11,10,12,11,13,12,15,13,14,15,17,16,18,17,20,19,22]
const maxVal = Math.max(...barData)

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: '#F7F6F2',
        paddingTop: 'calc(68px + 4rem)',
        paddingBottom: '5rem',
      }}
    >
      <div className="absolute inset-0 bg-grid-light pointer-events-none" aria-hidden="true" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-10 xl:gap-16 items-center">

          {/* LEFT: Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide"
              style={{
                background: 'rgba(29,78,216,0.07)',
                border: '1px solid rgba(29,78,216,0.18)',
                color: '#1D4ED8',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" aria-hidden="true" />
              Canadian Digital Marketing Agency
            </div>

            <h1
              className="text-[2.6rem] sm:text-[3.2rem] xl:text-[3.75rem] font-black leading-[1.01] mb-5"
              style={{ color: '#0F0F12', letterSpacing: '-0.03em' }}
            >
              More Local Leads.
              <br />
              Less Wasted{' '}
              <span className="gradient-text-lime">
                Ad Spend.
              </span>
            </h1>

            <p className="text-lg leading-relaxed mb-7 max-w-[520px]" style={{ color: '#6B7280' }}>
              We help Canadian local businesses get more calls, bookings, and customers through
              Google Ads, SEO, Local SEO, GBP optimization, and conversion-focused websites.
            </p>

            {/* Social proof strip */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#F59E0B">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[13px] font-semibold" style={{ color: '#374151' }}>
                4.9/5 · 485 Google Reviews · Trusted by 50+ local businesses
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Get Free Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="tel:+19056269919" className="btn-secondary text-base px-7 py-3.5">
                Call 905-626-9919
              </a>
            </div>

            <p className="text-xs mb-7" style={{ color: '#9CA3AF' }}>
              No contract · 100% free · Response within 24 hours
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {['No lock-in contracts','Free audit included','Built for local businesses','Lead-focused strategy'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="#1D4ED8">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[13px] font-medium" style={{ color: '#374151' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Performance Panel */}
          <div className="relative">

            {/* Floating ROAS badge */}
            <div
              className="absolute -top-5 -left-5 z-10 px-4 py-3 rounded-xl shadow-2xl"
              style={{ background: '#1D4ED8' }}
            >
              <div className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Avg. ROAS
              </div>
              <div className="text-[26px] font-black leading-none" style={{ color: 'white', letterSpacing: '-0.04em' }}>
                4.8×
              </div>
            </div>

            {/* Main panel */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#0F0F12',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.28)',
              }}
            >
              {/* Title bar */}
              <div
                className="px-5 py-3.5 flex items-center justify-between border-b"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#C8FF00' }} />
                </div>
                <span className="text-[11px] font-semibold" style={{ color: 'rgba(255,255,255,0.28)' }}>
                  Campaign Dashboard
                </span>
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: '#C8FF00' }}
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-bold" style={{ color: '#C8FF00' }}>Live</span>
                </div>
              </div>

              <div className="p-5">
                {/* Big metric */}
                <div className="mb-5">
                  <div className="text-[10px] font-bold mb-2 tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    COST PER LEAD
                  </div>
                  <div className="flex items-end gap-3">
                    <span
                      className="text-[2.8rem] font-black leading-none"
                      style={{ color: '#F8FAFC', letterSpacing: '-0.04em' }}
                    >
                      $14.80
                    </span>
                    <span
                      className="text-xs font-bold mb-1.5 px-2 py-0.5 rounded-full"
                      style={{ background: '#C8FF00', color: '#0F0F12' }}
                    >
                      ↓ 41%
                    </span>
                  </div>
                </div>

                {/* KPI tiles */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { label: 'Phone Calls', value: '+127%', color: '#C8FF00' },
                    { label: 'Map Rank',    value: '#1',    color: '#60A5FA' },
                    { label: 'New Leads',   value: '47',    color: '#F8FAFC' },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <div className="text-[9px] font-bold mb-1 tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        {label.toUpperCase()}
                      </div>
                      <div className="text-base font-black" style={{ color, letterSpacing: '-0.02em' }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div className="mb-4">
                  <div className="text-[9px] font-bold mb-2.5 tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    LEAD VOLUME — 30 DAYS
                  </div>
                  <div className="flex items-end gap-[2px] h-10">
                    {barData.map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${(val / maxVal) * 100}%`,
                          background:
                            i >= barData.length - 5  ? '#C8FF00' :
                            i >= barData.length - 12 ? 'rgba(200,255,0,0.35)' :
                            'rgba(255,255,255,0.1)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Live notification */}
                <div
                  className="flex items-center gap-2.5 p-3 rounded-xl"
                  style={{ background: 'rgba(200,255,0,0.07)', border: '1px solid rgba(200,255,0,0.14)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ background: '#C8FF00' }} aria-hidden="true" />
                  <span className="text-[11px] flex-1 min-w-0 truncate" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    New lead — &quot;plumber near me&quot; · Google Ads
                  </span>
                  <span className="text-[10px] shrink-0" style={{ color: 'rgba(255,255,255,0.22)' }}>2s ago</span>
                </div>
              </div>
            </div>

            {/* Floating bookings badge */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl shadow-xl"
              style={{ background: 'white', border: '1px solid rgba(0,0,0,0.09)' }}
            >
              <div className="text-[9px] font-bold mb-0.5 tracking-wider" style={{ color: '#9CA3AF' }}>
                BOOKINGS THIS WEEK
              </div>
              <div className="text-xl font-black" style={{ color: '#0F0F12', letterSpacing: '-0.04em' }}>
                +38%
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
