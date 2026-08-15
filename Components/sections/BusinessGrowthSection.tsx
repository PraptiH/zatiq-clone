import OnboardingSection from "./OnboardingSection";
import TestimonialSection from "./TestimonialSection";

export default function BusinessGrowthSection() {
    return (
        <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-30 py-12 lg:py-15 xl:py-20 space-y-10 xl:space-y-20">
            <OnboardingSection />
            <TestimonialSection/>
        </div>
    )
}