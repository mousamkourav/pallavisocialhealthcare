import Image from "next/image";
import Link from "next/link";
import { mainNav, policyLabels, site } from "@/data/site";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-10 px-4 pb-12 pt-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1.1fr_1.2fr] lg:gap-8">
        <div>
          <Link href="/" aria-label="Pallavi Social Health Care Society — Home" className="inline-block">
            <Image src="/images/brand/logo.png" alt="" width={311} height={181} className="h-16 w-auto" />
          </Link>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-ink">{site.footerAbout}</p>
        </div>

        <nav aria-labelledby="footer-quick-links">
          <h2 id="footer-quick-links" className="text-xs font-semibold uppercase tracking-wide">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-xs uppercase">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-green-ink hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide">Terms and Conditions</h2>
          {/* Policy pages were not recovered; listed as text until their content is supplied (see docs). */}
          <ul className="mt-4 space-y-2 text-xs text-muted">
            {policyLabels.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-ink" />
              <a href={`mailto:${site.contact.email}`} className="break-all hover:underline">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-ink" />
              <a href={site.contact.phoneHref} className="hover:underline">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-ink" />
              <address className="not-italic">
                {site.contact.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-ink px-4 py-2 text-center text-[11px] text-white">{site.copyright}</div>
    </footer>
  );
}
