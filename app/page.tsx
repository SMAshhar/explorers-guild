import React from "react";
import Slideshow from "../components/slideShow";
import localFont from '@next/font/local'
import { data, octopus, activities, amenities } from "@/components/Block/data";
import textBlock, { textWrite } from "@/components/Block/text-block";
import Footer from "@/components/footer";
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

export default function page() {


  return (
    <div className=" w-screen text-md sm:text-lg md:text-xl lg:text-2xl ">
      {/* <Image src='/boat.jpg' alt='bg' width={96} height={96} className="absolute -z-50" /> */}
      <h1 className="text-center h-screen bg-[url('/boat.jpg')] md:bg-cover bg-fixed -z-50 py-48 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl"><p className={`${cal.variable} font-cal justify-center md:text-cyan-600 md:justify-end flex px-32`}>The Ocean Calls</p></h1>
      <div className="flex w-screen ">
        {textBlock(data)}
        {/* heading with description */}
      </div>
      <h1 className="text-center font-light h-screen bg-[url('/argas.jpg')] md:bg-cover bg-fixed -z-50 py-48 items-end flex text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"><p className={`${poppins.variable} font-pop justify-center flex px-4 md:px-32`}>Discover a world of wonder as you set sail on our exclusive glacier yacht tours!</p></h1>
      {/* <Slideshow /> */}
      {textBlock(octopus)}
      <div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iyRP8hl4VPk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div>
          {textBlock(activities)}
        </div>
        <div>
          <Slideshow />
        </div>
        {textBlock(amenities)}
        <div className="bg-white px-4 md:px-24">
          {textWrite('⇀ RIB Safari')}
          {textWrite('⇀ Kayak')}
          {textWrite('⇀ Sea Angling')}
          {textWrite('⇀ Zodiak')}
          {textWrite('⇀ Paddle boards and much more.')}
        </div>
        <Link href='/Tours' className={`${poppins.variable} font-pop bg-white justify-start font-light animate-bounce duration-700 pt-10 md:pt-20 text-gray-600 flex px-4 md:px-24`}>Check out our tours. ⬇️ </Link>
      </div>
      {/* <Footer /> */}
    </div>
  )
}