import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Toronto | Google Ads, SEO & Local Leads | OMA',
  description:
    'OMA is a Toronto digital marketing agency helping local businesses get more calls, bookings, and customers with Google Ads, SEO, Local SEO, and lead generation. Free audit.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/toronto' },
  keywords: [
    'digital marketing agency Toronto',
    'Google Ads management Toronto',
    'SEO services Toronto',
    'local SEO Toronto',
    'lead generation Toronto',
    'small business marketing Toronto',
    'marketing agency Toronto Ontario',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'OnlineMarketingAgency.ca',
  description: 'Digital marketing agency serving Toronto businesses with Google Ads, SEO, Local SEO, and lead generation services.',
  url: 'https://onlinemarketingagency.ca/toronto',
  telephone: '+19056269919',
  email: 'info@onlinemarketingagency.ca',
  areaServed: { '@type': 'City', name: 'Toronto', containedInPlace: { '@type': 'Province', name: 'Ontario' } },
  priceRange: '$$',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you offer digital marketing services in Toronto?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide Google Ads management, SEO, Local SEO, Google Business Profile optimization, website design, Facebook Ads, and lead generation for Toronto businesses.' } },
    { '@type': 'Question', name: 'How much does Google Ads cost for a Toronto small business?', acceptedAnswer: { '@type': 'Answer', text: 'Most Toronto small businesses start with $500–$2,500/month in ad spend. Management starts from $199/month. Toronto is a competitive market — we will recommend the right budget after a free audit.' } },
    { '@type': 'Question', name: 'How long does SEO take for a Toronto business?', acceptedAnswer: { '@type': 'Answer', text: 'SEO in Toronto typically shows meaningful results in 3–6 months. Toronto is competitive, so a strong technical foundation and consistent content strategy are critical. Local SEO improvements via Google Business Profile can show faster results.' } },
  ],
}

export default function TorontoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LocationPageTemplate
        city="Toronto"
        province="ON"
        slug="toronto"
        population="2.9M+"
        tagline="Google Ads, SEO & Local Leads for Toronto Businesses"
        intro="We help Toronto local businesses get more calls, bookings, and customers through Google Ads, SEO, Local SEO, and conversion-focused websites. Toronto is one of Canada's most competitive markets — you need a strategy that's built to outperform, not just show up."
        marketContext={`Toronto is Canada's largest city and one of its most competitive local markets. Across trades, professional services, healthcare, hospitality, and retail, Toronto businesses are competing for the same local customers on Google Maps, Google Search, and social media every single day.

The businesses that win in Toronto are not necessarily the best at what they do — they are the ones that show up first on Google when a customer is ready to buy. With over 2.9 million residents and thousands of businesses competing for local search visibility, a generic website and inactive Google Business Profile simply will not cut it.

Whether you are a plumber in Scarborough, a dental clinic in North York, a contractor in Etobicoke, or a restaurant in the Entertainment District, your customers are searching for you on Google right now. The question is whether they find you — or your competitor.`}
        whyOMA={`We specialize in lead generation for local service businesses across the Greater Toronto Area. We do not run generic campaigns — every Google Ads campaign, every SEO strategy, and every website we build is designed around one goal: generating calls and bookings for your specific business in your specific Toronto market.

Our Google Ads campaigns are built around the high-intent Toronto keywords your customers actually use — "emergency plumber Toronto," "dentist near me North York," "HVAC repair Scarborough" — not broad terms that eat your budget without delivering leads.

We have helped Toronto-area businesses in trades, healthcare, legal, food service, and professional services build consistent lead pipelines. No lock-in contracts. Full conversion tracking. Monthly reports in plain language.`}
        stats={[
          { value: '2.9M+', label: 'Toronto population' },
          { value: '4.8×', label: 'Average ROAS for Toronto clients' },
          { value: '–41%', label: 'Avg. cost per lead reduction' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        industries={[
          'Plumbers & HVAC',
          'Electricians',
          'Roofing Contractors',
          'Dentists & Dental Clinics',
          'Lawyers & Law Firms',
          'Physiotherapy & Clinics',
          'Restaurants & Cafes',
          'Barbershops & Salons',
          'Renovation Contractors',
          'Real Estate Agents',
          'Cleaning Services',
          'Landscapers',
          'Auto Service',
          'Home Service Companies',
        ]}
        faqs={[
          {
            question: 'Do you offer digital marketing services in Toronto?',
            answer: 'Yes. We provide Google Ads management, SEO, Local SEO, Google Business Profile optimization, website design, Facebook & Instagram Ads, and lead generation for Toronto businesses across all neighbourhoods — Scarborough, North York, Etobicoke, East York, York, and downtown Toronto.',
          },
          {
            question: 'How much does Google Ads management cost for a Toronto business?',
            answer: 'Our Google Ads management starts from $199/month plus your ad spend. For Toronto, most local businesses start with $500–$2,500/month in ad spend depending on their industry and competition level. Toronto is a competitive market — we will recommend the right budget based on your specific service area and goals after your free audit.',
          },
          {
            question: 'How long does SEO take to show results for a Toronto business?',
            answer: 'SEO in Toronto typically shows meaningful ranking improvements in 3–6 months. Toronto is competitive, so a strong technical foundation, keyword-targeted content, and consistent local SEO are all critical. Google Business Profile improvements can show results faster — typically 4–8 weeks.',
          },
          {
            question: 'Can you help my Toronto business rank on Google Maps?',
            answer: 'Yes. We specialize in Local SEO and Google Business Profile optimization for Toronto businesses. We optimize your GBP listing, build local citations, create location-specific content, and earn local links to improve your visibility in the Toronto local map pack.',
          },
          {
            question: 'Do you work with small businesses in Toronto?',
            answer: 'Yes. We specifically work with small and local service businesses in Toronto and the Greater Toronto Area — trades, clinics, barbershops, restaurants, contractors, lawyers, and other local service companies. Our services are priced for small businesses, not large enterprises.',
          },
        ]}
        nearbyAreas={['North York', 'Scarborough', 'Etobicoke', 'East York', 'Mississauga', 'Brampton', 'Vaughan', 'Markham', 'Richmond Hill', 'Ajax']}
      />
    </>
  )
}
