import Head from "next/head";
import ServicesHero from "@/components/ServicesHero";
import { BuildingOffice2Icon, HeartIcon, CakeIcon, FireIcon } from "@heroicons/react/24/outline";
import MobileAppSection from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

const sectors = [
  {
    icon: BuildingOffice2Icon,
    text: "Heavy construction and infrastructure mega-projects (Saudi Arabia, UAE, Qatar)",
  },
  {
    icon: HeartIcon,
    text: "Healthcare systems expanding clinical and technical staff (across the GCC)",
  },
  {
    icon: CakeIcon,
    text: "Luxury hospitality openings (Qatar, UAE, Saudi Arabia)",
  },
  {
    icon: FireIcon,
    text: "Oil, gas, and energy turnaround projects (UAE, Saudi Arabia, Oman, Kuwait)",
  },
];

export default function MiddleEast() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Middle East (GCC) - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration places candidates across Saudi Arabia, the UAE, Qatar, Oman, Kuwait, and Bahrain — supporting mega-project construction, healthcare expansion, hospitality openings, and energy infrastructure.")}
        />
      </Head>
      <main className="min-h-screen">
        <ServicesHero
          title={t("Deploying Talent Across the Gulf's Fastest-Moving")}
          titleAccent={t("Industries")}
          subtitle={t("Core Migration places candidates across Saudi Arabia, the UAE, Qatar, Oman, Kuwait, and Bahrain — supporting mega-project construction, healthcare expansion, hospitality openings, and energy infrastructure.")}
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Regional Coverage"), href: "/regional-coverage" },
            { label: t("Middle East (GCC)") },
          ]}
        />

        <section className="bg-[linear-gradient(160deg,#fff_0_58%,var(--color-cm-mint)_58%_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-300 px-6">
          <h2 className="mb-12 text-3xl md:text-[44px] font-bold leading-tight text-cm-deep" data-aos="fade-up">
            {t("Active Sectors in This Region")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {sectors.map((sector) => (
              <div key={sector.text} className="flex items-center gap-4 rounded-[20px] bg-cm-tile px-6 py-5 transition-colors hover:bg-cm-hover" data-aos="fade-up">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cm-fresh text-white">
                  <sector.icon className="h-6 w-6" />
                </span>
                <p className="font-semibold leading-relaxed text-cm-deep">{t(sector.text)}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] bg-cm-card p-8 text-white" data-aos="fade-up">
            <p className="text-base leading-relaxed">
              <span className="font-bold text-cm-fresh">{t("Compliance note:")}</span>{" "}
              {t("All GCC deployments include country-specific visa and emigration handling — including Saudi Wakala/Enjaz processes and UAE biometric requirements — managed through Overseas Processing.")}
            </p>
          </div>
          </div>
        </section>

        <div>
          <MobileAppSection
            headline="Discuss GCC"
            headlineAccent="Workforce Needs"
            primaryCta={{ label: "Discuss GCC Workforce Needs", href: "/contact-us" }}
            secondaryCta={{ label: "View Overseas Vacancies", href: "/vacancies" }}
          />
        </div>
      </main>
    </>
  );
}
