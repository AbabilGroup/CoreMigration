import Head from "next/head";
import Link from "next/link";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const keyFeatures = [
  "Targeted sourcing of engineers, project managers, site supervisors, and clinical staff",
  "Practical trade and skill assessments at authorized testing centers",
  "Licensure and qualification support (Prometric, Dataflow, and relevant certification boards)",
  "Full credential attestation through relevant ministries and embassies",
  "Employer-led final interviews, virtual or in-person",
];

const targetRoles = [
  {
    group: "Healthcare",
    roles:
      "Registered Nurses, ER/ICU Specialists, General Practitioners, Laboratory Technicians",
  },
  {
    group: "Engineering & Technical",
    roles:
      "Civil Engineers, MEP Managers, Site Supervisors, Quality Control Inspectors",
  },
  {
    group: "Hospitality Leadership",
    roles:
      "Executive Chefs, Restaurant Managers, Front Office Supervisors, Head Housekeepers",
  },
];

export default function DirectSpecialistRecruitment() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Direct & Specialist Recruitment - Core Migration")}</title>
        <meta
          name="description"
          content={t(
            "For companies seeking qualified white-collar professionals, technical experts, and licensed healthcare staff, with rigorous vetting to ensure immediate productivity on placement.",
          )}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Direct &")}
          titleAccent={t("Specialist Recruitment")}
          subtitle={t(
            "For companies seeking qualified white-collar professionals, technical experts, and licensed healthcare staff, with rigorous vetting to ensure immediate productivity on placement.",
          )}
          image="https://images.pexels.com/photos/8463175/pexels-photo-8463175.jpeg?_gl=1*vrel5h*_ga*Nzc4NDE5NTg5LjE3OTA0MDcwMjU.*_ga_8JE65Q40S6*czE3OTA0NDM0ODMkbzIkZzEkdDE3OTA0NDM2NzEkajEwJGwwJGgw"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Our Solutions"), href: "/our-solutions" },
            { label: t("Direct & Specialist Recruitment") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
            {t("Key Features")}
          </h2>
          <ul className="space-y-4 mb-16">
            {keyFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-primary shrink-0" />
                {t(feature)}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
            {t("Target Roles")}
          </h2>
          <div className="space-y-8 mb-12">
            {targetRoles.map((group) => (
              <div
                key={group.group}
                className="border-l-4 border-brand-primary pl-6"
                data-aos="fade-right">
                <h3 className="font-bold text-brand-dark mb-2">
                  {t(group.group)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(group.roles)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors">
              {t("Request Specialist Candidates")}
            </Link>
            <Link
              href="/our-solutions#recruitment-roadmap"
              className="inline-flex items-center gap-2 text-brand-dark font-bold text-sm hover:text-brand-primary transition-colors">
              {t("View Our Recruitment Roadmap")}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <div data-aos="blur-in">
          <MobileAppSection
            headline="Discuss Your"
            headlineAccent="Workforce Requirements"
            primaryCta={{
              label: "Submit Your Demand Specifications",
              href: "/contact-us",
            }}
            secondaryCta={{
              label: "Speak to a Workforce Consultant",
              href: "/contact-us",
            }}
          />
        </div>
      </main>
    </>
  );
}
