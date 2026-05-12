import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Google Ads Management Canada | Google Ads Agency for Small Business | OMA',
  description:
    'Get more calls and bookings with Google Ads management built for Canadian local businesses. No lock-in contracts. Campaigns from $199/month + ad spend. Free audit.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/google-ads-management' },
  keywords: [
    'Google Ads management Canada',
    'Google Ads agency for small business',
    'Google Ads management',
    'PPC management Canada',
    'Google Ads agency Canada',
    'Google Search Ads for local business',
    'pay per click management Canada',
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
      name: 'How much does Google Ads management cost in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Google Ads management starts from $199 per month plus your ad spend budget. Most local businesses in Canada start with $500–$1,500 per month in ad spend. We recommend a budget based on your service area, competition, and target cost per lead after your free audit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can Google Ads generate leads for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads can start generating calls and leads within 1–7 days of launching a properly built campaign. Most local businesses see qualified calls and inquiries within the first week. Lead volume grows as we optimize the campaign over the first 30–60 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good Google Ads budget for a small local business in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most local service businesses in Canada, $500–$1,500 per month in ad spend is a practical starting point. Competitive trades like HVAC, roofing, and legal services may require $2,000–$5,000+ to compete effectively. We will recommend a specific budget after reviewing your market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Google Ads for service-based businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We specialize in Google Ads management for local service businesses across Canada — contractors, clinics, barbershops, lawyers, dentists, home service companies, restaurants, and more. Our campaigns are built specifically for local lead generation, not e-commerce or brand awareness.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in your Google Ads management service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our service includes full campaign setup (keyword research, ad copywriting, campaign structure, call tracking, conversion tracking) plus ongoing monthly management and optimization. We handle everything from setup to reporting so you can focus on running your business.',
      },
    },
  ],
}

const bodyContent = (
  <div className="space-y-6 text-base leading-relaxed" style={{ color: '#374151' }}>
    <h2 className="text-2xl font-black" style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}>
      Why Google Ads Is the Fastest Way to Generate Local Leads
    </h2>
    <p>
      For most local service businesses, the fastest route to more customers is Google Search Ads. Unlike{' '}
      <Link href="/seo-services" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        SEO services
      </Link>{' '}
      — which build momentum over months — Google Ads puts your business at the very top of search results
      on day one. When someone in your city searches "emergency plumber near me" or "best HVAC company
      Toronto," your ad appears before any organic result. That positioning directly translates into more
      calls, more bookings, and more revenue.
    </p>
    <p>
      The key to profitable Google Ads is not just running ads — it is running the right ads to the right
      people with the right budget allocation. Many small businesses waste thousands on Google Ads because
      their campaigns are poorly structured, targeting too broadly, or lacking proper conversion tracking.
      Without knowing which keywords are actually generating calls versus just clicks, you are flying blind.
      Our approach to Google Ads management is built entirely around measurable lead generation outcomes,
      not vanity metrics like impressions or click-through rates.
    </p>
    <p>
      We build every campaign around your specific service area, your most profitable services, and the
      search terms your ideal customers actually use. We implement call tracking from day one so you can
      hear which ads are generating inbound calls. We set up conversion tracking so Google's algorithm can
      learn and optimize toward the actions that matter — not just traffic. And we review search term
      reports weekly to add negative keywords that stop your budget being burned on irrelevant searches.
    </p>
    <p>
      Google Ads works best as part of an integrated growth strategy. Many of our clients combine Google
      Ads for immediate lead flow with{' '}
      <Link href="/local-seo-services" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        local SEO services
      </Link>{' '}
      to build long-term organic visibility. This dual-channel approach means you are generating leads
      today through paid search while building a sustainable organic presence that reduces your dependence
      on ad spend over time. For businesses that want maximum lead volume from multiple channels, our{' '}
      <Link href="/lead-generation-agency" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        lead generation service
      </Link>{' '}
      combines Google Ads, SEO, and landing page optimization into one unified growth system.
    </p>
    <p>
      Our Google Ads management is built for Canadian local service businesses. We understand the
      competitive landscape in cities like Toronto, Vancouver, Calgary, Mississauga, and Edmonton. We know
      what ad budgets are realistic for your market, what cost per lead to expect, and how to structure
      campaigns that outperform national competitors who are not locally focused. Whether you are a plumber
      in Hamilton, a dentist in Burnaby, or an HVAC company in Edmonton, we build a campaign strategy
      matched to your market and your budget.
    </p>
  </div>
)

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
        label="Google Ads Agency · Canada"
        h1="Google Ads Management for Canadian Local Businesses That Need More Leads"
        intro="We build and manage Google Search Ads campaigns for local businesses across Canada. Every campaign is built around high-intent keywords — targeting customers who are actively searching for your service right now. The goal is simple: more calls, bookings, and qualified leads, at the lowest possible cost per lead."
        keywords={[
          'Google Ads management Canada',
          'Google Ads agency for small business',
          'PPC management Canada',
          'Google Ads agency Canada',
          'Google Search Ads for local business',
        ]}
        stats={[
          { value: '1–7', label: 'Days to first leads' },
          { value: '4.8×', label: 'Average ROAS' },
          { value: '–41%', label: 'Avg. cost per lead drop' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        benefits={[
          {
            title: 'More Phone Calls',
            desc: 'Campaigns built around high-intent keywords that drive inbound calls from customers ready to hire your service today.',
          },
          {
            title: 'Lower Cost Per Lead',
            desc: 'Negative keyword management, tight geo-targeting, and ongoing optimization reduce wasted spend on irrelevant clicks.',
          },
          {
            title: 'Faster Results Than SEO',
            desc: 'Unlike SEO, Google Ads can generate calls and bookings within days of launching a properly structured campaign.',
          },
          {
            title: 'Full Conversion Tracking',
            desc: 'We track calls, form submissions, and page actions so you know exactly what every dollar of ad spend is generating.',
          },
          {
            title: 'Ongoing Monthly Optimization',
            desc: 'We review search terms, bids, ad copy, and landing pages every month based on actual lead data — not just clicks.',
          },
          {
            title: 'Transparent Reporting',
            desc: 'Monthly reports in plain language: calls generated, cost per lead, lead volume, and what we improved.',
          },
        ]}
        problemsIntro={[
          'Most small business owners who try Google Ads on their own end up wasting money. They set up a campaign with broad match keywords, no negative keyword list, and no conversion tracking — and wonder why they are spending $800 a month with nothing to show for it. The clicks are there, but the leads are not. This is the most common Google Ads problem we see when we audit new client accounts.',
          'The second most common issue is geographic waste. A business in Mississauga ends up paying for clicks from people in Markham, Oshawa, and Hamilton — cities they do not even serve. Google\'s default settings are not built for local service businesses. They are designed to maximize Google\'s revenue. Without careful geo-targeting, radius settings, and location bid adjustments, your budget bleeds into irrelevant areas.',
          'Even when clicks are coming from the right place, the landing page often fails to convert them. Visitors land on a generic homepage, cannot find a phone number, and bounce within seconds. Every dollar spent getting that visitor to your site is wasted. At OMA, we address every layer of this problem — from campaign structure to landing page performance — so your ad spend actually produces leads.',
          'We have seen businesses go from zero leads to 40+ calls per month on the same budget they were already spending — simply by restructuring their campaign properly. The difference is rarely the budget. It is the strategy, structure, and ongoing optimization behind it.',
        ]}
        problems={[
          {
            title: 'Burning budget on irrelevant clicks',
            desc: 'Broad keywords, missing negative lists, and poor campaign structure send your budget to searchers who will never become customers.',
          },
          {
            title: 'No conversion tracking in place',
            desc: 'Without call tracking and form tracking, you have no way of knowing which ads, keywords, or campaigns are actually generating leads.',
          },
          {
            title: 'Geographic targeting that is too wide',
            desc: 'Google\'s default settings routinely serve ads outside your service area — wasting significant portions of small business budgets.',
          },
          {
            title: 'Landing pages that do not convert',
            desc: 'Traffic means nothing if visitors cannot easily find your phone number or fill out a form. Poor landing page UX kills conversion rates.',
          },
        ]}
        bodyContent={bodyContent}
        whatWeDoTitle="What Our Google Ads Management Includes"
        whatWeDoBody="A complete Google Ads service for local businesses — from keyword research to monthly reporting."
        whatWeDo={[
          {
            title: 'Keyword Research',
            desc: 'We find the exact search terms your customers use to find businesses like yours, prioritized by intent and volume.',
          },
          {
            title: 'Campaign Structure',
            desc: 'Ad groups organized tightly by service, location, and intent so every search matches the right ad.',
          },
          {
            title: 'Ad Copywriting',
            desc: 'High-converting ad copy that communicates your value clearly and drives qualified clicks.',
          },
          {
            title: 'Bid Strategy Management',
            desc: 'Smart bidding that maximizes lead volume within your budget, adjusted based on real performance data.',
          },
          {
            title: 'Negative Keywords',
            desc: 'Ongoing negative keyword lists to block irrelevant searches and stop wasted spend.',
          },
          {
            title: 'Landing Page Guidance',
            desc: 'We review and advise on your landing pages to ensure traffic converts into real leads.',
          },
          {
            title: 'Call Tracking Setup',
            desc: 'Dynamic call tracking to identify which ads and keywords are generating phone calls.',
          },
          {
            title: 'Conversion Tracking',
            desc: 'Full Google Ads and Analytics conversion tracking for form fills and phone calls.',
          },
          {
            title: 'Monthly Reporting',
            desc: 'Clear monthly reports showing leads generated, cost per lead, and campaign improvements made.',
          },
        ]}
        pricing={{
          price: 'from $199',
          period: '/ month + ad spend',
          bullets: [
            'Full campaign setup: keywords, ad copy, campaign structure, geo-targeting',
            'Call tracking and conversion tracking configured from day one',
            'Monthly optimization: search terms review, bid adjustments, ad testing',
            'Plain-language monthly report: leads, cost per lead, and what changed',
          ],
        }}
        process={[
          {
            step: '01',
            title: 'Audit & Strategy',
            desc: 'We review your account (or start fresh), research your highest-intent keywords, analyze competitors, and plan the campaign structure.',
          },
          {
            step: '02',
            title: 'Build & Launch',
            desc: 'We build your campaign, write ad copy, set up conversion and call tracking, and launch — typically within 5 business days.',
          },
          {
            step: '03',
            title: 'Optimize & Report',
            desc: 'We monitor and optimize campaigns weekly, improve monthly, and report on calls, leads, cost per lead, and ROAS every month.',
          },
        ]}
        whoItsFor={[
          'Plumbers',
          'Electricians',
          'HVAC Companies',
          'Roofing Contractors',
          'Landscapers',
          'Dentists & Dental Clinics',
          'Lawyers & Law Firms',
          'Clinics & Medical',
          'Barbershops',
          'Restaurants',
          'Real Estate Agents',
          'Home Service Companies',
          'Renovation Contractors',
          'Auto Service Shops',
        ]}
        faqs={[
          {
            question: 'How much does Google Ads management cost in Canada?',
            answer:
              'Our Google Ads management starts from $199 per month plus your ad spend budget. Most local businesses in Canada start with $500–$1,500 per month in ad spend. We recommend a budget based on your service area, competition, and target cost per lead after your free audit.',
          },
          {
            question: 'How quickly can Google Ads generate leads for my business?',
            answer:
              'Google Ads can start generating calls and leads within 1–7 days of launching a properly built campaign. Most local businesses see qualified calls and inquiries within the first week. Lead volume grows as we optimize the campaign over the first 30–60 days.',
          },
          {
            question: 'What is a good Google Ads budget for a small local business in Canada?',
            answer:
              'For most local service businesses in Canada, $500–$1,500 per month in ad spend is a practical starting point. Competitive trades like HVAC, roofing, and legal services may require $2,000–$5,000+ to compete effectively. We will recommend a specific budget after reviewing your market.',
          },
          {
            question: 'Do you manage Google Ads for service-based businesses?',
            answer:
              'Yes. We specialize in Google Ads management for local service businesses across Canada — contractors, clinics, barbershops, lawyers, dentists, home service companies, restaurants, and more. Our campaigns are built specifically for local lead generation, not e-commerce or brand awareness.',
          },
          {
            question: 'What is included in your Google Ads management service?',
            answer:
              'Our service includes full campaign setup (keyword research, ad copywriting, campaign structure, call tracking, conversion tracking) plus ongoing monthly management and optimization. We handle everything from setup to reporting so you can focus on running your business.',
          },
        ]}
        relatedServices={[
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'Lead Generation Agency', href: '/lead-generation-agency' },
          { label: 'Website Design', href: '/website-design-for-small-business' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'Google Ads Management' },
        ]}
      />
    </>
  )
}
