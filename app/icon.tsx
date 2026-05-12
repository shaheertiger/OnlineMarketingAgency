import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0F0F12',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#C8FF00',
            fontSize: 20,
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
