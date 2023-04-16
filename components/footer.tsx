import Link from "next/link";
import React from "react";
import localFont from "@next/font/local";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

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
            <div className="flex justify-end items-end h-screen bg-white md:bg-center md:bg-[url('/footer-ice.png')]">
                <div className="flex flex-col absolute h-full mt-8 mr-20 items-end justify-center">
                    <img src="/logo3.png" className="flex w-20 h-24 justify-end py-2 text-gray-700 md:text-white hover:text-gray-500" />
                    <Link href={'/'} className={`${poppins.variable} font-pop text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-2xl pt-2 text-gray-700 md:text-white hover:text-gray-500`} >Home</Link>
                    <Link href={'/Tours'} className={`${poppins.variable} font-pop text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-2xl pt-2 text-gray-700 md:text-white hover:text-gray-500`} >Tours</Link>
                    <Link href={'/'} className={`${poppins.variable} font-pop text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-2xl pt-2 text-gray-700 md:text-white hover:text-gray-500`} >Armada</Link>
                    <Link href={'/'} className={`${poppins.variable} font-pop text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-2xl pt-2 text-gray-700 md:text-white hover:text-gray-500`} >Contact</Link>
                    <div className="flex gap-4 py-6 text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-xl">
                        <Link href={'/'} className='' ><FaFacebookF /></Link>
                        <Link href={'/'} className='' ><FaInstagram /></Link>
                        <Link href={'/'} className='' ><FaYoutube /></Link>
                    </div>
                </div>


            </div>

        </div>
    )
}