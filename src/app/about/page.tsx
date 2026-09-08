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
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeading
              eyebrow="Philosophy"
              title="A professional firm with a human way of explaining things."
            />
            <div className="space-y-5 text-base leading-8 text-[#425166] lg:text-lg">
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
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionHeading
              eyebrow="Why FKSola Financial Exists"
              title="Financial education should be accessible to everyone."
            />
            <div className="rounded-[8px] border border-[#C9A227]/55 bg-[#071629] p-5 text-white shadow-xl shadow-[#071629]/18 sm:p-6 lg:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-full border-4 border-[#C9A227] bg-white shadow-lg shadow-black/20 sm:size-28">
                  <Image
                    src="/images/CEO.jpeg"
                    alt="Frederick Solaga, Founder and CEO of FKSola Financial"
                    fill
                    sizes="112px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-heading text-2xl leading-tight text-white sm:text-3xl">
                    Frederick Solaga
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#C9A227]">
                    Founder & CEO, FKSola Financial
                  </p>
                  <p className="mt-5 text-lg font-semibold italic leading-8 text-white/88">
                    “FKSola Financial was created to make financial education and
                    understanding accessible to everyone.”
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-base leading-8 text-white/74">
                <p>
                  For generations, financial education has been taught at the
                  kitchen table—but too often, that table belonged to the
                  wealthy.
                </p>
                <p>
                  It&apos;s where conversations about money, protection, wealth,
                  and the future were shared and passed from one generation to
                  the next.
                </p>
                <p>
                  FKSola Financial was created to change that—to make financial
                  education and understanding accessible to everyone.
                </p>
                <p>
                  We believe education is more than simply having information.
                  It&apos;s about understanding your options, asking better
                  questions, and gaining the confidence to make informed
                  decisions.
                </p>
                <p>
                  We&apos;re building a team of financial professionals who
                  believe in the power of education and understanding and are
                  committed to bringing these important conversations to more
                  families and communities.
                </p>
                <p>
                  Because financial education shouldn&apos;t be a privilege. It
                  should be accessible to everyone.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Accessible education",
                  "Better questions",
                  "Family conversations",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#C9A227] px-4 py-2 text-xs font-bold text-[#071629]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[8px] bg-white p-4 sm:p-5 lg:p-6"
                >
                  <Icon className="size-6 text-[#C9A227]" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-bold text-[#071629]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#334155]">
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
          <div className="mt-7 grid gap-px overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-[#0B1F3A]/10 md:grid-cols-4">
            {approach.map((item) => (
              <div key={item.step} className="bg-white p-4 sm:p-5 lg:p-6">
                <span className="font-heading text-3xl text-[#C9A227] sm:text-4xl">
                  {item.step}
                </span>
                <h2 className="mt-5 text-xl font-bold text-[#071629]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#334155]">
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
