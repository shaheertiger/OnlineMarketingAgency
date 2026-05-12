'use client'

import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What does a digital marketing agency do?',
    answer:
      'A digital marketing agency helps businesses get more customers online. This includes managing Google Ads campaigns, improving SEO rankings, optimizing Google Business Profile listings, building conversion-ready websites, running Facebook and Instagram ads, and setting up lead generation systems. The goal is to generate measurable business outcomes like phone calls, bookings, and form submissions.',
  },
  {
    question: 'How much should a small business spend on Google Ads?',
    answer:
      'For most local service businesses in Canada, a starting budget of $500 to $1,500 per month is common for Google Ads. The right budget depends on your industry, location, competition, and the cost per lead in your market. We recommend starting with a focused campaign targeting your highest-value services and scaling based on results.',
  },
  {
    question: 'Do you offer Google Ads management?',
    answer:
      'Yes. We build and manage Google Search campaigns for local businesses across Canada. This includes keyword research, ad copy, bidding strategy, negative keywords, conversion tracking, and ongoing optimization. Our Google Ads management starts from $199 per month plus ad spend.',
  },
  {
    question: 'Do you provide local SEO services?',
    answer:
      'Yes. Our local SEO services help small businesses rank higher for city, neighbourhood, and near me searches on Google. This includes Google Business Profile optimization, local citation building, on-page local SEO, and location-specific content strategy.',
  },
  {
    question: 'Can you optimize my Google Business Profile?',
    answer:
      'Yes. Google Business Profile optimization is one of our core services. We improve your profile completeness, category selection, service descriptions, photo strategy, review management, and post activity to increase your visibility in Google Maps and local search results.',
  },
  {
    question: 'Do you build websites for small businesses?',
    answer:
      'Yes. We design and build clean, fast, mobile-friendly websites for small businesses starting from $499. Every website we build is designed to convert visitors into leads through clear calls to action, contact forms, click-to-call buttons, and a professional layout.',
  },
  {
    question: 'Do you manage Facebook and Instagram ads?',
    answer:
      'Yes. We run Facebook Ads and Instagram Ads for local businesses that want to build brand awareness, retarget website visitors, and generate customer inquiries through Meta advertising.',
  },
  {
    question: 'How long does SEO take?',
    answer:
      'SEO results typically take 3 to 6 months to become significant, depending on your industry, location, existing website authority, and competition. Local SEO for Google Maps can often show improvements faster. We track rankings, organic traffic, and lead volume monthly to show measurable progress.',
  },
  {
    question: 'What is included in a free marketing audit?',
    answer:
      'Our free marketing audit reviews your website, current Google rankings, Google Business Profile, any active ad campaigns, competitor visibility, and conversion setup. We identify the biggest gaps and opportunities, then provide a clear summary of what we would prioritize to generate more leads for your business.',
  },
  {
    question: 'Do you work with barbershops, clinics, contractors, and restaurants?',
    answer:
      'Yes. We work with a wide range of local service businesses including barbershops, medical clinics, general contractors, home service companies, restaurants, law firms, dental practices, auto businesses, and retail stores. Our services are designed for businesses that rely on local customers.',
  },
]

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: isOpen ? 'rgba(15, 23, 42, 0.9)' : 'rgba(11, 17, 32, 0.6)',
        border: isOpen ? '1px solid rgba(96,165,250,0.2)' : '1px solid rgba(51, 65, 85, 0.4)',
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold" style={{ color: isOpen ? '#F8FAFC' : '#CBD5E1' }}>
          {faq.question}
        </span>
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: isOpen ? 'rgba(37,99,235,0.2)' : 'rgba(51,65,85,0.4)',
            border: isOpen ? '1px solid rgba(96,165,250,0.3)' : '1px solid rgba(71,85,105,0.4)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: isOpen ? '#60A5FA' : '#475569' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="leading-relaxed" style={{ color: '#64748B' }}>{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection({ faqs = defaultFAQs }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      className="section-pad relative"
      style={{ background: '#060B18' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
            <p className="section-subtext">
              Common questions about our digital marketing services for local businesses.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
