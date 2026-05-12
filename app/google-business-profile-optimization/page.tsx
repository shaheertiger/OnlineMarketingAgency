import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Google Business Profile Optimization Canada | More Calls from Google Maps | OMA',
  description:
    'Optimize your Google Business Profile to rank higher in the local map pack and get more calls, bookings, and direction requests from nearby customers. Free GBP audit.',
  alternates: {
    canonical: 'https://onlinemarketingagency.ca/google-business-profile-optimization',
  },
  keywords: [
    'Google Business Profile optimization Canada',
    'Google My Business optimization',
    'GBP optimization Canada',
    'Google Maps optimization',
    'local map pack ranking',
    'Google Business Profile management Canada',
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
    'Google Business Profile optimization and management for small businesses in Canada. Rank higher in the local map pack and generate more calls, bookings, and direction requests.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Google Business Profile Optimization',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Google Business Profile optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Business Profile (formerly Google My Business) optimization is the process of completing and improving your GBP listing so it ranks higher in Google Maps and the local 3-pack. This includes optimizing categories, description, services, photos, posts, reviews, and Q&A — all of which are ranking signals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see improvements from GBP optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most businesses see meaningful improvements in local map pack rankings within 4–8 weeks of a full GBP optimization. Review generation and ongoing posting can continue to improve rankings over 3–6 months as the profile builds activity signals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Google Business Profile optimization the same as local SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Business Profile optimization is one of the most important components of local SEO, but not the only one. Full local SEO also includes on-page website optimization, local citation building, local link building, and service area content. We offer all of these as part of our local SEO service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Google Business Profiles for businesses across Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We optimize and manage Google Business Profiles for businesses across Canada — including Toronto, Vancouver, Calgary, Edmonton, Ottawa, Hamilton, Mississauga, and smaller cities and towns nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GBP optimization help me rank in more than one city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your Google Business Profile is primarily optimized for your registered business address location. To rank in multiple cities, we combine GBP optimization with service area pages on your website and a full local SEO strategy targeting each additional city.',
      },
    },
  ],
}

export default function GBPPage() {
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
        label="Google Business Profile · Canada"
        h1="Google Business Profile Optimization to Get More Calls from Google Maps"
        intro="Your Google Business Profile is the single most visible thing about your business on Google Search and Maps. An unoptimized or incomplete profile means lost calls, lost bookings, and customers choosing your competitors. We optimize your GBP to rank higher in the local map pack and generate more inbound calls and direction requests from customers near you."
        keywords={[
          'Google Business Profile optimization Canada',
          'Google My Business optimization',
          'GBP optimization Canada',
          'Google Maps optimization',
          'local map pack ranking',
        ]}
        stats={[
          { value: '+300%', label: 'Avg. profile view increase' },
          { value: '+180%', label: 'Avg. call increase from Maps' },
          { value: '4–8', label: 'Weeks to improved rankings' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        benefits={[
          {
            title: 'Higher Map Pack Rankings',
            desc: 'A fully optimized GBP ranks higher in the local 3-pack — the most visible real estate on local Google search results.',
          },
          {
            title: 'More Inbound Calls',
            desc: 'Customers in your area can call you with one tap directly from your Google Business Profile on Maps.',
          },
          {
            title: 'More Direction Requests',
            desc: 'A well-optimized profile drives more customers to request directions to your location — a strong buying intent signal.',
          },
          {
            title: 'Better First Impressions',
            desc: 'Professional photos, complete service listings, accurate hours, and active posts make your profile stand out from competitors.',
          },
          {
            title: 'Review Strategy',
            desc: 'We help you build a system for generating genuine customer reviews — one of the top ranking factors for local Google search.',
          },
          {
            title: 'Ongoing Profile Management',
            desc: 'Regular posts, Q&A responses, photo updates, and performance monitoring keep your profile active and competitive.',
          },
        ]}
        whatWeDoTitle="What Our GBP Optimization Service Includes"
        whatWeDoBody="A complete Google Business Profile optimization and management service to maximize your local map pack visibility."
        whatWeDo={[
          {
            title: 'GBP Audit',
            desc: 'Review every section of your profile for missing information, inaccuracies, and ranking opportunities compared to top competitors.',
          },
          {
            title: 'Category Optimization',
            desc: 'Select the primary and secondary categories that best match your services and align with top-ranking competitors.',
          },
          {
            title: 'Business Description',
            desc: 'Write a keyword-rich, conversion-focused business description that communicates your value and includes target search terms.',
          },
          {
            title: 'Services & Products',
            desc: 'Add detailed service and product listings with descriptions, categories, and pricing to increase profile completeness.',
          },
          {
            title: 'Photo Optimization',
            desc: 'Upload and organize professional business photos (interior, exterior, team, work samples) to improve engagement.',
          },
          {
            title: 'Google Posts',
            desc: 'Publish regular updates, offers, and news posts to keep your profile active and increase visibility.',
          },
          {
            title: 'Review Generation System',
            desc: 'Set up a review request system to consistently generate new 5-star reviews from satisfied customers.',
          },
          {
            title: 'Q&A Management',
            desc: 'Populate the Q&A section with common customer questions and optimized answers to build trust and keyword signals.',
          },
          {
            title: 'Monthly Performance Reporting',
            desc: 'Track profile views, call clicks, direction requests, and website clicks — reported monthly with insights.',
          },
        ]}
        process={[
          {
            step: '01',
            title: 'Profile Audit',
            desc: 'We review every section of your GBP, compare it to top local competitors, and identify the exact gaps affecting your map pack rankings.',
          },
          {
            step: '02',
            title: 'Full Optimization',
            desc: 'We optimize every element — categories, description, services, photos, posts, Q&A, and attributes — to build a complete, competitive profile.',
          },
          {
            step: '03',
            title: 'Ongoing Management',
            desc: 'We post updates, monitor reviews, add new photos, respond to Q&As, and track your map pack rankings monthly.',
          },
        ]}
        whoItsFor={[
          'Restaurants & Cafes',
          'Barbershops & Hair Salons',
          'Dentists & Dental Clinics',
          'Medical Clinics & Physiotherapy',
          'Law Firms',
          'HVAC Companies',
          'Plumbers',
          'Electricians',
          'Auto Repair Shops',
          'Retail Stores',
          'Gyms & Fitness Studios',
          'Hotels & Hospitality',
          'Real Estate Agents',
          'Cleaning Services',
        ]}
        faqs={[
          {
            question: 'What is Google Business Profile optimization?',
            answer:
              'Google Business Profile (formerly Google My Business) optimization is the process of completing and improving your GBP listing so it ranks higher in Google Maps and the local 3-pack. This includes optimizing categories, description, services, photos, posts, reviews, and Q&A — all of which are ranking signals.',
          },
          {
            question: 'How long does it take to see improvements from GBP optimization?',
            answer:
              'Most businesses see meaningful improvements in local map pack rankings within 4–8 weeks of a full GBP optimization. Review generation and ongoing posting can continue to improve rankings over 3–6 months as the profile builds activity signals.',
          },
          {
            question: 'Is Google Business Profile optimization the same as local SEO?',
            answer:
              'Google Business Profile optimization is one of the most important components of local SEO, but not the only one. Full local SEO also includes on-page website optimization, local citation building, local link building, and service area content. We offer all of these as part of our local SEO service.',
          },
          {
            question: 'Do you manage Google Business Profiles for businesses across Canada?',
            answer:
              'Yes. We optimize and manage Google Business Profiles for businesses across Canada — including Toronto, Vancouver, Calgary, Edmonton, Ottawa, Hamilton, Mississauga, and smaller cities and towns nationwide.',
          },
          {
            question: 'Can GBP optimization help me rank in more than one city?',
            answer:
              'Your Google Business Profile is primarily optimized for your registered business address location. To rank in multiple cities, we combine GBP optimization with service area pages on your website and a full local SEO strategy targeting each additional city.',
          },
        ]}
        relatedServices={[
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Website Design', href: '/website-design-for-small-business' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'Google Business Profile Optimization' },
        ]}
      />
    </>
  )
}
