import { partners } from "@/data/site";

export function PartnerMarquee() {
  const partnerLoop = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
      <div className="partner-marquee flex w-max items-center">
        {partnerLoop.map((partner, index) => (
          <div
            key={`${partner}-${index}`}
            className="flex min-h-24 w-64 shrink-0 items-center justify-center border-r border-[#0B1F3A]/10 px-5 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#5F6B7A] transition hover:text-[#071629] sm:w-72 sm:text-sm"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
}
