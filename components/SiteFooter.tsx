import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import logo from "@/public/logo.png";
import { useLanguage } from "@/context/LanguageContext";

const columns = [
  {
    title: "Our Solutions",
    links: [
      { text: "Direct & Specialist Recruitment", href: "/our-solutions/direct-specialist-recruitment" },
      { text: "Bulk Mobilization", href: "/our-solutions/bulk-mobilization" },
      { text: "Overseas Processing", href: "/our-solutions/overseas-processing" },
    ],
  },
  {
    title: "Explore",
    links: [
      { text: "Industries", href: "/industries" },
      { text: "Regional Coverage", href: "/regional-coverage" },
      { text: "Vacancies", href: "/vacancies" },
      { text: "How We Deliver", href: "/how-we-deliver" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "/about-us" },
      { text: "Contact Us", href: "/contact-us" },
      { text: "Register as a Candidate", href: "/vacancies/register" },
    ],
  },
];

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="relative isolate overflow-hidden bg-cm-deep pt-16 md:pt-20 pb-28 md:pb-10 text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-25 -z-10 h-160 w-160 rounded-full bg-cm-glow opacity-45"
      />
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Core Migration home" className="inline-block">
            <Image src={logo} alt="Core Migration" className="h-12 w-auto" />
          </Link>
          <p className="mt-4.5 text-base leading-relaxed">
            {t("Registered Office")}
            <br />
            176 Crossbank Street
            <br />
            Oldham, England, OL8 1HE
          </p>
          <p className="mt-3.5">
            <a href="mailto:info@coremigration.eu" className="font-bold text-cm-orange hover:underline">
              info@coremigration.eu
            </a>
          </p>
          <SocialLinks className="mt-5 text-white" iconClassName="h-5 w-5 hover:text-cm-fresh transition-colors" />
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3.5 text-lg font-semibold">{t(col.title)}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.href} className="mb-2 text-base">
                  <Link href={link.href} className="hover:text-cm-fresh transition-colors">
                    {t(link.text)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-300 flex-col gap-3 px-6 text-sm opacity-85 sm:flex-row sm:items-center sm:justify-between">
        <span>{t("© Copyright 2026 Core Migration All rights reserved.")}</span>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="#" className="hover:text-cm-fresh">{t("Terms & Conditions")}</Link>
          <Link href="#" className="hover:text-cm-fresh">{t("Privacy Policy")}</Link>
          <Link href="#" className="hover:text-cm-fresh">{t("Quality Policy")}</Link>
        </div>
      </div>
    </footer>
  );
}
