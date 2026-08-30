import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  CTASection,
  PageHero,
  Section,
  SectionHeading,
  SiteShell,
} from "@/components/site/section";
import { careerValues } from "@/data/site";

export const metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Careers"
          title="A professional path for people who want their work to matter."
          text="FKSola Financial is interested in people who value education, personal growth, and helping families think clearly about the future."
        />
        <Section>
          <SectionHeading
            eyebrow="Opportunity"
            title="Build skill, confidence, and a service-minded career."
            text="The careers experience should feel aspirational and professional, focused on development rather than hype."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careerValues.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-7"
              >
                <h2 className="text-xl font-bold text-[#071629]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5F6B7A]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Section>
        <Section tone="cream">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-heading text-5xl leading-tight text-[#071629]">
              For future financial professionals and educators.
            </h2>
            <div className="space-y-6 text-lg leading-9 text-[#425166]">
              <p>
                This is a place for people who want to learn, communicate
                clearly, and help families make thoughtful decisions. The work
                calls for patience, discipline, and care.
              </p>
              <p>
                Approved career details, licensing requirements, and application
                steps can be added as FKSola Financial finalizes its recruiting
                process.
              </p>
            </div>
          </div>
        </Section>
        <CTASection
          title="Interested in the mission?"
          text="Start with a professional conversation about fit, expectations, and development."
        />
      </main>
      <Footer />
    </SiteShell>
  );
}
