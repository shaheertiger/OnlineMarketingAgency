import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060B18 0%, #0A1025 50%, #060B18 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="container-main relative text-center">
        <p
          className="text-sm font-bold tracking-widest uppercase mb-4"
          style={{
            background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </p>
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#F8FAFC' }}>
          Page Not Found
        </h1>
        <p className="text-lg mb-9 max-w-md mx-auto" style={{ color: '#94A3B8' }}>
          The page you are looking for does not exist. Try one of the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary text-base px-7 py-3.5">
            Go To Homepage
          </Link>
          <Link href="/contact" className="btn-secondary text-base px-7 py-3.5">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
