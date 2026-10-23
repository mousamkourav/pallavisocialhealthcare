import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-site px-4 py-24 text-center">
      <span className="mx-auto mb-4 block h-3 w-14 bg-brand-green" aria-hidden="true" />
      <h1 className="text-3xl font-bold uppercase sm:text-4xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-muted">
        The page you’re looking for may have moved when our website was rebuilt. Try one of these instead:
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold">
        {[
          ["/", "Home"],
          ["/about", "About Us"],
          ["/events", "Events"],
          ["/contact", "Contact Us"],
        ].map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="inline-block border-2 border-ink px-4 py-2 hover:bg-ink hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
