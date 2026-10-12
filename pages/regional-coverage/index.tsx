import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

const regions = [
  {
    title: "Middle East (GCC)",
    description: "Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain — mega-project construction, healthcare, hospitality, and energy.",
    href: "/regional-coverage/middle-east",
    image: "https://images.pexels.com/photos/13256066/pexels-photo-13256066.jpeg",
  },
  {
    title: "United Kingdom",
    description: "Healthcare and infrastructure employers supported through full UK visa sponsorship and compliance.",
    href: "/regional-coverage/united-kingdom",
    image: "https://images.pexels.com/photos/3071145/pexels-photo-3071145.jpeg",
  },
  {
    title: "Europe",
    description: "Construction, healthcare, and industrial employers across Europe supported with the same end-to-end compliance model.",
    href: "/regional-coverage/europe",
    image: "https://images.pexels.com/photos/2265845/pexels-photo-2265845.jpeg",
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
      <main className="min-h-screen">
        <ServicesHero
          title={t("Deploying Talent Across Our Active Destination")}
          titleAccent={t("Markets")}
          subtitle={t("Core Migration deploys trade-tested, verified professionals across the Middle East (GCC), the United Kingdom, and Europe.")}
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Regional Coverage") },
          ]}
        />

        <section className="bg-[linear-gradient(160deg,#fff_0_58%,var(--color-cm-mint)_58%_100%)] py-16 md:py-24">
          <div className="mx-auto grid max-w-300 grid-cols-1 gap-7 px-6 md:grid-cols-3">
            {regions.map((region, i) => (
              <Link
                key={region.title}
                href={region.href}
                className="group flex flex-col overflow-hidden rounded-[28px] bg-cm-tile transition-all duration-200 hover:-translate-y-1 hover:bg-cm-hover"
                data-aos="fade-up"
                data-aos-delay={i * 100}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={region.image} alt={t(region.title)} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-3 text-2xl font-bold text-cm-deep">{t(region.title)}</h3>
                  <p className="mb-6 flex-1 text-base leading-relaxed text-cm-ink">{t(region.description)}</p>
                  <span className="btn-fresh self-start px-6 py-2.5 text-base">{t("Explore")} {t(region.title)}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <MobileAppSection
          headline="Hiring in One of"
          headlineAccent="Our Markets?"
          description="Tell us where your workforce is needed and we will plan sourcing, processing, and deployment for that destination."
          primaryCta={{ label: "Request a Sourcing Plan", href: "/contact-us" }}
          secondaryCta={{ label: "View Overseas Vacancies", href: "/vacancies" }}
        />
      </main>
    </>
  );
}
