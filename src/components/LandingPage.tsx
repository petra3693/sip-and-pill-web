import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SupportSection } from "@/components/SupportSection";

export function LandingPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <SupportSection />
      </main>
      <SiteFooter />
    </div>
  );
}
