import Head from "next/head";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import {
  BuildingOffice2Icon,
  HeartIcon,
  FireIcon,
  CakeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const industries = [
  {
    id: "heavy-construction-infrastructure",
    icon: BuildingOffice2Icon,
    title: "Heavy Construction & Infrastructure",
    groups: [
      { label: "Technical & Professional", roles: "Civil Engineers, MEP Supervisors, Quantity Surveyors, Site Safety Officers" },
      { label: "Skilled Trades", roles: "Masons, Steel Fixers, Formwork Carpenters, Scaffolders, Plasterers" },
      { label: "Heavy Machinery", roles: "Tower Crane Operators, Excavator Drivers, Heavy Duty Mechanics, Riggers" },
    ],
  },
  {
    id: "healthcare-life-sciences",
    icon: HeartIcon,
    title: "Healthcare & Life Sciences",
    groups: [
      { label: "Clinical Staff", roles: "Registered Nurses (ICU, ER, OT, Pediatric), General Practitioners, Specialist Physicians" },
      { label: "Technical Healthcare", roles: "Laboratory Technicians, Radiographers, Pharmacists, Biomedical Technicians" },
      { label: "Licensure Support", roles: "Prometric testing, Dataflow verification, council registrations" },
    ],
  },
  {
    id: "oil-gas-energy",
    icon: FireIcon,
    title: "Oil, Gas & Energy",
    groups: [
      { label: "Specialized Trades", roles: "Certified 6G Pipe Welders (TIG/MIG/Arc), Pipe Fabricators, Mechanical Fitters" },
      { label: "Site Support", roles: "Industrial Riggers, NDT Technicians, Instrument Technicians, Plant Maintenance Crew" },
    ],
  },
  {
    id: "hospitality-catering",
    icon: CakeIcon,
    title: "Hospitality & Catering",
    groups: [
      { label: "Culinary", roles: "Executive Pastry Chefs, Commis Chefs, Line Cooks, Kitchen Stewards" },
      { label: "Front-of-House", roles: "Waitstaff, Bartenders, Front Desk Agents, Concierge, Bellboys" },
      { label: "Housekeeping", roles: "Floor Supervisors, Room Attendants, Laundry Technicians" },
    ],
  },
  {
    id: "facility-management-logistics",
    icon: WrenchScrewdriverIcon,
    title: "Facility Management & Logistics",
    groups: [
      { label: "Facility Maintenance", roles: "HVAC Technicians, Plumbers, Electricians, Multi-Skilled Handymen" },
      { label: "Building Operations", roles: "Commercial Cleaners, Security Guards, Building Superintendents" },
      { label: "Supply Chain", roles: "Forklift Operators, Warehouse Pickers/Packers, Inventory Clerks" },
    ],
  },
];

export default function Industries() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Industries - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration maintains active candidate pools and trade-testing networks tailored to the operational demands of critical global industries.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Dedicated Sourcing Pipelines Across Core Global")}
          titleAccent={t("Sectors")}
          subtitle={t("Core Migration maintains active candidate pools and trade-testing networks tailored to the operational demands of critical global industries.")}
          image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Industries") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-16">
          {industries.map((industry, i) => (
            <div
              key={industry.id}
              id={industry.id}
              className="card-hover border border-gray-200 p-8 md:p-10 scroll-mt-24"
              data-aos="fade-up"
              data-aos-delay={i * 50}>
              <div className="flex items-center gap-4 mb-8">
                <industry.icon className="w-10 h-10 text-brand-primary shrink-0" />
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">{t(industry.title)}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {industry.groups.map((group) => (
                  <div key={group.label}>
                    <h3 className="font-bold text-sm uppercase tracking-wider text-brand-primary mb-2">
                      {t(group.label)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{t(group.roles)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div data-aos="fade-up">
          <MobileAppSection
            headline="Sourcing for Your"
            headlineAccent="Specific Industry"
            primaryCta={{ label: "Request Sector-Specific Candidate Profiles", href: "/contact-us" }}
            secondaryCta={{ label: "Schedule an Industry Sourcing Consultation", href: "/contact-us" }}
          />
        </div>
      </main>
    </>
  );
}
