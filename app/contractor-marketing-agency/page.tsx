import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Contractor Marketing Agency | Get More Quote Requests & Project Leads',
  description:
    'Digital marketing for contractors in Canada. Get more quote requests, project leads, and booked jobs with Google Ads, Local SEO, and a conversion-ready contractor website.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/contractor-marketing-agency' },
}

export default function ContractorMarketingPage() {
  return (
    <IndustryPageTemplate
      label="Contractor Marketing Agency"
      h1="Digital Marketing For Contractors That Need More Quote Requests And Project Leads"
      intro="We help contractors across Canada generate more quote requests, project inquiries, and booked jobs through Google Ads, Local SEO, and lead-focused websites. Whether you are a general contractor, roofer, plumber, electrician, or home renovation company, we build the marketing system that keeps your schedule full."
      services={[
        {
          title: 'Google Ads For Contractors',
          desc: 'Run targeted search campaigns that reach homeowners actively searching for contractors in your area.',
        },
        {
          title: 'Local SEO',
          desc: 'Rank for location-based contractor searches and near me queries in your service area.',
        },
        {
          title: 'Google Business Profile Optimization',
          desc: 'Improve your Google Maps presence to capture more direct calls and quote requests.',
        },
        {
          title: 'Contractor Website Design',
          desc: 'A professional, mobile-friendly website with a quote request form and project portfolio.',
        },
        {
          title: 'Lead Generation System',
          desc: 'A multi-channel system that drives consistent project leads from Google search and local results.',
        },
        {
          title: 'Review Generation',
          desc: 'Build trust and improve rankings with a consistent flow of genuine customer reviews.',
        },
      ]}
      challenges={[
        {
          title: 'Relying on word of mouth and slow seasons',
          desc: 'Google Ads generate consistent project leads year-round regardless of referral volume.',
        },
        {
          title: 'Competitors ranking above you on Google',
          desc: 'Local SEO and Google Business Profile optimization move you to the top of local search results.',
        },
        {
          title: 'No professional website to capture quote requests',
          desc: 'A lead-focused contractor website converts visitors into quote requests automatically.',
        },
        {
          title: 'Hard to stand out from other contractors',
          desc: 'Strong reviews, a professional website, and consistent Google Maps presence differentiate you from competitors.',
        },
      ]}
      faqs={[
        {
          question: 'What is the best marketing strategy for a contractor?',
          answer:
            'Google Ads targeting high-intent searches like "roofer in [city]" or "kitchen renovation contractor near me" generate the fastest leads. Combined with Local SEO and Google Business Profile optimization, this creates a consistent lead generation system.',
        },
        {
          question: 'How do contractors get more leads online?',
          answer:
            'The most effective channels for contractor lead generation are Google Search Ads, Google Maps visibility, Local SEO, and a professional website with a clear quote request form.',
        },
        {
          question: 'Do you work with specific types of contractors?',
          answer:
            'Yes. We work with general contractors, roofers, plumbers, electricians, HVAC companies, home renovation contractors, landscapers, and other home service businesses.',
        },
        {
          question: 'How much do contractor marketing services cost?',
          answer:
            'Our contractor marketing starts from $199 per month for Google Ads management. A full lead generation system with ads, SEO, and website optimization is priced on a custom basis.',
        },
      ]}
      relatedIndustries={[
        { label: 'Barbershop Marketing', href: '/barber-marketing-agency' },
        { label: 'Clinic Marketing', href: '/clinic-marketing-agency' },
        { label: 'Restaurant Marketing', href: '/restaurant-marketing-agency' },
      ]}
      breadcrumb={[
        { label: 'Industries', href: '/#industries' },
        { label: 'Contractor Marketing' },
      ]}
    />
  )
}
