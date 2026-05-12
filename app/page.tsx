import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import ServiceBar from '@/components/ServiceBar'
import ProblemSection from '@/components/ProblemSection'
import ServicesSection from '@/components/ServicesSection'
import ValueSection from '@/components/ValueSection'
import RiskReversal from '@/components/RiskReversal'
import IndustriesSection from '@/components/IndustriesSection'
import PackagesSection from '@/components/PackagesSection'
import ProcessSection from '@/components/ProcessSection'
import AboutSection from '@/components/AboutSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Canada | Google Ads, SEO & Local Leads',
  description:
    'OnlineMarketingAgency.ca helps local businesses get more calls, bookings, and customers with Google Ads, SEO, Local SEO, websites, and lead generation.',
  alternates: { canonical: 'https://onlinemarketingagency.ca' },
}

const homepageFAQs = [
  {
    question: 'What does a digital marketing agency do?',
    answer:
      'A digital marketing agency helps businesses get more customers online through Google Ads, SEO, Local SEO, Google Business Profile optimization, website design, Facebook Ads, Instagram Ads, and lead generation systems. The goal is measurable business outcomes: phone calls, bookings, and form submissions.',
  },
  {
    question: 'How much should a small business spend on Google Ads?',
    answer:
      'For most local businesses in Canada, a starting Google Ads budget of $500 to $1,500 per month is common. The right amount depends on your industry, location, and competition. We recommend starting focused and scaling based on lead results.',
  },
  {
    question: 'Do you offer Google Ads management for local businesses?',
    answer:
      'Yes. We manage Google Search Ads for local businesses across Canada. Our Google Ads management includes keyword strategy, ad copy, bidding, conversion tracking, and monthly reporting. Campaigns start from $199/month plus ad spend.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer:
      'Most SEO campaigns show meaningful improvement in 3 to 6 months. Local SEO and Google Business Profile improvements can happen faster. We track rankings, organic traffic, and leads monthly to measure progress.',
  },
  {
    question: 'Do you provide local SEO services in Canada?',
    answer:
      'Yes. We provide local SEO services for businesses across Canada, including Google Maps optimization, citation building, local keyword strategy, and on-page SEO for city and neighbourhood-specific searches.',
  },
  {
    question: 'Can you optimize my Google Business Profile?',
    answer:
      'Yes. We improve your Google Business Profile to increase visibility in the local map pack, drive more calls, direction requests, and website clicks from nearby customers.',
  },
  {
    question: 'Do you build websites for small businesses?',
    answer:
      'Yes. We design and build clean, mobile-friendly websites for small businesses starting from $499. Every site is built to convert visitors into calls and leads.',
  },
  {
    question: 'What is included in a free marketing audit?',
    answer:
      'Our free audit covers your website, Google rankings, Google Business Profile, active ads, competitor analysis, and conversion setup. We identify your biggest gaps and provide a clear action plan.',
  },
  {
    question: 'Do you manage Facebook and Instagram ads?',
    answer:
      'Yes. We run Meta ad campaigns for local businesses to build local demand, retarget website visitors, and generate customer inquiries through Facebook and Instagram.',
  },
  {
    question: 'Do you work with barbershops, clinics, contractors, and restaurants?',
    answer:
      'Yes. We work with barbershops, clinics, contractors, restaurants, lawyers, dentists, auto businesses, real estate agents, home service companies, and other local service providers across Canada.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://onlinemarketingagency.ca',
  name: 'OnlineMarketingAgency.ca',
  description:
    'Digital marketing agency in Canada helping small businesses grow with Google Ads, SEO, Local SEO, website design, and lead generation.',
  url: 'https://onlinemarketingagency.ca',
  email: 'info@onlinemarketingagency.ca',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  priceRange: '$$',
  knowsAbout: [
    'Google Ads management',
    'SEO services',
    'Local SEO',
    'Google Business Profile optimization',
    'Website design for small business',
    'Facebook Ads management',
    'Instagram Ads management',
    'Lead generation',
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OnlineMarketingAgency.ca',
  url: 'https://onlinemarketingagency.ca',
  logo: 'https://onlinemarketingagency.ca/logo.png',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@onlinemarketingagency.ca',
    availableLanguage: 'English',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OnlineMarketingAgency.ca',
  url: 'https://onlinemarketingagency.ca',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://onlinemarketingagency.ca/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <StatsStrip />
      <ServiceBar />
      <ProblemSection />
      <ServicesSection />
      <ValueSection />
      <RiskReversal />
      <IndustriesSection />
      <PackagesSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection faqs={homepageFAQs} />
      <CTASection />
      <FloatingCTA />
    </>
  )
}
