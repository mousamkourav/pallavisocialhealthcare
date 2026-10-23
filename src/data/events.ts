/**
 * Events.
 *
 * The original Events page screenshot only showed Wix's built-in sample events ("Small Business
 * Meetup", "City Networking Event", "Sunset Rooftop Party"), which are template placeholders and are
 * NOT reproduced. The past events below are taken from posters and photos in the recovered asset
 * archive; details are limited to what those posters state. Pallavi's exact role in each event is
 * not stated in the source material — confirm with the owner before expanding descriptions.
 *
 * To add an upcoming event, append an object with a future `date` (YYYY-MM-DD).
 */

export type EventItem = {
  slug: string;
  title: string;
  /** ISO date of the (first) day, YYYY-MM-DD. */
  date: string;
  endDate?: string;
  location: string;
  details: string[];
  images: { src: string; alt: string; width: number; height: number }[];
};

export const events: EventItem[] = [
  {
    slug: "mpccon-2025",
    title: "4th MPCCON – Annual Madhya Pradesh Cancer Conclave",
    date: "2025-07-12",
    endDate: "2025-07-13",
    location: "Indore",
    details: [
      "Held under the aegis of the Cancer Research and Statistic Foundation and supported by SoMes Research & Health Organization.",
      "Program Convener: Dr. Rajesh Patidar. Co-Conveners: Dr. Vikas Asati and Dr. Akash Tiwari (Medical Oncology, Indore).",
    ],
    images: [
      { src: "/images/events/mpccon-2025-save-the-date.jpg", alt: "Save-the-date poster for the 4th MPCCON, 12–13 July 2025, Indore", width: 1126, height: 1600 },
      { src: "/images/events/mpccon-2025-session.jpg", alt: "A speaker presenting at MPCCON 2025", width: 1280, height: 720 },
    ],
  },
  {
    slug: "sohagpur-free-health-camp-2025",
    title: "Mega Free Health Camp, Sohagpur",
    date: "2025-04-17",
    location: "Mangal Bhavan, Sohagpur",
    details: [
      "A free multi-speciality health camp organised by Sagar Multispeciality Hospital in association with the Lioness Club, Sohagpur, from 11:00 am to 4:00 pm.",
    ],
    images: [
      { src: "/images/events/sohagpur-free-health-camp-2025-banner.jpg", alt: "Banner for the mega free health camp at Mangal Bhavan, Sohagpur on 17 April 2025", width: 1600, height: 1200 },
      { src: "/images/events/sohagpur-free-health-camp-2025-felicitation.jpg", alt: "A doctor being felicitated at the Sohagpur health camp", width: 1600, height: 1200 },
    ],
  },
  {
    slug: "advances-in-cancer-research-and-treatment-2024",
    title: "Advances in Cancer Research and Treatment 2024",
    date: "2024-12-14",
    endDate: "2024-12-15",
    location: "Bhopal",
    details: [
      "Held under the aegis of the Cancer Research and Statistic Foundation, with Jawaharlal Nehru Cancer Hospital & Research Centre, Bhopal.",
      "Program Convenor: Dr. Srikant Tiwari, Consultant Medical Oncologist.",
    ],
    images: [
      { src: "/images/events/advances-cancer-research-2024-save-the-date.jpg", alt: "Save-the-date poster for Advances in Cancer Research and Treatment 2024, 14–15 December", width: 1116, height: 1600 },
      { src: "/images/events/advances-cancer-research-2024-lamp-lighting.jpg", alt: "Lamp lighting at the inaugural ceremony of the 2024 conference", width: 1280, height: 960 },
    ],
  },
  {
    slug: "bhopal-oncology-update-2023",
    title: "Bhopal Oncology Update 1",
    date: "2023-12-23",
    endDate: "2023-12-24",
    location: "Courtyard by Marriott, Bhopal",
    details: ["Organising Secretary: Dr. Shyam Agrawal, Director – Medical Oncology, Navodaya Cancer Hospital, Bhopal."],
    images: [
      { src: "/images/events/bhopal-oncology-update-2023-talk.jpg", alt: "Dr. Srikant Tiwari speaking at Bhopal Oncology Update, December 2023", width: 1024, height: 768 },
    ],
  },
];

const fmt = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric", timeZone: "Asia/Kolkata" });

export function formatEventDate(iso: string) {
  return fmt.format(new Date(`${iso}T00:00:00+05:30`));
}
