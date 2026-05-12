import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Website Design for Small Business Canada | Conversion-Focused Sites | OMA',
  description:
    'Get a fast, mobile-friendly website built to convert visitors into calls and leads. Website design for Canadian small businesses starting from $499. Free audit.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/website-design-for-small-business' },
  keywords: [
    'website design for small business Canada',
    'small business website design',
    'website design Canada',
    'affordable website design Canada',
    'local business website design',
    'conversion-focused website design Canada',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Design For Small Business',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Website design for small businesses in Canada. Fast, mobile-friendly, conversion-focused websites starting from $499 that turn visitors into calls and leads.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Website Design',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost for a small business in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our small business website design starts from $499 for a clean, fast, mobile-friendly site with up to 5 pages. More complex sites with multiple service pages, location pages, or custom features are priced based on scope. Contact us for a free quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a small business website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard small business website takes 3–4 weeks from the start of the project to launch. Timeline depends on how quickly we receive your content, photos, and feedback. More complex sites may take 5–6 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my website be optimized for SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every website we build includes proper on-page SEO setup: title tags, meta descriptions, heading structure, schema markup, internal linking, and fast load times. This gives your site the technical foundation it needs to rank on Google.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer website redesigns for existing websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you already have a website that is underperforming — slow, not mobile-friendly, or not generating leads — we can redesign and rebuild it to convert better and rank higher on Google.',
      },
    },
    {
      '@type': 'Question',
      name: 'What platform do you build websites on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build websites on the most appropriate platform for your business — typically WordPress or Next.js for marketing-focused sites. We choose the platform based on your needs for speed, SEO, maintenance, and long-term scalability.',
      },
    },
  ],
}

export default function WebsiteDesignPage() {
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
        label="Website Design · Canada"
        h1="Website Design for Small Businesses That Convert Visitors Into Calls and Leads"
        intro="Most small business websites look fine but convert poorly. They load slowly, are hard to navigate on mobile, lack clear calls to action, and do not give visitors a reason to call. We design and build websites for Canadian small businesses that are fast, mobile-first, and built specifically to turn visitors into paying customers."
        keywords={[
          'website design for small business Canada',
          'small business website design',
          'affordable website design Canada',
          'local business website design',
          'conversion-focused website design',
        ]}
        stats={[
          { value: '3–4', label: 'Weeks typical delivery' },
          { value: '95+', label: 'Mobile performance score target' },
          { value: 'From $499', label: 'Starting price' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        benefits={[
          {
            title: 'Designed to Convert',
            desc: 'Every page is built with one goal: turning visitors into calls, bookings, and form submissions — not just looking good.',
          },
          {
            title: 'Mobile-First Design',
            desc: 'Over 70% of local search happens on mobile. Your site will load fast and convert well on every device.',
          },
          {
            title: 'Built for Local SEO',
            desc: 'Clean code, structured data, fast load times, and proper heading hierarchy — the technical foundation for strong local search rankings.',
          },
          {
            title: 'Clear Calls to Action',
            desc: 'Phone number in the header, click-to-call buttons, and prominent contact forms so customers can reach you in seconds.',
          },
          {
            title: 'Fast Load Times',
            desc: 'Slow websites kill conversions. We build lightweight, optimized sites that score 90+ on Google PageSpeed Insights.',
          },
          {
            title: 'Affordable for Small Business',
            desc: 'Professional website design starting from $499 for a clean, fast, conversion-focused site — without agency price tags.',
          },
        ]}
        whatWeDoTitle="What Our Website Design Service Includes"
        whatWeDoBody="A complete website design and development service for small businesses, built to generate calls and leads."
        whatWeDo={[
          {
            title: 'Discovery & Strategy',
            desc: 'We learn about your business, your customers, your services, and what makes you different before writing a line of code.',
          },
          {
            title: 'Copywriting',
            desc: 'We write clear, persuasive copy for your home page, service pages, and about page — keyword-optimized and conversion-focused.',
          },
          {
            title: 'Mobile-First Design',
            desc: 'We design for mobile first, then desktop. Clean, modern, and easy to navigate on any screen size.',
          },
          {
            title: 'Development',
            desc: 'We build your site on a fast, secure, modern tech stack with clean code that search engines can index properly.',
          },
          {
            title: 'On-Page SEO Setup',
            desc: 'Title tags, meta descriptions, heading structure, schema markup, and internal linking set up correctly from day one.',
          },
          {
            title: 'Contact Forms & Click-to-Call',
            desc: 'Lead capture forms, phone number click-to-call, and booking widgets make it easy for customers to reach you.',
          },
          {
            title: 'Google Analytics Setup',
            desc: 'We connect your site to Google Analytics and Google Search Console so you can track visitors and leads.',
          },
          {
            title: 'PageSpeed Optimization',
            desc: 'Image compression, lazy loading, and code optimization to ensure fast load times on mobile and desktop.',
          },
          {
            title: 'Launch & Post-Launch Support',
            desc: 'We launch your site, test everything, and provide 30 days of post-launch support for any fixes.',
          },
        ]}
        process={[
          {
            step: '01',
            title: 'Discovery & Planning',
            desc: 'We learn your business, goals, and customers. We plan the site structure, pages, and content strategy before any design work begins.',
          },
          {
            step: '02',
            title: 'Design & Build',
            desc: 'We design and build your site over 3–4 weeks — mobile-first, fast, with conversion-focused layouts and properly written copy.',
          },
          {
            step: '03',
            title: 'Launch & Optimize',
            desc: 'We launch your site, set up analytics and call tracking, test everything, and monitor performance in the first 30 days.',
          },
        ]}
        whoItsFor={[
          'Service-Based Local Businesses',
          'Contractors & Trades',
          'Dentists & Medical Clinics',
          'Law Firms',
          'Restaurants & Cafes',
          'Barbershops & Salons',
          'Real Estate Agents',
          'Home Service Companies',
          'Cleaning Services',
          'Gyms & Fitness Studios',
          'Auto Service Shops',
          'Professional Services',
        ]}
        faqs={[
          {
            question: 'How much does a website cost for a small business in Canada?',
            answer:
              'Our small business website design starts from $499 for a clean, fast, mobile-friendly site with up to 5 pages. More complex sites with multiple service pages, location pages, or custom features are priced based on scope. Contact us for a free quote.',
          },
          {
            question: 'How long does it take to build a small business website?',
            answer:
              'A standard small business website takes 3–4 weeks from the start of the project to launch. Timeline depends on how quickly we receive your content, photos, and feedback. More complex sites may take 5–6 weeks.',
          },
          {
            question: 'Will my website be optimized for SEO?',
            answer:
              'Yes. Every website we build includes proper on-page SEO setup: title tags, meta descriptions, heading structure, schema markup, internal linking, and fast load times. This gives your site the technical foundation it needs to rank on Google.',
          },
          {
            question: 'Do you offer website redesigns for existing websites?',
            answer:
              'Yes. If you already have a website that is underperforming — slow, not mobile-friendly, or not generating leads — we can redesign and rebuild it to convert better and rank higher on Google.',
          },
          {
            question: 'What platform do you build websites on?',
            answer:
              'We build websites on the most appropriate platform for your business — typically WordPress or Next.js for marketing-focused sites. We choose the platform based on your needs for speed, SEO, maintenance, and long-term scalability.',
          },
        ]}
        relatedServices={[
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Lead Generation Agency', href: '/lead-generation-agency' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'Website Design for Small Business' },
        ]}
      />
    </>
  )
}
