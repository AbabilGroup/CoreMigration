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
      <main className="min-h-screen">
        <ServicesHero
          title={t("Supporting UK Healthcare and Infrastructure with Verified International")}
          titleAccent={t("Talent")}
          subtitle={t("Core Migration connects UK employers in healthcare and infrastructure with trade-tested, verified professionals from South Asia, fully supported through UK visa sponsorship and compliance requirements.")}
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Regional Coverage"), href: "/regional-coverage" },
            { label: t("United Kingdom") },
          ]}
        />

        <section className="bg-[linear-gradient(160deg,#fff_0_58%,var(--color-cm-mint)_58%_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-300 px-6">
          <h2 className="mb-12 text-3xl md:text-[44px] font-bold leading-tight text-cm-deep" data-aos="fade-up">
            {t("Active Sectors in This Region")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sectors.map((sector) => (
              <div key={sector.text} className="flex items-center gap-4 rounded-[20px] bg-cm-tile px-6 py-5 transition-colors hover:bg-cm-hover" data-aos="fade-up">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cm-fresh text-white">
                  <sector.icon className="h-6 w-6" />
                </span>
                <p className="font-semibold leading-relaxed text-cm-deep">{t(sector.text)}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        <div>
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
