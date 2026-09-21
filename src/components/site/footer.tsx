import type { ReactNode } from "react";

import { company, navigation, services } from "@/data/site";

import { LocaleLink } from "./locale-link";

export function Footer() {
  return (
    <footer className="bg-[#071629] text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-9 sm:px-6 sm:py-10 lg:grid-cols-[1.2fr_2fr] lg:px-10 lg:py-12">
        <div>
          <p className="max-w-md text-sm leading-7 text-white/70">
            Education-first financial conversations for individuals and families
            who want clarity, protection, and a more confident view of tomorrow.
          </p>
          <p className="mt-5 text-xs leading-6 text-white/50">
            FKSola Financial provides educational financial-services
            information and conversation-based guidance. Frederick Solaga,
            Financial Professional, NPN {company.npn}. Tax, legal, and
            investment questions should be reviewed with qualified
            professionals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <FooterGroup title="Navigation">
            {navigation.map((item) => (
              <LocaleLink key={item.href} href={item.href}>
                {item.label}
              </LocaleLink>
            ))}
            <LocaleLink href="/legal">Legal</LocaleLink>
          </FooterGroup>

          <FooterGroup title="Solutions">
            {services.slice(0, 6).map((service) => (
              <LocaleLink key={service.slug} href={`/solutions/${service.slug}`}>
                {service.shortTitle}
              </LocaleLink>
            ))}
          </FooterGroup>

          <FooterGroup title="Contact">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:${company.phone.replace(/[^0-9]/g, "")}`}>
              {company.phone}
            </a>
            <span>{company.address}</span>
            <span>NPN: {company.npn}</span>
            <span>{company.socialStatus}</span>
          </FooterGroup>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/50 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <span>© 2026 FKSola Financial. All rights reserved.</span>
          <span>Privacy Policy / Terms / Required Disclosures</span>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[11px] font-semibold uppercase leading-5 tracking-[0.14em] text-[#C9A227] sm:text-xs sm:tracking-[0.2em]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3 text-sm text-white/70 [&_a]:transition [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}
