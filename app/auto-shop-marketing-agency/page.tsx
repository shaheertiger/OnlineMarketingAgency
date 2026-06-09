import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Auto Shop Marketing Agency | More Service Appointments',
  description:
    'Auto repair shop marketing agency for Canadian auto businesses — get more booked service appointments with Google Ads, Local SEO, and Google Business Profile optimization.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/auto-shop-marketing-agency' },
  keywords: [
    'auto shop marketing agency',
    'auto repair marketing Canada',
    'mechanic marketing',
    'auto repair digital marketing',
  ],
  openGraph: {
    title: 'Auto Shop Marketing Agency | More Service Appointments',
    description:
      'Auto repair shop marketing agency for Canadian auto businesses — get more booked service appointments with Google Ads, Local SEO, and GBP optimization.',
    url: 'https://onlinemarketingagency.ca/auto-shop-marketing-agency',
  },
  twitter: {
    title: 'Auto Shop Marketing Agency | More Service Appointments',
    description:
      'Auto repair shop marketing agency for Canadian auto businesses — get more booked service appointments with Google Ads, Local SEO, and GBP optimization.',
  },
}

export default function AutoShopMarketingPage() {
  return (
    <IndustryPageTemplate
      label="Auto Shop Marketing Agency"
      h1="Digital Marketing For Auto Shops That Need More Booked Service Appointments"
      intro="We help auto repair shops, mechanics, tire shops, and detailing businesses across the Greater Toronto Area get more booked service appointments through Google Ads, Local SEO, and Google Business Profile optimization. When a driver searches for repair or maintenance nearby, we make sure your shop is the one they call."
      services={[
        {
          title: 'Google Business Profile Optimization',
          desc: 'Win the local map pack for "auto repair near me," "oil change [city]," and "mechanic near me" searches.',
        },
        {
          title: 'Local SEO',
          desc: 'Rank in local search across the neighbourhoods and nearby cities your customers drive in from.',
        },
        {
          title: 'Google Ads For Auto Shops',
          desc: 'Targeted Search campaigns for high-value services — brakes, transmissions, diagnostics, and seasonal tire changeovers.',
        },
        {
          title: 'Website Design',
          desc: 'A fast, mobile-friendly site with services, pricing, and click-to-call or online booking for appointments.',
        },
        {
          title: 'Review Generation',
          desc: 'A system for earning consistent five-star reviews that build trust and lift your local rankings.',
        },
        {
          title: 'Conversion & Call Tracking',
          desc: 'Track which campaigns and keywords produce booked appointments, not just phone clicks.',
        },
      ]}
      challenges={[
        {
          title: 'Not showing up for "near me" repair searches',
          desc: 'Most auto customers search on their phone for a nearby shop. We optimize your Google Business Profile and local SEO so you appear at the top of those results.',
        },
        {
          title: 'Slow days and unbooked bays',
          desc: 'Targeted Google Ads can fill slow periods with bookings for specific high-margin services like brakes, diagnostics, and seasonal tire changes.',
        },
        {
          title: 'Strong competition from dealerships and chains',
          desc: 'Independent shops can win on trust and reviews. We help you build a review profile and local presence that competes with the big franchises.',
        },
        {
          title: 'One-time customers who never return',
          desc: 'We help set up review requests and remarketing so first-time customers come back for ongoing maintenance instead of going elsewhere.',
        },
      ]}
      faqs={[
        {
          question: 'Can digital marketing get my auto shop more customers?',
          answer:
            'Yes. Google Business Profile optimization and Local SEO are especially effective for auto shops because most customers search "auto repair near me" or "mechanic near me" on their phone. An optimized profile with strong reviews drives a steady stream of calls and booked appointments.',
        },
        {
          question: 'What is the best marketing channel for an auto repair shop?',
          answer:
            'Google Business Profile and Local SEO usually generate the most consistent leads for auto shops because customers search locally at the moment of need. Google Ads adds faster results for high-value services. Reviews are critical across all channels for winning trust over dealerships and chains.',
        },
        {
          question: 'How much does auto shop marketing cost?',
          answer:
            'Our Google Ads management starts from $199 per month plus ad spend, and websites start from $499. We tailor the budget to your services and local competition, and recommend a plan after a free marketing audit.',
        },
        {
          question: 'Do you work with independent shops and franchises?',
          answer:
            'Yes. We work with independent auto repair shops, mechanics, tire shops, detailing businesses, and franchise locations across the GTA. Our strategies are built to help local shops compete with dealerships and national chains.',
        },
      ]}
      relatedIndustries={[
        { label: 'Contractor Marketing', href: '/contractor-marketing-agency' },
        { label: 'Real Estate Marketing', href: '/real-estate-marketing-agency' },
        { label: 'Barbershop Marketing', href: '/barber-marketing-agency' },
      ]}
      breadcrumb={[
        { label: 'Industries', href: '/#industries' },
        { label: 'Auto Shop Marketing' },
      ]}
    />
  )
}
