import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing Insights For Local Businesses',
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
    date: 'May 2026',
    slug: 'optimize-google-business-profile',
    readTime: '6 min read',
  },
  {
    title: 'Google Ads vs SEO: Which Should Local Businesses Invest In First?',
    excerpt:
      'Both Google Ads and SEO can generate leads for your local business. Here is how to decide which channel makes the most sense for your situation and budget.',
    category: 'Google Ads',
    date: 'April 2026',
    slug: 'google-ads-vs-seo-local-business',
    readTime: '7 min read',
  },
  {
    title: 'The Most Important Local SEO Ranking Factors In 2026',
    excerpt:
      'What actually moves the needle in local Google rankings? We break down the factors that matter most for local businesses trying to rank on Google Maps.',
    category: 'Local SEO',
    date: 'April 2026',
    slug: 'local-seo-ranking-factors',
    readTime: '8 min read',
  },
  {
    title: 'Why Your Website Is Not Generating Leads (And How To Fix It)',
    excerpt:
      'Traffic without conversions is expensive. Here are the most common reasons a small business website fails to generate calls and form submissions — and what to do about it.',
    category: 'Website Design',
    date: 'March 2026',
    slug: 'website-not-generating-leads',
    readTime: '5 min read',
  },
  {
    title: 'How Much Should A Small Business Spend On Google Ads?',
    excerpt:
      'Google Ads can be one of the fastest ways to generate leads for a local business. Here is a practical guide to setting your Google Ads budget based on your goals and market.',
    category: 'Google Ads',
    date: 'March 2026',
    slug: 'google-ads-budget-small-business',
    readTime: '6 min read',
  },
  {
    title: 'Facebook Ads For Local Businesses: What Works And What Does Not',
    excerpt:
      'Facebook advertising can drive real leads for local businesses when done correctly. Here is what we have learned works for local service companies and what to avoid.',
    category: 'Social Media',
    date: 'February 2026',
    slug: 'facebook-ads-local-business',
    readTime: '7 min read',
  },
]

const categories = ['All', 'Google Ads', 'Local SEO', 'Website Design', 'Social Media', 'Lead Generation']

const categoryColors: Record<string, string> = {
  'Local SEO': '#34D399',
  'Google Ads': '#60A5FA',
  'Website Design': '#FBBF24',
  'Social Media': '#F472B6',
  'Lead Generation': '#818CF8',
}

export default function BlogPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: '#060B18' }}>
        <Breadcrumb items={[{ label: 'Blog' }]} />
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: 'linear-gradient(160deg, #060B18 0%, #0A1025 50%, #060B18 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

        <div className="container-main relative text-center">
          <p className="section-label mb-4">Blog</p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold leading-[1.08] mb-5"
            style={{ color: '#F8FAFC' }}
          >
            Digital Marketing Insights For{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Local Businesses
            </span>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
            Practical guides and strategies for small business owners who want to grow their online
            presence and generate more leads.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section
        className="section-pad relative"
        style={{ background: '#070C1A' }}
        aria-labelledby="posts-heading"
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)' }}
          aria-hidden="true"
        />
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
                    ? {
                        color: '#F8FAFC',
                        background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                        border: '1px solid rgba(37,99,235,0.4)',
                      }
                    : {
                        color: '#64748B',
                        background: 'rgba(11, 17, 32, 0.6)',
                        border: '1px solid rgba(51, 65, 85, 0.4)',
                      }
                }
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => {
              const accentColor = categoryColors[post.category] ?? '#60A5FA'
              return (
                <article
                  key={post.slug}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{
                    background: 'rgba(11, 17, 32, 0.7)',
                    border: '1px solid rgba(51, 65, 85, 0.5)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        color: accentColor,
                        background: `${accentColor}15`,
                        border: `1px solid ${accentColor}25`,
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: '#334155' }}>{post.readTime}</span>
                  </div>
                  <h2
                    className="text-base font-bold leading-snug mb-3 flex-1"
                    style={{ color: '#F8FAFC' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#475569' }}>
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center justify-between mt-auto pt-4"
                    style={{ borderTop: '1px solid rgba(51, 65, 85, 0.4)' }}
                  >
                    <span className="text-xs" style={{ color: '#334155' }}>{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold flex items-center gap-1 transition-colors duration-150"
                      style={{ color: '#60A5FA' }}
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
