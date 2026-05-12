import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Lead Generation Agency Canada | More Calls & Bookings for Local Business | OMA',
  description:
    'Build a consistent lead generation system for your local business in Canada. Google Ads, SEO, Local SEO, and conversion tracking combined. Free audit. No contracts.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/lead-generation-agency' },
  keywords: [
    'lead generation agency Canada',
    'lead generation for small business Canada',
    'local lead generation Canada',
    'inbound lead generation Canada',
    'B2C lead generation Canada',
    'more leads for local business',
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
    'Lead generation services for local businesses and small service companies in Canada. Build a full multi-channel system for generating consistent calls, bookings, and customer inquiries.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Lead Generation',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a lead generation agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lead generation agency builds systems that attract potential customers and convert them into calls, bookings, and form submissions for your business. This includes Google Ads, SEO, landing page optimization, conversion tracking, and retargeting — all working together to generate consistent, measurable leads.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you generate leads for local businesses in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use a combination of Google Ads for immediate high-intent leads, Local SEO and Google Business Profile optimization for organic local leads, and retargeting to re-engage warm prospects who visited your site. The right mix depends on your budget, timeline, and market competition.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of local businesses do you generate leads for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with local service businesses across Canada including HVAC companies, plumbers, electricians, roofers, lawyers, dentists, renovation contractors, cleaners, landscapers, real estate agents, and other businesses that rely on a consistent flow of local customer inquiries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you track leads so I know what is working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use Google Analytics 4, Google Ads conversion tracking, and call tracking software to identify exactly which campaigns, keywords, and channels are generating leads. You receive a monthly report showing lead volume by source, cost per lead, and what we optimized.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does lead generation cost for a local business in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our lead generation services start with Google Ads management from $199/month plus ad spend. Full multi-channel growth packages include ads, SEO, and landing page optimization, priced based on scope and channels. The first step is a free marketing audit — we will recommend a plan and budget based on your business.',
      },
    },
  ],
}

export default function LeadGenPage() {
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
        label="Lead Generation Agency · Canada"
        h1="Lead Generation Agency for Local Businesses That Need More Calls and Bookings"
        intro="We build complete lead generation systems for small businesses and local service companies across Canada. That means combining Google Ads for immediate leads, SEO for long-term organic growth, Local SEO for Google Maps visibility, and full conversion tracking — all working together to drive consistent, measurable calls and bookings to your business."
        keywords={[
          'lead generation agency Canada',
          'lead generation for small business Canada',
          'local lead generation Canada',
          'inbound lead generation Canada',
          'more leads for local business',
        ]}
        stats={[
          { value: '3+', label: 'Channels integrated per campaign' },
          { value: '100%', label: 'Lead tracking included' },
          { value: '50+', label: 'Local businesses generating leads' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        benefits={[
          {
            title: 'Consistent Lead Flow',
            desc: 'A multi-channel system that generates leads from Google Ads, SEO, Local SEO, and retargeting simultaneously — not just one source.',
          },
          {
            title: 'Full Funnel Coverage',
            desc: 'Capture leads at every stage: high-intent Google searchers, local Maps browsers, and social media prospects who have never heard of you.',
          },
          {
            title: 'Qualified Leads Only',
            desc: 'Targeting focused on high-intent searches and local audiences with the highest likelihood of becoming paying customers.',
          },
          {
            title: 'Transparent Lead Tracking',
            desc: 'Every lead source tracked and attributed so you know exactly where your calls and bookings are coming from and what each one costs.',
          },
          {
            title: 'Lower Cost Per Lead Over Time',
            desc: 'As organic SEO builds momentum, your cost per lead decreases while volume increases — improving ROI every month.',
          },
          {
            title: 'Scalable System',
            desc: 'A system you can scale by increasing ad spend, adding services, or expanding into new cities as your business grows.',
          },
        ]}
        whatWeDoTitle="How Our Lead Generation System Works"
        whatWeDoBody="We combine multiple channels into one integrated lead generation strategy — built around what actually generates calls and bookings for your business."
        whatWeDo={[
          {
            title: 'Google Ads Campaigns',
            desc: 'High-intent search campaigns targeting customers ready to hire your service right now — the fastest lead source available.',
          },
          {
            title: 'Local SEO & Google Maps',
            desc: 'Optimize your Google Business Profile and local presence to generate consistent organic leads from Google Maps.',
          },
          {
            title: 'SEO Content Strategy',
            desc: 'Create service pages and blog content that rank organically and attract qualified visitors who convert into leads.',
          },
          {
            title: 'Landing Page Optimization',
            desc: 'Design or improve landing pages to maximize the conversion rate from all traffic sources into calls and form fills.',
          },
          {
            title: 'Lead Capture Setup',
            desc: 'Phone click-to-call buttons, contact forms, live chat, and booking widgets that make it easy for customers to reach you.',
          },
          {
            title: 'Full Conversion Tracking',
            desc: 'Track every call, form submission, and lead source in Google Analytics and Google Ads — know what is working.',
          },
          {
            title: 'Meta Ads (Facebook & Instagram)',
            desc: 'Social advertising to build local demand and re-engage website visitors who did not convert.',
          },
          {
            title: 'Retargeting Campaigns',
            desc: 'Re-engage website visitors across Google Display and Facebook with targeted ads after they leave your site.',
          },
          {
            title: 'Monthly Lead Reporting',
            desc: 'Leads by channel, cost per lead, and conversion rate — tracked and clearly reported every month.',
          },
        ]}
        process={[
          {
            step: '01',
            title: 'Audit & Strategy',
            desc: 'We audit your current lead sources, website conversion rate, and Google presence — then build a multi-channel strategy around your highest-opportunity channels.',
          },
          {
            step: '02',
            title: 'Build & Integrate',
            desc: 'We set up Google Ads, optimize your local SEO, improve landing pages, and install full conversion and call tracking across every channel.',
          },
          {
            step: '03',
            title: 'Scale & Report',
            desc: 'We optimize each channel monthly, scale what generates the most leads, and report on leads by source, cost per lead, and overall ROI.',
          },
        ]}
        whoItsFor={[
          'HVAC & Heating Companies',
          'Plumbers',
          'Electricians',
          'Roofing Contractors',
          'Lawyers & Law Firms',
          'Dentists & Clinics',
          'Window & Door Companies',
          'Renovation Contractors',
          'Cleaning Services',
          'Landscapers',
          'Real Estate Agents',
          'Insurance Brokers',
          'Mortgage Brokers',
          'Home Service Companies',
        ]}
        faqs={[
          {
            question: 'What is a lead generation agency?',
            answer:
              'A lead generation agency builds systems that attract potential customers and convert them into calls, bookings, and form submissions for your business. This includes Google Ads, SEO, landing page optimization, conversion tracking, and retargeting — all working together to generate consistent, measurable leads.',
          },
          {
            question: 'How do you generate leads for local businesses in Canada?',
            answer:
              'We use a combination of Google Ads for immediate high-intent leads, Local SEO and Google Business Profile optimization for organic local leads, and retargeting to re-engage warm prospects who visited your site. The right mix depends on your budget, timeline, and market competition.',
          },
          {
            question: 'What types of local businesses do you generate leads for?',
            answer:
              'We work with local service businesses across Canada including HVAC companies, plumbers, electricians, roofers, lawyers, dentists, renovation contractors, cleaners, landscapers, real estate agents, and other businesses that rely on a consistent flow of local customer inquiries.',
          },
          {
            question: 'How do you track leads so I know what is working?',
            answer:
              'We use Google Analytics 4, Google Ads conversion tracking, and call tracking software to identify exactly which campaigns, keywords, and channels are generating leads. You receive a monthly report showing lead volume by source, cost per lead, and what we optimized.',
          },
          {
            question: 'How much does lead generation cost for a local business in Canada?',
            answer:
              'Our lead generation services start with Google Ads management from $199/month plus ad spend. Full multi-channel growth packages include ads, SEO, and landing page optimization, priced based on scope and channels. The first step is a free marketing audit — we will recommend a plan and budget based on your business.',
          },
        ]}
        relatedServices={[
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Website Design', href: '/website-design-for-small-business' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'Lead Generation Agency' },
        ]}
      />
    </>
  )
}
