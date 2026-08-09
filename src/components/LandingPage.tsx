import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function LandingPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
