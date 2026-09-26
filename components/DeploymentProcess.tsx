import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  DocumentCheckIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import FloatingCircles from "./FloatingCircles";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    title: "Demand & Authorization",
    description:
      "Employer provides job specifications, salary bands, and legal documentation (Demand Letter & Power of Attorney). Core Migration authenticates these with the relevant embassies.",
    icon: DocumentCheckIcon,
  },
  {
    title: "Sourcing & Trade Verification",
    description:
      "Local sourcing channels are activated. Applicants undergo practical trade testing and CV pre-screening.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Selection Drive",
    description:
      "Employers conduct interviews onsite at partner testing facilities or via virtual interview sessions.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Visa, Medical & Flight Deployment",
    description:
      "GAMCA/Wafid medicals, visa stamping, BMET emigration clearance, pre-departure briefings, and flight ticketing are completed. Candidates arrive ready for site onboarding.",
    icon: PaperAirplaneIcon,
  },
];

// On desktop the grid snakes 1 → 2, then back 3 ← 4 on the second row.
const desktopOrder = ["", "", "md:order-4", "md:order-3"];

const CORNER = 28;

/** Line path through the step nodes, in track-relative pixels. */
function buildPath(track: HTMLElement, nodes: HTMLElement[]) {
  const box = track.getBoundingClientRect();
  const pts = nodes.map((n) => {
    const r = n.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - box.left,
      y: r.top + r.height / 2 - box.top,
    };
  });

  // Single column (mobile): straight vertical line through the nodes.
  if (Math.abs(pts[0].y - pts[1].y) > 1) {
    return `M ${pts[0].x} ${pts[0].y - 40} V ${pts[pts.length - 1].y}`;
  }

  // Two rows: across the top, round the right edge, back along the bottom.
  const right = box.width;
  const y1 = pts[0].y;
  const y2 = pts[2].y;
  return [
    `M 0 ${y1}`,
    `H ${right - CORNER}`,
    `Q ${right} ${y1} ${right} ${y1 + CORNER}`,
    `V ${y2 - CORNER}`,
    `Q ${right} ${y2} ${right - CORNER} ${y2}`,
    `H 0`,
  ].join(" ");
}

/** Distance along the path at which it passes closest to each node. */
function nodeDistances(path: SVGPathElement, track: HTMLElement, nodes: HTMLElement[]) {
  const total = path.getTotalLength();
  const box = track.getBoundingClientRect();
  return nodes.map((n) => {
    const r = n.getBoundingClientRect();
    const cx = r.left + r.width / 2 - box.left;
    const cy = r.top + r.height / 2 - box.top;
    let best = 0;
    let bestDist = Infinity;
    for (let d = 0; d <= total; d += 4) {
      const p = path.getPointAtLength(d);
      const dist = (p.x - cx) ** 2 + (p.y - cy) ** 2;
      if (dist < bestDist) {
        bestDist = dist;
        best = d;
      }
    }
    return best;
  });
}

export default function DeploymentProcess() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const basePathRef = useRef<SVGPathElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGCircleElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const basePath = basePathRef.current;
      const progressPath = progressPathRef.current;
      const head = headRef.current;
      if (!track || !basePath || !progressPath || !head) return;

      const nodes = gsap.utils.toArray<HTMLElement>("[data-step-node]", track);
      const cards = gsap.utils.toArray<HTMLElement>("[data-step]", track);
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let length = 0;
      let stops: number[] = [];
      let progress = reduceMotion ? 1 : 0;

      const render = () => {
        const drawn = length * progress;
        progressPath.style.strokeDashoffset = String(length - drawn);
        const p = progressPath.getPointAtLength(drawn);
        head.setAttribute("cx", String(p.x));
        head.setAttribute("cy", String(p.y));
        head.style.opacity = progress > 0.001 && progress < 0.999 ? "1" : "0";
        cards.forEach((card, i) => {
          card.dataset.active = String(drawn >= stops[i] - 2);
        });
      };

      const measure = () => {
        const d = buildPath(track, nodes);
        basePath.setAttribute("d", d);
        progressPath.setAttribute("d", d);
        length = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = String(length);
        stops = nodeDistances(progressPath, track, nodes);
        render();
      };

      measure();

      if (!reduceMotion) {
        ScrollTrigger.create({
          trigger: track,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 0.6,
          onUpdate: (self) => {
            progress = self.progress;
            render();
          },
          onRefresh: measure,
        });
      }

      const observer = new ResizeObserver(() => measure());
      observer.observe(track);
      return () => observer.disconnect();
    },
    { scope: trackRef },
  );

  return (
    <section
      className="relative isolate py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-brand-dark overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(rgb(255 255 255 / 0.06) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}>
      <FloatingCircles />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl" data-aos="fade-up">
          <h2
            className="text-3xl md:text-4xl text-white font-light mb-4"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}>
            <span className="italic font-bold text-brand-primary">{t("Deployment Process")}</span>
          </h2>
        </div>

        <div ref={trackRef} className="relative">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true">
            <path
              ref={basePathRef}
              fill="none"
              stroke="rgb(255 255 255 / 0.2)"
              strokeWidth={2}
              strokeDasharray="2 7"
              strokeLinecap="round"
            />
            <path
              ref={progressPathRef}
              fill="none"
              stroke="var(--color-brand-primary)"
              strokeWidth={3}
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 6px var(--color-brand-primary))" }}
            />
            <circle
              ref={headRef}
              r={6}
              fill="white"
              stroke="var(--color-brand-primary)"
              strokeWidth={3}
              style={{ filter: "drop-shadow(0 0 8px var(--color-brand-primary))" }}
            />
          </svg>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 md:gap-y-20 pl-12 md:pl-0 md:px-10">
            {steps.map((step, i) => (
              <div
                key={step.title}
                data-step
                data-active="false"
                className={`group relative flex flex-col md:items-center ${desktopOrder[i]}`}>
                {/* Node + stem */}
                <div className="absolute -left-12 top-0 md:static flex flex-col items-center">
                  <span
                    data-step-node
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/25 bg-brand-dark text-sm font-bold text-white/50 transition-all duration-500 group-data-[active=true]:border-brand-primary group-data-[active=true]:bg-brand-primary group-data-[active=true]:text-white group-data-[active=true]:shadow-[0_0_20px] group-data-[active=true]:shadow-brand-primary/60 group-data-[active=true]:ring-6 group-data-[active=true]:ring-brand-primary/20">
                    {i + 1}
                  </span>
                  <span className="hidden md:block h-8 w-px bg-white/15 transition-colors duration-500 group-data-[active=true]:bg-brand-primary" />
                </div>

                {/* Card */}
                <div className="w-full rounded-xl border border-white/5 bg-white/2 p-7 md:p-8 opacity-40 translate-y-3 transition-all duration-700 ease-out group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0 group-data-[active=true]:border-brand-primary/40 group-data-[active=true]:bg-white/6 group-data-[active=true]:shadow-[0_20px_50px_-20px] group-data-[active=true]:shadow-brand-primary/45 hover:-translate-y-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-colors duration-500 group-data-[active=true]:bg-brand-primary group-data-[active=true]:text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg md:text-xl font-bold text-white">{t(step.title)}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{t(step.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
