import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/data/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { VolunteerCta } from "@/components/layout/VolunteerCta";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";

// Poppins (SIL OFL 1.1), self-hosted from @fontsource/poppins so builds need no network access.
const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "../fonts/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/poppins-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Cancer Care, Awareness & Support in Bhopal`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: "/",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#008dd1",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/brand/logo.png`,
  email: site.contact.email,
  telephone: "+91-9958783620",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-63 Vishnu High Tech Society, Bawadia Kala",
    addressLocality: site.contact.addressLocality,
    addressRegion: site.contact.addressRegion,
    addressCountry: site.contact.addressCountry,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <VolunteerCta />
        <Footer />
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
