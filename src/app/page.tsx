import FeaturesSection from "@/components/features-6";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-6";
import ContentSection from "@/components/content-2";
import TeamSection from "@/components/team";

import WallOfLoveSection from "@/components/testimonials";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <ContentSection />
      <TeamSection />
      <WallOfLoveSection />
    </div>
  );
}
