import React from 'react'
import localFont from '@next/font/local'
import {Data} from '@/type/type'




const poppins = localFont({
    src: [
        {
            path: '../../public/fonts/Poppins-ExtraLight.ttf',
            weight: '400'
        },
    ],
    variable: '--font-pop'

})



export default function textBlock(data: Data) {
    return (
        <div className='bg-white w-full px-4 md:px-24'>
            <div className={`${poppins.variable} font-pop text-gray-700 font-light text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl py-10 md:py-20`}>
                {data.heading}
            </div>
            <div className={`${poppins.variable} font-pop w-full md:w-2/3 pr-4 text-gray-700 text-md font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-10 md:pb-20`}>
                {data.text}
            </div>
            {data.text1 && <div className={`${poppins.variable} font-pop w-full md:w-2/3 pr-4 text-gray-700 text-md font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-10 md:pb-20`}>
                {data.text1}
            </div> }
        </div>
    )
}

export function textWrite(text:string) {
    return(
        <div className={`${poppins.variable} bg-white font-pop w-full md:w-2/3 pr-4 text-teal-500 text-md font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-5 md:pb-10`}>{text}</div>
    )
}