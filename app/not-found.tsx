import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-pad bg-white text-center">
      <div className="container-main">
        <p className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">404</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist. Try one of the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go To Homepage
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
