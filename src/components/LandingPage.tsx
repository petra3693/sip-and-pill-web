import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StorySection } from "@/components/StorySection";
import { SupportSection } from "@/components/SupportSection";
import { ValuesSection } from "@/components/ValuesSection";

export function LandingPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <HeroSection />
        <ValuesSection />
        <FeaturesSection />
        <StorySection />
        <SupportSection />
      </main>
      <SiteFooter />
    </div>
  );
}
