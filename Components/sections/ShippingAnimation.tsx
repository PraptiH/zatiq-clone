'use client'

import Lottie from 'lottie-react'
import animationData from '@/public/Animations/shipping-made-simple.json'

export default function ShippingAnimation() {
    return (
        <div className="rounded-lg overflow-hidden w-full h-68 xl:w-73.75">
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-full"
            />
        </div>
    )
}