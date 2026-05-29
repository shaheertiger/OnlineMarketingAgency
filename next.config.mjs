// ── Content-Security-Policy ──────────────────────────────────────────────────
// Pragmatic CSP for a (mostly) static Next.js App Router marketing site.
// 'unsafe-inline' is required for: inline JSON-LD <script> blocks, Next's inline
// bootstrap, and the heavy inline style={{}} usage throughout the components.
// A nonce-based policy would force dynamic rendering via middleware on every
// route — not worth it here. The remaining directives (object-src none,
// base-uri self, frame-ancestors, form-action, restricted connect/img/font
// origins, upgrade-insecure-requests) still materially reduce attack surface.
// Allowed externals: Vercel Analytics, and formsubmit.co (contact form fetch).
const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self' https://formsubmit.co",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "connect-src 'self' https://formsubmit.co https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  'upgrade-insecure-requests',
].join('; ')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Restrict resource origins (XSS / injection hardening)
          { key: 'Content-Security-Policy', value: cspDirectives },
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Prevent MIME-type sniffing (trust signal)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Control referrer information
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Force HTTPS for 2 years
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Cross-origin policies
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ]
  },
}

export default nextConfig
