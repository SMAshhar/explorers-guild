'use client'
import React from 'react'
import Booking from '@/components/book';
import { useState } from "react";
import localFont from 'next/font/local';
import Contact from '@/components/contact';


const cal = localFont({ src: '../../public/fonts/Poppins-ExtraLight.ttf' })


const SlideShow = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [onClose, setOnClose] = useState(true);
  // const data = await getSlideData()

  return (
    <div className="relative h-screen ">
      <div className={cal.className}>
        <Contact />
      <Booking />   
      </div>
    </div>
  );
};

export default SlideShow;
