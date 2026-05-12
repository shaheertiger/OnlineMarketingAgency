const services = [
  'Google Ads Management',
  'SEO Services',
  'Local SEO',
  'Website Design',
  'Social Media Ads',
  'Google Business Profile Optimization',
]

export default function ServiceBar() {
  return (
    <section
      className="py-4 overflow-hidden"
      style={{
        background: 'rgba(10, 15, 30, 0.9)',
        borderTop:    '1px solid rgba(51, 65, 85, 0.3)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.3)',
      }}
      aria-label="Services overview"
    >
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {services.map((service, index) => (
            <span key={service} className="flex items-center gap-3">
              <span className="text-xs font-semibold whitespace-nowrap tracking-wide" style={{ color: '#475569' }}>
                {service}
              </span>
              {index < services.length - 1 && (
                <span
                  className="hidden sm:block w-1 h-1 rounded-full shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
