import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'

type Post = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  dateLabel: string
  readTime: string
  relatedService: { label: string; href: string }
  body: string[]
}

const posts: Post[] = [
  {
    slug: 'optimize-google-business-profile',
    title: 'How To Optimize Your Google Business Profile For More Local Customers',
    description:
      'Your Google Business Profile is one of the most powerful free tools for local businesses. Here is how to optimize it to rank higher in Google Maps and get more calls.',
    category: 'Local SEO',
    date: '2026-05-01',
    dateLabel: 'May 1, 2026',
    readTime: '6 min read',
    relatedService: { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
    body: [
      'Your Google Business Profile (GBP) is the single most visible piece of digital real estate a local business can control for free. When someone searches for your service in your city — "plumber Toronto," "dentist Mississauga," "HVAC contractor Vaughan" — the Google Map Pack is what they see first. Showing up there, and showing up well, can be the difference between getting 10 calls a month and getting 60.',
      'The first and most important step is completing every section of your profile. Business name, category (primary and secondary), phone number, website, hours of operation, service area — all of it. Google rewards complete profiles with better visibility. Incomplete profiles are penalized. Most local businesses have missing or outdated information that is actively hurting their rankings.',
      'Categories are particularly important. Your primary category should exactly match what your business does. If you are a plumber, choose "Plumber" — not "Home Services" or "Contractor." Your secondary categories can include "Drainage Service," "Water Heater Installation," or any other specific services you offer. The more precisely your categories match search intent, the better Google can match your profile to relevant searches.',
      'Photos are massively underrated as a ranking factor. Google has confirmed that profiles with photos receive significantly more direction requests and website clicks than profiles without them. Add photos of your team, your work, your vehicles, and your business location. Add them regularly — monthly updates signal to Google that your business is active. Encourage customers to upload photos of their completed projects too.',
      'Reviews are the most powerful trust signal in local search. A profile with 50 reviews at 4.8 stars will consistently outrank a profile with 5 reviews at 5.0 stars. Getting reviews requires a system — not just hoping happy customers find their way to Google. Send a follow-up text or email after every job with a direct link to your Google review page. Make it as easy as possible. The businesses that dominate their local map pack are almost always the ones who have mastered the review collection process.',
      'Google Posts are another underused feature. You can publish updates, offers, and events directly to your Business Profile. These posts appear in your profile on Google Maps and Search, and they signal active management of your listing. Post at least twice a month with relevant content — seasonal promotions, service updates, or useful tips for your customers.',
      'The Q&A section deserves attention too. Anyone can submit a question on your GBP, and anyone can answer it. That includes your competitors. Get ahead of it by seeding your own questions and answers — "Do you offer free estimates?" "What areas do you serve?" "How quickly can you respond to emergency calls?" These answers both reassure potential customers and give Google more keyword-rich content to associate with your profile.',
      'Finally, keep your NAP (Name, Address, Phone) consistent across every directory where your business appears — Yelp, YellowPages, BBB, HomeStars, and any industry-specific directories. Inconsistency in your business name, address format, or phone number confuses Google and weakens your local authority. A simple NAP audit can identify and fix these inconsistencies in a few hours.',
    ],
  },
  {
    slug: 'google-ads-vs-seo-local-business',
    title: 'Google Ads vs SEO: Which Should Local Businesses Invest In First?',
    description:
      'Both Google Ads and SEO can generate leads for your local business. Here is how to decide which channel makes the most sense for your situation and budget.',
    category: 'Google Ads',
    date: '2026-04-15',
    dateLabel: 'April 15, 2026',
    readTime: '7 min read',
    relatedService: { label: 'Google Ads Management', href: '/google-ads-management' },
    body: [
      'One of the most common questions we get from local business owners is: "Should I start with Google Ads or SEO?" The honest answer is that it depends on your situation — but most local businesses with an urgent need for leads should start with Google Ads and build SEO alongside it.',
      'Google Ads delivers results immediately. A properly built campaign can start generating calls within 24 to 72 hours of launch. You are paying for visibility, but you get it instantly. SEO, by contrast, is a long-term investment. Even with aggressive optimization, it typically takes 3 to 6 months to see meaningful organic ranking improvements for competitive local keywords.',
      'The cost equation is where it gets nuanced. Google Ads has a direct cost per click — you pay every time someone clicks your ad. The average cost per click for local service searches in Canada ranges from $3 to $25, depending on your industry and location. At a reasonable conversion rate, that might put your cost per lead at $40 to $120. SEO, once established, generates leads at a much lower cost per acquisition — but the upfront investment in time and money can be significant, and you will not recoup it quickly.',
      'For businesses in competitive markets — HVAC, legal, dental, roofing — SEO is essential for long-term competitiveness. But in the short term, while you are building organic authority, Google Ads fills the gap. The best-performing local businesses we work with use both channels: Google Ads for immediate lead volume and SEO to reduce dependence on paid traffic over time.',
      'There are situations where SEO should come first. If you are in a lower-competition niche or a smaller market, organic rankings may be achievable more quickly and at lower cost than in a major city. If your Google Ads budget would be too small to compete effectively — under $400 to $500 per month in ad spend — the results may disappoint, and SEO might be the smarter initial investment.',
      'The channel that works best is also the one you can sustain. Google Ads requires consistent monthly budget — the moment you stop spending, you stop appearing. SEO builds compounding value over time. A business that invests in SEO for two years is in a fundamentally stronger position than one entirely dependent on paid advertising.',
      'Our recommendation: start with Google Ads to generate immediate leads and cover operating costs, while investing in Local SEO and Google Business Profile optimization in parallel. Within 6 to 12 months, your organic visibility should be generating leads at a significantly lower cost per acquisition than your paid campaigns — at which point you can either reduce ad spend or redirect it toward growth.',
    ],
  },
  {
    slug: 'local-seo-ranking-factors',
    title: 'The Most Important Local SEO Ranking Factors In 2026',
    description:
      'What actually moves the needle in local Google rankings? We break down the factors that matter most for local businesses trying to rank on Google Maps.',
    category: 'Local SEO',
    date: '2026-04-01',
    dateLabel: 'April 1, 2026',
    readTime: '8 min read',
    relatedService: { label: 'Local SEO Services', href: '/local-seo-services' },
    body: [
      'Local SEO has changed significantly over the past few years. What worked in 2020 — building hundreds of directory citations and stuffing keywords into your Google Business Profile description — is not what drives rankings today. Google has become substantially better at evaluating the genuine authority and relevance of local businesses. Here is what actually matters in 2026.',
      'Google Business Profile signals remain the dominant factor for map pack rankings. This includes profile completeness, category accuracy, review quantity and quality, post frequency, photo volume, and how well the profile matches the searcher\'s query. If your GBP is incomplete, outdated, or has thin review volume, nothing else in your local SEO strategy will compensate for that weakness.',
      'Reviews are arguably the single most influential factor in local rankings today. Not just the star rating — but the velocity of new reviews, the length and detail of reviews, and whether you are responding to them. Google interprets an active review profile as a signal that the business is operational, trustworthy, and customer-focused. Businesses that actively generate reviews consistently outperform competitors with better websites but weaker review profiles.',
      'Proximity still matters, but it is not the dominant factor it once was. Relevance and prominence have caught up. A business 5 kilometres from the searcher with strong signals can outrank a business 1 kilometre away with a thin digital presence. This is good news for businesses in suburban areas competing against downtown competitors.',
      'On-page local SEO — location-specific content on your website — has become more important as Google\'s ability to evaluate content quality has improved. Having a dedicated location page for each city you serve, with genuine information about your services in that area rather than thin keyword-stuffed content, can meaningfully improve both organic and map pack rankings.',
      'Backlinks from locally relevant sources continue to drive authority. Local news mentions, community sponsorships, industry association listings, and local business directories all contribute to your local authority score. The quality and relevance of the linking domain matters far more than volume — one link from a reputable local news outlet is worth more than 50 low-quality directory links.',
      'Behavioural signals — click-through rate from search results, time spent on your Google Business Profile, direction requests, and phone calls from your listing — have become increasingly important signals of genuine business activity. This is one reason that maintaining an active, complete GBP matters beyond just the content itself. Profiles that attract clicks and calls send positive engagement signals that reinforce rankings.',
      'Local schema markup on your website — particularly LocalBusiness schema with complete NAP information, service types, hours, and area served — helps Google precisely understand and categorize your business. Businesses with properly implemented schema tend to have better click-through rates in search results and stronger Knowledge Panel visibility.',
    ],
  },
  {
    slug: 'website-not-generating-leads',
    title: 'Why Your Website Is Not Generating Leads (And How To Fix It)',
    description:
      'Traffic without conversions is expensive. Here are the most common reasons a small business website fails to generate calls and form submissions — and what to do about it.',
    category: 'Website Design',
    date: '2026-03-15',
    dateLabel: 'March 15, 2026',
    readTime: '5 min read',
    relatedService: { label: 'Website Design For Small Business', href: '/website-design-for-small-business' },
    body: [
      'A website that generates no leads is worse than no website at all — because it costs money to maintain and gives you false confidence that your digital presence is handled. The most common problem we see when we audit new client websites is not poor design. It is poor conversion architecture. The site looks fine but does nothing to guide visitors toward calling or booking.',
      'The most critical fix is making your phone number impossible to miss. On a local service business website, the phone number should be visible in the header, above the fold on every page, and clickable on mobile. Sounds obvious — yet most small business websites bury the phone number in the footer or the contact page only. A visitor who cannot find your number within 5 seconds will leave.',
      'Trust signals are missing on most small business websites. No reviews. No client logos. No testimonials. No before-and-after photos. No "as seen in" mentions. Visitors to your website have never heard of your business, and they are evaluating in seconds whether you are credible enough to call. Social proof — real customer reviews, results photos, project portfolios — is what converts a curious visitor into an inbound call.',
      'Page speed is a conversion killer that most business owners do not realize is a problem. A site that takes 4 to 6 seconds to load on mobile loses a significant portion of its visitors before they even see the content. Google\'s Core Web Vitals are now a ranking factor, which means a slow site hurts your search visibility AND your conversion rate simultaneously. Run your site through Google PageSpeed Insights and address the issues it identifies.',
      'Your calls to action are either missing, weak, or misplaced. "Contact us" is not a call to action — it is an instruction. "Get Your Free Estimate Today" or "Call Now for Same-Day Service" gives the visitor a clear, specific, low-friction next step. Every page should have a clear primary CTA above the fold, repeated at the bottom, and ideally in a sticky header on mobile.',
      'For businesses running Google Ads, the landing page problem is particularly expensive. Sending paid traffic to your homepage — which talks about everything your business does — rather than a dedicated landing page focused on the specific service the person searched for will cut your conversion rate significantly. If someone clicks an ad for "emergency plumber Toronto," they should land on a page about emergency plumbing in Toronto, not your homepage about all plumbing services.',
      'The fix is rarely a complete website rebuild. More often, it is targeted changes to the conversion architecture: better phone number placement, stronger headlines, real social proof above the fold, faster load speed, and focused CTAs. These changes can be made to any existing website and typically deliver a meaningful improvement in conversion rate within 30 to 60 days.',
    ],
  },
  {
    slug: 'google-ads-budget-small-business',
    title: 'How Much Should A Small Business Spend On Google Ads?',
    description:
      'Google Ads can be one of the fastest ways to generate leads for a local business. Here is a practical guide to setting your Google Ads budget based on your goals and market.',
    category: 'Google Ads',
    date: '2026-03-01',
    dateLabel: 'March 1, 2026',
    readTime: '6 min read',
    relatedService: { label: 'Google Ads Management', href: '/google-ads-management' },
    body: [
      'One of the first questions local business owners ask about Google Ads is: "How much do I need to spend?" The honest answer is that it depends on your market, your service, your cost per lead target, and your goals — but there are practical benchmarks that apply to most Canadian local businesses.',
      'The minimum viable Google Ads budget for most local service businesses is $500 per month in ad spend. Below that threshold, your ads will show inconsistently, your data will accumulate too slowly to optimize effectively, and you will likely see disappointing results that lead you to conclude Google Ads does not work — when the reality is the budget was simply too small to compete.',
      'For most competitive local services in mid-size Canadian cities — plumbing, HVAC, dental, legal, renovation — a starting budget of $1,000 to $1,500 per month in ad spend is more realistic. This gives your campaign enough daily budget to show consistently throughout the day, gather data quickly, and generate enough leads to evaluate performance properly within the first 30 to 60 days.',
      'In major metro markets like Toronto, Vancouver, or Calgary, highly competitive categories — personal injury law, cosmetic dentistry, roofing — can require $3,000 to $5,000 per month in ad spend just to be competitive. The cost per click in these categories can be $15 to $30 or higher, meaning a $500 budget might only generate 20 to 30 clicks per month — not nearly enough to generate consistent leads.',
      'A more useful way to think about budget is to work backwards from your target cost per lead and desired lead volume. If your service generates $2,000 in profit per customer and you convert 30% of leads to customers, you can afford to spend up to $600 on a lead and still be profitable. If your industry average cost per click is $8 and your landing page converts at 10%, your cost per lead is $80 — well within range.',
      'Management fees are separate from ad spend. At OMA, our Google Ads management starts from $499 per month. This covers campaign setup, ongoing optimization, monthly reporting, call tracking, and conversion tracking. The management fee is in addition to whatever you are spending on the ads themselves. Be cautious of agencies who charge a percentage of ad spend — this creates an incentive to increase your budget regardless of whether it is producing results.',
      'Budget increases should be data-driven. Start with a conservative budget, establish your baseline cost per lead, identify which keywords and ads are generating the best leads, then scale the budget into what is already working. Increasing budget without having established what is working is how businesses end up spending thousands with little to show for it.',
    ],
  },
  {
    slug: 'facebook-ads-local-business',
    title: 'Facebook Ads For Local Businesses: What Works And What Does Not',
    description:
      'Facebook advertising can drive real leads for local businesses when done correctly. Here is what we have learned works for local service companies and what to avoid.',
    category: 'Social Media',
    date: '2026-02-15',
    dateLabel: 'February 15, 2026',
    readTime: '7 min read',
    relatedService: { label: 'Social Media Marketing Agency', href: '/social-media-marketing-agency' },
    body: [
      'Facebook Ads — which includes Instagram — can be a powerful lead generation channel for local service businesses, but it works differently than Google Ads and requires a different strategy. Understanding the fundamental difference is the starting point for success on the platform.',
      'The core difference: Google Ads captures demand that already exists. Facebook Ads creates demand. When someone searches "emergency plumber near me," they need a plumber right now — Google Ads puts you in front of them at exactly the right moment. Facebook users are not searching for anything. They are scrolling through their feed. Your ad has to interrupt that scroll and create enough interest that they take action.',
      'This means Facebook Ads works better for some business types than others. Services with a strong visual component — landscaping, renovation, kitchen design, barbershops, restaurants — perform well on Facebook and Instagram because compelling images and videos can genuinely stop the scroll. Services that are purely reactive and urgent — emergency plumbing, roof repair after a storm — tend to perform better on Google Ads, where you can capture customers at the moment of need.',
      'Lead generation campaigns, specifically using Facebook\'s native Lead Ads format, tend to outperform website traffic campaigns for local businesses. Lead Ads allow users to submit their contact information without leaving Facebook — which dramatically reduces friction. A well-structured lead ad with a clear offer ("Get a Free Landscaping Quote") can generate leads at a lower cost than sending traffic to a website that may not convert well.',
      'Retargeting is one of the highest-ROI strategies on Facebook for local businesses. If someone visits your website and does not call or fill out a form, you can serve them Facebook and Instagram ads as they browse other content. These warm audiences — people who already know your business — convert at a significantly higher rate than cold audiences, at a fraction of the cost per lead. A retargeting budget of just $5 to $10 per day can meaningfully improve your overall digital marketing results.',
      'What does not work: boosting random posts. The "Boost Post" button in Facebook is designed for simplicity, not performance. It sends your content to a broad audience that is unlikely to be your actual customers. Professional Facebook Ads campaigns use the Ads Manager, with custom audience targeting by geography, demographics, interests, and behaviour — targeting the specific people in your service area who are most likely to need your service.',
      'The creative is the most important variable in Facebook Ads performance. Before-and-after photos for renovation and landscaping. Video testimonials from satisfied customers. Time-lapse videos of a project from start to finish. Real, specific, authentic content consistently outperforms generic stock photography. The businesses that get the best results from Facebook Ads are the ones that invest in real content from real jobs — not polished studio photography.',
    ],
  },
]

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | OMA Blog`,
    description: post.description,
    alternates: { canonical: `https://onlinemarketingagency.ca/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://onlinemarketingagency.ca/blog/${post.slug}`,
      type: 'article',
    },
  }
}

const categoryColors: Record<string, string> = {
  'Local SEO': '#16A34A',
  'Google Ads': '#1D4ED8',
  'Website Design': '#B45309',
  'Social Media': '#9333EA',
  'Lead Generation': '#DC2626',
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const accentColor = categoryColors[post.category] ?? '#1D4ED8'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
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
    wordCount: post.body.join(' ').split(' ').length,
    about: {
      '@type': 'Thing',
      name: 'Digital Marketing for Local Businesses in Canada',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://onlinemarketingagency.ca/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://onlinemarketingagency.ca/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://onlinemarketingagency.ca/blog/${post.slug}` },
    ],
  }

  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div style={{ background: '#0F0F12' }}>
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: '#0F0F12' }}
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

        <div className="container-main relative max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ background: accentColor, color: '#fff' }}
            >
              {post.category}
            </span>
            <time className="text-sm" style={{ color: 'rgba(255,255,255,0.38)' }} dateTime={post.date}>
              {post.dateLabel}
            </time>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.28)' }}>{post.readTime}</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-black leading-[1.1] mb-5"
            style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}
          >
            {post.title}
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.52)' }}>
            {post.description}
          </p>

          <div className="flex items-center gap-2 mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
              style={{ background: '#C8FF00', color: '#0F0F12' }}
            >
              O
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: '#F8FAFC' }}>OnlineMarketingAgency.ca</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Canadian Digital Marketing Agency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-pad" style={{ background: '#F7F6F2' }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">

            {/* Main content */}
            <article className="prose-local">
              <div className="space-y-6 text-base leading-relaxed" style={{ color: '#374151' }}>
                {post.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Related service CTA */}
              <div
                className="mt-10 rounded-2xl p-6"
                style={{ background: '#0F0F12', border: '1px solid rgba(200,255,0,0.1)' }}
              >
                <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  Related Service
                </p>
                <h3 className="text-lg font-black mb-2" style={{ color: '#F8FAFC' }}>
                  {post.relatedService.label}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Learn how OMA can help your Canadian local business with {post.relatedService.label.toLowerCase()}.
                </p>
                <Link href={post.relatedService.href} className="btn-primary text-sm px-5 py-2.5 inline-block">
                  Learn More →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              {/* CTA */}
              <div
                className="rounded-2xl p-5"
                style={{ background: '#0F0F12', border: '1px solid rgba(200,255,0,0.12)' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#C8FF00' }}>Free Marketing Audit</p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Find out what is holding your local business back online. No cost, no commitment.
                </p>
                <Link href="/contact" className="btn-primary text-xs px-4 py-2.5 block text-center">
                  Get Free Audit
                </Link>
              </div>

              {/* More posts */}
              <div className="rounded-2xl p-5" style={{ background: '#fff', border: '1px solid #E5E7EB' }}>
                <p className="text-xs font-bold tracking-wider uppercase mb-4" style={{ color: '#9CA3AF' }}>
                  More Articles
                </p>
                <div className="space-y-4">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="block group"
                    >
                      <p className="text-sm font-semibold leading-snug mb-1 group-hover:underline" style={{ color: '#0F0F12' }}>
                        {p.title}
                      </p>
                      <p className="text-xs" style={{ color: '#9CA3AF' }}>{p.dateLabel}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
