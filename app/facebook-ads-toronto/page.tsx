import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Facebook Ads Toronto | Meta Ads Management for Local Businesses | OMA',
  description:
    'Looking for Facebook Ads management in Toronto? OMA helps local businesses generate qualified leads with Meta Ads on Facebook and Instagram. Book a free audit.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/facebook-ads-toronto' },
  keywords: [
    'Facebook Ads Toronto',
    'Meta Ads Toronto',
    'Facebook advertising Toronto',
    'Instagram Ads Toronto',
    'social media ads Toronto',
    'Facebook Ads management Toronto',
  ],
}

// ─── Dashboard visual data ────────────────────────────────────────────────────

const dashMetrics = [
  { label: 'New Leads / Month', value: '127/mo', sub: 'Facebook & Instagram combined', color: '#C8FF00' },
  { label: 'Cost Per Lead', value: '$22', sub: 'down from $91 avg', color: '#60A5FA' },
  { label: 'Booking Requests', value: '84/mo', sub: 'form fills + DMs + calls', color: '#34D399' },
  { label: 'Wasted Spend Cut', value: '58%', sub: 'eliminated on bad audiences', color: '#A78BFA' },
]

const creativeRows = [
  { name: 'Before/After Reno — Toronto GTA', format: 'Carousel', ctr: '4.8%', cpl: '$19', status: 'Active' },
  { name: 'Free Consult Offer — Dental Clinic', format: 'Single Image', ctr: '3.2%', cpl: '$24', status: 'Active' },
  { name: 'Video Testimonial — HVAC Toronto', format: 'Video', ctr: '5.1%', cpl: '$17', status: 'Active' },
  { name: 'Retargeting — Website Visitors 30d', format: 'Story', ctr: '6.4%', cpl: '$14', status: 'Active' },
]

const auditFindings: { label: string; severity: 'critical' | 'ok' | 'warning' }[] = [
  { label: 'Broad audience wasting $840/mo', severity: 'critical' },
  { label: 'Meta Pixel: fully installed', severity: 'ok' },
  { label: '2 ad sets missing retargeting', severity: 'warning' },
]

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'How much does Facebook Ads management cost in Toronto?',
    a: 'Our Facebook Ads management starts at $499/month for growing businesses. This covers full campaign setup, audience research, creative direction, weekly optimization, and monthly reporting. Ad spend is separate and billed directly to your Meta account.',
  },
  {
    q: 'What is the minimum ad spend recommended for Toronto Facebook Ads?',
    a: "We recommend a minimum of $1,000/month in ad spend for Toronto businesses. With Toronto's competitive market and audience size, this gives the algorithm enough data to optimize effectively and generate consistent leads.",
  },
  {
    q: 'How long does it take to see results from Facebook Ads in Toronto?',
    a: 'Most clients see their first leads within the first week. Campaigns typically hit their stride by week 3–4 as Meta\'s algorithm learns your ideal audience. By month 2, cost per lead usually drops by 30–50% from the initial launch period.',
  },
  {
    q: 'Should I run ads on Facebook, Instagram, or both?',
    a: 'We run on both by default. Facebook and Instagram share the same Meta Ads platform, so we can target across both simultaneously. Instagram typically performs better for visual industries (home improvement, aesthetics, food), while Facebook often converts better for service businesses.',
  },
  {
    q: "What's the difference between a boosted post and a real Facebook Ad campaign?",
    a: 'A boosted post is a simple amplification of existing content with limited targeting options. A managed Facebook Ads campaign uses the full Meta Ads Manager with custom audiences, lookalike targeting, A/B creative testing, retargeting funnels, and conversion tracking — delivering dramatically better results at lower cost.',
  },
  {
    q: 'Can you target specific neighbourhoods or postal codes in Toronto?',
    a: "Yes. Meta Ads allows geo-targeting down to specific postal codes, a radius around your business address, or custom pin-drop areas. We can also exclude areas you don't serve, reducing wasted spend on irrelevant clicks.",
  },
  {
    q: 'Do you handle ad creative or do I need to provide it?',
    a: "We handle the strategy and direction for all creative. We produce copy, headlines, and CTA variations, and we can work with your photos or stock assets. For video-first campaigns, we'll guide you on the exact shots to capture or can source licensed video content.",
  },
  {
    q: 'How do you track leads from Facebook Ads?',
    a: 'We install the Meta Pixel on your website and set up conversion events for form submissions, phone calls, and bookings. We also set up Instant Lead Forms within Meta where relevant. Every lead is tracked back to the specific ad, audience, and creative that generated it.',
  },
  {
    q: 'Can Facebook Ads work for B2B businesses in Toronto?',
    a: "Yes, though we typically recommend LinkedIn Ads as the primary channel for B2B. That said, Facebook can work effectively for B2B with interest-based targeting, business owner demographics, and retargeting website visitors. We'll advise the right mix during your free audit.",
  },
  {
    q: 'What industries do you manage Facebook Ads for in Toronto?',
    a: 'We manage Facebook Ads for home services (HVAC, plumbing, roofing, renovation), dental and medical clinics, restaurants and cafés, real estate, fitness and wellness studios, law firms, financial services, and retail. We have a proven playbook for each.',
  },
  {
    q: 'Do you offer month-to-month contracts?',
    a: "Yes. All our Facebook Ads management plans are month-to-month. We don't believe in locking clients into long contracts — we earn your business through results. Most clients stay 12+ months because the leads keep coming.",
  },
  {
    q: 'How is OMA different from other Facebook Ads agencies in Toronto?',
    a: 'Most agencies set up campaigns and leave them running. We optimize weekly — testing new creatives, refreshing audiences, tightening targeting, and cutting wasted spend. We also provide transparent reporting with actual lead counts and CPL, not vanity metrics like reach and impressions.',
  },
]

export default function FacebookAdsToronto() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Facebook Ads Management',
    name: 'Facebook Ads Management Toronto',
    description:
      'Meta Ads management for Toronto local businesses — Facebook and Instagram campaigns that generate qualified leads.',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Online Marketing Agency',
      url: 'https://onlinemarketingagency.ca',
      telephone: '+1-647-370-9596',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toronto',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
    },
    areaServed: { '@type': 'City', name: 'Toronto' },
    url: 'https://onlinemarketingagency.ca/facebook-ads-toronto',
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: 'Online Marketing Agency',
    url: 'https://onlinemarketingagency.ca',
    telephone: '+1-647-370-9596',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="relative" style={{ background: '#0F0F12', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ background: '#0F0F12' }}>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Facebook Ads Toronto', href: '/facebook-ads-toronto' },
              ]}
            />
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(200,255,0,0.12)',
                  border: '1px solid rgba(200,255,0,0.3)',
                  borderRadius: '999px',
                  padding: '0.35rem 1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#C8FF00', display: 'inline-block' }} />
                <span style={{ color: '#C8FF00', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>META ADS — TORONTO</span>
              </div>
              <h1
                style={{
                  color: '#ffffff',
                  fontSize: 'clamp(2rem,4.5vw,3.25rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: '1.25rem',
                }}
              >
                Facebook Ads Toronto
                <br />
                <span style={{ color: '#C8FF00' }}>for Local Business</span>
                <br />
                Lead Generation
              </h1>
              <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: 520 }}>
                OMA manages Facebook and Instagram ad campaigns that reach Toronto customers at the exact moment
                they&apos;re ready to buy — and turn clicks into booked appointments and calls.
              </p>
              {/* Stat chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {[
                  { val: '3.2M+', label: 'Toronto Facebook users' },
                  { val: '$22', label: 'Avg. cost per lead' },
                  { val: '4.1×', label: 'Average ROAS' },
                ].map((s) => (
                  <div
                    key={s.val}
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 12,
                      padding: '0.75rem 1.25rem',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ color: '#C8FF00', fontSize: '1.5rem', fontWeight: 800 }}>{s.val}</div>
                    <div style={{ color: '#a1a1aa', fontSize: '0.78rem', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href="#contact"
                  style={{
                    background: '#C8FF00',
                    color: '#0F0F12',
                    fontWeight: 700,
                    padding: '0.9rem 2rem',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: '1rem',
                  }}
                >
                  Get a Free Meta Ads Audit
                </a>
                <a
                  href="#pricing"
                  style={{
                    background: 'transparent',
                    color: '#ffffff',
                    fontWeight: 600,
                    padding: '0.9rem 2rem',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  See Pricing
                </a>
              </div>
            </div>

            {/* Right — Meta Ads Dashboard */}
            <div
              style={{
                background: '#16161A',
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              }}
            >
              {/* Titlebar */}
              <div
                style={{
                  background: '#1E1E24',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
                </div>
                <span style={{ color: '#71717a', fontSize: '0.75rem' }}>Meta Ads Manager — Toronto Campaigns</span>
                <div style={{ background: 'rgba(200,255,0,0.15)', borderRadius: 999, padding: '0.2rem 0.6rem' }}>
                  <span style={{ color: '#C8FF00', fontSize: '0.7rem', fontWeight: 700 }}>● LIVE</span>
                </div>
              </div>
              <div style={{ padding: '1.25rem' }}>
                {/* Metric tiles */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                  {dashMetrics.map((m) => (
                    <div
                      key={m.label}
                      style={{
                        background: '#0F0F12',
                        borderRadius: 10,
                        padding: '0.9rem 1rem',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div style={{ color: '#71717a', fontSize: '0.7rem', marginBottom: 4 }}>{m.label}</div>
                      <div style={{ color: m.color, fontSize: '1.4rem', fontWeight: 800 }}>{m.value}</div>
                      <div style={{ color: '#52525b', fontSize: '0.7rem', marginTop: 2 }}>{m.sub}</div>
                    </div>
                  ))}
                </div>
                {/* Creative table */}
                <div
                  style={{
                    background: '#0F0F12',
                    borderRadius: 10,
                    padding: '0.75rem',
                    border: '1px solid rgba(255,255,255,0.06)',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      color: '#71717a',
                      fontSize: '0.68rem',
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Creative Performance
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        {['Ad Name', 'Format', 'CTR', 'CPL', 'Status'].map((h) => (
                          <th
                            key={h}
                            style={{
                              color: '#52525b',
                              fontSize: '0.65rem',
                              textAlign: 'left',
                              paddingBottom: '0.4rem',
                              fontWeight: 600,
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {creativeRows.map((r) => (
                        <tr key={r.name}>
                          <td style={{ color: '#d4d4d8', fontSize: '0.68rem', paddingBottom: '0.35rem', paddingRight: '0.5rem' }}>{r.name}</td>
                          <td style={{ color: '#a1a1aa', fontSize: '0.68rem', paddingBottom: '0.35rem', paddingRight: '0.5rem' }}>{r.format}</td>
                          <td style={{ color: '#34D399', fontSize: '0.68rem', paddingBottom: '0.35rem', paddingRight: '0.5rem', fontWeight: 700 }}>{r.ctr}</td>
                          <td style={{ color: '#60A5FA', fontSize: '0.68rem', paddingBottom: '0.35rem', paddingRight: '0.5rem', fontWeight: 700 }}>{r.cpl}</td>
                          <td style={{ paddingBottom: '0.35rem' }}>
                            <span
                              style={{
                                background: 'rgba(52,211,153,0.15)',
                                color: '#34D399',
                                borderRadius: 999,
                                padding: '0.15rem 0.5rem',
                                fontSize: '0.62rem',
                                fontWeight: 700,
                              }}
                            >
                              {r.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Audit strip */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {auditFindings.map((f) => (
                    <div
                      key={f.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: '#0F0F12',
                        borderRadius: 8,
                        padding: '0.5rem 0.75rem',
                        border: `1px solid ${
                          f.severity === 'critical'
                            ? 'rgba(239,68,68,0.3)'
                            : f.severity === 'ok'
                            ? 'rgba(52,211,153,0.3)'
                            : 'rgba(251,191,36,0.3)'
                        }`,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background:
                            f.severity === 'critical' ? '#EF4444' : f.severity === 'ok' ? '#34D399' : '#FBBF24',
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color:
                            f.severity === 'critical' ? '#FCA5A5' : f.severity === 'ok' ? '#6EE7B7' : '#FDE68A',
                          fontSize: '0.7rem',
                        }}
                      >
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S1: WHY TORONTO BUSINESSES NEED FACEBOOK ADS ── */}
      <section style={{ background: '#F7F6F2', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#0F0F12', fontSize: 'clamp(1.6rem,3vw,2.25rem)', fontWeight: 800, marginBottom: '1rem' }}>
              Why Toronto Businesses Run Facebook Ads
            </h2>
            <p style={{ color: '#52525b', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
              With 3.2 million Facebook users in the GTA, Meta Ads put your business in front of the right neighbours, at
              the right time, with the right offer.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: '🎯',
                title: 'Hyper-Local Targeting',
                body: 'Reach households within 5 km of your location or by neighbourhood, postal code, and income bracket.',
              },
              {
                icon: '👥',
                title: 'Lookalike Audiences',
                body: 'Upload your customer list and Meta finds thousands more Toronto residents who look exactly like them.',
              },
              {
                icon: '🔄',
                title: 'Retargeting Funnels',
                body: "Re-engage people who visited your website or watched your video but didn't book or call.",
              },
              {
                icon: '📱',
                title: 'Instagram Reach',
                body: 'One campaign runs across Facebook and Instagram — doubling your reach with no extra setup.',
              },
              {
                icon: '📊',
                title: 'Real ROI Tracking',
                body: "Every lead is attributed to the exact ad, audience, and creative so you know what's working.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#ffffff',
                  borderRadius: 14,
                  padding: '1.75rem 1.5rem',
                  border: '1px solid rgba(15,15,18,0.08)',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ color: '#0F0F12', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#52525b', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S2: WHAT'S INCLUDED IN MANAGEMENT ── */}
      <section style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                color: '#1D4ED8',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Full-Service Management
            </span>
            <h2
              style={{
                color: '#0F0F12',
                fontSize: 'clamp(1.6rem,3vw,2.25rem)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              Everything Included in Your Meta Ads Plan
            </h2>
            <p style={{ color: '#52525b', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              We handle every part of your Facebook and Instagram ad campaigns — from strategy to creative to weekly
              optimization.
            </p>
          </div>
          {/* 2 featured panels */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                title: 'Audience Research & Targeting',
                body: 'We build layered audiences using Toronto demographics, interests, behaviours, custom lists, and lookalikes — so your ads reach people who are most likely to become customers.',
                highlight: true,
              },
              {
                title: 'Creative Strategy & Ad Copy',
                body: 'We write all headlines, primary text, and CTAs, and we direct the creative vision for images, carousels, and video. Every element is engineered to stop the scroll and drive action.',
                highlight: true,
              },
            ].map((panel) => (
              <div
                key={panel.title}
                style={{
                  background: panel.highlight ? '#0F0F12' : '#F7F6F2',
                  borderRadius: 14,
                  padding: '2rem',
                  border: panel.highlight ? '1px solid rgba(200,255,0,0.2)' : '1px solid rgba(15,15,18,0.08)',
                }}
              >
                <h3
                  style={{
                    color: panel.highlight ? '#C8FF00' : '#0F0F12',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {panel.title}
                </h3>
                <p style={{ color: panel.highlight ? '#a1a1aa' : '#52525b', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {panel.body}
                </p>
              </div>
            ))}
          </div>
          {/* 5 management blocks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              {
                title: 'Campaign Setup & Structure',
                body: 'Proper account structure with segmented campaigns, ad sets, and A/B test variants.',
              },
              {
                title: 'Meta Pixel & Conversion Tracking',
                body: 'Full pixel setup with events for leads, calls, purchases, and appointments.',
              },
              {
                title: 'Weekly Optimization',
                body: 'Budget reallocation, audience pruning, bid adjustments, and creative rotation every week.',
              },
              {
                title: 'A/B Creative Testing',
                body: 'Systematic testing of images, copy, headlines, and formats to find top performers.',
              },
              {
                title: 'Monthly Reporting',
                body: 'Plain-language reports showing leads generated, cost per lead, and ROAS — no vanity metrics.',
              },
            ].map((block) => (
              <div
                key={block.title}
                style={{ background: '#F7F6F2', borderRadius: 12, padding: '1.5rem', border: '1px solid rgba(15,15,18,0.06)' }}
              >
                <h3 style={{ color: '#0F0F12', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  {block.title}
                </h3>
                <p style={{ color: '#52525b', fontSize: '0.88rem', lineHeight: 1.6 }}>{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: BOOSTED POSTS vs MANAGED ADS ── */}
      <section className="relative" style={{ background: '#0F0F12', padding: '5rem 0' }}>
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem,3vw,2.25rem)', fontWeight: 800, marginBottom: '1rem' }}>
              Boosted Posts vs. Managed Facebook Ads
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              Boosting a post is not the same as running a real campaign. Here&apos;s why Toronto businesses that switch
              from boosted posts to managed ads get dramatically better results.
            </p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
              <thead>
                <tr>
                  <th
                    style={{
                      color: '#71717a',
                      fontSize: '0.85rem',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      fontWeight: 600,
                      width: '36%',
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      color: '#EF4444',
                      fontSize: '0.85rem',
                      textAlign: 'center',
                      padding: '0.75rem 1rem',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      fontWeight: 700,
                    }}
                  >
                    Boosted Posts
                  </th>
                  <th
                    style={{
                      color: '#C8FF00',
                      fontSize: '0.85rem',
                      textAlign: 'center',
                      padding: '0.75rem 1rem',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      fontWeight: 700,
                    }}
                  >
                    Managed Ads (OMA)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Audience Targeting',
                    boosted: 'Basic (age, location, interests)',
                    managed: 'Layered: custom, lookalike, behaviour, income',
                  },
                  {
                    feature: 'Budget Control',
                    boosted: 'Fixed post budget only',
                    managed: 'Full bidding strategies & daily/lifetime budgets',
                  },
                  {
                    feature: 'Ad Creative Options',
                    boosted: 'Single image or video only',
                    managed: 'Single, carousel, collection, story, reel',
                  },
                  {
                    feature: 'A/B Testing',
                    boosted: 'Not available',
                    managed: 'Systematic creative & audience split tests',
                  },
                  {
                    feature: 'Retargeting Funnels',
                    boosted: 'Not available',
                    managed: 'Website visitors, video viewers, form openers',
                  },
                  {
                    feature: 'Conversion Tracking',
                    boosted: 'Reach & engagement only',
                    managed: 'Leads, calls, bookings, purchases tracked',
                  },
                  {
                    feature: 'Campaign Optimization',
                    boosted: 'None — set and forget',
                    managed: 'Weekly optimization by certified specialists',
                  },
                  {
                    feature: 'Reporting',
                    boosted: 'Likes, reach, engagement',
                    managed: 'Leads, CPL, ROAS, booking rate, call volume',
                  },
                ].map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    <td style={{ color: '#d4d4d8', fontSize: '0.9rem', padding: '0.85rem 1rem', fontWeight: 600 }}>
                      {row.feature}
                    </td>
                    <td style={{ color: '#FCA5A5', fontSize: '0.88rem', padding: '0.85rem 1rem', textAlign: 'center' }}>
                      {row.boosted}
                    </td>
                    <td
                      style={{
                        color: '#C8FF00',
                        fontSize: '0.88rem',
                        padding: '0.85rem 1rem',
                        textAlign: 'center',
                        fontWeight: 600,
                      }}
                    >
                      {row.managed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── S4: INDUSTRIES ── */}
      <section style={{ background: '#F7F6F2', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                color: '#1D4ED8',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Industries We Serve
            </span>
            <h2
              style={{
                color: '#0F0F12',
                fontSize: 'clamp(1.6rem,3vw,2.25rem)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              Facebook Ads for Every Toronto Business Type
            </h2>
            <p style={{ color: '#52525b', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              We have a proven playbook for each industry — specific audiences, creative angles, and offers that convert
              in competitive Toronto markets.
            </p>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}
          >
            {[
              { icon: '🏠', name: 'Home Renovation' },
              { icon: '🔧', name: 'Plumbing & HVAC' },
              { icon: '🏥', name: 'Dental Clinics' },
              { icon: '💆', name: 'Med Spa & Aesthetics' },
              { icon: '🍽️', name: 'Restaurants & Cafés' },
              { icon: '💪', name: 'Fitness & Yoga Studios' },
              { icon: '⚖️', name: 'Law Firms' },
              { icon: '🏡', name: 'Real Estate Agents' },
              { icon: '💇', name: 'Salons & Barbers' },
              { icon: '🛒', name: 'Retail & eCommerce' },
              { icon: '🏫', name: 'Education & Tutoring' },
              { icon: '🚗', name: 'Auto Services' },
            ].map((ind) => (
              <div
                key={ind.name}
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: '1.25rem',
                  textAlign: 'center',
                  border: '1px solid rgba(15,15,18,0.08)',
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{ind.icon}</div>
                <div style={{ color: '#0F0F12', fontWeight: 600, fontSize: '0.88rem' }}>{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: CREATIVE STRATEGY ── */}
      <section style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span
                style={{
                  color: '#1D4ED8',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Creative That Converts
              </span>
              <h2
                style={{
                  color: '#0F0F12',
                  fontSize: 'clamp(1.5rem,3vw,2.1rem)',
                  fontWeight: 800,
                  marginTop: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                How We Build High-Converting Facebook Ad Creative for Toronto Businesses
              </h2>
              <p style={{ color: '#52525b', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Most Facebook ads fail because they look like ads. We create content that matches the native feel of the
                News Feed — so your message reaches people before they scroll past.
              </p>
              <p style={{ color: '#52525b', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Every creative asset is built around a specific offer, audience pain point, and desired action. We test
                multiple angles simultaneously and scale only the winners.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    format: 'Single Image Ads',
                    desc: 'Clean, high-contrast images with a direct headline and local offer — best for services and appointments.',
                  },
                  {
                    format: 'Carousel Ads',
                    desc: 'Ideal for before/after, multi-service, or step-by-step content. Each card links independently.',
                  },
                  {
                    format: 'Video Ads',
                    desc: 'Short 15–30 second videos with captions that build trust fast. Strong for testimonials and demos.',
                  },
                  {
                    format: 'Story & Reel Ads',
                    desc: 'Full-screen vertical ads on Instagram Stories and Reels — high visibility with swipe-up CTAs.',
                  },
                ].map((f) => (
                  <div
                    key={f.format}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                      background: '#F7F6F2',
                      borderRadius: 12,
                      padding: '1rem 1.25rem',
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: '#C8FF00',
                        flexShrink: 0,
                        marginTop: '0.35rem',
                      }}
                    />
                    <div>
                      <div style={{ color: '#0F0F12', fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>
                        {f.format}
                      </div>
                      <div style={{ color: '#52525b', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  background: '#F7F6F2',
                  borderRadius: 16,
                  padding: '2rem',
                  border: '1px solid rgba(15,15,18,0.08)',
                }}
              >
                <h3 style={{ color: '#0F0F12', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  Our Creative Testing Process
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    {
                      step: '01',
                      title: 'Angle Research',
                      body: 'We identify 3–5 core pain points and desire angles specific to your Toronto customer profile.',
                    },
                    {
                      step: '02',
                      title: 'Creative Briefs',
                      body: 'Each angle becomes a creative brief: hook, visual direction, headline, primary text, CTA.',
                    },
                    {
                      step: '03',
                      title: 'Launch & Split Test',
                      body: 'Multiple ad variants run simultaneously against each other with statistically valid sample sizes.',
                    },
                    {
                      step: '04',
                      title: 'Scale Winners, Cut Losers',
                      body: 'Top performers get increased budget. Underperformers are paused within 5–7 days.',
                    },
                    {
                      step: '05',
                      title: 'Refresh & Iterate',
                      body: 'Creative is refreshed every 4–6 weeks to combat ad fatigue and maintain strong CTRs.',
                    },
                  ].map((s) => (
                    <div key={s.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          background: '#0F0F12',
                          color: '#C8FF00',
                          borderRadius: 8,
                          padding: '0.4rem 0.75rem',
                          fontWeight: 800,
                          fontSize: '0.85rem',
                          flexShrink: 0,
                        }}
                      >
                        {s.step}
                      </div>
                      <div>
                        <div style={{ color: '#0F0F12', fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>
                          {s.title}
                        </div>
                        <div style={{ color: '#52525b', fontSize: '0.88rem', lineHeight: 1.6 }}>{s.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: LEAD QUALITY & FOLLOW-UP ── */}
      <section className="relative" style={{ background: '#0F0F12', padding: '5rem 0' }}>
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                style={{
                  color: '#C8FF00',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Lead Quality & Follow-Up
              </span>
              <h2
                style={{
                  color: '#ffffff',
                  fontSize: 'clamp(1.5rem,3vw,2.1rem)',
                  fontWeight: 800,
                  marginTop: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                More Than Clicks — We Deliver Booked Jobs and Appointments
              </h2>
              <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Getting clicks is easy. Getting qualified leads who actually call or book is the hard part. We engineer
                the entire path — from ad to landing page to lead capture — to maximize booking rates.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Instant lead forms capture contact info without leaving Facebook',
                  'Dedicated landing pages with matching ad messaging for higher CVR',
                  'Thank-you page with call-to-action to book immediately',
                  'CRM integrations (HubSpot, GoHighLevel, Jobber, and more)',
                  'Lead notification emails and SMS fired the moment a form is submitted',
                  'Monthly lead quality audit — we review fake and low-quality submissions',
                ].map((point) => (
                  <div key={point} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C8FF00', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                    <span style={{ color: '#d4d4d8', fontSize: '0.95rem', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                {
                  label: 'Instant Forms',
                  icon: '📋',
                  body: 'Native Meta lead forms pre-fill user info for frictionless submission — great for mobile.',
                },
                {
                  label: 'Landing Pages',
                  icon: '🖥️',
                  body: 'Custom landing pages with your brand, social proof, and a single focused CTA.',
                },
                {
                  label: 'CRM Integration',
                  icon: '🔗',
                  body: 'Leads flow directly into your CRM or calendar tool — zero manual data entry.',
                },
                {
                  label: 'Speed-to-Lead',
                  icon: '⚡',
                  body: 'Instant notifications so your team can follow up in under 5 minutes — before leads go cold.',
                },
              ].map((card) => (
                <div
                  key={card.label}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: 14,
                    padding: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    {card.label}
                  </div>
                  <div style={{ color: '#a1a1aa', fontSize: '0.85rem', lineHeight: 1.6 }}>{card.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S7: PROCESS TIMELINE ── */}
      <section style={{ background: '#F7F6F2', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                color: '#1D4ED8',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Our Process
            </span>
            <h2
              style={{
                color: '#0F0F12',
                fontSize: 'clamp(1.6rem,3vw,2.25rem)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              From Audit to First Lead in 7 Days
            </h2>
            <p style={{ color: '#52525b', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              A structured onboarding process means your campaigns launch fast and are built to perform from day one.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                step: 1,
                title: 'Free Audit',
                body: 'We audit your current Meta Ads account (or set one up), website, and offers to identify waste, missed audiences, and quick wins.',
                time: 'Day 1',
              },
              {
                step: 2,
                title: 'Strategy & Brief',
                body: 'We present a custom campaign strategy: audiences, creative angles, offer structure, and funnel path.',
                time: 'Day 2–3',
              },
              {
                step: 3,
                title: 'Campaign Build',
                body: 'Full campaign setup — ad account, pixel, campaigns, ad sets, creative assets, and conversion tracking.',
                time: 'Day 3–5',
              },
              {
                step: 4,
                title: 'Review & Launch',
                body: 'You approve the creative and copy. We launch and monitor closely during the learning phase.',
                time: 'Day 5–7',
              },
              {
                step: 5,
                title: 'Optimize Weekly',
                body: 'Every week we review performance, adjust bids and audiences, refresh underperforming ads, and report.',
                time: 'Ongoing',
              },
              {
                step: 6,
                title: 'Scale What Works',
                body: 'As winning creative and audiences are identified, we scale budget to amplify results and reduce CPL.',
                time: 'Month 2+',
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  background: '#ffffff',
                  borderRadius: 14,
                  padding: '1.75rem 1.5rem',
                  border: '1px solid rgba(15,15,18,0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      background: '#0F0F12',
                      color: '#C8FF00',
                      borderRadius: 999,
                      width: 36,
                      height: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      flexShrink: 0,
                    }}
                  >
                    {s.step}
                  </div>
                  <span
                    style={{
                      color: '#1D4ED8',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: 'rgba(29,78,216,0.1)',
                      borderRadius: 999,
                      padding: '0.2rem 0.6rem',
                    }}
                  >
                    {s.time}
                  </span>
                </div>
                <h3 style={{ color: '#0F0F12', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: '#52525b', fontSize: '0.88rem', lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S8: PRICING ── */}
      <section id="pricing" style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                color: '#1D4ED8',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Pricing
            </span>
            <h2
              style={{
                color: '#0F0F12',
                fontSize: 'clamp(1.6rem,3vw,2.25rem)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              Facebook Ads Management Pricing
            </h2>
            <p style={{ color: '#52525b', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Transparent, flat-fee management. No percentage of ad spend. No hidden fees. Ad spend is billed directly
              to your Meta account.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {[
              {
                tier: 'Starter',
                price: '$499',
                period: '/month',
                adSpend: 'Up to $1,500 ad spend',
                features: [
                  '1 campaign (Facebook or Instagram)',
                  'Up to 3 ad sets',
                  'Creative direction & copy',
                  'Monthly reporting',
                  'Pixel setup & conversion tracking',
                ],
                cta: 'Get Started',
                highlighted: false,
              },
              {
                tier: 'Growth',
                price: '$749',
                period: '/month',
                adSpend: '$1,500–$3,500 ad spend',
                features: [
                  'Up to 3 campaigns (Facebook + Instagram)',
                  'Lookalike & retargeting audiences',
                  'A/B creative testing',
                  'Lead form setup + CRM integration',
                  'Bi-weekly optimization + weekly reporting',
                ],
                cta: 'Most Popular',
                highlighted: true,
              },
              {
                tier: 'Scale',
                price: '$999',
                period: '/month',
                adSpend: '$3,500+ ad spend',
                features: [
                  'Unlimited campaigns & ad sets',
                  'Full creative production support',
                  'Video ad direction',
                  'Custom landing page (1 included)',
                  'Weekly strategy calls + priority support',
                ],
                cta: 'Get Started',
                highlighted: false,
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                style={{
                  background: plan.highlighted ? '#0F0F12' : '#F7F6F2',
                  borderRadius: 16,
                  padding: '2rem',
                  border: plan.highlighted ? '2px solid #C8FF00' : '1px solid rgba(15,15,18,0.1)',
                  position: 'relative',
                }}
              >
                {plan.highlighted && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#C8FF00',
                      color: '#0F0F12',
                      borderRadius: 999,
                      padding: '0.2rem 1rem',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div style={{ color: plan.highlighted ? '#a1a1aa' : '#52525b', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {plan.tier}
                </div>
                <div
                  style={{
                    color: plan.highlighted ? '#C8FF00' : '#0F0F12',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                  <span style={{ fontSize: '1rem', fontWeight: 400 }}>{plan.period}</span>
                </div>
                <div
                  style={{ color: '#71717a', fontSize: '0.82rem', marginTop: '0.35rem', marginBottom: '1.5rem' }}
                >
                  {plan.adSpend}
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1.5rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                  }}
                >
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: plan.highlighted ? '#C8FF00' : '#1D4ED8', fontWeight: 700, flexShrink: 0 }}>
                        ✓
                      </span>
                      <span
                        style={{
                          color: plan.highlighted ? '#d4d4d8' : '#374151',
                          fontSize: '0.9rem',
                          lineHeight: 1.5,
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  style={{
                    display: 'block',
                    background: plan.highlighted ? '#C8FF00' : '#0F0F12',
                    color: plan.highlighted ? '#0F0F12' : '#ffffff',
                    textAlign: 'center',
                    padding: '0.85rem',
                    borderRadius: 8,
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#71717a', fontSize: '0.88rem' }}>
            All plans are month-to-month. No setup fees. Ad spend billed directly to your Meta account.
          </p>
        </div>
      </section>

      {/* ── S9: WHY OMA ── */}
      <section className="relative" style={{ background: '#0F0F12', padding: '5rem 0' }}>
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem,3vw,2.25rem)', fontWeight: 800, marginBottom: '1rem' }}>
              Why Toronto Businesses Choose OMA
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              We are a boutique performance agency focused entirely on helping local Toronto businesses grow. No juniors.
              No cookie-cutter campaigns.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                icon: '🏆',
                title: 'Results-Only Focus',
                body: "We report on leads and bookings, not likes and reach. You know exactly what you're getting.",
              },
              {
                icon: '🔍',
                title: 'Weekly Optimization',
                body: 'Most agencies optimize monthly. We review and adjust every week to maximize every dollar.',
              },
              {
                icon: '📍',
                title: 'Toronto Market Expertise',
                body: 'We know the Toronto market — neighbourhoods, competition, seasonality, and local consumer behaviour.',
              },
              {
                icon: '🤝',
                title: 'No Long-Term Contracts',
                body: "Month-to-month only. We keep your business because results keep coming, not because you're locked in.",
              },
              {
                icon: '📞',
                title: 'Direct Access to Your Manager',
                body: 'You work directly with the person running your campaigns — no account reps or hand-offs.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 14,
                  padding: '1.75rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
          {/* Internal links */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p style={{ color: '#71717a', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>
              Explore other services:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {[
                { label: 'Google Ads Management', href: '/google-ads-management' },
                { label: 'SEO Services', href: '/seo-services' },
                { label: 'Local SEO Services', href: '/local-seo-services' },
                { label: 'Google Business Profile', href: '/google-business-profile-optimization' },
                { label: 'Website Design', href: '/website-design-for-small-business' },
                { label: 'Lead Generation', href: '/lead-generation-agency' },
                { label: 'SEO Consultant', href: '/seo-consultant' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    color: '#a1a1aa',
                    borderRadius: 8,
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S10: FAQ ── */}
      <section style={{ background: '#F7F6F2', padding: '5rem 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                color: '#1D4ED8',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              FAQ
            </span>
            <h2
              style={{
                color: '#0F0F12',
                fontSize: 'clamp(1.6rem,3vw,2.25rem)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              Frequently Asked Questions About Facebook Ads in Toronto
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  border: '1px solid rgba(15,15,18,0.08)',
                  overflow: 'hidden',
                }}
              >
                <summary
                  style={{
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    color: '#0F0F12',
                    fontWeight: 700,
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  {faq.q}
                  <span style={{ color: '#1D4ED8', flexShrink: 0, fontSize: '1.25rem' }}>+</span>
                </summary>
                <div
                  style={{
                    padding: '0 1.5rem 1.25rem',
                    color: '#52525b',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    borderTop: '1px solid rgba(15,15,18,0.06)',
                  }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── S11: FINAL CTA + FORM ── */}
      <section id="contact" className="relative" style={{ background: '#0F0F12', padding: '5rem 0' }}>
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem,3vw,2.25rem)', fontWeight: 800, marginBottom: '1rem' }}>
              Get Your Free Facebook Ads Audit
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Tell us about your business. We&apos;ll review your current ads (or your competitors&apos;), build a custom
              strategy, and show you exactly how we&apos;d generate more leads from Meta Ads in Toronto.
            </p>
          </div>
          <form
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    color: '#a1a1aa',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8,
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    color: '#a1a1aa',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Business Name *
                </label>
                <input
                  type="text"
                  name="business"
                  required
                  placeholder="Smith Renovations Inc."
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8,
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    color: '#a1a1aa',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@smithreno.ca"
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8,
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    color: '#a1a1aa',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="416-555-0100"
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8,
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    color: '#a1a1aa',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Website URL
                </label>
                <input
                  type="url"
                  name="website"
                  placeholder="https://smithreno.ca"
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8,
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    color: '#a1a1aa',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  City / Area
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Toronto, North York, Etobicoke…"
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8,
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    color: '#a1a1aa',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Monthly Ad Budget
                </label>
                <select
                  name="budget"
                  style={{
                    width: '100%',
                    background: '#1E1E24',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8,
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">Select budget range…</option>
                  <option value="under-1000">Under $1,000/mo</option>
                  <option value="1000-2500">$1,000–$2,500/mo</option>
                  <option value="2500-5000">$2,500–$5,000/mo</option>
                  <option value="5000-10000">$5,000–$10,000/mo</option>
                  <option value="10000+">$10,000+/mo</option>
                </select>
              </div>
              <div>
                <label
                  style={{
                    color: '#a1a1aa',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Main Goal
                </label>
                <select
                  name="goal"
                  style={{
                    width: '100%',
                    background: '#1E1E24',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8,
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">Select your goal…</option>
                  <option value="more-leads">Generate More Leads</option>
                  <option value="appointment-bookings">Get More Appointment Bookings</option>
                  <option value="brand-awareness">Build Local Brand Awareness</option>
                  <option value="online-sales">Drive Online Sales</option>
                  <option value="retargeting">Retarget Website Visitors</option>
                  <option value="audit-existing">Audit & Fix Existing Campaigns</option>
                </select>
              </div>
            </div>
            <div>
              <label
                style={{
                  color: '#a1a1aa',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                Tell us about your business
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="What do you sell, who are your customers, and what's your biggest marketing challenge right now?"
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 8,
                  padding: '0.75rem 1rem',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: '#C8FF00',
                color: '#0F0F12',
                fontWeight: 800,
                padding: '1rem 2rem',
                borderRadius: 8,
                border: 'none',
                fontSize: '1rem',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Request My Free Facebook Ads Audit →
            </button>
            <p style={{ color: '#52525b', fontSize: '0.82rem', textAlign: 'center', margin: 0 }}>
              No obligation. No spam. We&apos;ll respond within 1 business day.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
