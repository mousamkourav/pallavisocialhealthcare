# QA report

Run on 23 Oct 2026 against a local production build (`next build` + `next start`), Next.js 16.4.2, Node 22, headless Chromium (Playwright).

## Static checks
| Check | Result |
|---|---|
| `npm run lint` (ESLint 9, next/core-web-vitals + TS) | ✅ 0 errors, 0 warnings |
| `npm run typecheck` (strict TS) | ✅ pass |
| `npm run build` | ✅ pass — all routes prerendered static (`/`, `/about`, `/contact`, `/events`, `/_not-found`, `robots.txt`, `sitemap.xml`, icons) |
| `npm audit` | ⚠️ 5 high advisories in `braces` via `eslint-config-next` (dev-only lint tooling, not shipped to browsers). The only automatic “fix” downgrades to Next 14 — not applied. |

## Route checks (desktop 1440×900 and mobile 375×812)
| Route | HTTP | Console errors | Broken images | Horizontal overflow | Canonical |
|---|---|---|---|---|---|
| `/` | 200 | none | 0 | 0 px | `https://pallavisocialhealthcare.in/` |
| `/about` | 200 | none | 0 | 0 px | `/about` |
| `/contact` | 200 | none | 0 | 0 px | `/contact` |
| `/events` | 200 | none | 0 | 0 px | `/events` |
| `/does-not-exist` | 404 | only the expected 404 | 0 | 0 px | none, `noindex` |

## Interaction checks (all PASS)
Mobile menu opens / closes on Escape / closes after navigation · desktop nav links (Home, About Us, Resources, Contact Us) · Donate Now → `/contact#enquiry` · Events: Past tab auto-selected when no upcoming events, Upcoming empty state, arrow-key tab switching, accordion expands with details · Enquiry form: required-field validation messages; with no webhook configured shows the honest “Online submissions aren’t connected yet…” message; **with a webhook configured, the JSON payload was received and the success message shown** · Newsletter: validation + unconfigured message · Skip link is first focus · Every internal link and linked image returns 200.

## SEO endpoints
- `sitemap.xml` lists 4 URLs on the production domain.
- `robots.txt`: `Disallow: /` on a default build; `Allow: /` + sitemap when built with `SITE_INDEXING=true` (both verified).
- Legacy redirects `/home`, `/about-us`, `/contact-us`, `/resources` return 308 to the new routes (verified).

## Visual comparison with screenshots
Header, announcement bar, hero, stats row, colour mosaic, programme cards, blog cards, volunteer band, newsletter and footer match the original structure, colours and typography (Poppins). Deliberate differences:
- Green and blue backgrounds behind text are slightly deeper (`#3d8527`, `#0077b3` vs sampled `#64bc46`, `#008dd1`) to meet WCAG AA contrast; the original colours are kept for decorative bars and accents.
- Body text is a little larger than the original 10–11 px for readability.
- Homepage hero video is muted/looping and hidden for users with `prefers-reduced-motion`.

## Not verified
- Lighthouse / Core Web Vitals were not measured (no Lighthouse runner in this environment). Run `npx lighthouse https://<deployment>` after deploying.
- Real devices / Safari / Firefox not tested (Chromium only).
- Deployed-environment behaviour (Vercel image optimisation, real form endpoint) not tested.
