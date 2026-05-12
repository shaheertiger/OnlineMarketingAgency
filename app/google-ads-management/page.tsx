import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Google Ads Management For Local Businesses | OnlineMarketingAgency.ca',
  description:
    'Get more calls, bookings, and leads with Google Ads campaigns built for local businesses and small service companies across Canada.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/google-ads-management' },
  keywords: [
    'Google Ads agency',
    'Google Ads management',
    'Google Ads management for small business',
    'Google Ads for local businesses',
    'PPC management Canada',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Google Ads management for local businesses and small service companies in Canada. Build high-intent Google Search campaigns that generate calls, bookings, and qualified leads.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Google Ads Management',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does Google Ads management cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Google Ads management starts from $199 per month plus your ad spend budget. The total cost depends on your campaign complexity and the number of services or locations you want to advertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can Google Ads generate leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads can start generating leads within days of launching a properly built campaign. Most local businesses see qualified calls and inquiries within the first week once campaigns are live and optimized.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Google Ads for small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We specialize in Google Ads management for small and local service businesses in Canada. We build campaigns around the services that generate the most revenue for your business.',
      },
    },
  ],
}

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate
        label="Google Ads Agency Canada"
        h1="Google Ads Management For Local Businesses That Need More Leads"
        intro="We build and manage Google Search Ads campaigns for local businesses across Canada. Every campaign is built to generate calls, booking requests, quote inquiries, and qualified leads — not just clicks."
        keywords={[
          'Google Ads agency',
          'Google Ads management',
          'PPC management Canada',
          'Google Search Ads for small business',
          'local Google Ads',
        ]}
        benefits={[
          {
            title: 'More Phone Calls',
            desc: 'Campaigns structured around high-intent keywords that drive inbound calls from customers ready to hire.',
          },
          {
            title: 'Lower Cost Per Lead',
            desc: 'Negative keyword management and tight targeting reduce wasted spend on irrelevant clicks.',
          },
          {
            title: 'Faster Results',
            desc: 'Unlike SEO, Google Ads can generate leads within days of launching a well-built campaign.',
          },
          {
            title: 'Full Conversion Tracking',
            desc: 'We track calls, form submissions, and page actions so you know exactly what your ad spend is generating.',
          },
          {
            title: 'Ongoing Optimization',
            desc: 'We review and improve campaigns every month based on actual lead data, not just click metrics.',
          },
          {
            title: 'Transparent Reporting',
            desc: 'Monthly reports show calls generated, leads received, cost per lead, and campaign performance in plain language.',
          },
        ]}
        whatWeDoTitle="What Our Google Ads Management Includes"
        whatWeDoBody="A complete Google Ads management service built to generate leads for your local business."
        whatWeDo={[
          {
            title: 'Keyword Research',
            desc: 'We find the search terms your customers actually use to find businesses like yours.',
          },
          {
            title: 'Campaign Structure',
            desc: 'Properly structured ad groups organized by service, location, and intent.',
          },
          {
            title: 'Ad Copy Writing',
            desc: 'Compelling ads that communicate your value and drive clicks from qualified prospects.',
          },
          {
            title: 'Bid Strategy Management',
            desc: 'Smart bidding strategies that maximize lead volume within your budget.',
          },
          {
            title: 'Negative Keywords',
            desc: 'Ongoing negative keyword management to block irrelevant searches and reduce wasted spend.',
          },
          {
            title: 'Landing Page Guidance',
            desc: 'We review and advise on your landing pages to ensure visitors convert into leads.',
          },
          {
            title: 'Call Tracking Setup',
            desc: 'Dynamic call tracking so we know which ads and keywords generate phone calls.',
          },
          {
            title: 'Conversion Tracking',
            desc: 'Full Google Ads and Google Analytics conversion tracking for forms and calls.',
          },
          {
            title: 'Monthly Reporting',
            desc: 'Plain-language reports showing leads generated, cost per lead, and campaign improvements.',
          },
        ]}
        faqs={[
          {
            question: 'How much does Google Ads management cost?',
            answer:
              'Our Google Ads management starts from $199 per month plus your ad spend budget. The total cost depends on your campaign complexity and the number of services or locations you want to advertise.',
          },
          {
            question: 'How quickly can Google Ads generate leads?',
            answer:
              'Google Ads can start generating leads within days of launching a properly built campaign. Most local businesses see qualified calls and inquiries within the first week once campaigns are live and optimized.',
          },
          {
            question: 'What is a good Google Ads budget for a small local business?',
            answer:
              'For most local service businesses in Canada, a starting budget of $500 to $1,500 per month in ad spend is a practical starting point. We will recommend a specific budget based on your service area, competition, and target cost per lead.',
          },
          {
            question: 'Do you manage Google Ads for service businesses?',
            answer:
              'Yes. We work with contractors, clinics, barbershops, lawyers, dentists, home service companies, restaurants, and other local service businesses across Canada.',
          },
          {
            question: 'Do you handle both setup and ongoing management?',
            answer:
              'Yes. We handle full campaign setup including keyword research, ad copy, campaign structure, and tracking setup. We then manage and optimize campaigns on an ongoing monthly basis.',
          },
        ]}
        relatedServices={[
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'Lead Generation Agency', href: '/lead-generation-agency' },
          { label: 'Website Design', href: '/website-design-for-small-business' },
        ]}
      />
    </>
  )
}
