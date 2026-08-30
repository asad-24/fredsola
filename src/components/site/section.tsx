import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}

export function Section({
  children,
  className,
  tone = "white",
  reveal = true,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "cream" | "navy";
  reveal?: boolean;
}) {
  return (
    <section
      data-reveal={reveal ? "" : undefined}
      className={cn(
        "px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28",
        tone === "cream" && "bg-[#F7F4EC]",
        tone === "navy" && "bg-[#071629] text-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-4xl leading-tight text-balance text-[#071629] sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-[#5F6B7A] sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <Section tone="cream" className="py-18 sm:py-24">
      <div className="max-w-4xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">
          {eyebrow}
        </p>
        <h1 className="font-heading text-5xl leading-[1.04] text-balance text-[#071629] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425166]">
          {text}
        </p>
      </div>
    </Section>
  );
}

export function CTASection({
  title = "Start with a thoughtful conversation.",
  text = "Bring your questions, priorities, and concerns. FKSola Financial will help you organize the next step with clarity.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section tone="navy" className="py-16 sm:py-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">
            Conversation First
          </p>
          <h2 className="font-heading text-4xl leading-tight text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70">{text}</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#C9A227] px-6 text-sm font-bold text-[#071629] transition hover:bg-white"
        >
          Schedule a Conversation
        </Link>
      </div>
    </Section>
  );
}
