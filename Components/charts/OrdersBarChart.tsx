"use client"

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Friday", value: 7088 },
  { day: "Saturday", value: 7115 },
  { day: "Sunday", value: 7126 },
  { day: "Monday", value: 3499 },
  { day: "Tuesday", value: 6895 },
  { day: "Wednesday", value: 6909 },
  { day: "Thursday", value: 7169 },
];

export default function OrdersBarChart() {
  return (
    <div className="w-full h-120 bg-white rounded-xl pt-8 pb-10 shadow-xl">

      <div className="flex items-center justify-between mx-6">
        <div className="text-left space-y-2">
          <h4 className="font-bold text-xl">Merchant Orders</h4>
          <h4 className="font-extrabold text-2xl">46,757</h4>
          <p className="text-gray-600 font-semibold">Weekly Orders</p>
        </div>

        <div className="flex gap-2">
          <p className="text-gray-500 border border-gray-500 py-1 px-3 rounded-full cursor-pointer">Today</p>
          <p className="bg-blue-600 text-white py-1 px-3 rounded-full cursor-pointer">This Week</p>
        </div>
      </div>

      <div className="h-80 ml-6 mr-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap="20px"
            margin={{ top: 25, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#d1d5db"
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="day"
              ticks={["Friday", "Sunday", "Tuesday", "Thursday"]}
              
              tickLine={false}
              axisLine={false}
              interval={0}
              tick={({ x, y, payload },) => {
                const visibleDays = ["Friday", "Sunday", "Tuesday", "Thursday"]

                if (!visibleDays.includes(payload.value)) {
                  return null
                }

                return (
                  <text
                    x={x}
                    y={Number(y) + 8}
                    textAnchor="middle"
                    fill="#475569"
                    fontSize={13}
                  >
                    {payload.value}
                  </text>
                )
              }}
            />
            <YAxis
              domain={[0, 8000]}
              ticks={[0, 2000, 4000, 6000, 8000]}
              
              tickFormatter={(value) => value}
              tickLine={true}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 13 }}
              width={55}
            />
            <Tooltip
              formatter={(value) => [
                value,
                "Orders",
              ]}

              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                textAlign: "left",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
              }}
            />


            <Bar dataKey="value" fill="#2563eb" radius={[10, 10, 0, 0]} barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}