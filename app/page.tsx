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
    'OnlineMarketingAgency.ca — Canadian digital marketing agency helping local businesses get more calls, bookings & customers with Google Ads, SEO, Local SEO & lead generation. Free audit. 905-626-9919.',
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

// ── Schema: FAQPage ───────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

// ── Schema: LocalBusiness (2026 — complete NAP + rating + hours) ──────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://onlinemarketingagency.ca/#organization',
  name: 'OnlineMarketingAgency.ca',
  alternateName: 'OMA Digital Marketing Canada',
  description:
    'Digital marketing agency in Canada helping small businesses grow with Google Ads, SEO, Local SEO, website design, and lead generation. Serving local businesses across Canada since 2020.',
  url: 'https://onlinemarketingagency.ca',
  telephone: '+19056269919',
  email: 'info@onlinemarketingagency.ca',
  foundingDate: '2020',
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Credit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA',
    addressRegion: 'ON',
  },
  areaServed: [
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Province', name: 'Ontario' },
    { '@type': 'Province', name: 'British Columbia' },
    { '@type': 'Province', name: 'Alberta' },
    { '@type': 'Province', name: 'Quebec' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  knowsAbout: [
    'Google Ads management',
    'SEO services',
    'Local SEO',
    'Google Business Profile optimization',
    'Website design for small business',
    'Facebook Ads management',
    'Instagram Ads management',
    'Lead generation',
    'Digital marketing for local businesses',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design For Small Business' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook & Instagram Ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Generation' } },
    ],
  },
}

// ── Schema: Organization (E-E-A-T signals) ────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://onlinemarketingagency.ca/#organization',
  name: 'OnlineMarketingAgency.ca',
  url: 'https://onlinemarketingagency.ca',
  logo: {
    '@type': 'ImageObject',
    url: 'https://onlinemarketingagency.ca/logo.png',
    width: 200,
    height: 60,
  },
  foundingDate: '2020',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 10 },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+19056269919',
    email: 'info@onlinemarketingagency.ca',
    availableLanguage: ['English'],
    contactOption: 'TollFree',
    areaServed: 'CA',
  },
  sameAs: [],
}

// ── Schema: WebSite (sitelinks searchbox) ─────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://onlinemarketingagency.ca/#website',
  name: 'OnlineMarketingAgency.ca',
  url: 'https://onlinemarketingagency.ca',
  description: 'Digital marketing agency for Canadian small businesses.',
  publisher: { '@id': 'https://onlinemarketingagency.ca/#organization' },
  inLanguage: 'en-CA',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://onlinemarketingagency.ca/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// ── Schema: WebPage with Speakable (voice / AI search) ────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://onlinemarketingagency.ca/#webpage',
  url: 'https://onlinemarketingagency.ca',
  name: 'Digital Marketing Agency Canada | Google Ads, SEO & Local Leads',
  description:
    'OnlineMarketingAgency.ca helps Canadian local businesses get more calls, bookings, and customers with Google Ads, SEO, and lead generation.',
  isPartOf: { '@id': 'https://onlinemarketingagency.ca/#website' },
  about: { '@id': 'https://onlinemarketingagency.ca/#organization' },
  inLanguage: 'en-CA',
  datePublished: '2020-01-01',
  dateModified: '2026-05-01',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.section-heading', 'section-subtext'],
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero />
      <StatsStrip />
      <ServiceBar />
      <ProblemSection />
      <ServicesSection />
      <ValueSection />
      <IndustriesSection />
      <ProcessSection />
      <PackagesSection />
      <RiskReversal />
      <AboutSection />
      <FAQSection faqs={homepageFAQs} />
      <CTASection />
      <FloatingCTA />
    </>
  )
}
