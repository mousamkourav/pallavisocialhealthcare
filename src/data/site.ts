/**
 * Site-wide facts. Every value here was read from the original Wix screenshots.
 * See docs/PAGE-INVENTORY.md ("Content gaps") before changing contact details.
 */

export const site = {
  name: "Pallavi Social Health Care Society",
  shortName: "Pallavi",
  url: "https://pallavisocialhealthcare.in",
  locale: "en_IN",
  tagline: "Fighting Cancer with Care, Compassion & Commitment",
  description:
    "Pallavi Social Health Care Society is a nonprofit in Bhopal dedicated to improving the lives of individuals affected by cancer through early detection, awareness, nutritional aid, emotional support and research collaboration.",
  contact: {
    // Shown in the original footer.
    email: "info@pallavihealthcare.in",
    // Shown on the original Contact Us page (differs from the footer address — owner to confirm).
    supportEmail: "support@pallavisocialhealth.org",
    phoneDisplay: "+91 9958783620",
    phoneHref: "tel:+919958783620",
    addressLines: ["D-63 Vishnu High Tech Society,", "Bawadia Kala, Bhopal"],
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  footerAbout:
    "We are on a mission to ensure that no one faces cancer alone. Through early diagnosis, food support, research collaboration, and awareness — we bring hope where it’s needed most.",
  copyright: "© 2025 by Pallavi Social Health Care Society.",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // The original "Resources" menu target is unknown; Events is the only resources page recovered so far.
  { label: "Resources", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

/** No payment gateway details were recovered, so "Donate Now" routes to the enquiry form. */
export const donateHref = "/contact#enquiry";
export const supportHref = "/contact#enquiry";

/** Footer "Terms and Conditions" column. These pages were not supplied, so they render as plain text until written. */
export const policyLabels = [
  "Privacy Policy",
  "Terms & Conditions",
  "Refund Policy",
  "Accessibility Statement",
] as const;
