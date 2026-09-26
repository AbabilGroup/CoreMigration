import { useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import {
  BuildingOffice2Icon,
  HeartIcon,
  FireIcon,
  CakeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Sticky offset below the fixed header; each card sits a little lower than the last.
const STACK_TOP = 96;
const STACK_STEP = 24;

const industries = [
  {
    id: "heavy-construction-infrastructure",
    icon: BuildingOffice2Icon,
    title: "Heavy Construction & Infrastructure",
    groups: [
      { label: "Technical & Professional", roles: "Civil Engineers, MEP Supervisors, Quantity Surveyors, Site Safety Officers" },
      { label: "Skilled Trades", roles: "Masons, Steel Fixers, Formwork Carpenters, Scaffolders, Plasterers" },
      { label: "Heavy Machinery", roles: "Tower Crane Operators, Excavator Drivers, Heavy Duty Mechanics, Riggers" },
    ],
  },
  {
    id: "healthcare-life-sciences",
    icon: HeartIcon,
    title: "Healthcare & Life Sciences",
    groups: [
      { label: "Clinical Staff", roles: "Registered Nurses (ICU, ER, OT, Pediatric), General Practitioners, Specialist Physicians" },
      { label: "Technical Healthcare", roles: "Laboratory Technicians, Radiographers, Pharmacists, Biomedical Technicians" },
      { label: "Licensure Support", roles: "Prometric testing, Dataflow verification, council registrations" },
    ],
  },
  {
    id: "oil-gas-energy",
    icon: FireIcon,
    title: "Oil, Gas & Energy",
    groups: [
      { label: "Specialized Trades", roles: "Certified 6G Pipe Welders (TIG/MIG/Arc), Pipe Fabricators, Mechanical Fitters" },
      { label: "Site Support", roles: "Industrial Riggers, NDT Technicians, Instrument Technicians, Plant Maintenance Crew" },
    ],
  },
  {
    id: "hospitality-catering",
    icon: CakeIcon,
    title: "Hospitality & Catering",
    groups: [
      { label: "Culinary", roles: "Executive Pastry Chefs, Commis Chefs, Line Cooks, Kitchen Stewards" },
      { label: "Front-of-House", roles: "Waitstaff, Bartenders, Front Desk Agents, Concierge, Bellboys" },
      { label: "Housekeeping", roles: "Floor Supervisors, Room Attendants, Laundry Technicians" },
    ],
  },
  {
    id: "facility-management-logistics",
    icon: WrenchScrewdriverIcon,
    title: "Facility Management & Logistics",
    groups: [
      { label: "Facility Maintenance", roles: "HVAC Technicians, Plumbers, Electricians, Multi-Skilled Handymen" },
      { label: "Building Operations", roles: "Commercial Cleaners, Security Guards, Building Superintendents" },
      { label: "Supply Chain", roles: "Forklift Operators, Warehouse Pickers/Packers, Inventory Clerks" },
    ],
  },
];

export default function Industries() {
  const { t } = useLanguage();
  const stackRef = useRef<HTMLElement>(null);

  // Stacking cards: while the next card slides over, the one beneath shrinks and dims.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]");
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          const trigger = {
            trigger: next,
            start: "top bottom",
            end: `top ${STACK_TOP + (i + 1) * STACK_STEP}px`,
            scrub: true,
          };
          gsap.to(card, {
            scale: 0.92,
            transformOrigin: "50% 0%",
            ease: "none",
            scrollTrigger: trigger,
          });
          gsap.to(card.querySelector("[data-stack-dim]"), {
            opacity: 0.12,
            ease: "none",
            scrollTrigger: trigger,
          });
        });
      });
    },
    { scope: stackRef },
  );

  return (
    <>
      <Head>
        <title>{t("Industries - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration maintains active candidate pools and trade-testing networks tailored to the operational demands of critical global industries.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Dedicated Sourcing Pipelines Across Core Global")}
          titleAccent={t("Sectors")}
          subtitle={t("Core Migration maintains active candidate pools and trade-testing networks tailored to the operational demands of critical global industries.")}
          image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Industries") },
          ]}
        />

        <section
          ref={stackRef}
          className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-24">
          {industries.map((industry, i) => (
            <div
              key={industry.id}
              id={industry.id}
              data-stack-card
              className="sticky overflow-hidden bg-white border border-gray-200 p-8 md:p-10 shadow-[0_-12px_40px_-20px_rgb(0_0_0/0.25)] scroll-mt-24"
              style={{ top: STACK_TOP + i * STACK_STEP }}>
              {/* Darkens as the next card covers this one */}
              <div
                data-stack-dim
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-brand-dark opacity-0"
              />
              <div className="flex items-center gap-4 mb-8">
                <industry.icon className="w-10 h-10 text-brand-primary shrink-0" />
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">{t(industry.title)}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {industry.groups.map((group) => (
                  <div key={group.label}>
                    <h3 className="font-bold text-sm uppercase tracking-wider text-brand-primary mb-2">
                      {t(group.label)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{t(group.roles)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div data-aos="blur-in">
          <MobileAppSection
            headline="Sourcing for Your"
            headlineAccent="Specific Industry"
            primaryCta={{ label: "Request Sector-Specific Candidate Profiles", href: "/contact-us" }}
            secondaryCta={{ label: "Schedule an Industry Sourcing Consultation", href: "/contact-us" }}
          />
        </div>
      </main>
    </>
  );
}
