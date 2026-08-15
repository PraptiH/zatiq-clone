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
                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:w-11/12 px-4 mx-auto text-center">Your Complete Ecommerce Toolkit <br />
                    Manage Shipping, Inventory, Orders, and More From One Platform</h1>

                <p className="text-center text-gray-600 font-light sm:text-lg md:text-xl px-4 pt-5 pb-10">Smart tools that make your business smarter</p>
            </div>

            <div className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-wrap justify-center gap-4 ">

                    <div className="h-full">

                        <div className="relative flex flex-wrap items-center justify-center bg-white h-full w-full rounded-lg p-4 gap-4 xl:hidden">
                            <ShippingAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Shipping Made simple</h3>
                                <p className="text-sm text-gray-600">Shipping doesn't have to be complicated. Connect with top delivery services.</p>
                            </div>
                        </div>

                        <div className="relative hidden xl:flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow w-80.75 h-99.25">
                            <ShippingAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Shipping Made simple</h3>
                                <p className="text-sm text-gray-600">Shipping doesn't have to be complicated. Connect with top delivery services.</p>
                            </div>

                        </div>
                    </div>

                    <div className="h-full">

                        <div className="relative flex flex-wrap items-center justify-center bg-white h-full w-full rounded-lg p-4 gap-4 xl:hidden">

                            <InventoryAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Inventory & Order Management</h3>
                                <p className="text-sm text-gray-600">Forget about stock shortages or overselling. Track inventory in real-time, low-stock view.</p>
                            </div>
                        </div>

                        <div className="relative hidden xl:flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow w-105.5 h-99.25">

                            <InventoryAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Inventory & Order Management</h3>
                                <p className="text-sm text-gray-600">Forget about stock shortages or overselling. Track inventory in real-time, low-stock view.</p>
                            </div>
                        </div>

                    </div>

                    <div className="h-full">
                        <div className="relative flex flex-wrap items-center justify-center bg-white h-full w-full rounded-lg p-4 gap-4 xl:hidden">

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

                        <div className="relative hidden xl:flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow w-99.75 h-99.25">

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

                    <div className="h-full">

                        <div className="relative flex flex-wrap items-center justify-center bg-white h-full w-full rounded-lg p-4 gap-4 xl:hidden">

                            <ScreenAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Perfect on every screen</h3>
                                <p className="text-sm text-gray-600">Your store looks stunning on any device desktop, tablet, or mobile. Enjoy a smooth experience.</p>
                            </div>
                        </div>

                        <div className="relative hidden xl:flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow w-md h-99.25">

                            <ScreenAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Perfect on every screen</h3>
                                <p className="text-sm text-gray-600">Your store looks stunning on any device desktop, tablet, or mobile. Enjoy a smooth experience.</p>
                            </div>
                        </div>

                    </div>

                    <div className="h-full">

                        <div className="relative flex flex-wrap items-center justify-center bg-white h-full w-full rounded-lg p-4 gap-4 xl:hidden">

                            <ManageStoreAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Manage Your Store Anytime</h3>
                                <p className="text-sm text-gray-600">Easily build, customize, and manage your store. Plus, with our mobile app.</p>
                            </div>
                        </div>

                        <div className="relative hidden xl:flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow w-99 h-99.25">

                            <ManageStoreAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Manage Your Store Anytime</h3>
                                <p className="text-sm text-gray-600">Easily build, customize, and manage your store. Plus, with our mobile app.</p>
                            </div>
                        </div>

                    </div>

                    <div className="h-full">

                        <div className="relative flex flex-wrap items-center justify-center bg-white h-full w-full rounded-lg p-4 gap-4 xl:hidden">

                            <CustomizeStoreAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Customize Your Store</h3>
                                <p className="text-sm text-gray-600">Choose from beautifully crafted themes and personalize every detail to create a store.</p>
                            </div>
                        </div>

                        <div className="relative hidden xl:flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow w-74.75 h-99.25">

                            <CustomizeStoreAnimation />

                            <div>
                                <h3 className="font-semibold text-lg">Customize Your Store</h3>
                                <p className="text-sm text-gray-600">Choose from beautifully crafted themes and personalize every detail to create a store.</p>
                            </div>
                        </div>

                    </div>

                </div >
            </div >
        </div >
    )
}