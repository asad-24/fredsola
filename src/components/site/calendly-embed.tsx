"use client";

import Script from "next/script";

export function CalendlyEmbed() {
  const calendlyUrl = getCalendlyUrl();

  return (
    <div className="overflow-hidden rounded-[8px] border border-[#0B1F3A]/10 bg-white shadow-xl shadow-[#071629]/8">
      {calendlyUrl ? (
        <>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
          <div
            className="calendly-inline-widget min-h-[42rem]"
            data-url={calendlyUrl}
          />
        </>
      ) : (
        <div className="p-5 sm:p-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A227]">
            Calendar Booking
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[#071629]">
            Calendly is ready to connect.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#334155] sm:text-base">
            Add Fred&apos;s Calendly event URL to{" "}
            <span className="font-semibold">NEXT_PUBLIC_CALENDLY_URL</span> and
            this area will display live available dates and times.
          </p>
        </div>
      )}
    </div>
  );
}

function getCalendlyUrl() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

  if (!url || url.includes("your-event")) {
    return "";
  }

  return url;
}
