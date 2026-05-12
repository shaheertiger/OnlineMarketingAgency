import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Vaughan | Google Ads, SEO & Local Leads | OMA',
  description:
    'OMA helps Vaughan local businesses get more calls, bookings, and customers with Google Ads, SEO, Local SEO, and lead generation. Free marketing audit. 905-626-9919.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/vaughan' },
  keywords: [
    'digital marketing agency Vaughan',
    'Google Ads management Vaughan',
    'SEO services Vaughan',
    'local SEO Vaughan',
    'lead generation Vaughan',
    'small business marketing Vaughan',
    'marketing agency Vaughan Ontario',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'OnlineMarketingAgency.ca',
  description: 'Digital marketing agency serving Vaughan businesses with Google Ads, SEO, Local SEO, and lead generation services.',
  url: 'https://onlinemarketingagency.ca/vaughan',
  telephone: '+19056269919',
  email: 'info@onlinemarketingagency.ca',
  areaServed: { '@type': 'City', name: 'Vaughan', containedInPlace: { '@type': 'Province', name: 'Ontario' } },
  priceRange: '$$',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you offer digital marketing services in Vaughan?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide Google Ads, SEO, Local SEO, GBP optimization, website design, and lead generation for Vaughan businesses across Woodbridge, Maple, Kleinburg, Concord, and all Vaughan communities.' } },
    { '@type': 'Question', name: 'Is Vaughan a competitive market for Google Ads?', acceptedAnswer: { '@type': 'Answer', text: 'Vaughan is moderately competitive. Trades, dental, and home services are the most competitive categories. Because Vaughan is growing rapidly and many businesses have not yet invested seriously in digital marketing, there is still strong opportunity for businesses that act now.' } },
  ],
}

export default function VaughanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LocationPageTemplate
        city="Vaughan"
        province="ON"
        slug="vaughan"
        population="340K+"
        tagline="Google Ads, SEO & Local Leads for Vaughan Businesses"
        intro="We help Vaughan local businesses generate more calls, bookings, and customers through Google Ads, Local SEO, Google Business Profile optimization, and conversion-focused websites. From Woodbridge to Maple, Kleinburg to Concord — if your customers are in Vaughan, we can help them find you first."
        marketContext={`Vaughan is one of York Region's fastest-growing cities, with a population of over 340,000 and rapid commercial development concentrated around VMC (Vaughan Metropolitan Centre), Woodbridge, Maple, and the Highway 400 corridor.

The Vaughan market is unique: it is home to a high concentration of home service businesses (HVAC, plumbing, electrical, landscaping, renovation), professional services (legal, financial, medical), and a rapidly expanding restaurant and hospitality sector serving the city's growing suburban communities.

As Vaughan continues to grow, so does competition in local search. Businesses that establish strong Google Maps and Google Search visibility now — before the market matures — will enjoy a significant long-term advantage over competitors that wait.`}
        whyOMA={`We understand the Vaughan and York Region market. We have worked with Vaughan-area trades businesses, dental clinics, and professional services to build lead pipelines through Google Ads and Local SEO that generate consistent calls and bookings year-round.

Our Google Ads campaigns for Vaughan businesses are structured around high-intent local keywords — "HVAC Vaughan," "contractor Woodbridge," "dentist Maple" — not broad GTA terms that send your budget to irrelevant areas. Our Local SEO strategies build your presence specifically in the Vaughan map pack, not just general Ontario rankings.

We keep things simple: no lock-in contracts, no confusing reports, no offshore teams. Just a focused strategy, regular optimization, and transparent monthly reporting on calls and leads generated.`}
        stats={[
          { value: '340K+', label: 'Vaughan population' },
          { value: '4.8×', label: 'Average ROAS for clients' },
          { value: '1–7', label: 'Days to first Google Ads leads' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        industries={[
          'HVAC & Heating Companies',
          'Plumbers',
          'Electricians',
          'Roofing Contractors',
          'Dentists & Dental Clinics',
          'Lawyers & Law Firms',
          'Landscapers',
          'Renovation Contractors',
          'Restaurants & Cafes',
          'Real Estate Agents',
          'Barbershops & Salons',
          'Cleaning Services',
          'Home Service Companies',
          'Auto Service',
        ]}
        faqs={[
          {
            question: 'Do you offer digital marketing services in Vaughan?',
            answer: 'Yes. We provide Google Ads management, SEO, Local SEO, Google Business Profile optimization, website design, Facebook & Instagram Ads, and lead generation for businesses across Vaughan — including Woodbridge, Maple, Kleinburg, Concord, Vellore, VMC, and all Vaughan communities.',
          },
          {
            question: 'Is Vaughan a competitive market for Google Ads?',
            answer: 'Vaughan is moderately competitive. Trades (HVAC, plumbing, roofing), dental, and home services are the most competitive categories. Because Vaughan is growing rapidly and many businesses have not yet invested seriously in digital marketing, there is still significant opportunity for businesses that establish Google visibility now.',
          },
          {
            question: 'Can you help a Vaughan home service company get more leads?',
            answer: 'Yes. Home service businesses — HVAC, plumbing, electrical, landscaping, roofing, renovation — are among the best fits for our Google Ads and Local SEO services. We build campaigns around the high-intent searches your Vaughan customers make when they need your service urgently, and we track every call and lead generated.',
          },
          {
            question: 'How long does local SEO take for a Vaughan business?',
            answer: 'Google Business Profile improvements for Vaughan businesses can show meaningful results in 4–8 weeks. Broader local SEO — citation building, local link building, location page content — typically shows ranking improvements in 3–6 months. We report monthly on map pack rankings, call volume, and organic traffic.',
          },
          {
            question: 'Do you serve businesses in Woodbridge, Maple, and Kleinburg?',
            answer: 'Yes. We serve businesses across all Vaughan communities, including Woodbridge, Maple, Kleinburg, Concord, Vellore Village, and the VMC area. We tailor our Google Ads and Local SEO strategies to the specific neighbourhood and customer base of your business.',
          },
        ]}
        nearbyAreas={['Woodbridge', 'Maple', 'Kleinburg', 'Concord', 'Vellore', 'Richmond Hill', 'King City', 'Brampton', 'Toronto (North York)', 'Caledon']}
      />
    </>
  )
}
