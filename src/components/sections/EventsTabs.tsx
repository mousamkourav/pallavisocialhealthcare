"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { formatEventDate, type EventItem } from "@/data/events";
import { ChevronDown } from "@/components/ui/Icons";

const noopSubscribe = () => () => {};
const todayIST = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());

type Tab = "upcoming" | "past";

export function EventsTabs({ events, fallbackToday }: { events: EventItem[]; fallbackToday: string }) {
  // Server render uses the content date; the browser re-evaluates against the real date.
  const today = useSyncExternalStore(noopSubscribe, todayIST, () => fallbackToday);
  const upcoming = events
    .filter((e) => (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => (e.endDate ?? e.date) < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  const [tab, setTab] = useState<Tab>(upcoming.length ? "upcoming" : "past");
  const baseId = useId();
  const tabs: { key: Tab; label: string }[] = [
    { key: "upcoming", label: "Upcoming" },
    { key: "past", label: "Past" },
  ];
  const refs = useRef<Record<Tab, HTMLButtonElement | null>>({ upcoming: null, past: null });

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next: Tab = tab === "upcoming" ? "past" : "upcoming";
    setTab(next);
    refs.current[next]?.focus();
  }

  const list = tab === "upcoming" ? upcoming : past;

  return (
    <div>
      <div role="tablist" aria-label="Events" className="flex border-b border-black/20">
        {tabs.map((t) => {
          const selected = tab === t.key;
          return (
            <button
              key={t.key}
              ref={(el) => {
                refs.current[t.key] = el;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${t.key}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(t.key)}
              onKeyDown={onKeyDown}
              className={`-mb-px border-b-2 px-4 py-2 text-sm transition-colors sm:px-5 ${
                selected ? "border-ink font-medium text-ink" : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${tab}`}>
        {list.length === 0 ? (
          <div className="border-b border-black/20 py-8 text-sm text-muted">
            <p>No upcoming events are scheduled right now.</p>
            <p className="mt-2">
              Subscribe to our newsletter below, or{" "}
              <Link href="/contact#enquiry" className="font-medium text-blue-ink underline underline-offset-2">
                contact us
              </Link>{" "}
              to volunteer at our next camp.
            </p>
          </div>
        ) : (
          <ul>
            {list.map((ev) => (
              <EventRow key={ev.slug} event={ev} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function EventRow({ event }: { event: EventItem }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const dateLabel = event.endDate
    ? `${formatEventDate(event.date)} – ${formatEventDate(event.endDate)}`
    : formatEventDate(event.date);

  return (
    <li className="border-b border-black/20">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-details`}
          onClick={() => setOpen((v) => !v)}
          className="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 py-5 text-left text-sm sm:grid-cols-[8.5rem_1fr_auto]"
        >
          <span className="text-muted sm:text-ink">{formatEventDate(event.date)}</span>
          <span className="col-span-1 row-start-2 mt-1 font-medium text-ink sm:col-span-1 sm:row-start-auto sm:mt-0 sm:font-normal">
            {event.title}
          </span>
          <ChevronDown
            className={`col-start-2 row-span-2 h-5 w-5 transition-transform sm:col-start-auto sm:row-span-1 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      <div id={`${id}-details`} hidden={!open} className="pb-6 sm:pl-[8.5rem]">
        <p className="text-sm font-medium text-ink">{dateLabel}</p>
        <p className="text-sm text-muted">{event.location}</p>
        {event.details.map((d) => (
          <p key={d} className="mt-2 text-sm leading-relaxed text-ink">
            {d}
          </p>
        ))}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:max-w-md">
          {event.images.map((img) => (
            <a key={img.src} href={img.src} target="_blank" rel="noopener" className="block overflow-hidden rounded border border-black/10">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 640px) 220px, 45vw"
                className="aspect-[4/5] w-full object-cover transition-transform hover:scale-[1.03]"
              />
              <span className="sr-only"> (opens full-size image in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}
