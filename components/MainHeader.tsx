import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  XMarkIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { CgMenuGridR } from "react-icons/cg";
import logo from "@/public/logo.png";
import { useLanguage } from "@/context/LanguageContext";

interface DropdownItem {
  label: string;
  href: string;
}

const LANGUAGES = [
  { code: "en", name: "English", emoji: "🇬🇧" },
  { code: "mk", name: "Macedonian", emoji: "🇲🇰" },
  { code: "sr", name: "Serbian", emoji: "🇷🇸" },
  { code: "el", name: "Greek", emoji: "🇬🇷" },
  { code: "ro", name: "Romanian", emoji: "🇷🇴" },
  { code: "bg", name: "Bulgarian", emoji: "🇧🇬" },
  { code: "be", name: "Belarusian", emoji: "🇧🇾" },
  { code: "bs", name: "Bosnian", emoji: "🇧🇦" },
  { code: "tr", name: "Turkish", emoji: "🇹🇷" },
  { code: "hr", name: "Croatian", emoji: "🇭🇷" },
  { code: "sl", name: "Slovenian", emoji: "🇸🇮" },
  { code: "sk", name: "Slovak", emoji: "🇸🇰" },
] as const;

function HeaderDropdown({
  label,
  items,
  href,
}: {
  label: string;
  items: DropdownItem[];
  href?: string;
}) {
  const { t } = useLanguage();
  return (
    <div className="relative group flex items-center h-full cursor-pointer">
      <Link
        href={href || "#"}
        className="inline-flex items-center justify-center gap-x-1 text-sm font-bold tracking-tight text-background group-hover:text-brand-accent h-full py-4">
        {t(label)}
        <ChevronDownIcon
          className="h-4 w-4 stroke-2 transition-transform duration-300 group-hover:rotate-180"
          aria-hidden="true"
        />
      </Link>

      {/* Invisible bridge to prevent hover loss */}
      <div className="absolute top-full left-0 w-full h-4" />

      {/* Dropdown Container */}
      <div className="absolute top-[calc(100%-8px)] left-0 z-50 w-72 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="p-6 flex flex-col">
          {/* Header inside the dropdown */}
          <h3 className="text-brand-primary text-[18px] font-bold mb-6">
            {t(label)}
          </h3>

          {/* Items List with left border */}
          <div className="flex flex-col border-l border-brand-primary/20 ml-1">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2.5 pl-5 text-[14px] font-medium text-brand-dark/70 hover:text-brand-primary transition-colors">
                {t(item.label)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileHeaderDropdown({
  label,
  items,
  defaultOpen = false,
  onClose,
}: {
  label: string;
  items: DropdownItem[];
  defaultOpen?: boolean;
  onClose?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { t } = useLanguage();
  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-6 py-4 text-sm font-bold transition-colors ${
          isOpen
            ? "bg-brand-primary text-background"
            : "text-brand-dark border-b border-brand-dark/10 hover:bg-brand-primary/5"
        }`}>
        {t(label)}
        <ChevronDownIcon
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180 text-background" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="flex flex-col bg-brand-primary/5">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-8 py-4 border-b border-brand-dark/10 group">
              <ChevronRightIcon className="h-4 w-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
              <span className="text-brand-dark text-xs font-bold group-hover:text-brand-primary transition-colors">
                {t(item.label)}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MainHeader() {
  const SHOW_FULL_NAV = true;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const activeLanguage =
    LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-16 md:h-18 items-center justify-between px-4 md:px-10 text-white bg-brand-primary transition-all duration-300">
      {/* Logo */}
      <div className="shrink-0 pt-2 z-50">
        <Link href="/" className="flex items-center" aria-label="Lucru home">
          <Image
            src={logo}
            alt="Core Migration"
            priority
            className="h-10 md:h-12 w-auto"
          />
        </Link>
      </div>

      {/* Mobile Menu Button - Shown only on Mobile */}
      <div className="md:hidden flex items-center pt-2 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-background hover:text-brand-accent focus:outline-none"
          aria-label="Open menu">
          <CgMenuGridR className="h-7 w-7" />
        </button>
      </div>

      {/* Desktop Navigation & Icons Container (Right Aligned) */}
      <div className="hidden md:flex items-center space-x-6 h-full">
        {/* Main Navigation (Desktop) */}
        <nav className="flex items-center space-x-6">
          {SHOW_FULL_NAV && (
            <Link
              href="/about-us"
              className="font-bold text-sm tracking-tight text-background hover:text-brand-accent">
              {t("About Us")}
            </Link>
          )}
          {SHOW_FULL_NAV && (
            <>
              <HeaderDropdown
                label="Our Solutions"
                href="/our-solutions"
                items={[
                  {
                    label: "Direct & Specialist Recruitment",
                    href: "/our-solutions/direct-specialist-recruitment",
                  },
                  {
                    label: "Bulk Mobilization",
                    href: "/our-solutions/bulk-mobilization",
                  },
                  {
                    label: "Overseas Processing",
                    href: "/our-solutions/overseas-processing",
                  },
                ]}
              />
              <HeaderDropdown
                label="Industries"
                href="/industries"
                items={[
                  {
                    label: "Heavy Construction & Infrastructure",
                    href: "/industries#heavy-construction-infrastructure",
                  },
                  {
                    label: "Healthcare & Life Sciences",
                    href: "/industries#healthcare-life-sciences",
                  },
                  {
                    label: "Oil, Gas & Energy",
                    href: "/industries#oil-gas-energy",
                  },
                  {
                    label: "Hospitality & Catering",
                    href: "/industries#hospitality-catering",
                  },
                  {
                    label: "Facility Management & Logistics",
                    href: "/industries#facility-management-logistics",
                  },
                ]}
              />
              <HeaderDropdown
                label="Regional Coverage"
                href="/regional-coverage"
                items={[
                  {
                    label: "Middle East (GCC)",
                    href: "/regional-coverage/middle-east",
                  },
                  {
                    label: "United Kingdom",
                    href: "/regional-coverage/united-kingdom",
                  },
                  { label: "Europe", href: "/regional-coverage/europe" },
                ]}
              />
            </>
          )}
          <HeaderDropdown
            label="Vacancies"
            href="/vacancies"
            items={[
              { label: "Browse Roles", href: "/vacancies" },
              { label: "Register as a Candidate", href: "/vacancies/register" },
            ]}
          />
          <Link
            href="/how-we-deliver"
            className="font-bold text-sm tracking-tight text-background hover:text-brand-accent">
            {t("How We Deliver")}
          </Link>
          <Link
            href="/contact-us"
            className="font-bold text-sm tracking-tight text-background hover:text-brand-accent">
            {t("Contact Us")}
          </Link>
        </nav>

        {/* Language Switcher */}
        <div className="relative group/lang flex items-center h-full cursor-pointer border-l border-white/20 pl-4 py-4">
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/30 hover:border-brand-accent hover:bg-white/10 text-xs font-bold transition-all text-background uppercase">
            <span className="text-sm">{activeLanguage.emoji}</span>
            <span>{activeLanguage.code}</span>
            <ChevronDownIcon className="h-3 w-3 stroke-2 transition-transform duration-300 group-hover/lang:rotate-180" />
          </button>
          {/* Invisible bridge */}
          <div className="absolute top-full right-0 w-full h-4" />

          {/* Dropdown Menu */}
          <div className="absolute top-[calc(100%-8px)] right-0 z-50 w-44 bg-white shadow-xl opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300 rounded-lg overflow-hidden border border-brand-dark/10">
            <div className="py-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLocale(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-brand-primary/5 transition-colors ${locale === lang.code ? "font-bold text-brand-primary bg-brand-primary/5" : "text-brand-dark/70"}`}>
                  <span className="text-base">{lang.emoji}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu Drawer */}
      <Transition
        show={isMobileMenuOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <div className="md:hidden fixed inset-0 z-50 bg-background overflow-y-auto w-full min-h-screen text-brand-dark">
          {/* Header inside drawer */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-brand-dark/10">
            <Link
              href="/"
              aria-label="Lucru home"
              onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src={logo}
                alt="Core Migration"
                priority
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-dark hover:text-brand-primary focus:outline-none"
                aria-label="Close menu">
                <XMarkIcon className="h-8 w-8 stroke-1" />
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col w-full pb-10">
            {SHOW_FULL_NAV && (
              <Link
                href="/about-us"
                className="px-6 py-4 text-[16px] font-bold text-brand-dark border-b border-brand-dark/10 w-full text-left hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>
                {t("About Us")}
              </Link>
            )}
            {SHOW_FULL_NAV && (
              <>
                <MobileHeaderDropdown
                  label="Our Solutions"
                  defaultOpen={true}
                  onClose={() => setIsMobileMenuOpen(false)}
                  items={[
                    {
                      label: "Direct & Specialist Recruitment",
                      href: "/our-solutions/direct-specialist-recruitment",
                    },
                    {
                      label: "Bulk Mobilization",
                      href: "/our-solutions/bulk-mobilization",
                    },
                    {
                      label: "Overseas Processing",
                      href: "/our-solutions/overseas-processing",
                    },
                  ]}
                />
                <MobileHeaderDropdown
                  label="Industries"
                  onClose={() => setIsMobileMenuOpen(false)}
                  items={[
                    {
                      label: "Heavy Construction & Infrastructure",
                      href: "/industries#heavy-construction-infrastructure",
                    },
                    {
                      label: "Healthcare & Life Sciences",
                      href: "/industries#healthcare-life-sciences",
                    },
                    {
                      label: "Oil, Gas & Energy",
                      href: "/industries#oil-gas-energy",
                    },
                    {
                      label: "Hospitality & Catering",
                      href: "/industries#hospitality-catering",
                    },
                    {
                      label: "Facility Management & Logistics",
                      href: "/industries#facility-management-logistics",
                    },
                  ]}
                />
                <MobileHeaderDropdown
                  label="Regional Coverage"
                  onClose={() => setIsMobileMenuOpen(false)}
                  items={[
                    {
                      label: "Middle East (GCC)",
                      href: "/regional-coverage/middle-east",
                    },
                    {
                      label: "United Kingdom",
                      href: "/regional-coverage/united-kingdom",
                    },
                    { label: "Europe", href: "/regional-coverage/europe" },
                  ]}
                />
              </>
            )}
            <MobileHeaderDropdown
              label="Vacancies"
              onClose={() => setIsMobileMenuOpen(false)}
              items={[
                { label: "Browse Roles", href: "/vacancies" },
                {
                  label: "Register as a Candidate",
                  href: "/vacancies/register",
                },
              ]}
            />
            <Link
              href="/how-we-deliver"
              className="px-6 py-4 text-[16px] font-bold text-brand-dark border-b border-brand-dark/10 w-full text-left hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              {t("How We Deliver")}
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-4 text-[16px] font-bold text-brand-dark border-b border-brand-dark/10 w-full text-left hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              {t("Contact Us")}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="px-6 py-6 border-b border-brand-dark/10 bg-brand-primary/5">
              <p className="text-xs font-bold text-brand-dark/60 uppercase tracking-wider mb-3">
                {t("Select Language")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
                      locale === lang.code
                        ? "bg-brand-primary text-background border-brand-primary"
                        : "bg-white text-brand-dark border-brand-dark/10 hover:bg-brand-primary/5"
                    }`}>
                    <span className="text-base">{lang.emoji}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
}
