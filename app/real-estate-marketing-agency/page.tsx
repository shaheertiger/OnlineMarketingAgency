import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Real Estate Marketing Agency | More Buyer & Seller Leads',
  description:
    'Real estate marketing agency for Canadian agents and brokerages — get more buyer and seller leads with Google Ads, Local SEO, Facebook & Instagram Ads, and lead generation.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/real-estate-marketing-agency' },
  keywords: [
    'real estate marketing agency',
    'realtor marketing Canada',
    'real estate lead generation',
    'real estate digital marketing',
  ],
  openGraph: {
    title: 'Real Estate Marketing Agency | More Buyer & Seller Leads',
    description:
      'Real estate marketing agency for Canadian agents — get more buyer and seller leads with Google Ads, Local SEO, Meta Ads, and lead generation.',
    url: 'https://onlinemarketingagency.ca/real-estate-marketing-agency',
  },
  twitter: {
    title: 'Real Estate Marketing Agency | More Buyer & Seller Leads',
    description:
      'Real estate marketing agency for Canadian agents — get more buyer and seller leads with Google Ads, Local SEO, Meta Ads, and lead generation.',
  },
}

export default function RealEstateMarketingPage() {
  return (
    <IndustryPageTemplate
      label="Real Estate Marketing Agency"
      h1="Digital Marketing For Realtors That Need More Buyer And Seller Leads"
      intro="We help real estate agents, teams, and brokerages across the Greater Toronto Area generate more buyer and seller leads through Google Ads, Local SEO, Facebook and Instagram Ads, and conversion-focused landing pages. Whether you want listing appointments, buyer inquiries, or to dominate a neighbourhood farm area, we build the system to make it happen."
      services={[
        {
          title: 'Facebook & Instagram Ads',
          desc: 'Visual listing and home-valuation campaigns that generate buyer and seller leads from local Meta audiences.',
        },
        {
          title: 'Google Ads For Realtors',
          desc: 'Capture high-intent searches like "homes for sale in [neighbourhood]" and "sell my house fast" with targeted Search campaigns.',
        },
        {
          title: 'Local SEO & Neighbourhood Pages',
          desc: 'Rank for the communities you farm with neighbourhood-specific content and Google Business Profile optimization.',
        },
        {
          title: 'Lead Capture Landing Pages',
          desc: 'Home-valuation and listing-alert landing pages with short forms that convert ad clicks into real leads.',
        },
        {
          title: 'Conversion & Lead Tracking',
          desc: 'Know which campaigns produce buyer and seller leads so budget goes to what actually books appointments.',
        },
        {
          title: 'Review Generation',
          desc: 'Build a steady stream of five-star reviews that win trust with buyers and sellers choosing an agent.',
        },
      ]}
      challenges={[
        {
          title: 'Inconsistent lead flow between listings',
          desc: 'Most agents rely on referrals and past clients, which creates feast-or-famine cycles. We build an always-on ad and SEO system so leads keep coming between deals.',
        },
        {
          title: 'Expensive, low-quality portal leads',
          desc: 'Buying shared leads from listing portals is costly and competitive. Generating your own exclusive leads through Google and Meta gives you better economics and full ownership.',
        },
        {
          title: 'No farm-area visibility online',
          desc: 'We build neighbourhood-targeted content and local SEO so you become the recognized agent for the communities you want to own.',
        },
        {
          title: 'Leads that never get followed up fast enough',
          desc: 'We set up instant lead notifications and capture forms so you can respond within minutes — when conversion rates are highest.',
        },
      ]}
      faqs={[
        {
          question: 'Can digital marketing get realtors more leads?',
          answer:
            'Yes. Facebook and Instagram Ads are especially effective for real estate because they let you put listings and home-valuation offers in front of local buyers and sellers. Combined with Google Ads for high-intent searches and Local SEO for your farm areas, agents can build a consistent, exclusive lead pipeline.',
        },
        {
          question: 'What is the best marketing channel for real estate agents?',
          answer:
            'Meta Ads (Facebook and Instagram) typically generate the most cost-effective buyer and seller leads for agents because of strong local targeting and visual formats. Google Ads captures high-intent searchers, and Local SEO builds long-term neighbourhood authority. The best results usually come from combining channels.',
        },
        {
          question: 'How much does real estate marketing cost?',
          answer:
            'Our ad management for agents starts from $199 per month plus ad spend, and lead-capture websites start from $499. Most agents start with a focused Meta or Google Ads budget and scale based on cost per lead. We will recommend a plan after a free audit.',
        },
        {
          question: 'Do you work with individual agents and teams?',
          answer:
            'Yes. We work with individual realtors, real estate teams, and brokerages across the GTA. Campaigns can be built around a single agent, a team brand, or specific neighbourhood farm areas.',
        },
      ]}
      relatedIndustries={[
        { label: 'Law Firm Marketing', href: '/law-firm-marketing-agency' },
        { label: 'Contractor Marketing', href: '/contractor-marketing-agency' },
        { label: 'Auto Shop Marketing', href: '/auto-shop-marketing-agency' },
      ]}
      breadcrumb={[
        { label: 'Industries', href: '/#industries' },
        { label: 'Real Estate Marketing' },
      ]}
    />
  )
}
