import React from 'react'

export async function getSlideData() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=slide`,
     { cache: 'no-store'})

     if (!res) {
        throw new Error('Failed to fetch data')
     }

     const data =  res.json()
     return data
}

const Data = getSlideData()

export default Data
