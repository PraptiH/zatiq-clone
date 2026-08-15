"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import logo from "@/public/Images/zatiqLogo.svg"

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-xl transition-all duration-300
        ${isScroll
          ? "rounded-b-xl bg-transparent shadow-md"
          : "bg-linear-to-r from-[#c9d9ff] via-[#f2f6ff] to-[#e9f0ff]"
        }
      `}
    >
      {/* DESKTOP / HEADER */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center">
          <Image width={160} height={27} className="h-auto w-32 cursor-pointer sm:w-36 lg:w-40" src={logo} alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">

          <div>
            <ul className="flex gap-5 xl:gap-6">
              <li className="cursor-pointer whitespace-nowrap text-sm hover:text-blue-600 xl:text-base">
                Home
              </li>

              <li className="cursor-pointer whitespace-nowrap text-sm hover:text-blue-600 xl:text-base">
                Pricing
              </li>

              <li className="cursor-pointer whitespace-nowrap text-sm hover:text-blue-600 xl:text-base">
                Experts
              </li>

              <li className="cursor-pointer whitespace-nowrap text-sm hover:text-blue-600 xl:text-base">
                Funding
              </li>

              <li className="cursor-pointer whitespace-nowrap text-sm hover:text-blue-600 xl:text-base">
                Learn
              </li>

              <li className="cursor-pointer whitespace-nowrap text-sm hover:text-blue-600 xl:text-base">
                Affiliates
              </li>

              <li className="cursor-pointer whitespace-nowrap text-sm hover:text-blue-600 xl:text-base">
                About Us
              </li>
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="flex gap-3 whitespace-nowrap">
            <button
              className="
                rounded-full border border-blue-600
                bg-white px-5 py-2
                text-gray-800
                transition-all duration-200
                hover:bg-blue-600 hover:text-white
              "
            >
              Log In
            </button>

            <button
              className="
                rounded-full border border-blue-600
                bg-blue-600 px-5 py-2
                text-white
                transition-all duration-200
                hover:bg-white hover:text-gray-800
              "
            >
              Create Your Store
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=" flex h-10 w-10 items-center justify-center rounded-lg text-gray-800 cursor-pointer lg:hidden">
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/*MOBILE MENU*/}
      <div
        className={` rounded-b-xl backdrop-blur-xl transition-all duration-300 lg:hidden px-5 pt-5
          ${isMenuOpen
            ? " opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
          }
        `}
      >


        {/* Mobile Navigation */}
        <ul className="flex flex-col">

          <li className="border-b py-4">
            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-base text-gray-800 hover:text-blue-600">Home</p>
          </li>

          <li className="border-b py-4">
            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-base text-gray-800 hover:text-blue-600">Pricing</p>
          </li>

          <li className="border-b py-4">
            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-base text-gray-800 hover:text-blue-600">Experts</p>
          </li>

          <li className="border-b py-4">
            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-base text-gray-800 hover:text-blue-600">Funding</p>
          </li>

          <li className="border-b py-4">
            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-base text-gray-800 hover:text-blue-600">Learn</p>
          </li>

          <li className="border-b py-4">
            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-base text-gray-800 hover:text-blue-600">Affiliates</p>
          </li>

          <li className="border-b py-4">
            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-base text-gray-800 hover:text-blue-600">About Us</p>
          </li>

        </ul>

        {/* Mobile Buttons */}
        <div className="flex flex-col gap-3 py-5">

          <button
            onClick={() => setIsMenuOpen(false)}
            className=" w-full rounded-full border border-blue-600 bg-white px-5 py-3 text-gray-800 transition-all duration-200
             hover:bg-blue-600 hover:text-white">
            Log In
          </button>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-full rounded-ful border border-blue-60 bg-blue-600 px-5 py-3 text-white transition-all duration-200 
             hover:bg-white hover:text-gray-80">
            Create Your Store
          </button>

        </div>

      </div>
    </div>
  )
}