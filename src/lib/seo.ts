import type { Metadata } from "next";
import { site } from "@/data/site";

/** Page-level metadata with canonical URL and matching Open Graph / Twitter fields. */
export function pageMetadata({
  title,
  description,
  path,
  image = "/images/brand/og-image.png",
}: {
  title?: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : undefined;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: path,
      ...(fullTitle ? { title: fullTitle } : {}),
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      ...(fullTitle ? { title: fullTitle } : {}),
      description,
      images: [image],
    },
  };
}
