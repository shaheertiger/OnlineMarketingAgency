import Link from 'next/link'

interface CTASectionProps {
  heading?: string
  subheading?: string
  ctaText?: string
  ctaHref?: string
  secondaryText?: string
  secondaryHref?: string
  showPhone?: boolean
}

export default function CTASection({
  heading = 'Ready To Get More Calls, Bookings, And Leads?',
  subheading = 'Tell us about your business and we will show you the biggest opportunities to improve your online visibility and lead generation.',
  ctaText = 'Get Free Marketing Audit',
  ctaHref = '/contact',
  secondaryText,
  secondaryHref,
  showPhone = true,
}: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden section-pad"
      style={{
        background: 'linear-gradient(160deg, #0B1628 0%, #0E1A3A 40%, #0C1226 100%)',
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Top / bottom accent lines */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.3), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main relative text-center">
        {/* Label */}
        <p className="section-label mb-5">Ready To Grow?</p>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-5 max-w-3xl mx-auto"
          style={{ color: '#F8FAFC' }}
        >
          {heading}
        </h2>
        <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: '#64748B' }}>
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href={ctaHref} className="btn-primary text-base px-9 py-4">
            {ctaText}
          </Link>
          {showPhone && (
            <a
              href="tel:9056269919"
              className="btn-secondary text-base px-9 py-4 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              905-626-9919
            </a>
          )}
          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-semibold transition-colors duration-200"
              style={{ color: '#60A5FA' }}
            >
              {secondaryText}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        <p className="text-sm" style={{ color: '#334155' }}>
          No contracts. No commitment. Just a clear audit of your marketing opportunities.
        </p>
      </div>
    </section>
  )
}
