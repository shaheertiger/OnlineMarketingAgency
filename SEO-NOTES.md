# Local SEO — implementation notes & owner action items

This file tracks what was implemented from the Local SEO Action Plan, the data
the **owner must supply** (things Claude Code must not fabricate), and the
off-site work (Phase 5) that only the owner can do.

---

## ⚠️ Owner data to fill in — edit `lib/site.ts`

All NAP / review / geo / social data is centralized in **`lib/site.ts`**. Update
it there and it propagates to the footer NAP and all JSON-LD sitewide.

- [ ] **Street address + postal code** — the site currently publishes a
  *service-area* NAP ("Serving Brampton & the Greater Toronto Area"). A real
  address that matches the Google Business Profile **character-for-character** is
  far stronger. Add `streetAddress` and `postalCode` to `ADDRESS` in
  `lib/site.ts` (uncomment the fields).
- [ ] **Geo coordinates** — set `GEO` to the GBP map pin lat/long. Once set, a
  `geo` block is automatically added to the organization schema.
- [ ] **Review count / rating** — `REVIEW` in `lib/site.ts` currently mirrors the
  figure already shown on the site (4.9 / 485). Confirm this against the **live
  GBP** and correct it if different. This drives both the visible badges intent
  and the single sitewide `AggregateRating`. (Per-city pages no longer declare
  their own conflicting counts.)
  - NOTE: the visible "485 Google Reviews" strings in `Hero`, `StatsStrip`,
    `TestimonialsSection`, `LocationPageTemplate`, and `ServicePageTemplate` are
    still hard-coded. If the real number differs, update those components too (or
    refactor them to read `REVIEW` from `lib/site.ts`).
- [ ] **Social / GBP URLs** — add verified Google Maps (GBP), LinkedIn, Facebook,
  and Instagram URLs to `SAME_AS` in `lib/site.ts`.
- [ ] **Google Search Console verification token** — add to `app/layout.tsx`
  metadata `verification: { google: '…' }` once available.

## Host / canonical
- Canonical host is **non-www** (`https://onlinemarketingagency.ca`), consistent
  across canonicals, sitemap, robots, and schema `@id`.
- A **301 redirect www → non-www** is configured in `next.config.mjs`
  (`redirects()`). `http → https` is handled by the host/CDN +
  `upgrade-insecure-requests`. Verify all four host variants resolve to one 200
  + three 301s after deploy with `curl -I`.

---

## What was implemented (Phases 0–4)

- **Phase 0** — Fixed Who-We-Serve links (Law/Real Estate/Auto no longer point to
  the barber page; Dentists → new dental page). Sitewide footer NAP. Allowed
  mobile `telephone` format-detection. www→non-www 301. Centralized config.
- **Phase 1** — Sitewide `ProfessionalService`/`LocalBusiness` org schema via the
  root layout (single consistent `@id`). FAQPage, Service, and BreadcrumbList
  schema present across templates. Sitemap + robots updated.
- **Phase 2** — Location pages gained breadcrumbs, city-modified service anchor
  text, and a matching local case study. New **`/locations`** hub (in nav +
  footer). High-intent combo pages: `/local-seo-brampton`,
  `/google-ads-management-toronto`, `/local-seo-mississauga`.
- **Phase 3** — New industry pages: dental, law firm, real estate, auto shop.
  Standalone **case studies** (`/case-studies` + 3 detail pages). 4 new blog
  posts (Map Pack Brampton, GBP checklist, Ontario Google Ads budget 2026,
  dental marketing Mississauga), each linking one service + one location page.
- **Phase 4** — Breadcrumbs on location/case-study/combo pages, varied
  descriptive anchor text, footer Locations column links to the hub + all cities,
  Industries column expanded.

### Crawlability (non-SPA)
Every page is **prerendered to static HTML** (`next build` shows all routes as
`○ Static` / `● SSG`). Although some UI components are client components
(`'use client'`), Next.js App Router still server-renders their initial HTML, so
all headings, body copy, NAP, and JSON-LD are present in the static HTML for
crawlers and AI answer engines — verified against `.next/server/app/*.html`.

---

## Phase 5 — Off-site (owner only; ~2/3 of Local Pack ranking power)

The website supports these but cannot replace them. See the action plan for
detail.

- [ ] **Google Business Profile** — claim/verify; primary category "Internet
  marketing service" (or "Marketing agency"); complete every field; 10+ photos;
  weekly posts; UTM-tag the website link (`?utm_source=gbp&utm_medium=organic`);
  enable messaging + seed Q&A with the site FAQ.
- [ ] **Reviews** — repeatable ask after every win; steady cadence; reply within
  48h; diversify a few to Clutch/Trustpilot/Facebook.
- [ ] **Citations** — Google, Bing Places, Apple Business Connect, Yelp,
  YellowPages.ca, 411.ca, Canada411, BBB, Foursquare, plus Clutch/UpCity/
  DesignRush. NAP identical everywhere (must match `lib/site.ts` + GBP).
- [ ] **Local links** — Boards of Trade (Brampton/Mississauga/Toronto),
  sponsorships, guest posts, "best agencies in [city]" listicles.
- [ ] **Measurement** — GSC (verify non-www host) + GA4 with call-click and
  form-submit events; geo-grid rank tracking (Local Falcon / BrightLocal).

## Suggested next on-site work (not yet done)
- Expand city coverage (Caledon, Milton, Oakville, Burlington, Etobicoke,
  Hamilton, Richmond Hill, Markham) — 1–2/week, same uniqueness bar.
- Split remaining combo pages based on Search Console query data once available.
- Add real team/office photos (geotagged) on About + location pages.
- Lighthouse/CWV pass on homepage + a service + a location template.
