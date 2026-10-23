import type { NextConfig } from "next";

/**
 * Likely Wix slugs for the recovered pages. The exact original slugs were not visible in the
 * screenshots, so common Wix variants are permanently redirected to the new routes.
 * See docs/SEO-MIGRATION.md.
 */
const legacyRedirects: Array<[string, string]> = [
  ["/home", "/"],
  ["/about-us", "/about"],
  ["/about-1", "/about"],
  ["/contact-us", "/contact"],
  ["/contact-1", "/contact"],
  ["/event-list", "/events"],
  ["/events-1", "/events"],
  ["/resources", "/events"],
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];
  },
};

export default nextConfig;
