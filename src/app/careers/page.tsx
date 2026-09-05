import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

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

const candidateFit = [
  "You communicate with patience and professionalism.",
  "You care about helping families understand financial decisions.",
  "You are open to learning, licensing, and ongoing development.",
  "You want a career path shaped by service, discipline, and growth.",
];

const careerPath = [
  {
    step: "01",
    title: "Learn the Mission",
    text: "Start with the client-first philosophy, education standards, and expectations for professional conduct.",
  },
  {
    step: "02",
    title: "Build Skill",
    text: "Develop product knowledge, communication habits, and a clear way to guide conversations without pressure.",
  },
  {
    step: "03",
    title: "Serve Families",
    text: "Help people organize questions around protection, planning, and the future with care and clarity.",
  },
];

export default function CareersPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Careers"
          title="A professional opportunity built around education and service."
          text="FKSola Financial welcomes people who want to grow as financial professionals while helping families make informed decisions."
          image="/images/services/careers-financial-professional-opportunity.png"
          imageAlt="Financial professional opportunity with FKSola Financial"
        />
        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              eyebrow="Join the Mission"
              title="Build a career that starts with trust."
              text="The opportunity is designed for people who value education, steady development, and meaningful conversations with families."
            />
            <div className="grid gap-3">
              {candidateFit.map((item, index) => (
                <div
                  key={item}
                  data-stagger
                  style={
                    { "--stagger-delay": `${index * 70}ms` } as CSSProperties
                  }
                  className="motion-card flex gap-3 rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 sm:p-5"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[#C9A227]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-7 text-[#425166] sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section tone="cream">
          <SectionHeading
            eyebrow="Professional Development"
            title="A clear path for growth-minded people."
            text="The focus is not hype. It is preparation, education, support, and the discipline to serve clients well."
          />
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {careerPath.map((item, index) => (
              <article
                key={item.step}
                data-stagger
                style={
                  { "--stagger-delay": `${index * 80}ms` } as CSSProperties
                }
                className="motion-card rounded-[8px] bg-white p-4 sm:p-5 lg:p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A227]">
                  {item.step}
                </p>
                <h2 className="mt-4 text-xl font-bold text-[#071629]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>
        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#C9A227]">
                What We Value
              </p>
              <h2 className="font-heading text-3xl leading-tight text-[#071629] sm:text-4xl lg:text-5xl">
                Professional, teachable, and service-minded.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5F6B7A] sm:text-base lg:leading-8">
                FKSola Financial is looking for people who can grow with care,
                ask strong questions, and help others feel more informed before
                decisions are made.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0B1F3A] px-5 text-sm font-bold text-white transition hover:bg-[#071629]"
              >
                Start a Career Conversation
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {careerValues.map((item, index) => (
                <article
                  key={item.title}
                  data-stagger
                  style={
                    { "--stagger-delay": `${index * 70}ms` } as CSSProperties
                  }
                  className="motion-card rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 sm:p-5 lg:p-6"
                >
                  <h3 className="text-lg font-bold text-[#071629]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>
        <CTASection
          title="Interested in becoming a financial professional?"
          text="Start with a calm conversation about fit, expectations, licensing, and development."
        />
      </main>
      <Footer />
    </SiteShell>
  );
}
