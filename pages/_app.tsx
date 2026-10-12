import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "@/components/MainHeader";
import { Montserrat } from "next/font/google";
import ScrollAnimations from "@/components/ScrollAnimations";
import SiteFooter from "@/components/SiteFooter";
import FloatingVacanciesTab from "@/components/FloatingVacanciesTab";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className={`${montserrat.variable} font-sans`}>
        <MainHeader />
        <Component {...pageProps} />
        <ScrollAnimations />
        <SiteFooter />
        <FloatingVacanciesTab />
      </div>
    </LanguageProvider>
  );
}
