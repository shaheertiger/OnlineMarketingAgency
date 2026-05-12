import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Local SEO Services Canada | Rank Higher on Google Maps | OMA',
  description:
    'Local SEO services for businesses across Canada — rank higher on Google Maps and get more calls from nearby customers. GBP optimization, citations, local content. Free audit.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/local-seo-services' },
  keywords: [
    'local SEO services Canada',
    'local SEO agency Canada',
    'Google Maps SEO Canada',
  ],
  openGraph: {
    title: 'Local SEO Services Canada | Rank Higher on Google Maps | OMA',
    description:
      'Local SEO services for businesses across Canada — rank higher on Google Maps and get more calls from nearby customers. GBP optimization, citations, local content. Free audit.',
    url: 'https://onlinemarketingagency.ca/local-seo-services',
  },
  twitter: {
    title: 'Local SEO Services Canada | Rank Higher on Google Maps | OMA',
    description:
      'Local SEO services for businesses across Canada — rank higher on Google Maps and get more calls from nearby customers. GBP optimization, citations, local content. Free audit.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Services',
  provider: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  description:
    'Local SEO services for small businesses in Canada. Rank higher for city, neighbourhood, and near me searches on Google Maps and local search results.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: 'Local SEO',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is local SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local SEO is the process of optimizing your online presence to rank higher in Google Maps, the local map pack, and location-based search results. It targets searches like "dentist near me" or "plumber in Toronto" — the searches made by customers who are ready to book.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does local SEO take to show results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Business Profile improvements can show results in 4–8 weeks. Broader local SEO improvements — like citation building, local link building, and location page content — typically show meaningful ranking improvements in 3–6 months. We report on progress monthly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer local SEO services in Toronto, Vancouver, Calgary, and other Canadian cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide local SEO services for businesses across Canada — Toronto, Mississauga, Brampton, Vancouver, Calgary, Edmonton, Ottawa, Hamilton, and smaller cities and towns throughout the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between local SEO and Google Business Profile optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Business Profile optimization is one important component of local SEO. Full local SEO also includes citation building, local link building, on-page local optimization (location pages, city content), and review strategy. Together these signals determine where you rank in Google Maps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rank in multiple cities with local SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. With a proper service area page strategy, we can help your business rank in multiple cities and service areas beyond your primary location. This is especially effective for contractors, home service companies, and businesses that serve a regional area.',
      },
    },
  ],
}

const bodyContent = (
  <div className="space-y-6 text-base leading-relaxed" style={{ color: '#374151' }}>
    <h2 className="text-2xl font-black" style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}>
      Why Local Search Visibility Determines Whether Your Phone Rings
    </h2>
    <p>
      When a homeowner in Mississauga needs a plumber, they do not flip through the Yellow Pages. They open
      Google on their phone, type "plumber near me," and call one of the three businesses in the map pack.
      If your business is not in those top three Google Maps results, you are invisible to the majority of
      local customers who are ready to book right now. Local SEO is the discipline that puts you there —
      and keeps you there as your competitors try to displace you.
    </p>
    <p>
      Local SEO is different from general{' '}
      <Link href="/seo-services" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        SEO services
      </Link>{' '}
      because the ranking signals are different. Google Maps rankings are determined primarily by three
      factors: relevance (how well your profile matches the search), proximity (how close you are to the
      searcher), and prominence (how authoritative and active your local presence is). While you cannot
      control proximity, you can significantly improve relevance and prominence through a well-executed
      local SEO strategy — and that is where the biggest ranking gains come from.
    </p>
    <p>
      Citation consistency is one of the most underestimated local SEO factors. If your business name,
      address, and phone number appear differently across Google, Apple Maps, Yelp, Yellow Pages, and other
      directories, Google loses confidence in your business data and suppresses your rankings. We audit and
      correct all citation inconsistencies as part of our local SEO service — building a clean, consistent
      local presence that reinforces your Google Business Profile signals.
    </p>
    <p>
      For businesses that serve multiple cities and service areas, local SEO also involves creating
      properly optimized location landing pages for each area you want to rank in. A roofing company
      serving Toronto, Mississauga, and Brampton needs dedicated, content-rich pages for each city — not
      thin duplicate pages that Google ignores, but genuinely useful, locally-relevant content that
      demonstrates expertise and earns rankings. Paired with{' '}
      <Link href="/google-business-profile-optimization" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        Google Business Profile optimization
      </Link>{' '}
      and an active review generation strategy, these location pages can significantly expand your local
      search footprint. If you also want to immediately capture leads while your local SEO builds, combining
      it with{' '}
      <Link href="/google-ads-management" className="font-semibold underline" style={{ color: '#0F0F12' }}>
        Google Ads management
      </Link>{' '}
      gives you immediate visibility alongside long-term organic growth.
    </p>
  </div>
)

export default function LocalSEOPage() {
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
        label="Local SEO Agency · Canada"
        h1="Local SEO Services for Small Businesses That Need More Local Customers"
        intro="We help local businesses rank higher in Google Maps, the local map pack, and city-specific search results across Canada. When a customer in your city searches for your service, you need to appear at the top of Google Maps — not buried on page two. Our local SEO services build that visibility."
        keywords={[
          'local SEO services Canada',
          'local SEO agency',
          'near me SEO',
          'Google Maps SEO Canada',
          'local search optimization Canada',
        ]}
        stats={[
          { value: '#1', label: 'Map pack positions earned' },
          { value: '4–8', label: 'Weeks to first improvements' },
          { value: '50+', label: 'Local businesses served' },
          { value: '$0', label: 'Lock-in contracts' },
        ]}
        benefits={[
          {
            title: 'Google Maps Visibility',
            desc: 'Appear in the local map pack for high-intent searches made by customers in your city and service area.',
          },
          {
            title: 'Near Me Search Rankings',
            desc: 'Rank for location-based searches like "plumber near me" or "dentist in Toronto" — the searches that convert at the highest rate.',
          },
          {
            title: 'More Inbound Calls',
            desc: 'Higher local rankings drive more phone calls directly from Google Maps, where customers can call with one tap.',
          },
          {
            title: 'City & Neighbourhood Rankings',
            desc: 'Rank for your primary city plus surrounding neighbourhoods and service areas to maximize your local reach.',
          },
          {
            title: 'Local Citation Building',
            desc: 'Consistent business listings across Google, Apple Maps, Bing, Yelp, and 40+ local directories — the foundation of local authority.',
          },
          {
            title: 'Outrank Local Competitors',
            desc: 'Identify exactly what your top local competitors are doing and build a strategy to outperform them in your market.',
          },
        ]}
        problemsIntro={[
          'The most common pain point we hear from local business owners is this: "I know I should be showing up on Google Maps, but I am not — and I do not know why." The frustrating truth is that local search rankings are not random. They are the result of specific, measurable signals that Google evaluates. When those signals are incomplete, inconsistent, or weak compared to your competitors, your business does not appear — no matter how good your actual service is.',
          'Citation inconsistency is a hidden local SEO killer. Your business name might appear as "ABC Plumbing" on your website, "ABC Plumbing Inc." on Yelp, and "ABC Plumbing Services" on Yellow Pages. Your phone number might show two different area codes. These inconsistencies signal to Google that your business data is unreliable — and your local rankings suffer as a result. Most local businesses do not even know these inconsistencies exist until we run an audit.',
          'Neglected or incomplete Google Business Profiles are another widespread problem. A GBP with missing hours, outdated photos, no service descriptions, and zero recent posts signals to Google that the business is either not active or not authoritative. Competitors who actively maintain their profiles — adding photos weekly, responding to reviews, publishing posts, and answering Q&As — consistently outrank those who do not.',
          'At OMA, we address every one of these issues systematically. We audit your citations, clean up inconsistencies, fully optimize your Google Business Profile, build local authority through link building and review strategy, and create location-specific content that ranks across your service area. The result is a local presence that consistently appears at the top of Google Maps for the searches that matter most.',
        ]}
        problems={[
          {
            title: 'Not appearing in Google Maps at all',
            desc: 'Weak or missing local signals mean your business is invisible to the customers who are ready to book right now.',
          },
          {
            title: 'Inconsistent NAP across directories',
            desc: 'Different versions of your name, address, or phone number across directories confuse Google and suppress your local rankings.',
          },
          {
            title: 'Competitors ranking above you in every search',
            desc: 'Local competitors with stronger GBP profiles, more reviews, and more citations consistently beat you for the same local searches.',
          },
          {
            title: 'No visibility in surrounding cities or service areas',
            desc: 'Businesses that serve multiple cities need location-specific pages and strategies to rank beyond their primary address.',
          },
        ]}
        bodyContent={bodyContent}
        whatWeDoTitle="What Our Local SEO Services Include"
        whatWeDoBody="A complete local SEO strategy designed to increase your visibility in Google Maps and local search results."
        whatWeDo={[
          {
            title: 'Google Business Profile Optimization',
            desc: 'Optimize your GBP listing to rank higher in the map pack and generate more calls and direction requests.',
          },
          {
            title: 'Local Keyword Research',
            desc: 'Identify the city and neighbourhood keywords with the highest local search volume and commercial intent in your market.',
          },
          {
            title: 'Local Citation Building',
            desc: 'Build consistent NAP listings across Google, Apple Maps, Bing, Yelp, Yellow Pages, and 40+ local directories.',
          },
          {
            title: 'On-Page Local SEO',
            desc: 'Optimize location pages, service area pages, and city-specific content on your website for local search signals.',
          },
          {
            title: 'Review Generation Strategy',
            desc: 'Build a system for generating genuine customer reviews on Google to improve local rankings and click-through rates.',
          },
          {
            title: 'Local Link Building',
            desc: 'Earn backlinks from local business associations, chambers of commerce, and local news and media.',
          },
          {
            title: 'Competitor Gap Analysis',
            desc: 'Identify what your top local competitors have that you do not, and systematically close the gap.',
          },
          {
            title: 'Location & Service Area Pages',
            desc: 'Create optimized landing pages for each city and service area you want to rank in on Google Maps.',
          },
          {
            title: 'Monthly Local Rank Tracking',
            desc: 'Track your Google Maps rankings, local keyword positions, and call volume — reported monthly.',
          },
        ]}
        pricing={{
          price: 'from $399',
          period: '/ month',
          bullets: [
            'Full Google Business Profile optimization and ongoing management',
            'Local citation audit, cleanup, and new citation building across 40+ directories',
            'Location and service area page creation for multi-city ranking',
            'Monthly local rank tracking and reporting: map pack positions, calls, and traffic',
          ],
        }}
        process={[
          {
            step: '01',
            title: 'Local Presence Audit',
            desc: 'We review your GBP profile, existing citations, current map pack rankings, and analyze your top local competitors to find the gaps.',
          },
          {
            step: '02',
            title: 'Optimize & Build',
            desc: 'We fully optimize your GBP, clean up citations, build new local links, and create location and service area pages targeting your city keywords.',
          },
          {
            step: '03',
            title: 'Track & Improve',
            desc: 'We monitor your Google Maps rankings, call volume, and profile performance monthly — adjusting strategy based on what is working.',
          },
        ]}
        whoItsFor={[
          'Plumbers & Plumbing Companies',
          'HVAC & Heating Companies',
          'Electricians',
          'Roofing Contractors',
          'Dentists & Dental Clinics',
          'Physiotherapy & Clinics',
          'Lawyers & Law Firms',
          'Restaurants & Cafes',
          'Barbershops & Salons',
          'Landscapers',
          'Cleaners & Cleaning Services',
          'Auto Repair Shops',
          'Real Estate Agents',
          'Home Renovation Contractors',
        ]}
        faqs={[
          {
            question: 'What is local SEO?',
            answer:
              'Local SEO is the process of optimizing your online presence to rank higher in Google Maps, the local map pack, and location-based search results. It targets searches like "dentist near me" or "plumber in Toronto" — the searches made by customers who are ready to book.',
          },
          {
            question: 'How long does local SEO take to show results?',
            answer:
              'Google Business Profile improvements can show results in 4–8 weeks. Broader local SEO improvements — like citation building, local link building, and location page content — typically show meaningful ranking improvements in 3–6 months. We report on progress monthly.',
          },
          {
            question: 'Do you offer local SEO services in Toronto, Vancouver, Calgary, and other Canadian cities?',
            answer:
              'Yes. We provide local SEO services for businesses across Canada — Toronto, Mississauga, Brampton, Vancouver, Calgary, Edmonton, Ottawa, Hamilton, and smaller cities and towns throughout the country.',
          },
          {
            question: 'What is the difference between local SEO and Google Business Profile optimization?',
            answer:
              'Google Business Profile optimization is one important component of local SEO. Full local SEO also includes citation building, local link building, on-page local optimization (location pages, city content), and review strategy. Together these signals determine where you rank in Google Maps.',
          },
          {
            question: 'Can I rank in multiple cities with local SEO?',
            answer:
              'Yes. With a proper service area page strategy, we can help your business rank in multiple cities and service areas beyond your primary location. This is especially effective for contractors, home service companies, and businesses that serve a regional area.',
          },
        ]}
        relatedServices={[
          { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
          { label: 'SEO Services', href: '/seo-services' },
          { label: 'Google Ads Management', href: '/google-ads-management' },
          { label: 'Website Design', href: '/website-design-for-small-business' },
        ]}
        breadcrumb={[
          { label: 'Services', href: '/#services' },
          { label: 'Local SEO Services' },
        ]}
      />
    </>
  )
}
