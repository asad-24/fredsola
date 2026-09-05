import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PageHero, Section, SiteShell } from "@/components/site/section";
import { company } from "@/data/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Schedule a thoughtful conversation."
          text="Reach out with questions about protection, planning, education, careers, or where to begin."
        />
        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="font-heading text-3xl text-[#071629] sm:text-4xl">
                Contact Information
              </h2>
              <div className="mt-5 border-l-2 border-[#C9A227] pl-4">
                <p className="font-heading text-2xl text-[#071629] sm:text-3xl">
                  {company.representative}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
                  {company.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">
                  NPN: {company.npn}
                </p>
              </div>
              <div className="mt-6 grid gap-4">
                <ContactItem icon={Mail} label="Email" value={company.email} />
                <ContactItem icon={Phone} label="Phone" value={company.phone} />
                <ContactItem
                  icon={MapPin}
                  label="Main Office"
                  value={company.address}
                />
                <ContactItem
                  icon={BadgeCheck}
                  label="NPN"
                  value={company.npn}
                />
              </div>
              <div className="mt-7 rounded-[8px] bg-[#F7F4EC] p-4 sm:p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A227]">
                  Appointment Option
                </p>
                <p className="mt-4 text-sm leading-7 text-[#425166]">
                  Calendar booking can be connected here when the preferred
                  scheduling link is available.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </SiteShell>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-white">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-bold text-[#071629]">{label}</p>
        <p className="mt-1 text-sm leading-7 text-[#5F6B7A]">{value}</p>
      </div>
    </div>
  );
}
