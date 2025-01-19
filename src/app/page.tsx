import React from "react";
import { Montserrat } from "next/font/google";
import Hero from "@/components/HeroSection/Hero";
import Feedback from "@/components/feedback/Feedback";
import Image from "next/image";
import ProductCard from "@/components/ProductCard/ProductCard";
import { ProductDataType } from "@/components/types/types";

const boldFont = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

export default async function Home() {
  // fetch data from api route for specific route
  const response1 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URl}/api/productsData?category=hoodie`,
    {
      cache: "no-store",
    }
  );
  // for section 2
  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URl}/api/productsData?category=jeans`,
    {
      cache: "no-store",
    }
  );

  // for section 3
  const response3 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URl}/api/productsData?category=shirt`,
    {
      cache: "no-store",
    }
  );

  // for section 4
  const response4 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URl}/api/productsData?category=tshirt`,
    {
      cache: "no-store",
    }
  );
  // converting the api data to json format
  const section1: ProductDataType[] = await response1.json();
  const section2: ProductDataType[] = await response2.json();
  const section3: ProductDataType[] = await response3.json();
  const section4: ProductDataType[] = await response4.json();

  return (
    <div className="w-full min-h-screen">
      <section>
        {/* hero section for small devices  */}
        <div className="">
          <Hero />
        </div>

        {/* hero section for large devices */}
        <div
          className="flex flex-col lg:flex-row w-full h-max lg:h-[493px] xl:h-[660px] bg-[#F2F0F1] 
        lg:bg-[url(/images/Rectangle2.png)] lg:bg-cover"
        >
          {/* hero section content */}
          <div className="hidden lg:flex flex-col justify-center items-start w-[43%] xl:w-[50%] h-fit my-20 lg:py-20 px-2">
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
              src="/brandsName/Vector4.png"
              width={110}
              height={90}
              alt="Vector 4"
              className="px-2"
            />
            <Image
              src="/brandsName/Vector2.png"
              width={70}
              height={90}
              alt="Vector 2"
              className="px-2"
            />
            <Image
              src="/brandsName/Vector3.png"
              width={110}
              height={90}
              alt="Vector 3"
              className="px-2"
            />
            <Image
              src="/brandsName/vector5.png"
              width={110}
              height={90}
              alt="Vector 5"
              className="py-3"
            />
            <Image
              src="/brandsName/vector-1.png"
              width={110}
              height={90}
              alt="Vector 1"
              className="py-3"
            />
          </div>
        </div>
      </section>

      {/*  new arrival hoodies section */}
      <section id="new-arrivals">
        <div
          className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
        border-gray-200 pb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-16 text-center transition-all duration-300 hover:text-gray-700 hover:scale-105">
            New Arrival Hoodies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
            {section1.map((item: ProductDataType, i: number) => {
              return (
                <ProductCard
                  key={i}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  discountPercentage={item.discountPercentage}
                  slug={item.slug}
                  sizes={item.sizes}
                  description={item.description}
                  colors={item.colors}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* top selling jeans section */}
      <section>
        <div
          className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
        border-gray-200 pb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-16 text-center transition-all duration-300 hover:text-gray-700 hover:scale-105">
            Top Selling Jeans
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
            {section2.map((item: ProductDataType, i: number) => {
              return (
                <ProductCard
                  key={i}
                  colors={item.colors}
                  sizes={item.sizes}
                  description={item.description}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  discountPercentage={item.discountPercentage}
                  slug={item.slug}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* classic shirts section */}
      <section>
        <div
          className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
        border-gray-200 pb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-16 text-center transition-all duration-300 hover:text-gray-700 hover:scale-105">
            Classic Shirts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
            {section3.map((item: ProductDataType, i: number) => {
              return (
                <ProductCard
                  key={i}
                  colors={item.colors}
                  sizes={item.sizes}
                  description={item.description}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  discountPercentage={item.discountPercentage}
                  slug={item.slug}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* light and bright t-shirts section */}
      <section>
        <div
          className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
        border-gray-200 pb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-16 text-center transition-all duration-300 hover:text-gray-700 hover:scale-105">
            Light And Bright T-Shirts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
            {section4.map((item: ProductDataType, i: number) => {
              return (
                <ProductCard
                  key={i}
                  name={item.name}
                  colors={item.colors}
                  sizes={item.sizes}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  discountPercentage={item.discountPercentage}
                  slug={item.slug}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Dress style section */}
      <div className="bg-[#F0F0F0] mt-16 w-[90%] lg:w-[95%] h-fit rounded-[20px] mx-auto mb-10 flex flex-col items-center">
        <div className="uppercase font-extrabold text-2xl md:text-3xl text-center font-[sans-serif] pt-8 px-4 lg:text-5xl lg:hover:scale-110 transition-all duration-300 lg:hover:border-b-2 lg:hover:text-gray-900 mb-10 pb-4 border-gray-600">
          Browse by dress style
        </div>

        <div
          className="flex justify-center items-center flex-col lg:flex-row
        w-full h-full space-y-5 mb-4 lg:space-x-3"
        >
          <Image
            src="/images/casual-image.png"
            alt="image"
            width={800}
            height={800}
            className="w-[80%] md:w-[50%] lg:w-[30%] lg:hover:scale-105 transition-all duration-500 cursor-pointer"
          />
          <Image
            src="/images/formal-image.png"
            alt="image"
            width={800}
            height={800}
            className="w-[90%] md:w-[60%] lg:w-[48%] lg:hover:scale-105 transition-all duration-500 cursor-pointer"
          />
        </div>

        <div
          className="flex justify-center items-center flex-col lg:flex-row
        w-full h-full space-y-5 mb-4 lg:space-x-3"
        >
          <Image
            src="/images/party.png"
            alt="image"
            width={800}
            height={800}
            className="w-[90%] md:w-[60% lg:w-[40%] lg:hover:scale-105 transition-all duration-500 cursor-pointer"
          />
          <Image
            src="/images/gym.png"
            alt="image"
            width={800}
            height={800}
            className="w-[90%] md:w-[50%] lg:w-[20%] lg:hover:scale-105 transition-all duration-500 cursor-pointer"
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
