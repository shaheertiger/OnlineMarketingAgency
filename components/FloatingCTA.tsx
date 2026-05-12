'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 shadow-2xl px-4 py-3 flex gap-3"
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href="tel:9056269919"
        className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold rounded-xl py-3.5 text-sm active:bg-slate-800 transition-colors"
      >
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold rounded-xl py-3.5 text-sm active:bg-blue-700 transition-colors"
      >
        Free Audit
      </Link>
    </div>
  )
}
