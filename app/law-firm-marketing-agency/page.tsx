import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Law Firm Marketing Agency | More Qualified Legal Leads',
  description:
    'Law firm marketing agency for Canadian lawyers — get more qualified consultation inquiries with Google Ads, Local SEO, and Google Business Profile optimization for legal practices.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/law-firm-marketing-agency' },
  keywords: [
    'law firm marketing agency',
    'lawyer marketing Canada',
    'legal marketing agency',
    'attorney digital marketing',
  ],
  openGraph: {
    title: 'Law Firm Marketing Agency | More Qualified Legal Leads',
    description:
      'Law firm marketing agency for Canadian lawyers — get more qualified consultation inquiries with Google Ads, Local SEO, and Google Business Profile optimization.',
    url: 'https://onlinemarketingagency.ca/law-firm-marketing-agency',
  },
  twitter: {
    title: 'Law Firm Marketing Agency | More Qualified Legal Leads',
    description:
      'Law firm marketing agency for Canadian lawyers — get more qualified consultation inquiries with Google Ads, Local SEO, and GBP optimization.',
  },
}

export default function LawFirmMarketingPage() {
  return (
    <IndustryPageTemplate
      label="Law Firm Marketing Agency"
      h1="Digital Marketing For Law Firms That Need More Qualified Consultations"
      intro="We help law firms and solo practitioners across the Greater Toronto Area attract more qualified consultation inquiries through Google Ads, Local SEO, and Google Business Profile optimization. Whether you practise family, personal injury, real estate, immigration, or business law, we build a marketing system that brings in the cases you actually want."
      services={[
        {
          title: 'Google Ads For Law Firms',
          desc: 'High-intent search campaigns for terms like "family lawyer near me" or "personal injury lawyer Toronto" that drive consultation calls.',
        },
        {
          title: 'Local SEO',
          desc: 'Rank in local search and Google Maps for your practice areas across the cities and neighbourhoods you serve.',
        },
        {
          title: 'Google Business Profile Optimization',
          desc: 'A complete, review-rich profile that builds trust and wins the local map pack for legal searches.',
        },
        {
          title: 'Law Firm Website Design',
          desc: 'A professional, mobile-first site with clear practice-area pages, attorney bios, and easy consultation booking.',
        },
        {
          title: 'Conversion & Call Tracking',
          desc: 'Know which campaigns and keywords produce real retained clients — not just clicks and form fills.',
        },
        {
          title: 'Review Generation',
          desc: 'An ethical, compliant system for earning more Google reviews that improve trust and local rankings.',
        },
      ]}
      challenges={[
        {
          title: 'High cost per click in competitive legal categories',
          desc: 'Legal keywords are among the most expensive in Google Ads. We focus budget on high-intent, lower-competition terms and tight negative keyword lists to protect your spend.',
        },
        {
          title: 'Unqualified or out-of-scope inquiries',
          desc: 'We target by practice area and geography so the calls you get are the matter types you actually take — not tire-kickers or cases outside your jurisdiction.',
        },
        {
          title: 'Thin or outdated website that does not build trust',
          desc: 'Prospective clients evaluate credibility in seconds. We build practice-area depth, attorney bios, and clear calls to action that turn visitors into booked consultations.',
        },
        {
          title: 'Few Google reviews compared to competitors',
          desc: 'Reviews are a powerful trust and ranking signal for law firms. We help you build a steady, compliant review pipeline after positive client outcomes.',
        },
      ]}
      faqs={[
        {
          question: 'Can digital marketing get my law firm more clients?',
          answer:
            'Yes. For most law firms, a combination of Google Ads and Local SEO produces the most consistent qualified consultations. Clients searching "family lawyer near me" or "personal injury lawyer" have high intent — appearing at the top of those results, with strong reviews, reliably drives consultation calls.',
        },
        {
          question: 'What is the best marketing channel for a law firm?',
          answer:
            'Google Ads generates the fastest results for law firms because it captures people actively searching for legal help. Local SEO and Google Business Profile optimization build long-term, lower-cost visibility. Most firms get the best results combining both, with full call tracking to measure cost per retained client.',
        },
        {
          question: 'How much does law firm marketing cost?',
          answer:
            'Our Google Ads management for law firms starts from $199 per month plus ad spend, and websites start from $499. Legal keywords carry higher click costs, so we recommend an ad budget appropriate to your practice areas and market — we will suggest a realistic figure after a free audit.',
        },
        {
          question: 'Do you work with solo practitioners and small firms?',
          answer:
            'Yes. We work with solo practitioners, boutique firms, and multi-lawyer practices across the GTA. Our services are priced and structured for small and mid-size firms, not large national chains.',
        },
      ]}
      relatedIndustries={[
        { label: 'Real Estate Marketing', href: '/real-estate-marketing-agency' },
        { label: 'Clinic Marketing', href: '/clinic-marketing-agency' },
        { label: 'Dental Marketing', href: '/dental-marketing-agency' },
      ]}
      breadcrumb={[
        { label: 'Industries', href: '/#industries' },
        { label: 'Law Firm Marketing' },
      ]}
    />
  )
}
