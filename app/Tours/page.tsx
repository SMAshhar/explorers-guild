import { tiles } from "@/components/Block/data";
import Tile from "@/components/tile";
import localFont from "@next/font/local";
import React from "react";
import { tours } from "@/components/Block/data";
import textBlock from "@/components/Block/text-block";

const poppins = localFont({
    src: [
        {
            path: '../../public/fonts/Poppins-ExtraLight.ttf',
            weight: '400'
        },
    ],
    variable: '--font-pop'
})

export default function Tours() {
    return (
        <div>
            <h1 className="text-center h-[70vh] bg-[url('/costal-thailand.webp')] relative md:bg-cover bg-fixed -z-50 py-48 ">
                <p className={`${poppins.variable} font-pop justify-center flex font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl px-32 pt-16`}>Our Tours</p>
                <p className={`${poppins.variable} font-pop justify-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl flex font-extralight pt-8 px-32`}>Amazing Bucket List Adventures</p>
            </h1>
            {textBlock(tours)}
            <div className="flex bg-white">
                {Tile(tiles[0])}
                {Tile(tiles[1])}
                {Tile(tiles[2])}
            </div>
        </div>

    )
}