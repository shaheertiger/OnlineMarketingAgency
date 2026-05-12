import Link from 'next/link'

const guarantees = [
  {
    title: 'No Lock-In Contracts',
    desc: 'Cancel anytime. We earn your business every month by delivering results, not by trapping you in a 12-month agreement.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Free Audit Before You Spend',
    desc: 'We review your website, ads, SEO, and competitors before you pay a dollar. You will know exactly what we plan to do and why.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Plain-Language Monthly Reports',
    desc: 'No vanity metrics. Every report shows calls generated, leads received, cost per lead, and what we are doing next month.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Results In 30 Days Or We Fix It',
    desc: 'Google Ads campaigns go live within 7 days. If you are not seeing leads within 30 days, we audit and rebuild at no charge.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function RiskReversal() {
  return (
    <section className="section-pad bg-slate-900">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4">
            Our Commitment
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl mx-auto">
            Zero Risk. Real Results. No Fluff.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Every agency promises results. Here is what we actually back them with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g) => (
            <div key={g.title} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-5">
                {g.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{g.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Claim Your Free Audit
          </Link>
          <p className="text-sm text-slate-500 mt-3">
            No commitment. No pressure. Just a clear picture of your growth opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
