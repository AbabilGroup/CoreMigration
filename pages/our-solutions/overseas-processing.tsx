import Head from "next/head";
import Link from "next/link";
import ServicesHero from "@/components/ServicesHero";
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
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Navigating Visa, Attestation, and Emigration So Your Workforce Arrives")}
          titleAccent={t("Ready")}
          subtitle={t("Finding the right candidate is only part of cross-border recruitment. Core Migration manages the entire compliance pipeline in-house to prevent delays and ensure legal, on-time arrival.")}
          image="https://images.pexels.com/photos/8353802/pexels-photo-8353802.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Our Solutions"), href: "/our-solutions" },
            { label: t("Overseas Processing") },
          ]}
        />

        {/* Scroll-anchor tab navigation */}
        <nav className="sticky top-16 md:top-18 z-30 bg-white border-b border-gray-200 overflow-x-auto">
          <div className="max-w-5xl mx-auto flex px-6 md:px-12">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-brand-primary whitespace-nowrap transition-colors">
                {t(tab.label)}
              </a>
            ))}
          </div>
        </nav>

        <section id="visa-processing" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto scroll-mt-32">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10">
            {t("Visa Processing & Emigration")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {visaItems.map((item) => (
              <div key={item.title} data-aos="fade-up">
                <h3 className="font-bold text-brand-dark mb-2">{t(item.title)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(item.description)}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors">
            {t("Contact Our Processing Desk")}
          </Link>
        </section>

        <section id="document-attestation" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto bg-zinc-50 scroll-mt-32">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10">
            {t("Document Attestation")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            {attestationItems.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 p-6" data-aos="fade-up">
                <h3 className="font-bold text-brand-dark mb-2">{t(item.title)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(item.description)}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors">
            {t("Submit Documents for Attestation")}
          </Link>
        </section>

        <section id="pre-departure-orientation" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto scroll-mt-32">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            {t("Pre-Departure Orientation")}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
            {t("A well-informed worker is a productive worker. Every candidate deployed through Core Migration undergoes mandatory orientation before departure.")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {orientationItems.map((item) => (
              <div key={item.title} data-aos="fade-up">
                <h3 className="font-bold text-brand-dark mb-2">{t(item.title)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(item.description)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-brand-dark px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {t("Need Processing Support?")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-primary/90 transition-colors">
              {t("Contact Our Processing Desk")}
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
              {t("Submit Documents for Attestation")}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
