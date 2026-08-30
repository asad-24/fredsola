"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      root.dataset.motion = "reduced";
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          element.dataset.inView = "true";
        });
      return;
    }

    root.dataset.motion = "ready";

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.inView = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.dataset.inView = "true";
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    let frameId = 0;
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );

    const updateParallax = () => {
      frameId = 0;

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
        );
        const offset = (progress - 0.5) * -24;
        const scale = 1 + progress * 0.018;

        element.style.setProperty("--parallax-y", `${offset}px`);
        element.style.setProperty("--parallax-scale", String(scale));
      });
    };

    const requestParallax = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
}
