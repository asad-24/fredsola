import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BookOpen, Sprout } from "lucide-react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  CTASection,
  Section,
  SectionHeading,
  SiteShell,
} from "@/components/site/section";
import { PartnerMarquee } from "@/components/site/partner-marquee";
import { ServiceGrid } from "@/components/site/service-grid";
import {
  approach,
  philosophy,
  resources,
  services,
  testimonials,
} from "@/data/site";
 bu
const heroSignals = [
  {
    Icon: BookOpen,
    label: "Education",
    className: "right-[7%] bottom-[10%] hidden 2xl:block",
    delay: "-2.6s",
    duration: "10s",
  },
  {
    Icon: Sprout,
    label: "Future",
    className: "right-[7%] top-[10%] hidden xl:block",
    delay: "-6s",
    duration: "12s",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1">
        <section className="hero-stage relative isolate overflow-hidden bg-[#071629] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
          <div className="hero-grid" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0">
            {heroSignals.map(({ Icon, label, className, delay, duration }) => (
              <div
                key={label}
                className={`hero-float absolute ${className}`}
                style={
                  {
                    "--float-delay": delay,
                    "--float-duration": duration,
                  } as CSSProperties
                }
              >
                <div className="hero-float-inner">
                  <Icon className="size-5 text-[#C9A227]" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-2xl">
              <p
                className="hero-enter mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227] backdrop-blur"
                style={{ "--hero-delay": "80ms" } as CSSProperties}
              >
                <span className="size-1.5 rounded-full bg-[#C9A227]" />
                FKSola Financial
              </p>
              <h1
                className="hero-enter font-heading text-6xl leading-[0.98] text-balance text-white sm:text-7xl lg:text-8xl"
                style={{ "--hero-delay": "180ms" } as CSSProperties}
              >
                Building a Better Financial Future
              </h1>
              <p
                className="hero-enter mt-7 max-w-xl text-lg leading-8 text-white/75"
                style={{ "--hero-delay": "300ms" } as CSSProperties}
              >
                Helping individuals and families make informed financial
                decisions, protect what matters most, and prepare for tomorrow.
              </p>
              <div
                className="hero-enter mt-10 flex flex-col gap-4 sm:flex-row"
                style={{ "--hero-delay": "280ms" } as CSSProperties}
              >
                <Link
                  href="/contact"
                  className="motion-card inline-flex h-12 items-center justify-center rounded-full bg-[#C9A227] px-6 text-sm font-bold text-[#071629] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Schedule a Conversation
                </Link>
                <Link
                  href="/solutions"
                  className="motion-card inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-6 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-[#C9A227] hover:bg-white/15"
                >
                  Explore Our Solutions
                </Link>
              </div>

              <div
                className="hero-enter mt-9 grid gap-3 sm:grid-cols-3"
                style={{ "--hero-delay": "360ms" } as CSSProperties}
              >
                {[
                  "Education-first",
                  "Family protection",
                  "Retirement",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[8px] border border-white/10 bg-white/[0.07] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/78 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-image-enter relative">
              <div className="hero-corner hero-corner-top" aria-hidden="true" />
              <div
                className="hero-enter absolute -bottom-6 left-5 z-10 hidden max-w-xs rounded-[8px] border border-white/10 bg-[#071629]/85 p-5 text-white shadow-2xl shadow-black/25 backdrop-blur-xl sm:block"
                style={{ "--hero-delay": "440ms" } as CSSProperties}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A227]">
                  Conversation First
                </p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Calm guidance for protection, planning, and prepared decisions.
                </p>
              </div>
              <div className="overflow-hidden rounded-[8px] border border-white/10 shadow-2xl shadow-black/25">
                <Image
                  data-parallax
                  src="/images/fksola-hero-consultation.png"
                  alt="A refined financial planning conversation at a navy desk"
                  width={1536}
                  height={1024}
                  priority
                  className="motion-media aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="hero-corner hero-corner-bottom" aria-hidden="true" />
            </div>
          </div>
        </section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Introduction"
              title="A calmer way to approach important financial decisions."
            />
            <p className="text-lg leading-9 text-[#425166]">
              FKSola Financial helps individuals and families explore protection,
              planning, retirement, education, and legacy questions with clarity.
              The work begins with listening, continues through education, and
              moves forward only when the next step makes sense.
            </p>
          </div>
        </Section>

        <Section tone="cream">
          <SectionHeading
            eyebrow="Why FKSola"
            title="Guidance built around clarity, not pressure."
            text="The firm’s philosophy is simple: help people understand the choices in front of them and prepare with confidence."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-[#0B1F3A]/10 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-stagger
                  style={{ "--stagger-delay": `${index * 80}ms` } as CSSProperties}
                  className="bg-[#F7F4EC] p-7"
                >
                  <Icon className="size-6 text-[#C9A227]" aria-hidden="true" />
                  <h3 className="mt-8 text-xl font-bold text-[#071629]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Solutions"
              title="Financial areas families can explore with FKSola."
              text="Each conversation is designed to educate first, then help evaluate the next appropriate step."
            />
            <Link
              href="/solutions"
              className="text-sm font-bold text-[#0B1F3A] hover:underline"
            >
              View all solutions
            </Link>
          </div>
          <ServiceGrid services={services} />
        </Section>

        <Section tone="navy">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">
                Our Approach
              </p>
              <h2 className="font-heading text-5xl leading-tight text-balance sm:text-6xl">
                Understand first. Move forward when ready.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:grid-cols-2">
              {approach.map((item, index) => (
                <div
                  key={item.step}
                  data-stagger
                  style={{ "--stagger-delay": `${index * 80}ms` } as CSSProperties}
                  className="bg-[#071629] p-7"
                >
                  <span className="font-heading text-4xl text-[#C9A227]">
                    {item.step}
                  </span>
                  <h3 className="mt-8 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About"
                title="Professional guidance with a human voice."
                text="FKSola Financial is shaped around education-first conversations. The goal is to help people feel more organized, more informed, and more confident about the choices ahead."
              />
              <Link
                href="/about"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-[#0B1F3A]/20 px-6 text-sm font-bold text-[#071629] transition hover:border-[#C9A227] hover:bg-[#F7F4EC]"
              >
                Learn More
              </Link>
            </div>
            <div className="border-l-2 border-[#C9A227] pl-8">
              <div className="mb-8 overflow-hidden rounded-[8px] shadow-2xl shadow-[#071629]/12">
                <Image
                  data-parallax
                  src="/images/fksola-about-education.png"
                  alt="A calm financial education conversation at a refined planning table"
                  width={1536}
                  height={1024}
                  className="motion-media aspect-[16/10] w-full object-cover"
                />
              </div>
              <p className="font-heading text-4xl leading-tight text-[#071629]">
                “The best financial conversation should leave people clearer
                than when they arrived.”
              </p>
            </div>
          </div>
        </Section>

        <Section tone="cream">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Resources"
              title="Education that supports better questions."
              text="A clean resource area helps visitors learn before they decide."
            />
            <Link
              href="/resources"
              className="text-sm font-bold text-[#0B1F3A] hover:underline"
            >
              Browse resources
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {resources.slice(0, 3).map((resource, index) => (
              <article
                key={resource.title}
                data-stagger
                style={{ "--stagger-delay": `${index * 80}ms` } as CSSProperties}
                className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A227]">
                  {resource.category}
                </p>
                <h3 className="mt-5 text-xl font-bold text-[#071629]">
                  {resource.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">
                  {resource.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Testimonials"
            title="Simple, authentic reflections."
            text="Placeholder testimonials keep the layout ready for approved client quotes."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <figure
                key={item.name}
                data-stagger
                style={{ "--stagger-delay": `${index * 80}ms` } as CSSProperties}
                className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-6"
              >
                <blockquote className="text-lg leading-8 text-[#071629]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm font-semibold text-[#5F6B7A]">
                  {item.name} · {item.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section tone="cream" className="py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">
                Our Partners
              </p>
              <h2 className="mt-4 font-heading text-4xl text-[#071629]">
                Professional relationships, thoughtfully presented.
              </h2>
            </div>
            <PartnerMarquee />
          </div>
        </Section>

        <CTASection />
      </main>
      <Footer />
    </SiteShell>
  );
}
