import { ImageResponse } from 'next/og'

// ── Organization logo (served at /logo.png) ─────────────────────────────────
// Referenced by Organization / LocalBusiness JSON-LD. Generated as a real PNG
// so the schema `logo` URL always resolves (Google requires a fetchable raster
// logo for the knowledge panel). Square 512×512 on a solid brand background.
export const runtime = 'edge'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F0F12',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 28,
            borderRadius: 96,
            border: '6px solid rgba(200,255,0,0.30)',
          }}
        />
        <span
          style={{
            color: '#C8FF00',
            fontSize: 320,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          O
        </span>
      </div>
    ),
    { width: 512, height: 512 }
  )
}
