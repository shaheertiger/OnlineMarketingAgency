const testimonials = [
  {
    stars: 5,
    quote:
      'We went from 3 new walk-in clients a week to over 18 after they fixed our Google Ads and GMB profile. The cost per new client dropped so much it felt like cheating.',
    name: 'Ahmad K.',
    role: 'Owner, Prestige Barbershop',
    city: 'Brampton, ON',
    metric: '+500%',
    metricLabel: 'New Clients',
  },
  {
    stars: 5,
    quote:
      "Our Google ranking jumped from page 3 to the #1 map position in just over 3 months. We're fully booked two weeks out now. The ROI is incredible for what we pay.",
    name: 'Dr. Priya M.',
    role: 'Practice Owner, Smile Dental Clinic',
    city: 'Mississauga, ON',
    metric: '#1',
    metricLabel: 'Map Rank',
  },
  {
    stars: 5,
    quote:
      'Best ROI we have ever seen from a marketing agency. Every dollar we put into Google Ads comes back 5x. They track real calls and bookings, not just clicks.',
    name: 'James T.',
    role: 'Owner, ComfortAir HVAC',
    city: 'Toronto, ON',
    metric: '4.8×',
    metricLabel: 'Avg. ROAS',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#C8FF00">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: '#0F0F12' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-50" aria-hidden="true" />

      <div className="container-main relative">
        <div className="text-center mb-14">
          <p className="section-label-lime mb-4">Client Results</p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-black mb-4 leading-[1.06]"
            style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
          >
            Real Businesses. Real Growth.
          </h2>

          {/* Google review badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mt-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#C8FF00">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>
              4.9 / 5 · 47 Google Reviews
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <Stars count={t.stars} />
                <div className="text-right">
                  <div className="text-xl font-black leading-none" style={{ color: '#C8FF00', letterSpacing: '-0.03em' }}>
                    {t.metric}
                  </div>
                  <div className="text-[10px] font-semibold tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    {t.metricLabel.toUpperCase()}
                  </div>
                </div>
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: 'rgba(200,255,0,0.12)', color: '#C8FF00' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: '#F8FAFC' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.role} · {t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
