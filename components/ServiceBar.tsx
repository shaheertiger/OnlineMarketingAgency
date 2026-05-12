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
    <section className="bg-slate-900 py-4 overflow-hidden" aria-label="Services overview">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {services.map((service, index) => (
            <span key={service} className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-300 whitespace-nowrap">
                {service}
              </span>
              {index < services.length - 1 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-blue-500 shrink-0" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
