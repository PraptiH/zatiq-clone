import playstore from '@/public/Images/play-store.svg'
import appstore from '@/public/Images/apple-store.svg'
import mobilePlaystore from '@/public/Images/mobile-app-play-store.webp'
import mobileIos from '@/public/Images/mobile-app-ios.webp'
import Image from 'next/image'
export default function AppDownloadSection() {
    return (
        <div className="bg-linear-to-b from-blue-600 via-blue-400 to-blue-200 rounded-2xl text-center px-12 pt-12 space-y-8">

            <div>
                <h1 className="font-semibold text-5xl text-white mb-4">Download the ZatiqEasy app</h1>
                <p className="text-white/80 text-lg">Sign up and begin selling in just a few minutes!</p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
                <Image src={playstore} alt=''
                    className='cursor-pointer hover:scale-105 transition-transform' />
                <Image src={appstore} alt=''
                    className='cursor-pointer hover:scale-105 transition-transform' />
            </div>

            <div className='flex items-center justify-center gap-4 pt-12'>
                <Image width={1000} height={1000} src={mobilePlaystore} alt=''
                    className='w-1/2 max-w-106.25' />
                <Image width={1000} height={1000} src={mobileIos} alt=''
                    className='w-1/2 max-w-106.25' />
            </div>

        </div>
    )
}