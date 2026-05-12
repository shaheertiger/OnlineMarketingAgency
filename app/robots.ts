import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Main crawlers: allow everything except private paths
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Block AI training scrapers (2026 best practice for content protection)
      { userAgent: 'GPTBot',          disallow: ['/'] },
      { userAgent: 'ChatGPT-User',    disallow: ['/'] },
      { userAgent: 'Claude-Web',      disallow: ['/'] },
      { userAgent: 'anthropic-ai',    disallow: ['/'] },
      { userAgent: 'CCBot',           disallow: ['/'] },
      { userAgent: 'Google-Extended', disallow: ['/'] },
      { userAgent: 'PerplexityBot',   disallow: ['/'] },
      { userAgent: 'Omgilibot',       disallow: ['/'] },
    ],
    sitemap: 'https://onlinemarketingagency.ca/sitemap.xml',
    host:    'https://onlinemarketingagency.ca',
  }
}
