"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import details from "@/Components/data/testomonialData"

const driftDuration = 120
const clickSpeed = 200
const resumeDelay = 3000

const desktopQuery = "(min-width: 1024px)"

function useMarqueeDistance(trackRef: React.RefObject<HTMLDivElement | null>, itemCount: number) {
    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const measure = () => {
            const items = track.children
            if (items.length < itemCount + 1) return

            const first = items[0] as HTMLElement
            const secondSetStart = items[itemCount] as HTMLElement
            const distance =
                secondSetStart.getBoundingClientRect().left - first.getBoundingClientRect().left

            if (distance > 0) {
                track.style.setProperty("--marquee-distance", `${distance}px`)
            }
        }

        measure()

        const resizeObserver = new ResizeObserver(measure)
        resizeObserver.observe(track)

        const imgs = track.querySelectorAll("img")
        imgs.forEach((img) => img.addEventListener("load", measure))

        return () => {
            resizeObserver.disconnect()
            imgs.forEach((img) => img.removeEventListener("load", measure))
        }
    }, [trackRef, itemCount])
}

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia(desktopQuery)
        const update = () => setIsDesktop(mq.matches)

        update()
        mq.addEventListener("change", update)
        return () => mq.removeEventListener("change", update)
    }, [])

    return isDesktop
}

export default function TestimonialSection() {
    const trackRef = useRef<HTMLDivElement>(null)
    const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
    const isDesktop = useIsDesktop()
    const isDesktopRef = useRef(isDesktop)

    useEffect(() => {
        isDesktopRef.current = isDesktop
    }, [isDesktop])

    useMarqueeDistance(trackRef, details.length)

    // Whenever we cross the desktop/mobile boundary, reset the track so
    // stale inline animation/transform styles from the other mode don't linger.
    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        if (resumeTimeout.current) {
            clearTimeout(resumeTimeout.current)
            resumeTimeout.current = null
        }

        track.style.transition = "none"
        track.style.transform = ""

        if (isDesktop) {
            track.style.animation = `marquee ${driftDuration}s linear infinite`
            track.style.animationPlayState = "running"
        } else {
            track.style.animation = "none"
        }
    }, [isDesktop])

    const getCardStep = () => {
        const track = trackRef.current
        if (!track) return 0
        const firstCard = track.children[0] as HTMLElement
        const gap = parseFloat(getComputedStyle(track).columnGap || "0")
        return firstCard.getBoundingClientRect().width + gap
    }

    const getCurrentX = () => {
        const track = trackRef.current
        if (!track) return 0
        const matrix = new DOMMatrixReadOnly(getComputedStyle(track).transform)
        return matrix.m41
    }

    const pauseDrift = () => {
        if (!isDesktopRef.current) return
        if (trackRef.current) trackRef.current.style.animationPlayState = "paused"
    }

    const resumeDrift = () => {
        if (!isDesktopRef.current) return
        if (trackRef.current) trackRef.current.style.animationPlayState = "running"
    }

    const jump = (direction: 1 | -1) => {
        const track = trackRef.current
        if (!track) return

        const step = getCardStep()
        const currentX = getCurrentX()
        track.style.animation = "none"
        track.style.transition = "none"
        track.style.transform = `translateX(${currentX}px)`
        void track.offsetWidth

        const targetX = currentX - direction * step

        requestAnimationFrame(() => {
            track.style.transition = `transform ${clickSpeed}ms cubic-bezier(0.22, 1, 0.36, 1)`
            track.style.transform = `translateX(${targetX}px)`
        })

        if (resumeTimeout.current) clearTimeout(resumeTimeout.current)

        window.setTimeout(() => {
            track.style.transition = ""

            // Mobile/tablet: no drift to resume — just leave the track where it landed.
            if (!isDesktopRef.current) return

            const trackWidth = track.scrollWidth / 2
            const progress = (((-targetX) % trackWidth) + trackWidth) % trackWidth / trackWidth

            track.style.transform = ""
            track.style.animation = `marquee ${driftDuration}s linear infinite`
            track.style.animationDelay = `-${progress * driftDuration}s`
            track.style.animationPlayState = "paused"
        }, clickSpeed)

        if (isDesktopRef.current) {
            resumeTimeout.current = setTimeout(resumeDrift, clickSpeed + resumeDelay)
        }
    }

    const handleMouseEnter = () => {
        if (resumeTimeout.current) clearTimeout(resumeTimeout.current)
        pauseDrift()
    }

    const handleMouseLeave = () => {
        resumeDrift()
    }

    const loopList = [...details, ...details]

    return (
        <section className="py-12 lg:py-15 xl:py-20 space-y-12">
            <h1 className="text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                How we transformed their journey
            </h1>

            <div className="relative">
                <button
                    onClick={() => jump(-1)}
                    className="absolute left-0 top-1/2 z-1 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md hover:bg-white"
                    aria-label="Previous reviews"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>

                <button
                    onClick={() => jump(1)}
                    className="absolute right-0 top-1/2 z-1 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md hover:bg-white"
                    aria-label="Next reviews"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>

                <div
                    className="overflow-hidden lg:mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] "
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div ref={trackRef}
                        className="flex w-max gap-4 cursor-pointer"
                        style={{
                            animation: isDesktop ? `marquee ${driftDuration}s linear infinite` : "none",
                        }}>
                        {loopList.map((detail, index) => (
                            <div
                                key={index}
                                className="mx-auto flex w-65 sm:w-80 md:w-93.75 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:bg-gray-100 hover:shadow-md"
                            >
                                <p className="line-clamp-5 text-sm leading-6 text-gray-700">
                                    {detail.message}
                                </p>

                                <div className="flex items-center justify-between pt-4">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {detail.name}
                                        </p>
                                        <p className="text-xs text-gray-500">{detail.role}</p>
                                    </div>

                                    <div className="h-12 w-12 overflow-hidden rounded-full border border-gray-200">
                                        <Image
                                            src={detail.avatar}
                                            alt={detail.name}
                                            width={48}
                                            height={48}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
