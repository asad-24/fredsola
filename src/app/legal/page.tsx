import { ApprovedDocContent } from "@/components/site/approved-doc-content";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PageHero, Section, SiteShell } from "@/components/site/section";

export const metadata = {
  title: "Legal",
};

const legalDocuments = [
  {
    id: "privacy-policy",
    eyebrow: "Privacy",
    title: "National Website Privacy Policy",
    docKey: "privacyPolicy" as const,
  },
  {
    id: "terms-of-use",
    eyebrow: "Terms",
    title: "Website Terms of Use",
    docKey: "termsOfUse" as const,
  },
  {
    id: "licensing-disclosures",
    eyebrow: "Licensing",
    title: "Licensing & Disclosures",
    docKey: "licensingDisclosures" as const,
  },
  {
    id: "educational-content-disclaimer",
    eyebrow: "Educational Notice",
    title: "Educational Content Disclaimer",
    docKey: "educationalDisclaimer" as const,
  },
];

export default function LegalPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Legal"
          title="Privacy, terms, disclosures, and educational notices."
          text="Approved legal and educational notices for the FKSola Financial website."
        />
        <Section>
          <div className="grid gap-8">
            {legalDocuments.map((document) => (
              <article
                key={document.id}
                id={document.id}
                className="scroll-mt-28"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#C9A227]">
                  {document.eyebrow}
                </p>
                <h2 className="mb-5 font-heading text-3xl leading-tight text-[#071629] sm:text-4xl">
                  {document.title}
                </h2>
                <ApprovedDocContent docKey={document.docKey} compact />
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </SiteShell>
  );
}
