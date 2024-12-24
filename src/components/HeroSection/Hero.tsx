import React from "react";
import Image from "next/image";
import styles from "@/styles/fonts.module.css";
import { Rubik } from "next/font/google";

const boldFont = Rubik({
  subsets: ["latin"],
  weight: "800",
});

export default function Hero() {
  return (
    <div>
      <div className="lg:hidden bg-[#f3f0f1]">
        {/* top side */}
        <section>
          <div className="h-[20%] w-full md:h-[40%] flex flex-col justify-start">
            {/* introduction */}
            <div className="w-full h-full flex flex-col justify-center px-4 pt-5 lg:px-10 lg:py-2">
              <h1
                className={`${boldFont.className} uppercase text-[24px] tracking-normal leading-tight 
              md:text-3xl md:text-center`}
              >
                find clothes
                <span className="pl-1 xl:pl-3 lg:pl-4">that matches</span> your
                style
              </h1>
              <p className="text-sm lg:mt-6 text-gray-500 md:text-lg lg:text-base xl:text-lg xl:pl-9">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button
                className="bg-black text-white px-6 py-2 rounded-3xl mx-1 mt-2 lg:mt-6 text-sans 
            md:mx-52 lg:mx-0 lg:w-fit xl:ml-14 xl:px-14"
              >
                Shop Now
              </button>
            </div>

            {/* statistics */}
            <div className="w-full h-[30%] lg:hidden">
              {/* first line */}
              <div className="w-full h-14 flex flex-row pt-2">
                <div className="text-center h-full w-1/2 border-r-[1px] md:border-r-2">
                  <h1 className={`${styles.fontSatoshi} font-bold`}>200+</h1>
                  <p className="text-sm pl-2 text-gray-500">
                    International Brands
                  </p>
                </div>
                <div className="text-center h-full w-1/2">
                  <h1 className={`${styles.fontSatoshi} font-bold`}>2,000+</h1>
                  <p className="text-sm pl-2 text-gray-500">
                    High-Quality Products
                  </p>
                </div>
              </div>

              {/* second line */}
              <div className="w-full h-fit flex flex-col justify-center items-center mt-0">
                <h1 className={`${styles.fontSatoshi} font-bold`}>30,000+</h1>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>

          </div>
        </section>

        {/* bottom side */}
        <section>
          <div className="w-full h-1/2 flex justify-center items-center">
            <div className="relative w-full md:w-[52%] h-1/2 flex justify-center items-end">
              <Image
                src={"/images/small-image.png"}
                width={800}
                height={0}
                alt="Model Image"
                className="mx-auto h-auto w-4/5 md:mx-0 md:w-1/2"
              />
              {/* Star Image 1 */}
              <Image
                src="/images/star.png"
                width={50}
                height={50}
                alt="Star Image"
                className="absolute top-1 right-10 md:right-[40px]"
              />
              {/* {/* Star Image 2   */}
              <Image
                src="/images/star.png"
                width={30}
                height={50}
                alt="Star Image"
                className="absolute top-20 left-12 md:left-16 md:top-28"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
