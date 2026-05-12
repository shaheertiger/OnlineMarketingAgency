import Link from 'next/link'

const services = [
  { label: 'Google Ads Management',   href: '/google-ads-management' },
  { label: 'SEO Services',            href: '/seo-services' },
  { label: 'Local SEO',               href: '/local-seo-services' },
  { label: 'Google Business Profile', href: '/google-business-profile-optimization' },
  { label: 'Website Design',          href: '/website-design-for-small-business' },
  { label: 'Social Media Ads',        href: '/social-media-marketing-agency' },
  { label: 'Lead Generation',         href: '/lead-generation-agency' },
]

const industries = [
  { label: 'Barbershop Marketing',   href: '/barber-marketing-agency' },
  { label: 'Clinic Marketing',       href: '/clinic-marketing-agency' },
  { label: 'Contractor Marketing',   href: '/contractor-marketing-agency' },
  { label: 'Restaurant Marketing',   href: '/restaurant-marketing-agency' },
]

const locations = [
  { label: 'Toronto',      href: '/toronto' },
  { label: 'Mississauga',  href: '/mississauga' },
  { label: 'Brampton',     href: '/brampton' },
  { label: 'Vaughan',      href: '/vaughan' },
]

const company = [
  { label: 'About',          href: '/about' },
  { label: 'Blog',           href: '/blog' },
  { label: 'Contact',        href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0C' }} role="contentinfo">
      <div className="container-main py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8 mb-14">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div
                className="w-[30px] h-[30px] rounded-md flex items-center justify-center font-black text-[13px]"
                style={{
                  background: '#0F0F12',
                  border: '1px solid rgba(200,255,0,0.25)',
                  color: '#C8FF00',
                }}
              >
                O
              </div>
              <span className="font-extrabold text-[14px] tracking-tight text-white">
                OnlineMarketing<span style={{ color: '#C8FF00' }}>.ca</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-[260px]" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Canadian digital marketing agency helping local businesses grow with Google Ads, SEO, Local SEO, and lead generation.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+19056269919"
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#C8FF00' }}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                905-626-9919
              </a>
              <a
                href="mailto:info@onlinemarketingagency.ca"
                className="flex items-center gap-2 text-sm footer-link"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@onlinemarketingagency.ca
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              className="text-[10px] font-bold tracking-[0.14em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.28)' }}
            >
              Services
            </div>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm footer-link">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div
              className="text-[10px] font-bold tracking-[0.14em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.28)' }}
            >
              Industries
            </div>
            <ul className="space-y-2.5">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm footer-link">{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div
              className="text-[10px] font-bold tracking-[0.14em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.28)' }}
            >
              Locations
            </div>
            <ul className="space-y-2.5">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div
              className="text-[10px] font-bold tracking-[0.14em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.28)' }}
            >
              Company
            </div>
            <ul className="space-y-2.5 mb-7">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm footer-link">{c.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary text-xs px-4 py-2.5">
              Get Free Audit
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.2)' }}
        >
          <span>© {new Date().getFullYear()} OnlineMarketingAgency.ca. All rights reserved.</span>
          <span>Canadian Digital Marketing Agency</span>
        </div>
      </div>
    </footer>
  )
}
