import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { aboutHero, coreValues, gallery, missionHistory, partners, whatWeDo } from "@/data/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Pallavi Social Health Care Society — our mission and history, what we do for cancer patients, and the core values that guide our work in Bhopal and rural Madhya Pradesh.",
  path: "/about",
  image: "/images/hero/about-hero-community-kitchen.jpg",
});

export default function AboutPage() {
  return (
    <>
      <PageHero title={aboutHero.title} subtitle={aboutHero.subtitle} image={aboutHero.image} position="center 30%" />

      {/* Mission & history */}
      <section className="mx-auto grid max-w-site gap-6 px-4 py-14 sm:px-6 md:grid-cols-[14rem_1fr] md:gap-10">
        <h2 className="dot-heading text-3xl font-bold uppercase leading-tight">{missionHistory.heading}</h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink">
          {missionHistory.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Photo strip */}
      <section aria-label="Photos from our programmes">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {gallery.map((g, i) => (
            <li key={g.src} className={`relative aspect-square ${i === 4 ? "hidden sm:block" : ""}`}>
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </section>

      {/* What we do */}
      <section className="mx-auto grid max-w-site items-start gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="dot-heading text-3xl font-bold uppercase">{whatWeDo.heading}</h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-sm leading-relaxed">
            {whatWeDo.items.map((item) => (
              <li key={item.title}>
                <span aria-hidden="true">{item.emoji} </span>
                <strong className="font-semibold">{item.title}</strong> – {item.body}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] md:mt-12">
          <Image src={whatWeDo.image.src} alt={whatWeDo.image.alt} fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Core values */}
      <section className="mx-auto grid max-w-site items-start gap-10 px-4 pb-16 sm:px-6 md:grid-cols-[1fr_1.5fr]">
        <div className="relative order-2 aspect-[4/3] md:order-1">
          <Image src={coreValues.image.src} alt={coreValues.image.alt} fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="dot-heading text-3xl font-bold uppercase">{coreValues.heading}</h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-sm leading-relaxed">
            {coreValues.items.map((v) => (
              <li key={v.title}>
                <strong className="font-semibold">{v.title}:</strong> {v.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto grid max-w-site items-center gap-6 px-4 pb-16 sm:px-6 md:grid-cols-[1fr_1.3fr]">
        <h2 className="dot-heading text-3xl font-bold uppercase">{partners.heading}</h2>
        <div className="space-y-1 text-sm leading-relaxed">
          {partners.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      </section>
    </>
  );
}
