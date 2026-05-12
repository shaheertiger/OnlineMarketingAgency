import Link from 'next/link'

interface CTASectionProps {
  heading?: string
  subheading?: string
  ctaText?: string
  ctaHref?: string
  secondaryText?: string
  secondaryHref?: string
}

export default function CTASection({
  heading = 'Ready To Get More Calls, Bookings, And Leads?',
  subheading = 'Tell us about your business and we will show you the biggest opportunities to improve your online visibility and lead generation.',
  ctaText = 'Get Free Marketing Audit',
  ctaHref = '/contact',
  secondaryText = 'View Our Services',
  secondaryHref = '/#services',
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ctaHref} className="btn-outline-white text-base px-8 py-3.5">
            {ctaText}
          </Link>
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
      </div>
    </section>
  )
}
