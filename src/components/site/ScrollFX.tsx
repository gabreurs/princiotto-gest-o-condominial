import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global GSAP scroll animation layer. Mounted once in <Layout/>.
 * Re-scans the DOM after every route change so newly mounted pages
 * get the same animations applied to elements with data-fx="…" hooks.
 *
 * Hooks:
 *   data-fx="reveal"          fade + slide on enter
 *   data-fx="reveal-up"       deeper slide
 *   data-fx="stagger"         stagger direct children
 *   data-fx="parallax"        slow vertical parallax
 *   data-fx="parallax-strong" stronger parallax (use on images)
 *   data-fx="hover-lift"      GSAP-powered hover lift
 */
export const ScrollFX = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Wait one frame so the new route's DOM is in place.
    const raf = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        // Generic reveals
        gsap.utils.toArray<HTMLElement>("[data-fx='reveal']").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 32,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-fx='reveal-up']").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 60,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        // Staggered groups
        gsap.utils.toArray<HTMLElement>("[data-fx='stagger']").forEach((group) => {
          const children = Array.from(group.children) as HTMLElement[];
          if (!children.length) return;
          gsap.from(children, {
            opacity: 0,
            y: 28,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          });
        });

        // Parallax
        gsap.utils.toArray<HTMLElement>("[data-fx='parallax']").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
        gsap.utils.toArray<HTMLElement>("[data-fx='parallax-strong']").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -14, scale: 1.1 },
            {
              yPercent: 14,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });

      // Hover lifts (outside context so we can clean up listeners)
      const lifts: Array<{ el: HTMLElement; enter: () => void; leave: () => void }> = [];
      document.querySelectorAll<HTMLElement>("[data-fx='hover-lift']").forEach((el) => {
        const enter = () =>
          gsap.to(el, { y: -4, scale: 1.015, duration: 0.35, ease: "power3.out" });
        const leave = () =>
          gsap.to(el, { y: 0, scale: 1, duration: 0.45, ease: "power3.out" });
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        lifts.push({ el, enter, leave });
      });

      ScrollTrigger.refresh();

      (window as unknown as { __fxCleanup?: () => void }).__fxCleanup = () => {
        ctx.revert();
        lifts.forEach(({ el, enter, leave }) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      };
    });

    return () => {
      cancelAnimationFrame(raf);
      const w = window as unknown as { __fxCleanup?: () => void };
      w.__fxCleanup?.();
      w.__fxCleanup = undefined;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
};