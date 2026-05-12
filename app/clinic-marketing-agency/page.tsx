import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Clinic Marketing Agency | Get More Patient Bookings',
  description:
    'Clinic marketing agency for Canadian healthcare businesses — get more patient bookings, consultation requests, and local visibility with Google Ads, SEO, and website design.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/clinic-marketing-agency' },
  keywords: [
    'clinic marketing agency',
    'medical clinic marketing Canada',
    'healthcare digital marketing Canada',
  ],
  openGraph: {
    title: 'Clinic Marketing Agency | Get More Patient Bookings',
    description:
      'Clinic marketing agency for Canadian healthcare businesses — get more patient bookings, consultation requests, and local visibility with Google Ads, SEO, and website design.',
    url: 'https://onlinemarketingagency.ca/clinic-marketing-agency',
  },
  twitter: {
    title: 'Clinic Marketing Agency | Get More Patient Bookings',
    description:
      'Clinic marketing agency for Canadian healthcare businesses — get more patient bookings, consultation requests, and local visibility with Google Ads, SEO, and website design.',
  },
}

export default function ClinicMarketingPage() {
  return (
    <IndustryPageTemplate
      label="Clinic Marketing Agency"
      h1="Digital Marketing For Clinics That Need More Patient Bookings"
      intro="We help medical clinics, dental practices, physiotherapy clinics, chiropractic offices, and other healthcare businesses across Canada generate more patient bookings, consultation requests, and local visibility. Our marketing strategies are built around patient acquisition while maintaining a professional and trustworthy presence."
      services={[
        {
          title: 'Google Ads For Clinics',
          desc: 'Target patients searching for your specific clinical services in your city or neighbourhood.',
        },
        {
          title: 'Local SEO For Healthcare',
          desc: 'Rank higher in Google Maps and local search results for medical and clinical searches.',
        },
        {
          title: 'Google Business Profile Management',
          desc: 'Optimize your clinic profile to appear prominently in local searches and attract new patients.',
        },
        {
          title: 'Clinic Website Design',
          desc: 'A professional, mobile-friendly clinic website with online booking and service pages.',
        },
        {
          title: 'Patient Review Strategy',
          desc: 'Generate consistent patient reviews to build trust and improve local search rankings.',
        },
        {
          title: 'SEO Content',
          desc: 'Create informative service pages and content that rank for patient-intent search terms.',
        },
      ]}
      challenges={[
        {
          title: 'Low Google Maps visibility for clinic searches',
          desc: 'We optimize your Google Business Profile and local presence so your clinic appears when patients search nearby.',
        },
        {
          title: 'Difficulty attracting new patients outside referrals',
          desc: 'Google Ads and Local SEO create a consistent inbound channel that generates new patient bookings.',
        },
        {
          title: 'Outdated website that does not convert visitors',
          desc: 'A professional clinic website with clear service pages and booking integration converts more visitors into appointments.',
        },
        {
          title: 'Limited online reviews compared to competitors',
          desc: 'We set up a review generation strategy that builds your clinic reputation and improves local rankings.',
        },
      ]}
      faqs={[
        {
          question: 'What digital marketing works best for clinics?',
          answer:
            'Google Ads targeting high-intent patient searches, combined with Local SEO and Google Business Profile optimization, generates the most consistent patient bookings for clinics. The combination captures patients at every point in their search journey.',
        },
        {
          question: 'Do you work with medical clinics and dental practices?',
          answer:
            'Yes. We work with general medical clinics, dental practices, physiotherapy clinics, chiropractic offices, naturopathic clinics, optometrists, and other healthcare businesses.',
        },
        {
          question: 'Is digital marketing for healthcare different from other industries?',
          answer:
            'Healthcare marketing requires a more careful, professional tone and focus on trust, credentials, and patient outcomes. We build clinic marketing that is professional and compliant while still being effective at generating bookings.',
        },
        {
          question: 'How do clinics get more patients through Google?',
          answer:
            'Clinics attract new patients through Google Ads targeting service-specific searches, Local SEO that improves Google Maps rankings, and a well-optimized website with clear booking options and informative service pages.',
        },
      ]}
      relatedIndustries={[
        { label: 'Barbershop Marketing', href: '/barber-marketing-agency' },
        { label: 'Contractor Marketing', href: '/contractor-marketing-agency' },
        { label: 'Restaurant Marketing', href: '/restaurant-marketing-agency' },
      ]}
      breadcrumb={[
        { label: 'Industries', href: '/#industries' },
        { label: 'Clinic Marketing' },
      ]}
    />
  )
}
