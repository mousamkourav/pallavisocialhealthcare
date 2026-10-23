# Pallavi Social Health Care Society — website

Next.js rebuild of https://pallavisocialhealthcare.in (originally on Wix).
Pages: Home `/`, About `/about`, Events `/events`, Contact `/contact`.

Docs: [`docs/KT.md`](docs/KT.md) · [`PAGE-INVENTORY`](docs/PAGE-INVENTORY.md) · [`ASSET-INVENTORY`](docs/ASSET-INVENTORY.md) · [`SEO-MIGRATION`](docs/SEO-MIGRATION.md) · [`QA-REPORT`](docs/QA-REPORT.md)

## Requirements
Node.js 20.9+ (tested on 22) and npm.

## Local development
```bash
npm install
npm run dev            # http://localhost:3000
```

## Checks
```bash
npm run lint
npm run typecheck      # generates route types, then tsc --noEmit
npm run build && npm start
```

## Environment variables
Copy `.env.example` to `.env.local` (never commit it).

| Variable | Purpose |
|---|---|
| `FORM_WEBHOOK_URL` | Receives contact/newsletter submissions as JSON. Optional; without it forms show an email/phone fallback. |
| `SITE_INDEXING` | `true` at build time on non-Vercel production hosts so `robots.txt` allows crawling. |

## Deploying (Vercel recommended)
1. Import the GitHub repo in Vercel (framework auto-detected; build `npm run build`).
2. Add `FORM_WEBHOOK_URL` under Project → Settings → Environment Variables (Production).
3. Deploy and check the preview URL. Preview deployments are automatically `Disallow: /` in robots.txt.

Other Node hosts: `SITE_INDEXING=true npm run build && npm start` (port via `PORT`).

## Connecting the domain safely
1. In Vercel → Domains, add `pallavisocialhealthcare.in` and `www.pallavisocialhealthcare.in` (redirect `www` → apex).
2. At the registrar (where Wix DNS was set), replace Wix’s A/CNAME records with the values Vercel shows. Keep any MX/TXT records for email.
3. After DNS propagates, verify HTTPS, `/robots.txt`, `/sitemap.xml`, then submit the sitemap in Google Search Console and check the old Wix URLs (see `docs/SEO-MIGRATION.md`).
