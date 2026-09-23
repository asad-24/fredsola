"use client";

import { Menu, X } from "lucide-react";

import { navigation } from "@/data/site";
import {
  getLocaleFromPathname,
  localeLabels,
  locales,
  stripLocaleFromPathname,
  withLocalePath,
} from "@/lib/i18n";
import { useCurrentPathname } from "@/lib/use-current-pathname";

import { Logo } from "./logo";
import { LocaleLink } from "./locale-link";

export function Header() {
  const pathname = useCurrentPathname();
  const activeLocale = getLocaleFromPathname(pathname);
  const cleanPath = stripLocaleFromPathname(pathname);
  const languageHref = (locale: typeof locales[number]) =>
    withLocalePath(cleanPath, locale);

  const switchLanguage = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    window.location.assign(href);
  };

  const isActive = (href: string) => {
    const activePath = stripLocaleFromPathname(pathname);

    if (href === "/") {
      return activePath === "/";
    }

    if (href === "/careers") {
      return activePath === "/careers" || activePath === "/join-us";
    }

    return activePath === href || activePath.startsWith(`${href}/`);
  };

  return (
    <header className="header-enter sticky top-0 z-50 border-b border-[#0B1F3A]/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-2 text-sm font-semibold transition after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-center after:bg-[#C9A227] after:transition-transform after:duration-300 ${
                isActive(item.href)
                  ? "text-[#071629] after:scale-x-100"
                  : "text-[#071629]/75 after:scale-x-0 hover:text-[#071629] hover:after:scale-x-100"
              }`}
            >
              {item.label}
            </LocaleLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center rounded-full border border-[#0B1F3A]/10 bg-[#F7F4EC] p-1">
            {locales.map((locale) => (
              <a
                key={locale}
                href={languageHref(locale)}
                onClick={(event) => switchLanguage(event, languageHref(locale))}
                data-no-translate
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${
                  activeLocale === locale
                    ? "bg-[#0B1F3A] text-white"
                    : "text-[#071629]/70 hover:text-[#071629]"
                }`}
              >
                {localeLabels[locale]}
              </a>
            ))}
          </div>
          <LocaleLink
            href="/contact#schedule"
            className="h-11 items-center justify-center rounded-full bg-[#0B1F3A] px-5 text-sm font-semibold text-white transition hover:bg-[#071629] lg:inline-flex"
          >
            Schedule a Conversation
          </LocaleLink>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#0B1F3A]/15 text-[#071629] transition hover:border-[#C9A227] [&::-webkit-details-marker]:hidden">
            <Menu className="size-5 group-open:hidden" aria-hidden="true" />
            <X className="hidden size-5 group-open:block" aria-hidden="true" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(88vw,22rem)] rounded-[8px] border border-[#0B1F3A]/10 bg-white p-3 shadow-2xl shadow-[#071629]/15">
            <nav className="grid">
              {navigation.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-[6px] border-l-2 px-4 py-3 text-sm font-semibold transition ${
                    isActive(item.href)
                      ? "border-[#C9A227] bg-[#F7F4EC] text-[#071629]"
                      : "border-transparent text-[#071629]/80 hover:bg-[#F7F4EC] hover:text-[#071629]"
                  }`}
                >
                  {item.label}
                </LocaleLink>
              ))}
              <div className="mt-2 flex items-center gap-2 px-1">
                {locales.map((locale) => (
                  <a
                    key={locale}
                    href={languageHref(locale)}
                    onClick={(event) => switchLanguage(event, languageHref(locale))}
                    data-no-translate
                    className={`flex h-9 flex-1 items-center justify-center rounded-full text-xs font-bold transition ${
                      activeLocale === locale
                        ? "bg-[#0B1F3A] text-white"
                        : "bg-[#F7F4EC] text-[#071629]/75 hover:text-[#071629]"
                    }`}
                  >
                    {localeLabels[locale]}
                  </a>
                ))}
              </div>
              <LocaleLink
                href="/contact#schedule"
                className="mt-2 flex h-11 items-center justify-center rounded-full bg-[#0B1F3A] px-4 text-sm font-semibold text-white"
              >
                Schedule a Conversation
              </LocaleLink>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
