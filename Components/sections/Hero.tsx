import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";
import OrdersBarChart from "../charts/OrdersBarChart";
import SalesChart from "../charts/SalesChart";
import TotalOrderChart from "../charts/TotalOrderChart";

export default function Hero() {
    
    return (
        <div className="max-w-1074px mx-auto text-center space-y-2 border-2 border-black px-4 py-20 text-black">
            <div>
                <p className="text-blue-600 font-black text-base border border-blue-600 py-1 px-3 rounded-full inline-block">No. 1 Online business partner</p>
                <div className="space-y-8">
                    <div className="space-y-2 border ">
                        <h3 className="text-5xl border mx-auto ">One Platform <br /> Thousands of Success Stories</h3>
                        <p className="font-semibold ">More than 100,000 entrepreneurs trust ZatiqEasy <br />
                            Transform your idea into an online business — fast and easy</p>
                    </div>

                    <div className="space-y-1">
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

            <div className="flex gap-5 px-20">

                <OrdersBarChart />

                <SalesChart />

                <TotalOrderChart/>
            </div>
        </div>
    )
}