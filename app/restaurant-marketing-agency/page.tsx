import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Restaurant Marketing Agency | Get More Reservations & Orders',
  description:
    'Digital marketing for restaurants in Canada. Get more reservations, online orders, and walk-in customers with Google Business Profile, Local SEO, and social media advertising.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/restaurant-marketing-agency' },
}

export default function RestaurantMarketingPage() {
  return (
    <IndustryPageTemplate
      label="Restaurant Marketing Agency"
      h1="Digital Marketing For Restaurants That Need More Reservations And Customers"
      intro="We help restaurants across Canada get more reservations, online orders, and walk-in customers through Google Business Profile optimization, Local SEO, social media ads, and a conversion-ready restaurant website. More local visibility means more tables filled and more orders placed."
      services={[
        {
          title: 'Google Business Profile For Restaurants',
          desc: 'Rank in Google Maps for "restaurants near me" and cuisine-specific local searches.',
        },
        {
          title: 'Local SEO For Restaurants',
          desc: 'Improve organic rankings for neighbourhood and city-based dining searches.',
        },
        {
          title: 'Facebook And Instagram Ads',
          desc: 'Reach local diners with visual food advertising that drives reservations and orders.',
        },
        {
          title: 'Restaurant Website Design',
          desc: 'A clean restaurant website with menu, online reservations, and online ordering integration.',
        },
        {
          title: 'Google Ads For Restaurants',
          desc: 'Target high-intent searches for specific cuisines and local restaurant searches.',
        },
        {
          title: 'Review Generation Strategy',
          desc: 'Build consistent Google and Yelp reviews that improve trust and local visibility.',
        },
      ]}
      challenges={[
        {
          title: 'Not showing up in Google Maps for "restaurants near me"',
          desc: 'Google Business Profile optimization and Local SEO ensure your restaurant ranks for local dining searches.',
        },
        {
          title: 'Low reservation volume during off-peak times',
          desc: 'Targeted social media ads and Google Ads can promote specials and fill tables during slow periods.',
        },
        {
          title: 'Losing customers to well-reviewed competitors',
          desc: 'A strong review strategy and active Google Business Profile help your restaurant stand out.',
        },
        {
          title: 'No professional website with menu and reservations',
          desc: 'A fast, mobile-friendly restaurant website with your menu, hours, and booking options improves conversions significantly.',
        },
      ]}
      faqs={[
        {
          question: 'What digital marketing works best for restaurants?',
          answer:
            'Google Business Profile optimization and Local SEO are the highest-priority channels for restaurants since most customers search "restaurants near me" on Google Maps before choosing where to eat. Instagram Ads also work well for visual food brands.',
        },
        {
          question: 'Can social media marketing increase restaurant reservations?',
          answer:
            'Yes. Instagram and Facebook Ads targeting local diners with food photography and promotional offers drive reservation requests, online orders, and repeat visits.',
        },
        {
          question: 'How important are Google reviews for restaurants?',
          answer:
            'Very important. Google reviews directly affect your local map pack ranking and heavily influence dining decisions. We help restaurants build a consistent review strategy to improve both rankings and customer trust.',
        },
        {
          question: 'Do you help restaurants with online ordering marketing?',
          answer:
            'Yes. We can promote your online ordering through Google Ads, social media ads, and by ensuring your Google Business Profile links directly to your ordering platform.',
        },
      ]}
      relatedIndustries={[
        { label: 'Barbershop Marketing', href: '/barber-marketing-agency' },
        { label: 'Clinic Marketing', href: '/clinic-marketing-agency' },
        { label: 'Contractor Marketing', href: '/contractor-marketing-agency' },
      ]}
    />
  )
}
