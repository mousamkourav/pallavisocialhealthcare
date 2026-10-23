/**
 * Home page content.
 *
 * Source: the supplied homepage screenshot (901×863 px). Headings, statistics, programme titles and
 * blog titles are legible and transcribed as shown. Body copy marked `[LOW-RES]` was too small to
 * read reliably: it is either the closest legible reading or reuses verified wording from the About
 * page. Replace it with the original text when available — see docs/PAGE-INVENTORY.md.
 */

export const homeHero = {
  title: ["Social Healthcare", "Society"],
  // [LOW-RES]
  tagline: "Fighting Cancer with Compassion, Care & Community",
  // [LOW-RES] Wording taken from the verified About page mission text.
  body: "Pallavi Social Health Care Society is a nonprofit organization dedicated to improving the lives of individuals affected by cancer — supporting patients, raising awareness, encouraging research, and restoring dignity in the fight against cancer.",
  video: "/media/home-hero-loop.mp4",
  poster: "/images/hero/home-hero-meal-distribution.jpg",
};

/** Legible in the screenshot. */
export const stats = [
  { value: "500+", label: "Cancer Screening Camps Conducted" },
  { value: "50K+", label: "Nutritional Meals Provided to Patients" },
  { value: "12+", label: "Volunteer Oncologists and Health Experts Engaged" },
  { value: "200", label: "Villages Reached with Awareness & Support" },
];

export const whoWeAre = {
  heading: "Who We Are",
  // [LOW-RES] Uses verified About-page wording.
  body: "Pallavi Social Health Care Society is a nonprofit organization dedicated to improving the lives of individuals affected by cancer. Our mission is to ensure that no one faces cancer alone — regardless of their social or economic background. We work tirelessly to bridge the gap between cancer care access and those in need, especially in rural and underserved communities.",
  cta: { label: "Read More", href: "/about" },
};

export const partnerWithUs = {
  heading: "Partner With Us",
  // [LOW-RES]
  body: "Hospitals, institutions, researchers and organizations can partner with us on screening camps, awareness drives, nutrition support and research collaboration.",
  // [LOW-RES]
  note: "Whether it’s funding, resources, or expert support — your collaboration can help save lives.",
  cta: { label: "Support Us", href: "/contact#enquiry" },
};

export const howYouCanHelp = {
  heading: "How You Can Help",
  // [LOW-RES] Four bullets are visible; wording is the closest legible reading.
  items: [
    "Volunteer with us at our cancer awareness drives",
    "Sponsor meals or nutrition kits for patients undergoing treatment",
    "Donate to fund screening camps and research projects",
    "Spread the word and help educate others about early detection",
  ],
};

export const mission = {
  heading: "Our Mission",
  // [LOW-RES]
  body: "To ensure equitable cancer care by bringing early detection, nutritional support, emotional care, awareness and research to those who need it most — especially in underserved communities.",
  cta: { label: "Read More", href: "/about" },
};

export const vision = {
  heading: "Our Vision",
  // [LOW-RES]
  body: "A world where no one suffers from cancer because of a lack of access, awareness, or affordability.",
  cta: { label: "Read More", href: "/about" },
};

export const feature = {
  title: ["Social Healthcare", "Society"],
  video: "/media/community-meal-programme.mp4",
  poster: "/media/community-meal-programme-poster.jpg",
  caption: "Volunteers serving meals to patients and families at one of our community meal programmes.",
};

/** Titles legible; descriptions [LOW-RES]. Accent colours match the card underline colours in the screenshot. */
export const programs = [
  {
    title: "Rural Health Outreach",
    body: "Mobile cancer screening and awareness camps in rural villages without diagnostic infrastructure.",
    icon: "village",
    accent: "green",
  },
  {
    title: "Women’s Cancer Wellness Program",
    body: "Focused awareness and screening for breast and cervical cancers, with support for women.",
    icon: "ribbon",
    accent: "blue",
  },
  {
    title: "Cancer Care for Seniors",
    body: "Palliative care guidance, free check-ups, and nutrition distribution for elderly cancer patients.",
    icon: "care",
    accent: "navy",
  },
  {
    title: "Cancer Education in Schools",
    body: "Early education on lifestyle, diet, and symptoms to promote long-term cancer prevention.",
    icon: "school",
    accent: "blue",
  },
] as const;

/**
 * Blog cards. Titles are legible; excerpts and article bodies were not recoverable, so the cards
 * are not linked until the articles are supplied.
 */
export const blogPosts = [
  {
    title: "The Power of a Simple Test – How Early Cancer Screening Saves Lives",
    image: "/images/hero/home-hero-meal-distribution.jpg",
  },
  {
    title: "Early Detection Saves Lives – Why Cancer Awareness Matters in Rural India",
    image: "/images/hero/home-hero-meal-distribution.jpg",
  },
  {
    title: "Nutrition & Cancer Care – Feeding Hope, One Meal at a Time",
    image: "/images/hero/about-hero-community-kitchen.jpg",
  },
];
