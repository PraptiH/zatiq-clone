"use client"
import { useRef } from "react"
import Image from "next/image"
import details from "@/Components/data/testomonialData"

const DRIFT_DURATION = 120   // seconds for one full loop — tune to match the site
const CLICK_SPEED = 200     // ms for the manual jump on arrow click — fast, snappy
const RESUME_DELAY = 3000   // ms the drift stays paused after a click

export default function TestimonialSection() {
    const trackRef = useRef<HTMLDivElement>(null)
    const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

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
        if (trackRef.current) trackRef.current.style.animationPlayState = "paused"
    }

    const resumeDrift = () => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "running"
    }

    const jump = (direction: 1 | -1) => {
        const track = trackRef.current
        if (!track) return

        const step = getCardStep()
        const currentX = getCurrentX() // reads the paused animation's current position

        // Detach the animation and freeze the current position as an explicit transform,
        // so there's nothing overriding the inline style anymore.
        track.style.animation = "none"
        track.style.transition = "none"
        track.style.transform = `translateX(${currentX}px)`
        void track.offsetWidth // force reflow so the freeze commits before we animate

        const targetX = currentX - direction * step

        // Now that the transform is truly inline (no animation fighting it),
        // the transition will actually be visible.
        requestAnimationFrame(() => {
            track.style.transition = `transform ${CLICK_SPEED}ms cubic-bezier(0.22, 1, 0.36, 1)`
            track.style.transform = `translateX(${targetX}px)`
        })

        window.setTimeout(() => {
            track.style.transition = ""
            const trackWidth = track.scrollWidth / 2
            const progress = (((-targetX) % trackWidth) + trackWidth) % trackWidth / trackWidth

            track.style.transform = ""
            track.style.animation = `marquee ${DRIFT_DURATION}s linear infinite`
            track.style.animationDelay = `-${progress * DRIFT_DURATION}s`
            track.style.animationPlayState = "paused"
        }, CLICK_SPEED)

        if (resumeTimeout.current) clearTimeout(resumeTimeout.current)
        resumeTimeout.current = setTimeout(resumeDrift, CLICK_SPEED + RESUME_DELAY)
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
        <section className="px-4 py-20 space-y-12 md:px-10">
            <h1 className="text-center text-5xl font-semibold">
                How we transformed their journey
            </h1>

            <div className="relative">
                <button
                    onClick={() => jump(-1)}
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md hover:bg-white"
                    aria-label="Previous reviews"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>

                <button
                    onClick={() => jump(1)}
                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md hover:bg-white"
                    aria-label="Next reviews"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>

                <div
                    className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] "
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div ref={trackRef}
                        className="flex w-max gap-4 cursor-pointer"
                        style={{
                            animation: `marquee ${DRIFT_DURATION}s linear infinite`,
                        }}>
                        {loopList.map((detail, index) => (
                            <div
                                key={index}
                                className="mx-auto flex h-50 w-[85vw] shrink-0 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:bg-gray-100 hover:shadow-md sm:w-80 lg:w-96"
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
