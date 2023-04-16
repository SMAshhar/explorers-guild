import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import localFont from 'next/font/local';

const poppins = localFont({
  src: [
      {
          path: '../../public/fonts/Poppins-ExtraLight.ttf',
          weight: '400'
      },
  ],
  variable: '--font-pop'

})

async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=touringCompany`, { cache: 'no-store' });
  // const res = await fetch(`https://cdn.contentful.com/spaces/6yvovqhjcxob/environments/master/entries/6JGtwdQGliSCw6x4ZnzSDk?access_token=GzgvWxlZFVQF6vOL600FcbiqLb2-CebmMNIox3yGiXo`, { cache: 'no-store' });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

function textBlock(data:any) {
  return (
      <div className='bg-white w-full px-4 md:px-24'>
          <div className={`${poppins.variable} font-pop text-gray-700 font-light text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl py-10 md:py-20`}>
              {data.fields.heading}
          </div>
          <div className={`${poppins.variable} font-pop w-full md:w-2/3 pr-4 text-gray-700 text-md font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-10 md:pb-20`}>
              From ${data.fields.cost}
          </div>
          <div className={`${poppins.variable} font-pop w-full md:w-2/3 pr-4 text-gray-700 text-md font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-10 md:pb-20`}>
              {documentToReactComponents(data.fields.details)}
          </div> 
      </div>
  )
}

export default async function tour() {
  const blogs = await getBlogs();
  
  console.log(blogs)
  return (
    <div className='text-4xl text-gray-700'>
      {
        blogs.items && textBlock(blogs.items[0])
      }

    </div >
  )
}

