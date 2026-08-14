'use client'

import Lottie from 'lottie-react'
import animationData from '@/public/Animations/inventory-order-management.json'

export default function InventoryAnimation() {
    return (
        <div className="rounded-lg h-68 overflow-hidden">
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full"
            />
        </div>
    )
}