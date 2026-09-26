import { useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Vars = gsap.TweenVars;

/** Start state for each `data-aos` value. Everything animates back to its natural state. */
const VARIANTS: Record<string, Vars> = {
  "fade-up": { opacity: 0, y: 60 },
  "fade-down": { opacity: 0, y: -60 },
  // Named like AOS: "fade-right" moves towards the right, i.e. comes from the left.
  "fade-right": { opacity: 0, x: -80 },
  "fade-left": { opacity: 0, x: 80 },
  "zoom-in": { opacity: 0, scale: 0.85 },
  "flip-up": {
    opacity: 0,
    rotationX: -70,
    transformPerspective: 900,
    transformOrigin: "50% 100%",
  },
  "blur-in": { opacity: 0, y: 30, filter: "blur(12px)" },
  // Curtain wipes, mainly for images.
  "reveal-left": { clipPath: "inset(0% 100% 0% 0%)" },
  "reveal-right": { clipPath: "inset(0% 0% 0% 100%)" },
  // Headings rise out of an invisible mask.
  "text-reveal": { opacity: 0, y: 40, clipPath: "inset(0% 0% 100% 0%)" },
};

const END_STATE: Vars = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotationX: 0,
  filter: "blur(0px)",
  clipPath: "inset(0% 0% 0% 0%)",
};

function toVars(from: Vars): Vars {
  const to: Vars = {};
  for (const key of Object.keys(from)) {
    if (key in END_STATE) to[key] = END_STATE[key];
  }
  return to;
}

/**
 * Animates elements marked with `data-aos="<variant>"` as they scroll into view.
 * - `data-aos-delay` (ms) sets an explicit delay; otherwise siblings stagger automatically.
 * - `data-aos="draw-line"` grows a line top-to-bottom, scrubbed with its parent's scroll.
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

      if (reduceMotion) return;

      elements.forEach((el) => {
        const variant = el.dataset.aos ?? "fade-up";

        if (variant === "draw-line") {
          gsap.fromTo(
            el,
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top 70%",
                end: "bottom 60%",
                scrub: 0.5,
              },
            },
          );
          return;
        }

        const from = VARIANTS[variant] ?? VARIANTS["fade-up"];
        const delay = el.dataset.aosDelay
          ? Number(el.dataset.aosDelay) / 1000
          : autoStagger(el);

        const tl = gsap.timeline({
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(el, from, {
          ...toVars(from),
          duration: variant.startsWith("reveal") ? 1.2 : 0.9,
          ease: variant.startsWith("reveal") ? "power4.inOut" : "power3.out",
        });

        // Images inside a wipe settle from a slight zoom.
        if (variant.startsWith("reveal")) {
          const img = el.querySelector("img");
          if (img) {
            tl.fromTo(
              img,
              { scale: 1.3 },
              { scale: 1, duration: 1.6, ease: "power3.out" },
              0,
            );
          }
        }
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

/** Animated siblings on the same row (e.g. grid items) come in one after another. */
function autoStagger(el: HTMLElement) {
  const sameRow = Array.from(el.parentElement?.children ?? []).filter(
    (c): c is HTMLElement =>
      c instanceof HTMLElement &&
      !!c.dataset.aos &&
      Math.abs(c.offsetTop - el.offsetTop) < 10,
  );
  return Math.min(sameRow.indexOf(el), 5) * 0.12;
}
