'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Services',   href: '/#services' },
  { label: 'Results',    href: '/#results' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Pricing',    href: '/#pricing' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(247,246,242,0.93)' : 'rgba(247,246,242,1)',
        backdropFilter: scrolled ? 'blur(18px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-[62px] lg:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-[30px] h-[30px] rounded-md flex items-center justify-center font-black text-[13px]"
              style={{ background: '#0F0F12', color: '#C8FF00' }}
            >
              O
            </div>
            <span
              className="font-extrabold text-[14px] tracking-tight hidden sm:block"
              style={{ color: '#0F0F12' }}
            >
              OnlineMarketing<span style={{ color: '#1D4ED8' }}>.ca</span>
            </span>
            <span
              className="font-extrabold text-[15px] tracking-tight sm:hidden"
              style={{ color: '#0F0F12' }}
            >
              OMA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold transition-colors duration-150"
                style={{ color: '#4B5563' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0F12')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+19056269919"
              className="text-[13px] font-bold tracking-tight"
              style={{ color: '#0F0F12' }}
            >
              905-626-9919
            </a>
            <Link href="/contact" className="btn-primary text-[13px] px-5 py-2.5">
              Get Free Audit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#0F0F12" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#0F0F12" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{ background: '#F7F6F2', borderColor: 'rgba(0,0,0,0.07)' }}
        >
          <div className="container-main py-5 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-semibold py-2.5"
                style={{ color: '#374151' }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="pt-4 mt-2 flex flex-col gap-3 border-t"
              style={{ borderColor: 'rgba(0,0,0,0.07)' }}
            >
              <a
                href="tel:+19056269919"
                className="text-[15px] font-bold"
                style={{ color: '#0F0F12' }}
              >
                905-626-9919
              </a>
              <Link
                href="/contact"
                className="btn-primary text-sm px-5 py-3 w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
