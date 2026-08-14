import AnalyticAnimation from "./AnalyticAnimation";
import InventoryAnimation from "./InventoryAnimation";
import ShippingAnimation from "./ShippingAnimation";

export default function EcommerceToolkit() {
    return (
        <div className="border border-black">
            <div>
                <h1 className="font-semibold text-5xl text-center">Your Complete Ecommerce Toolkit <br />
                    Manage Shipping, Inventory, Orders, and More From One Platform</h1>

                <p className="text-center text-gray-600 font-light pt-5 pb-10">Smart tools that make your business smarter</p>
            </div>

            <div className="flex justify-center gap-4 ">

                <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-xl">

                    <ShippingAnimation />

                    <div>
                        <h3 className="font-semibold text-lg">Shipping Made simple</h3>
                        <p className="text-sm text-gray-600">Shipping doesn't have to be complicated. Connect with top delivery services.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-xl">

                    <InventoryAnimation />

                    <div>
                        <h3 className="font-semibold text-lg">Inventory & Order Management</h3>
                        <p className="text-sm text-gray-600">Forget about stock shortages or overselling. Track inventory in real-time, low-stock view.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-xl">

                    <div className="flex items-center justify-between w-full">
                        <p className="font-semibold text-lg">Analytics</p>
                        <p className="text-gray-600 text-sm">Aug 3 - Aug 13, 2026</p>
                    </div>

                    <AnalyticAnimation />

                    <div>
                        <h3 className="font-semibold text-lg">Real-Time Analytics & Insights</h3>
                        <p className="text-sm text-gray-600">Stay ahead of the game with real-time analytics. Monitor sales, customer behavior.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}