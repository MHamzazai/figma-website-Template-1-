import React from "react";
import styles from "@/styles/fonts.module.css";
import { GetUserClickProduct } from "@/sanity/sanity.query";
import { ProductDataType } from "@/components/types/types";
import { notFound } from "next/navigation";
import ProductPage from "../../../../utils/ProductDetailsPage/ProductDetailsPage";
import DisplayReview from "../../../components/Feedback/DisplayFeedback";
import Image from "next/image";
import ReviewButton from "../../../components/Feedback/FeeebackButton";

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
    </div>
  );
}
