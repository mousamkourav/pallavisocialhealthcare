import Link from "next/link";
import { supportHref } from "@/data/site";

export function AnnouncementBar() {
  return (
    <div className="bg-blue-ink px-4 py-2 text-center text-xs font-semibold text-white sm:text-[13px]">
      Be a part of the family{" "}
      <Link
        href={supportHref}
        className="text-[#b8f5a0] underline underline-offset-2 hover:text-white"
      >
        Support Us
      </Link>
    </div>
  );
}
