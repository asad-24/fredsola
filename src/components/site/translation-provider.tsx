"use client";

import { useEffect } from "react";

import { translations } from "@/data/translations";
import { getLocaleFromPathname } from "@/lib/i18n";
import { useCurrentPathname } from "@/lib/use-current-pathname";

const SKIP_SELECTOR =
  "script, style, svg, path, code, pre, textarea, input, [data-no-translate]";

export function TranslationProvider() {
  const pathname = useCurrentPathname();

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname);
    document.documentElement.lang = locale;

    if (locale === "en") {
      return;
    }

    const dictionary = translations[locale];
    const normalizedDictionary = new Map(
      Object.entries(dictionary).map(([key, value]) => [normalizeText(key), value])
    );

    const translate = (value: string) =>
      dictionary[value.trim()] ?? normalizedDictionary.get(normalizeText(value)) ?? value;

    const translateTextNode = (node: Text) => {
      const original = node.nodeValue ?? "";
      const trimmed = original.trim();
      if (!trimmed) return;

      const translated = translate(trimmed);
      if (!translated) return;

      node.nodeValue = original.replace(trimmed, translated);
    };

    const translateRoot = (root: ParentNode) => {
      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            const parent = node.parentElement;
            if (!parent || parent.closest(SKIP_SELECTOR)) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      const nodes: Text[] = [];
      while (walker.nextNode()) {
        nodes.push(walker.currentNode as Text);
      }
      nodes.forEach(translateTextNode);

      root
        .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[placeholder]")
        .forEach((element) => {
          element.placeholder = translate(element.placeholder);
        });

      root
        .querySelectorAll<HTMLElement>("[aria-label]")
        .forEach((element) => {
          const label = element.getAttribute("aria-label");
          if (label) {
            element.setAttribute("aria-label", translate(label));
          }
        });
    };

    translateRoot(document.body);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node as Text);
          }
          if (node.nodeType === Node.ELEMENT_NODE) {
            translateRoot(node as Element);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function normalizeText(value: string) {
  return value
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
