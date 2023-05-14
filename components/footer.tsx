import Link from "next/link";
import React from "react";
import localFont from "@next/font/local";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import Contact from "./contact";

const poppins = localFont({
    src: [
        {
            path: '../public/fonts/Poppins-ExtraLight.ttf',
            weight: '400'
        },
    ],
    variable: '--font-pop'
})

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col justify-end items-end h-screen md:h-screen bg-white md:bg-center bg-[url('/footer-ice-mobile.png')] md:bg-[url('/footer-ice.png')]">
                <div className="flex flex-col gap-2 mb-4 md:absolute h-full mt-8 mr-20 items-end justify-center ">
                    <img src="/logo3.png" className="flex w-20 h-24 justify-end py-2 pt-20 md:pt-0 text-white hover:text-gray-500" />
                    <Link href={'/'} className={`${poppins.variable} font-pop text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-2xl pt-2 text-white hover:text-gray-500`} >Home</Link>
                    <Link href={'/Tours'} className={`${poppins.variable} font-pop text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-2xl pt-2 text-white hover:text-gray-500`} >Tours</Link>
                    <Link href={'/armada'} className={`${poppins.variable} font-pop text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-2xl pt-2 text-white hover:text-gray-500`} >Armada</Link>
                    <Link href={'#'} className={`${poppins.variable} font-pop text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-2xl pt-2 text-white hover:text-gray-500`} ><Contact /></Link>
                    <div className="flex gap-4 py-2 text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-xl">
                        <Link href={'/'} className='text-white hover:text-gray-500' ><FaFacebookF /></Link>
                        <Link href={'/'} className='text-white hover:text-gray-500' ><FaInstagram /></Link>
                        <Link href={'/'} className='text-white hover:text-gray-500' ><FaYoutube /></Link>
                    </div>
                </div>
                {/* <div className="flex md:hidden gap-4 py-2 text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-xl">
                    <Link href={'/'} className='text-gray-700 md:text-white hover:text-gray-500' ><FaFacebookF /></Link>
                    <Link href={'/'} className='text-gray-700 md:text-white hover:text-gray-500' ><FaInstagram /></Link>
                    <Link href={'/'} className='text-gray-700 md:text-white hover:text-gray-500' ><FaYoutube /></Link>
                </div> */}



            </div>

        </div>
    )
}