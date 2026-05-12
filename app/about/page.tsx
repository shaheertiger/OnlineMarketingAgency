import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About | OnlineMarketingAgency.ca',
  description:
    'OnlineMarketingAgency.ca is a digital marketing agency for Canadian local businesses. We help small businesses grow with Google Ads, SEO, Local SEO, and lead generation.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/about' },
}

const values = [
  {
    title: 'Focused on lead generation',
    desc: 'We measure our success by the calls, bookings, and form submissions your campaigns generate — not vanity metrics.',
  },
  {
    title: 'Transparent and straightforward',
    desc: 'Clear reporting, honest timelines, and no inflated promises. You always know what we are doing and why.',
  },
  {
    title: 'Built for local businesses',
    desc: 'We specialize in Canadian small businesses and local service companies — not enterprise brands or national chains.',
  },
  {
    title: 'No lock-in contracts',
    desc: 'We earn your business by delivering results every month, not by trapping you in a 12-month agreement.',
  },
  {
    title: 'Channel agnostic',
    desc: 'We recommend the channels that will generate the best return for your specific business — not the ones with the highest margins.',
  },
  {
    title: 'Practical, not theoretical',
    desc: 'Every recommendation is based on what actually works for local businesses in competitive Canadian markets.',
  },
]

const services = [
  { label: 'Google Ads Management', href: '/google-ads-management' },
  { label: 'SEO Services', href: '/seo-services' },
  { label: 'Local SEO Services', href: '/local-seo-services' },
  { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
  { label: 'Website Design For Small Business', href: '/website-design-for-small-business' },
  { label: 'Social Media Marketing Agency', href: '/social-media-marketing-agency' },
  { label: 'Lead Generation Agency', href: '/lead-generation-agency' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 section-pad">
        <div className="container-main">
          <div className="max-w-3xl">
            <p className="section-label mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              A Practical Online Marketing Agency For Local Businesses
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              OnlineMarketingAgency.ca was built for business owners who want clear, effective, and
              measurable marketing. We focus on the channels that drive customer action: Google
              Search, Google Maps, SEO, Google Ads, Meta Ads, landing pages, websites, and
              conversion tracking.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We work with small businesses across Canada — from single-location service companies to
              multi-location franchises. If your goal is more calls, bookings, and customers, we
              build the system to get you there.
            </p>
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Get Free Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">How We Work</h2>
            <p className="section-subtext max-w-xl mx-auto">
              The principles that guide every campaign, website, and marketing strategy we build.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section-pad bg-slate-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">Who We Work With</h2>
              <p className="section-subtext mb-6">
                We work with local businesses and service companies across Canada that rely on their
                online presence to attract new customers. Our clients range from solo operators to
                businesses with multiple locations.
              </p>
              <ul className="space-y-3">
                {[
                  'Barbershops and salons',
                  'Medical and dental clinics',
                  'Contractors and home service companies',
                  'Restaurants and food businesses',
                  'Law firms and legal practices',
                  'Real estate agents and brokerages',
                  'Auto repair and auto service businesses',
                  'Local retail stores',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-heading mb-6">Our Services</h2>
              <div className="space-y-3">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group"
                  >
                    <span className="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                      {s.label}
                    </span>
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
