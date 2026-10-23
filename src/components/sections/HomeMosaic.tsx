import Image from "next/image";
import Link from "next/link";
import { howYouCanHelp, mission, partnerWithUs, vision, whoWeAre } from "@/data/home";

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="mt-5 inline-block border border-white px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white hover:text-ink"
    >
      {children}
    </Link>
  );
}

function BlockHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="max-w-[9rem] text-sm font-bold uppercase leading-tight">{children}</h2>;
}

/**
 * The colour-block mosaic under the stats row (Who We Are / Partner / How You Can Help / Mission / Vision).
 * Desktop reproduces the original 3-column grid; smaller screens stack the blocks in reading order.
 */
export function HomeMosaic() {
  return (
    <section
      aria-label="About our work"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40fr_23fr_37fr] lg:[grid-template-areas:'who_p1_partner'_'p2_help_help'_'p2_vision_p3']"
    >
      {/* Who we are */}
      <div className="flex items-center bg-black px-8 py-12 text-white lg:[grid-area:who] lg:justify-end lg:pr-[16%]">
        <div className="max-w-xs">
          <BlockHeading>{whoWeAre.heading}</BlockHeading>
          <p className="mt-3 text-[13px] leading-relaxed">{whoWeAre.body}</p>
          <OutlineButton href={whoWeAre.cta.href}>{whoWeAre.cta.label}</OutlineButton>
        </div>
      </div>

      {/* Photo 1 */}
      <div className="relative min-h-[260px] lg:[grid-area:p1]">
        <Image
          src="/images/home/inaugural-ceremony-stage.jpg"
          alt="Guests on stage at the inaugural ceremony of the Advances in Cancer Research and Treatment conference"
          fill
          sizes="(min-width: 1024px) 23vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Partner with us */}
      <div className="flex items-center bg-navy px-8 py-12 text-white md:col-span-2 lg:col-span-1 lg:[grid-area:partner] lg:pl-[14%]">
        <div className="max-w-sm">
          <BlockHeading>{partnerWithUs.heading}</BlockHeading>
          <p className="mt-3 text-[13px] leading-relaxed">{partnerWithUs.body}</p>
          <p className="mt-2 text-[13px] leading-relaxed">{partnerWithUs.note}</p>
          <OutlineButton href={partnerWithUs.cta.href}>{partnerWithUs.cta.label}</OutlineButton>
        </div>
      </div>

      {/* Photo 2 with overlapping Mission box (desktop) */}
      <div className="relative md:col-span-2 lg:col-span-1 lg:[grid-area:p2]">
        <div className="relative min-h-[300px] lg:absolute lg:inset-0">
          <Image
            src="/images/home/conference-team-group.jpg"
            alt="Doctors and volunteers posing together at a cancer conference"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-blue-ink px-8 py-12 text-white lg:absolute lg:bottom-0 lg:right-0 lg:h-1/2 lg:w-[55%] lg:py-6 lg:pl-[12%]">
          <div className="max-w-xs">
            <BlockHeading>{mission.heading}</BlockHeading>
            <p className="mt-3 text-[13px] leading-relaxed">{mission.body}</p>
            <OutlineButton href={mission.cta.href}>{mission.cta.label}</OutlineButton>
          </div>
        </div>
      </div>

      {/* How you can help */}
      <div className="flex items-center bg-green-ink px-8 py-12 text-white md:col-span-2 lg:[grid-area:help] lg:min-h-[260px] lg:pl-[22%]">
        <div>
          <h2 className="max-w-xs text-3xl font-extrabold uppercase leading-none sm:text-[40px]">
            {howYouCanHelp.heading}
          </h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-[13px] leading-relaxed">
            {howYouCanHelp.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vision */}
      <div className="flex items-center bg-black px-8 py-12 text-white lg:[grid-area:vision] lg:min-h-[260px] lg:pl-[18%]">
        <div className="max-w-[14rem]">
          <BlockHeading>{vision.heading}</BlockHeading>
          <p className="mt-3 text-[13px] leading-relaxed">{vision.body}</p>
          <OutlineButton href={vision.cta.href}>{vision.cta.label}</OutlineButton>
        </div>
      </div>

      {/* Photo 3 */}
      <div className="relative min-h-[260px] lg:[grid-area:p3]">
        <Image
          src="/images/home/meal-service-shelter.jpg"
          alt="Volunteers serving meals under the community kitchen shelter"
          fill
          sizes="(min-width: 1024px) 37vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
