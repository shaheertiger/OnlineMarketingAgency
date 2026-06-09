import { MetadataRoute } from 'next'

const baseUrl = 'https://onlinemarketingagency.ca'

// Static date — update on each deployment / major content change
const LAST_UPDATED = new Date('2026-05-01T00:00:00.000Z')
const LAST_UPDATED_BLOG = new Date('2026-05-01T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage — highest priority
    {
      url: `${baseUrl}/`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Core service pages
    {
      url: `${baseUrl}/google-ads-management`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo-services`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/local-seo-services`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/google-business-profile-optimization`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/website-design-for-small-business`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/social-media-marketing-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lead-generation-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Keyword-targeted landing pages
    {
      url: `${baseUrl}/seo-consultant`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo-services-ontario`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dental-seo-expert`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dentist-google-ads`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/facebook-ads-toronto`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Locations hub
    {
      url: `${baseUrl}/locations`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // City / location pages
    {
      url: `${baseUrl}/toronto`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mississauga`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brampton`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vaughan`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Service × City (high-intent combo) pages
    {
      url: `${baseUrl}/local-seo-brampton`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/google-ads-management-toronto`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/local-seo-mississauga`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // Industry pages
    {
      url: `${baseUrl}/barber-marketing-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contractor-marketing-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clinic-marketing-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/restaurant-marketing-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dental-marketing-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/law-firm-marketing-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/real-estate-marketing-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/auto-shop-marketing-agency`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Case studies
    {
      url: `${baseUrl}/case-studies`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/prestige-barbershop-brampton`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/case-studies/smile-dental-mississauga`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/case-studies/comfortair-hvac-toronto`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.6,
    },

    // Company pages
    {
      url: `${baseUrl}/about`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: LAST_UPDATED_BLOG,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.2,
    },

    // Blog posts
    {
      url: `${baseUrl}/blog/rank-google-map-pack-brampton`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/google-business-profile-checklist-canada`,
      lastModified: new Date('2026-05-20'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/ontario-google-ads-budget-2026`,
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/dental-marketing-mississauga`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/optimize-google-business-profile`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/google-ads-vs-seo-local-business`,
      lastModified: new Date('2026-04-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/local-seo-ranking-factors`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/website-not-generating-leads`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/google-ads-budget-small-business`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/facebook-ads-local-business`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
