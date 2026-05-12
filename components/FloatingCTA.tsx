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
      className="fixed bottom-4 inset-x-4 z-50 sm:hidden"
      style={{
        background: '#0F0F12',
        borderRadius: '14px',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
      }}
    >
      <div className="flex gap-2 p-2">
        <a
          href="tel:+19056269919"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors text-white"
          style={{ background: 'rgba(255,255,255,0.07)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm"
          style={{ background: '#C8FF00', color: '#0F0F12' }}
        >
          Free Audit
        </Link>
      </div>
    </div>
  )
}
