import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency | Facebook & Instagram Ads Canada',
  description:
    'Facebook Ads and Instagram Ads management for local businesses and small service companies across Canada. Drive leads, bookings, and customer inquiries with Meta advertising.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/social-media-marketing-agency' },
  keywords: [
    'social media marketing agency',
    'Facebook Ads management',
    'Instagram Ads management',
    'Meta Ads agency',
    'social media ads for small business',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media Marketing Agency',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Facebook Ads and Instagram Ads management for local businesses in Canada. Build local demand and generate customer inquiries through Meta advertising.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Social Media Marketing',
}

export default function SocialMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate
        label="Social Media Marketing Agency Canada"
        h1="Facebook And Instagram Ads For Local Businesses"
        intro="We run Facebook Ads and Instagram Ads campaigns for local businesses across Canada. Our Meta advertising strategy focuses on building local demand, retargeting website visitors, and generating customer inquiries that turn into calls, bookings, and sales."
        keywords={[
          'social media marketing agency',
          'Facebook Ads management Canada',
          'Instagram Ads for small business',
          'Meta advertising agency',
          'local Facebook Ads',
        ]}
        benefits={[
          {
            title: 'Local Audience Targeting',
            desc: 'Reach customers in your specific city, neighbourhood, or service radius.',
          },
          {
            title: 'Demand Generation',
            desc: 'Build awareness and interest before customers start searching on Google.',
          },
          {
            title: 'Website Retargeting',
            desc: 'Re-engage visitors who browsed your site but did not contact you.',
          },
          {
            title: 'Lead Generation Ads',
            desc: 'Facebook Lead Ads that capture name, phone, and email directly within the platform.',
          },
          {
            title: 'Visual Brand Building',
            desc: 'Strengthen your local brand through consistent, professional social advertising.',
          },
          {
            title: 'Measurable ROI',
            desc: 'Full conversion tracking so you know what your Meta ad spend is generating.',
          },
        ]}
        whatWeDoTitle="What Our Social Media Ads Service Includes"
        whatWeDoBody="A complete Facebook and Instagram advertising service for local businesses."
        whatWeDo={[
          {
            title: 'Audience Research',
            desc: 'Define your ideal local customer and build targeting audiences in Meta Ads Manager.',
          },
          {
            title: 'Campaign Strategy',
            desc: 'Build a campaign structure covering awareness, consideration, and conversion stages.',
          },
          {
            title: 'Ad Creative Direction',
            desc: 'Write ad copy and provide direction on visuals that engage your local audience.',
          },
          {
            title: 'Facebook Lead Ads',
            desc: 'Set up lead generation campaigns that capture contact details without leaving Facebook.',
          },
          {
            title: 'Retargeting Campaigns',
            desc: 'Re-engage website visitors and video viewers who have shown interest in your business.',
          },
          {
            title: 'Meta Pixel Setup',
            desc: 'Install and configure the Meta Pixel on your website for tracking and retargeting.',
          },
          {
            title: 'A/B Testing',
            desc: 'Test different audiences, ad formats, and messages to improve cost per lead.',
          },
          {
            title: 'Budget Management',
            desc: 'Allocate and optimize your budget across campaigns for maximum lead volume.',
          },
          {
            title: 'Monthly Reporting',
            desc: 'Reports showing leads, cost per lead, reach, and campaign performance each month.',
          },
        ]}
        faqs={[
          {
            question: 'Do Facebook Ads work for local service businesses?',
            answer:
              'Yes. Facebook and Instagram ads are effective for local service businesses when properly targeted. They work best for building local awareness, promoting offers, retargeting website visitors, and running lead generation campaigns.',
          },
          {
            question: 'What is the difference between Facebook Ads and Google Ads?',
            answer:
              'Google Ads target people who are actively searching for your service. Facebook and Instagram Ads reach people based on demographics, interests, and behaviour — often before they start searching. Both channels can generate leads, and many of our clients use both together.',
          },
          {
            question: 'How much should I budget for Facebook Ads?',
            answer:
              'For local businesses, a starting budget of $300 to $1,000 per month in ad spend is typical. We recommend a minimum of $500 per month to give the algorithm enough data to optimize your campaigns.',
          },
          {
            question: 'Do you manage Instagram Ads as well as Facebook?',
            answer:
              'Yes. Facebook and Instagram Ads are managed through the same Meta Ads Manager platform. We run campaigns across both platforms as part of the same service.',
          },
          {
            question: 'Can you generate leads directly through Facebook Ads?',
            answer:
              'Yes. Facebook Lead Ads allow potential customers to submit their contact information directly within Facebook without visiting your website. This reduces friction and often improves lead volume.',
          },
        ]}
        relatedServices={[
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Lead Generation Agency', href: '/lead-generation-agency' },
          { label: 'Website Design For Small Business', href: '/website-design-for-small-business' },
          { label: 'SEO Services', href: '/seo-services' },
        ]}
      />
    </>
  )
}
