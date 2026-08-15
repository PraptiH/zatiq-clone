import account from "@/public/Images/create-account.svg"
import store from "@/public/Images/create-store.svg"
import sales from "@/public/Images/your-sales.svg"
import topArrow from "@/public/Images/top-arrow.svg"
import bottomArrow from "@/public/Images/bottom-arrow.svg"
import Image from "next/image"
export default function OnboardingSection() {
    return (
        <div className="py-12 lg:py-15 xl:py-20 lg:space-y-12">
            <div className="lg:space-y-8">
                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center md:text-left">Simple Steps to Make Your Website Live</h1>
                <div className="flex flex-col md:flex-row pt-6 md:pt-10 gap-4 sm:gap-6 md:gap-10">
                    <p className="sm:text-lg md:text-xl">No need to learn design or development. We have simplified everything so you can build your store confidently, quickly, and without any technical knowledge</p>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="bg-white text-nowrap flex items-center gap-2 group border text-blue-600 border-blue-600 py-2 px-4 sm:px-6 w-fit h-12 rounded-full font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-700">
                            <p className="md:text-lg whitespace-nowrap">Get App</p>
                            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v13m0 0l-5-5m5 5l5-5m-10 9h10"></path></svg>
                        </div>

                        <div className="bg-blue-600 text-nowrap flex items-center gap-2 group border text-base md:text-lg text-white border-blue-600 py-2 px-4 md:px-6 h-12 w-fit rounded-full cursor-pointer hover:bg-blue-700 ">
                            <p className="text-lg">Get started for free</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                <div className="h-full w-full flex flex-col relative space-y-6">
                    <p className="bg-blue-500 text-sm text-white px-3 py-1 rounded-full w-fit">Step 01</p>
                    <Image className="hidden lg:inline absolute top-0 -right-6" src={topArrow} alt="" />
                    <div className="bg-[#F8F9FF] min-h-44 flex flex-col justify-between grow rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">Create an Account</h3>
                            <Image src={account} alt='' />
                        </div>
                        <p className="text-gray-600 text-sm">Welcome to Zatiq! Sign up to launch your online store and access powerful tools to grow your business.</p>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col relative space-y-6">
                    <p className="bg-blue-500 text-sm text-white px-3 py-1 rounded-full w-fit">Step 02</p>
                    <Image className="hidden lg:inline absolute -bottom-14 -right-16 rotate-8" src={bottomArrow} alt=""/>
                    <div className="bg-[#F8F9FF] min-h-44 flex flex-col justify-between grow rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">Set Up Your Store</h3>
                            <Image src={store} alt='' />
                        </div>
                        <p className="text-gray-600 text-sm">Add your store name, select your country and category to launch in minutes.</p>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col relative space-y-6">
                    <p className="bg-blue-500 text-sm text-white px-3 py-1 rounded-full w-fit">Step 03</p>
                    <div className="bg-[#F8F9FF] min-h-44 flex flex-col justify-between grow rounded-2xl p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">Start Your Sales</h3>
                        <Image src={sales} alt='' />
                    </div>
                    <p className="text-gray-600 text-sm">Start selling by adding your product. Enter product details like name, price, and photos to showcase what you're offering.</p>
                </div>
                </div>
            </div>
        </div>
    )
}