import { EventsTabs } from "@/components/sections/EventsTabs";
import { events } from "@/data/events";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Events",
  description:
    "Upcoming and past events from Pallavi Social Health Care Society — health camps, oncology conferences and community programmes in Bhopal and Madhya Pradesh.",
  path: "/events",
});

/** Date the event list was last reviewed; used for the server render before the browser checks today’s date. */
const CONTENT_DATE = "2026-10-23";

export default function EventsPage() {
  return (
    <section aria-labelledby="events-heading" className="bg-lavender px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-[36rem]">
        <h1 id="events-heading" className="text-2xl font-semibold">
          Events
        </h1>
        <p className="mt-2 text-sm text-ink">
          Health camps, conferences and community programmes we have been part of.
        </p>
        <div className="mt-6">
          <EventsTabs events={events} fallbackToday={CONTENT_DATE} />
        </div>
      </div>
    </section>
  );
}
