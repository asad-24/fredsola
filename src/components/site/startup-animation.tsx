"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function StartupAnimation() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    document.documentElement.dataset.startup = "loading";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.dataset.startup = "done";
      return;
    }

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const heroTimer = window.setTimeout(() => {
      document.documentElement.dataset.startup = "done";
    }, 2920);

    const timer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    }, 3600);

    return () => {
      window.clearTimeout(heroTimer);
      window.clearTimeout(timer);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="startup-screen" aria-label="FKSola Financial loading">
      <div className="startup-content">
        <div className="startup-words" aria-hidden="true">
          <span>Protect</span>
          <span>Plan</span>
          <span>Educate</span>
        </div>

        <div className="startup-brand" aria-hidden="true">
          <span className="startup-reveal" />
          <div className="startup-logo">
            <Image
              src="/images/logo-cropped.png"
              alt=""
              fill
              sizes="(max-width: 768px) 82vw, 544px"
              className="object-contain object-center"
              priority
            />
          </div>
          <div className="startup-brand-copy">
            <p className="startup-line">Building a Better Financial Future</p>
          </div>
        </div>
      </div>
    </div>
  );
}
