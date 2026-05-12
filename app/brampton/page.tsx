import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Brampton | Google Ads, SEO & Local Leads | OMA',
  description:
    'Digital marketing agency Brampton — Google Ads, SEO, Local SEO, and lead generation for Brampton local businesses. Free marketing audit. 905-626-9919.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/brampton' },
  keywords: [
    'digital marketing agency Brampton',
    'Google Ads management Brampton',
    'local SEO Brampton',
  ],
  openGraph: {
    title: 'Digital Marketing Agency Brampton | Google Ads, SEO & Local Leads | OMA',
    description:
      'Digital marketing agency Brampton — Google Ads, SEO, Local SEO, and lead generation for Brampton local businesses. Free marketing audit. 905-626-9919.',
    url: 'https://onlinemarketingagency.ca/brampton',
  },
  twitter: {
    title: 'Digital Marketing Agency Brampton | Google Ads, SEO & Local Leads | OMA',
    description:
      'Digital marketing agency Brampton — Google Ads, SEO, Local SEO, and lead generation for Brampton local businesses. Free marketing audit. 905-626-9919.',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'OnlineMarketingAgency.ca',
  description: 'Digital marketing agency serving Brampton businesses with Google Ads, SEO, Local SEO, and lead generation services.',
  url: 'https://onlinemarketingagency.ca/brampton',
  telephone: '+19056269919',
  email: 'info@onlinemarketingagency.ca',
  areaServed: { '@type': 'City', name: 'Brampton', containedInPlace: { '@type': 'Province', name: 'Ontario' } },
  priceRange: '$$',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you offer digital marketing services in Brampton?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide Google Ads management, SEO, Local SEO, GBP optimization, and lead generation for businesses across Brampton — including Downtown Brampton, Bramalea, Castlemore, Mount Pleasant, and Heart Lake.' } },
    { '@type': 'Question', name: 'Is Google Ads effective for Brampton small businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Google Ads is highly effective for Brampton local businesses in trades, healthcare, professional services, and food service. Brampton has a large and growing population with strong demand for local services — Google Ads gets you in front of those customers immediately.' } },
  ],
}

export default function BramptonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LocationPageTemplate
        city="Brampton"
        province="ON"
        slug="brampton"
        population="660K+"
        tagline="Google Ads, SEO & More Customers for Brampton Local Businesses"
        intro="We help Brampton local businesses get more calls, bookings, and customers through Google Ads, Local SEO, Google Business Profile optimization, and conversion-focused websites. Brampton is one of Ontario's fastest-growing cities — and one of the most underserved when it comes to quality digital marketing."
        marketContext={`Brampton is Ontario's ninth-largest city with a population of over 660,000 — and it is growing rapidly. The city is home to a diverse, entrepreneurial community with thousands of small businesses across trades, healthcare, professional services, food, and retail.

Despite the massive population and business density, many Brampton businesses are still relying on word of mouth or outdated marketing tactics. This means there is a significant opportunity for local businesses that invest in Google Ads and Local SEO now to dominate their category before competitors catch up.

Brampton's diverse population creates specific market dynamics: many residents search in multiple languages, and community-specific recommendations play a strong role in purchase decisions. A well-optimized Google Business Profile with strong reviews is especially powerful in the Brampton market.`}
        whyOMA={`We have helped Brampton businesses in barbershops, dental clinics, HVAC companies, and contracting build consistent lead pipelines through Google Ads and Local SEO — and we understand the specific dynamics of the Brampton market.

Our Google Ads campaigns target the exact Brampton neighbourhoods where your best customers are searching. Our Local SEO strategies get your Google Business Profile ranking in the Brampton map pack for the searches that drive calls and bookings.

We are a local agency that works with local businesses. No offshore teams, no generic templates, no lock-in contracts. Just a clear strategy, transparent reporting, and a focus on calls and bookings — the results that actually matter for your Brampton business.`}
        stats={[
          { value: '660K+', label: 'Brampton population' },
          { value: '4.9★', label: 'Our Google rating' },
          { value: '–41%', label: 'Avg. cost per lead reduction' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        industries={[
          'Barbershops & Salons',
          'Dentists & Dental Clinics',
          'Plumbers & HVAC',
          'Electricians',
          'Restaurants & Cafes',
          'Lawyers & Law Firms',
          'Physiotherapy & Clinics',
          'Renovation Contractors',
          'Cleaning Services',
          'Landscapers',
          'Auto Service',
          'Real Estate Agents',
          'Roofing Contractors',
          'Home Service Companies',
        ]}
        faqs={[
          {
            question: 'Do you offer digital marketing services in Brampton?',
            answer: 'Yes. We provide Google Ads management, SEO, Local SEO, Google Business Profile optimization, website design, Facebook & Instagram Ads, and lead generation for Brampton businesses — including Downtown Brampton, Bramalea, Castlemore, Mount Pleasant, Heart Lake, Springdale, and all Brampton neighbourhoods.',
          },
          {
            question: 'Is Google Ads effective for Brampton local businesses?',
            answer: 'Yes. Google Ads is highly effective for Brampton businesses in trades, dental, healthcare, professional services, and food service. Brampton has a large and growing population with strong demand for local services. Google Ads puts your business in front of customers at the exact moment they are searching for your service.',
          },
          {
            question: 'Can you help my Brampton business rank higher on Google Maps?',
            answer: 'Yes. We specialize in Local SEO and Google Business Profile optimization for Brampton businesses. We optimize your GBP for Brampton-specific searches, build NAP citations across local directories, and create neighbourhood-targeted content to help you rank in the Brampton local map pack.',
          },
          {
            question: 'How much does digital marketing cost for a Brampton small business?',
            answer: 'Our services are priced for small businesses. Google Ads management starts from $199/month plus ad spend. SEO services start from $399/month. Website design starts from $499. We offer a free marketing audit to identify your biggest opportunities and recommend a plan that fits your budget.',
          },
          {
            question: 'Do you work with Brampton barbershops and salons?',
            answer: 'Yes. We have helped Brampton barbershops and salons increase new client bookings through Google Ads and Local SEO. We understand the specific marketing needs of personal care businesses — including review generation, Google Maps optimization, and Instagram advertising — and we build strategies around what actually drives new clients through your door.',
          },
        ]}
        nearbyAreas={['Bramalea', 'Castlemore', 'Mount Pleasant', 'Heart Lake', 'Springdale', 'Mississauga', 'Vaughan', 'Caledon', 'Bolton', 'Georgetown']}
      />
    </>
  )
}
