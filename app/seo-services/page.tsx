import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'SEO Agency For Small Businesses | SEO Services Canada',
  description:
    'Improve your Google rankings, organic traffic, and local visibility with SEO services built for small businesses across Canada.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/seo-services' },
  keywords: [
    'SEO agency',
    'SEO services',
    'SEO services Canada',
    'SEO for small business',
    'small business SEO services',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'SEO services for small businesses in Canada. Keyword-focused content, technical SEO, on-page SEO, and local search optimization.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'SEO Services',
}

export default function SEOServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate
        label="SEO Agency Canada"
        h1="SEO Services For Small Businesses That Want To Rank Higher On Google"
        intro="We provide SEO services for small businesses and local service companies across Canada. Our approach combines keyword research, technical SEO, on-page optimization, and content strategy to improve your organic Google rankings and generate more leads over time."
        keywords={[
          'SEO agency',
          'SEO services Canada',
          'SEO for small business',
          'small business SEO services',
          'organic search optimization',
        ]}
        benefits={[
          {
            title: 'Higher Google Rankings',
            desc: 'Rank for the keywords your customers search when they need your service.',
          },
          {
            title: 'More Organic Traffic',
            desc: 'Increase the number of visitors who find your website through Google search.',
          },
          {
            title: 'Long-Term Lead Generation',
            desc: 'SEO builds compounding value — organic leads do not stop when you pause ad spend.',
          },
          {
            title: 'Technical SEO Fixes',
            desc: 'We identify and fix technical issues that prevent Google from properly indexing your site.',
          },
          {
            title: 'Content Strategy',
            desc: 'We create and optimize content that targets the keywords your customers use.',
          },
          {
            title: 'Measurable Results',
            desc: 'Monthly tracking of keyword rankings, organic traffic, and lead volume from organic search.',
          },
        ]}
        whatWeDoTitle="What Our SEO Services Include"
        whatWeDoBody="A complete SEO service covering every element that affects your Google rankings and organic lead generation."
        whatWeDo={[
          {
            title: 'Keyword Research',
            desc: 'Find the keywords your customers search and prioritize by volume, intent, and competition.',
          },
          {
            title: 'Technical SEO Audit',
            desc: 'Identify crawl errors, page speed issues, structured data gaps, and indexing problems.',
          },
          {
            title: 'On-Page SEO Optimization',
            desc: 'Optimize title tags, meta descriptions, headings, internal links, and content structure.',
          },
          {
            title: 'Content Creation',
            desc: 'Write SEO-optimized service pages and blog content that ranks and converts.',
          },
          {
            title: 'Link Building',
            desc: 'Earn relevant backlinks from local directories, industry sites, and local media.',
          },
          {
            title: 'Local SEO Integration',
            desc: 'Align your SEO strategy with your local search and Google Business Profile presence.',
          },
          {
            title: 'Core Web Vitals',
            desc: 'Improve page speed, mobile performance, and Core Web Vitals scores.',
          },
          {
            title: 'Schema Markup',
            desc: 'Add structured data to help Google understand your pages and display rich results.',
          },
          {
            title: 'Monthly Reporting',
            desc: 'Keyword ranking changes, organic traffic, and lead generation tracked and reported monthly.',
          },
        ]}
        faqs={[
          {
            question: 'How long does SEO take to show results?',
            answer:
              'SEO typically shows meaningful results in 3 to 6 months. Some improvements — like fixing technical errors or optimizing existing pages — can show results faster. New content and link building take longer to build momentum.',
          },
          {
            question: 'What is the difference between SEO and Local SEO?',
            answer:
              'SEO focuses on ranking for broader organic search terms across Google. Local SEO specifically targets city and neighbourhood searches and Google Maps visibility. Both are important for local businesses — we combine both in our growth plans.',
          },
          {
            question: 'Do you offer SEO services for small businesses in Canada?',
            answer:
              'Yes. We provide SEO services for small businesses across Canada, with a focus on service businesses that rely on local customers for their revenue.',
          },
          {
            question: 'What is included in your SEO services?',
            answer:
              'Our SEO services include keyword research, technical SEO audit, on-page optimization, content creation, local SEO, link building, and monthly reporting. The exact scope depends on your package and goals.',
          },
          {
            question: 'Can SEO work alongside Google Ads?',
            answer:
              'Yes. SEO and Google Ads work well together. Ads generate leads immediately while SEO builds long-term organic traffic. Many of our clients use both to maximize their visibility on Google.',
          },
        ]}
        relatedServices={[
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
          { label: 'Website Design For Small Business', href: '/website-design-for-small-business' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'SEO Services' },
        ]}
      />
    </>
  )
}
