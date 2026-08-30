import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  CTASection,
  PageHero,
  Section,
  SiteShell,
} from "@/components/site/section";
import { ServiceGrid } from "@/components/site/service-grid";
import { services } from "@/data/site";

export const metadata = {
  title: "Solutions",
};

export default function SolutionsPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Solutions"
          title="Explore financial areas with an education-first guide."
          text="FKSola Financial helps clients review protection, planning, retirement, education, and legacy questions without pressure."
        />
        <Section>
          <ServiceGrid services={services} />
        </Section>
        <CTASection
          title="Not sure where to begin?"
          text="Start with the question that feels most important today. The conversation can help organize the rest."
        />
      </main>
      <Footer />
    </SiteShell>
  );
}
