'use client'
import { useState, useEffect } from "react";
import localFont from "@next/font/local";
import Image from "next/image";

const cal = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-ExtraLight.ttf',
      weight: '400'
    },
  ],
  variable: '--font-cal'

})



const slides = [
  {
    id: 1,
    image: "https://cdn.boatinternational.com/bi_prd/bi/library_images/WIpcN8jSSuaO1EyqTJ32_oc-ric-kayne-suri-icebergs-Jim_Raycroft.jpg",
    heading: "Discover the hidden gems of icy wilderness",
    date: "March 12, 2023",
    description: 'Friends Food Frust With Comb'
  },
  {
    id: 2,
    image: "https://images.alphacoders.com/139/139291.jpg",
    heading: "Spend Time With Beautiful Ice Bergs",
    date: "March 13, 2023",
    description: 'Moon Set Rock Ice Tell'

  },
  {
    id: 3,
    image: "https://sunreef-yachts-eco.com/img/pages-eco/yachts/sunreef-60/sunreef-60.jpg?3.8.0.8393.213",
    heading: "Bask Yourself In The Magestic Sunsets",
    date: "March 14, 2023",
    description: 'Sun Face Light Star'

  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img src={slide.image} className="w-full h-full object-cover" alt={`Slide ${slide.id}`} />
            <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-slate-600 text-center">
              <h2 className={`${cal.variable} font-cal ml-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl`}>{slide.heading}</h2>
              <p className="mt-4">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Slideshow;
