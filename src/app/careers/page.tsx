import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  GraduationCap,
  type LucideIcon,
  PlayCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { JoinUsForm } from "@/components/site/join-us-form";
import { LocaleLink } from "@/components/site/locale-link";
import { Logo } from "@/components/site/logo";
import { Section, SectionHeading, SiteShell } from "@/components/site/section";

export const metadata = {
  title: "Career / Business Opportunity",
  description:
    "Learn about the independent business opportunity at FKSola Financial.",
};

const businessInvolves = [
  "Educate and serve individuals and families",
  "Develop your own client base",
  "Build professional relationships",
  "Participate in referral and revenue-sharing opportunities",
  "Develop and mentor other licensed professionals",
  "Build a team and grow an organization",
];

const audienceTraits = [
  "Are open-minded and coachable",
  "Are willing to learn",
  "Value honesty and integrity",
  "Are willing to work and build",
  "Want to develop professionally and personally",
  "Have an interest in helping people",
  "Want flexibility to build around career, family, and other responsibilities",
];

const gettingStartedSteps = [
  {
    title: "Registration & Background Check",
    text: "Complete the required registration and background-check process.",
  },
  {
    title: "State Licensing Requirements",
    text: "Complete the licensing requirements for your state and applicable line of authority. Where pre-licensing education is required, complete the required courses.",
  },
  {
    title: "State Examination & License",
    text: "Complete the required examination, where applicable, and obtain the appropriate license.",
  },
  {
    title: "Training & Coaching",
    text: "Complete the required business training and participate in ongoing coaching and development.",
  },
];

const businessReasons = [
  "Create an additional source of income",
  "Build valuable financial and business skills",
  "Help families become more financially informed",
  "Create flexibility around work and family",
  "Develop leadership and entrepreneurial skills",
  "Build something you own",
];

export default function CareersPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1 bg-white">
        <section className="relative isolate overflow-hidden bg-[#F7F4EC] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_82%,rgba(201,162,39,0.16),transparent_26rem),radial-gradient(circle_at_88%_12%,rgba(11,31,58,0.08),transparent_24rem)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-7xl gap-6 lg:gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex rounded-[8px] bg-white px-3 py-2 shadow-sm shadow-[#071629]/10 sm:mb-8">
                <Logo />
              </div>
              <p className="mb-3 text-[11px] font-bold uppercase leading-5 tracking-[0.14em] text-[#C9A227] sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
                Career / Business Opportunity
              </p>
              <h1 className="font-heading text-[2.35rem] leading-[1.04] text-balance text-[#071629] sm:text-5xl lg:text-[3.65rem]">
                Build a Business. Make an Impact.
              </h1>
              <p className="mt-4 max-w-xl text-xl font-bold leading-tight text-[#071629] sm:mt-5 sm:text-3xl">
                This is not a job. It&apos;s a business.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#334155] sm:text-lg">
                At FKSola Financial, we believe financial education should be
                accessible to everyone. We&apos;re building a network of
                financial professionals who can bring that education to more
                families and communities.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <LocaleLink
                  href="#business-video"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C9A227] px-6 text-sm font-bold text-[#071629] transition hover:bg-[#0B1F3A] hover:text-white"
                >
                  Watch the 3-minute video
                  <PlayCircle className="size-4" aria-hidden="true" />
                </LocaleLink>
                <LocaleLink
                  href="#career-form"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#0B1F3A]/20 bg-white px-6 text-sm font-bold text-[#071629] transition hover:border-[#C9A227] hover:bg-white"
                >
                  Schedule a Conversation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </LocaleLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-white shadow-2xl shadow-[#071629]/12">
              <Image
                src="/images/services/careers-financial-professional-opportunity.png"
                alt="Financial professional opportunity conversation"
                width={1536}
                height={1024}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <SectionHeading
              eyebrow="Opportunity"
              title="Develop as a financial professional while building independently."
              text="FKSola Financial develops financial professionals who educate individuals and families while building an independent business in the financial-services industry."
            />
            <div className="rounded-[8px] border border-[#0B1F3A]/10 bg-[#071629] p-5 text-white shadow-xl shadow-[#071629]/12 sm:p-6 lg:p-7">
              <p className="text-lg leading-8 text-white/82">
                You can start part-time or full-time, allowing you to build
                around your existing career, family, or other responsibilities.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {businessInvolves.map((item) => (
                  <IconLine key={item} text={item} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section tone="cream">
          <div className="grid gap-5 lg:grid-cols-2">
            <InfoPanel
              eyebrow="Who Is It For?"
              title="Adults 18 and older who are willing to learn and build."
              icon={Users}
            >
              <div className="grid gap-3">
                {audienceTraits.map((item) => (
                  <IconLine key={item} text={item} tone="light" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-[#334155]">
                You do not need a financial background. You do need a
                willingness to learn, accept coaching, and build.
              </p>
            </InfoPanel>

            <InfoPanel
              eyebrow="What You Should Understand"
              title="This is an independent business opportunity, not employment."
              icon={ShieldCheck}
            >
              <p className="text-base leading-8 text-[#334155]">
                You are responsible for building and managing your business,
                including developing clients, managing your time, completing
                licensing and training requirements, maintaining required
                licenses, following compliance requirements, and managing your
                business expenses.
              </p>
              <p className="mt-4 text-base leading-8 text-[#334155]">
                There is no guaranteed income. Results depend on individual
                effort, skills, business development, and other factors.
              </p>
            </InfoPanel>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Getting Started"
            title="A regulated business requires the right steps."
            text="Licensing requirements are state-specific, and required licensing must be completed before advising clients or performing activities that require a license."
          />
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gettingStartedSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 shadow-sm shadow-[#071629]/5 sm:p-5"
              >
                <span className="font-heading text-4xl text-[#C9A227]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 text-lg font-bold leading-snug text-[#071629]">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#334155]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section tone="navy">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="mb-3 text-[11px] font-bold uppercase leading-5 tracking-[0.14em] text-[#C9A227] sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
                Training & Compensation
              </p>
              <h2 className="font-heading text-3xl leading-tight text-balance text-white sm:text-4xl lg:text-[2.75rem]">
                In business for yourself, not by yourself.
              </h2>
            </div>
            <div className="grid gap-4 lg:col-span-2 lg:grid-cols-2">
              <DarkPanel
                icon={GraduationCap}
                title="Training & Coaching"
                text="You will receive comprehensive training and ongoing coaching, from the fundamentals of the business to developing clients, building relationships, and growing your organization."
              />
              <DarkPanel
                icon={BadgeDollarSign}
                title="Referral & Revenue Sharing"
                text="Referral and revenue-sharing opportunities are part of the business model. To receive compensation through these activities, you must be properly licensed and meet all applicable licensing and regulatory requirements."
              />
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionHeading
              eyebrow="Business Cost"
              title="What does it cost?"
              text="There is an initial cost to start the business."
            />
            <div className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-5 shadow-xl shadow-[#071629]/6 sm:p-6">
              <p className="text-base leading-8 text-[#334155] lg:text-lg">
                Startup expenses can include registration, licensing
                requirements, examination, background check, and other business
                expenses. All applicable costs are explained before you begin.
              </p>
            </div>
          </div>
        </Section>

        <Section tone="cream">
          <SectionHeading
            eyebrow="Why Build This Business?"
            title="Learn. Grow. Build."
            text="The opportunity is designed for people who want to grow personally, serve families, and build something with discipline and care."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessReasons.map((item) => (
              <article
                key={item}
                className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 sm:p-5"
              >
                <CheckCircle2 className="size-5 text-[#C9A227]" aria-hidden="true" />
                <p className="mt-4 text-base font-semibold leading-7 text-[#071629]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="business-video">
          <div className="grid gap-6 rounded-[8px] border border-[#C9A227]/50 bg-[#071629] p-5 text-white shadow-2xl shadow-[#071629]/14 sm:p-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:p-7">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase leading-5 tracking-[0.14em] text-[#C9A227] sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
                Ready to Learn More?
              </p>
              <h2 className="font-heading text-3xl leading-tight text-balance text-white sm:text-4xl lg:text-[2.75rem]">
                Watch the business-opportunity video.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/74">
                Watch the 3-minute overview to learn more about the
                opportunity, how the business works, and what it takes to get
                started.
              </p>
            </div>
            <div className="flex min-h-52 items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.06] p-5 text-center sm:min-h-60 sm:p-6">
              <div>
                <PlayCircle
                  className="mx-auto size-14 text-[#C9A227]"
                  aria-hidden="true"
                />
                <p className="mt-4 text-xl font-bold text-white">
                  3-minute business-opportunity video
                </p>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  The final video can be added here once production is complete.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="career-form" tone="cream">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionHeading
              eyebrow="Start the Conversation"
              title="Tell us a little about yourself."
              text="Use the form to share your information and choose a time to discuss the financial professional opportunity."
            />
            <JoinUsForm />
          </div>
        </Section>
      </main>
      <Footer />
    </SiteShell>
  );
}

function IconLine({
  text,
  tone = "dark",
}: {
  text: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex gap-3">
      <CheckCircle2
        className={`mt-1 size-4 shrink-0 ${
          tone === "dark" ? "text-[#C9A227]" : "text-[#0B1F3A]"
        }`}
        aria-hidden="true"
      />
      <p
        className={`text-sm leading-7 ${
          tone === "dark" ? "text-white/76" : "text-[#334155]"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function InfoPanel({
  children,
  eyebrow,
  icon: Icon,
  title,
}: {
  children: ReactNode;
  eyebrow: string;
  icon: LucideIcon;
  title: string;
}) {
  return (
    <article className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-5 shadow-sm shadow-[#071629]/5 sm:p-6">
      <Icon className="size-6 text-[#C9A227]" aria-hidden="true" />
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-3xl leading-tight text-[#071629] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </article>
  );
}

function DarkPanel({
  icon: Icon,
  text,
  title,
}: {
  icon: LucideIcon;
  text: string;
  title: string;
}) {
  return (
    <article className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5 sm:p-6">
      <Icon className="size-6 text-[#C9A227]" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
    </article>
  );
}
