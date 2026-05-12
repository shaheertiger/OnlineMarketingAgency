import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Google Business Profile Optimization | Google Maps Ranking Service',
  description:
    'Improve your Google Maps visibility, call volume, and local search rankings with professional Google Business Profile optimization for small businesses.',
  alternates: {
    canonical: 'https://onlinemarketingagency.ca/google-business-profile-optimization',
  },
  keywords: [
    'Google Business Profile optimization',
    'Google Business Profile management',
    'Google Maps ranking service',
    'optimize Google Business Profile',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Business Profile Optimization',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Google Business Profile optimization and management for small businesses. Improve your Google Maps presence, call volume, and local visibility.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Google Business Profile Optimization',
}

export default function GBPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate
        label="Google Business Profile Management"
        h1="Google Business Profile Optimization For Local Businesses"
        intro="Your Google Business Profile is often the first thing a potential customer sees when they search for your business or a business like yours. We optimize and manage your GBP to increase your visibility in Google Maps, drive more calls, and generate more direction requests and website clicks."
        keywords={[
          'Google Business Profile optimization',
          'Google Business Profile management',
          'Google Maps ranking',
          'optimize Google Business Profile',
          'Google Maps SEO Canada',
        ]}
        benefits={[
          {
            title: 'Higher Google Maps Rankings',
            desc: 'Appear in the local 3-pack for searches made by nearby customers.',
          },
          {
            title: 'More Direct Calls',
            desc: 'An optimized profile drives customers to call you directly from the search results page.',
          },
          {
            title: 'More Direction Requests',
            desc: 'Customers easily find and navigate to your physical location.',
          },
          {
            title: 'Better First Impression',
            desc: 'Professional photos, complete information, and active posts build immediate trust.',
          },
          {
            title: 'Review Management',
            desc: 'A strategy for earning reviews that improve local rankings and customer confidence.',
          },
          {
            title: 'Competitive Positioning',
            desc: 'Stand out from competitors who have incomplete or unoptimized Google profiles.',
          },
        ]}
        whatWeDoTitle="What Our Google Business Profile Service Includes"
        whatWeDoBody="A complete optimization and management service for your Google Business Profile."
        whatWeDo={[
          {
            title: 'Profile Audit',
            desc: 'Review your current profile for completeness, accuracy, and ranking opportunities.',
          },
          {
            title: 'Category Optimization',
            desc: 'Select the right primary and secondary categories to maximize local search visibility.',
          },
          {
            title: 'Business Description',
            desc: 'Write a keyword-rich, accurate description that communicates your services.',
          },
          {
            title: 'Service List Optimization',
            desc: 'Add all relevant services with accurate descriptions and pricing where applicable.',
          },
          {
            title: 'Photo Strategy',
            desc: 'Guidance on the types of photos that improve trust and engagement on your profile.',
          },
          {
            title: 'Google Posts',
            desc: 'Regular updates, offers, and announcements published to your profile monthly.',
          },
          {
            title: 'Q and A Management',
            desc: 'Monitor and answer questions on your profile to inform customers and improve trust.',
          },
          {
            title: 'Review Strategy',
            desc: 'A systematic approach to generating genuine five-star reviews from happy customers.',
          },
          {
            title: 'Monthly Reporting',
            desc: 'Track calls, direction requests, website clicks, and ranking positions from your GBP.',
          },
        ]}
        faqs={[
          {
            question: 'What is Google Business Profile optimization?',
            answer:
              'Google Business Profile optimization is the process of improving your GBP listing to rank higher in Google Maps and local search results. It includes completing your profile, selecting the right categories, writing service descriptions, adding photos, getting reviews, and posting regular updates.',
          },
          {
            question: 'How does Google Business Profile affect local rankings?',
            answer:
              'Google uses your Business Profile signals — completeness, relevance, review quality, review quantity, and engagement — as ranking factors for local search. An optimized and active profile consistently outranks incomplete or neglected profiles.',
          },
          {
            question: 'How long does Google Business Profile optimization take to show results?',
            answer:
              'Many businesses see improvements in Google Maps visibility within 4 to 8 weeks of optimizing their profile. Review building and ongoing post activity continue to improve rankings over time.',
          },
          {
            question: 'Do you manage our Google Business Profile ongoing?',
            answer:
              'Yes. We offer ongoing Google Business Profile management that includes monthly posts, review monitoring, Q and A responses, and performance reporting.',
          },
          {
            question: 'Can you help get more Google reviews?',
            answer:
              'Yes. We set up a review generation strategy that makes it easy for satisfied customers to leave reviews. More authentic reviews with keyword-rich content significantly improve local rankings.',
          },
        ]}
        relatedServices={[
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Google Ads Management', href: '/google-ads-management' },
        ]}
      />
    </>
  )
}
