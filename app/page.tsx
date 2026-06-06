import { NavigationBar } from "@/components/navigation-bar";
import { LanguageBanner } from "@/components/sections/language-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <div className="page-fade">
      <NavigationBar />
      <HeroSection />
      <LanguageBanner />
      <FeaturesSection />
      <CtaBanner />
      <FooterSection />
    </div>
  );
}
