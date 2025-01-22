import React from "react";
import styles from "@/styles/fonts.module.css";
import ReviewCard from "@/components/reviewCard/ReviewCard";
import { GetUserClickProduct } from "@/sanity/sanity.query";
import { ProductDataType } from "@/components/types/types";
import { notFound } from "next/navigation";
import ProductPage from "../../../../utils/ProductDetailsPage/ProductDetailsPage";
import DisplayReview from "@/components/reviewCard/displayReview";
import Image from "next/image";
import ReviewButton from "@/components/reviewCard/reviewButton";

export async function generateMetaData({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const productData: ProductDataType | null = await GetUserClickProduct(slug);

  if (!productData) {
    return { notFound: true }; // Return 404 metadata if no product found
  }
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug }: { slug: string } = params;

  // fetch specific product data from user click
  const productData: ProductDataType | null = await GetUserClickProduct(slug);

  if (!productData) {
    notFound(); // This triggers a 404 page if no product is found
  }

  return (
    <div className="w-full min-h-screen mb-16">
      <ProductPage params={productData} />

      {/* rating and reviews section */}
      <div className="mt-20 w-[98%] h-fit mx-auto">
        <div className="w-full flex flex-wrap justify-evenly mx-auto items-center h-14 md:border-b-2 border-gray-200">
          <h1
            className={`${styles.fontSatoshi} text-2xl text-[#000000] py-3 px-6 hover:border-b-2
                    lg:px-20 lg:hover:text-black border-b-2 md:border-none lg:hover:border-black transition-all lg:hover:scale-105`}
          >
            Product Details
          </h1>
          <h1
            className={`${styles.fontSatoshi} text-2xl text-[#000000] py-3 px-6 hover:border-b-2
                    lg:px-20 lg:hover:text-black  border-b-2 md:border-none lg:hover:border-black transition-all lg:hover:scale-105`}
          >
            Rating &amp; Reviews
          </h1>
          <h1
            className={`${styles.fontSatoshi} text-2xl text-[#000000] py-3 px-6 hover:border-b-2
                    lg:px-20 lg:hover:text-black  border-b-2 md:border-none lg:hover:border-black transition-all lg:hover:scale-105`}
          >
            FAQs
          </h1>
        </div>

        <div className="flex flex-wrap justify-between mt-32 mb-10">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold">All Reviews</h1>
            <h4 className="text-gray-500">&#40;451&#41;</h4>
          </div>

          <div className="flex justify-evenly flex-wrap items-center space-x-4">
            <div>
              <Image width={30} height={30} src="/images/tools.png" alt="image" className="w-12  h-9" />
            </div>

            <div className="flex items-center bg-gray-200 rounded-3xl px-4 py-0">
              <h1 className="px-2 py-1">latest</h1>
              <i className="ri-arrow-down-s-line ml-2"></i>
            </div>

            <div>
              <ReviewButton />
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="">
          <DisplayReview />
        </div>

      </div>

      {/* bottom products section  */}
      <div
        className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
            border-gray-200"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-20 text-center">
          You might also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="w-3/4 bg-gray-20 h-[300px] p-4 overflow-hidden mx-auto">
              <img
                src="/images/shirt6.png"
                alt="Product 1"
                className="h-full w-full object-cover rounded-2xl "
              />
            </div>

            <div className="pl-7 xl:pl-16 bg-white">
              <h3 className="text-xl font-bold text-black">
                Polo with Contrast Trims
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
                <h1 className="font-bold text-xl py-2">$212</h1>
                <h1 className="text-gray-400 text-xl font-bold line-through">
                  $242
                </h1>
                <h1 className="bg-gray-200 text-red-600 px-2 rounded-xl text-sm">
                  -20%
                </h1>
              </div>
            </div>
          </div>

          <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="w-2/3 bg-gray-20 h-[300px] p-4 overflow-hidden mx-auto">
              <img
                src="/images/shirt7.png"
                alt="Product 1"
                className="h-full w-full object-cover rounded-2xl "
              />
            </div>

            <div className="pl-7 xl:pl-16 bg-white">
              <h3 className="text-xl font-bold text-black">
                Gradient Graphic T-shirt
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
                <h1 className="font-bold text-xl py-2">$145</h1>
              </div>
            </div>
          </div>

          <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="w-2/3 bg-gray-20 h-[295px] p-4 overflow-hidden mx-auto">
              <img
                src="/images/shirt8.png"
                alt="Product 1"
                className="h-full w-full object-cover rounded-2xl "
              />
            </div>

            <div className="pl-7 xl:pl-16 bg-white">
              <h3 className="text-xl font-bold text-black">
                Polo with Tipping Details,{" "}
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
            </div>
          </div>

          <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="w-2/3 bg-gray-20 h-[290px] p-4 overflow-hidden mx-auto">
              <img
                src="/images/shirt9.png"
                alt="Product 1"
                className="h-full w-full object-cover rounded-2xl "
              />
            </div>

            <div className="pl-7 xl:pl-16 bg-white">
              <h3 className="text-xl font-bold text-black">
                Black Striped T-shirt
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
                <h1 className="font-bold text-xl py-2">$120</h1>
                <h1 className="text-gray-400 text-xl font-bold line-through">
                  $160
                </h1>
                <h1 className="bg-gray-200 text-red-600 px-2 rounded-xl text-sm">
                  -30%
                </h1>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
