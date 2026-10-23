# SEO migration (Wix → Next.js)

Production domain: `https://pallavisocialhealthcare.in` (canonical, no trailing slash, no `www`).

| Original URL | New URL | Redirect | Metadata | Notes |
|---|---|---|---|---|
| `/` | `/` | — | Title, description, canonical, OG, Twitter, Organization (NGO) JSON-LD | |
| `/home` (Wix alias) | `/` | 308 permanent | — | |
| unknown (`/about`, `/about-us` or `/about-1`) | `/about` | `/about-us`, `/about-1` → 308 | Complete | Confirm real slug from Google Search Console |
| unknown (`/contact`, `/contact-us`, `/contact-1`) | `/contact` | `/contact-us`, `/contact-1` → 308 | Complete | |
| unknown (`/events`, `/event-list`) | `/events` | `/event-list`, `/events-1` → 308 | Complete | |
| `/resources` (guess) | `/events` | 308 | — | Remove when a real Resources page exists |
| Blog posts `/post/<slug>` | not built | none yet | — | Wix blog URLs are `/post/<slug>`; add pages + keep slugs when content is supplied |
| Event pages `/event-details/<slug>` | not built | none | — | Original events were Wix samples; nothing to preserve |

Redirects live in `next.config.ts` (`legacyRedirects`). **Action:** export the list of indexed URLs from Google Search Console (Pages report) for the old Wix site and add any missing ones.

## Implemented
- Page-specific `<title>` and meta description (Metadata API, `src/lib/seo.ts`).
- Canonical URLs on every indexable page; none on the 404.
- Open Graph + Twitter `summary_large_image` (logo-based OG image; About/Contact use their hero photos).
- `sitemap.xml` with the 4 indexable routes.
- `robots.txt` — **allows indexing only for production builds** (`VERCEL_ENV=production`, or `SITE_INDEXING=true` at build time on other hosts). Preview/local builds return `Disallow: /`. `robots.txt` is generated at build time, so the variable must be set for the build.
- 404 page returns HTTP 404 with `noindex`.
- `NGO` JSON-LD with name, logo, email, phone, address (facts from the screenshots only).
- Semantic headings: one `h1` per page.

## Unresolved
- Original slugs are guesses (see table).
- Duplicate/unclear email addresses (see PAGE-INVENTORY gap #2) also appear in JSON-LD (`info@` address).
