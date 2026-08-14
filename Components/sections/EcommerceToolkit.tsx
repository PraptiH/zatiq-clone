import AnalyticAnimation from "./AnalyticAnimation";
import CustomizeStoreAnimation from "./CustomizeStoreAnimation";
import InventoryAnimation from "./InventoryAnimation";
import ManageStoreAnimation from "./ManageStoreAnimation";
import ScreenAnimation from "./ScreenAnimation";
import ShippingAnimation from "./ShippingAnimation";

export default function EcommerceToolkit() {
    return (
        <div>
            <div>
                <h1 className="font-semibold text-5xl text-center">Your Complete Ecommerce Toolkit <br />
                    Manage Shipping, Inventory, Orders, and More From One Platform</h1>

                <p className="text-center text-gray-600 font-light pt-5 pb-10">Smart tools that make your business smarter</p>
            </div>

            <div className="space-y-5">

                <div className="flex justify-center gap-4 ">

                    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow">

                        <ShippingAnimation />

                        <div>
                            <h3 className="font-semibold text-lg">Shipping Made simple</h3>
                            <p className="text-sm text-gray-600">Shipping doesn't have to be complicated. Connect with top delivery services.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow">

                        <InventoryAnimation />

                        <div>
                            <h3 className="font-semibold text-lg">Inventory & Order Management</h3>
                            <p className="text-sm text-gray-600">Forget about stock shortages or overselling. Track inventory in real-time, low-stock view.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow">

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

                <div className="flex justify-center gap-4 ">

                    <div className="flex flex-col items-center justify-center gap-4 rounded-lg w-7/12 bg-white p-4 shadow">

                        <ScreenAnimation />

                        <div>
                            <h3 className="font-semibold text-lg">Perfect on every screen</h3>
                            <p className="text-sm text-gray-600">Your store looks stunning on any device desktop, tablet, or mobile. Enjoy a smooth experience.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 rounded-lg w-6/12 bg-white p-4 shadow">

                        <ManageStoreAnimation />

                        <div>
                            <h3 className="font-semibold text-lg">Manage Your Store Anytime</h3>
                            <p className="text-sm text-gray-600">Easily build, customize, and manage your store. Plus, with our mobile app.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow">

                        <CustomizeStoreAnimation />

                        <div>
                            <h3 className="font-semibold text-lg">Customize Your Store</h3>
                            <p className="text-sm text-gray-600">Choose from beautifully crafted themes and personalize every detail to create a store.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}