'use client'

import Lottie from 'lottie-react'
import animationData from '@/public/Animations/manage-your-store-anytime.json'

export default function ManageStoreAnimation() {
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