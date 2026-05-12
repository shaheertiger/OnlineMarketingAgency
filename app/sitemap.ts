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
  ]
}
