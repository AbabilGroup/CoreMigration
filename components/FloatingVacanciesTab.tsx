import Link from "next/link";
import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";

/** Corner tab pinned to the bottom right of every page except the vacancies pages. */
export default function FloatingVacanciesTab() {
  const { t } = useLanguage();
  const { pathname } = useRouter();

  if (pathname.startsWith("/vacancies")) return null;

  return (
    <Link
      href="/vacancies"
      className="fixed bottom-0 right-6 z-30 flex h-32 w-36 items-end rounded-[70px_24px_0_0] bg-cm-fresh pb-4 pl-4 text-[13px] font-bold leading-tight text-white [clip-path:polygon(0_30%,100%_100%,0_100%)] md:h-37.5 md:w-47.5 md:text-[17px]">
      <span className="max-w-[60%]">{t("Browse Vacancies")}</span>
    </Link>
  );
}
