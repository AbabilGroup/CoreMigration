import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ServicesHero from "@/components/ServicesHero";
import { useLanguage } from "@/context/LanguageContext";

const regions = [
  {
    title: "Middle East (GCC)",
    description: "Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain — mega-project construction, healthcare, hospitality, and energy.",
    href: "/regional-coverage/middle-east",
    image: "https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg",
  },
  {
    title: "United Kingdom",
    description: "Healthcare and infrastructure employers supported through full UK visa sponsorship and compliance.",
    href: "/regional-coverage/united-kingdom",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
  },
  {
    title: "Europe",
    description: "Construction, healthcare, and industrial employers across Europe supported with the same end-to-end compliance model.",
    href: "/regional-coverage/europe",
    image: "https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg",
  },
];

export default function RegionalCoverage() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Regional Coverage - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration deploys trade-tested talent across the Middle East (GCC), the United Kingdom, and Europe.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Deploying Talent Across Our Active Destination")}
          titleAccent={t("Markets")}
          subtitle={t("Core Migration deploys trade-tested, verified professionals across the Middle East (GCC), the United Kingdom, and Europe.")}
          image="https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Regional Coverage") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, i) => (
              <Link
                key={region.title}
                href={region.href}
                className="card-hover group border border-gray-200 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 100}>
                <div className="relative w-full h-48 overflow-hidden">
                  <Image src={region.image} alt={t(region.title)} fill sizes="(max-width: 768px) 100vw, 33vw" className="card-hover-img object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                    {t(region.title)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(region.description)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
