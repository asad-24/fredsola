import type { ReactNode } from "react";
import Link from "next/link";

import { company, navigation, services } from "@/data/site";

import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-[#071629] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_2fr] lg:px-10">
        <div>
          <div className="inline-flex rounded-[8px] bg-white px-3 py-2 shadow-sm shadow-black/10">
            <Logo />
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Education-first financial conversations for individuals and families
            who want clarity, protection, and a more confident view of tomorrow.
          </p>
          <p className="mt-6 text-xs leading-6 text-white/50">
            FKSola Financial provides educational financial-services
            information and conversation-based guidance. Frederick Solaga,
            Financial Professional, NPN {company.npn}. Tax, legal, and
            investment questions should be reviewed with qualified
            professionals.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          <FooterGroup title="Navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/legal">Legal</Link>
          </FooterGroup>

          <FooterGroup title="Solutions">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/solutions/${service.slug}`}>
                {service.shortTitle}
              </Link>
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/50 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
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
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3 text-sm text-white/70 [&_a]:transition [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}
