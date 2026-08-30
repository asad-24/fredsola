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
  const visibleServices = typeof limit === "number" ? services.slice(0, limit) : services;

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
            className="motion-card group rounded-[8px] border border-[#0B1F3A]/10 bg-white p-6 hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-xl hover:shadow-[#071629]/8"
          >
            <Icon className="size-6 text-[#C9A227]" aria-hidden="true" />
            <h3 className="mt-8 text-lg font-bold text-[#071629]">
              {service.shortTitle}
            </h3>
            <p className="mt-3 min-h-24 text-sm leading-7 text-[#5F6B7A]">
              {service.summary}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A]">
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
