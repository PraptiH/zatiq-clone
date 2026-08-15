"use client"

import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Sunday", value: 6700 },
  { day: "Monday", value: 6600 },
  { day: "Tuesday", value: 7100 },
  { day: "Wednesday", value: 7100 },
  { day: "Thursday", value: 6800 },
  { day: "Friday", value: 6300 },
  { day: "Saturday", value: 3600 },
]

const desktopDays = [
  "Sunday",
  "Tuesday",
  "Thursday",
  "Saturday",
]

const tabletDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export default function OrdersBarChart() {
  const [visibleDays, setVisibleDays] = useState(desktopDays)

  useEffect(() => {

    const handleResize = () => {
      const width = window.innerWidth

      // Tablet
      if (width === 640 ) {
         setVisibleDays(tabletDays)
        
      }
      // Mobile + Desktop
      else {
       setVisibleDays(desktopDays)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

 

  return (
    <div
      className="w-full h-full grow rounded-xl bg-white p-4 shadow-sm sm:p-6">

      <div className="flex xs:flex-col flex-row xs:items-start items-center justify-between gap-4">

        <div className="space-y-1 text-left">
          <h4 className="text-lg font-semibold text-gray-900">Merchant Orders</h4>

          <h4 className="text-3xl font-bold leading-tight text-gray-900">43,985</h4>

          <p className="text-sm font-medium text-gray-600">Weekly Orders</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-500 transition hover:bg-gray-50">
            Today
          </button>

          <button className="rounded-full bg-blue-600 px-4 py-1.5 text-sm text-white text-nowrap transition hover:bg-blue-700">
            This Week
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 h-70 w-full sm:mt-6 sm:h-65 md:h-72.5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            barCategoryGap="12%"
          >
            <CartesianGrid
              vertical={false}
              stroke="#d1d5db"
              strokeDasharray="3 4"
            />

            <XAxis
              dataKey="day"
              ticks={visibleDays}
              tickLine={false}
              axisLine={{
                stroke: "#64748b",
                strokeWidth: 1,
              }}
              interval={0}
              tick={{
                fill: "#475569",
                fontSize: 10,
              }}
            />

            <YAxis
              domain={[0, 8000]}
              ticks={[
                0,
                2000,
                4000,
                6000,
                8000,
              ]}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#475569",
                fontSize: 13,
              }}
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
                backgroundColor: "#ffffff",
                textAlign: "left",
                boxShadow:
                  "0 10px 25px rgba(15, 23, 42, 0.08)",
              }}
            />

            <Bar
              dataKey="value"
              fill="#2f6df6"
              radius={[7, 7, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}