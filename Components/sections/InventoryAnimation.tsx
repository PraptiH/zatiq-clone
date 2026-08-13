'use client'

import Lottie from 'lottie-react'
import animationData from '@/public/Animations/inventory-order-management.json'

export default function InventoryAnimation() {
    return (
        <div className="rounded-lg overflow-hidden w-73.75 h-68">
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-full"
            />
        </div>
    )
}