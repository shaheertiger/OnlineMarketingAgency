import Link from 'next/link'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'
import { SITE_URL, ORG_ID } from '@/lib/site'

export interface ServiceCityProps {
  /** Visible service name, e.g. "Local SEO" */
  service: string
  /** Service type for schema, e.g. "Local SEO" */
  serviceType: string
  city: string
  province: string
  slug: string
  h1: string
  intro: string
  /** 3–5 substantive paragraphs of unique, city-specific body content */
  body: string[]
  bullets: { title: string; desc: string }[]
  faqs: FAQItem[]
  /** Parent service page (link up) */
  parentService: { label: string; href: string }
  /** City page (link sideways) */
  cityPage: { label: string; href: string }
  priceNote: string
}

export default function ServiceCityPageTemplate({
  service,
  serviceType,
  city,
  province,
  slug,
  h1,
  intro,
  body,
  bullets,
  faqs,
  parentService,
  cityPage,
  priceNote,
}: ServiceCityProps) {
  const url = `${SITE_URL}/${slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service} in ${city}`,
    serviceType,
    description: intro,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'City', name: city, containedInPlace: { '@type': 'Province', name: province === 'ON' ? 'Ontario' : province } },
    url,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: '#0F0F12' }}>
        <Breadcrumb
          items={[
            { label: parentService.label, href: parentService.href },
            { label: city },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden section-pad" style={{ background: '#0F0F12' }}>
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-50" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(200,255,0,0.08) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="container-main relative">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide"
              style={{ background: 'rgba(200,255,0,0.08)', border: '1px solid rgba(200,255,0,0.2)', color: '#C8FF00' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" aria-hidden="true" />
              {service} · {city}, {province}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.06] mb-6" style={{ color: '#F8FAFC', letterSpacing: '-0.03em' }}>
              {h1}
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>{intro}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">Get Free {city} Audit</Link>
              <a href="tel:+19056269919" className="btn-outline-white text-base px-7 py-3.5">Call 905-626-9919</a>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad" style={{ background: '#F7F6F2' }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div className="space-y-5 text-base leading-relaxed" style={{ color: '#374151' }}>
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {bullets.map((b) => (
                  <div key={b.title} className="rounded-xl p-5" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}>
                    <h3 className="text-sm font-bold mb-1.5" style={{ color: '#0F0F12' }}>{b.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-2xl p-6" style={{ background: '#0F0F12' }}>
                <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Pricing</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>{priceNote}</p>
                <Link href="/contact" className="btn-primary text-sm px-5 py-2.5 block text-center">Get Free Audit</Link>
              </div>
              <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}>
                <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: '#9CA3AF' }}>Related</p>
                <ul className="space-y-2.5">
                  <li>
                    <Link href={parentService.href} className="text-sm font-semibold" style={{ color: '#1D4ED8' }}>
                      {parentService.label} (all areas) →
                    </Link>
                  </li>
                  <li>
                    <Link href={cityPage.href} className="text-sm font-semibold" style={{ color: '#1D4ED8' }}>
                      {cityPage.label} →
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        heading={`Ready to Grow Your ${city} Business?`}
        subheading={`Get a free ${service.toLowerCase()} audit for your ${city} business — no cost, no commitment.`}
      />
    </>
  )
}
