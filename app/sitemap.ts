import { MetadataRoute } from 'next'

const baseUrl = 'https://onlinemarketingagency.ca'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/google-ads-management', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/seo-services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/local-seo-services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/google-business-profile-optimization', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/website-design-for-small-business', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/social-media-marketing-agency', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/lead-generation-agency', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/barber-marketing-agency', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contractor-marketing-agency', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/clinic-marketing-agency', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/restaurant-marketing-agency', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
