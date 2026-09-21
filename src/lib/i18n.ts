export const locales = ["en", "es", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
};

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (isLocale(parts[0])) {
    parts.shift();
  }
  return `/${parts.join("/")}`.replace(/\/$/, "") || "/";
}

export function withLocalePath(pathname: string, locale: Locale) {
  const cleanPath = stripLocaleFromPathname(pathname);
  if (locale === defaultLocale) {
    return cleanPath;
  }
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "es" || value === "fr";
}
