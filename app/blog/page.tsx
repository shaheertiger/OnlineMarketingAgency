import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing Insights For Local Businesses',
  description:
    'Digital marketing tips, guides, and insights for local businesses in Canada. Google Ads, SEO, Local SEO, and lead generation strategies for small business owners.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/blog' },
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

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-20">
        <div className="container-main text-center">
          <p className="section-label mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Digital Marketing Insights For Local Businesses
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Practical guides and strategies for small business owners who want to grow their online
            presence and generate more leads.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section className="section-pad bg-white">
        <div className="container-main">
          {/* Category filter (static) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`text-sm font-medium px-4 py-2 rounded-full border cursor-pointer transition-colors ${
                  i === 0
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card flex flex-col group">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="text-base font-semibold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                  >
                    Read more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
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
