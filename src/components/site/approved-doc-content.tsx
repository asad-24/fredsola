import { CheckCircle2 } from "lucide-react";

import { approvedDocuments, type ApprovedDocumentKey } from "@/data/approved-content";

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
  const sections = parseApprovedDocument(approvedDocuments[docKey].text);

  return (
    <div className="grid gap-4">
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
            } ${compact ? "p-4 sm:p-5" : "p-4 sm:p-5 lg:p-6"}`}
          >
            <h2 className="text-xl font-bold leading-snug text-[#071629] sm:text-2xl">
              {formatTitle(section.title)}
            </h2>
            <div className="mt-4 grid gap-3">
              {section.paragraphs.map((paragraph, index) =>
                isListLike(paragraph) ? (
                  <div
                    key={`${section.title}-${paragraph}-${index}`}
                    className="flex gap-3 text-[15px] leading-7 text-[#334155] sm:text-base"
                  >
                    <CheckCircle2
                      className="mt-1 size-4 shrink-0 text-[#C9A227]"
                      aria-hidden="true"
                    />
                    <span>{cleanParagraph(paragraph)}</span>
                  </div>
                ) : (
                  <p
                    key={`${section.title}-${paragraph}-${index}`}
                    className="text-[15px] leading-7 text-[#334155] sm:text-base sm:leading-8"
                  >
                    {cleanParagraph(paragraph)}
                  </p>
                )
              )}
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
    /^DESIGNER NOTE$/i.test(line)
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
