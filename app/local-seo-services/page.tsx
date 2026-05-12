import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Local SEO Services Canada | Rank Higher On Google Maps',
  description:
    'Improve your local rankings, Google Maps visibility, and near me search presence with local SEO services for small businesses across Canada.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/local-seo-services' },
  keywords: [
    'local SEO services',
    'local SEO agency',
    'local SEO for small business',
    'Google Maps SEO',
    'near me SEO',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Services',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Local SEO services for small businesses in Canada. Rank higher for city, neighbourhood, and near me searches on Google.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Local SEO',
}

export default function LocalSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate
        label="Local SEO Agency Canada"
        h1="Local SEO Services For Small Businesses That Need More Local Customers"
        intro="We help local businesses rank higher in Google Maps, the local pack, and city-specific search results. Our local SEO services are designed to increase your visibility when nearby customers search for your services."
        keywords={[
          'local SEO services',
          'local SEO agency Canada',
          'near me SEO',
          'Google Maps SEO',
          'local search optimization',
        ]}
        benefits={[
          {
            title: 'Google Maps Visibility',
            desc: 'Appear in the local map pack for searches made by customers in your service area.',
          },
          {
            title: 'Near Me Search Rankings',
            desc: 'Rank for location-based searches like "plumber near me" or "dentist in Toronto".',
          },
          {
            title: 'More Local Calls',
            desc: 'Higher local rankings mean more customers call your business directly from search results.',
          },
          {
            title: 'City And Neighbourhood Rankings',
            desc: 'Rank for service + city keyword combinations that bring in qualified local customers.',
          },
          {
            title: 'Local Citation Building',
            desc: 'Consistent business listings across Google, Apple Maps, Yelp, and local directories.',
          },
          {
            title: 'Competitive Advantage',
            desc: 'Outrank local competitors who have not invested in a proper local SEO strategy.',
          },
        ]}
        whatWeDoTitle="What Our Local SEO Services Include"
        whatWeDoBody="A complete local SEO strategy designed to increase your visibility in Google Maps and local search results."
        whatWeDo={[
          {
            title: 'Google Business Profile Optimization',
            desc: 'Optimize your GBP profile to increase map pack rankings and call volume.',
          },
          {
            title: 'Local Keyword Research',
            desc: 'Identify city and neighbourhood keywords with the highest local search volume.',
          },
          {
            title: 'Local Citation Building',
            desc: 'Build consistent NAP citations across Google, Apple Maps, Bing, Yelp, and local directories.',
          },
          {
            title: 'On-Page Local SEO',
            desc: 'Optimize location pages, service area pages, and city-specific content on your website.',
          },
          {
            title: 'Review Strategy',
            desc: 'Build a system for generating genuine customer reviews to improve local rankings.',
          },
          {
            title: 'Local Link Building',
            desc: 'Earn backlinks from local business directories, chambers of commerce, and local media.',
          },
          {
            title: 'Competitor Gap Analysis',
            desc: 'Identify what local competitors are doing that you are not, and close the gap.',
          },
          {
            title: 'Location Page Creation',
            desc: 'Build city and service area landing pages designed to rank for local searches.',
          },
          {
            title: 'Monthly Local Rank Tracking',
            desc: 'Track your Google Maps rankings, local keyword positions, and lead volume monthly.',
          },
        ]}
        faqs={[
          {
            question: 'What is local SEO?',
            answer:
              'Local SEO is the process of optimizing your online presence to rank higher in Google Maps, the local pack, and location-based search results. It focuses on city, neighbourhood, and near me searches that indicate buying intent.',
          },
          {
            question: 'How long does local SEO take?',
            answer:
              'Google Business Profile improvements can show results within 4 to 8 weeks. Broader local SEO improvements, like building citations and earning local links, typically show meaningful results in 3 to 6 months.',
          },
          {
            question: 'Do you offer local SEO in Toronto and other Canadian cities?',
            answer:
              'Yes. We provide local SEO services for businesses across Canada, including Toronto, Vancouver, Calgary, Edmonton, Ottawa, and smaller cities and towns throughout the country.',
          },
          {
            question: 'What is the difference between local SEO and Google Business Profile optimization?',
            answer:
              'Google Business Profile optimization is one part of local SEO. Full local SEO also includes citation building, local link building, on-page local optimization, and review strategy to maximize your local search visibility.',
          },
          {
            question: 'Can I rank in multiple cities with local SEO?',
            answer:
              'Yes. With a proper location page and service area strategy, we can help your business rank in multiple cities and service areas, not just your primary location.',
          },
        ]}
        relatedServices={[
          { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Website Design For Small Business', href: '/website-design-for-small-business' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'Local SEO Services' },
        ]}
      />
    </>
  )
}
