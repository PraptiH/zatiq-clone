import BusinessGrowthSection from "@/Components/sections/BusinessGrowthSection";
import CompanySection from "@/Components/sections/CompanySection";
import Features from "@/Components/sections/Features";
import GlobalImpactSection from "@/Components/sections/GlobalImpactSection";
import Hero from "@/Components/sections/Hero";
import LandingHighlights from "@/Components/sections/LandingHighlights";
import PartnerSection from "@/Components/sections/PartnerSection";
import PricingSection from "@/Components/sections/PricingSection";

export default function Home() {
  return (
    <div className="border">
      <Hero />
      <LandingHighlights/>
      <BusinessGrowthSection/>
      <PricingSection/>
      <Features/>
      <CompanySection/>
      <GlobalImpactSection/>
      <PartnerSection/>
    </div>
  );
}
