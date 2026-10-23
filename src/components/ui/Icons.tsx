type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const MailIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PhoneIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const PinIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ChevronDown = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/* Programme card icons (originals were Wix stock icons that were not in the asset archive). */
export const VillageIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M3 21h18M5 21V11l5-4 5 4v10M15 21v-6h4v6M9 21v-4h2v4" />
  </svg>
);
export const RibbonIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M12 3c2 0 3.5 1.6 3.5 3.6 0 2.2-1.6 4.4-3.5 6.9-1.9-2.5-3.5-4.7-3.5-6.9C8.5 4.6 10 3 12 3zM9.6 11.2 5 21l3-1 1.5 2.5L12 16M14.4 11.2 19 21l-3-1-1.5 2.5L12 16" />
  </svg>
);
export const CareIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M12 8.5c1-2 4.5-2 4.5.8 0 2-2.6 3.6-4.5 5.2-1.9-1.6-4.5-3.2-4.5-5.2 0-2.8 3.5-2.8 4.5-.8zM2 17l4-1.5c1.2-.4 2.5-.3 3.5.4L12 17.5h4a1.5 1.5 0 0 1 0 3H9M16 19l4.5-2a1.5 1.5 0 0 1 1.5 2.5L15 22H8l-6-1" />
  </svg>
);
export const SchoolIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M2 10 12 5l10 5-10 5-10-5zM6 12v5c3 2 9 2 12 0v-5M22 10v6" />
  </svg>
);
