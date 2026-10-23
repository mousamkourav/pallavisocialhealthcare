import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle: string;
  image: string;
  /** CSS object-position for the background photo crop. */
  position?: string;
};

/** Full-bleed photo banner with dark overlay used at the top of inner pages (About, Contact). */
export function PageHero({ title, subtitle, image, position = "center" }: Props) {
  return (
    <section className="relative isolate flex min-h-[260px] items-center overflow-hidden bg-ink sm:min-h-[330px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />
      <div className="w-full px-6 py-14 sm:pl-[10%] lg:pl-[12%]">
        <span className="mb-3 block h-3 w-14 bg-brand-green" aria-hidden="true" />
        <h1 className="text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-3 max-w-md text-xs font-semibold text-white sm:text-sm">{subtitle}</p>
      </div>
    </section>
  );
}
