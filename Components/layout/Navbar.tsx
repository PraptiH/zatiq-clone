"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from '@/public/Images/zatiqLogo.svg'

export default function Navbar() {

  const [isScroll, setIsScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScroll(true)
      }
      else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed w-full z-10 overflow-hidden transition-all duration-300 backdrop-blur-xl
    ${isScroll ? 'bg-transparent rounded-b-xl shadow-md' : 'bg-linear-to-r from-[#c9d9ff] via-[#f2f6ff] to-[#e9f0ff]'}`}>
      <div className="flex items-center justify-around py-5 text-black">
        <div>
          <Image className="cursor-pointer" src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-5 text-base">
          <ul className="flex gap-5">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">Pricing</li>
            <li className="cursor-pointer hover:text-blue-600">Experts</li>
            <li className="cursor-pointer hover:text-blue-600">Funding</li>
            <li className="cursor-pointer hover:text-blue-600">Learn</li>
            <li className="cursor-pointer hover:text-blue-600">Affiliates</li>
            <li className="cursor-pointer hover:text-blue-600">About Us</li>
          </ul>

          <div className="flex gap-5 whitespace-nowrap">
            <button className="bg-white border text-gray-800 border-blue-600 py-2 px-5 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">Log In</button>
            <button className="bg-blue-600 text-white py-2 px-5 rounded-full cursor-pointer hover:bg-white hover:text-gray-800 border hover:border-blue-600">Create Your Store</button>
          </div>
        </div>
      </div>
    </div>
  );
}
