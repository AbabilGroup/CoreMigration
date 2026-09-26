import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Hero intro + scroll parallax. Mark children inside `scope` with:
 * - `data-hero-item`    — rises in one after another on load
 * - `data-hero-media`   — background image/video, drifts slower on scroll
 * - `data-hero-content` — text block, fades out as the hero scrolls away
 */
export default function useHeroAnimation(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-hero-item]", {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        });

        gsap.to("[data-hero-media]", {
          yPercent: 25,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to("[data-hero-content]", {
          opacity: 0,
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "60% top",
            scrub: true,
          },
        });
      });
    },
    { scope },
  );
}
