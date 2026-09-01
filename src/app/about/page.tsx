import Image from "next/image";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  CTASection,
  PageHero,
  Section,
  SectionHeading,
  SiteShell,
} from "@/components/site/section";
import { approach, philosophy } from "@/data/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="About FKSola"
          title="Financial guidance shaped by education, care, and clarity."
          text="FKSola Financial helps individuals and families approach important financial choices with calm, organized conversations."
        />
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeading
              eyebrow="Philosophy"
              title="A professional firm with a human way of explaining things."
            />
            <div className="space-y-7 text-lg leading-9 text-[#425166]">
              <p>
                FKSola Financial exists for people who want to understand their
                options before making financial decisions. The firm’s role is to
                listen, educate, and help families think clearly about
                protection, preparation, and long-term priorities.
              </p>
              <p>
                Every conversation begins with the client’s goals and concerns.
                From there, the work is to explain financial concepts in plain
                language and help evaluate strategies that may fit the
                situation.
              </p>
              <div className="overflow-hidden rounded-[8px] shadow-2xl shadow-[#071629]/12">
                <Image
                  data-parallax
                  src="/images/fksola-about-education.png"
                  alt="A calm financial education conversation at a refined planning table"
                  width={1536}
                  height={1024}
                  className="motion-media aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Section>
        <Section tone="cream">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-[8px] bg-white p-7">
                  <Icon className="size-6 text-[#C9A227]" aria-hidden="true" />
                  <h2 className="mt-8 text-xl font-bold text-[#071629]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>
        <Section>
          <SectionHeading
            eyebrow="How We Work"
            title="A steady process for decisions that deserve attention."
            text="The process is intentionally simple so the conversation stays focused on understanding, education, and next steps."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-[#0B1F3A]/10 md:grid-cols-4">
            {approach.map((item) => (
              <div key={item.step} className="bg-white p-7">
                <span className="font-heading text-4xl text-[#C9A227]">
                  {item.step}
                </span>
                <h2 className="mt-8 text-xl font-bold text-[#071629]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <CTASection />
      </main>
      <Footer />
    </SiteShell>
  );
}
