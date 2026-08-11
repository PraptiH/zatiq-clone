import AppDownloadSection from "./AppDownloadSection";
import FAQSection from "./FAQSection";

export default function CompanySection() {
    return (
        <div className="bg-blue-50 px-30 py-20 space-y-20">
            <AppDownloadSection />

            <FAQSection/>
        </div>
    )
}