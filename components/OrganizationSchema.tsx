import { organizationSchema } from '@/lib/site'

/**
 * Sitewide organization entity (ProfessionalService + LocalBusiness).
 * Rendered once in the root layout so every page carries a single, consistent
 * `@id` (#organization) that Service / Industry / Location schema references.
 */
export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
    />
  )
}
