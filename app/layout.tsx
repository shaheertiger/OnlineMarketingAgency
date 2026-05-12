import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = 'https://onlinemarketingagency.ca'

// ── Viewport (separate export per Next.js 14+ standard) ──────────────────────
export const viewport: Viewport = {
  themeColor: '#F7F6F2',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
}

// ── Global metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: 'OnlineMarketingAgency.ca',

  title: {
    default: 'Digital Marketing Agency Canada | Google Ads, SEO & Local Leads',
    template: '%s | OnlineMarketingAgency.ca',
  },

  description:
    'OnlineMarketingAgency.ca helps Canadian small businesses get more calls, bookings, and customers with Google Ads, SEO, Local SEO, website design, and lead generation. Free marketing audit available.',

  keywords: [
    'digital marketing agency Canada',
    'online marketing agency',
    'Google Ads management Canada',
    'SEO services Canada',
    'local SEO services',
    'Google Business Profile optimization',
    'small business marketing Canada',
    'lead generation agency',
    'Facebook Ads agency Canada',
    'marketing agency near me',
  ],

  authors: [
    { name: 'OnlineMarketingAgency.ca', url: BASE_URL },
  ],
  creator:   'OnlineMarketingAgency.ca',
  publisher: 'OnlineMarketingAgency.ca',
  category:  'Digital Marketing',

  // ── OpenGraph ─────────────────────────────────────────────────────────────
  openGraph: {
    type:     'website',
    locale:   'en_CA',
    url:      BASE_URL,
    siteName: 'OnlineMarketingAgency.ca',
    title:    'Digital Marketing Agency Canada | Google Ads, SEO & Local Leads',
    description:
      'Canadian digital marketing agency helping local businesses grow with Google Ads, SEO, Local SEO, and lead generation. Free audit available.',
    images: [
      {
        url:    '/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    'OnlineMarketingAgency.ca — Digital Marketing Agency Canada',
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    site:        '@OMAcanada',
    creator:     '@OMAcanada',
    title:       'Digital Marketing Agency Canada | Google Ads, SEO & Local Leads',
    description: 'Canadian digital marketing agency helping local businesses grow with Google Ads, SEO, Local SEO, and lead generation.',
    images:      ['/og-image.jpg'],
  },

  // ── Crawl directives ──────────────────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                true,
      follow:               true,
      'max-image-preview':  'large',
      'max-snippet':        -1,
      'max-video-preview':  -1,
    },
  },

  // ── Canonical set per-page; default fallback ──────────────────────────────
  alternates: {
    canonical: BASE_URL,
    languages: { 'en-CA': BASE_URL },
  },

  // ── Verification placeholders ─────────────────────────────────────────────
  verification: {
    google: 'REPLACE_WITH_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts for faster LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* SVG favicon fallback — PNG sizes served by app/icon.tsx and app/apple-icon.tsx */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
