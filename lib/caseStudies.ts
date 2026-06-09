// Case studies shown on /case-studies and /case-studies/[slug], and referenced
// from the matching location pages. These mirror the homepage testimonials.
//
// NOTE: These are representative examples based on real client engagements.
// Figures are illustrative of typical outcomes; the "representative example"
// disclaimer is shown on every case-study surface.

import { SITE_URL } from '@/lib/site'

export interface CaseStudy {
  slug: string
  client: string
  industry: string
  city: string
  province: string
  headline: string
  summary: string
  metric: string
  metricLabel: string
  relatedService: { label: string; href: string }
  relatedLocation: { label: string; href: string }
  challenge: string[]
  approach: { month: string; title: string; desc: string }[]
  results: { value: string; label: string }[]
  quote: { text: string; name: string; role: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'prestige-barbershop-brampton',
    client: 'Prestige Barbershop',
    industry: 'Barbershop',
    city: 'Brampton',
    province: 'ON',
    headline: 'How a Brampton Barbershop Grew New Walk-In Clients by 500%',
    summary:
      'A Brampton barbershop was invisible on Google Maps in its own neighbourhood. We rebuilt its Google Business Profile, launched local Google Ads, and installed a review system — increasing new-client bookings fivefold in three months.',
    metric: '+500%',
    metricLabel: 'New Clients',
    relatedService: { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
    relatedLocation: { label: 'Digital Marketing in Brampton', href: '/brampton' },
    challenge: [
      'Prestige Barbershop was a well-reviewed shop with loyal regulars, but new-client growth had stalled. Despite a busy storefront, the business did not appear in Google Maps results when nearby residents searched "barbershop near me" or "haircut Brampton."',
      'The Google Business Profile was incomplete — missing categories, services, and recent photos — and the shop had no system for collecting reviews from happy customers. There were no ads running, so all new business depended on foot traffic and word of mouth.',
    ],
    approach: [
      {
        month: 'Month 1',
        title: 'Google Business Profile rebuild',
        desc: 'We completed every field on the GBP — primary and secondary categories, services, hours, and a fresh set of photos — and standardized the NAP across local directories so Google could confidently rank the listing.',
      },
      {
        month: 'Month 1–2',
        title: 'Local Google Ads launch',
        desc: 'We launched a tightly geo-targeted Google Search campaign around high-intent terms like "barbershop near me" and "fade haircut Brampton," with click-to-call and a small daily budget focused on the shop\'s immediate catchment area.',
      },
      {
        month: 'Month 2–3',
        title: 'Review generation system',
        desc: 'We set up an automated review-request flow so every satisfied customer received a direct link to leave a Google review, rapidly building review volume and velocity — the strongest local ranking signal.',
      },
    ],
    results: [
      { value: '3 → 18', label: 'New walk-ins per week' },
      { value: '+500%', label: 'New clients' },
      { value: 'Top 3', label: 'Map pack for core terms' },
      { value: '–60%', label: 'Cost per new client' },
    ],
    quote: {
      text: 'We went from 3 new walk-in clients a week to over 18 after they fixed our Google Ads and Google Business Profile. The cost per new client dropped so much it felt like cheating.',
      name: 'Ahmad K.',
      role: 'Owner, Prestige Barbershop',
    },
  },
  {
    slug: 'smile-dental-mississauga',
    client: 'Smile Dental Clinic',
    industry: 'Dental Clinic',
    city: 'Mississauga',
    province: 'ON',
    headline: 'How a Mississauga Dental Clinic Reached the #1 Google Map Position',
    summary:
      'A Mississauga dental clinic was stuck on page three of the local map pack. Through Google Business Profile optimization, local content, and a new-patient ad campaign, it reached the #1 map position and now books two weeks out.',
    metric: '#1',
    metricLabel: 'Map Rank',
    relatedService: { label: 'Local SEO Services', href: '/local-seo-services' },
    relatedLocation: { label: 'Digital Marketing in Mississauga', href: '/mississauga' },
    challenge: [
      'Smile Dental Clinic delivered excellent care but relied almost entirely on patient referrals. In local search, it sat on page three of the Google map pack — effectively invisible to the many Mississauga residents searching for a new dentist online.',
      'The website had thin, generic content with no Mississauga-specific pages, and the Google Business Profile was under-optimized with few recent reviews. High-value services like implants and Invisalign had no dedicated visibility.',
    ],
    approach: [
      {
        month: 'Month 1',
        title: 'GBP and citation cleanup',
        desc: 'We optimized the Google Business Profile, corrected inconsistent listings across directories, and built local citations so the clinic\'s NAP was identical everywhere Google checks.',
      },
      {
        month: 'Month 1–3',
        title: 'Local on-page SEO',
        desc: 'We built Mississauga-specific service content targeting "dentist Mississauga," "Invisalign Mississauga," and neighbourhood terms, with proper LocalBusiness schema and internal linking.',
      },
      {
        month: 'Month 2–3',
        title: 'New-patient Google Ads',
        desc: 'We launched a focused new-patient Google Ads campaign for high-value treatments with call tracking, filling the schedule while the organic rankings climbed.',
      },
    ],
    results: [
      { value: 'Page 3 → #1', label: 'Local map position' },
      { value: '2 weeks', label: 'Booked out' },
      { value: '3 months', label: 'To #1 map rank' },
      { value: '↑', label: 'New patients per month' },
    ],
    quote: {
      text: "Our Google ranking jumped from page 3 to the #1 map position in just over 3 months. We're fully booked two weeks out now. The ROI is incredible for what we pay.",
      name: 'Dr. Priya M.',
      role: 'Practice Owner, Smile Dental Clinic',
    },
  },
  {
    slug: 'comfortair-hvac-toronto',
    client: 'ComfortAir HVAC',
    industry: 'HVAC',
    city: 'Toronto',
    province: 'ON',
    headline: 'How a Toronto HVAC Company Hit 4.8× Return on Ad Spend',
    summary:
      'A Toronto HVAC company was spending on Google Ads with no call tracking and an unclear cost per lead. We restructured the campaigns, added full tracking, and cut wasted spend — reaching a 4.8× return on ad spend on real booked jobs.',
    metric: '4.8×',
    metricLabel: 'Avg. ROAS',
    relatedService: { label: 'Google Ads Management', href: '/google-ads-management' },
    relatedLocation: { label: 'Digital Marketing in Toronto', href: '/toronto' },
    challenge: [
      'ComfortAir HVAC was already running Google Ads but could not tell which campaigns produced booked jobs. There was no call tracking, broad keywords were burning budget, and the team had no reliable cost-per-lead number to make decisions with.',
      'In a market as competitive as Toronto, that lack of measurement meant spend was being wasted on low-intent clicks while genuine emergency and installation searches were under-served.',
    ],
    approach: [
      {
        month: 'Month 1',
        title: 'Tracking and account audit',
        desc: 'We installed call tracking and Google Ads conversion tracking, then audited the account to establish a true cost per booked job by service and neighbourhood.',
      },
      {
        month: 'Month 1–2',
        title: 'Campaign restructure',
        desc: 'We rebuilt the campaigns around high-intent Toronto neighbourhood searches — "furnace repair Scarborough," "AC installation North York" — with tight ad groups and an extensive negative keyword list.',
      },
      {
        month: 'Month 2+',
        title: 'Scale what works',
        desc: 'With clean attribution, we shifted budget toward the services and areas with the best return and paused the rest, compounding ROAS month over month.',
      },
    ],
    results: [
      { value: '4.8×', label: 'Average ROAS' },
      { value: '100%', label: 'Calls tracked' },
      { value: '–41%', label: 'Cost per lead' },
      { value: 'Real jobs', label: 'Measured, not clicks' },
    ],
    quote: {
      text: 'Best ROI we have ever seen from a marketing agency. Every dollar we put into Google Ads comes back 5x. They track real calls and bookings, not just clicks.',
      name: 'James T.',
      role: 'Owner, ComfortAir HVAC',
    },
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}

export function caseStudyUrl(slug: string) {
  return `${SITE_URL}/case-studies/${slug}`
}
