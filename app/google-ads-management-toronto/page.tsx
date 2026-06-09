import type { Metadata } from 'next'
import ServiceCityPageTemplate from '@/components/ServiceCityPageTemplate'

export const metadata: Metadata = {
  title: 'Google Ads Management Toronto | More Calls, Lower Cost Per Lead | OMA',
  description:
    'Google Ads management in Toronto for local businesses — high-intent search campaigns, full call tracking, and lower cost per lead in a competitive market. Free audit.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/google-ads-management-toronto' },
  keywords: ['Google Ads management Toronto', 'Google Ads agency Toronto', 'PPC Toronto', 'Google Ads Toronto'],
  openGraph: {
    title: 'Google Ads Management Toronto | More Calls, Lower Cost Per Lead | OMA',
    description:
      'Google Ads management in Toronto — high-intent campaigns, full call tracking, and lower cost per lead.',
    url: 'https://onlinemarketingagency.ca/google-ads-management-toronto',
  },
  twitter: {
    title: 'Google Ads Management Toronto | More Calls, Lower Cost Per Lead | OMA',
    description: 'Google Ads management in Toronto with full call tracking and lower cost per lead.',
  },
}

export default function GoogleAdsTorontoPage() {
  return (
    <ServiceCityPageTemplate
      service="Google Ads Management"
      serviceType="Google Ads Management"
      city="Toronto"
      province="ON"
      slug="google-ads-management-toronto"
      h1="Google Ads Management in Toronto Built Around Calls, Not Clicks"
      intro="We manage Google Ads for Toronto local businesses with one goal: more booked jobs at a lower cost per lead. High-intent campaigns, full call tracking, and tight budget control in one of Canada's most competitive markets."
      body={[
        'Toronto is the most competitive local advertising market in Canada. Click costs are high, and broad, poorly-structured campaigns can burn through a budget without producing a single booked job. Winning here is less about spending more and more about spending precisely — capturing the high-intent searches that convert and ruthlessly excluding the ones that do not.',
        'Our Toronto Google Ads management is built around neighbourhood-level intent. Instead of bidding on broad terms like "plumber," we target searches such as "emergency plumber Scarborough," "AC repair North York," and "dentist near me Etobicoke" — the queries from people ready to call now. Tight ad groups, location targeting, and a continuously refined negative keyword list keep your spend on searches that actually become customers.',
        'Measurement is non-negotiable in a market this expensive. Every campaign we run includes call tracking on dedicated numbers, form-submission tracking in Google Analytics 4, and conversion tracking in Google Ads — so you know your true cost per booked job by service and neighbourhood, not just your cost per click. That data drives every optimization decision and every budget shift.',
        'Most Toronto businesses come to us either spending with no tracking, or sitting on the sidelines because earlier campaigns disappointed. In both cases the fix is the same: a clean rebuild around high-intent local searches, proper tracking, and disciplined budget allocation toward what demonstrably produces leads — then scaling that, month over month.',
      ]}
      bullets={[
        { title: 'High-intent Toronto keywords', desc: 'Neighbourhood-level targeting for searches that convert — not broad, budget-draining terms.' },
        { title: 'Full call & conversion tracking', desc: 'Know your true cost per booked job by service and area, not just cost per click.' },
        { title: 'Negative keyword discipline', desc: 'Aggressive exclusion of low-intent searches to protect spend in a high-CPC market.' },
        { title: 'Transparent monthly reporting', desc: 'Leads by campaign, cost per lead, and exactly what we optimized — in plain language.' },
      ]}
      faqs={[
        {
          question: 'How much should a Toronto business budget for Google Ads?',
          answer:
            'Most Toronto local businesses start with $500–$2,500/month in ad spend depending on industry and competition; highly competitive categories can require more. Management starts from $199/month on top of ad spend. Toronto click costs are high, so we recommend a budget that can compete in your specific category after a free audit.',
        },
        {
          question: 'How fast will I see leads from Google Ads in Toronto?',
          answer:
            'Google Ads can generate calls within 24–72 hours of launch because you are capturing existing demand. The first 30–60 days are used to gather conversion data and optimize toward your lowest cost per booked job.',
        },
        {
          question: 'Do you cover all Toronto neighbourhoods?',
          answer:
            'Yes. We target the areas that matter for your business — Scarborough, North York, Etobicoke, East York, York, and downtown Toronto — and adjust bids by location based on which areas produce the best leads.',
        },
      ]}
      parentService={{ label: 'Google Ads Management', href: '/google-ads-management' }}
      cityPage={{ label: 'Digital Marketing in Toronto', href: '/toronto' }}
      priceNote="Google Ads management from $199/month plus ad spend. Free Toronto account audit included."
    />
  )
}
