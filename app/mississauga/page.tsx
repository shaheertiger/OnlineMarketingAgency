import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Mississauga | Google Ads, SEO & Local Leads | OMA',
  description:
    'Digital marketing agency Mississauga — Google Ads, SEO, Local SEO, and lead generation for Mississauga local businesses. Free marketing audit. 905-626-9919.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/mississauga' },
  keywords: [
    'digital marketing agency Mississauga',
    'Google Ads management Mississauga',
    'local SEO Mississauga',
  ],
  openGraph: {
    title: 'Digital Marketing Agency Mississauga | Google Ads, SEO & Local Leads | OMA',
    description:
      'Digital marketing agency Mississauga — Google Ads, SEO, Local SEO, and lead generation for Mississauga local businesses. Free marketing audit. 905-626-9919.',
    url: 'https://onlinemarketingagency.ca/mississauga',
  },
  twitter: {
    title: 'Digital Marketing Agency Mississauga | Google Ads, SEO & Local Leads | OMA',
    description:
      'Digital marketing agency Mississauga — Google Ads, SEO, Local SEO, and lead generation for Mississauga local businesses. Free marketing audit. 905-626-9919.',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'OnlineMarketingAgency.ca',
  description: 'Digital marketing agency serving Mississauga businesses with Google Ads, SEO, Local SEO, and lead generation services.',
  url: 'https://onlinemarketingagency.ca/mississauga',
  telephone: '+19056269919',
  email: 'info@onlinemarketingagency.ca',
  areaServed: { '@type': 'City', name: 'Mississauga', containedInPlace: { '@type': 'Province', name: 'Ontario' } },
  priceRange: '$$',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you offer digital marketing services in Mississauga?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide Google Ads management, SEO, Local SEO, Google Business Profile optimization, website design, and lead generation for Mississauga businesses across Streetsville, Port Credit, Erin Mills, Meadowvale, and all Mississauga neighbourhoods.' } },
    { '@type': 'Question', name: 'How competitive is Google Ads in Mississauga?', acceptedAnswer: { '@type': 'Answer', text: 'Mississauga is moderately competitive for most service industries. Trades, healthcare, and legal are the most competitive categories. We will audit your market and recommend the right budget and strategy.' } },
  ],
}

export default function MississaugaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LocationPageTemplate
        city="Mississauga"
        province="ON"
        slug="mississauga"
        population="720K+"
        tagline="Google Ads, SEO & More Leads for Mississauga Businesses"
        intro="We help Mississauga local businesses generate more calls, bookings, and customers through Google Ads, SEO, Local SEO, and Google Business Profile optimization. Mississauga is one of Ontario's fastest-growing cities — your competitors are already investing in digital marketing."
        marketContext={`Mississauga is Ontario's third-largest city and home to over 720,000 residents across diverse neighbourhoods — from Port Credit and Lakeview along the waterfront to Streetsville, Erin Mills, Meadowvale, and Malton in the north and west.

The Mississauga market is growing fast. New residential developments, a booming business corridor along Hurontario Street, and close proximity to Toronto make it one of the most opportunity-rich markets in the GTA for local service businesses.

The challenge: local businesses in Mississauga are competing not just against each other, but against Toronto-based businesses that show up in Mississauga search results. Without a focused local SEO and Google Ads strategy, Mississauga businesses regularly lose customers to competitors in neighbouring cities.`}
        whyOMA={`We understand the Mississauga local market. We build Google Ads campaigns that target the specific Mississauga neighbourhoods where your customers are searching — not broad GTA campaigns that waste budget on irrelevant areas.

Our Local SEO strategies are designed to rank Mississauga businesses in Google Maps for city-specific searches like "dentist Mississauga," "plumber Port Credit," and "HVAC Erin Mills." We build location-specific content, optimize your Google Business Profile, and earn local citations that strengthen your Mississauga presence.

We have worked with Mississauga businesses in healthcare, trades, food service, professional services, and retail. No lock-in contracts. Transparent monthly reporting. Results focused on calls and bookings — not clicks.`}
        stats={[
          { value: '720K+', label: 'Mississauga population' },
          { value: '#1', label: 'Map pack positions earned' },
          { value: '–41%', label: 'Avg. cost per lead reduction' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        industries={[
          'Dentists & Dental Clinics',
          'Physiotherapy & Clinics',
          'Plumbers & HVAC',
          'Electricians',
          'Lawyers & Law Firms',
          'Restaurants & Cafes',
          'Barbershops & Salons',
          'Renovation Contractors',
          'Real Estate Agents',
          'Cleaning Services',
          'Landscapers',
          'Auto Service',
          'Roofing Contractors',
          'Home Service Companies',
        ]}
        faqs={[
          {
            question: 'Do you offer digital marketing services in Mississauga?',
            answer: 'Yes. We provide Google Ads management, SEO, Local SEO, Google Business Profile optimization, website design, Facebook & Instagram Ads, and lead generation for businesses across Mississauga — including Port Credit, Streetsville, Erin Mills, Meadowvale, Malton, City Centre, and all other Mississauga neighbourhoods.',
          },
          {
            question: 'How competitive is digital marketing in Mississauga?',
            answer: 'Mississauga is moderately to highly competitive depending on the industry. Dental, HVAC, plumbing, and legal are among the most competitive categories. Because Mississauga businesses compete against both local and Toronto-based companies in search results, a focused local SEO and Google Ads strategy is important to capture your city-specific market.',
          },
          {
            question: 'Can you help my Mississauga business rank on Google Maps?',
            answer: 'Yes. We specialize in Local SEO and Google Business Profile optimization for Mississauga businesses. We optimize your GBP listing for Mississauga-specific categories, build local citations, and create neighbourhood-targeted content to improve your visibility in the Mississauga local map pack.',
          },
          {
            question: 'How long does SEO take for a Mississauga business?',
            answer: 'SEO typically shows meaningful results for Mississauga businesses in 3–6 months. Google Business Profile improvements can show results in 4–8 weeks. We track and report on rankings, traffic, and leads monthly so you can see what is improving.',
          },
          {
            question: 'Do you work with small businesses in Mississauga?',
            answer: 'Yes. We work specifically with small and local service businesses in Mississauga and the broader GTA. Our pricing is designed for small businesses — not large enterprises. The first step is a free marketing audit where we review your website, Google presence, and biggest growth opportunities.',
          },
        ]}
        nearbyAreas={['Port Credit', 'Streetsville', 'Erin Mills', 'Meadowvale', 'Malton', 'Toronto', 'Brampton', 'Oakville', 'Burlington', 'Milton']}
      />
    </>
  )
}
