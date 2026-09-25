import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type LinkItem = { text: string; href: string };
type SubSection = { title: string; links: LinkItem[] };
type SitemapColumn = {
  title: string;
  links: LinkItem[];
  subsections?: SubSection[];
};

const sitemapData: SitemapColumn[] = [
  {
    title: "Our Solutions",
    links: [
      { text: "Direct & Specialist Recruitment", href: "/our-solutions/direct-specialist-recruitment" },
      { text: "Bulk Mobilization", href: "/our-solutions/bulk-mobilization" },
      { text: "Overseas Processing", href: "/our-solutions/overseas-processing" },
    ],
    subsections: [],
  },
  {
    title: "Industries & Coverage",
    links: [
      { text: "Industries", href: "/industries" },
      { text: "Middle East (GCC)", href: "/regional-coverage/middle-east" },
      { text: "United Kingdom", href: "/regional-coverage/united-kingdom" },
      { text: "Europe", href: "/regional-coverage/europe" },
    ],
    subsections: [],
  },
  {
    title: "Quick Links",
    links: [
      { text: "Home", href: "/" },
      { text: "About Us", href: "/about-us" },
      { text: "Vacancies", href: "/vacancies" },
      { text: "Register as a Candidate", href: "/vacancies/register" },
      { text: "How We Deliver", href: "/how-we-deliver" },
      { text: "Contact Us", href: "/contact-us" },
    ],
    subsections: [],
  },
  // New column for Company Information
  {
    title: "Company Location",
    links: [], // intentionally empty, will render custom address block
    subsections: [],
  },
];

const FooterSitemap = () => {
  const { t } = useLanguage();

  const renderLinks = (links: { text: string; href: string }[]) => {
    return (
      <ul className="flex flex-col gap-2.5 mt-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className="text-[#888888] hover:text-[#006A80] transition-colors text-[13px] font-medium block">
              {t(link.text)}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full max-w-350 mx-auto px-6 md:px-12 py-10 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {sitemapData.map((column, index) => (
          <div
            key={index}
            className="flex flex-col border-[#e8e8e8] sm:border-l sm:pl-6 first:border-l-0 first:pl-0">
            {column.title && (
              <h4 className="text-[#006A80] font-bold text-[15px] leading-tight mt-1">
                {t(column.title)}
              </h4>
            )}

            {/* Custom rendering for Company Information column */}
            {column.title === "Company Location" ? (
              <div className="flex flex-col gap-2.5 mt-3">
                <p className="text-[#888888] text-[13px] font-medium">
                  {t("Core Migration")}
                </p>
                <div>
                  <p className="text-[#888888] text-[13px] font-medium font-semibold">
                    {t("Registered Office:")}
                  </p>
                  <p className="text-[#888888] text-[13px] font-medium leading-relaxed">
                    176 Crossbank Street
                    <br />
                    Oldham, England
                    <br />
                    OL8 1HE
                  </p>
                </div>
                <div>
                  <p className="text-[#888888] text-[13px] font-medium font-semibold">
                    {t("Email:")}
                  </p>
                  <a
                    href="mailto:info@coremigration.eu"
                    className="text-[#888888] text-[13px] font-medium leading-relaxed hover:text-[#006A80] transition-colors">
                    info@coremigration.eu
                  </a>
                </div>
              </div>
            ) : (
              <>
                {column.links &&
                  column.links.length > 0 &&
                  renderLinks(column.links)}

                {column.subsections && column.subsections.length > 0 && (
                  <div className="flex flex-col gap-10 mt-10">
                    {column.subsections.map((sub, subIdx) => (
                      <div key={subIdx}>
                        {sub.title && (
                          <h4 className="text-[#006A80] font-bold text-[15px] leading-tight">
                            {t(sub.title)}
                          </h4>
                        )}
                        {sub.links &&
                          sub.links.length > 0 &&
                          renderLinks(sub.links)}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSitemap;
