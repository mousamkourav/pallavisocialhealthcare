import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Pallavi Social Health Care Society in Bhopal — whether you are a cancer patient in need, a volunteer, a donor or a partner. Call +91 9958783620 or send us an enquiry.",
  path: "/contact",
  image: "/images/hero/contact-hero-meal-service.jpg",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Contact <span className="text-brand-green">Us</span>
          </>
        }
        subtitle="Let’s Fight Cancer Together — One Message, One Volunteer, One Partnership at a Time"
        image="/images/hero/contact-hero-meal-service.jpg"
      />

      <section id="enquiry" aria-labelledby="enquiry-heading" className="bg-lavender px-4 py-12 sm:py-16">
        <div className="mx-auto grid max-w-site gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <h2 id="enquiry-heading" className="text-3xl font-semibold uppercase">
              Enquiry Form
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed">
              <p>
                We’re here to help, listen, and collaborate.
                <br />
                Whether you’re a cancer patient in need, a volunteer willing to serve, a donor looking to
                contribute, or a partner exploring collaboration — your voice matters.
              </p>
              <p>Reach out to us. Together, we can save lives and restore hope.</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-ink" />
                <a href={`mailto:${site.contact.supportEmail}`} className="break-all hover:underline">
                  {site.contact.supportEmail}
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
          <div className="bg-[#f7f6ff] p-6 shadow-[0_2px_16px_rgba(40,30,120,0.08)] sm:p-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
