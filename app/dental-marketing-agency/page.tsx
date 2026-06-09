import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Dental Marketing Agency | More New Patient Bookings',
  description:
    'Dental marketing agency for Canadian dentists and dental clinics — get more new patient bookings with Google Ads, Local SEO, and Google Business Profile optimization.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/dental-marketing-agency' },
  keywords: [
    'dental marketing agency',
    'dentist marketing Canada',
    'dental SEO',
    'new patient marketing for dentists',
  ],
  openGraph: {
    title: 'Dental Marketing Agency | More New Patient Bookings',
    description:
      'Dental marketing agency for Canadian dentists — get more new patient bookings with Google Ads, Local SEO, and Google Business Profile optimization.',
    url: 'https://onlinemarketingagency.ca/dental-marketing-agency',
  },
  twitter: {
    title: 'Dental Marketing Agency | More New Patient Bookings',
    description:
      'Dental marketing agency for Canadian dentists — get more new patient bookings with Google Ads, Local SEO, and GBP optimization.',
  },
}

export default function DentalMarketingPage() {
  return (
    <IndustryPageTemplate
      label="Dental Marketing Agency"
      h1="Digital Marketing For Dental Clinics That Need More New Patients"
      intro="We help dentists and dental clinics across the Greater Toronto Area attract more new patient bookings through Google Ads, Local SEO, and Google Business Profile optimization. Whether you are growing a general practice, promoting Invisalign and cosmetic services, or filling your hygiene schedule, we build a marketing system designed around booked appointments."
      services={[
        {
          title: 'Google Ads For Dentists',
          desc: 'High-intent campaigns for "dentist near me," "emergency dentist," and high-value services like Invisalign and implants.',
        },
        {
          title: 'Local SEO',
          desc: 'Rank in local search and Google Maps for dental searches across your city and surrounding neighbourhoods.',
        },
        {
          title: 'Google Business Profile Optimization',
          desc: 'A complete, review-rich profile that wins the local map pack and builds patient trust.',
        },
        {
          title: 'Dental Website Design',
          desc: 'A modern, mobile-first site with services, new-patient offers, and easy online booking.',
        },
        {
          title: 'Review Generation',
          desc: 'A compliant system for earning consistent five-star reviews that lift rankings and convert searchers into patients.',
        },
        {
          title: 'Conversion & Call Tracking',
          desc: 'Measure which campaigns produce booked new patients, so budget goes to what actually fills the schedule.',
        },
      ]}
      challenges={[
        {
          title: 'High competition from nearby clinics',
          desc: 'Dental is one of the most competitive local categories. We focus on Google Business Profile strength, reviews, and tightly targeted ads to help you stand out in a crowded map pack.',
        },
        {
          title: 'Empty hygiene and new-patient slots',
          desc: 'Targeted Google Ads and new-patient offers fill open appointments and recall gaps with the patient types you want most.',
        },
        {
          title: 'Low visibility for high-value treatments',
          desc: 'We build content and campaigns around profitable services — implants, Invisalign, cosmetic, and emergency care — not just generic "dentist" terms.',
        },
        {
          title: 'Few reviews compared to established practices',
          desc: 'Reviews are decisive when patients choose a dentist. We help you build a steady review pipeline after positive visits.',
        },
      ]}
      faqs={[
        {
          question: 'Can digital marketing get my dental clinic more patients?',
          answer:
            'Yes. For dental clinics, a combination of Google Business Profile optimization, Local SEO, and Google Ads consistently produces new patient bookings. Patients searching "dentist near me" or "emergency dentist" have high intent — appearing at the top with strong reviews reliably drives calls and online bookings.',
        },
        {
          question: 'What is the best marketing channel for a dentist?',
          answer:
            'Google Business Profile and Local SEO generate the most consistent new patients because people search locally before booking. Google Ads adds faster results, especially for high-value treatments like implants and Invisalign. Reviews matter across every channel for converting searchers into booked patients.',
        },
        {
          question: 'How much does dental marketing cost?',
          answer:
            'Our Google Ads management for dental clinics starts from $199 per month plus ad spend, and websites start from $499. Dental keywords can be competitive, so we recommend an ad budget suited to your market and target treatments — we will suggest a figure after a free audit.',
        },
        {
          question: 'Do you work with single-location and multi-location practices?',
          answer:
            'Yes. We work with single-location dental clinics, growing practices, and multi-location groups across the GTA. Campaigns and local SEO can be scoped to one location or coordinated across several.',
        },
      ]}
      relatedIndustries={[
        { label: 'Clinic Marketing', href: '/clinic-marketing-agency' },
        { label: 'Law Firm Marketing', href: '/law-firm-marketing-agency' },
        { label: 'Barbershop Marketing', href: '/barber-marketing-agency' },
      ]}
      breadcrumb={[
        { label: 'Industries', href: '/#industries' },
        { label: 'Dental Marketing' },
      ]}
    />
  )
}
