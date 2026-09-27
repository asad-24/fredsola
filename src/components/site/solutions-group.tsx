import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

import type { Service } from "@/data/site";
import { LocaleLink } from "./locale-link";
import { TranslatedText } from "./translated-text";

export function SolutionsGroup({
  description,
  index,
  services,
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
            <TranslatedText value={title} />
          </h2>
        </div>
        <p className="max-w-3xl text-[15px] leading-7 text-[#334155] sm:text-base">
          <TranslatedText value={description} />
        </p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, serviceIndex) => {
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
                    <TranslatedText value={service.shortTitle} />
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#334155] transition group-hover:text-white/76">
                    <TranslatedText value={service.summary} />
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A] transition group-hover:text-[#C9A227]">
                    <TranslatedText value="Learn More" />
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
