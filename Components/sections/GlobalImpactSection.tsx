import map from "@/public/Images/map.webp"
import Image from "next/image"
import StatsCard from "./StatsCard"

export default function GlobalImpactSection() {
  return (
    <div className="bg-white py-20 text-center space-y-12">
      <h1 className="text-xl sm:2xl md:3xl lg:4xl xl:text-5xl px-4 font-semibold">
        Empowering entrepreneurs around the world
      </h1>

      <Image
        className="mx-auto py-6"
        width={1000}
        height={270}
        src={map}
        alt="World map"
      />

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 max-w-6xl mx-auto">
        <StatsCard
          end={25409}
          suffix="+"
          label="Over 25K Merchant Orders"
        />

        <StatsCard
          end={100}
          suffix="k"
          label="Users used our platform around the world"
        />

        <StatsCard
          end={3787.8}
          decimals={1}
          suffix="M"
          label="Total Order Amount"
        />

        <StatsCard
          end={8}
          suffix="M"
          label="Today's Merchant Sales"
        />
      </div>
    </div>
  )
}