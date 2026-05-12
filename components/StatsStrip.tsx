const stats = [
  { value: '50+', label: 'Local Businesses Served' },
  { value: '4.8x', label: 'Avg. Return On Ad Spend' },
  { value: '30 Days', label: 'To First Results' },
  { value: '$0', label: 'Lock-In Contracts' },
]

export default function StatsStrip() {
  return (
    <section className="bg-blue-600 py-10" aria-label="Results overview">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-blue-500">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:px-8">
              <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-sm font-medium text-blue-100">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
