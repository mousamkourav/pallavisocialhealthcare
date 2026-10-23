"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { donateHref, mainNav } from "@/data/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const menuId = useId();

  // Close the mobile menu after navigating (state adjusted during render, per React docs).
  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex h-16 max-w-wide items-stretch justify-between pl-4 sm:pl-8 lg:h-[72px] lg:pl-20">
        <Link href="/" className="flex items-center" aria-label="Pallavi Social Health Care Society — Home">
          <Image
            src="/images/brand/logo.png"
            alt="Pallavi Social Health Care Society"
            width={311}
            height={181}
            priority
            className="h-12 w-auto lg:h-14"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-stretch lg:flex">
          <ul className="flex items-center gap-12 pr-14">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[13px] font-semibold uppercase tracking-wide transition-colors hover:text-green-ink ${
                      active ? "text-green-ink" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={donateHref}
            className="flex items-center bg-green-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-navy xl:mr-20"
          >
            Donate Now
          </Link>
        </nav>

        <div className="flex items-center gap-2 pr-2 lg:hidden">
          <Link
            href={donateHref}
            className="rounded-sm bg-green-ink px-3 py-2 text-xs font-semibold text-white"
          >
            Donate Now
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => {
              setOpenedAt(pathname);
              setOpen((v) => !v);
            }}
            className="inline-flex h-11 w-11 items-center justify-center rounded text-ink"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id={menuId}
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-black/5 bg-white lg:hidden"
      >
        <ul className="flex flex-col py-2">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3 text-sm font-semibold uppercase tracking-wide ${
                    active ? "text-green-ink" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
