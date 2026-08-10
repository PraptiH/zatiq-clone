import { ArrowRight } from "lucide-react";

export default function PricingSection() {
    return (
        <div className="bg-[#f6f8fc] px-30 py-20">
            
            <div className="text-center space-y-4">
                <p className="font-semibold text-sm tracking-[0.2em] text-blue-600">PRICING</p>
                <h3 className="text-5xl text-gray-900 font-semibold">Choose The Plan To Grow Your Business</h3>
                <p className="text-[#6b7280] text-sm">No hidden fees. Flexible pricing. Try any plan free for 3 days.</p>
            </div>

            
            <div className="flex justify-center pt-10">
                <div className="inline-flex items-center gap-1 bg-white/80 rounded-full border border-blue-100 px-2 py-1.5 shadow-sm backdrop-blur">

                    <div className="bg-blue-600 font-semibold text-sm text-white rounded-full px-4 py-2.5 cursor-pointer shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)]">
                        <p>Monthly</p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full font-semibold text-sm px-4 py-2.5 text-gray-500 hover:text-gray-900 cursor-pointer">
                        <p>6 Months</p>
                        <p className="rounded-full px-2 py-0.5 font-bold text-[10px] tracking-wide bg-blue-100 text-blue-600">SAVE 10%</p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full font-semibold text-sm px-4 py-2.5 text-gray-500 hover:text-gray-900 cursor-pointer">
                        <p>Yearly</p>
                        <p className="rounded-full px-2 py-0.5 font-bold text-[10px] tracking-wide bg-blue-100 text-blue-600">SAVE 25%</p>
                    </div>


                </div>
            </div>

           
            <div className="grid grid-cols-4 items-stretch gap-6 pt-12 w-full max-w-7xl">

                <div className="bg-white border border-gray-100 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]">
                    <div>
                        <div className="space-y-5">
                            <div className="space-y-1.5">
                                <p className="font-bold text-xl">Free</p>
                                <p className="text-sm text-gray-500">Start selling today</p>
                            </div>

                            <div className="flex items-end gap-1">
                                <span className="font-semibold text-2xl text-gray-400">৳</span>
                                <p className="font-extrabold text-4xl leading-none tracking-tight">0.00</p>
                                <span className="mb-1 text-sm text-gray-400">/month</span>
                            </div>

                            <button className="mt-2 flex items-center justify-center w-full bg-blue-600 text-white font-semibold rounded-full py-3 hover:bg-blue-700">
                                Get started
                                <ArrowRight className="w-5 h-4" />
                            </button>
                        </div>

                        <div className="my-6 h-px w-full bg-gray-200"></div>

                        <ul className="space-y-3">
                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">20 products (10 own + 10 resell)</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">2 preset themes</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Zatiq SecurePay</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Marketing pixels & GTM</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Resell supplier products</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Zatiq Courier</p>
                            </li>
                        </ul>

                        <div className="mt-6 rounded-2xl px-4 py-2 bg-[#f6f8fc]">
                            <p className="font-semibold text-[11px]  text-gray-400 tracking-wide">FEES PER ORDER</p>
                            <div className="mt-2 flex flex-wrap text-xs gap-x-4 gap-y-1">

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">5%</p>
                                    <p className="text-gray-500">physical</p>
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">10%</p>
                                    <p className="text-gray-500">digital</p>
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">3%</p>
                                    <p className="text-gray-500">resell</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]">
                    <div>
                        <div className="space-y-5">
                            <div className="space-y-1.5">
                                <p className="font-bold text-xl">Started</p>
                                <p className="text-sm text-gray-500">For growing businesses.</p>
                            </div>

                            <div className="flex items-end gap-1">
                                <span className="font-semibold text-2xl text-gray-400">৳</span>
                                <p className="font-extrabold text-4xl leading-none tracking-tight">599.00</p>
                                <span className="mb-1 text-sm text-gray-400">/month</span>
                            </div>

                            <button className="mt-2 flex items-center justify-center w-full bg-blue-600 text-white font-semibold rounded-full py-3 hover:bg-blue-700">
                                Get started
                                <ArrowRight className="w-5 h-4" />
                            </button>
                        </div>

                        <div className="my-6 h-px w-full bg-gray-200"></div>

                        <ul className="space-y-3">
                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">500 products</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Unlimited preset themes</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Custom domain</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Zatiq SecurePay</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">1 free third-party courier</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Report exports</p>
                            </li>
                        </ul>

                        <div className="mt-6 rounded-2xl px-4 py-2 bg-[#f6f8fc]">
                            <p className="font-semibold text-[11px]  text-gray-400 tracking-wide">FEES PER ORDER</p>
                            <div className="mt-2 flex flex-wrap text-xs gap-x-4 gap-y-1">

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">0%</p>
                                    <p className="text-gray-500">physical</p>
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">6%</p>
                                    <p className="text-gray-500">digital</p>
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">1.9%</p>
                                    <p className="text-gray-500">resell</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative bg-blue-600 text-white border border-blue-500 rounded-3xl p-7 transition-all duration-500 -translate-y-4 shadow-[0_30px_60px_-20px_rgba(37,23,42,0.55)]">

                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1 font-bold text-xs text-blue-600 shadow-md tracking-wider">MOST POPULAR</div>

                    <div>
                        <div className="space-y-5">
                            <div className="space-y-1.5">
                                <p className="font-bold text-xl">Pro</p>
                                <p className="text-sm text-blue-100">For scaling business.</p>
                            </div>

                            <div className="flex items-end gap-1">
                                <span className="font-semibold text-2xl text-blue-100">৳</span>
                                <p className="font-extrabold text-4xl leading-none tracking-tight">1,099.00</p>
                                <span className="mb-1 text-sm text-blue-100">/month</span>
                            </div>

                            <button className="mt-2 flex items-center justify-center w-full bg-white text-blue-600 font-semibold rounded-full py-3 hover:bg-blue-50">
                                Get started
                                <ArrowRight className="w-5 h-4" />
                            </button>
                        </div>

                        <div className="my-6 h-px w-full bg-white/20"></div>

                        <ul className="space-y-3">
                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#ffffff"></path></svg>
                                <p className="text-blue-50">Unlimited products</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#ffffff"></path></svg>
                                <p className="text-blue-50">Unlimited preset themes</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#ffffff"></path></svg>
                                <p className="text-blue-50">Custom domain</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#ffffff"></path></svg>
                                <p className="text-blue-50">Theme builder</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#ffffff"></path></svg>
                                <p className="text-blue-50">Zatiq SecurePay
                                </p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#ffffff"></path></svg>
                                <p className="text-blue-50">Unlimited free third-party couriers</p>
                            </li>
                        </ul>

                        <div className="mt-6 rounded-2xl px-4 py-2 bg-[#f6f8fc]">
                            <p className="font-semibold text-[11px]  text-gray-400 tracking-wide">FEES PER ORDER</p>
                            <div className="mt-2 flex flex-wrap text-xs gap-x-4 gap-y-1">

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">0%</p>
                                    <p className="text-gray-500">physical</p>
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">4%</p>
                                    <p className="text-gray-500">digital</p>
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">1%</p>
                                    <p className="text-gray-500">resell</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]">
                    <div>
                        <div className="space-y-5">
                            <div className="space-y-1.5">
                                <p className="font-bold text-xl">Growth</p>
                                <p className="text-sm text-gray-500">Everything inlocked.</p>
                            </div>

                            <div className="flex items-end gap-1">
                                <span className="font-semibold text-2xl text-gray-400">৳</span>
                                <p className="font-extrabold text-4xl leading-none tracking-tight">2,499.00</p>
                                <span className="mb-1 text-sm text-gray-400">/month</span>
                            </div>

                            <button className="mt-2 flex items-center justify-center w-full bg-blue-600 text-white font-semibold rounded-full py-3 hover:bg-blue-700">
                                Get started
                                <ArrowRight className="w-5 h-4" />
                            </button>
                        </div>

                        <div className="my-6 h-px w-full bg-gray-200"></div>

                        <ul className="space-y-3">
                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Unlimited products</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Unlimited preset themes</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Custom domain</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Theme builder</p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Zatiq SecurePay
                                </p>
                            </li>

                            <li className="flex items-start text-sm gap-2.5">
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2563eb"></path></svg>
                                <p className="text-gray-700">Unlimited free third-party couriers</p>
                            </li>
                        </ul>

                        <div className="mt-6 rounded-2xl px-4 py-2 bg-[#f6f8fc]">
                            <p className="font-semibold text-[11px]  text-gray-400 tracking-wide">FEES PER ORDER</p>
                            <div className="mt-2 flex flex-wrap text-xs gap-x-4 gap-y-1">

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">0%</p>
                                    <p className="text-gray-500">physical</p>
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">3%</p>
                                    <p className="text-gray-500">digital</p>
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <p className="font-bold text-blue-600">0.75%</p>
                                    <p className="text-gray-500">resell</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}