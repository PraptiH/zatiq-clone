import customer1 from '@/public/Images/imran-kabir.webp'
import customer2 from '@/public/Images/tasnia-zerin.webp'
import customer3 from '@/public/Images/nayeem-ullah.webp'
import customer4 from '@/public/Images/taslima-haque.webp'
import Image from 'next/image'

export default function CustomerProof() {
    return (
        <div className="bg-white rounded-xl p-5 space-y-1 shadow-sm">

            <div className="flex items-center z-0 relative -space-x-2">
                <div className='h-10 w-10 rounded-full overflow-hidden border-2 border-white z-10'>
                    <Image
                        alt=""
                        src={customer1}
                        width="40"
                        height="40"
                        className="object-cover "
                    />
                </div>

                <div className='h-10 w-10 rounded-full overflow-hidden border-2 border-white z-10'>
                    <Image
                        alt=""
                        src={customer2}
                        width="40"
                        height="40"
                        className="object-cover "
                    />
                </div>

                <div className='h-10 w-10 rounded-full overflow-hidden border-2 border-white z-10'>
                    <Image
                        alt=""
                        src={customer3}
                        width="40"
                        height="40"
                        className="object-cover "
                    />
                </div>

                <div className='h-10 w-10 rounded-full overflow-hidden border-2 border-white z-10'>
                    <Image
                        alt=""
                        src={customer4}
                        width="40"
                        height="40"
                        className="object-cover "
                    />
                </div>

                <p className='ml-4 px-3 py-1 text-sm text-gray-600 font-light border w-fit border-gray-300 rounded-full bg-gray-100 relative -left-5 z-10'>50K Happy customers</p>



            </div>

            <div className='flex items-center gap-5'>
                <div>
                    <h3 className='font-extrabold text-2xl'>100K+</h3>
                    <p className='text-gray-600'>Shops created</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-2xl'>3M+</h3>
                    <p className='text-gray-600'>Orders Generated</p>
                </div>
            </div>
        </div>
    )
}