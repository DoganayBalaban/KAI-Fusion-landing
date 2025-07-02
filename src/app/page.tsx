import dynamic from "next/dynamic";

const FeaturesSection = dynamic(() => import("@/components/features-6"));
const IntegrationsSection = dynamic(
  () => import("@/components/integrations-6")
);
const TeamSection = dynamic(() => import("@/components/team"));
const HeroSection = dynamic(() => import("@/components/hero-section"));
const ContentSection = dynamic(() => import("@/components/content-2"));
const WallOfLoveSection = dynamic(() => import("@/components/testimonials"));

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
