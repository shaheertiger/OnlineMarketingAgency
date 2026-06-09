import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Locations We Serve | Digital Marketing Across the GTA | OMA',
  description:
    'OnlineMarketingAgency.ca serves local businesses across the Greater Toronto Area — Toronto, Mississauga, Brampton, and Vaughan. Find your city for Google Ads, SEO, and local lead generation.',
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: 'Locations We Serve | Digital Marketing Across the GTA | OMA',
    description:
      'Local digital marketing for businesses across the Greater Toronto Area — Toronto, Mississauga, Brampton, and Vaughan.',
    url: `${SITE_URL}/locations`,
  },
  twitter: {
    title: 'Locations We Serve | Digital Marketing Across the GTA | OMA',
    description:
      'Local digital marketing for businesses across the Greater Toronto Area — Toronto, Mississauga, Brampton, and Vaughan.',
  },
}

const cities = [
  {
    name: 'Toronto',
    slug: 'toronto',
    population: '2.9M+',
    blurb:
      "Canada's largest and most competitive local market. We help Toronto businesses outrank competitors across Scarborough, North York, Etobicoke, and downtown.",
  },
  {
    name: 'Mississauga',
    slug: 'mississauga',
    population: '720K+',
    blurb:
      'A fast-growing business hub. We help Mississauga businesses win local search across Port Credit, Streetsville, Erin Mills, and Meadowvale.',
  },
  {
    name: 'Brampton',
    slug: 'brampton',
    population: '660K+',
    blurb:
      "One of Ontario's fastest-growing cities — and our home base. We help Brampton businesses dominate local search across Bramalea, Mount Pleasant, and Heart Lake.",
  },
  {
    name: 'Vaughan',
    slug: 'vaughan',
    population: '320K+',
    blurb:
      'A thriving suburban market. We help Vaughan businesses generate leads across Woodbridge, Maple, Kleinburg, and the VMC.',
  },
]

const expansionCities = [
  'Caledon',
  'Milton',
  'Oakville',
  'Burlington',
  'Etobicoke',
  'Hamilton',
  'Richmond Hill',
  'Markham',
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Locations Served — OnlineMarketingAgency.ca',
  description: 'Cities across the Greater Toronto Area served by OnlineMarketingAgency.ca.',
  url: `${SITE_URL}/locations`,
  numberOfItems: cities.length,
  itemListElement: cities.map((city, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE_URL}/${city.slug}`,
    name: `Digital Marketing Agency in ${city.name}`,
  })),
}

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Breadcrumb */}
      <div style={{ background: '#0F0F12' }}>
        <Breadcrumb items={[{ label: 'Locations' }]} />
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="locations-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative text-center max-w-3xl mx-auto">
          <p className="section-label-lime mb-5">Where We Work</p>
          <h1
            id="locations-heading"
            className="text-4xl sm:text-5xl font-black leading-[1.06] mb-5"
            style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
          >
            Digital Marketing Across <span style={{ color: '#C8FF00' }}>the Greater Toronto Area</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We are a Brampton-based agency serving local businesses across the GTA with Google Ads, SEO,
            Local SEO, and lead generation. Choose your city below to see how we help businesses in your
            market get more calls, bookings, and customers.
          </p>
        </div>
      </section>

      {/* City grid */}
      <section className="section-pad" style={{ background: '#F7F6F2' }} aria-label="Cities we serve">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 gap-5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group rounded-2xl p-7 block transition-all duration-200"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl font-black" style={{ color: '#0F0F12', letterSpacing: '-0.025em' }}>
                    {city.name}
                  </h2>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: '#F7F6F2', color: '#6B7280' }}>
                    {city.population}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>{city.blurb}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#1D4ED8' }}>
                  Digital marketing in {city.name}
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Expansion areas */}
          <div className="mt-12 text-center">
            <p className="text-sm font-semibold mb-4" style={{ color: '#6B7280' }}>
              We also serve businesses across the wider GTA and surrounding areas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {expansionCities.map((area) => (
                <span
                  key={area}
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{ background: 'white', border: '1px solid rgba(0,0,0,0.08)', color: '#6B7280' }}
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: '#9CA3AF' }}>
              Not listed? <Link href="/contact" className="font-semibold" style={{ color: '#1D4ED8' }}>Ask about your city →</Link>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Grow Your Local Business?"
        subheading="Get a free marketing audit and see exactly where your business is losing leads online — and how to fix it."
      />
    </>
  )
}
