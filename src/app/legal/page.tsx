import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PageHero, Section, SiteShell } from "@/components/site/section";
import { company } from "@/data/site";

export const metadata = {
  title: "Legal",
};

const legalSections = [
  {
    title: "Privacy Policy Placeholder",
    text: "This section will contain FKSola Financial’s approved privacy policy, including how visitor information is collected, used, stored, and protected.",
  },
  {
    title: "Terms of Use Placeholder",
    text: "This section will contain approved website terms, acceptable use language, intellectual property notices, and visitor responsibilities.",
  },
  {
    title: "Disclosures and Licensing",
    text: `${company.representative}, ${company.role}, NPN ${company.npn}. This website is intended to provide general educational information about financial protection and planning topics. Additional firm disclosures, state availability, carrier relationships, and required compliance language will be added once approved legal text is provided.`,
  },
  {
    title: "Educational Content Notice",
    text: "Website content is intended for general educational purposes and should not be treated as individualized tax, legal, investment, or financial advice.",
  },
];

export default function LegalPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Legal"
          title="Privacy, terms, disclosures, and licensing."
          text="This combined page keeps the 15-page scope while providing a clear place for approved legal language."
        />
        <Section>
          <div className="grid gap-4">
            {legalSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-7"
              >
                <h2 className="text-xl font-bold text-[#071629]">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5F6B7A]">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </SiteShell>
  );
}
