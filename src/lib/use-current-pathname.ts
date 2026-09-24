"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

export function useCurrentPathname() {
  const pathname = usePathname();
  const browserPathname = useSyncExternalStore(
    subscribeToPathnameChanges,
    getBrowserPathname,
    () => pathname
  );

  return browserPathname || pathname;
}

function getBrowserPathname() {
  return window.location.pathname;
}

function subscribeToPathnameChanges(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("pushstate", callback);
  window.addEventListener("replacestate", callback);

  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("pushstate", callback);
    window.removeEventListener("replacestate", callback);
  };
}
