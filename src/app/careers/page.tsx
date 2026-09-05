import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { JoinUsForm } from "@/components/site/join-us-form";
import { Logo } from "@/components/site/logo";
import { SiteShell } from "@/components/site/section";

export const metadata = {
  title: "Careers",
};

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

            <JoinUsForm />
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}
