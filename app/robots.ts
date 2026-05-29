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

      // ── AI answer / search engines: ALLOW (GEO/AEO — get cited in AI answers) ──
      // 2026 strategy: appear in ChatGPT Search, Perplexity, Google AI Overviews,
      // and Apple Intelligence rather than block them. These bots perform live
      // retrieval and cite sources, which drives qualified referral traffic.
      { userAgent: 'OAI-SearchBot',      allow: '/' }, // ChatGPT Search index
      { userAgent: 'ChatGPT-User',       allow: '/' }, // ChatGPT live browsing
      { userAgent: 'PerplexityBot',      allow: '/' }, // Perplexity index
      { userAgent: 'Perplexity-User',    allow: '/' }, // Perplexity live fetch
      { userAgent: 'Google-Extended',    allow: '/' }, // Gemini / AI Overviews grounding
      { userAgent: 'Applebot-Extended',  allow: '/' }, // Apple Intelligence

      // ── Pure training-data scrapers: BLOCK (no citation, no referral value) ──
      { userAgent: 'GPTBot',             disallow: ['/'] }, // OpenAI model training
      { userAgent: 'anthropic-ai',       disallow: ['/'] }, // legacy Anthropic training
      { userAgent: 'ClaudeBot',          disallow: ['/'] }, // Anthropic training
      { userAgent: 'CCBot',              disallow: ['/'] }, // Common Crawl
      { userAgent: 'Bytespider',         disallow: ['/'] }, // ByteDance scraper
      { userAgent: 'meta-externalagent', disallow: ['/'] }, // Meta AI training
      { userAgent: 'Omgilibot',          disallow: ['/'] }, // Webz.io data resale
    ],
    sitemap: 'https://onlinemarketingagency.ca/sitemap.xml',
    host:    'https://onlinemarketingagency.ca',
  }
}
