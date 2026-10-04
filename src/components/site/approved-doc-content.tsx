"use client";

import { CheckCircle2 } from "lucide-react";

import { approvedDocuments, type ApprovedDocumentKey } from "@/data/approved-content";
import { translations } from "@/data/translations";
import { getLocaleFromPathname } from "@/lib/i18n";
import { useCurrentPathname } from "@/lib/use-current-pathname";

type ParsedSection = {
  title: string;
  paragraphs: string[];
};

const skipLines = new Set([
  "FKSOLA FINANCIAL",
  "FKSola Financial",
  "PAGE TITLE",
  "HERO",
  "CTA",
  "NEXT STEP",
  "[ LEARN MORE ]",
  "[ START A CONVERSATION ]",
]);

export function ApprovedDocContent({
  docKey,
  compact = false,
}: {
  docKey: ApprovedDocumentKey;
  compact?: boolean;
}) {
  const pathname = useCurrentPathname();
  const locale = getLocaleFromPathname(pathname);
  const translate = getTranslator(locale);
  const sections = parseApprovedDocument(approvedDocuments[docKey].text);

  return (
    <div className="grid gap-4" data-no-translate>
      {sections.map((section) => {
        const isDisclosure = /disclosure|disclaimer|notice|terms|privacy/i.test(
          section.title
        );

        return (
          <article
            key={section.title}
            className={`rounded-[8px] border ${
              isDisclosure
                ? "border-[#C9A227]/30 bg-[#F7F4EC]"
                : "border-[#0B1F3A]/10 bg-white"
            } ${compact ? "p-4 sm:p-5" : "p-3.5 sm:p-5 lg:p-6"}`}
          >
            <h2 className="break-words text-lg font-bold leading-snug text-[#071629] sm:text-2xl">
              {translate(formatTitle(section.title))}
            </h2>
            <div className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3">
              {section.paragraphs.map((paragraph, index) => {
                const cleanedParagraph = cleanParagraph(paragraph);
                const translatedParagraph = translate(cleanedParagraph);

                return isListLike(paragraph) ? (
                  <div
                    key={`${section.title}-${paragraph}-${index}`}
                    className="flex gap-3 break-words text-[15px] leading-7 text-[#334155] sm:text-base"
                  >
                    <CheckCircle2
                      className="mt-1 size-4 shrink-0 text-[#C9A227]"
                      aria-hidden="true"
                    />
                    <span>{translatedParagraph}</span>
                  </div>
                ) : (
                  <p
                    key={`${section.title}-${paragraph}-${index}`}
                    className="break-words text-[15px] leading-7 text-[#334155] sm:text-base sm:leading-8"
                  >
                    {translatedParagraph}
                  </p>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function parseApprovedDocument(text: string): ParsedSection[] {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const usableLines = trimDesignerNotes(trimIntroContext(lines));
  const sections: ParsedSection[] = [];
  let current: ParsedSection | null = null;

  for (const line of usableLines) {
    if (shouldSkipLine(line)) {
      continue;
    }

    if (isHeading(line)) {
      if (current && current.paragraphs.length > 0) {
        sections.push(current);
      }
      current = { title: line, paragraphs: [] };
      continue;
    }

    if (!current) {
      current = { title: "Overview", paragraphs: [] };
    }
    current.paragraphs.push(line);
  }

  if (current && current.paragraphs.length > 0) {
    sections.push(current);
  }

  return sections;
}

function trimIntroContext(lines: string[]) {
  const expandedIndex = lines.findIndex((line) =>
    /^EXPANDED .*PAGE$/i.test(line)
  );
  if (expandedIndex >= 0) {
    return lines.slice(expandedIndex + 1);
  }

  const heroIndex = lines.findIndex((line) => line === "HERO");
  if (heroIndex >= 0) {
    let index = heroIndex + 2;
    while (index < lines.length && !isHeading(lines[index])) {
      index += 1;
    }
    return lines.slice(index);
  }

  const firstNumbered = lines.findIndex((line) => /^\d+\.\s+/.test(line));
  if (firstNumbered >= 0) {
    return lines.slice(0, firstNumbered).concat(lines.slice(firstNumbered));
  }

  return lines;
}

function trimDesignerNotes(lines: string[]) {
  const designerNoteIndex = lines.findIndex((line) =>
    /^(DESIGNER NOTE|SOURCE NOTE FOR DESIGNER|SOURCE NOTE FOR DESIGNER \/ COMPLIANCE REVIEW)$/i.test(
      line
    )
  );
  return designerNoteIndex >= 0 ? lines.slice(0, designerNoteIndex) : lines;
}

function shouldSkipLine(line: string) {
  return (
    skipLines.has(line) ||
    /^PAGE \d+/i.test(line) ||
    /^WORKING PAGE \d+/i.test(line) ||
    /^SOLUTION \d+/i.test(line) ||
    /^SOLUTIONS LANDING PAGE/i.test(line) ||
    /^SOLUTIONS \/ INFORMATION LANDING PAGE/i.test(line) ||
    /^EXPANDED .*PAGE$/i.test(line) ||
    /^EDUCATIONAL PAGE/i.test(line) ||
    /^RESOURCE \/ EDUCATIONAL TOPIC/i.test(line) ||
    /^Short description:/i.test(line) ||
    /^Note:/i.test(line) ||
    /^Effective Date:/i.test(line) ||
    /^Last Updated:/i.test(line)
  );
}

function isHeading(line: string) {
  if (/^\d+\.\s+/.test(line)) {
    return true;
  }

  if (line.length > 88 || /[.!?]$/.test(line)) {
    return false;
  }

  const letters = line.replace(/[^A-Za-z]/g, "");
  if (letters.length < 3) {
    return false;
  }

  const uppercaseLetters = letters.replace(/[^A-Z]/g, "");
  return uppercaseLetters.length / letters.length > 0.82;
}

function isListLike(line: string) {
  return (
    /^[-•]/.test(line) ||
    /^[A-Z][A-Za-z\s]+:$/.test(line) ||
    line.length < 80 && !/[.!?]$/.test(line)
  );
}

function cleanParagraph(line: string) {
  return line
    .replace(/^[-•]\s*/, "")
    .replace(/\s*cite.*?/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatTitle(title: string) {
  return title.replace(/^\d+\.\s+/, "");
}

function getTranslator(locale: ReturnType<typeof getLocaleFromPathname>) {
  if (locale === "en") {
    return (value: string) => value;
  }

  const dictionary = translations[locale];
  const normalizedDictionary = new Map(
    Object.entries(dictionary).map(([key, value]) => [normalizeText(key), value])
  );
  const lowercaseDictionary = new Map(
    Object.entries(dictionary).map(([key, value]) => [
      normalizeText(key).toLowerCase(),
      value,
    ])
  );

  return (value: string) => {
    const translated =
      dictionary[value] ??
      normalizedDictionary.get(normalizeText(value)) ??
      lowercaseDictionary.get(normalizeText(value).toLowerCase()) ??
      translateSentenceParts(value, dictionary, normalizedDictionary, lowercaseDictionary) ??
      translateKnownApprovedContent(value, locale) ??
      value;

    return formatTranslation(translated, locale);
  };
}

function translateKnownApprovedContent(
  value: string,
  locale: ReturnType<typeof getLocaleFromPathname>
) {
  const normalized = normalizeText(value).toLowerCase();

  if (locale === "es") {
    if (/^how indexing works$/.test(normalized)) {
      return "CÓMO FUNCIONA LA INDEXACIÓN";
    }
    if (/^caps[:\s-].*maximum.*interest.*credit.*particular method/.test(normalized)) {
      return "TOPES: una tasa máxima de acreditación de intereses bajo un método particular.";
    }
    if (/^participation rates[:\s-].*percentage.*index.*(return|performance).*particular method/.test(normalized)) {
      return "TASAS DE PARTICIPACIÓN: el porcentaje del rendimiento del índice usado bajo un método particular.";
    }
    if (/^(spreads|differentials)[:\s-].*(amount|cantidad).*affect.*interest.*credited/.test(normalized)) {
      return "DIFERENCIALES: una cantidad que puede afectar el interés acreditado bajo ciertos métodos.";
    }
    if (/^policy charges[:\s-].*insurance.*charges.*affect policy values/.test(normalized)) {
      return "CARGOS DE LA PÓLIZA: seguros y otros cargos que afectan los valores de la póliza.";
    }
    if (/^the policy may use an external index as part of an interest/.test(normalized)) {
      return "La póliza puede usar un índice externo como parte de una fórmula de acreditación de intereses.";
    }
    if (/^important elements (can|may) include/.test(normalized)) {
      return "Los elementos importantes pueden incluir:";
    }
    if (/^these features vary/.test(normalized)) {
      return "Estas características varían según la póliza y la compañía aseguradora.";
    }
    if (/^under certain crediting methods.*negative index return/.test(normalized)) {
      return "Bajo ciertos métodos de acreditación, un rendimiento negativo del índice puede resultar en un crédito de índice cero en lugar de un crédito negativo.";
    }
    if (/^that('s| is) an important feature/.test(normalized)) {
      return "Esa es una característica importante.";
    }
    if (/^but (this|it) should not be confused with having no risk/.test(normalized)) {
      return "Pero esto no debe confundirse con no tener riesgo.";
    }
    if (/^policy charges continue/.test(normalized)) {
      return "Los cargos de la póliza continúan. Los préstamos y retiros pueden afectar los valores. Las decisiones de financiamiento y el desempeño de la póliza pueden afectar su sostenibilidad.";
    }
  }

  if (locale === "fr") {
    if (/^how indexing works$/.test(normalized)) {
      return "COMMENT FONCTIONNE L’INDEXATION";
    }
    if (/^caps[:\s-].*maximum.*interest.*credit.*particular method/.test(normalized)) {
      return "PLAFONDS : un taux maximal de crédit d’intérêt selon une méthode particulière.";
    }
    if (/^participation rates[:\s-].*percentage.*index.*(return|performance).*particular method/.test(normalized)) {
      return "TAUX DE PARTICIPATION : le pourcentage du rendement de l’indice utilisé selon une méthode particulière.";
    }
    if (/^(spreads|differentials)[:\s-].*(amount|montant).*affect.*interest.*credited/.test(normalized)) {
      return "ÉCARTS : un montant qui peut affecter les intérêts crédités selon certaines méthodes.";
    }
    if (/^policy charges[:\s-].*insurance.*charges.*affect policy values/.test(normalized)) {
      return "FRAIS DE POLICE : assurance et autres frais qui affectent les valeurs de la police.";
    }
    if (/^the policy may use an external index as part of an interest/.test(normalized)) {
      return "La police peut utiliser un indice externe dans le cadre d’une formule de crédit d’intérêts.";
    }
    if (/^important elements (can|may) include/.test(normalized)) {
      return "Les éléments importants peuvent inclure :";
    }
    if (/^these features vary/.test(normalized)) {
      return "Ces caractéristiques varient selon la police et l’assureur.";
    }
    if (/^under certain crediting methods.*negative index return/.test(normalized)) {
      return "Selon certaines méthodes de crédit, un rendement d’indice négatif peut donner lieu à un crédit d’indice nul plutôt qu’à un crédit négatif.";
    }
    if (/^that('s| is) an important feature/.test(normalized)) {
      return "C’est une caractéristique importante.";
    }
    if (/^but (this|it) should not be confused with having no risk/.test(normalized)) {
      return "Mais cela ne doit pas être confondu avec une absence de risque.";
    }
    if (/^policy charges continue/.test(normalized)) {
      return "Les frais de police continuent. Les prêts et les retraits peuvent affecter les valeurs. Les décisions de financement et le rendement de la police peuvent affecter sa viabilité.";
    }
  }

  return null;
}

function translateSentenceParts(
  value: string,
  dictionary: Record<string, string>,
  normalizedDictionary: Map<string, string>,
  lowercaseDictionary: Map<string, string>
) {
  const parts = value.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  if (!parts || parts.length < 2) {
    return null;
  }

  let translatedAny = false;
  const translated = parts
    .map((part) => {
      const leading = part.match(/^\s*/)?.[0] ?? "";
      const trailing = part.match(/\s*$/)?.[0] ?? "";
      const trimmed = part.trim();
      const normalized = normalizeText(trimmed);
      const translatedPart =
        dictionary[trimmed] ??
        normalizedDictionary.get(normalized) ??
        lowercaseDictionary.get(normalized.toLowerCase());

      if (translatedPart) {
        translatedAny = true;
        return `${leading}${translatedPart}${trailing}`;
      }

      return part;
    })
    .join("");

  return translatedAny ? translated : null;
}

function formatTranslation(
  value: string,
  locale: ReturnType<typeof getLocaleFromPathname>
) {
  const decoded = decodeTextEntities(value);

  if (locale === "es") {
    return decoded.replace(/¿/g, "");
  }

  return decoded;
}

function normalizeText(value: string) {
  return value
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeTextEntities(value: string) {
  return value
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");
}
