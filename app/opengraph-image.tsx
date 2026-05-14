import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'OnlineMarketingAgency.ca — Digital Marketing Agency Canada'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(140deg, #020818 0%, #060B18 40%, #0A1228 70%, #060B18 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* ── Background orbs ────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)',
            filter: 'blur(50px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-140px',
            left: '-60px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)',
            filter: 'blur(50px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '200px',
            left: '480px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
            display: 'flex',
          }}
        />

        {/* ── Subtle grid overlay ────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* ── Top accent line ────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent 0%, #2563EB 30%, #818CF8 60%, #60A5FA 80%, transparent 100%)',
            display: 'flex',
          }}
        />

        {/* ── Main layout: left content + right card ─────────────── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            padding: '56px 64px',
            gap: '48px',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* ── LEFT: copy ──────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              gap: '0px',
            }}
          >
            {/* Logo / brand row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '32px',
              }}
            >
              {/* Logo mark */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(37,99,235,0.5)',
                }}
              >
                {/* Chart icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 17l5-5 4 4 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 8h7v7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#F8FAFC',
                    letterSpacing: '-0.3px',
                  }}
                >
                  OnlineMarketingAgency.ca
                </span>
                <span style={{ fontSize: '11px', color: '#475569', letterSpacing: '0.5px' }}>
                  CANADIAN DIGITAL MARKETING
                </span>
              </div>
            </div>

            {/* Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(37,99,235,0.3)',
                borderRadius: '100px',
                padding: '6px 16px',
                width: 'fit-content',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#60A5FA',
                  display: 'flex',
                }}
              />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#60A5FA' }}>
                Free Marketing Audit — Limited Spots
              </span>
            </div>

            {/* Headline */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginBottom: '28px',
              }}
            >
              <span
                style={{
                  fontSize: '58px',
                  fontWeight: 800,
                  color: '#F8FAFC',
                  lineHeight: 1.05,
                  letterSpacing: '-2px',
                }}
              >
                More Calls.
              </span>
              <span
                style={{
                  fontSize: '58px',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-2px',
                  background: 'linear-gradient(135deg, #60A5FA 0%, #818CF8 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                More Growth.
              </span>
            </div>

            {/* Sub-copy */}
            <p
              style={{
                fontSize: '17px',
                color: '#94A3B8',
                lineHeight: 1.5,
                marginBottom: '36px',
                maxWidth: '440px',
              }}
            >
              Google Ads · SEO · Local SEO · Website Design · Lead Generation
            </p>

            {/* Stats strip */}
            <div style={{ display: 'flex', gap: '28px' }}>
              {[
                { value: '+284%', label: 'Avg. Growth' },
                { value: '4.8x', label: 'Ad ROI' },
                { value: '$12', label: 'Cost / Lead' },
              ].map((stat) => (
                <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#F8FAFC',
                      letterSpacing: '-1px',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ fontSize: '12px', color: '#475569', fontWeight: 500 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: dashboard card ────────────────────────────── */}
          <div
            style={{
              width: '380px',
              background: 'rgba(11, 17, 32, 0.9)',
              border: '1px solid rgba(51,65,85,0.7)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(96,165,250,0.06)',
            }}
          >
            {/* Card header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(51,65,85,0.5)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#F8FAFC' }}>
                  Performance
                </span>
                <span style={{ fontSize: '11px', color: '#475569' }}>Last 30 days</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(52,211,153,0.1)',
                  border: '1px solid rgba(52,211,153,0.25)',
                  borderRadius: '100px',
                  padding: '4px 12px',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#34D399',
                    display: 'flex',
                  }}
                />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#34D399' }}>
                  Live
                </span>
              </div>
            </div>

            {/* Metric grid */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { label: 'Phone Calls', value: '247', change: '+84%', positive: true },
                { label: 'Form Leads', value: '91', change: '+62%', positive: true },
              ].map((m) => (
                <div
                  key={m.label}
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '14px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>
                    {m.label}
                  </span>
                  <span style={{ fontSize: '26px', fontWeight: 800, color: '#F8FAFC', lineHeight: 1 }}>
                    {m.value}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#34D399' }}>
                    {m.change} this month
                  </span>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '14px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>
                Monthly Lead Volume
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '5px',
                  height: '48px',
                }}
              >
                {[30, 42, 38, 52, 58, 68, 74, 86, 80, 92, 84, 100].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: '3px 3px 0 0',
                      background:
                        i === 11
                          ? 'linear-gradient(180deg, #3B82F6, #4F46E5)'
                          : i >= 9
                          ? 'rgba(59,130,246,0.4)'
                          : 'rgba(59,130,246,0.15)',
                      display: 'flex',
                    }}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '9px', color: '#334155' }}>Jan</span>
                <span style={{ fontSize: '9px', color: '#334155' }}>Dec</span>
              </div>
            </div>

            {/* Bottom row */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <div
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                  borderRadius: '12px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '3px',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                }}
              >
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                  +284%
                </span>
                <span style={{ fontSize: '10px', color: '#93C5FD', fontWeight: 500 }}>
                  Total Growth
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '3px',
                }}
              >
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#F8FAFC', lineHeight: 1 }}>
                  #2
                </span>
                <span style={{ fontSize: '10px', color: '#475569', fontWeight: 500 }}>
                  Maps Rank
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '3px',
                }}
              >
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#F8FAFC', lineHeight: 1 }}>
                  $12
                </span>
                <span style={{ fontSize: '10px', color: '#475569', fontWeight: 500 }}>
                  Cost/Lead
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '52px',
            background: 'rgba(6,11,24,0.95)',
            borderTop: '1px solid rgba(51,65,85,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 64px',
          }}
        >
          <span style={{ fontSize: '13px', color: '#475569' }}>
            onlinemarketingagency.ca
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Google Ads', 'Local SEO', 'Website Design', 'Lead Generation'].map((s) => (
              <span key={s} style={{ fontSize: '12px', color: '#334155', fontWeight: 500 }}>
                {s}
              </span>
            ))}
          </div>
          <span style={{ fontSize: '13px', color: '#475569' }}>905-626-9919</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
