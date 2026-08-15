import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";
import OrdersBarChart from "../charts/OrdersBarChart";
import SalesChart from "../charts/SalesChart";
import TotalOrderChart from "../charts/TotalOrderChart";
import CustomerProof from "./CustomerProof";
import Shop from "./Shop";
import FloatingShimmerButton from "../ui/FloatingShimmerButton";

export default function Hero() {

    return (
        <div className="relative mt-16 bg-[url('/Images/background.svg')] overflow-hidden bg-no-repeat bg-cover max-w-1074px 
        mx-auto text-center space-y-2 px-4 py-20 text-black">
            <div className="max-w-268.5 mx-auto text-center px-4 space-y-2 md:space-y-4 pb-10">
                <p className="text-blue-600 font-medium text-base border border-blue-600 py-1 px-3 rounded-full inline-block">No. 1 Online business partner</p>

                <div className="space-y-8 md:space-y-1.5">
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl">One Platform <br /> Thousands of <br className="md
                        hidden"/>Success Stories</h3>
                        <p className="font-medium text-sm md:text-lg">More than 100,000 entrepreneurs trust ZatiqEasy <br />
                            Transform your idea into an online business — fast and easy</p>
                    </div>

                    <div className="space-y-1 md:space-y-1.5 mt-6 md:mt-8">
                        <ShimmerButton
                            shimmerColor="#fff"
                            shimmerSize="0.15rem"
                            borderRadius="100px"
                            shimmerDuration="2s"
                            background="#155dfc"
                            className="text-white inline font-semibold text-base md:text-lg px-4 md:px-6 py-2 md:py-3"
                        >
                            <span className="flex items-center gap-2">
                                Start for Free
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </ShimmerButton>
                        <p>(No credit card needed. No hidden fees.)</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-310.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mx-auto">

               <div className="h-full">
                 <div className="space-y-4 flex flex-col h-full w-full">
                    <OrdersBarChart />
                    <CustomerProof />
                </div>
               </div>

                <div>
                    <SalesChart />
                </div>

                <div className="space-y-4 flex flex-col justify-between h-full">
                    <TotalOrderChart />
                    <Shop />
                </div>
            </div>

            <FloatingShimmerButton/>
        </div>
    )
}