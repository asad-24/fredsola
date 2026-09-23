"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { getLocaleFromPathname, withLocalePath } from "@/lib/i18n";
import { useCurrentPathname } from "@/lib/use-current-pathname";

type LocaleLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export function LocaleLink({ href, children, ...props }: LocaleLinkProps) {
  const pathname = useCurrentPathname();
  const locale = getLocaleFromPathname(pathname);
  const localizedHref =
    typeof href === "string" && href.startsWith("/")
      ? withLocalePath(href, locale)
      : href;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
