import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0F0F12',
          borderRadius: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Subtle lime border glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 40,
            border: '2px solid rgba(200,255,0,0.25)',
          }}
        />
        <span
          style={{
            color: '#C8FF00',
            fontSize: 110,
            fontWeight: 900,
            lineHeight: 1,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.04em',
          }}
        >
          O
        </span>
      </div>
    ),
    { ...size }
  )
}
