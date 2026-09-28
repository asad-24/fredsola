"use client";

import Image from "next/image";

import {
  getLocaleFromPathname,
  withLocalePath,
} from "@/lib/i18n";
import { useCurrentPathname } from "@/lib/use-current-pathname";

export function Logo({ className = "" }: { className?: string }) {
  const pathname = useCurrentPathname();
  const locale = getLocaleFromPathname(pathname);
  const href = withLocalePath("/", locale);

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        window.location.assign(href);
      }}
      className={`group relative block h-12 w-40 transition-opacity hover:opacity-80 sm:w-44 ${className}`}
      aria-label="FKSola Financial home"
    >
      <Image
        src="/images/logo-cropped.png"
        alt="FKSola Financial"
        fill
        sizes="(max-width: 640px) 160px, 176px"
        className="object-contain object-center"
        priority
      />
    </a>
  );
}
