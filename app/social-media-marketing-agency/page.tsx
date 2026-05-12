import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Facebook Ads Management Canada | Instagram Ads Agency | OMA Digital',
  description:
    'Drive more local customers with Facebook Ads and Instagram Ads for small businesses across Canada. Full Meta advertising management. No lock-in. Free audit available.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/social-media-marketing-agency' },
  keywords: [
    'Facebook Ads management Canada',
    'Instagram Ads agency Canada',
    'Meta Ads agency Canada',
    'social media marketing agency Canada',
    'Facebook Ads for small business Canada',
    'Instagram Ads for local business',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Facebook & Instagram Ads Management',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Facebook Ads and Instagram Ads management for local businesses in Canada. Build local demand, retarget website visitors, and generate customer inquiries through Meta advertising.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Social Media Marketing',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do Facebook and Instagram Ads work for local service businesses in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Meta advertising is effective for local service businesses when campaigns are properly targeted. They work especially well for building local awareness, promoting seasonal offers, retargeting website visitors, and generating leads through Facebook Lead Ads. Many of our clients combine Meta Ads with Google Ads for full coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Facebook Ads and Google Ads for local businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads target people who are actively searching for your service — high intent, ready to buy. Facebook and Instagram Ads reach people based on demographics, location, and interests — building demand before they start searching. Both channels are valuable, and many businesses use both together for maximum reach.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I budget for Facebook Ads as a local business in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For local businesses in Canada, a starting budget of $300–$1,000 per month in ad spend is typical. We recommend a minimum of $500 per month to give the Meta algorithm enough data to optimize your campaigns. We will recommend a specific budget based on your business and goals after your free audit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Instagram Ads as well as Facebook Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Facebook and Instagram Ads are managed through the same Meta Ads Manager platform. We run campaigns across both platforms as part of the same service, placing your ads where your audience is most active.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you generate leads directly through Facebook without a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Facebook Lead Ads allow potential customers to submit their name, phone, and email directly within Facebook — without visiting your website. This reduces friction significantly and often generates more leads per dollar than website landing pages.',
      },
    },
  ],
}

export default function SocialMediaPage() {
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
        label="Facebook & Instagram Ads · Canada"
        h1="Facebook and Instagram Ads Management for Local Businesses Across Canada"
        intro="We run Facebook Ads and Instagram Ads campaigns for local businesses across Canada. While Google Ads targets people already searching, Meta advertising reaches your ideal local customers based on where they live, what they do, and what they care about — building demand before they even start searching."
        keywords={[
          'Facebook Ads management Canada',
          'Instagram Ads agency Canada',
          'Meta advertising agency Canada',
          'social media ads for small business',
          'Facebook Ads for local business',
        ]}
        stats={[
          { value: '3.2×', label: 'Average Meta ROAS' },
          { value: '$300+', label: 'Recommended minimum ad spend' },
          { value: '50+', label: 'Businesses helped' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        benefits={[
          {
            title: 'Precise Local Audience Targeting',
            desc: 'Reach customers within a specific radius of your business, or target by city, neighbourhood, age, and interests.',
          },
          {
            title: 'Build Demand Before They Search',
            desc: 'Reach potential customers on Facebook and Instagram before they start searching Google — building awareness that leads to bookings.',
          },
          {
            title: 'Website Retargeting',
            desc: 'Re-engage visitors who browsed your site but did not contact you — one of the highest-ROI advertising strategies available.',
          },
          {
            title: 'Facebook Lead Ads',
            desc: 'Capture contact details directly within Facebook without requiring visitors to visit your website — reducing friction and boosting lead volume.',
          },
          {
            title: 'Visual Brand Building',
            desc: 'Strengthen your local brand through consistent, professional advertising across Facebook and Instagram.',
          },
          {
            title: 'Full Conversion Tracking',
            desc: 'Meta Pixel setup and full event tracking so you know exactly what your ad spend is generating in calls and leads.',
          },
        ]}
        whatWeDoTitle="What Our Facebook & Instagram Ads Service Includes"
        whatWeDoBody="A complete Meta advertising service for local businesses — from audience strategy to monthly reporting."
        whatWeDo={[
          {
            title: 'Audience Research',
            desc: 'Define your ideal local customer and build custom and lookalike audiences in Meta Ads Manager.',
          },
          {
            title: 'Campaign Strategy',
            desc: 'Build a full-funnel campaign structure: awareness, consideration, and conversion campaigns for your business.',
          },
          {
            title: 'Ad Copywriting',
            desc: 'Write ad copy that resonates with your local audience and drives engagement, clicks, and lead submissions.',
          },
          {
            title: 'Creative Direction',
            desc: 'Provide direction on ad images and video assets that perform well in local Facebook and Instagram feeds.',
          },
          {
            title: 'Facebook Lead Ads',
            desc: 'Set up lead generation campaigns that capture name, phone, and email directly within Facebook.',
          },
          {
            title: 'Meta Pixel Setup',
            desc: 'Install and configure the Meta Pixel on your website for conversion tracking, retargeting, and audience building.',
          },
          {
            title: 'Retargeting Campaigns',
            desc: 'Build retargeting audiences from website visitors and video viewers to re-engage warm prospects.',
          },
          {
            title: 'A/B Testing',
            desc: 'Test different audiences, ad formats, creative, and messages to systematically improve cost per lead.',
          },
          {
            title: 'Monthly Reporting',
            desc: 'Reports showing leads generated, cost per lead, reach, click-through rate, and campaign improvements made.',
          },
        ]}
        process={[
          {
            step: '01',
            title: 'Audience & Strategy',
            desc: 'We define your ideal local customer, build custom and lookalike audiences, and plan the campaign funnel — awareness, consideration, conversion.',
          },
          {
            step: '02',
            title: 'Build & Launch',
            desc: 'We install the Meta Pixel, build your campaigns, write ad copy, set up lead forms, and launch — typically within 5 business days.',
          },
          {
            step: '03',
            title: 'Test & Optimize',
            desc: 'We A/B test audiences and creative, optimize for lower cost per lead, and report on leads generated and campaign performance monthly.',
          },
        ]}
        whoItsFor={[
          'Restaurants & Cafes',
          'Barbershops & Hair Salons',
          'Dental & Medical Clinics',
          'Gyms & Fitness Studios',
          'Beauty Services & Spas',
          'Home Renovation Companies',
          'Event Businesses',
          'Retail Stores',
          'Real Estate Agents',
          'Cleaning Services',
          'Landscapers',
          'Contractors & Trades',
        ]}
        faqs={[
          {
            question: 'Do Facebook and Instagram Ads work for local service businesses in Canada?',
            answer:
              'Yes. Meta advertising is effective for local service businesses when campaigns are properly targeted. They work especially well for building local awareness, promoting seasonal offers, retargeting website visitors, and generating leads through Facebook Lead Ads. Many of our clients combine Meta Ads with Google Ads for full coverage.',
          },
          {
            question: 'What is the difference between Facebook Ads and Google Ads for local businesses?',
            answer:
              'Google Ads target people who are actively searching for your service — high intent, ready to buy. Facebook and Instagram Ads reach people based on demographics, location, and interests — building demand before they start searching. Both channels are valuable, and many businesses use both together for maximum reach.',
          },
          {
            question: 'How much should I budget for Facebook Ads as a local business in Canada?',
            answer:
              'For local businesses in Canada, a starting budget of $300–$1,000 per month in ad spend is typical. We recommend a minimum of $500 per month to give the Meta algorithm enough data to optimize your campaigns. We will recommend a specific budget based on your business and goals after your free audit.',
          },
          {
            question: 'Do you manage Instagram Ads as well as Facebook Ads?',
            answer:
              'Yes. Facebook and Instagram Ads are managed through the same Meta Ads Manager platform. We run campaigns across both platforms as part of the same service, placing your ads where your audience is most active.',
          },
          {
            question: 'Can you generate leads directly through Facebook without a website?',
            answer:
              'Yes. Facebook Lead Ads allow potential customers to submit their name, phone, and email directly within Facebook — without visiting your website. This reduces friction significantly and often generates more leads per dollar than website landing pages.',
          },
        ]}
        relatedServices={[
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Lead Generation Agency', href: '/lead-generation-agency' },
          { label: 'Website Design', href: '/website-design-for-small-business' },
          { label: 'SEO Services', href: '/seo-services' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'Facebook & Instagram Ads' },
        ]}
      />
    </>
  )
}
