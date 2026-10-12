import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import SectionHeading from "@/components/SectionHeading";
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
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Our Solutions") },
          ]}
        />

        <section className="bg-[linear-gradient(160deg,#fff_0_58%,var(--color-cm-mint)_58%_100%)] py-16 md:py-24">
          <div className="mx-auto grid max-w-300 grid-cols-1 gap-7 px-6 md:grid-cols-3">
            {solutions.map((solution, i) => (
              <div
                key={solution.title}
                className={`group relative isolate flex flex-col overflow-hidden rounded-4xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(25,58,39,0.25)] ${
                  i % 2 ? "bg-cm-night" : "bg-cm-card"
                }`}
                data-aos="fade-up"
                data-aos-delay={i * 100}>
                <div className="relative h-52 w-full overflow-hidden">
                  <Image src={solution.image} alt={t(solution.title)} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="relative flex flex-1 flex-col p-8">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-15 -right-15 -z-10 h-55 w-55 rounded-full bg-cm-fresh/20"
                  />
                  <h3 className="mb-3 text-2xl font-semibold leading-tight">{t(solution.title)}</h3>
                  <p className="mb-7 flex-1 text-base leading-relaxed">{t(solution.description)}</p>
                  <Link href={solution.href} className="btn-fresh w-full px-5 text-base">
                    {t(solution.cta)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="recruitment-roadmap" className="bg-cm-mint py-16 md:py-24 scroll-mt-20">
          <div className="mx-auto max-w-300 px-6">
            <SectionHeading>
              {t("Recruitment")} {t("Roadmap")}
            </SectionHeading>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmap.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-[28px] border-2 border-cm-hover bg-white p-8"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}>
                  <div className="mb-4 grid h-13 w-13 place-items-center rounded-full bg-cm-fresh font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="mb-2.5 text-xl md:text-[22px] font-semibold leading-tight text-cm-deep">{t(step.title)}</h3>
                  <p className="text-base leading-relaxed text-cm-ink">{t(step.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div>
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
