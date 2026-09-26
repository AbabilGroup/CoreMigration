import Head from "next/head";
import Link from "next/link";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const keyFeatures = [
  "Rapid activation of sourcing networks across South Asia for large candidate pools",
  "Multi-day trade-testing events for employer delegates to observe candidates directly",
  "Batch processing of passports, medicals, visas, and emigration clearances",
  "Coordinated group travel, including chartered flight arrangements where required",
  "Pre-departure briefings covering site safety, camp rules, and destination labor law",
];

const targetRoles = [
  {
    group: "Construction Trades",
    roles: "Masons, Steel Fixers, Formwork Carpenters, Scaffolders, Heavy Equipment Operators",
  },
  {
    group: "Industrial & Energy Trades",
    roles: "Certified 6G Pipe Welders, Fitters, Riggers, Industrial Electricians",
  },
  {
    group: "Facility & Logistics Trades",
    roles: "Commercial Cleaners, Security Guards, HVAC Technicians, Warehouse Packers, Forklift Operators",
  },
];

export default function BulkMobilization() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Bulk Mobilization - Core Migration")}</title>
        <meta
          name="description"
          content={t("For large-scale infrastructure, industrial, and facility management projects where time-to-site is critical.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Bulk")}
          titleAccent={t("Mobilization")}
          subtitle={t("For large-scale infrastructure, industrial, and facility management projects where time-to-site is critical.")}
          image="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Our Solutions"), href: "/our-solutions" },
            { label: t("Bulk Mobilization") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
            {t("Key Features")}
          </h2>
          <ul className="space-y-4 mb-16">
            {keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-gray-600 leading-relaxed">
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
              <div key={group.group} className="border-l-4 border-brand-primary pl-6" data-aos="fade-right">
                <h3 className="font-bold text-brand-dark mb-2">{t(group.group)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(group.roles)}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors">
              {t("Start a Mobilization Campaign")}
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
            primaryCta={{ label: "Submit Your Demand Specifications", href: "/contact-us" }}
            secondaryCta={{ label: "Speak to a Workforce Consultant", href: "/contact-us" }}
          />
        </div>
      </main>
    </>
  );
}
