import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StorySection } from "@/components/StorySection";
import { SupportSection } from "@/components/SupportSection";

export function LandingPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <HeroSection />
        <BenefitsSection />
        <StorySection />
        <SupportSection />
        <ShowcaseSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
