// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for NAP (Name / Address / Phone), review stats, and the
// canonical host. Update these in ONE place rather than hunting through every
// component and JSON-LD block.
//
// ⚠️  OWNER ACTION REQUIRED (see SEO action plan, Phase 0 & 1):
//   • streetAddress / postalCode — add the REAL registered business address from
//     the Google Business Profile. It MUST match the GBP character-for-character.
//     Until then we publish a service-area only NAP ("Serving Brampton & the
//     GTA"), which is weaker than a real address but does not risk a fake one.
//   • geo.latitude / geo.longitude — fill from the GBP map pin.
//   • review.count / review.rating — confirm against the LIVE Google Business
//     Profile. The figures below mirror what the site already displays; if the
//     real GBP differs, update here (this drives both the visible badges and the
//     AggregateRating schema, so they stay in sync).
//   • sameAs — add verified Google Maps (GBP), LinkedIn, Facebook, Instagram URLs.
// ─────────────────────────────────────────────────────────────────────────────

/** Canonical host. The codebase is consistently non-www, so we keep non-www and
 *  301-redirect www → non-www at the edge (see next.config.mjs). */
export const SITE_URL = 'https://onlinemarketingagency.ca'

export const ORG_ID = `${SITE_URL}/#organization`

export const BUSINESS = {
  name: 'OnlineMarketingAgency.ca',
  alternateName: 'OMA Digital Marketing Canada',
  legalName: 'OnlineMarketingAgency.ca',
  telephone: '+19056269919',
  telephoneDisplay: '905-626-9919',
  email: 'info@onlinemarketingagency.ca',
  priceRange: '$$',
  foundingDate: '2020',
} as const

/** Address — service-area only until a real street address is supplied. */
export const ADDRESS = {
  // streetAddress: '',   // ← TODO(owner): add real street address from GBP
  // postalCode: '',      // ← TODO(owner): add real postal code from GBP
  addressLocality: 'Brampton',
  addressRegion: 'ON',
  addressCountry: 'CA',
  serviceAreaLabel: 'Serving Brampton & the Greater Toronto Area',
} as const

/** Geo coordinates — TODO(owner): fill from the GBP map pin, then add a `geo`
 *  block to the organization schema. Left null so we never publish 0,0. */
export const GEO: { latitude: number; longitude: number } | null = null

/** Review stats — keep in sync with the live Google Business Profile. */
export const REVIEW = {
  rating: '4.9',
  count: '485',
} as const

/** Primary GTA cities with dedicated location pages. */
export const SERVICE_CITIES = [
  { name: 'Toronto', slug: 'toronto' },
  { name: 'Mississauga', slug: 'mississauga' },
  { name: 'Brampton', slug: 'brampton' },
  { name: 'Vaughan', slug: 'vaughan' },
] as const

/** Verified social / profile URLs only. Add real URLs as accounts are confirmed. */
export const SAME_AS: string[] = [
  'https://x.com/OMAcanada',
  // 'https://www.google.com/maps/place/...',  // ← TODO(owner): GBP map URL
  // 'https://www.linkedin.com/company/...',   // ← TODO(owner)
  // 'https://www.facebook.com/...',           // ← TODO(owner)
  // 'https://www.instagram.com/...',          // ← TODO(owner)
]

/** PostalAddress node for JSON-LD. Includes streetAddress/postalCode only if set. */
export function postalAddressSchema() {
  return {
    '@type': 'PostalAddress',
    ...('streetAddress' in ADDRESS ? { streetAddress: (ADDRESS as any).streetAddress } : {}),
    addressLocality: ADDRESS.addressLocality,
    addressRegion: ADDRESS.addressRegion,
    ...('postalCode' in ADDRESS ? { postalCode: (ADDRESS as any).postalCode } : {}),
    addressCountry: ADDRESS.addressCountry,
  }
}

/** The sitewide organization entity (ProfessionalService + LocalBusiness).
 *  Referenced by `@id` from every Service / Industry / Location page. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': ORG_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    description:
      'Digital marketing agency based in Brampton, Ontario, helping small businesses across the Greater Toronto Area grow with Google Ads, SEO, Local SEO, website design, and lead generation.',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
    image: `${SITE_URL}/opengraph-image`,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.foundingDate,
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 10 },
    sameAs: SAME_AS,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: 'CAD',
    paymentAccepted: 'Credit Card, Bank Transfer',
    address: postalAddressSchema(),
    ...(GEO ? { geo: { '@type': 'GeoCoordinates', latitude: GEO.latitude, longitude: GEO.longitude } } : {}),
    areaServed: [
      { '@type': 'City', name: 'Toronto' },
      { '@type': 'City', name: 'Mississauga' },
      { '@type': 'City', name: 'Brampton' },
      { '@type': 'City', name: 'Vaughan' },
      { '@type': 'Province', name: 'Ontario' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: REVIEW.rating,
      reviewCount: REVIEW.count,
      bestRating: '5',
      worstRating: '1',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      availableLanguage: ['English'],
      areaServed: 'CA',
    },
    knowsAbout: [
      'Google Ads management',
      'SEO services',
      'Local SEO',
      'Google Business Profile optimization',
      'Website design for small business',
      'Facebook Ads management',
      'Instagram Ads management',
      'Lead generation',
      'Digital marketing for local businesses',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile Optimization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design For Small Business' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook & Instagram Ads' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Generation' } },
      ],
    },
  }
}
