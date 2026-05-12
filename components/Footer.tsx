import Link from 'next/link'

const services = [
  { label: 'Google Ads Management',           href: '/google-ads-management' },
  { label: 'SEO Services',                    href: '/seo-services' },
  { label: 'Local SEO Services',              href: '/local-seo-services' },
  { label: 'Google Business Profile',         href: '/google-business-profile-optimization' },
  { label: 'Website Design',                  href: '/website-design-for-small-business' },
  { label: 'Social Media Marketing',          href: '/social-media-marketing-agency' },
  { label: 'Lead Generation Agency',          href: '/lead-generation-agency' },
]

const industries = [
  { label: 'Barbershop Marketing',  href: '/barber-marketing-agency' },
  { label: 'Contractor Marketing',  href: '/contractor-marketing-agency' },
  { label: 'Clinic Marketing',      href: '/clinic-marketing-agency' },
  { label: 'Restaurant Marketing',  href: '/restaurant-marketing-agency' },
]

const company = [
  { label: 'About',          href: '/about' },
  { label: 'Blog',           href: '/blog' },
  { label: 'Contact',        href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative"
      style={{ background: '#030710' }}
      aria-label="Site footer"
    >
      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(51,65,85,0.6) 20%, rgba(51,65,85,0.6) 80%, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
              >
                <span className="text-white font-black text-sm">O</span>
              </div>
              <span
                className="font-extrabold text-base tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                OnlineMarketingAgency.ca
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: '#334155' }}>
              Digital marketing agency for Canadian small businesses. We help local businesses get more
              calls, bookings, and customers through Google Ads, SEO, and lead generation.
            </p>
            <p className="text-xs font-semibold mb-6" style={{ color: '#1E293B' }}>
              Digital Marketing Agency Canada
            </p>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get Free Audit
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#475569', letterSpacing: '0.12em' }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: '#334155' }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#94A3B8')}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#334155')}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries + Company */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#475569', letterSpacing: '0.12em' }}
            >
              Industries
            </h3>
            <ul className="space-y-2.5 mb-8">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: '#334155' }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#94A3B8')}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#334155')}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#475569', letterSpacing: '0.12em' }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: '#334155' }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#94A3B8')}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#334155')}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#475569', letterSpacing: '0.12em' }}
            >
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm mb-6" style={{ color: '#334155' }}>
              <p>Canada</p>
              <p>
                <a
                  href="tel:9056269919"
                  className="transition-colors duration-150"
                  style={{ color: '#334155' }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#94A3B8')}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#334155')}
                >
                  905-626-9919
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@onlinemarketingagency.ca"
                  className="transition-colors duration-150"
                  style={{ color: '#334155' }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#94A3B8')}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#334155')}
                >
                  info@onlinemarketingagency.ca
                </a>
              </p>
            </address>

            {/* Audit callout */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: 'rgba(11, 17, 32, 0.8)',
                border: '1px solid rgba(51, 65, 85, 0.4)',
              }}
            >
              <p className="text-sm font-bold mb-1" style={{ color: '#E2E8F0' }}>Free Marketing Audit</p>
              <p className="text-xs leading-relaxed mb-3" style={{ color: '#334155' }}>
                Tell us about your business and we will identify your biggest growth opportunities.
              </p>
              <Link
                href="/contact"
                className="text-xs font-bold transition-colors duration-150"
                style={{ color: '#60A5FA' }}
              >
                Request audit &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(30, 41, 59, 0.8)' }}
        >
          <p className="text-sm" style={{ color: '#1E293B' }}>
            &copy; {year} OnlineMarketingAgency.ca. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#1E293B' }}>
            Project of{' '}
            <a
              href="https://shaheeralikhan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150"
              style={{ color: '#334155' }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#64748B')}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#334155')}
            >
              shaheeralikhan.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
