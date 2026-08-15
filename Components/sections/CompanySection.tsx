import AppDownloadSection from "./AppDownloadSection";
import FAQSection from "./FAQSection";
import TeamSection from "./TeamSection";

export default function CompanySection() {
    return (
        <div className="bg-blue-50 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-30 py-12 lg:py-15 xl:py-20 space-y-10 xl:space-y-20">
            <AppDownloadSection />

            <FAQSection/>

            <TeamSection/>
        </div>
    )
}