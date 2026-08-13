import DemoBanner from "./DemoBanner";
import EcommerceToolkit from "./EcommerceToolkit";
import StoreShowcase from "./StoreShowcase";

export default function LandingHighlights() {
    return (
        <div className="bg-blue-50 space-y-16 px-30 py-10">
            <StoreShowcase />

            <EcommerceToolkit />

            <DemoBanner />
        </div>
    )
}