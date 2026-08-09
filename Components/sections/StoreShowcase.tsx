"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

import tofa from "@/public/Images/tofa.svg"
import flexTone from "@/public/Images/flextone.svg"
import pearlHouse from "@/public/Images/pearl-house.svg"

const logos = [tofa, flexTone, pearlHouse, tofa, flexTone, pearlHouse]

export default function StoreShowcase() {



    return (
        <div className="py-10 space-y-5">
            <h1 className="font-bold text-4xl text-center">100,000+ Stores Built — <span className="font-light">Yours Could Be Next</span></h1>

            <div className="px-30">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={200}
                    allowTouchMove={false}
                    spaceBetween={24}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center w-40 h-25 mx-auto rounded-md bg-white p-6 shadow-md">
                                <Image
                                    src={logo}
                                    width={100}
                                    height={100}
                                    alt="Store logo"
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>


    )
}