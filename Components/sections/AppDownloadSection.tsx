import playstore from '@/public/Images/play-store.svg'
import appstore from '@/public/Images/apple-store.svg'
import mobilePlaystore from '@/public/Images/mobile-app-play-store.webp'
import mobileIos from '@/public/Images/mobile-app-ios.webp'
import Image from 'next/image'
export default function AppDownloadSection() {
    return (
        <div className="bg-linear-to-b from-blue-600 via-blue-400 to-blue-200 rounded-2xl text-center overflow-hidden px-4 md:px-12 pt-12 space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">

            <div>
                <h1 className="font-semibold  text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-4">Download the ZatiqEasy app</h1>
                <p className="text-white/80 text-lg">Sign up and begin selling in just a few minutes!</p>
            </div>

            <div className="flex justify-center gap-4 mb-8 md:mb-12">
                <div>
                    <Image width="200" height="200" src={playstore} alt=''
                        className='cursor-pointer w-auto hover:scale-105 transition-transform' />
                </div>
                <div>
                    <Image width="200" height="100" src={appstore} alt=''
                        className='cursor-pointer w-auto hover:scale-105 transition-transform' />
                </div>
            </div>

            <div className='hidden sm:flex items-center justify-center gap-4 md:gap-6 w-full px-6 pt-12'>
                <Image width={1000} height={1000} src={mobilePlaystore} alt=''
                    className='w-1/2 max-w-106.25' />
                <Image width={1000} height={1000} src={mobileIos} alt=''
                    className='w-1/2 max-w-106.25' />
            </div>

        </div>
    )
}