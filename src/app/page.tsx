import Image from "next/image";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeMosaic } from "@/components/sections/HomeMosaic";
import { CareIcon, RibbonIcon, SchoolIcon, VillageIcon } from "@/components/ui/Icons";
import { blogPosts, feature, programs, stats } from "@/data/home";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  description: site.description,
  path: "/",
});

const icons = { village: VillageIcon, ribbon: RibbonIcon, care: CareIcon, school: SchoolIcon };
const accents = {
  green: { bar: "bg-brand-green", tile: "bg-green-ink" },
  blue: { bar: "bg-brand-blue", tile: "bg-blue-ink" },
  navy: { bar: "bg-navy", tile: "bg-navy" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Impact statistics */}
      <section aria-label="Our impact" className="bg-white px-4 py-10 sm:py-14">
        <dl className="mx-auto grid max-w-wide grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:px-16">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start justify-self-center">
              <dt className="order-2 mt-1 max-w-[11rem] text-xs font-semibold leading-snug text-ink">{s.label}</dt>
              <dd className="order-1 text-4xl font-bold text-green-ink sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <HomeMosaic />

      {/* Feature video */}
      <section aria-labelledby="feature-heading" className="px-4 pt-14 text-center">
        <h2 id="feature-heading" className="text-3xl font-bold uppercase leading-tight sm:text-4xl">
          {feature.title[0]}
          <br />
          <span className="text-green-ink">{feature.title[1]}</span>
        </h2>
        <figure className="mx-auto mt-5 max-w-md">
          <video
            className="aspect-video w-full bg-black object-cover"
            src={feature.video}
            poster={feature.poster}
            controls
            preload="none"
            playsInline
          >
            Your browser does not support embedded video.
          </video>
          <figcaption className="mt-2 text-xs text-muted">{feature.caption}</figcaption>
        </figure>
      </section>

      {/* Upcoming programmes */}
      <section aria-labelledby="programs-heading" className="px-4 pt-14">
        <h2 id="programs-heading" className="text-center text-2xl font-semibold sm:text-[28px]">
          Upcoming Programs
        </h2>
        <ul className="mx-auto mt-8 flex max-w-[52rem] flex-wrap justify-center gap-5">
          {programs.map((p) => {
            const Icon = icons[p.icon];
            const a = accents[p.accent];
            return (
              <li
                key={p.title}
                className="relative flex w-full max-w-[16rem] flex-col bg-white px-5 pb-8 pt-6 shadow-[0_2px_14px_rgba(0,0,0,0.08)]"
              >
                <span className={`flex h-9 w-9 items-center justify-center text-white ${a.tile}`} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[11px] font-bold uppercase tracking-wide text-ink">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{p.body}</p>
                <span className={`absolute inset-x-0 bottom-0 h-1 ${a.bar}`} aria-hidden="true" />
              </li>
            );
          })}
        </ul>
      </section>

      {/* Blogs */}
      <section aria-labelledby="blogs-heading" className="px-4 py-14">
        <h2 id="blogs-heading" className="text-center text-2xl font-bold uppercase sm:text-[28px]">
          Blogs
        </h2>
        <ul className="mx-auto mt-8 grid max-w-[52rem] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.title} className="overflow-hidden border border-black/10 bg-white">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="px-4 py-4 text-sm font-semibold leading-snug text-ink">{post.title}</h3>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-[52rem] text-center text-xs text-muted">Full articles coming soon.</p>
      </section>
    </>
  );
}

