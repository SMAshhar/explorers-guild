import Tile from "@/components/tile";
import localFont from "@next/font/local";
import React from "react";
import { tours, next, tiles } from "@/components/Block/data";
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
            <h1 className="text-center h-[80vh] bg-[url('/costal-thailand.webp')] relative md:bg-cover bg-fixed -z-50 pt-48 pb-32 ">
                <p className={`${poppins.variable} font-pop justify-center flex font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl px-32 pt-16`}>Our Tours</p>
                <p className={`${poppins.variable} font-pop justify-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl flex font-extralight pt-8 px-32`}>Amazing Bucket List Adventures</p>
            </h1>
            {textBlock(tours)}

            <h1 className="text-center h-[70vh] bg-[url('/explore.jpg')] relative md:bg-cover bg-fixed -z-50 pt-48 pb-32 ">
                <p className={`${poppins.variable} font-pop justify-center flex font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl px-32 pt-16`}>Tours Memorable For Life</p>
                <p className={`${poppins.variable} font-pop justify-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl flex font-extralight pt-8 px-32`}>All that you need</p>
            </h1>
            {textBlock(next)}
            <div className="flex flex-col md:flex-row bg-white p-3">
                {Tile(tiles[0], '/Tours/i-to-g')}
                {Tile(tiles[1], '/Tours/t-to-m')}
                {Tile(tiles[2], '/Tours/p-to-t')}
            </div>
            <div className="flex flex-col md:flex-row bg-white px-3 pb-3">
                {Tile(tiles[3], '/Tours/t-to-m')}
                {Tile(tiles[4], '/Tours/p-to-t')}
                {Tile(tiles[5], '/Tours/i-to-g')}
            </div>
        </div>

    )
}