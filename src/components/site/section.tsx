import Image from "next/image";
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
        "px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16",
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
      <h2 className="font-heading text-3xl leading-tight text-balance text-[#071629] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm leading-7 text-[#5F6B7A] sm:text-base lg:text-lg lg:leading-8">
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
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <Section tone="cream" className="py-12 sm:py-14 lg:py-16">
      <div
        className={cn(
          "grid gap-8",
          image && "items-center lg:grid-cols-[0.85fr_1.15fr]"
        )}
      >
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#C9A227]">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl leading-[1.06] text-balance text-[#071629] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#425166] sm:text-lg sm:leading-8">
            {text}
          </p>
        </div>
        {image ? (
          <div className="relative min-h-[15rem] overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-white shadow-xl shadow-[#071629]/10 sm:min-h-[20rem] lg:min-h-[26rem]">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        ) : null}
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
    <Section tone="navy" className="py-12 sm:py-14 lg:py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">
            Conversation First
          </p>
          <h2 className="font-heading text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base lg:leading-8">
            {text}
          </p>
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
