import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About Our Digital Marketing Agency | OnlineMarketingAgency.ca',
  description:
    'OnlineMarketingAgency.ca is a Canadian digital marketing agency focused on lead generation for local businesses. Google Ads, SEO, Local SEO, and website design — no lock-in contracts.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/about' },
  openGraph: {
    title: 'About OnlineMarketingAgency.ca | Canadian Digital Marketing Agency',
    description: 'Practical, measurable digital marketing for Canadian small businesses. Google Ads, SEO, Local SEO, and website design.',
    url: 'https://onlinemarketingagency.ca/about',
  },
}

// ── Schema: Organization (E-E-A-T) ────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://onlinemarketingagency.ca/#organization',
  name: 'OnlineMarketingAgency.ca',
  alternateName: 'OMA Digital Marketing Canada',
  url: 'https://onlinemarketingagency.ca',
  logo: {
    '@type': 'ImageObject',
    url: 'https://onlinemarketingagency.ca/logo.png',
    width: 200,
    height: 60,
  },
  description:
    'Canadian digital marketing agency specializing in Google Ads, SEO, Local SEO, Google Business Profile optimization, and website design for small businesses.',
  foundingDate: '2020',
  areaServed: { '@type': 'Country', name: 'Canada' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+19056269919',
    email: 'info@onlinemarketingagency.ca',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'CA',
  },
  knowsAbout: [
    'Google Ads', 'Search Engine Optimization', 'Local SEO',
    'Google Business Profile', 'Website Design', 'Lead Generation',
    'Facebook Advertising', 'Instagram Advertising', 'Digital Marketing',
  ],
}

const values = [
  {
    title: 'Focused on lead generation',
    desc: 'We measure our success by the calls, bookings, and form submissions your campaigns generate — not vanity metrics.',
    color: '#3B82F6',
  },
  {
    title: 'Transparent and straightforward',
    desc: 'Clear reporting, honest timelines, and no inflated promises. You always know what we are doing and why.',
    color: '#818CF8',
  },
  {
    title: 'Built for local businesses',
    desc: 'We specialize in Canadian small businesses and local service companies — not enterprise brands or national chains.',
    color: '#34D399',
  },
  {
    title: 'No lock-in contracts',
    desc: 'We earn your business by delivering results every month, not by trapping you in a 12-month agreement.',
    color: '#FBBF24',
  },
  {
    title: 'Channel agnostic',
    desc: 'We recommend the channels that will generate the best return for your specific business — not the ones with the highest margins.',
    color: '#F472B6',
  },
  {
    title: 'Practical, not theoretical',
    desc: 'Every recommendation is based on what actually works for local businesses in competitive Canadian markets.',
    color: '#A78BFA',
  },
]

const services = [
  { label: 'Google Ads Management',                href: '/google-ads-management' },
  { label: 'SEO Services',                         href: '/seo-services' },
  { label: 'Local SEO Services',                   href: '/local-seo-services' },
  { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
  { label: 'Website Design For Small Business',    href: '/website-design-for-small-business' },
  { label: 'Social Media Marketing Agency',        href: '/social-media-marketing-agency' },
  { label: 'Lead Generation Agency',               href: '/lead-generation-agency' },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumb */}
      <div style={{ background: '#060B18' }}>
        <Breadcrumb items={[{ label: 'About' }]} />
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: 'linear-gradient(160deg, #060B18 0%, #0A1025 50%, #060B18 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

        <div className="container-main relative">
          <div className="max-w-3xl">
            <p className="section-label mb-4">About Us</p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold leading-[1.08] mb-6"
              style={{ color: '#F8FAFC' }}
            >
              A Practical Digital Marketing Agency For{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Local Businesses
              </span>
            </h1>
            <p className="text-lg leading-relaxed mb-5" style={{ color: '#94A3B8' }}>
              OnlineMarketingAgency.ca was built for business owners who want clear, effective, and
              measurable marketing. We focus on the channels that drive customer action: Google
              Search, Google Maps, SEO, Google Ads, Meta Ads, landing pages, websites, and
              conversion tracking.
            </p>
            <p className="text-base leading-relaxed mb-9" style={{ color: '#475569' }}>
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

      {/* Values / How We Work */}
      <section
        className="section-pad relative"
        style={{ background: '#070C1A' }}
        aria-labelledby="values-heading"
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)' }}
          aria-hidden="true"
        />
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 id="values-heading" className="section-heading mb-4">How We Work</h2>
            <p className="section-subtext max-w-xl mx-auto">
              The principles that guide every campaign, website, and marketing strategy we build.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(11, 17, 32, 0.7)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${v.color}15`, border: `1px solid ${v.color}25` }}
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: v.color }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#F8FAFC' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with + Services */}
      <section
        className="section-pad relative"
        style={{ background: '#060B18' }}
        aria-labelledby="who-we-work-with-heading"
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.15), transparent)' }}
          aria-hidden="true"
        />
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="who-we-work-with-heading" className="section-heading mb-6">Who We Work With</h2>
              <p className="section-subtext mb-7">
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
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: '#94A3B8' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: 'linear-gradient(135deg, #60A5FA, #818CF8)' }}
                      aria-hidden="true"
                    />
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
                    className="flex items-center justify-between p-4 rounded-2xl transition-all duration-200 group"
                    style={{
                      background: 'rgba(11, 17, 32, 0.6)',
                      border: '1px solid rgba(51, 65, 85, 0.4)',
                    }}
                  >
                    <span className="text-sm font-medium" style={{ color: '#CBD5E1' }}>
                      {s.label}
                    </span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#334155' }}>
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
