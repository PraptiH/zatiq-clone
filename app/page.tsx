import BusinessGrowthSection from "@/Components/sections/BusinessGrowthSection";
import CompanySection from "@/Components/sections/CompanySection";
import Hero from "@/Components/sections/Hero";
import LandingHighlights from "@/Components/sections/LandingHighlights";
import PricingSection from "@/Components/sections/PricingSection";

export default function Home() {
  return (
    <div className="border">
      <Hero />
      <LandingHighlights/>
      <BusinessGrowthSection/>
      <PricingSection/>
      <CompanySection/>
    </div>
  );
}
