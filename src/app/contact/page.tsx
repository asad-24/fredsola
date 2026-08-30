import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";

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
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="font-heading text-4xl text-[#071629]">
                Contact Information
              </h2>
              <div className="mt-8 grid gap-5">
                <ContactItem icon={Mail} label="Email" value={company.email} />
                <ContactItem icon={Phone} label="Phone" value={company.phone} />
                <ContactItem
                  icon={MapPin}
                  label="Location"
                  value={company.location}
                />
              </div>
              <div className="mt-10 rounded-[8px] bg-[#F7F4EC] p-6">
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
    <div className="flex gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-white">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-bold text-[#071629]">{label}</p>
        <p className="mt-1 text-sm leading-7 text-[#5F6B7A]">{value}</p>
      </div>
    </div>
  );
}
