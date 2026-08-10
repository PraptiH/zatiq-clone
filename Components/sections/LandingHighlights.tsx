import DemoBanner from "./DemoBanner";
import StoreShowcase from "./StoreShowcase";

export default function LandingHighlights(){
    return(
        <div className="bg-blue-50 px-30 py-10">
            <StoreShowcase/>

            <DemoBanner/>
        </div>
    )
}