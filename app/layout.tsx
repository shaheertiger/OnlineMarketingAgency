import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://onlinemarketingagency.ca'),
  title: {
    default: 'Digital Marketing Agency Canada | Google Ads, SEO & Local Leads',
    template: '%s | OnlineMarketingAgency.ca',
  },
  description:
    'OnlineMarketingAgency.ca helps local businesses get more calls, bookings, and customers with Google Ads, SEO, Local SEO, websites, and lead generation.',
  keywords: [
    'digital marketing agency',
    'online marketing agency',
    'marketing agency near me',
    'digital marketing agency Canada',
    'small business marketing agency',
    'Google Ads management',
    'SEO services Canada',
    'local SEO services',
  ],
  authors: [{ name: 'OnlineMarketingAgency.ca' }],
  creator: 'OnlineMarketingAgency.ca',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://onlinemarketingagency.ca',
    siteName: 'OnlineMarketingAgency.ca',
    title: 'Digital Marketing Agency Canada | Google Ads, SEO & Local Leads',
    description:
      'OnlineMarketingAgency.ca helps local businesses get more calls, bookings, and customers with Google Ads, SEO, Local SEO, websites, and lead generation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Canada | Google Ads, SEO & Local Leads',
    description:
      'OnlineMarketingAgency.ca helps local businesses get more calls, bookings, and customers with Google Ads, SEO, Local SEO, websites, and lead generation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://onlinemarketingagency.ca',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
