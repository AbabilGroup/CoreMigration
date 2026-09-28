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
import CursorCircle from "./CursorCircle";
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

export default function DeploymentProcess() {
  const { t } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);

  // "Dealt cards": each card rises in with a tilt, then its bar fills,
  // its number fades up and its icon pops. Cards on the same row go in order.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-step]");
        cards.forEach((card, i) => {
          const rowIndex = cards
            .slice(0, i)
            .filter((c) => Math.abs(c.offsetTop - card.offsetTop) < 10).length;

          const tl = gsap.timeline({
            delay: rowIndex * 0.18,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });

          tl.fromTo(
            card,
            { opacity: 0, y: 120, rotation: i % 2 ? 6 : -6, scale: 0.9 },
            { opacity: 1, y: 0, rotation: 0, scale: 1, duration: 0.9, ease: "back.out(1.4)" },
          )
            .fromTo(
              card.querySelector("[data-step-bar]"),
              { scaleX: 0 },
              { scaleX: 1, duration: 0.6, ease: "power2.out" },
              "-=0.35",
            )
            .fromTo(
              card.querySelector("[data-step-num]"),
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
              "<",
            )
            .fromTo(
              card.querySelector("[data-step-icon]"),
              { scale: 0, rotation: -90 },
              { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(2)" },
              "<0.1",
            );
        });
      });
    },
    { scope: gridRef },
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
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl" data-aos="fade-up">
          <h2
            className="text-3xl md:text-4xl text-white font-light mb-4"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}>
            <span className="italic font-bold text-brand-primary">{t("Deployment Process")}</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              data-step
              className="card-hover relative isolate overflow-hidden rounded-xl border border-white/10 bg-white/5 p-7 pt-9">
              <CursorCircle />
              <span
                data-step-bar
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-full origin-left bg-brand-primary"
              />
              <span
                data-step-num
                aria-hidden="true"
                className="absolute right-5 top-5 text-6xl font-bold leading-none text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                data-step-icon
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary text-white shadow-[0_8px_24px_-8px] shadow-brand-primary/60">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{t(step.title)}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{t(step.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
