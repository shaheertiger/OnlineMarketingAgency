import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Website Design For Small Business | Lead-Gen Websites Canada',
  description:
    'Get a clean, fast, mobile-friendly website built to convert visitors into calls, bookings, and qualified leads for your small business.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/website-design-for-small-business' },
  keywords: [
    'website design for small business',
    'small business website design',
    'local business website design',
    'website design agency Canada',
    'affordable website design',
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
    'Website design for small businesses in Canada. Fast, mobile-friendly websites built to convert visitors into leads.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Website Design',
}

export default function WebsiteDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate
        label="Website Design Agency Canada"
        h1="Website Design For Small Businesses That Need More Leads"
        intro="We design and build clean, fast, mobile-friendly websites for small businesses across Canada. Every website we build is structured to turn visitors into calls, booking requests, and contact form submissions — not just look good."
        keywords={[
          'website design for small business',
          'small business website design Canada',
          'lead-gen website',
          'local business website',
          'affordable website design',
        ]}
        benefits={[
          {
            title: 'Mobile-First Design',
            desc: 'Built for smartphones first, so it looks perfect on every device and screen size.',
          },
          {
            title: 'Fast Load Speed',
            desc: 'Optimized for Google Core Web Vitals so your site loads quickly and ranks better.',
          },
          {
            title: 'Conversion-Focused Layout',
            desc: 'Clear calls to action, contact forms, and click-to-call buttons above the fold.',
          },
          {
            title: 'On-Page SEO Ready',
            desc: 'Built with proper heading structure, meta tags, schema markup, and semantic HTML.',
          },
          {
            title: 'Professional Design',
            desc: 'Clean, modern design that builds trust and reflects well on your business.',
          },
          {
            title: 'Easy To Update',
            desc: 'Simple CMS setup so you can update content, photos, and services without a developer.',
          },
        ]}
        whatWeDoTitle="What Our Website Design Service Includes"
        whatWeDoBody="Everything you need to launch a professional, lead-generating website for your local business."
        whatWeDo={[
          {
            title: 'Discovery And Strategy',
            desc: 'We learn about your business, customers, and goals before writing a single line of code.',
          },
          {
            title: 'Design Mockup',
            desc: 'A clean visual design that matches your brand and is built to convert visitors.',
          },
          {
            title: 'Mobile-Responsive Development',
            desc: 'Fully responsive build that works perfectly on phones, tablets, and desktops.',
          },
          {
            title: 'Contact Forms And Click-To-Call',
            desc: 'Easy contact and lead capture on every relevant page of the site.',
          },
          {
            title: 'On-Page SEO Setup',
            desc: 'Title tags, meta descriptions, headings, schema markup, and site structure optimized.',
          },
          {
            title: 'Google Analytics Setup',
            desc: 'GA4 installed and configured so you can track traffic, user behaviour, and lead sources.',
          },
          {
            title: 'Page Speed Optimization',
            desc: 'Image compression, caching, and code optimization to meet Core Web Vitals standards.',
          },
          {
            title: 'Google Business Profile Integration',
            desc: 'Website and GBP properly linked to reinforce local SEO signals.',
          },
          {
            title: 'Launch And Testing',
            desc: 'Full cross-device testing and QA before launch to ensure everything works correctly.',
          },
        ]}
        faqs={[
          {
            question: 'How much does a small business website cost?',
            answer:
              'Our small business websites start from $499 for a clean, professional 5-page website. Larger sites with more pages, custom features, or e-commerce functionality are priced on a project basis.',
          },
          {
            question: 'How long does it take to build a small business website?',
            answer:
              'Most small business websites take 2 to 4 weeks from kickoff to launch, depending on scope and how quickly you can provide content and feedback.',
          },
          {
            question: 'Will my website work on mobile phones?',
            answer:
              'Yes. Every website we build is fully mobile-responsive and tested on multiple devices and screen sizes. Mobile performance is a priority since the majority of local searches happen on smartphones.',
          },
          {
            question: 'Do you build websites with SEO included?',
            answer:
              'Yes. Every website we build includes proper on-page SEO setup: title tags, meta descriptions, heading structure, schema markup, and clean URL structure. This gives your site a strong foundation for Google rankings.',
          },
          {
            question: 'Can you redesign my existing website?',
            answer:
              'Yes. We offer website redesign services for businesses with outdated or underperforming websites. We keep your existing content where it is working and rebuild the structure, design, and conversion elements.',
          },
        ]}
        relatedServices={[
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Lead Generation Agency', href: '/lead-generation-agency' },
        ]}
      />
    </>
  )
}
