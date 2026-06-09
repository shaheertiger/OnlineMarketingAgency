import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Breadcrumb from '@/components/Breadcrumb'
import { SITE_URL, ORG_ID } from '@/lib/site'
import { caseStudies, getCaseStudy, caseStudyUrl } from '@/lib/caseStudies'

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) return {}
  return {
    title: `${c.headline} | OMA Case Study`,
    description: c.summary,
    alternates: { canonical: caseStudyUrl(c.slug) },
    openGraph: {
      title: c.headline,
      description: c.summary,
      url: caseStudyUrl(c.slug),
      type: 'article',
    },
    twitter: { title: c.headline, description: c.summary },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.headline,
    description: c.summary,
    url: caseStudyUrl(c.slug),
    image: [`${SITE_URL}/opengraph-image`],
    author: { '@id': ORG_ID, '@type': 'Organization', name: 'OnlineMarketingAgency.ca', url: SITE_URL },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': caseStudyUrl(c.slug) },
    about: { '@type': 'Thing', name: `${c.industry} marketing in ${c.city}, ${c.province}` },
    inLanguage: 'en-CA',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE_URL}/case-studies` },
      { '@type': 'ListItem', position: 3, name: c.headline, item: caseStudyUrl(c.slug) },
    ],
  }

  const others = caseStudies.filter((x) => x.slug !== c.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ background: '#0F0F12' }}>
        <Breadcrumb items={[{ label: 'Case Studies', href: '/case-studies' }, { label: `${c.industry} · ${c.city}` }]} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden section-pad" style={{ background: '#0F0F12' }}>
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: '#C8FF00', color: '#0F0F12' }}>
              {c.industry}
            </span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.city}, {c.province}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black leading-[1.1] mb-5" style={{ color: '#F8FAFC', letterSpacing: '-0.025em' }}>
            {c.headline}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{c.summary}</p>
        </div>
      </section>

      {/* Results strip */}
      <section className="py-10 border-b" style={{ background: '#0F0F12', borderColor: 'rgba(255,255,255,0.07)' }} aria-label="Results">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {c.results.map((r) => (
              <div key={r.label}>
                <div className="text-[1.8rem] font-black leading-none mb-1.5" style={{ color: '#C8FF00', letterSpacing: '-0.03em' }}>{r.value}</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad" style={{ background: '#F7F6F2' }}>
        <div className="container-main">
          <div className="max-w-3xl mx-auto space-y-12">

            <div>
              <h2 className="text-2xl font-black mb-5" style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}>The Starting Point</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                {c.challenge.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: '#0F0F12', letterSpacing: '-0.02em' }}>What We Did</h2>
              <div className="space-y-4">
                {c.approach.map((a) => (
                  <div key={a.title} className="rounded-2xl p-6 flex gap-4" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}>
                    <span className="shrink-0 px-2.5 py-1 rounded text-[11px] font-black h-fit" style={{ background: '#0F0F12', color: '#C8FF00' }}>{a.month}</span>
                    <div>
                      <h3 className="text-base font-bold mb-1.5" style={{ color: '#0F0F12' }}>{a.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="rounded-2xl p-8" style={{ background: '#0F0F12' }}>
              <p className="text-lg leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.85)' }}>&ldquo;{c.quote.text}&rdquo;</p>
              <footer className="text-sm">
                <span className="font-semibold" style={{ color: '#C8FF00' }}>{c.quote.name}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}> — {c.quote.role}</span>
              </footer>
            </blockquote>

            {/* Cross-links */}
            <div className="flex flex-wrap gap-3">
              <Link href={c.relatedService.href} className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-xl px-4 py-2.5" style={{ color: '#1D4ED8', background: 'white', border: '1px solid rgba(0,0,0,0.08)' }}>
                Service: {c.relatedService.label} →
              </Link>
              <Link href={c.relatedLocation.href} className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-xl px-4 py-2.5" style={{ color: '#1D4ED8', background: 'white', border: '1px solid rgba(0,0,0,0.08)' }}>
                {c.relatedLocation.label} →
              </Link>
            </div>

            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              Representative example based on a real client engagement. Results vary by market, budget, and competition.
            </p>

            {/* More case studies */}
            <div className="pt-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
              <p className="text-xs font-bold tracking-wider uppercase mb-4" style={{ color: '#9CA3AF' }}>More Case Studies</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {others.map((o) => (
                  <Link key={o.slug} href={`/case-studies/${o.slug}`} className="block group rounded-xl p-5" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.07)' }}>
                    <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>{o.industry} · {o.city}</p>
                    <p className="text-sm font-semibold leading-snug group-hover:underline" style={{ color: '#0F0F12' }}>{o.headline}</p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
