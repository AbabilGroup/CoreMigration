import Head from "next/head";
import Link from "next/link";
import ServicesHero from "@/components/ServicesHero";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const visaItems = [
  {
    title: "Consulate Liaison",
    description: "Direct submission of Demand Letters, Power of Attorney documents, and candidate passports",
  },
  {
    title: "GCC System Management",
    description: "Operating within destination visa platforms (e.g., Saudi Wakala/Enjaz, UAE biometric protocols)",
  },
  {
    title: "GAMCA/Wafid Medical Tracking",
    description: "Coordination and status monitoring of mandatory medical examinations",
  },
  {
    title: "Visa Endorsement & Stamping",
    description: "Full administrative handling through to final endorsement",
  },
  {
    title: "Emigration Clearance",
    description: "Securing mandatory BMET/Protector clearances required for legal exit",
  },
];

const attestationItems = [
  {
    title: "Educational Certificates",
    description: "Degrees, diplomas, technical certifications, and marksheets required for skilled visa categories",
  },
  {
    title: "Commercial & Hiring Documents",
    description: "Demand Letters, Power of Attorney, and Agency Agreements needed to initiate recruitment",
  },
  {
    title: "Personal Documentation",
    description: "Police Clearance Certificates, birth certificates, and professional licenses",
  },
];

const orientationItems = [
  {
    title: "Cultural Adaptation",
    description: "Local laws, religious customs, and everyday etiquette in the host country",
  },
  {
    title: "Occupational Safety",
    description: "Site safety protocols, PPE standards, and emergency procedures",
  },
  {
    title: "Workplace Ethics & Rights",
    description: "Contractual rights, grievance processes, salary structure, and accommodation guidelines",
  },
  {
    title: "Basic Communication",
    description: "Essential terminology and common phrases used on host-country worksites",
  },
];

const tabs = [
  { id: "visa-processing", label: "Visa Processing & Emigration" },
  { id: "document-attestation", label: "Document Attestation" },
  { id: "pre-departure-orientation", label: "Pre-Departure Orientation" },
];

export default function OverseasProcessing() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Overseas Processing - Core Migration")}</title>
        <meta
          name="description"
          content={t("Finding the right candidate is only part of cross-border recruitment. Core Migration manages the entire compliance pipeline in-house to prevent delays and ensure legal, on-time arrival.")}
        />
      </Head>
      <main className="min-h-screen">
        <ServicesHero
          title={t("Navigating Visa, Attestation, and Emigration So Your Workforce Arrives")}
          titleAccent={t("Ready")}
          subtitle={t("Finding the right candidate is only part of cross-border recruitment. Core Migration manages the entire compliance pipeline in-house to prevent delays and ensure legal, on-time arrival.")}
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Our Solutions"), href: "/our-solutions" },
            { label: t("Overseas Processing") },
          ]}
        />

        {/* Scroll-anchor tab navigation */}
        <nav className="sticky top-16 md:top-18 z-30 border-b-2 border-cm-hover bg-white overflow-x-auto">
          <div className="mx-auto flex max-w-300 gap-3 px-6 py-3">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="whitespace-nowrap rounded-full bg-cm-tile px-5 py-2.5 text-sm font-bold text-cm-deep transition-colors hover:bg-cm-hover">
                {t(tab.label)}
              </a>
            ))}
          </div>
        </nav>

        <section id="visa-processing" className="bg-white py-16 md:py-24 scroll-mt-32">
          <div className="mx-auto max-w-300 px-6">
            <SectionHeading>{t("Visa Processing & Emigration")}</SectionHeading>
            <div className="mt-12 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visaItems.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border-2 border-cm-hover bg-white p-8"
                  data-aos="fade-up"
                  data-aos-delay={(i % 3) * 100}>
                  <div className="mb-4 grid h-13 w-13 place-items-center rounded-full bg-cm-fresh font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="mb-2.5 text-xl font-semibold text-cm-deep">{t(item.title)}</h3>
                  <p className="text-base leading-relaxed text-cm-ink">{t(item.description)}</p>
                </div>
              ))}
            </div>
            <Link href="/contact-us" className="btn-fresh">
              {t("Contact Our Processing Desk")}
            </Link>
          </div>
        </section>

        <section id="document-attestation" className="bg-cm-mint py-16 md:py-24 scroll-mt-32">
          <div className="mx-auto max-w-300 px-6">
            <SectionHeading>{t("Document Attestation")}</SectionHeading>
            <div className="mt-12 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {attestationItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative isolate overflow-hidden rounded-[28px] p-8 text-white ${i % 2 ? "bg-cm-night" : "bg-cm-card"}`}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-15 -right-15 -z-10 h-45 w-45 rounded-full bg-cm-fresh/20"
                  />
                  <h3 className="mb-3 text-xl md:text-[22px] font-semibold">{t(item.title)}</h3>
                  <p className="text-base leading-relaxed text-white/90">{t(item.description)}</p>
                </div>
              ))}
            </div>
            <Link href="/contact-us" className="btn-deep">
              {t("Submit Documents for Attestation")}
            </Link>
          </div>
        </section>

        <section id="pre-departure-orientation" className="bg-white py-16 md:py-24 scroll-mt-32">
          <div className="mx-auto max-w-300 px-6">
            <SectionHeading intro={t("A well-informed worker is a productive worker. Every candidate deployed through Core Migration undergoes mandatory orientation before departure.")}>
              {t("Pre-Departure Orientation")}
            </SectionHeading>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {orientationItems.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-[28px] bg-cm-tile px-6 py-8 transition-all duration-200 hover:-translate-y-1 hover:bg-cm-hover"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}>
                  <h3 className="mb-2 text-xl font-bold text-cm-deep">{t(item.title)}</h3>
                  <p className="text-base leading-relaxed text-cm-ink">{t(item.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-cm-deep py-16 md:py-24 text-center text-white">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-30 -top-30 -z-10 h-105 w-105 rounded-full bg-cm-glow opacity-25"
          />
          <div className="mx-auto max-w-300 px-6">
            <h2 className="mb-8 text-3xl md:text-[44px] font-bold leading-tight">
              {t("Need Processing Support?")}
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link href="/contact-us" className="btn-fresh">
                {t("Contact Our Processing Desk")}
              </Link>
              <Link href="/contact-us" className="btn-ghost-light">
                {t("Submit Documents for Attestation")}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
