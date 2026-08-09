export default function DemoBanner() {
    return (
        <div className="relative bg-[url('/Images/exp-demo-bg.webp')] bg-no-repeat bg-cover h-100 px-8 rounded-2xl shadow-xl">
            

            <div className='absolute space-y-2 text-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                <h1 className='font-bold text-5xl'>Explore the Full Demo and Discover What's Possible</h1>
                <p className='text-xl'>Step inside the Zatiq experience and preview how your store will look, function, and grow — before you even start</p>

                <div className="bg-white inline-flex items-end gap-2 group border text-blue-600 border-blue-600 py-2 px-5 rounded-full cursor-pointer hover:bg-blue-50 hover:text-blue-700">
                    <p>Explore Demo</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-blue-500" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
            </div>
        </div>
    )
}