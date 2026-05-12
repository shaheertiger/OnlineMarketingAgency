import Link from 'next/link'

const BASE_URL = 'https://onlinemarketingagency.ca'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [
    { label: 'Home', href: '/' },
    ...items,
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="container-main"
        style={{ paddingTop: '1rem', paddingBottom: '0.25rem' }}
      >
        <ol
          className="flex flex-wrap items-center gap-1 text-xs"
          style={{ color: '#475569' }}
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            return (
              <li
                key={index}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {!isLast && item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors duration-150"
                    style={{ color: '#475569' }}
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span
                    style={{ color: '#64748B' }}
                    itemProp="name"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(index + 1)} />
                {!isLast && (
                  <svg
                    className="w-3 h-3 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: '#1E293B' }}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
