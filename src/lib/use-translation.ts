"use client";

import { translations } from "@/data/translations";
import { getLocaleFromPathname } from "@/lib/i18n";
import { useCurrentPathname } from "@/lib/use-current-pathname";

export function useTranslation() {
  const pathname = useCurrentPathname();
  const locale = getLocaleFromPathname(pathname);

  return (value: string) => {
    if (locale === "en") {
      return value;
    }

    const dictionary = translations[locale];
    const normalizedDictionary = new Map(
      Object.entries(dictionary).map(([key, translation]) => [
        normalizeText(key),
        translation,
      ])
    );
    const lowercaseDictionary = new Map(
      Object.entries(dictionary).map(([key, translation]) => [
        normalizeText(key).toLowerCase(),
        translation,
      ])
    );

    const translated =
      dictionary[value] ??
      dictionary[value.trim()] ??
      normalizedDictionary.get(normalizeText(value)) ??
      lowercaseDictionary.get(normalizeText(value).toLowerCase()) ??
      value;

    return formatTranslation(translated, locale);
  };
}

function formatTranslation(
  value: string,
  locale: ReturnType<typeof getLocaleFromPathname>
) {
  if (locale === "es") {
    return value.replace(/¿/g, "");
  }

  return value;
}

function normalizeText(value: string) {
  return value
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
