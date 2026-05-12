import Link from 'next/link'

interface CTASectionProps {
  heading?: string
  subheading?: string
}

export default function CTASection({
  heading = 'Ready to Turn Your Website and Ads Into Real Leads?',
  subheading = 'Request a free marketing audit and we will show you exactly where your biggest growth opportunities are.',
}: CTASectionProps) {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: '#0A0E1C' }}
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

      {/* Lime glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[280px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(200,255,0,0.11) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative text-center">
        <p className="section-label-lime mb-5">Get Started</p>

        <h2
          id="cta-heading"
          className="text-3xl md:text-5xl font-black mb-5 max-w-3xl mx-auto leading-[1.04]"
          style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
        >
          {heading}
        </h2>

        <p className="text-lg mb-9 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Get Free Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a href="tel:+19056269919" className="btn-outline-white text-base px-8 py-4">
            Call 905-626-9919
          </a>
        </div>

        <p className="text-xs mt-6" style={{ color: 'rgba(255,255,255,0.22)' }}>
          No commitment required. Free audit covers your website, Google rankings, ads, and GBP.
        </p>
      </div>
    </section>
  )
}
