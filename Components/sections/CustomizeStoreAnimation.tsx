'use client'

import Lottie from 'lottie-react'
import animationData from '@/public/Animations/customize-your-store.json'

export default function CustomizeStoreAnimation() {
    return (
        <div className="rounded-lg overflow-hidden">
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-68"
            />
        </div>
    )
}