import { ImageResponse } from 'next/og'

// ── Default social share card (1200×630) ────────────────────────────────────
// File-based convention: Next.js applies this as og:image + twitter:image to
// every route that does not define its own. Generated dynamically so there is
// no static asset to maintain or 404.
export const alt = 'OnlineMarketingAgency.ca — Digital Marketing Agency Canada'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(150deg, #0A0E1C 0%, #0F0F12 55%, #0A0E1C 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: brand mark + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 18,
              background: '#0F0F12',
              border: '2px solid rgba(200,255,0,0.30)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#C8FF00', fontSize: 48, fontWeight: 900, letterSpacing: '-0.04em' }}>
              O
            </span>
          </div>
          <span style={{ color: '#F7F6F2', fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }}>
            OnlineMarketingAgency.ca
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ color: '#C8FF00', fontSize: 24, fontWeight: 700, letterSpacing: '0.08em' }}>
            DIGITAL MARKETING AGENCY · CANADA
          </span>
          <span
            style={{
              color: '#F7F6F2',
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 980,
            }}
          >
            More Calls, Bookings &amp; Customers — Google Ads, SEO &amp; Local Leads
          </span>
        </div>

        {/* Bottom: trust strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <span style={{ color: '#94A3B8', fontSize: 26, fontWeight: 600 }}>★ 4.9/5 rated</span>
          <span style={{ color: '#334155', fontSize: 26 }}>·</span>
          <span style={{ color: '#94A3B8', fontSize: 26, fontWeight: 600 }}>Free marketing audit</span>
          <span style={{ color: '#334155', fontSize: 26 }}>·</span>
          <span style={{ color: '#94A3B8', fontSize: 26, fontWeight: 600 }}>905-626-9919</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
