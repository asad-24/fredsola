import { ArrowRight, Clock3 } from "lucide-react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Logo } from "@/components/site/logo";
import { SiteShell } from "@/components/site/section";

export const metadata = {
  title: "Careers",
};

const dateOptions = [
  { day: "Mon", date: "Sep 7" },
  { day: "Tue", date: "Sep 8" },
  { day: "Wed", date: "Sep 9" },
  { day: "Thu", date: "Sep 10" },
  { day: "Mon", date: "Sep 14" },
];

export default function CareersPage() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-1 bg-[#F7F4EC]">
        <section className="relative isolate overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_86%,rgba(201,162,39,0.18),transparent_28rem),radial-gradient(circle_at_82%_12%,rgba(11,31,58,0.08),transparent_24rem)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="max-w-xl">
              <div className="mb-10 inline-flex rounded-[8px] bg-white px-3 py-2 shadow-sm shadow-[#071629]/10">
                <Logo />
              </div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#C9A227]">
                Join the Team
              </p>
              <h1 className="font-heading text-5xl leading-[0.98] text-balance text-[#071629] sm:text-6xl lg:text-7xl">
                Build your next chapter with FKSola.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-8 text-[#5F6B7A] sm:text-lg">
                Tell us a little about yourself, then choose a time to discuss
                the financial professional opportunity.
              </p>
            </div>

            <form className="rounded-[22px] border border-[#0B1F3A]/10 bg-white p-5 shadow-2xl shadow-[#071629]/12 sm:p-7 lg:p-9">
              <p className="text-sm font-bold text-[#C9A227]">Step 1 of 2</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#071629]">
                Tell us about yourself
              </h2>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <CareerField label="First name *" name="firstName" />
                <CareerField label="Last name *" name="lastName" />
                <CareerField label="Email *" name="email" type="email" />
                <CareerField label="Phone *" name="phone" type="tel" />
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-bold text-[#071629]">
                  Do you currently have an active life insurance license? *
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="flex h-13 cursor-pointer items-center gap-3 rounded-[8px] border border-[#0B1F3A]/10 px-4 text-sm font-semibold text-[#071629] transition hover:border-[#C9A227] hover:bg-[#F7F4EC]">
                    <input
                      type="radio"
                      name="licenseStatus"
                      value="licensed"
                      className="size-4 accent-[#0B1F3A]"
                    />
                    Yes, I am licensed
                  </label>
                  <label className="flex h-13 cursor-pointer items-center gap-3 rounded-[8px] border border-[#0B1F3A]/10 px-4 text-sm font-semibold text-[#071629] transition hover:border-[#C9A227] hover:bg-[#F7F4EC]">
                    <input
                      type="radio"
                      name="licenseStatus"
                      value="not-yet"
                      className="size-4 accent-[#0B1F3A]"
                    />
                    Not yet
                  </label>
                </div>
              </fieldset>

              <label className="mt-6 grid gap-2 text-sm font-bold text-[#071629]">
                Anything you would like us to know?{" "}
                <span className="font-normal text-[#5F6B7A]">(optional)</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share any experience, questions, or goals you want to discuss."
                  className="resize-none rounded-[8px] border border-[#0B1F3A]/10 bg-white px-4 py-3 text-sm font-normal leading-7 text-[#071629] outline-none transition placeholder:text-[#5F6B7A]/70 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15"
                />
              </label>

              <div className="my-7 h-px bg-[#0B1F3A]/10" />

              <p className="text-sm font-bold text-[#C9A227]">Step 2 of 2</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#071629]">
                Choose a time
              </h2>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#071629] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#071629]/20">
                <Clock3 className="size-4 text-[#C9A227]" aria-hidden="true" />
                30-minute conversation · Eastern Time
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {dateOptions.map((option) => (
                  <button
                    key={`${option.day}-${option.date}`}
                    type="button"
                    className="rounded-[8px] border border-[#0B1F3A]/10 bg-white px-3 py-3 text-left transition hover:border-[#C9A227] hover:bg-[#F7F4EC]"
                  >
                    <span className="block text-sm font-bold text-[#071629]">
                      {option.day}
                    </span>
                    <span className="mt-1 block text-sm text-[#5F6B7A]">
                      {option.date}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[8px] bg-[#F3F4F6] px-4 py-5 text-center text-sm text-[#5F6B7A]">
                Select a date to see available times.
              </div>

              <button
                type="button"
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-[8px] bg-[#C9A227] px-5 text-sm font-bold text-[#071629] transition hover:bg-[#0B1F3A] hover:text-white"
              >
                Schedule my conversation
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>

              <p className="mt-5 text-center text-xs leading-6 text-[#5F6B7A]">
                By submitting, you agree that FKSola Financial may contact you
                about this opportunity.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}

function CareerField({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#071629]">
      {label}
      <input
        name={name}
        type={type}
        className="h-12 rounded-[8px] border border-[#0B1F3A]/10 bg-white px-4 text-sm font-normal text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15"
      />
    </label>
  );
}
