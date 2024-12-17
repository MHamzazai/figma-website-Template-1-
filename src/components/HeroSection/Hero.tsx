'use client';
import { useState, useEffect } from "react";
import React from 'react';
import Image from 'next/image';

export default function Hero() {

  // State to track screen width
  const [isLgScreen, setIsLgScreen] = useState<boolean>(false);

  // Effect to check screen width and update state
  useEffect(() => {
    const handleResize = () => {
      // Check if screen width is greater than or equal to 1024px (lg)
      setIsLgScreen(window.innerWidth >= 768);
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div className="lg:w-full w-full h-1/2 lg:h-full flex justify-center items-center">

        <div className="relative w-full h-full flex justify-center items-end">
          <Image
            src={`${isLgScreen ? "/images/Rectangle2.png" : "/images/small-image.png "}`}
            width={800}
            height={0}
            alt="Model Image"
            className="mx-auto h-auto w-4/5 md:mx-0 lg:w-[100%] lg:h-[90%]"
          />
          {/* Star Image 1 */}
          <Image
            src="/images/star.png"
            width={50}
            height={50}
            alt="Star Image"
            className="absolute top-1 right-10 md:right-[130px] lg:right-8 lg:top-40 xl:right-18 xl:top-8 xl:w-24"
          />
          {/* {/* Star Image 2   */}
          <Image
            src="/images/star.png"
            width={30}
            height={50}
            alt="Star Image"
            className="absolute top-20 left-12 md:left-96 md:top-28 lg:left-72 lg:top-72 xl:left-[482px] xl:w-12"
          />
        </div>

      </div>
    </div>
  )
}
