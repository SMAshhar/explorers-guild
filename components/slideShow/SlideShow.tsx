import Data from "./server";
import Slideshow from "./client";
import { getSlideData } from "./server";



export default async function SlideShow() {
    const data = await getSlideData()
    return(
        <div>
        {Slideshow(data)}
        </div>
    )
}