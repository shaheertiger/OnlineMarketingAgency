'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Google Ads Management',        href: '/google-ads-management' },
      { label: 'SEO Services',                 href: '/seo-services' },
      { label: 'Local SEO Services',           href: '/local-seo-services' },
      { label: 'Google Business Profile',      href: '/google-business-profile-optimization' },
      { label: 'Website Design',               href: '/website-design-for-small-business' },
      { label: 'Social Media Ads',             href: '/social-media-marketing-agency' },
      { label: 'Lead Generation',              href: '/lead-generation-agency' },
    ],
  },
  { label: 'Industries', href: '/#industries' },
  { label: 'Pricing',    href: '/#packages' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Contact',    href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [scrolled,   setScrolled]     = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(6, 11, 24, 0.9)'
          : 'rgba(6, 11, 24, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.4)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
            >
              <span className="text-white font-black text-sm">O</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-extrabold text-base tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                OMA
              </span>
              <span className="hidden sm:block text-[10px] text-slate-500 font-medium tracking-wide">
                OnlineMarketingAgency.ca
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <button
                    className="flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200"
                    style={{ color: '#94A3B8' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F8FAFC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 w-64 rounded-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    style={{
                      background: 'rgba(11, 17, 32, 0.97)',
                      border: '1px solid rgba(51, 65, 85, 0.6)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(20px)',
                      marginTop: '8px',
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-150"
                        style={{ color: '#94A3B8' }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = '#F8FAFC'
                          ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(96,165,250,0.08)'
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8'
                          ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: 'linear-gradient(135deg, #60A5FA, #818CF8)' }}
                        />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200"
                  style={{
                    color: pathname === item.href ? '#60A5FA' : '#94A3B8',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#F8FAFC')}
                  onMouseLeave={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      pathname === item.href ? '#60A5FA' : '#94A3B8')
                  }
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9056269919"
              className="hidden lg:inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: '#94A3B8' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#F8FAFC')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#94A3B8')}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              905-626-9919
            </a>
            <Link href="/contact" className="hidden sm:inline-flex btn-primary text-sm px-4 py-2.5">
              Get Free Audit
            </Link>
            <button
              className="md:hidden p-2 rounded-lg transition-colors duration-200"
              style={{ color: '#94A3B8' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="md:hidden py-4 space-y-1"
            style={{ borderTop: '1px solid rgba(51, 65, 85, 0.4)' }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <p
                    className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest mt-2"
                    style={{ color: '#475569' }}
                  >
                    Services
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors duration-150"
                      style={{ color: '#94A3B8' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'linear-gradient(135deg, #60A5FA, #818CF8)' }}
                      />
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors duration-150"
                  style={{ color: pathname === item.href ? '#60A5FA' : '#94A3B8' }}
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
