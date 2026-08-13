import logo from '@/public/Images/zatiqLogo.svg'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className='bg-[url("/Images/footerBG.svg")] bg-no-repeat bg-cover min-h-96 pt-10 pb-12 px-30 space-y-16'>
            <h1 className="text-5xl font-semibold text-center">Take Your Business Online, Effortlessly with Zatiq</h1>

            <div className="bg-white rounded-2xl shadow-lg p-12">

                <div className='grid grid-cols-4 gap-8 mb-12'>
                    <div className='space-y-4'>
                        <Image className='cursor-pointer' src={logo} alt='' />
                        <p className='text-sm text-gray-600 leading-relaxed'>Streamlines customer management, enhances team collaboration in one intuitive platform for your sales process.</p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='font-semibold text-lg text-gray-800'>General</h3>
                        <div className='space-y-3'>
                            <p className='text-sm text-gray-600 hover:text-blue-600 cursor-pointer'>Home</p>
                            <p className='text-sm text-gray-600 hover:text-blue-600 cursor-pointer'>Pricing</p>
                            <p className='text-sm text-gray-600 hover:text-blue-600 cursor-pointer'>About Us</p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='font-semibold text-lg text-gray-800'>Company</h3>
                        <div className='space-y-3'>
                            <p className='text-sm text-gray-600 hover:text-blue-600 cursor-pointer'>Contact Us</p>
                            <p className='text-sm text-gray-600 hover:text-blue-600 cursor-pointer'>Terms & Conditions</p>
                            <p className='text-sm text-gray-600 hover:text-blue-600 cursor-pointer'>Privacy Policy</p>
                            <p className='text-sm text-gray-600 hover:text-blue-600 cursor-pointer'>Return and Refund Policy</p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='font-semibold text-lg text-gray-800'>Partner Program</h3>

                        <p className='text-sm text-gray-600='>Earn up to 15% recurring commission</p>
                        <p className='text-sm text-blue-600 hover:text-blue-700 flex items-center cursor-pointer'>Become A Partner
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-arrow-right w-4 h-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></p>
                    </div>
                </div>

                <div className='bg-linear-to-b from-[#E0E1FF] to-white rounded-lg flex items-start justify-between p-12 mt-4 border-t border-gray-200'>

                    <div className='space-y-4'>
                        <h4 className='font-semibold text-lg text-gray-800'>Address</h4>
                        <div className='space-y-3'>
                            <p className='flex items-center gap-3 text-sm text-gray-600 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-500" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                                +880 1969 909069
                            </p>

                            <p className='flex items-center gap-3 text-sm text-gray-600 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-500" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                                info@zatiq.com
                            </p>

                            <p className='flex items-center gap-3 text-sm text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                111 Somerset Road #08-10A, 111 Somerset, Singapore 238164
                            </p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='font-semibold text-lg text-gray-800'>Follow us</h4>
                        <div className='flex gap-3'>

                            <div className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition-all group'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </div>

                            <div className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition-all group'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                            </div>

                            <div className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition-all group'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                            </div>

                            <div className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition-all group'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-600 group-hover:text-blue-700 transition-colors" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-200 mt-8 pt-8 text-center'>
                    <p className='text-sm text-gray-500'>Copyright © 2022–2026 Zatiq Limited. All rights reserved.</p>
                </div>

            </div>
        </div >
    )
}