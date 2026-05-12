import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Lead Generation Agency For Local Businesses | Canada',
  description:
    'Lead generation services for small businesses and local service companies in Canada. Get more calls, bookings, and customer inquiries through a full-funnel lead generation system.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/lead-generation-agency' },
  keywords: [
    'lead generation agency',
    'lead generation for small business',
    'local lead generation',
    'lead generation services Canada',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lead Generation Agency',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Lead generation services for local businesses and small service companies in Canada. Build a full system for generating calls, bookings, and customer inquiries.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Lead Generation',
}

export default function LeadGenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate
        label="Lead Generation Agency Canada"
        h1="Lead Generation Services For Local Businesses That Need More Customers"
        intro="We build complete lead generation systems for small businesses and local service companies across Canada. This means combining Google Ads, SEO, Local SEO, Google Business Profile optimization, landing pages, and conversion tracking into one unified system that drives consistent, measurable leads."
        keywords={[
          'lead generation agency Canada',
          'lead generation for small business',
          'local lead generation',
          'inbound lead generation',
          'B2C lead generation',
        ]}
        benefits={[
          {
            title: 'Consistent Lead Flow',
            desc: 'A multi-channel system that generates leads from Google Ads, SEO, and Local SEO simultaneously.',
          },
          {
            title: 'Full Funnel Coverage',
            desc: 'Capture leads at every stage: active searchers, local browsers, and social media prospects.',
          },
          {
            title: 'Qualified Leads Only',
            desc: 'Targeting focused on high-intent searches and local audiences most likely to convert.',
          },
          {
            title: 'Lower Cost Per Lead',
            desc: 'As organic SEO builds over time, your cost per lead decreases while volume increases.',
          },
          {
            title: 'Transparent Tracking',
            desc: 'Every lead source tracked and attributed so you know what is working and what is not.',
          },
          {
            title: 'Scalable Growth',
            desc: 'A system you can scale by increasing ad spend, adding services, or expanding locations.',
          },
        ]}
        whatWeDoTitle="How Our Lead Generation System Works"
        whatWeDoBody="We combine multiple channels into one integrated lead generation strategy for your business."
        whatWeDo={[
          {
            title: 'Google Ads Setup',
            desc: 'Build high-intent search campaigns targeting customers ready to hire your service.',
          },
          {
            title: 'Local SEO',
            desc: 'Optimize your Google Business Profile and local presence to generate organic local leads.',
          },
          {
            title: 'SEO Content',
            desc: 'Create service pages and blog content that rank organically and attract qualified visitors.',
          },
          {
            title: 'Landing Page Optimization',
            desc: 'Design or improve landing pages to maximize conversion rate from all traffic sources.',
          },
          {
            title: 'Lead Capture Setup',
            desc: 'Contact forms, click-to-call buttons, and booking widgets that make it easy to contact you.',
          },
          {
            title: 'Conversion Tracking',
            desc: 'Track every call, form submission, and lead source in Google Analytics and Google Ads.',
          },
          {
            title: 'Retargeting',
            desc: 'Re-engage website visitors who did not convert on their first visit.',
          },
          {
            title: 'Lead Response System',
            desc: 'Set up automated follow-up so no lead falls through the cracks.',
          },
          {
            title: 'Monthly Reporting',
            desc: 'Track leads by channel, cost per lead, and conversion rate — reported monthly.',
          },
        ]}
        faqs={[
          {
            question: 'What is a lead generation agency?',
            answer:
              'A lead generation agency builds systems that attract potential customers and convert them into inquiries for your business. This includes Google Ads, SEO, landing pages, conversion tracking, and retargeting — all working together to generate consistent calls, bookings, and form submissions.',
          },
          {
            question: 'How do you generate leads for local businesses?',
            answer:
              'We use a combination of Google Ads for immediate lead generation, Local SEO and Google Business Profile optimization for organic local leads, and retargeting to re-engage warm prospects. The right mix depends on your budget, timeline, and market.',
          },
          {
            question: 'What types of businesses do you generate leads for?',
            answer:
              'We work with local service businesses including contractors, clinics, barbershops, restaurants, lawyers, dentists, real estate agents, home service companies, and auto businesses across Canada.',
          },
          {
            question: 'How do you track leads?',
            answer:
              'We use Google Analytics, Google Ads conversion tracking, and call tracking software to identify exactly which campaigns, keywords, and channels are generating leads. You receive a monthly report showing lead volume, cost per lead, and source breakdown.',
          },
          {
            question: 'How much does lead generation cost?',
            answer:
              'Our lead generation packages are priced based on the channels involved and the scope of your campaign. We offer Google Ads management from $199/month, and full growth system packages at custom pricing. The first step is a free marketing audit.',
          },
        ]}
        relatedServices={[
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Website Design For Small Business', href: '/website-design-for-small-business' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'Lead Generation Agency' },
        ]}
      />
    </>
  )
}
