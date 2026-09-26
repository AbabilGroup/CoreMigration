import { useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates every element marked with `data-aos` as it scrolls into view.
 * Optional `data-aos-delay` (ms) staggers siblings, matching the old AOS markup.
 * Wrappers that contain their own `data-aos` children are skipped so content
 * isn't animated twice.
 */
export default function ScrollAnimations() {
  const { asPath } = useRouter();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const elements = gsap.utils
        .toArray<HTMLElement>("[data-aos]")
        .filter((el) => !el.querySelector("[data-aos]"));

      if (reduceMotion) {
        gsap.set(elements, { opacity: 1, y: 0 });
        return;
      }

      elements.forEach((el) => {
        const delay = Number(el.dataset.aosDelay ?? 0) / 1000;

        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    // Images/fonts can shift layout after mount.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timer = window.setTimeout(refresh, 500);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(timer);
      ctx.revert();
    };
  }, [asPath]);

  return null;
}
