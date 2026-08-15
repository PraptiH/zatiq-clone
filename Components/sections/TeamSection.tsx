"use client"
import members from '@/Components/data/TeamMembersData'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function TeamSection() {



    return (
        <div>
            <div className="text-center space-y-3 pb-10">
                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">The Team Powering Zatiq</h1>
                <p className="text-[#959595] text-sm sm:text-base md:text-lg lg:text-xl">The Visionaries Behind Zatiq, Shaping the Future of e-commerce</p>
            </div>

            <div>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={500}
                    allowTouchMove={false}

                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                        },

                        425: {
                            slidesPerView: 1.4,
                            spaceBetween: 16,
                        },

                        // Small tablet
                        480: {
                            slidesPerView: 1.7,
                            spaceBetween: 16,
                        },

                        576: {
                            slidesPerView: 2,
                            spaceBetween: 18,
                        },

                        640: {
                            slidesPerView: 2.25,
                            spaceBetween: 20,
                        },

                        768: {
                            slidesPerView: 2.6,
                            spaceBetween: 20,
                        },

                        900: {
                            slidesPerView: 3,
                            spaceBetween: 22,
                        },
                        1024: {
                            slidesPerView: 3.2,
                            spaceBetween: 24,
                        },

                        1152: {
                            slidesPerView: 3.5,
                            spaceBetween: 24,
                        },


                        1536: {
                            slidesPerView: 3.7,
                            spaceBetween: 24,
                        },

                        // Large desktop
                        1680: {
                            slidesPerView: 4.4,
                            spaceBetween: 24,
                        },

                        1800: {
                            slidesPerView: 4.6,
                            spaceBetween: 24,
                        },

                        1920: {
                            slidesPerView: 4.8,
                            spaceBetween: 24,
                        },

                    }}
                >
                    {members.map((member, index) => (
                        <SwiperSlide key={index} className="h-auto!">
                            <div className="flex h-full w-full flex-col rounded-lg border bg-white p-2">
                                <Image
                                    src={member.avatar}
                                    width={320}
                                    height={320}
                                    alt={member.name}
                                    className="w-full rounded-lg aspect-square object-cover"
                                />

                                <div className="flex flex-1 grow flex-col gap-3 px-2 pt-3">
                                    <div>
                                        <h3 className="font-semibold text-sm text-gray-900">
                                            {member.name}
                                        </h3>
                                        <p className="font-medium text-sm text-gray-600">
                                            {member.role}
                                        </p>
                                    </div>

                                    <p className="flex-1 text-sm leading-relaxed text-gray-500">
                                        {member.about}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}