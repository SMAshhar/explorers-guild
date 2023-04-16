'use client'
import { useState, useEffect } from "react";

// const slides = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/1200x600/1abc9c",
//     heading: "Slide 1",
//     date: "March 12, 2023",
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/1200x600/3498db",
//     heading: "Slide 2",
//     date: "March 13, 2023",
//   },
//   {
//     id: 3,
//     image: "https://via.placeholder.com/1200x600/e74c3c",
//     heading: "Slide 3",
//     date: "March 14, 2023",
//   },
// ];

const Slideshow = (datas:any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % datas.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen">
      {datas.items?.map((data:any, index:number) => (
        <div
          key={data.id}
          className={`absolute top-0 left-0 w-full h-full transition duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={data.image} className="w-full h-full object-cover" alt={`Slide ${data.id}`} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-4xl font-bold">{data.heading}</h2>
            <p className="mt-4">{data.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
