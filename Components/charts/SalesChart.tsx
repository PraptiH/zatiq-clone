"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, 
  XAxis, YAxis, CartesianGrid, Tooltip,} from "recharts"

const paymentData = [
  { name: "Online Payment", value: 39200, color: "#D3D3D0" },
  { name: "Online Payment", value: 39200, color: "#3b82f6" },
  { name: "Cash on Delivery", value: 1900000, color: "#10b981" },
]

const weeklyData = [
  { day: "Saturday", amount: 10 },
  { day: "Sunday", amount: 28 },
  { day: "Monday", amount: 12 },
  { day: "Tuesday", amount: 11 },
  { day: "Wednesday", amount: 10 },
  { day: "Thursday", amount: 68 },
  { day: "Friday", amount: 2 },
]

export default function SalesCard() {
  return (
    <div className="w-full bg-white rounded-xl pt-8 pb-10 px-8 shadow-xl">
      <h3 className="text-xl text-left font-semibold text-gray-700">
        Today's Merchant Sell
      </h3>

      {/* Donut Chart */}
      
        <div className="relative h-45 w-full border">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={paymentData}
                dataKey="value"
                innerRadius={50}
                outerRadius={60}
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {paymentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center border">
            <span className="text-2xl font-bold">৳1.9M</span>
          </div>
        </div>
   

      {/* Legend */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between text-[15px]">
          <div className="flex items-center gap-3 text-slate-800">
            <span className="h-3 w-3 rounded-full bg-blue-500" />
            Online Payment
          </div>
          <span className="font-semibold text-slate-900">৳39.2K</span>
        </div>

        <div className="flex items-center justify-between text-[15px]">
          <div className="flex items-center gap-3 text-slate-800">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            Cash on Delivery
          </div>
          <span className="font-semibold text-slate-900">৳1.9M</span>
        </div>
      </div>

      <div className="my-8 border-t border-slate-200" />

   
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold text-gray-700">
          Weekly Merchant Sales
        </h4>

        <div className="flex items-center gap-2 text-blue-600">
          <span className="h-3 w-3 rounded-full bg-blue-500" />
          <span className="font-semibold">৳137.8M</span>
        </div>
      </div>

      {/* Line Chart */}
      <div className="mt-6 h-65 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={weeklyData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#e2e8f0"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#475569", fontSize: 12 }}
            />

            <YAxis
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              tickFormatter={(value) =>
                value === 0 ? "0" : `৳${value}.0M`
              }
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              width={54}
            />

            <Tooltip
              formatter={(value: number) => [`৳${value}.0M`, "Amount"]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                textAlign:"left",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
              }}
            />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#ffffff",
                stroke: "#3b82f6",
                strokeWidth: 3,
              }}
              activeDot={{
                r: 6,
                fill: "#3b82f6",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}