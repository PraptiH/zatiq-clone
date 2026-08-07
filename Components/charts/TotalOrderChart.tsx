"use client"
import { Pie, PieChart, ResponsiveContainer } from "recharts";

export default function TotalOrderChart({ isAnimationActive = true }: { isAnimationActive?: boolean }) {

    const data = [
        { name: "Online Payment", value: 163.9, fill: "#3b82f6" },
        { name: "Online Payment", value: 163.9, fill: "#D3D3D0" },
        { name: "Cash on Delivery", value: 8692.4, fill: "#10b981" }
    ]

    return (
        <div className="w-full bg-white rounded-xl pt-8 pb-10 px-8 shadow-xl">
            <div className="space-y-2 font-[550] text-base">
                <div className="flex items-center gap-1">
                    <span className="h-3 w-3 rounded-full bg-blue-500" />
                    <p>Online Payment ৳163.9M - 1.9%</p>
                </div>
                <div className="flex items-center gap-1">
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    <p> Cash on Delivery ৳8692.4M - 98.1%</p>
                </div>
            </div>
            <div className="h-70 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart >
                        <Pie
                            data={data}
                            // dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            cx="50%"
                            cy="100%"
                            innerRadius="70%"
                            outerRadius="80%"
                            isAnimationActive={isAnimationActive}
                        />

                    </PieChart>
                </ResponsiveContainer>

                <div className="pointer-events-none absolute left-0 right-0 -bottom-5">
                    <p className="font-semibold text-3xl">৳ 8863.8M</p>
                    <p className="text-sm">Total Order Amount</p>
                </div>
            </div>

        </div>
    )
}