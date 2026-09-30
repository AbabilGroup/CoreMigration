import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import CursorCircle from "@/components/CursorCircle";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const solutions = [
  {
    title: "Direct & Specialist Recruitment",
    description: "Targeted sourcing for technical, supervisory, and specialized roles.",
    cta: "Explore Direct Recruitment",
    href: "/our-solutions/direct-specialist-recruitment",
    image: "https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg",
  },
  {
    title: "Bulk Mobilization",
    description: "High-volume recruitment drives for large project workforces.",
    cta: "Plan a Mass Mobilization Drive",
    href: "/our-solutions/bulk-mobilization",
    image: "https://images.pexels.com/photos/4956920/pexels-photo-4956920.jpeg",
  },
  {
    title: "Overseas Processing",
    description: "Visa, attestation, and pre-departure compliance handled in-house.",
    cta: "View Processing Services",
    href: "/our-solutions/overseas-processing",
    image: "https://images.pexels.com/photos/8193761/pexels-photo-8193761.jpeg",
  },
];

const roadmap = [
  {
    title: "Legal Authorization & Demand Intake",
    description: "Employer submits Demand Letter and Power of Attorney; Core Migration authenticates documents with destination embassies.",
  },
  {
    title: "Active Sourcing & Technical Pre-Screening",
    description: "Candidates are sourced, trade-tested, and vetted against exact skill and medical requirements.",
  },
  {
    title: "Final Selection & Document Processing",
    description: "Employer selects candidates via interview drives; passports, medicals, and visas are processed.",
  },
  {
    title: "Emigration Clearance & Flight Mobilization",
    description: "BMET/Protector approvals secured, pre-departure orientation conducted, flights issued.",
  },
];

export default function OurSolutions() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Our Solutions - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration provides tailored international recruitment solutions to meet the exact manpower demands of global businesses — from individual specialists to project workforces of hundreds.")}
        />
      </Head>
      <main className="min-h-screen">
        <ServicesHero
          title={t("Flexible International Sourcing Models Built for Precision, Volume, and")}
          titleAccent={t("Compliance")}
          subtitle={t("Core Migration provides tailored international recruitment solutions to meet the exact manpower demands of global businesses — from individual specialists to project workforces of hundreds.")}
          image="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Our Solutions") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, i) => {
              const orange = i % 2 === 1;
              return (
                <div
                  key={solution.title}
                  className={`card-hover group relative isolate flex flex-col overflow-hidden rounded-3xl text-white shadow-[0_24px_60px_-24px] ${
                    orange
                      ? "bg-linear-to-br from-brand-orange to-brand-orange-dark shadow-brand-orange/60"
                      : "bg-brand-primary shadow-brand-primary/60"
                  }`}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}>
                  <CursorCircle colorClassName={orange ? "border-white bg-white/25" : undefined} />
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image src={solution.image} alt={t(solution.title)} fill sizes="(max-width: 768px) 100vw, 33vw" className="card-hover-img object-cover" />
                    {/* Blend the photo into the card color */}
                    <div
                      className={`absolute inset-0 bg-linear-to-t from-0% via-transparent via-30% to-transparent ${
                        orange ? "from-brand-orange" : "from-brand-primary"
                      }`}
                    />
                  </div>
                  <div className="relative p-8 flex flex-col flex-1">
                    {/* Background shapes */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -right-16 -bottom-16 -z-10 h-56 w-56 rounded-full border-[3px] ${
                        orange ? "border-white/30" : "border-brand-accent/40"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -left-20 bottom-0 -z-10 h-48 w-48 rounded-full ${
                        orange ? "bg-white/10" : "bg-brand-secondary/50"
                      }`}
                    />
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{t(solution.title)}</h3>
                    <p className="text-white/85 text-sm leading-relaxed mb-6 flex-1">{t(solution.description)}</p>
                    <Link
                      href={solution.href}
                      className={`group/btn w-full px-4 text-center text-[13px] leading-snug ${
                        orange ? "btn bg-white text-brand-orange hover:bg-brand-cream" : "btn-primary"
                      }`}>
                      {t(solution.cta)}
                      <ArrowRightIcon className="h-4 w-4 stroke-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="recruitment-roadmap" className="py-16 md:py-24 bg-brand-primary px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center" data-aos="text-reveal">
              <h2
                className="text-3xl md:text-4xl text-white font-light"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}>
                {t("Recruitment")} <span className="italic font-bold text-brand-accent">{t("Roadmap")}</span>
              </h2>
            </div>
            <div className="flex flex-col gap-8 relative">
              <span aria-hidden="true" className="absolute left-6 top-2 bottom-2 w-px bg-white/15" />
              <span aria-hidden="true" data-aos="draw-line" className="absolute left-6 top-2 bottom-2 w-px bg-brand-accent shadow-[0_0_8px_var(--color-brand-accent)]" />
              {roadmap.map((step, i) => (
                <div key={step.title} className="flex gap-6 relative" data-aos="fade-left">
                  <div className="w-12 h-12 rounded-full bg-brand-accent text-brand-primary font-bold flex items-center justify-center shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{t(step.title)}</h3>
                    <p className="text-white/85 text-sm leading-relaxed">{t(step.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div data-aos="blur-in">
          <MobileAppSection
            headline="Discuss Your"
            headlineAccent="Workforce Requirements"
            description="Whether you need individual specialist talent or a full project workforce, our team is ready to help you plan the right sourcing model."
            primaryCta={{ label: "Submit Your Demand Specifications", href: "/contact-us" }}
            secondaryCta={{ label: "Speak to a Workforce Consultant", href: "/contact-us" }}
          />
        </div>
      </main>
    </>
  );
}
