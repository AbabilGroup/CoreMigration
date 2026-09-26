import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Fixed layout (not random) so server and client render the same markup.
const CIRCLES = [
  { top: "12%", left: "4%", size: 14, filled: true },
  { top: "70%", left: "8%", size: 28, filled: false },
  { top: "35%", left: "22%", size: 8, filled: true },
  { top: "85%", left: "30%", size: 18, filled: false },
  { top: "8%", left: "45%", size: 10, filled: false },
  { top: "55%", left: "48%", size: 22, filled: true },
  { top: "20%", left: "62%", size: 34, filled: false },
  { top: "78%", left: "66%", size: 10, filled: true },
  { top: "40%", left: "80%", size: 16, filled: true },
  { top: "10%", left: "90%", size: 24, filled: false },
  { top: "88%", left: "92%", size: 12, filled: true },
  { top: "60%", left: "96%", size: 8, filled: false },
];

/**
 * Small circles drifting around forever. Place inside a
 * `relative isolate overflow-hidden` section; they sit behind its content.
 */
export default function FloatingCircles() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-circle]").forEach((circle) => {
          // New random target each cycle, so the drift never repeats exactly.
          gsap.to(circle, {
            x: "random(-60, 60)",
            y: "random(-50, 50)",
            scale: "random(0.7, 1.3)",
            duration: "random(4, 8)",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            repeatRefresh: true,
            delay: gsap.utils.random(0, 2),
          });
          gsap.to(circle, {
            opacity: "random(0.5, 1)",
            duration: "random(2, 4)",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            repeatRefresh: true,
          });
        });
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10">
      {CIRCLES.map((c, i) => (
        <span
          key={i}
          data-circle
          className={`absolute rounded-full opacity-80 ${
            c.filled ? "bg-brand-primary" : "border-2 border-brand-primary"
          }`}
          style={{ top: c.top, left: c.left, width: c.size, height: c.size }}
        />
      ))}
    </div>
  );
}
