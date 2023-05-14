import React, { Suspense } from "react";
import localFont from "@next/font/local";
import { tours } from "@/components/Block/data";
import textBlock from "@/components/Block/text-block";
import Card1 from "@/components/card";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const poppins = localFont({
    src: [
        {
            path: '../../public/fonts/Poppins-ExtraLight.ttf',
            weight: '400'
        },
    ],
    variable: '--font-pop'
})

async function getCardData() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=armadaCard`,
        { next: { revalidate: 10 } });
    // const res = await fetch(`https://cdn.contentful.com/spaces/6yvovqhjcxob/environments/master/entries/6JGtwdQGliSCw6x4ZnzSDk?access_token=GzgvWxlZFVQF6vOL600FcbiqLb2-CebmMNIox3yGiXo`, { cache: 'no-store' });

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function Armada() {
    const data = await getCardData()
    // data.items.map((item:any) => {
    //     console.log(item.fields.image.sys.id)
    //     data.includes.Asset.map((a:any) => {
    //         item.fields.image.sys.id == a.sys.id ? console.log(a.fields.file.url):console.log('nothign')
    //     })
    // })
    console.log("Number of Items from contentful: ", data.items.length)

    return (
        <div>
            <h1 className="text-center h-[80vh] bg-[url('/armada.jpg')] relative md:bg-cover bg-fixed -z-50 pt-48 pb-32 ">
                <p className={`${poppins.variable} font-pop justify-center flex font-extralight text-gray-300 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl px-32 pt-16`}>Our Armada</p>
                <p className={`${poppins.variable} font-pop justify-center text-gray-300 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl flex font-extralight pt-8 px-32`}>Strong Armada and Strong Crew</p>
            </h1>
            <div>
                {textBlock(tours)}
            </div>
            <div className="flex bg-white w-screen h-auto ">
                <div className="flex flex-wrap justify-evenly bg-white w-screen">

                    {data.items.map((item: any) => {
                        return (
                            <div key={item.sys.id}>
                                {data.includes.Asset.map((a: any) => {
                                    return (

                                        <div key={a.sys.id}>
                                            {item.fields.image.sys.id == a.sys.id ?
                                                <div>
                                                    <div>
                                                        <Card1 image={"https:" + a.fields.file.url} heading={item.fields.heading} description={documentToReactComponents(item.fields.description)} />
                                                        {/* {Card("https:" + a.fields.file.url, item.fields.heading, item.fields.description.content[0].content[0].value)} */}
                                                    </div>
                                                </div>
                                                : <div></div>
                                            }
                                        </div>

                                    )
                                })}
                            </div>
                        )
                    })}
                </div></div>
        </div>
    )
}