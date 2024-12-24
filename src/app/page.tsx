import React from "react";
import { Montserrat } from "next/font/google";
import Hero from "@/components/HeroSection/Hero";
import Feedback from "@/components/feedback/Feedback";
import Link from "next/link";
import Image from "next/image";

const boldFont = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

export default function Home() {
  return (
    <div className="w-full min-h-screen">

      <section>
        {/* hero section for small devices  */}
        <div className="">
          <Hero />
        </div>

        {/* hero section for large devices */}
        <div
          className="flex flex-col lg:flex-row w-full h-max lg:h-[493px] xl:h-[593px] bg-[#F2F0F1] 
        lg:bg-[url(/images/Rectangle2.png)] lg:bg-cover"
        >
          {/* hero section content */}
          <div className="hidden lg:flex flex-col justify-center items-start w-[43%] xl:w-[50%] bg-blac h-fit my-20 px-2">
            <h1
              className={`${boldFont.className} uppercase text-[24px] tracking-normal leading-tight 
              md:text-3xl md:text-center lg:text-left lg:px-2 lg:text-4xl xl:text-6xl xl:px-8 xl:leading-[63px]`}
            >
              find clothes
              <span className="pl-1 xl:pl-3 lg:pl-2">that matches</span> your
              style
            </h1>
            <p className="text-sm lg:mt-2 lg:pl-2 text-gray-500 md:text-lg lg:text-base xl:text-lg xl:pl-9">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button
              className="bg-black text-white px-6 py-2 rounded-3xl mx-1 mt-2 lg:mt-6 text-sans 
            md:mx-52 lg:mx-0 lg:w-fit xl:ml-14 xl:px-14"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* bottom brands logos */}
        <div className="w-full bg-black py-3 xl:py-1">
          <div className="flex justify-around items-center flex-wrap p-3 pt-5 xl:pt-4">
            <Image
              src="/images/vector4.png"
              width={110}
              height={90}
              alt="Vector 4"
              className="px-2"
            />
            <Image
              src="/images/vector2.png"
              width={70}
              height={90}
              alt="Vector 2"
              className="px-2"
            />
            <Image
              src="/images/vector3.png"
              width={110}
              height={90}
              alt="Vector 3"
              className="px-2"
            />
            <Image
              src="/images/vector5.png"
              width={110}
              height={90}
              alt="Vector 5"
              className="py-3"
            />
            <Image
              src="/images/vector-1.png"
              width={110}
              height={90}
              alt="Vector 1"
              className="py-3"
            />
          </div>
        </div>
        
      </section>

      {/*  new arrivals section */}
      <section id="new-arrivals">
        <div
          className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
        border-gray-200"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-20 text-center">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-3/4 bg-gray-20 h-[300px] p-4 overflow-hidden mx-auto">
                <img
                  src="/images/shirt1.png"
                  alt="Product 1"
                  className="h-full w-full object-cover rounded-2xl "
                />
              </div>

              <div className="pl-7 md:pl-12 xl:pl-16 bg-white">
                <h3 className="text-xl font-bold text-black">
                  T-shirt with Tape Details
                </h3>
                {/* stars */}
                <div className="flex space-x-2">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="halfGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="50%" stopColor="gold" />
                        <stop offset="50%" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12,2 15,8.5 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8.5"
                      fill="url(#halfGradient)"
                    />
                  </svg>
                  <h1 className="text-sm text-black">
                    4.5/<span className="text-gray-500 px-[2px]">5</span>
                  </h1>
                </div>
                <h1 className="font-bold text-xl py-2">$120</h1>

                <div className="w-full flex justify-around items-center mb-3">
                  <Link
                    href={"/productDetails"}
                    className="capitalize text-gray-400 border-2 text-center w-fit px-2 py-1
                  rounded-2xl lg:hover:bg-gray-300 lg:hover:px-4 transition-all lg:hover:text-black lg:hover:font-bold"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-2/3 bg-gray-20 h-[300px] p-4 overflow-hidden mx-auto">
                <img
                  src="/images/pent1.png"
                  alt="Product 1"
                  className="h-full w-full object-cover rounded-2xl "
                />
              </div>

              <div className="pl-7 md:pl-16 xl:pl-16 bg-white">
                <h3 className="text-xl font-bold text-black">
                  Skinny Fit Jeans
                </h3>
                {/* stars */}
                <div className="flex space-x-2">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="halfGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="50%" stopColor="gold" />
                        <stop offset="50%" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12,2 15,8.5 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8.5"
                      fill="url(#halfGradient)"
                    />
                  </svg>
                  <h1 className="text-sm text-black">
                    3.5/<span className="text-gray-500 px-[2px]">5</span>
                  </h1>
                </div>

                <div className="flex  items-center space-x-2">
                  <h1 className="font-bold text-xl py-2">$240</h1>
                  <h1 className="text-gray-400 text-xl font-bold line-through">
                    $260
                  </h1>
                  <h1 className="bg-gray-200 text-red-600 px-2 rounded-xl text-sm">
                    -20%
                  </h1>
                </div>

                <div className="w-full flex justify-around items-center mb-3">
                  <Link
                    href={"/productDetails"}
                    className="capitalize text-gray-400 border-2 text-center w-fit px-2 py-1
                  rounded-2xl lg:hover:bg-gray-300 lg:hover:px-4 transition-all lg:hover:text-black lg:hover:font-bold"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-2/3 bg-gray-20 h-[295px] p-4 overflow-hidden mx-auto">
                <img
                  src="/images/shirt2.png"
                  alt="Product 1"
                  className="h-full w-full object-cover rounded-2xl "
                />
              </div>

              <div className="pl-7 md:pl-16 xl:pl-16 bg-white">
                <h3 className="text-xl font-bold text-black">
                  Checkered Shirt
                </h3>
                {/* stars */}
                <div className="flex space-x-2">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="halfGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="50%" stopColor="gold" />
                        <stop offset="50%" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12,2 15,8.5 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8.5"
                      fill="url(#halfGradient)"
                    />
                  </svg>
                  <h1 className="text-sm text-black">
                    4.5/<span className="text-gray-500 px-[2px]">5</span>
                  </h1>
                </div>
                <h1 className="font-bold text-xl py-2">$180</h1>

                <div className="w-full flex justify-around items-center mb-3">
                  <Link
                    href={"/productDetails"}
                    className="capitalize text-gray-400 border-2 text-center w-fit px-2 py-1
                  rounded-2xl lg:hover:bg-gray-300 lg:hover:px-4 transition-all lg:hover:text-black lg:hover:font-bold"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-2/3 bg-gray-20 h-[290px] p-4 overflow-hidden mx-auto">
                <img
                  src="/images/shirt3.png"
                  alt="Product 1"
                  className="h-full w-full object-cover rounded-2xl "
                />
              </div>

              <div className="pl-7 md:pl-16 xl:pl-16 bg-white">
                <h3 className="text-xl font-bold text-black">
                  Sleeve Striped T-shirt
                </h3>
                {/* stars */}
                <div className="flex space-x-2">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="halfGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="50%" stopColor="gold" />
                        <stop offset="50%" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12,2 15,8.5 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8.5"
                      fill="url(#halfGradient)"
                    />
                  </svg>
                  <h1 className="text-sm text-black">
                    4.5/<span className="text-gray-500 px-[2px]">5</span>
                  </h1>
                </div>

                <div className="flex  items-center space-x-2">
                  <h1 className="font-bold text-xl py-2">$130</h1>
                  <h1 className="text-gray-400 text-xl font-bold line-through">
                    $160
                  </h1>
                  <h1 className="bg-gray-200 text-red-600 px-2 rounded-xl text-sm">
                    -30%
                  </h1>
                </div>

                <div className="w-full flex justify-around items-center mb-3">
                  <Link
                    href={"/productDetails"}
                    className="capitalize text-gray-400 border-2 text-center w-fit px-2 py-1
                  rounded-2xl lg:hover:bg-gray-300 lg:hover:px-4 transition-all lg:hover:text-black lg:hover:font-bold"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 mb-14">
            <button
              className="text-xl border-2 border-gray-400 px-20 rounded-3xl py-[9px] text-center 
            lg:hover:scale-110 lg:hover:bg-gray-100 lg:hover:border-black transition-all"
            >
              View All
            </button>
          </div>
        </div>
      </section>

      {/* top selling section */}
      <section>
        <div className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-16 text-center">
            Top Selling
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-2/3 bg-gray-20 h-[290px] p-4 overflow-hidden mx-auto">
                <img
                  src="/images/shirt4.png"
                  alt="Product 1"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>

              <div className="pl-7 md:pl-16 xl:pl-16 bg-white">
                <h3 className="text-xl font-bold text-black">
                  Vertical Striped Shirt
                </h3>
                {/* stars */}
                <div className="flex space-x-2">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <h1 className="text-sm text-black">
                    5.0/<span className="text-gray-500 px-[2px]">5</span>
                  </h1>
                </div>

                <div className="flex  items-center space-x-2">
                  <h1 className="font-bold text-xl py-2">$212</h1>
                  <h1 className="text-gray-400 text-xl font-bold line-through">
                    $232
                  </h1>
                  <h1 className="bg-gray-200 text-red-600 px-2 rounded-xl text-sm">
                    -20%
                  </h1>
                </div>

                <div className="w-full flex justify-around items-center mb-3">
                  <Link
                    href={"/productDetails"}
                    className="capitalize text-gray-400 border-2 text-center w-fit px-2 py-1
                  rounded-2xl lg:hover:bg-gray-300 lg:hover:px-4 transition-all lg:hover:text-black lg:hover:font-bold"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-2/3 bg-gray-20 h-[290px] p-4 overflow-hidden mx-auto">
                <img
                  src="/images/shirt5.png"
                  alt="Product 1"
                  className="h-full w-full object-cover rounded-2xl "
                />
              </div>

              <div className="pl-7 md:pl-16 xl:pl-16 bg-white">
                <h3 className="text-xl font-bold text-black">
                  Courage Graphic T-shirt
                </h3>
                {/* stars */}
                <div className="flex space-x-2">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>

                  <h1 className="text-sm text-black">
                    4.0/<span className="text-gray-500 px-[2px]">5</span>
                  </h1>
                </div>

                <div className="flex  items-center space-x-2">
                  <h1 className="font-bold text-xl py-2">$145</h1>
                </div>

                <div className="w-full flex justify-around items-center mb-3">
                  <Link
                    href={"/productDetails"}
                    className="capitalize text-gray-400 border-2 text-center w-fit px-2 py-1
                  rounded-2xl lg:hover:bg-gray-300 lg:hover:px-4 transition-all lg:hover:text-black lg:hover:font-bold"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-2/3 bg-gray-20 h-[290px] p-4 overflow-hidden mx-auto">
                <img
                  src="/images/shorts.png"
                  alt="Product 1"
                  className="h-full w-full object-cover rounded-2xl "
                />
              </div>

              <div className="pl-7 md:pl-16 xl:pl-16 bg-white">
                <h3 className="text-xl font-bold text-black">
                  Loose Fit Bermuda Shorts
                </h3>
                {/* stars */}
                <div className="flex space-x-2">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <h1 className="text-sm text-black">
                    3.0/<span className="text-gray-500 px-[2px]">5</span>
                  </h1>
                </div>
                <h1 className="font-bold text-xl py-2">$80</h1>

                <div className="w-full flex justify-around items-center mb-3">
                  <Link
                    href={"/productDetails"}
                    className="capitalize text-gray-400 border-2 text-center w-fit px-2 py-1
                  rounded-2xl lg:hover:bg-gray-300 lg:hover:px-4 transition-all lg:hover:text-black lg:hover:font-bold"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-2/3 bg-gray-20 h-[300px] p-4 overflow-hidden mx-auto">
                <img
                  src="/images/pent2.png"
                  alt="Product 1"
                  className="h-full w-full object-cover rounded-[12px] "
                />
              </div>

              <div className="pl-7 md:pl-16 xl:pl-16 bg-white">
                <h3 className="text-xl font-bold text-black">
                  Faded Skinny Jeans
                </h3>
                {/* stars */}
                <div className="flex space-x-2">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="halfGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="50%" stopColor="gold" />
                        <stop offset="50%" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12,2 15,8.5 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8.5"
                      fill="url(#halfGradient)"
                    />
                  </svg>
                  <h1 className="text-sm text-black">
                    4.5/<span className="text-gray-500 px-[2px]">5</span>
                  </h1>
                </div>

                <div className="flex  items-center space-x-2">
                  <h1 className="font-bold text-xl py-2">$210</h1>
                </div>

                <div className="w-full flex justify-around items-center mb-3">
                  <Link
                    href={"/productDetails"}
                    className="capitalize text-gray-400 border-2 text-center w-fit px-2 py-1
                  rounded-2xl lg:hover:bg-gray-300 lg:hover:px-4 transition-all lg:hover:text-black lg:hover:font-bold"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 mb-14">
            <button
              className="text-xl border-2 border-gray-400 px-20 rounded-3xl py-[9px] text-center 
            lg:hover:scale-110 lg:hover:bg-gray-100 lg:hover:border-black transition-all"
            >
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Dress style section */}
      <div className="bg-[#F0F0F0] mt-16 w-[90%] lg:w-[95%] h-fit rounded-[20px] mx-auto mb-10 flex flex-col items-center">
        <div
          className="uppercase font-extrabold text-2xl md:text-3xl
        text-center font-[sans-serif] py-10 px-4 lg:text-5xl"
        >
          Browse by dress style
        </div>

        <div
          className="flex justify-center items-center flex-col lg:flex-row
        w-full h-full space-y-5 mb-4 lg:space-x-3"
        >
          <img
            src="/images/casual-image.png"
            alt="image"
            className="w-[80%] md:w-[50%] lg:w-[30%]"
          />
          <img
            src="/images/formal-image.png"
            alt="image"
            className="w-[90%] md:w-[60%] lg:w-[48%]"
          />
        </div>

        <div
          className="flex justify-center items-center flex-col lg:flex-row
        w-full h-full space-y-5 mb-4 lg:space-x-3"
        >
          <img
            src="/images/party.png"
            alt="image"
            className="w-[90%] md:w-[60% lg:w-[40%]"
          />
          <img
            src="/images/gym.png"
            alt="image"
            className="w-[90%] md:w-[50%] lg:w-[20%]"
          />
        </div>
      </div>

      {/* bottom feedbacks */}
      <div className="w-full h-fit flex flex-col flex-wrap">
        {/* heading */}
        <div className="w-full flex items-end">
          <div className="w-2/3 pl-3 ">
            <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl lg:pl-8 font-extrabold font-[sans-serif]">
              our happy customers
            </h1>
          </div>
          <div className="w-1/3 text-end text-xl lg:pr-8 space-x-3 pr-2">
            <i className="ri-arrow-left-line"></i>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>

        {/* cards */}
        <div className="flex flex-col lg:flex-row mb-16">
          <Feedback
            name="Sarah M."
            para="I'm blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my
          expectations."
          />

          <Feedback
            name="Alex K."
            para="Finding clothes that align with my personal style used to be a
          challenge until I discovered Shop.co. The range of options they offer is trulyremarkable, catering
          to a variety of tastes and occasions."
          />

          <Feedback
            name="James L."
            para="As someone who's always on the lookout for unique fashion pieces,
          I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also
          on-point with the latest trends."
          />
        </div>
      </div>
    </div>
  );
}
