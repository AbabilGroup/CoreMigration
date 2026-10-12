import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "@/components/MainHeader";
import { Noto_Sans } from "next/font/google";
import ScrollAnimations from "@/components/ScrollAnimations";
import SiteFooter from "@/components/SiteFooter";
import FloatingVacanciesTab from "@/components/FloatingVacanciesTab";
import { LanguageProvider } from "@/context/LanguageContext";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "greek"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className={`${notoSans.variable} font-sans`}>
        <MainHeader />
        <Component {...pageProps} />
        <ScrollAnimations />
        <SiteFooter />
        <FloatingVacanciesTab />
      </div>
    </LanguageProvider>
  );
}
