'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Google Ads Management', href: '/google-ads-management' },
      { label: 'SEO Services', href: '/seo-services' },
      { label: 'Local SEO Services', href: '/local-seo-services' },
      { label: 'Google Business Profile', href: '/google-business-profile-optimization' },
      { label: 'Website Design', href: '/website-design-for-small-business' },
      { label: 'Social Media Ads', href: '/social-media-marketing-agency' },
      { label: 'Lead Generation', href: '/lead-generation-agency' },
    ],
  },
  { label: 'Industries', href: '/#industries' },
  { label: 'Pricing', href: '/#packages' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-blue-600 font-bold text-xl tracking-tight">OMA</span>
            <span className="hidden sm:block text-slate-700 font-semibold text-sm">
              OnlineMarketingAgency.ca
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9056269919"
              className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              905-626-9919
            </a>
            <Link href="/contact" className="hidden sm:inline-flex btn-primary text-sm px-4 py-2.5">
              Get Free Audit
            </Link>
            <button
              className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="md:hidden border-t border-slate-100 py-4 space-y-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
                    Services
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="px-4 pt-3">
              <Link
                href="/contact"
                className="btn-primary w-full text-center text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Audit
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
