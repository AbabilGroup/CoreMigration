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
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Deploying Talent Across the Gulf's Fastest-Moving")}
          titleAccent={t("Industries")}
          subtitle={t("Core Migration places candidates across Saudi Arabia, the UAE, Qatar, Oman, Kuwait, and Bahrain — supporting mega-project construction, healthcare expansion, hospitality openings, and energy infrastructure.")}
          image="https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Regional Coverage"), href: "/regional-coverage" },
            { label: t("Middle East (GCC)") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10">
            {t("Active Sectors in This Region")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {sectors.map((sector) => (
              <div key={sector.text} className="flex items-start gap-4" data-aos="fade-up">
                <sector.icon className="w-8 h-8 text-brand-primary shrink-0" />
                <p className="text-gray-600 leading-relaxed">{t(sector.text)}</p>
              </div>
            ))}
          </div>

          <div className="bg-zinc-50 border border-zinc-200 p-6" data-aos="fade-up">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-bold text-brand-dark">{t("Compliance note:")}</span>{" "}
              {t("All GCC deployments include country-specific visa and emigration handling — including Saudi Wakala/Enjaz processes and UAE biometric requirements — managed through Overseas Processing.")}
            </p>
          </div>
        </section>

        <div data-aos="fade-up">
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
