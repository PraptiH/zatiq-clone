'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

import redex from '@/public/Images/redx.svg'
import steadfast from '@/public/Images/steadfast.svg'
import rx from '@/public/Images/rx-courier.svg'
import paperfly from '@/public/Images/paperfly.svg'
import pathao from '@/public/Images/pathao.svg'
import ssl from '@/public/Images/ssl-commerz.svg'
import stripe from '@/public/Images/stripe.svg'
import nagad from '@/public/Images/nagad.svg'
import bkash from '@/public/Images/bKash.svg'
import upay from '@/public/Images/upay.svg'

const driftDuration = 30

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

export default function PartnerSection() {

  const couriers = [redex, steadfast, rx, paperfly, pathao]

  const payments = [stripe, nagad, bkash, upay, ssl]

  const courierSlides = [ ...couriers, ...couriers]

  const paymentSlides = [ ...payments, ...payments]

  const courierTrackRef = useRef<HTMLDivElement | null>(null)
  const paymentTrackRef = useRef<HTMLDivElement | null>(null)

  useMarqueeDistance(courierTrackRef, courierSlides.length)
  useMarqueeDistance(paymentTrackRef, paymentSlides.length)

  const pauseDrift = (ref: React.RefObject<HTMLDivElement | null>) => {
    const track = ref.current
    if (!track) return

    track.style.animationPlayState = 'paused'
  }

  const resumeDrift = (ref: React.RefObject<HTMLDivElement | null>) => {
    const track = ref.current
    if (!track) return

    track.style.animationPlayState = 'running'
  }

  return (

    <div className="bg-linear-t-b from-background py-20 mx-auto max-w-7xl px-0 md:px-10">
      <h2 className="mb-14 text-center text-xl sm:2xl md:3xl lg:4xl xl:text-5xl px-4 font-semibold text-gray-900">
        In partnership with our dedicated logistics and payment partners
      </h2>

      <div className="relative space-y-15 overflow-hidden">

        <div
          ref={courierTrackRef}
          onMouseEnter={() => pauseDrift(courierTrackRef)}
          onMouseLeave={() => resumeDrift(courierTrackRef)}
          className="flex w-max gap-4 cursor-pointer"
          style={{
            animation: `marquee ${driftDuration}s linear infinite`,
            animationPlayState: 'running',
          }}
        >
          {courierSlides.map((courier, index) => (
            <div key={index} className="flex items-center justify-center px-6">
              <Image
                src={courier}
                alt="Courier partner"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div
          ref={paymentTrackRef}
          onMouseEnter={() => pauseDrift(paymentTrackRef)}
          onMouseLeave={() => resumeDrift(paymentTrackRef)}
          className="flex w-max gap-4 cursor-pointer"
          style={{
            animation: `marqueeReverse ${driftDuration}s linear infinite`,
            animationPlayState: 'running',
          }}
        >
          {paymentSlides.map((payment, index) => (
            <div key={index} className="flex items-center justify-center px-6">
              <Image
                src={payment}
                alt="Payment partner"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className='absolute w-1/4 inset-y-0 left-0 bg-linear-to-r from-[#f5f8ff] to-transparent'></div>
        <div className='absolute w-1/4 inset-y-0 right-0 bg-linear-to-l from-[#f5f8ff] to-transparent'></div>

      </div>

    </div>


  )
}