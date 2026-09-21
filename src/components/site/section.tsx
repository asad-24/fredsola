import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { LocaleLink } from "./locale-link";

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}

export function Section({
  children,
  className,
  id,
  tone = "white",
  reveal = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "cream" | "navy";
  reveal?: boolean;
}) {
  return (
    <section
      id={id}
      data-reveal={reveal ? "" : undefined}
      className={cn(
        "px-4 py-9 sm:px-6 sm:py-10 lg:px-10 lg:py-11",
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
        <p className="mb-3 max-w-full break-words text-[11px] font-bold uppercase leading-5 tracking-[0.14em] text-[#C9A227] sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight text-balance text-[#071629] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {text ? (
        <p className="mt-3 text-[15px] leading-7 text-[#334155] sm:mt-4 sm:text-base lg:text-[17px] lg:leading-8">
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
    <Section tone="cream" className="py-8 sm:py-10 lg:py-11">
      <div
        className={cn(
          "grid gap-6 lg:gap-7",
          image && "items-center lg:grid-cols-[0.85fr_1.15fr]"
        )}
      >
        <div className="max-w-4xl">
          <p className="mb-3 max-w-full break-words text-[11px] font-bold uppercase leading-5 tracking-[0.12em] text-[#C9A227] sm:mb-4 sm:text-xs sm:leading-6 sm:tracking-[0.2em]">
            {eyebrow}
          </p>
          <h1 className="font-heading text-[2.35rem] leading-[1.06] text-balance text-[#071629] sm:text-5xl lg:text-[3.65rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-[#334155] sm:text-lg sm:leading-8">
            {text}
          </p>
        </div>
        {image ? (
          <div className="relative min-h-[12.5rem] overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-white shadow-xl shadow-[#071629]/10 sm:min-h-[17rem] lg:min-h-[21rem]">
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
    <Section tone="navy" className="py-9 sm:py-10 lg:py-11">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-[11px] font-bold uppercase leading-5 tracking-[0.14em] text-[#C9A227] sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
            Conversation First
          </p>
          <h2 className="font-heading text-3xl leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-white/75 sm:mt-4 sm:text-base lg:leading-8">
            {text}
          </p>
        </div>
        <LocaleLink
          href="/contact#schedule"
          className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#C9A227] px-6 text-sm font-bold text-[#071629] transition hover:bg-white"
        >
          Schedule a Conversation
        </LocaleLink>
      </div>
    </Section>
  );
}
