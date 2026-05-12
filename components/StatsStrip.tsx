const stats = [
  { value: '50+',     label: 'Local Businesses Served',   icon: '🏢' },
  { value: '4.8x',    label: 'Avg. Return On Ad Spend',   icon: '📈' },
  { value: '30 Days', label: 'To First Results',          icon: '⚡' },
  { value: '$0',      label: 'Lock-In Contracts',         icon: '🔓' },
]

export default function StatsStrip() {
  return (
    <section
      className="relative overflow-hidden py-14"
      style={{
        background: 'linear-gradient(135deg, #0A0F1E 0%, #0D1426 50%, #0A0F1E 100%)',
        borderTop:    '1px solid rgba(51, 65, 85, 0.4)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.4)',
      }}
      aria-label="Results overview"
    >
      {/* Subtle glow behind stats */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center relative"
              style={
                i < stats.length - 1
                  ? { borderRight: 'none' }
                  : {}
              }
            >
              {/* Vertical divider on large screens */}
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12"
                  style={{ background: 'linear-gradient(180deg, transparent, rgba(51,65,85,0.6), transparent)' }}
                  aria-hidden="true"
                />
              )}

              <p
                className="text-3xl lg:text-4xl font-extrabold mb-1 tabular-nums"
                style={{
                  background: 'linear-gradient(135deg, #F8FAFC 0%, #CBD5E1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </p>
              <p className="text-sm font-medium" style={{ color: '#64748B' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
