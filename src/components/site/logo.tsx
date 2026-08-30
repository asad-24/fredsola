import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span className="flex size-10 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#0B1F3A] text-sm font-semibold text-white shadow-sm">
        FK
      </span>
      <span className="leading-none">
        <span className="block font-heading text-[1.35rem] text-[#071629]">
          FKSola
        </span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#5F6B7A]">
          Financial
        </span>
      </span>
    </Link>
  );
}
