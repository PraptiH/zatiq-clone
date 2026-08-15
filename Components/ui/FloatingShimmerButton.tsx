"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { ShimmerButton } from "./shimmer-button"

export default function FloatingShimmerButton() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={`fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6 transition-all duration-500 lg:hidden
                    ${show
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0 pointer-events-none"
            }
    `}
        >
            <ShimmerButton
                shimmerColor="#fff"
                shimmerSize="0.15rem"
                borderRadius="100px"
                shimmerDuration="2s"
                background="#155dfc"
                className="text-white font-semibold text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
            >
                <span className="flex items-center gap-2">
                    Start for Free
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </span>
            </ShimmerButton>
        </div>
    )
}