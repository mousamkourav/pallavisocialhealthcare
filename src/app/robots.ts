import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * Only the production deployment is indexable. Preview/staging deployments (e.g. Vercel previews,
 * where VERCEL_ENV !== "production") and local builds without SITE_INDEXING=true are disallowed.
 */
export default function robots(): MetadataRoute.Robots {
  const indexable =
    process.env.VERCEL_ENV === "production" ||
    (!process.env.VERCEL_ENV && process.env.SITE_INDEXING === "true");

  if (!indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
