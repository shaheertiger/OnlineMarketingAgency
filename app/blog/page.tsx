import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing Insights For Local Businesses | OMA',
  description:
    'Digital marketing tips, guides, and insights for local businesses in Canada. Google Ads, SEO, Local SEO, and lead generation strategies for small business owners.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/blog' },
  openGraph: {
    title: 'Digital Marketing Blog For Local Businesses | OnlineMarketingAgency.ca',
    description: 'Practical guides and strategies for small business owners who want to grow their online presence and generate more leads.',
    url: 'https://onlinemarketingagency.ca/blog',
  },
}

const posts = [
  {
    title: 'How To Optimize Your Google Business Profile For More Local Customers',
    excerpt:
      'Your Google Business Profile is one of the most powerful free tools for local businesses. Here is how to optimize it to rank higher in Google Maps and get more calls.',
    category: 'Local SEO',
    date: '2026-05-01',
    dateLabel: 'May 2026',
    slug: 'optimize-google-business-profile',
    readTime: '6 min read',
  },
  {
    title: 'Google Ads vs SEO: Which Should Local Businesses Invest In First?',
    excerpt:
      'Both Google Ads and SEO can generate leads for your local business. Here is how to decide which channel makes the most sense for your situation and budget.',
    category: 'Google Ads',
    date: '2026-04-15',
    dateLabel: 'April 2026',
    slug: 'google-ads-vs-seo-local-business',
    readTime: '7 min read',
  },
  {
    title: 'The Most Important Local SEO Ranking Factors In 2026',
    excerpt:
      'What actually moves the needle in local Google rankings? We break down the factors that matter most for local businesses trying to rank on Google Maps.',
    category: 'Local SEO',
    date: '2026-04-01',
    dateLabel: 'April 2026',
    slug: 'local-seo-ranking-factors',
    readTime: '8 min read',
  },
  {
    title: 'Why Your Website Is Not Generating Leads (And How To Fix It)',
    excerpt:
      'Traffic without conversions is expensive. Here are the most common reasons a small business website fails to generate calls and form submissions — and what to do about it.',
    category: 'Website Design',
    date: '2026-03-15',
    dateLabel: 'March 2026',
    slug: 'website-not-generating-leads',
    readTime: '5 min read',
  },
  {
    title: 'How Much Should A Small Business Spend On Google Ads?',
    excerpt:
      'Google Ads can be one of the fastest ways to generate leads for a local business. Here is a practical guide to setting your Google Ads budget based on your goals and market.',
    category: 'Google Ads',
    date: '2026-03-01',
    dateLabel: 'March 2026',
    slug: 'google-ads-budget-small-business',
    readTime: '6 min read',
  },
  {
    title: 'Facebook Ads For Local Businesses: What Works And What Does Not',
    excerpt:
      'Facebook advertising can drive real leads for local businesses when done correctly. Here is what we have learned works for local service companies and what to avoid.',
    category: 'Social Media',
    date: '2026-02-15',
    dateLabel: 'February 2026',
    slug: 'facebook-ads-local-business',
    readTime: '7 min read',
  },
]

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Digital Marketing Blog — OnlineMarketingAgency.ca',
  description: 'Practical digital marketing guides for Canadian local businesses.',
  url: 'https://onlinemarketingagency.ca/blog',
  numberOfItems: posts.length,
  itemListElement: posts.map((post, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://onlinemarketingagency.ca/blog/${post.slug}`,
    name: post.title,
  })),
}

const blogPostingSchemas = posts.map((post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  url: `https://onlinemarketingagency.ca/blog/${post.slug}`,
  datePublished: post.date,
  dateModified: post.date,
  author: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    url: 'https://onlinemarketingagency.ca',
  },
  publisher: {
    '@type': 'Organization',
    name: 'OnlineMarketingAgency.ca',
    logo: {
      '@type': 'ImageObject',
      url: 'https://onlinemarketingagency.ca/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://onlinemarketingagency.ca/blog/${post.slug}`,
  },
  articleSection: post.category,
  inLanguage: 'en-CA',
  about: {
    '@type': 'Thing',
    name: 'Digital Marketing for Local Businesses in Canada',
  },
}))

const categoryColors: Record<string, string> = {
  'Local SEO': '#16A34A',
  'Google Ads': '#1D4ED8',
  'Website Design': '#B45309',
  'Social Media': '#9333EA',
  'Lead Generation': '#DC2626',
}

const categories = ['All', 'Google Ads', 'Local SEO', 'Website Design', 'Social Media', 'Lead Generation']

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      {blogPostingSchemas.map((schema) => (
        <script
          key={schema.url}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Breadcrumb */}
      <div style={{ background: '#0F0F12' }}>
        <Breadcrumb items={[{ label: 'Blog' }]} />
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: '#0F0F12' }}
        aria-labelledby="blog-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

        <div className="container-main relative text-center">
          <p className="section-label-lime mb-5">Blog</p>
          <h1
            id="blog-heading"
            className="text-4xl sm:text-5xl font-black leading-[1.06] mb-5"
            style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}
          >
            Digital Marketing Insights{' '}
            <span style={{ color: '#C8FF00' }}>For Local Businesses</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.52)' }}>
            Practical guides and strategies for Canadian small business owners who want to generate
            more leads, rank higher on Google, and grow their online presence.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section
        className="section-pad"
        style={{ background: '#F7F6F2' }}
        aria-labelledby="posts-heading"
      >
        <div className="container-main">
          <h2 id="posts-heading" className="sr-only">Blog Posts</h2>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Filter by category">
            {categories.map((cat, i) => (
              <span
                key={cat}
                role="listitem"
                className="text-sm font-semibold px-4 py-2 rounded-xl cursor-default"
                style={
                  i === 0
                    ? { color: '#fff', background: '#0F0F12', border: '1px solid #0F0F12' }
                    : { color: '#6B7280', background: '#fff', border: '1px solid #E5E7EB' }
                }
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => {
              const accentColor = categoryColors[post.category] ?? '#1D4ED8'
              return (
                <article
                  key={post.slug}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{ background: '#fff', border: '1px solid #E5E7EB' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        color: '#fff',
                        background: accentColor,
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: '#9CA3AF' }}>{post.readTime}</span>
                  </div>
                  <h2
                    className="text-base font-bold leading-snug mb-3 flex-1"
                    style={{ color: '#0F0F12' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center justify-between mt-auto pt-4"
                    style={{ borderTop: '1px solid #F3F4F6' }}
                  >
                    <time className="text-xs" style={{ color: '#9CA3AF' }} dateTime={post.date}>
                      {post.dateLabel}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold flex items-center gap-1 transition-colors duration-150"
                      style={{ color: '#0F0F12' }}
                      aria-label={`Read: ${post.title}`}
                    >
                      Read more
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need Help With Your Digital Marketing?"
        subheading="Get a free marketing audit and find out what changes would have the biggest impact on your online visibility and lead generation."
      />
    </>
  )
}
