"use client"

import CountUp from "react-countup"

type StatProps = {
    end: number
    suffix?: string
    decimals?: number
    label: string
}

export default function StatsCard({ end, suffix = "", decimals = 0, label }: StatProps) {
    return (
        <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">
                <CountUp
                    end={end}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    separator=","
                    decimals={decimals}
                />
                {suffix}
            </h3>

            <p className="mt-2 text-sm text-gray-500">{label}</p>
        </div>
    )
}