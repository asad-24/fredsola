import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { LocaleLink } from "@/components/site/locale-link";
import {
  CTASection,
  PageHero,
  Section,
  SiteShell,
} from "@/components/site/section";
import { services, type Service } from "@/data/site";

export const metadata = {
  title: "Solutions",
};

const solutionGroups = [
  {
    title: "Protect",
    description:
      "Explore protection strategies for income, family responsibilities, health events, home obligations, and final expenses.",
    slugs: [
      "life-insurance",
      "indexed-universal-life-living-benefits",
      "income-protection-planning",
      "mortgage-protection",
      "final-expense",
    ],
  },
  {
    title: "Prepare",
    description:
      "Review planning conversations for retirement income, annuities, financial gaps, and tax-aware decisions.",
    slugs: [
      "retirement-income-planning",
      "fixed-index-annuities",
      "financial-gap-analysis",
      "tax-efficient-planning",
    ],
  },
  {
    title: "Build",
    description:
      "Organize long-term planning questions around education, family legacy, and estate or probate considerations.",
    slugs: ["college-planning", "legacy-planning", "estate-probate-planning"],
  },
  {
    title: "Understand",
    description:
      "Clarify contract features and policy language before deciding whether a strategy deserves consideration.",
    slugs: ["return-of-premium"],
  },
] as const;

function getGroupedServices(slugs: readonly string[]) {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
}

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
        <Section className="py-8 sm:py-9 lg:py-10">
          <div className="grid gap-5">
            {solutionGroups.map((group, groupIndex) => (
              <SolutionGroup
                key={group.title}
                title={group.title}
                description={group.description}
                services={getGroupedServices(group.slugs)}
                index={groupIndex}
              />
            ))}
          </div>
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

function SolutionGroup({
  description,
  index,
  services: groupServices,
  title,
}: {
  description: string;
  index: number;
  services: Service[];
  title: string;
}) {
  return (
    <section
      data-reveal
      className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 shadow-sm shadow-[#071629]/5 sm:p-5 lg:p-6"
    >
      <div className="grid gap-3 border-b border-[#0B1F3A]/10 pb-4 lg:grid-cols-[0.32fr_0.68fr] lg:items-end">
        <div>
          <p className="text-[11px] font-bold uppercase leading-5 tracking-[0.14em] text-[#C9A227] sm:text-xs sm:tracking-[0.22em]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-2 font-heading text-3xl leading-tight text-[#071629] sm:text-4xl">
            {title}
          </h2>
        </div>
        <p className="max-w-3xl text-[15px] leading-7 text-[#334155] sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {groupServices.map((service, serviceIndex) => {
          const Icon = service.icon;

          return (
            <LocaleLink
              key={service.slug}
              href={`/solutions/${service.slug}`}
              data-stagger
              style={
                { "--stagger-delay": `${serviceIndex * 70}ms` } as CSSProperties
              }
              className="motion-card group relative min-h-full overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-[#F7F4EC]/45 p-4 transition hover:-translate-y-1 hover:border-[#C9A227]/70 hover:bg-[#0B1F3A] hover:shadow-xl hover:shadow-[#071629]/10 sm:p-5"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 bg-[#C9A227] opacity-0 transition group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#C9A227] shadow-sm shadow-[#071629]/5 transition group-hover:bg-[#C9A227] group-hover:text-[#071629]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-snug text-[#071629] transition group-hover:text-white">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#334155] transition group-hover:text-white/76">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A] transition group-hover:text-[#C9A227]">
                    Learn More
                    <ArrowUpRight
                      className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </LocaleLink>
          );
        })}
      </div>
    </section>
  );
}
