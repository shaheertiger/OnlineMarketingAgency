import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'SEO Services Canada | Small Business SEO Agency | OMA Digital',
  description:
    'SEO services for small businesses across Canada — rank higher on Google, get more organic leads. Technical SEO, content, local SEO, and link building. Free audit.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/seo-services' },
  keywords: [
    'SEO services Canada',
    'small business SEO services',
    'SEO agency Canada',
  ],
  openGraph: {
    title: 'SEO Services Canada | Small Business SEO Agency | OMA Digital',
    description:
      'SEO services for small businesses across Canada — rank higher on Google, get more organic leads. Technical SEO, content, local SEO, and link building. Free audit.',
    url: 'https://onlinemarketingagency.ca/seo-services',
  },
  twitter: {
    title: 'SEO Services Canada | Small Business SEO Agency | OMA Digital',
    description:
      'SEO services for small businesses across Canada — rank higher on Google, get more organic leads. Technical SEO, content, local SEO, and link building. Free audit.',
  },
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does SEO take to show results in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most SEO campaigns show meaningful improvement in 3–6 months. Fixing critical technical issues and optimizing high-priority pages can show faster results. New content and link building take longer to build ranking momentum. We track and report progress monthly so you can see what is moving.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between SEO and Local SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO focuses on ranking for broader organic search terms across Google search results. Local SEO specifically targets city-based and near-me searches and Google Maps visibility. Both are important for local businesses and we combine both into our growth plans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer SEO services for small businesses across Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide SEO services for small businesses across Canada, including Ontario, British Columbia, Alberta, and Quebec. Our focus is on local service businesses that rely on Google to generate customer inquiries.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in your SEO services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our SEO services include keyword research, technical SEO audit, on-page optimization, content creation, local SEO, link building, Core Web Vitals improvements, schema markup, and monthly reporting. The exact scope depends on your starting point and growth goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can SEO and Google Ads work together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SEO and Google Ads work very well together. Google Ads generates leads immediately while SEO builds long-term organic traffic. Many of our clients use both channels — Ads for immediate results, SEO for sustainable growth — which reduces cost per lead over time.',
      },
    },
  ],
}

const bodyContent = (
  <div className="space-y-6 text-base leading-relaxed" style={{ color: '#374151' }}>
    <h2 className="text-2xl font-black" style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}>
      What Makes SEO the Most Valuable Long-Term Investment for Your Business
    </h2>
    <p>
      Search engine optimization is the only marketing channel where your investment compounds over time.
      Every service page you rank, every piece of content that earns backlinks, and every technical fix that
      improves your crawlability builds upon itself month after month. Unlike{' '}
      <Link href="/google-ads-management" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        Google Ads
      </Link>{' '}
      — where leads stop the moment you pause your budget — SEO continues to generate organic traffic and
      leads long after the initial work is done. For local service businesses in Canada that want
      sustainable, scalable growth, SEO is the foundation.
    </p>
    <p>
      The challenge most small business owners face with SEO is not a lack of effort — it is a lack of
      strategy. They publish a few blog posts, update some title tags, and wait. But Google ranking in a
      competitive Canadian market requires a systematic approach: identifying the exact keywords your
      customers search, fixing every technical issue that prevents Google from properly indexing your site,
      building topical authority through content, and earning backlinks from relevant local and industry
      sources. Without all of these working together, results are slow and unpredictable.
    </p>
    <p>
      Our SEO services are built around one outcome: more organic leads for your local business. We start
      with a thorough technical audit to identify anything suppressing your current rankings — crawl errors,
      duplicate content, slow load speeds, missing schema, or Core Web Vitals failures. Then we map out a
      keyword strategy targeting the high-intent searches your ideal customers make. From there, we
      optimize existing pages and create new content that ranks. Every month, we report on keyword
      movement, organic traffic growth, and lead generation — so you always know what is moving and why.
    </p>
    <p>
      SEO and{' '}
      <Link href="/local-seo-services" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        local SEO services
      </Link>{' '}
      are closely related but serve different search intents. Broad SEO targets informational and
      commercial keywords across Google search, while local SEO focuses specifically on map pack rankings
      and city-based searches. For most local service businesses, both are necessary — and we integrate
      them into one unified strategy. If you also want to accelerate lead generation while your SEO builds,
      we can pair it with{' '}
      <Link href="/google-ads-management" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        Google Ads management
      </Link>{' '}
      for immediate results alongside long-term organic growth.
    </p>
    <p>
      We serve local businesses across Canada — Toronto, Mississauga, Vancouver, Calgary, Edmonton,
      Ottawa, Hamilton, Brampton, and hundreds of smaller cities and towns. Our SEO clients are
      contractors, healthcare providers, law firms, restaurants, barbershops, and service businesses of all
      types. What they share is a dependence on Google to bring in new customers — and a need for an SEO
      partner who understands the local Canadian search landscape and delivers measurable results without
      vague promises or lock-in contracts.
    </p>
  </div>
)

export default function SEOServicesPage() {
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
        label="SEO Agency · Canada"
        h1="SEO Services for Small Businesses Across Canada"
        intro="We provide SEO services for small businesses and local service companies across Canada. Our approach targets the keywords your customers actually search, fixes what's holding your site back on Google, and builds the authority needed to rank above your competitors — generating consistent organic leads over time."
        keywords={[
          'SEO services Canada',
          'small business SEO services',
          'SEO agency Canada',
          'SEO for small business',
          'organic search optimization Canada',
        ]}
        stats={[
          { value: '3–6', label: 'Months to meaningful results' },
          { value: '+200%', label: 'Avg. organic traffic increase' },
          { value: '50+', label: 'Canadian businesses ranked' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        benefits={[
          {
            title: 'Higher Google Rankings',
            desc: 'Rank on page one for the keywords your customers search when they need your service — generating free, consistent traffic.',
          },
          {
            title: 'More Organic Leads',
            desc: 'Increase the volume of visitors who find your website through Google search and convert them into calls and inquiries.',
          },
          {
            title: 'Long-Term ROI',
            desc: 'SEO builds compounding value. Organic leads keep coming even when you are not actively spending on ads.',
          },
          {
            title: 'Technical SEO Fixes',
            desc: 'We identify and fix crawl errors, slow load times, indexing gaps, and structural issues that suppress your rankings.',
          },
          {
            title: 'Content That Ranks',
            desc: 'We create and optimize service pages and blog content targeting high-intent keywords your competitors are ignoring.',
          },
          {
            title: 'Transparent Reporting',
            desc: 'Monthly keyword ranking changes, organic traffic growth, and lead volume tracked and clearly reported.',
          },
        ]}
        problemsIntro={[
          'Many small business owners have been burned by SEO agencies that charged monthly retainers, delivered minimal work, and produced no ranking improvement. This is more common in Canada than it should be. The problem is that SEO without a clear strategy and consistent execution simply does not work — and most agencies are selling the idea of SEO rather than doing the work required to actually move rankings.',
          'Technical issues are often the silent killer of SEO performance. A business can be publishing new content every week, but if their site has crawl errors, slow page load times, duplicate content, or broken internal links, Google is not fully indexing or ranking that content. Without a technical audit as the starting point, SEO work is built on an unstable foundation.',
          'Keyword targeting is the second most common failure point. Businesses optimize for broad, highly competitive keywords they can never rank for, while ignoring the specific long-tail and local intent keywords that actually convert. The right keyword strategy focuses on what your customers search when they are ready to hire — not what you think sounds good for your business.',
          'At OMA, we solve all three of these problems. We start with a thorough technical audit, build a keyword strategy around commercial intent, and execute the content and link building required to actually move rankings — month by month, with transparent reporting so you can see exactly what changed and why.',
        ]}
        problems={[
          {
            title: 'Agency retainers with no visible results',
            desc: 'Vague monthly reports, no keyword ranking data, and no measurable lead increase despite months of payments.',
          },
          {
            title: 'Technical issues suppressing every page',
            desc: 'Crawl errors, speed problems, and indexing gaps prevent Google from ranking your content no matter how good it is.',
          },
          {
            title: 'Targeting keywords you can never rank for',
            desc: 'Broad, highly competitive keywords eat budgets without results. Local, long-tail, high-intent keywords are where small businesses win.',
          },
          {
            title: 'No content strategy targeting buyer intent',
            desc: 'Publishing blogs for the sake of it without targeting keywords customers search when ready to hire produces zero leads.',
          },
        ]}
        bodyContent={bodyContent}
        whatWeDoTitle="What Our SEO Services Include"
        whatWeDoBody="A complete SEO service covering every element that affects your Google rankings and organic lead generation."
        whatWeDo={[
          {
            title: 'Keyword Research',
            desc: 'Find the keywords your customers search, prioritize by search volume, intent, and competition.',
          },
          {
            title: 'Technical SEO Audit',
            desc: 'Identify crawl errors, page speed problems, indexing gaps, duplicate content, and Core Web Vitals issues.',
          },
          {
            title: 'On-Page SEO Optimization',
            desc: 'Optimize title tags, meta descriptions, headings, internal link structure, and content for target keywords.',
          },
          {
            title: 'Content Creation',
            desc: 'Write SEO-optimized service pages and blog posts targeting keywords with buying intent.',
          },
          {
            title: 'Local SEO Integration',
            desc: 'Align your SEO strategy with your Google Business Profile and local search presence.',
          },
          {
            title: 'Link Building',
            desc: 'Earn relevant backlinks from local directories, industry websites, and local media to build domain authority.',
          },
          {
            title: 'Core Web Vitals',
            desc: 'Improve page speed, mobile performance, Largest Contentful Paint, and Cumulative Layout Shift scores.',
          },
          {
            title: 'Schema Markup',
            desc: 'Add structured data to help Google understand your pages and display rich search results.',
          },
          {
            title: 'Monthly Reporting',
            desc: 'Keyword ranking changes, organic traffic, and lead generation tracked and reported every month.',
          },
        ]}
        pricing={{
          price: 'from $599',
          period: '/ month',
          bullets: [
            'Full technical SEO audit, keyword research, and on-page optimization',
            'Content creation: SEO service pages and blog posts targeting buyer-intent keywords',
            'Link building: local citations, directory submissions, and backlink outreach',
            'Monthly reporting: keyword rankings, organic traffic, and lead volume',
          ],
        }}
        process={[
          {
            step: '01',
            title: 'Audit & Keyword Research',
            desc: 'We audit your site for technical issues, analyze your current rankings, and map out the highest-opportunity keyword targets for your business.',
          },
          {
            step: '02',
            title: 'Optimize & Create',
            desc: 'We fix technical issues, optimize existing pages, and create new keyword-targeted content — building the foundation for sustained organic ranking.',
          },
          {
            step: '03',
            title: 'Build Authority & Report',
            desc: 'We build backlinks, monitor rankings monthly, and report on organic traffic growth and lead generation improvements.',
          },
        ]}
        whoItsFor={[
          'Service-Based Local Businesses',
          'Contractors & Trades',
          'Medical & Dental Clinics',
          'Law Firms',
          'Restaurants & Food Service',
          'Real Estate Professionals',
          'Home Service Companies',
          'Professional Services',
          'Barbershops & Salons',
          'Auto Service',
          'Retail (Local)',
          'Financial Services',
        ]}
        faqs={[
          {
            question: 'How long does SEO take to show results in Canada?',
            answer:
              'Most SEO campaigns show meaningful improvement in 3–6 months. Fixing critical technical issues and optimizing high-priority pages can show faster results. New content and link building take longer to build ranking momentum. We track and report progress monthly so you can see what is moving.',
          },
          {
            question: 'What is the difference between SEO and Local SEO?',
            answer:
              'SEO focuses on ranking for broader organic search terms across Google search results. Local SEO specifically targets city-based and near-me searches and Google Maps visibility. Both are important for local businesses and we combine both into our growth plans.',
          },
          {
            question: 'Do you offer SEO services for small businesses across Canada?',
            answer:
              'Yes. We provide SEO services for small businesses across Canada, including Ontario, British Columbia, Alberta, and Quebec. Our focus is on local service businesses that rely on Google to generate customer inquiries.',
          },
          {
            question: 'What is included in your SEO services?',
            answer:
              'Our SEO services include keyword research, technical SEO audit, on-page optimization, content creation, local SEO, link building, Core Web Vitals improvements, schema markup, and monthly reporting. The exact scope depends on your starting point and growth goals.',
          },
          {
            question: 'Can SEO and Google Ads work together?',
            answer:
              'Yes. SEO and Google Ads work very well together. Google Ads generates leads immediately while SEO builds long-term organic traffic. Many of our clients use both channels — Ads for immediate results, SEO for sustainable growth — which reduces cost per lead over time.',
          },
        ]}
        relatedServices={[
          { label: 'Local SEO Services', href: '/local-seo-services' },
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
          { label: 'Website Design', href: '/website-design-for-small-business' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'SEO Services' },
        ]}
      />
    </>
  )
}
