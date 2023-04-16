import Image from "next/image";
import React from "react";
import localFont from "@next/font/local";
import { Data } from "@/type/type";
import Link from "next/link";


const poppins = localFont({
    src: [
        {
            path: '../public/fonts/Poppins-ExtraLight.ttf',
            weight: '400'
        }
    ],
    variable: '--font-pop'
})

export default function Tile(tile: Data) {
    return (
      
            <Link href={'/'} className="md:w-1/3 w-full h-[600px] flex flex-col md:flex-row justify-end duration-1000 items-end">
                <div className="relative items-end justify-end m-3 shadow-xl w-full h-4/5 flex flex-col overflow-hidden">
                    <Image src={`${tile.image}`} alt='image' width={1900} height={1024} className="absolute hover:scale-105 transition-all duration-500 h-full ease-in-out transform bg-center bg-fill" />
                    <h1 className={`${poppins.variable} px-6 font-pop text-3xl transition-all duration-500 ease-in-out transform hover:scale-105 `}>{tile.heading}</h1>
                    <p className={`${poppins.variable} p-6 font-pop text-md z-10`}>{tile.text}</p>
                </div>
            </Link>
       
    )
}