# Knowledge transfer

## What this is
A Next.js rebuild of the Pallavi Social Health Care Society website (originally Wix, now offline), reconstructed from 6 editor screenshots and an archive of the site’s images. Phase 1 covers Home, About, Contact and Events.

## Stack
Next.js 16.4 (App Router, Cache Components, Turbopack) · React 19 · TypeScript strict · Tailwind CSS v4 · self-hosted Poppins via `next/font/local` · no database or CMS.

## Where things live
```
src/
  app/                 routes: page.tsx (home), about/, contact/, events/, not-found, robots.ts, sitemap.ts
    actions.ts         server actions for the enquiry + newsletter forms
  components/
    layout/            AnnouncementBar, Header (client: active link + mobile menu), VolunteerCta, NewsletterForm, Footer
    sections/          HomeHero, HomeMosaic, EnquiryForm, EventsTabs
    ui/                PageHero, Icons, FormMessage, JsonLd
  data/                ← EDIT CONTENT HERE: site.ts (contacts, nav), home.ts, about.ts, events.ts
  lib/                 seo.ts (page metadata helper), forms.ts (validation + webhook delivery)
  fonts/               Poppins woff2 + licence
public/images/         organised original photos (see ASSET-INVENTORY.md)
public/media/          compressed videos
```

## Common edits
- **Text/contacts:** `src/data/*.ts`. Items commented `[LOW-RES]` in `home.ts` need the owner’s original wording.
- **Add an event:** append to `events` in `src/data/events.ts` (ISO dates). Future dates appear under “Upcoming” automatically (evaluated in the visitor’s browser against India time).
- **Add a page:** create `src/app/<route>/page.tsx`, export `metadata = pageMetadata({...})`, add it to `src/app/sitemap.ts` and, if needed, `mainNav` in `site.ts`.
- **Images:** put files in `public/images/<section>/` and reference with `next/image`.

## Forms
Wix stored submissions internally; that is gone. `src/lib/forms.ts` POSTs JSON (`{form, submittedAt, ...fields}`) to `FORM_WEBHOOK_URL`. Any JSON webhook works (Formspree, Make, Zapier, Google Apps Script → Sheet/email). Without it the forms validate input and tell visitors to email/call instead — they never fake success. A hidden honeypot field filters basic bots.

## Design decisions
- Colours sampled from screenshots: green `#64bc46`, blue `#008dd1`, navy `#0b3e66`, lavender `#f0eefe`. Text-bearing fills use AA-safe `#3d8527` / `#0077b3` (tokens `green-ink`, `blue-ink`).
- Font: Poppins (visually matches the Wix headings).
- Header is sticky (not determinable from screenshots).
- “Resources” links to `/events` until a resources page exists.
- Donate Now / Support Us → `/contact#enquiry` (no payment details available).

## Known gaps
See `PAGE-INVENTORY.md → Content gaps`. The most important: low-resolution homepage copy, conflicting email addresses, unbuilt blog/policy pages, GitHub push still pending (see README).
