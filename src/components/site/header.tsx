import { Menu, X } from "lucide-react";
import Link from "next/link";

import { navigation } from "@/data/site";

import { Logo } from "./logo";

export function Header() {
  return (
    <header className="header-enter sticky top-0 z-50 border-b border-[#0B1F3A]/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#071629]/75 transition hover:text-[#071629]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden h-11 items-center justify-center rounded-full bg-[#0B1F3A] px-5 text-sm font-semibold text-white transition hover:bg-[#071629] lg:inline-flex"
        >
          Schedule a Conversation
        </Link>

        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#0B1F3A]/15 text-[#071629] transition hover:border-[#C9A227] [&::-webkit-details-marker]:hidden">
            <Menu className="size-5 group-open:hidden" aria-hidden="true" />
            <X className="hidden size-5 group-open:block" aria-hidden="true" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(88vw,22rem)] rounded-[8px] border border-[#0B1F3A]/10 bg-white p-3 shadow-2xl shadow-[#071629]/15">
            <nav className="grid">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[6px] px-4 py-3 text-sm font-semibold text-[#071629]/80 transition hover:bg-[#F7F4EC] hover:text-[#071629]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 flex h-11 items-center justify-center rounded-full bg-[#0B1F3A] px-4 text-sm font-semibold text-white"
              >
                Schedule a Conversation
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
