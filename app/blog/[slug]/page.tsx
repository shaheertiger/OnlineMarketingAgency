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
  relatedLocation?: { label: string; href: string }
  body: string[]
}

const posts: Post[] = [
  {
    slug: 'rank-google-map-pack-brampton',
    title: 'How to Rank in the Google Map Pack in Brampton: A Step-by-Step Guide',
    description:
      'A practical, step-by-step guide to getting your Brampton business into the Google Map Pack — the three local results that capture most "near me" calls.',
    category: 'Local SEO',
    date: '2026-06-01',
    dateLabel: 'June 1, 2026',
    readTime: '8 min read',
    relatedService: { label: 'Local SEO Services', href: '/local-seo-services' },
    relatedLocation: { label: 'Digital Marketing in Brampton', href: '/brampton' },
    body: [
      'If you run a local business in Brampton, the Google Map Pack is the prize worth chasing. The Map Pack is the block of three business listings — with a map — that appears at the top of local search results when someone searches "plumber Brampton," "dentist near me," or "barbershop Bramalea." Those three spots capture the majority of clicks and calls. This guide walks through exactly how to get there.',
      'Step one is your Google Business Profile. Claim it, verify it, and complete every single field. Your primary category must match precisely what you do — "Dentist," not "Health." Add accurate secondary categories, your service area, hours, services with descriptions, and a full set of real photos. In our experience auditing Brampton businesses, an incomplete profile is the single most common reason a business does not rank, and it is the fastest thing to fix.',
      'Step two is reviews — the strongest signal in local search. Google rewards both the total number of reviews and the velocity of new ones. Build a simple system: after every completed job or visit, send the customer a direct link to your Google review page by text or email. A Brampton business going from 12 reviews to 60 over a few months, with steady new reviews each week, will almost always climb the Map Pack. Respond to every review, mentioning the service naturally.',
      'Step three is NAP consistency. Your Name, Address, and Phone number must be identical everywhere your business appears online — your website, Yelp, YellowPages.ca, BBB, and industry directories. Inconsistent listings (an old phone number, a "St" vs "Street" mismatch) confuse Google and weaken your local authority. Audit and fix these before chasing new citations.',
      'Step four is local on-page SEO. Your website should have a dedicated, substantive page for Brampton with genuine local content — neighbourhoods you serve like Bramalea, Mount Pleasant, Heart Lake, and Castlemore; local landmarks; and LocalBusiness schema with your complete NAP. Thin, keyword-stuffed location pages do not work anymore; real, useful local content does.',
      'Step five is proximity and prominence. Proximity to the searcher still matters, but a strong profile with many reviews and solid citations can outrank a closer competitor with a weak presence. This is good news for Brampton businesses that are not downtown — you can win on prominence. Keep your profile active with weekly Google Posts and fresh photos; engagement signals increasingly separate the businesses that hold the top three spots from those that drift down.',
      'Step six is local links. A link from the Brampton Board of Trade, a local news mention, a community sponsorship, or a relevant industry association all build the local authority Google uses to rank you. One genuinely local, relevant link is worth far more than dozens of generic directory submissions.',
      'Realistically, expect Google Business Profile improvements within 4–8 weeks and meaningful Map Pack movement within 3–6 months. Brampton is competitive but many profiles are under-optimized — so a disciplined, consistent effort across these six steps reliably moves local businesses into the top three. If you want a shortcut, our Local SEO team does exactly this for Brampton businesses every day.',
    ],
  },
  {
    slug: 'google-business-profile-checklist-canada',
    title: 'Google Business Profile Optimization Checklist for Canadian Businesses',
    description:
      'A complete, no-fluff Google Business Profile checklist for Canadian local businesses — every field, signal, and ongoing habit that drives local rankings.',
    category: 'Local SEO',
    date: '2026-05-20',
    dateLabel: 'May 20, 2026',
    readTime: '7 min read',
    relatedService: { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
    relatedLocation: { label: 'Locations We Serve', href: '/locations' },
    body: [
      'Your Google Business Profile (GBP) is the most valuable free marketing asset a Canadian local business has. It determines whether you appear in the Map Pack, Google Maps, and the local results that drive calls and direction requests. This is the complete checklist we use when optimizing a profile — work through it top to bottom.',
      'Business name: use your real-world business name exactly as it appears on your signage. Do not stuff keywords or city names into it — that violates Google guidelines and risks suspension. Categories: choose the most precise primary category that describes your core business, then add every relevant secondary category. Categories are one of the strongest relevance signals, so accuracy here matters enormously.',
      'Contact and location: add a consistent NAP (Name, Address, Phone) that matches your website and directory listings character-for-character. If you serve customers at their location rather than yours, set a service area with the Canadian cities and regions you cover, and hide your address. Add a local phone number where possible and a UTM-tagged website link so you can measure GBP traffic in Google Analytics.',
      'Hours and attributes: set accurate regular hours and special hours for Canadian statutory holidays. Complete every applicable attribute — "wheelchair accessible," "free Wi-Fi," "online appointments," "Indigenous-owned," and so on. These attributes appear to customers and feed Google additional context about your business.',
      'Services and products: list your services with clear descriptions and pricing where appropriate. This both helps customers and gives Google keyword-rich content to match against searches. For product businesses, populate the product catalogue with photos and prices.',
      'Photos and video: add a strong set of real photos — exterior, interior, team, work samples, and your logo. Then keep adding a few every month. Profiles with regularly updated photos earn more direction requests and clicks, and fresh media signals an active, operating business.',
      'Reviews: this is where most Canadian businesses underperform. Build a repeatable system to request reviews after every positive interaction, aim for a steady cadence rather than bursts, and reply to every review within a couple of days — mentioning the service naturally. Review quantity, quality, velocity, and your responses are all ranking and trust signals.',
      'Ongoing habits: publish a Google Post every week (an offer, an update, a link to a blog article), seed the Q&A section with the questions customers actually ask, and enable messaging so you can respond quickly. A profile that "looks alive" — recent posts, fresh photos, steady reviews, answered questions — consistently outranks a complete-but-dormant one. Set a recurring monthly reminder to review insights (calls, direction requests, searches) and keep every field current.',
    ],
  },
  {
    slug: 'ontario-google-ads-budget-2026',
    title: 'How Much Should a Small Business in Ontario Spend on Google Ads in 2026?',
    description:
      'A practical 2026 guide to Google Ads budgets for Ontario small businesses — realistic minimums, cost-per-click benchmarks by industry, and how to work backwards from your cost per lead.',
    category: 'Google Ads',
    date: '2026-05-10',
    dateLabel: 'May 10, 2026',
    readTime: '7 min read',
    relatedService: { label: 'Google Ads Management', href: '/google-ads-management' },
    relatedLocation: { label: 'Google Ads Management in Toronto', href: '/google-ads-management-toronto' },
    body: [
      'The short answer: most Ontario small businesses should budget a minimum of $500–$1,500 per month in Google Ads spend to start, with competitive categories in the Greater Toronto Area often needing $1,500–$3,000+ to generate consistent leads. But the right number depends on your industry, your market, and your cost per lead — here is how to figure out yours for 2026.',
      'Start with the realistic minimum. Below roughly $500/month in ad spend, your ads show inconsistently, data accumulates too slowly to optimize, and results tend to disappoint — leading many owners to wrongly conclude "Google Ads does not work." In reality the budget was simply too thin to compete. For most Ontario local services, $500/month is the floor, not the target.',
      'Cost per click varies widely by industry in Ontario. Lower-competition local services might see $2–$6 per click, while competitive categories — legal, dental implants, HVAC, roofing — routinely run $15–$30+ per click in the GTA. At those rates, a $500 monthly budget in a competitive Toronto category might buy only 20–30 clicks, which is rarely enough to produce steady leads. Smaller Ontario markets like Barrie, Kingston, or London generally cost less per click than Toronto, Mississauga, or Vaughan.',
      'The better way to set a budget is to work backwards from your economics. If a new customer is worth $2,000 in profit and you close 30% of leads, you can afford roughly $600 per lead and still profit. If your category averages $8 per click and your landing page converts at 10%, your cost per lead is about $80 — comfortably profitable, and a signal you can scale spend. Doing this math turns budgeting from guesswork into a decision.',
      'Remember that management fees are separate from ad spend. Our Google Ads management starts from $199/month on top of what you spend on the ads themselves. Be cautious of agencies that charge a percentage of ad spend — it creates an incentive to push your budget up regardless of whether the extra spend is producing profitable leads.',
      'Geography matters within Ontario. The GTA is the most expensive and competitive market in the province; the same campaign that needs $2,500/month to compete in Toronto might perform well on $800/month in a smaller Ontario city. If you serve a metro area, expect to invest more — but also expect higher demand volume to match.',
      'Our recommendation for 2026: start with a focused budget aimed at your highest-value services, insist on full call and conversion tracking from day one, establish your true cost per lead over the first 30–60 days, then scale spend into exactly what is working. That disciplined approach beats a big unfocused budget every time — and it is how Ontario small businesses get a real return from Google Ads.',
    ],
  },
  {
    slug: 'dental-marketing-mississauga',
    title: 'Dental Marketing in Mississauga: How Clinics Win New Patients in 2026',
    description:
      'How dental clinics in Mississauga attract new patients in 2026 — the mix of Google Business Profile, local SEO, and Google Ads that fills the schedule.',
    category: 'Local SEO',
    date: '2026-04-28',
    dateLabel: 'April 28, 2026',
    readTime: '6 min read',
    relatedService: { label: 'Dental Marketing Agency', href: '/dental-marketing-agency' },
    relatedLocation: { label: 'Digital Marketing in Mississauga', href: '/mississauga' },
    body: [
      'Dental is one of the most competitive local categories in Mississauga, and new-patient acquisition is where most clinics either thrive or quietly stagnate. The clinics winning new patients in 2026 are not necessarily the best dentists — they are the ones that show up first when a Mississauga resident searches "dentist near me," with strong reviews and an easy way to book. Here is the marketing mix that works.',
      'The foundation is the Google Business Profile. For a Mississauga dental clinic, that means an exact "Dentist" primary category, relevant secondaries (cosmetic dentist, emergency dental service, teeth whitening service), complete services with descriptions, real photos of the practice and team, and accurate hours. This is what gets you into the Map Pack, where most new-patient searches convert.',
      'Reviews decide who wins. Prospective patients compare clinics in seconds, and a profile with 150 reviews at 4.9 stars beats one with 20 reviews almost every time. Build a system to request a review after positive visits — a front-desk ask plus a follow-up text with a direct link works well — and reply to every review. Steady review velocity is one of the strongest local ranking signals there is.',
      'Local SEO extends your reach across Mississauga. A substantive page targeting "dentist Mississauga," plus content for high-value services like Invisalign and dental implants and for neighbourhoods such as Port Credit, Streetsville, Erin Mills, and Meadowvale, helps you rank organically and in the Map Pack. Add LocalBusiness schema and consistent citations so Google trusts your data.',
      'Google Ads fills the schedule faster. While local SEO builds, a focused new-patient Google Ads campaign captures high-intent searches — "emergency dentist Mississauga," "Invisalign Mississauga" — and routes them to a dedicated landing page with a clear new-patient offer and online booking. With call tracking in place, you know your true cost per booked new patient, not just per click.',
      'Put together, this is exactly how a Mississauga clinic moves from page three of the Map Pack to the top: optimize the profile, build reviews relentlessly, add real local content, and run tightly targeted ads for the treatments that matter most. If you would rather have it handled, our dental marketing team does this for clinics across Mississauga and the GTA.',
    ],
  },
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
      'Management fees are separate from ad spend. At OMA, our Google Ads management starts from $199 per month. This covers campaign setup, ongoing optimization, monthly reporting, call tracking, and conversion tracking. The management fee is in addition to whatever you are spending on the ads themselves. Be cautious of agencies who charge a percentage of ad spend — this creates an incentive to increase your budget regardless of whether it is producing results.',
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
    image: ['https://onlinemarketingagency.ca/opengraph-image'],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      '@id': 'https://onlinemarketingagency.ca/#organization',
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
                {post.relatedLocation && (
                  <Link
                    href={post.relatedLocation.href}
                    className="text-sm font-semibold ml-4 inline-flex items-center gap-1"
                    style={{ color: '#C8FF00' }}
                  >
                    {post.relatedLocation.label} →
                  </Link>
                )}
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
