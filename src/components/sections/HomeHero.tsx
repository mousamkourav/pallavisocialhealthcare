import Image from "next/image";
import { homeHero } from "@/data/home";

/**
 * Homepage hero. The original Wix hero used a darkened background video of the community meal
 * programme; it is reproduced as a muted, looping, compressed clip. Users who prefer reduced motion
 * see the still photo only.
 */
export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-ink sm:min-h-[520px]">
      <Image
        src={homeHero.poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <video
        className="absolute inset-0 -z-10 hidden h-full w-full object-cover motion-safe:block"
        src={homeHero.video}
        poster={homeHero.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="absolute inset-0 -z-10 bg-[#1b1240]/60" aria-hidden="true" />
      <div className="w-full px-6 py-16 text-center sm:w-[56%] sm:px-10 lg:w-[46%]">
        <span className="mx-auto mb-4 block h-3 w-16 bg-brand-green" aria-hidden="true" />
        <h1 className="text-3xl font-bold uppercase leading-tight text-brand-green sm:text-[44px]">
          {homeHero.title[0]}
          <br />
          {homeHero.title[1]}
        </h1>
        <p className="mt-4 text-sm font-semibold text-white">{homeHero.tagline}</p>
        <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-white/95 sm:text-[13px]">{homeHero.body}</p>
      </div>
    </section>
  );
}
