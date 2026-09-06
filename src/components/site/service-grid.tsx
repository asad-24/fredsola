import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

import type { Service } from "@/data/site";

export function ServiceGrid({
  services,
  limit,
}: {
  services: Service[];
  limit?: number;
}) {
  const visibleServices =
    typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {visibleServices.map((service, index) => {
        const Icon = service.icon;

        return (
          <Link
            key={service.slug}
            href={`/solutions/${service.slug}`}
            data-stagger
            style={{ "--stagger-delay": `${index * 70}ms` } as CSSProperties}
            className="motion-card group relative overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 hover:-translate-y-1 hover:border-[#C9A227]/70 hover:bg-[#F7F4EC] hover:shadow-xl hover:shadow-[#071629]/8 sm:p-5 lg:p-6"
          >
            <span
              className="absolute inset-x-0 top-0 h-1 bg-[#C9A227] opacity-0 transition group-hover:opacity-100"
              aria-hidden="true"
            />
            <span className="flex size-11 items-center justify-center rounded-full bg-[#F7F4EC] text-[#C9A227] transition group-hover:bg-[#0B1F3A] group-hover:text-white">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-[#071629]">
              {service.shortTitle}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-[#334155] sm:text-sm">
              {service.summary}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A]">
              Learn More
              <ArrowUpRight
                className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
