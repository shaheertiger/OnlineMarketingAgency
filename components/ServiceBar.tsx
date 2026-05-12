const services = [
  'Google Ads Management',
  'SEO Services',
  'Local SEO',
  'Google Business Profile',
  'Website Design',
  'Meta Ads',
  'Landing Pages',
  'Conversion Tracking',
  'Lead Generation',
]

const doubled = [...services, ...services]

export default function ServiceBar() {
  return (
    <div
      className="py-3.5 overflow-hidden border-b"
      style={{ background: '#F7F6F2', borderColor: 'rgba(0,0,0,0.07)' }}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((s, i) => (
          <span key={i} className="inline-flex items-center gap-3 mr-10">
            <span
              className="text-[11px] font-bold tracking-[0.12em] uppercase"
              style={{ color: '#B0AFA9' }}
            >
              {s}
            </span>
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ background: '#C8FF00' }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
