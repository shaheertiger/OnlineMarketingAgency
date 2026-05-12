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
    <section className="section-pad bg-blue-600">
      <div className="container-main text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl mx-auto">
          {heading}
        </h2>
        <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href={ctaHref} className="btn-outline-white text-base px-8 py-3.5">
            {ctaText}
          </Link>
          {showPhone && (
            <a
              href="tel:9056269919"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-blue-100 hover:text-white transition-colors"
            >
              {secondaryText}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        <p className="text-sm text-blue-200">
          No contracts. No commitment. Just a clear audit of your marketing opportunities.
        </p>
      </div>
    </section>
  )
}
