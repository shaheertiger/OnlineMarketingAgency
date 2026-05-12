import Link from 'next/link'

const services = [
  { label: 'Google Ads Management', href: '/google-ads-management' },
  { label: 'SEO Services', href: '/seo-services' },
  { label: 'Local SEO Services', href: '/local-seo-services' },
  { label: 'Google Business Profile Optimization', href: '/google-business-profile-optimization' },
  { label: 'Website Design For Small Business', href: '/website-design-for-small-business' },
  { label: 'Social Media Marketing Agency', href: '/social-media-marketing-agency' },
  { label: 'Lead Generation Agency', href: '/lead-generation-agency' },
]

const industries = [
  { label: 'Barbershop Marketing', href: '/barber-marketing-agency' },
  { label: 'Contractor Marketing', href: '/contractor-marketing-agency' },
  { label: 'Clinic Marketing', href: '/clinic-marketing-agency' },
  { label: 'Restaurant Marketing', href: '/restaurant-marketing-agency' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300" aria-label="Site footer">
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-white font-bold text-xl block mb-4">
              OnlineMarketingAgency.ca
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Digital marketing agency for Canadian small businesses. We help local businesses get more
              calls, bookings, and customers through Google Ads, SEO, Local SEO, and lead generation.
            </p>
            <p className="text-xs text-slate-500 font-medium">Digital Marketing Agency Canada</p>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                Get Free Audit
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 mt-8">
              Company
            </h3>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm text-slate-400">
              <p>Canada</p>
              <p>
                <a
                  href="mailto:info@onlinemarketingagency.ca"
                  className="hover:text-white transition-colors"
                >
                  info@onlinemarketingagency.ca
                </a>
              </p>
            </address>
            <div className="mt-6 p-4 bg-slate-800 rounded-xl">
              <p className="text-sm text-white font-semibold mb-1">Free Marketing Audit</p>
              <p className="text-xs text-slate-400 mb-3">
                Tell us about your business and we will identify your biggest growth opportunities.
              </p>
              <Link href="/contact" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                Request audit &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {year} OnlineMarketingAgency.ca. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Digital marketing agency in Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
