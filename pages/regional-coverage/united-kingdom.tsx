import Head from "next/head";
import ServicesHero from "@/components/ServicesHero";
import { HeartIcon, BoltIcon } from "@heroicons/react/24/outline";
import MobileAppSection from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

const sectors = [
  {
    icon: HeartIcon,
    text: "Healthcare systems (registered nurses, technical clinical staff)",
  },
  {
    icon: BoltIcon,
    text: "Energy developments and infrastructure projects",
  },
];

export default function UnitedKingdom() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("United Kingdom - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration connects UK employers in healthcare and infrastructure with trade-tested, verified professionals from South Asia, fully supported through UK visa sponsorship and compliance requirements.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Supporting UK Healthcare and Infrastructure with Verified International")}
          titleAccent={t("Talent")}
          subtitle={t("Core Migration connects UK employers in healthcare and infrastructure with trade-tested, verified professionals from South Asia, fully supported through UK visa sponsorship and compliance requirements.")}
          image="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Regional Coverage"), href: "/regional-coverage" },
            { label: t("United Kingdom") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10">
            {t("Active Sectors in This Region")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {sectors.map((sector) => (
              <div key={sector.text} className="flex items-start gap-4" data-aos="fade-left">
                <sector.icon className="w-8 h-8 text-brand-primary shrink-0" />
                <p className="text-gray-600 leading-relaxed">{t(sector.text)}</p>
              </div>
            ))}
          </div>
        </section>

        <div data-aos="blur-in">
          <MobileAppSection
            headline="Discuss UK"
            headlineAccent="Workforce Needs"
            primaryCta={{ label: "Discuss UK Workforce Needs", href: "/contact-us" }}
            secondaryCta={{ label: "View Overseas Vacancies", href: "/vacancies" }}
          />
        </div>
      </main>
    </>
  );
}
