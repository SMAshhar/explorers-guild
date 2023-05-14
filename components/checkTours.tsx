import React from "react";
import localFont from '@next/font/local'
import Link from "next/link";

const cal = localFont({
    src: [
      {
        path: '../public/fonts/Calligrapher-JRxaE.ttf',
        weight: '400'
      },
    ],
    variable: '--font-cal'
  })

const poppins = localFont({
    src: [
      {
        path: '../public/fonts/Poppins-ExtraLight.ttf',
        weight: '400'
      },
    ],
    variable: '--font-pop'
  
  })

export default function CheckTours() {
    return (
        <div className="w-screen bg-white">
            <h1 className="text-center w-full font-light h-1/2 bg-[url('/pana.jpg')] bg-cover bg-fixed -z-50 py-48 flex text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-gray-900"><p className={`${poppins.variable} font-pop justify-center w-full flex px-4 md:px-24`}>Experience Peace</p></h1>
            <p className={`${poppins.variable} font-pop w-full px-3 md:px-24 md:w-2/3 pr-4 text-gray-700 text-md font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-5 md:pb-10 pt-5`}>With every morning as peaceful and each night as private. We promise you an unforgettable experience. Build your vacation plans with us now. </p>
            <Link href='/Tours' className={`${poppins.variable} font-pop w-full px-3 md:px-24 md:w-2/3 pr-4 text-gray-700 text-md font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-10 underline underline-offset-4`}>Check out our tours...</Link>
        </div>
    )
}