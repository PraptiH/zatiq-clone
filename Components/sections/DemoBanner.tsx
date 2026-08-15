export default function DemoBanner() {
    return (
        <div className="relative bg-[url('/Images/exp-demo-bg.webp')] bg-no-repeat bg-cover px-8 rounded-2xl overflow-hidden h-105 flex flex-col items-center justify-center shadow-[0_10px_25px_-5px_rgba(59,130,246,0.1),0_8px_10px_-6px_rgba(59,130,246,0.1)]">
            
            <div className="absolute inset-0 rounded-2xl bg-black/20 backdrop-blur-md md:backdrop-blur-sm lg:backdrop-blur-none lg:hidden"></div>

            <div className='relative max-w-175 flex flex-col items-center justify-center space-y-4 text-center py-10 md:py-16 px-4'>
                <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Explore the Full Demo and Discover What's Possible</h1>
                <p className='sm:text-lg md:text-xl'>Step inside the Zatiq experience and preview how your store will look, function, and grow — before you even start</p>

                <div className="bg-white w-fit mx-auto flex items-center justify-center text-base md:text-lg gap-2 group border text-blue-600 border-blue-600 py-2 px-6 font-medium rounded-full cursor-pointer hover:bg-blue-50 hover:text-blue-700 duration-300">
                    <p className="whitespace-nowrap">Explore Demo</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-blue-500" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
            </div>
        </div>
    )
}