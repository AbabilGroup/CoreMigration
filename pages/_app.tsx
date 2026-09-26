import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "@/components/MainHeader";
import { Montserrat } from "next/font/google";
import ScrollAnimations from "@/components/ScrollAnimations";
import FooterBottomBar from "@/components/FooterBottomBar";
import SimpleFooter from "@/components/SimpleFooter";
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
        {/* <TopHeader /> */}
        <MainHeader />
        <Component {...pageProps} />
        <ScrollAnimations />
        <FooterBottomBar />
        <SimpleFooter />
      </div>
    </LanguageProvider>
  );
}
