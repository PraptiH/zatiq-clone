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
                <h1 className="font-semibold text-5xl">The Team Powering Zatiq</h1>
                <p className="text-[#959595] text-sm">The Visionaries Behind Zatiq, Shaping the Future of e-commerce</p>
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
                    spaceBetween={24}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4.2 },
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

                                <div className="flex flex-1 flex-col gap-3 px-2 pt-3">
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