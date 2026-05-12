import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Barbershop Marketing Agency | Get More Haircut Bookings',
  description:
    'Barbershop marketing agency for Canadian barbers — get more haircut bookings, walk-ins, and phone calls with Google Ads, Local SEO, and Google Business Profile optimization.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/barber-marketing-agency' },
  keywords: [
    'barbershop marketing agency',
    'barber marketing Canada',
    'barbershop digital marketing',
  ],
  openGraph: {
    title: 'Barbershop Marketing Agency | Get More Haircut Bookings',
    description:
      'Barbershop marketing agency for Canadian barbers — get more haircut bookings, walk-ins, and phone calls with Google Ads, Local SEO, and Google Business Profile optimization.',
    url: 'https://onlinemarketingagency.ca/barber-marketing-agency',
  },
  twitter: {
    title: 'Barbershop Marketing Agency | Get More Haircut Bookings',
    description:
      'Barbershop marketing agency for Canadian barbers — get more haircut bookings, walk-ins, and phone calls with Google Ads, Local SEO, and Google Business Profile optimization.',
  },
}

export default function BarberMarketingPage() {
  return (
    <IndustryPageTemplate
      label="Barbershop Marketing Agency"
      h1="Digital Marketing For Barbershops That Need More Bookings And Walk-Ins"
      intro="We help barbershops across Canada get more haircut bookings, phone calls, and local visibility. Whether you want to fill your appointment calendar, attract new clients, or stand out from competing shops nearby, we build the marketing system to make it happen."
      services={[
        {
          title: 'Google Business Profile Optimization',
          desc: 'Rank higher in Google Maps when customers search "barbershop near me" or "haircut in [city]".',
        },
        {
          title: 'Local SEO',
          desc: 'Appear in local Google search results for neighbourhood and city-based haircut searches.',
        },
        {
          title: 'Google Ads For Barbershops',
          desc: 'Run targeted Google Search campaigns that drive booking requests and calls to your shop.',
        },
        {
          title: 'Website Design',
          desc: 'A clean, mobile-friendly barbershop website with online booking and click-to-call.',
        },
        {
          title: 'Facebook And Instagram Ads',
          desc: 'Build local brand awareness and promote your services to nearby customers on social media.',
        },
        {
          title: 'Review Generation',
          desc: 'A system for generating consistent five-star Google reviews that improve local rankings.',
        },
      ]}
      challenges={[
        {
          title: 'Not appearing in Google Maps for nearby searches',
          desc: 'When someone searches "barbershop near me," we make sure your shop appears at the top of the local results.',
        },
        {
          title: 'Empty appointment slots during slow periods',
          desc: 'Targeted Google and social ads can fill slow days with new and returning client bookings.',
        },
        {
          title: 'No website or outdated online presence',
          desc: 'A modern barbershop website with booking integration gives customers a professional first impression and an easy way to book.',
        },
        {
          title: 'Few or no Google reviews',
          desc: 'We help you build a consistent stream of reviews that improve trust and local rankings.',
        },
      ]}
      faqs={[
        {
          question: 'Can digital marketing help a barbershop get more clients?',
          answer:
            'Yes. Google Business Profile optimization and Local SEO are especially effective for barbershops because most new clients search "barbershop near me" on Google Maps. An optimized profile with strong reviews drives consistent new client inquiries.',
        },
        {
          question: 'What is the best marketing channel for a barbershop?',
          answer:
            'Google Business Profile and Local SEO tend to generate the most consistent leads for barbershops since customers search locally before booking. Google Ads can supplement this with faster results, and Instagram Ads work well for building visual brand presence.',
        },
        {
          question: 'How much does barbershop marketing cost?',
          answer:
            'Our barbershop marketing services start from $199 per month for ads management and from $499 for a new website. We tailor the package to your goals and budget.',
        },
        {
          question: 'Do you work with single-location barbershops?',
          answer:
            'Yes. We work with single-location barbershops, multi-chair shops, and barbershop chains across Canada.',
        },
      ]}
      relatedIndustries={[
        { label: 'Clinic Marketing', href: '/clinic-marketing-agency' },
        { label: 'Restaurant Marketing', href: '/restaurant-marketing-agency' },
        { label: 'Contractor Marketing', href: '/contractor-marketing-agency' },
      ]}
      breadcrumb={[
        { label: 'Industries', href: '/#industries' },
        { label: 'Barbershop Marketing' },
      ]}
    />
  )
}
