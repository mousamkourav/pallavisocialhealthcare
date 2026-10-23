import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Fixed date (no `new Date()` during prerender). Update when page content changes.
const LAST_MODIFIED = "2026-10-23";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/events", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
