export default function Features() {
    return (
        <div className="bg-white w-full py-20 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <p className="text-blue-600 uppercase tracking-wider mb-3">Compare plans</p>
                    <h1 className="font-semibold text-5xl">Compare all features</h1>
                    <p className="text-gray-500 mt-4">Every feature and per-order fee, side by side — pick the plan that fits how you sell.</p>
                </div>

                <div className="border border-gray-200 bg-white rounded-3xl shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]">
                    <div className="overflow-x-visible rounded-3xl">
                        <table className="w-full min-w-230 border-collapse">
                            <colgroup>
                                <col className="w-[28%]" />
                                <col className="w-[18%]" />
                                <col className="w-[18%]" />
                                <col className="w-[18%]" />
                                <col className="w-[18%]" />
                            </colgroup>

                            <thead className="sticky top-19 bg-white z-0">
                                <tr className="shadow-[0_6px_20px_-14px_rgba(15,23,42,0.5)]">

                                    <th className="border-b border-white/40 bg-white/40 p-6 rounded-tl-3xl text-left align-middle backdrop-blur-2xl backdrop-saturate-150 supports-backdrop-filter:bg-white/25">
                                        <p className="font-bold text-lg text-gray-900">Features</p>
                                    </th>

                                    <th className="border-b border-white/40 bg-white/40 px-4 py-6 text-left align-middle backdrop-blur-2xl backdrop-saturate-150 supports-backdrop-filter:bg-white/25">
                                        <div className="flex flex-col items-center gap-1">
                                            <p className="font-bold text-xl text-gray-900">Free</p>
                                            <p className="text-gray-500 text-sm">৳ 0</p>
                                            <p className="text-gray-400">/mo</p>
                                            <button className="cursor-pointer w-full font-semibold text-sm text-gray-700 px-4 py-2.5 border border-gray-200 rounded-full hover:text-blue-600 hover:border-blue-600">Get started</button>
                                        </div>
                                    </th>

                                    <th className="border-b border-white/40 bg-white/40 px-4 py-6 text-left align-middle backdrop-blur-2xl backdrop-saturate-150 supports-backdrop-filter:bg-white/25">
                                        <div className="flex flex-col items-center gap-1">
                                            <p className="font-bold text-xl text-gray-900">Starter</p>
                                            <p className="text-gray-500 text-sm">৳ 599</p>
                                            <p className="text-gray-400">/mo</p>
                                            <button className="cursor-pointer w-full font-semibold text-sm text-gray-700 px-4 py-2.5 border border-gray-200 rounded-full hover:text-blue-600 hover:border-blue-600">Get started</button>
                                        </div>
                                    </th>

                                    <th className="border-b border-blue-600 bg-blue-600 px-4 py-6 text-left align-middle backdrop-blur-2xl backdrop-saturate-150">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="flex items-center gap-2">
                                                <p className="font-bold text-xl text-white">Pro</p>
                                                <p className="bg-white/20 px-2 py-0.5 font-bold text-[10px] rounded-full text-white tracking-wider uppercase">popular</p>
                                            </div>
                                            <p className="text-blue-100 text-sm">৳ 1,099</p>
                                            <p className="text-blue-200">/mo</p>
                                            <button className="cursor-pointer bg-white w-full font-semibold text-sm text-blue-600 px-4 py-2.5 rounded-full transition hover:bg-blue-50">Get started</button>
                                        </div>
                                    </th>

                                    <th className="border-b border-white/40 bg-white/40 px-4 py-6 text-left align-middle backdrop-blur-2xl backdrop-saturate-150 supports-backdrop-filter:bg-white/25">
                                        <div className="flex flex-col items-center gap-1">
                                            <p className="font-bold text-xl text-gray-900">Growth</p>
                                            <p className="text-gray-500 text-sm">৳ 2,499</p>
                                            <p className="text-gray-400">/mo</p>
                                            <button className="cursor-pointer w-full font-semibold text-sm text-gray-700 px-4 py-2.5 border border-gray-200 rounded-full hover:text-blue-600 hover:border-blue-600">Get started</button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="bg-gray-50 px-6 py-3">
                                        <div className="flex flex-wrap items-baseline gap-x-3">
                                            <p className="font-bold text-xs text-blue-600 tracking-wider uppercase">Fees per order</p>
                                            <p className="text-xs text-gray-400">Deducted per order based on product type</p>
                                        </div>
                                    </td>

                                    <td className="bg-gray-50"></td>
                                    <td className="bg-gray-50"></td>
                                    <td className="bg-blue-50/70"></td>
                                    <td className="bg-gray-50"></td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Own physical products</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">5%</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">0%</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">0%</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">0%</td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Own digital products</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">10%</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">6%</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">4%</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">3%</td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Resell supplier products</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">3%</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">1.9%</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">1%</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">0.75%</td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-3 font-bold text-xs text-blue-600 tracking-wider uppercase">selling </td>

                                    <td className="bg-gray-50"></td>
                                    <td className="bg-gray-50"></td>
                                    <td className="bg-blue-50/70"></td>
                                    <td className="bg-gray-50"></td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Sell your own physical products</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>


                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Sell your own digital products</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>


                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Resell supplier products</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Own product limit</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">10</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">500</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">2,000</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">Unlimited</td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Resell product limit</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">10</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">500</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">2,000</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">Unlimited</td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Orders</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">Unlimited</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">Unlimited</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">Unlimited</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">Unlimited</td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-3 font-bold text-xs text-blue-600 tracking-wider uppercase">store & branding </td>

                                    <td className="bg-gray-50"></td>
                                    <td className="bg-gray-50"></td>
                                    <td className="bg-blue-50/70"></td>
                                    <td className="bg-gray-50"></td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Subdomain</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">Single</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">All</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">All</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">All</td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Custom domain</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle">

                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Preset themes</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">2</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">Unlimited</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">Unlimited</td>

                                    <td className="font-medium text-sm text-gray-800 border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">Unlimited</td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Theme builder</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Spotlight</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Customer login page</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-3 font-bold text-xs text-blue-600 tracking-wider uppercase">Marketing & growth</td>

                                    <td className="bg-gray-50"></td>
                                    <td className="bg-gray-50"></td>
                                    <td className="bg-blue-50/70"></td>
                                    <td className="bg-gray-50"></td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Marketing pixels & GTM</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Abandon cart recovery</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Report exports</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-3 font-bold text-xs text-blue-600 tracking-wider uppercase">operations</td>

                                    <td className="bg-gray-50"></td>
                                    <td className="bg-gray-50"></td>
                                    <td className="bg-blue-50/70"></td>
                                    <td className="bg-gray-50"></td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Inventory management</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Order management</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Customer management</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">IP blocking</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Turbo server</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-gray-50 px-6 py-3 font-bold text-xs text-blue-600 tracking-wider uppercase">Payments & delivery</td>

                                    <td className="bg-gray-50"></td>
                                    <td className="bg-gray-50"></td>
                                    <td className="bg-blue-50/70"></td>
                                    <td className="bg-gray-50"></td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Zatiq SecurePay</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Own gateway / self-MFS</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">External payment gateways</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Zatiq courier</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>

                                <tr className="group">
                                    <td className="font-medium text-sm text-gray-700 px-6 py-4 border-t border-gray-100 group-hover:bg-gray-50/70">Third-party couriers</td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p className="inline-block h-px w-3 bg-gray-300 align-middle"></p>
                                    </td>
                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                    <td className="border-t border-blue-100 text-center p-4 bg-blue-50/70 group-hover:bg-blue-100/60">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>

                                    <td className="border-t border-gray-100 text-center p-4 group-hover:bg-gray-50/70">
                                        <p>
                                            <svg className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 h-7 w-7 " width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L3 8" stroke="#2563eb" strokeWidth="2"></path></svg>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}