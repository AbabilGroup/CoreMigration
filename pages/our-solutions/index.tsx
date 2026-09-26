import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

const solutions = [
  {
    title: "Direct & Specialist Recruitment",
    description: "Targeted sourcing for technical, supervisory, and specialized roles.",
    cta: "Explore Direct Recruitment",
    href: "/our-solutions/direct-specialist-recruitment",
    image: "https://images.pexels.com/photos/8961243/pexels-photo-8961243.jpeg",
  },
  {
    title: "Bulk Mobilization",
    description: "High-volume recruitment drives for large project workforces.",
    cta: "Plan a Mass Mobilization Drive",
    href: "/our-solutions/bulk-mobilization",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
  },
  {
    title: "Overseas Processing",
    description: "Visa, attestation, and pre-departure compliance handled in-house.",
    cta: "View Processing Services",
    href: "/our-solutions/overseas-processing",
    image: "https://images.pexels.com/photos/8353802/pexels-photo-8353802.jpeg",
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
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Flexible International Sourcing Models Built for Precision, Volume, and")}
          titleAccent={t("Compliance")}
          subtitle={t("Core Migration provides tailored international recruitment solutions to meet the exact manpower demands of global businesses — from individual specialists to project workforces of hundreds.")}
          image="https://images.pexels.com/photos/8961243/pexels-photo-8961243.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Our Solutions") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <div
                key={solution.title}
                className="card-hover border border-gray-200 flex flex-col"
                data-aos="zoom-in"
                data-aos-delay={i * 100}>
                <div className="relative w-full h-56 overflow-hidden">
                  <Image src={solution.image} alt={t(solution.title)} fill sizes="(max-width: 768px) 100vw, 33vw" className="card-hover-img object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{t(solution.title)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{t(solution.description)}</p>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors">
                    {t(solution.cta)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="recruitment-roadmap" className="py-16 md:py-24 bg-brand-dark px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center" data-aos="text-reveal">
              <h2
                className="text-3xl md:text-4xl text-white font-light"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}>
                {t("Recruitment")} <span className="italic font-bold text-brand-primary">{t("Roadmap")}</span>
              </h2>
            </div>
            <div className="flex flex-col gap-8 relative">
              <span aria-hidden="true" className="absolute left-6 top-2 bottom-2 w-px bg-white/15" />
              <span aria-hidden="true" data-aos="draw-line" className="absolute left-6 top-2 bottom-2 w-px bg-brand-primary shadow-[0_0_8px_var(--color-brand-primary)]" />
              {roadmap.map((step, i) => (
                <div key={step.title} className="flex gap-6 relative" data-aos="fade-left">
                  <div className="w-12 h-12 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{t(step.title)}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{t(step.description)}</p>
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
