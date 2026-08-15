import DemoBanner from "./DemoBanner";
import EcommerceToolkit from "./EcommerceToolkit";
import StoreShowcase from "./StoreShowcase";

export default function LandingHighlights() {
    return (
        <div className="bg-blue-50 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-30 py-12 lg:py-15 xl:py-20 space-y-20">
            <StoreShowcase />

            <EcommerceToolkit />

            <DemoBanner />
        </div>
    )
}