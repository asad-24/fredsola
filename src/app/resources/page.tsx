import { ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  CTASection,
  PageHero,
  Section,
  SiteShell,
} from "@/components/site/section";
import { resources } from "@/data/site";

export const metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Resources"
          title="Clear financial education for better conversations."
          text="These original placeholder resources establish a polished education area ready for approved articles, guides, and learning tools."
        />
        <Section>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="group rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 transition hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-xl hover:shadow-[#071629]/8 sm:p-5 lg:p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A227]">
                  {resource.category}
                </p>
                <h2 className="mt-4 text-xl font-bold leading-snug text-[#071629]">
                  {resource.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5F6B7A]">
                  {resource.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A]">
                  Read More
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </article>
            ))}
          </div>
        </Section>
        <CTASection
          title="Have a question after reading?"
          text="Education becomes more useful when it connects to your own goals and concerns."
        />
      </main>
      <Footer />
    </SiteShell>
  );
}
