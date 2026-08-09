import account from "@/public/Images/create-account.svg"
import store from "@/public/Images/create-store.svg"
import sales from "@/public/Images/your-sales.svg"
import topArrow from "@/public/Images/top-arrow.svg"
import bottomArrow from "@/public/Images/bottom-arrow.svg"
import Image from "next/image"
export default function OnboardingSection() {
    return (
        <div className=" px-10 space-y-10">
            <div className="space-y-8">
                <h1 className="font-bold text-5xl">Simple Steps to Make Your Website Live</h1>
                <div className="flex items-center justify-center gap-5">
                    <p className="text-xl">No need to learn design or development. We have simplified everything so you can build your store confidently, quickly, and without any technical knowledge</p>
                    <div className="flex gap-3">
                        <div className="bg-white text-nowrap flex items-end gap-2 group border text-blue-600 border-blue-600 py-2 px-5 rounded-full cursor-pointer hover:bg-blue-50 hover:text-blue-700">
                            <p className="text-lg">Get App</p>
                            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v13m0 0l-5-5m5 5l5-5m-10 9h10"></path></svg>
                        </div>

                        <div className="bg-blue-600 text-nowrap flex items-end gap-2 group border text-white border-blue-600 py-2 px-5 rounded-full cursor-pointer hover:bg-blue-700 ">
                            <p className="text-lg">Get started for free</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5">

                <div className="flex flex-col items-start relative space-y-6">
                    <p className="bg-blue-500 text-sm text-white px-3 py-1 rounded-full">Step 01</p>
                    <Image className="absolute top-0 -right-6" src={topArrow} alt="" />
                    <div className="bg-[#F8F9FF] flex flex-col justify-between gap-15 rounded-2xl p-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold">Create an Account</h3>
                            <Image src={account} alt='' />
                        </div>
                        <p className="text-gray-600 text-sm">Welcome to Zatiq! Sign up to launch your online store and access powerful tools to grow your business.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start relative space-y-6">
                    <p className="bg-blue-500 text-sm text-white px-3 py-1 rounded-full">Step 02</p>
                    <Image className="absolute -bottom-14 -right-16 rotate-8" src={bottomArrow} alt=""/>
                    <div className="bg-[#F8F9FF] flex flex-col justify-between gap-10 rounded-2xl p-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold">Set Up Your Store</h3>
                            <Image src={store} alt='' />
                        </div>
                        <p className="text-gray-600 text-sm">Add your store name, select your country and category to launch in minutes.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start relative space-y-6">
                    <p className="bg-blue-500 text-sm text-white px-3 py-1 rounded-full">Step 03</p>
                    <div className="bg-[#F8F9FF] flex flex-col justify-between gap-10 rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold">Start Your Sales</h3>
                        <Image src={sales} alt='' />
                    </div>
                    <p className="text-gray-600 text-sm">Start selling by adding your product. Enter product details like name, price, and photos to showcase what you're offering.</p>
                </div>
                </div>
            </div>
        </div>
    )
}