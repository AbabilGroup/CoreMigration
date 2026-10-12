import GlobalCTA from "./MobileAppSection";

export default function HomeCTA() {
  return (
    <GlobalCTA
      headline="Ready to Build Your International Workforce?"
      headlineAccent=""
      description="Whether you need one specialist or a full project workforce, our team delivers with full legal compliance."
      primaryCta={{ label: "Request a Sourcing Plan", href: "/contact-us" }}
      secondaryCta={{ label: "Browse Open Overseas Positions", href: "/vacancies" }}
    />
  );
}
