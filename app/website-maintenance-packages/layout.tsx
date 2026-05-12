import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Website Maintenance Packages | Monthly Website Support Plans | OMA',
  description:
    'Need website maintenance packages? OMA offers monthly website support, WordPress updates, backups, security checks, content edits, performance monitoring, and website care plans.',
  alternates: { canonical: 'https://onlinemarketingagency.ca/website-maintenance-packages' },
  keywords: [
    'website maintenance packages',
    'website maintenance plans',
    'website maintenance services',
    'WordPress maintenance packages',
    'website support packages',
    'monthly website maintenance',
    'small business website maintenance',
    'website care plans',
    'website update services',
    'website security maintenance',
    'website backup services',
    'website management services',
  ],
  openGraph: {
    title: 'Website Maintenance Packages | Monthly Website Support Plans | OMA',
    description:
      'Need website maintenance packages? OMA offers monthly website support, WordPress updates, backups, security checks, content edits, performance monitoring, and website care plans.',
    url: 'https://onlinemarketingagency.ca/website-maintenance-packages',
  },
  twitter: {
    title: 'Website Maintenance Packages | Monthly Website Support Plans | OMA',
    description:
      'Need website maintenance packages? OMA offers monthly website support, WordPress updates, backups, security checks, content edits, performance monitoring, and website care plans.',
  },
}

export default function WebsiteMaintenanceLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
