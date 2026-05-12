import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Facebook Ads Management Canada | Instagram Ads Agency | OMA Digital',
  description:
    'Facebook Ads management for Canadian local businesses — drive more customers with Meta advertising. Instagram ads, retargeting, lead campaigns. From $499/month. Free audit.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/social-media-marketing-agency' },
  keywords: [
    'Facebook Ads management Canada',
    'Instagram Ads agency Canada',
    'Meta advertising Canada',
  ],
  openGraph: {
    title: 'Facebook Ads Management Canada | Instagram Ads Agency | OMA Digital',
    description:
      'Facebook Ads management for Canadian local businesses — drive more customers with Meta advertising. Instagram ads, retargeting, lead campaigns. From $499/month. Free audit.',
    url: 'https://onlinemarketingagency.ca/social-media-marketing-agency',
  },
  twitter: {
    title: 'Facebook Ads Management Canada | Instagram Ads Agency | OMA Digital',
    description:
      'Facebook Ads management for Canadian local businesses — drive more customers with Meta advertising. Instagram ads, retargeting, lead campaigns. From $499/month. Free audit.',
  },
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
        text: 'For local businesses in Canada, a starting budget of $300–1,000 per month in ad spend is typical. We recommend a minimum of $500 per month to give the Meta algorithm enough data to optimize your campaigns. We will recommend a specific budget based on your business and goals after your free audit.',
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

const bodyContent = (
  <div className="space-y-6 text-base leading-relaxed" style={{ color: '#374151' }}>
    <h2 className="text-2xl font-black" style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}>
      How Facebook and Instagram Ads Fit Into Your Local Marketing Strategy
    </h2>
    <p>
      Facebook and Instagram Ads occupy a fundamentally different position in the marketing funnel compared
      to{' '}
      <Link href="/google-ads-management" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        Google Ads
      </Link>
      . Google captures demand — people who are already searching for your service right now. Meta
      advertising creates demand — reaching people in your city who match your ideal customer profile
      before they start searching. For local businesses, this distinction matters. If you only rely on
      Google to capture active searchers, you miss the much larger pool of potential customers who have
      not started searching yet but would choose your business if they knew about it.
    </p>
    <p>
      The power of Facebook and Instagram advertising for local businesses lies in its targeting
      precision. You can show your ads exclusively to people within 10 kilometres of your location, in
      specific age ranges, with specific interests, and who have already visited your website. This means
      your ad budget goes to the people most likely to become customers — not broad audiences that will
      never convert. For a restaurant in Mississauga, this means reaching local residents who follow food
      accounts. For a gym in Calgary, this means targeting fitness-interested adults within a 5km radius.
    </p>
    <p>
      Retargeting is often the highest-ROI component of any Meta advertising strategy. When someone visits
      your website but does not call or fill out a form, a retargeting campaign can show them your ad on
      Facebook and Instagram over the next 30 days — keeping your business top of mind until they are
      ready to take action. This dramatically increases the conversion rate of website traffic and makes
      your{' '}
      <Link href="/seo-services" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        SEO
      </Link>{' '}
      and{' '}
      <Link href="/google-ads-management" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        Google Ads
      </Link>{' '}
      investment more efficient by converting visitors who would otherwise have been lost.
    </p>
    <p>
      For businesses that want to maximize their lead generation across all channels, Meta advertising
      integrates powerfully with our{' '}
      <Link href="/lead-generation-agency" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        full lead generation system
      </Link>
      . Combining Google Ads for active search capture, Facebook and Instagram Ads for demand generation
      and retargeting, and SEO for long-term organic growth creates a comprehensive local marketing
      engine that generates leads from every direction — minimizing the risk that comes from depending on
      any single channel.
    </p>
  </div>
)

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
        problemsIntro={[
          'Running Facebook Ads without a clear strategy is one of the fastest ways to waste a marketing budget. Boosting posts from your Facebook page — the most common DIY approach — is not the same as running a properly structured campaign in Meta Ads Manager. Boosted posts reach a broad, unqualified audience and rarely generate actual leads. Real Facebook Ads campaigns are built with specific objectives, precise audience targeting, tested creative, and conversion tracking — none of which are included in a boosted post.',
          'The Meta algorithm needs data to optimize. Campaigns with budgets that are too small, running for too short a period, or targeting audiences that are too narrow will never gather enough conversion data for the algorithm to learn and improve. Most businesses who "tried Facebook Ads and got nothing" made one of these structural mistakes — and then concluded that Meta advertising does not work for their industry. In most cases, it is the campaign that did not work, not the platform.',
          'Creative fatigue is another major issue for local businesses running Meta ads. The same image or video shown to the same audience repeatedly produces diminishing returns quickly. Without a strategy for refreshing creative, testing new formats, and rotating audiences, performance degrades week by week. We manage this proactively — testing new creative formats, rotating audience segments, and analyzing what is generating leads versus what is generating likes.',
          'At OMA, we build Meta advertising campaigns the right way from the start. We install the Meta Pixel properly, set up conversion events for calls and form submissions, build structured campaign funnels, write compelling local ad copy, and continuously test and optimize to improve cost per lead. You get full visibility into what your ad spend is generating — not just impressions and reach.',
        ]}
        problems={[
          {
            title: 'Boosted posts generating reach but no actual leads',
            desc: 'Boosting posts is not advertising — it is paying Facebook to show your content to people who will never call. Real campaigns need proper objectives and audience targeting.',
          },
          {
            title: 'No Meta Pixel installed or tracking misconfigured',
            desc: 'Without proper pixel setup and conversion event tracking, you cannot retarget website visitors or measure which ads are actually generating customer calls.',
          },
          {
            title: 'Ad creative fatiguing with no system to refresh it',
            desc: 'Showing the same ads to the same audience week after week produces declining results. Without testing new creative, Meta campaigns stagnate.',
          },
          {
            title: 'No clear funnel from awareness to lead conversion',
            desc: 'Running only top-of-funnel awareness ads without a retargeting strategy means most of your ad spend never converts into actual customer inquiries.',
          },
        ]}
        bodyContent={bodyContent}
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
        pricing={{
          price: 'from $499',
          period: '/ month + ad spend',
          bullets: [
            'Full Meta Ads campaign setup: audiences, campaign structure, ad copy, and lead forms',
            'Meta Pixel installation, conversion event setup, and retargeting audience creation',
            'Ongoing A/B testing: creative rotation, audience testing, and bid optimization',
            'Monthly report: leads generated, cost per lead, reach, and campaign improvements',
          ],
        }}
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
              'For local businesses in Canada, a starting budget of $300–1,000 per month in ad spend is typical. We recommend a minimum of $500 per month to give the Meta algorithm enough data to optimize your campaigns. We will recommend a specific budget based on your business and goals after your free audit.',
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