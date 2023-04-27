import Booking from '@/components/book';
import Contact from '@/components/contact';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import localFont from 'next/font/local';
import { Suspense } from 'react';

const poppins = localFont({
  src: [
    {
      path: '../../../public/fonts/Poppins-ExtraLight.ttf',
      weight: '400'
    },
  ],
  variable: '--font-pop'

})

async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=touringCompany`);
  // const res = await fetch(`https://cdn.contentful.com/spaces/6yvovqhjcxob/environments/master/entries/6JGtwdQGliSCw6x4ZnzSDk?access_token=GzgvWxlZFVQF6vOL600FcbiqLb2-CebmMNIox3yGiXo`, { cache: 'no-store' });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

function textBlock(data: any, blogs: any, tour: number) {
  const image1 = 'https:' + blogs.includes.Asset[tour].fields.file.url
  const image2 = 'https:' + blogs.includes.Asset[tour + 1].fields.file.url
  return (
    <div className='bg-white w-full px-4 md:px-24' key={data.sys.id}>
      <div className={`${poppins.variable} font-pop text-gray-700 font-light text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl py-10 md:py-20`}>
        {data.fields.heading}
      </div>
      <div className='flex w-full'>
        <div className=' w-full md:w-1/2'>
          <div
            className={`${poppins.variable} font-pop w-full md:w-full pr-4 text-gray-700 text-sm font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-10 md:pb-20`}
          >
            <p className='pb-8'>Tour's Highlights:</p>
            {documentToReactComponents(data.fields.highlightes)}
          </div>
          <div className={`${poppins.variable} font-pop w-full md:w-full pr-4 text-gray-700 text-sm font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-10 md:pb-20`}>
            {documentToReactComponents(data.fields.details)}
          </div>
          <div className={`${poppins.variable} font-pop w-full md:w-full pr-4 text-gray-700 text-sm font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-10 md:pb-20`}>
            From ${data.fields.cost}
          </div>

        </div>
        <div className=' w-auto gap-2 h-screen pt-8 pl-16 hidden md:flex'>
          <div className='w-1/2'>
            <img src={image1} alt='image1' className='h-[700px] w-full ' />
          </div>
          <div className='h-[120vh] justify-end items-end flex w-1/2 '>
            <img src={image2} alt='image1' className='h-[700px] w-full -z-0' />
          </div>
        </div>
      </div>
    </div>
  )
}

type Params = {
  params: {
    tour: string
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { tour: 'i-to-g' } }, // See the "paths" section below
      { params: { tour: 't-to-m' } }, // See the "paths" section below
      { params: { tour: '/p-to-t' } }, // See the "paths" section below
    ],
    fallback: true
  };
}

export default async function Tour({ params: { tour } }: Params) {
  const blogs = await getBlogs();
  const dynamicTour = blogs.items.find((item: any) => item.fields.page === tour)


  return (
    <div className='text-4xl text-gray-700'>
      {
        dynamicTour && textBlock(dynamicTour, blogs, dynamicTour.fields.number)
      }
   

      <div className='flex justify-around w-full'>
        {/* <Contact /> */}
        {/* <Booking /> */}
      </div>
    </div >
  )
}

