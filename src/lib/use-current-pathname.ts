"use client";

import { usePathname } from "next/navigation";

export function useCurrentPathname() {
  const pathname = usePathname();
  return typeof window === "undefined" ? pathname : window.location.pathname;
}
