'use client';
import Image from "next/image";
import Link from "next/link";
import { ProductDataType } from "@/components/types/types";
import styles from "@/styles/fonts.module.css";
import { useContext } from "react";
import productContext from "@/contextApi/productContext";
import sanityClient from "@/sanity/sanity.client";

export default function ProductPage({ params }: { params: ProductDataType }) {

  const context = useContext(productContext); // using the context to store the data
  if (!context) {
    throw new Error("productContext must be used within a ProductProvider"); // checking the context is not undefined
  }
  const { setProductData } = context; // extract the setPrdouctData function from context

  //function which transfer the data to orderDetails page when the button is click
  const handleOrderClick = () => {
    setProductData(params); // adds the data to context
  }

  //function which trnasfer the data to cart page when the button is click
  const handleAddtocartClick = async () => {
    try {
      const doc = {
        _type: "cartSchema",
        name: params.name,
        discountPercentage: params.discountPercentage || 0,
        actualPrice: params.discountPercentage ? ((
          (params.price / params.discountPercentage) * 100) - (params.price)).toFixed(0)
          : params.price,
        price: params.discountPercentage ? ((params.price / params.discountPercentage) * 100).toFixed(0) : 0,
        sizes: params.sizes,
        colors: params.colors,
        imageSrc: params.image,
      };
      // Create document in Sanity
      await sanityClient.create(doc);

      console.log("Product data added to cart schema in Sanity.");
      alert('Your product added successfully to Cart');

    } catch (error) {
      console.error("Error adding product to cart in Sanity", error);
    }
  };

  return (
    <div className="">
      {/* top side  */}
      <div className="w-[95%] border-t-2 pt-10 h-fit flex flex-col md:flex-row items-center mx-auto overflow-hidden">
        {/* sub left / sub top side  */}
        <div className="flex justify-center items-center flex-1">
          <div className="px-5 pt-6 mx-auto bg-gray-0 shadow-2xl rounded-2xl">
            <Image
              width={300}
              height={400}
              src={params.image}
              alt="Product Image"
              className="lg:hover:scale-105 lg:hover:shadoow-2xl rounded-md lg:hover:rounded-lg object-cover object-center transition-all duration-500"
            />
          </div>
        </div>

        {/* sub right / sub bottom side */}
        <div className="flex-1">
          <div className="mt-10 border-b-[1px] border-gray-300">
            <h1
              className="font-[sans-serif] font-extrabold text-2xl pr-10 uppercase pb-1 md:pr-0 lg:text-4xl lg:hover:text-gray-700 lg:hover:cursor-pointer lg:hover:scale-105 transition-all duration-500 w-fit"
            >
              {params.name}
            </h1>

            <div className="flex space-x-2 my-3">
              {/* disounted price */}
              {params.discountPercentage ? (
                <h1 className={`${styles.fontSatoshi} text-2xl font-[650]`}>
                  $
                  {(
                    (params.price / params.discountPercentage) * 100 -
                    params.price
                  ).toFixed(0)}
                </h1>
              ) : (
                <h1 className={`${styles.fontSatoshi} text-2xl font-[650]`}>
                  ${params.price}
                </h1>
              )}

              {/* original price */}
              {params.discountPercentage ? (
                <h1
                  className={`${styles.fontSatoshi} text-2xl text-gray-400 font-[600] pl-1 line-through decoration-1 `}
                >
                  $
                  {((params.price / params.discountPercentage) * 100).toFixed(
                    0
                  )}
                </h1>
              ) : (
                ""
              )}

              {params.discountPercentage ? (
                <h1 className="text-center overflow-hidden w-14 mt-1 h-6 bg-gray-300 text-red-600 rounded-xl px-2 ml-3">
                  -{params.discountPercentage}%
                </h1>
              ) : (
                ""
              )}
            </div>

            <div className="my-3">
              <div
                className={`${styles.fontSatoshi} text-gray-500 text-[15px]`}
              >
                <details className="transition-all duration-300">
                  <summary className="transition-all duration-500 font-semibold cursor-pointer lg:hover:opacity-50 tracking-wide :text-[18px]">
                    {params.description.slice(0, 288)}
                  </summary>
                  <p className="transition-all duration-500 mt-2 tracking-wide text-[16px] font-semibold cursor-pointer lg:hover:opacity-65">
                    {params.description}
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* colors section */}
          <div className="mt-4 border-b-[1px] border-gray-300 pb-5">
            <div className="pb-2">
              <h1 className="capitalize text-gray-400 text-[22px] font-[700] w-fit cursor-pointer lg:hover:scale-105 transition-all duration-300 lg:hover:text-gray-900">
                Available colors
              </h1>
            </div>
            {/*  colors available */}
            <div className="flex space-x-3 ml-1">
              {params.colors.map((item: string, i: number) => {
                return (
                  <div className="">
                    <button
                      key={i}
                      className="bg-gray-200 px-4 py-1 rounded-xl lg:hover:scale-105 transition-all duration-300 cursor-pointer lg:hover:bg-black lg:hover:text-white tracking-wide focus:bg-black focus:text-white font-semibold"
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* sizes section */}
          <div className="mt-4 border-b-[1px] border-gray-300 pb-5">
            <div className="pb-2">
              <h1 className="capitalize text-gray-400 text-[22px] font-[700] w-fit cursor-pointer lg:hover:scale-105 transition-all duration-300 lg:hover:text-gray-900">
                Available Size
              </h1>
            </div>
            {/*  sizes available */}
            <div className="flex space-x-3 ml-1">
              {params.sizes.map((item: string, i: number) => {
                return (
                  <div className="">
                    <button
                      key={i}
                      className="bg-gray-200 px-6 py-1 rounded-xl lg:hover:scale-105 transition-all duration-300 cursor-pointer lg:hover:bg-black lg:hover:text-white tracking-wide font-semibold"
                      type="button"
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/*  new product section  */}
          <div className="">
            <h1 className="capitalize text-gray-400 text-[22px] font-[700] w-fit cursor-pointer lg:hover:scale-105 transition-all duration-300 lg:hover:text-gray-900 mt-4">
              New Product
            </h1>
          </div>
          {/*  checking the product is new  */}
          <div className="flex mt-2 space-x-1 mb-4">
            <div className="">
              {params.isNew ? (
                <div className="">
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/512/665/665939.png"
                    }
                    width={50}
                    height={50}
                    alt="Tick image"
                    className=""
                  />
                </div>
              ) : (
                <div className="">
                  <Image
                    src={
                      "https://media.tenor.com/kGq0C1FMxsAAAAAe/crossmark.png"
                    }
                    width={50}
                    height={50}
                    alt="Tick image"
                    className=""
                  />
                </div>
              )}
            </div>

            <div className="w-full flex justify-center space-x-12 gap-4 items-center cursor-pointer">

              <div className="w-1/4">

                <Link
                  href={"/"}
                  onClick={handleAddtocartClick}
                  className={`${styles.fontSatoshi}
                                text-white cursor-pointer bg-black text-center py-2 rounded-3xl
                                lg:hover:scale-110 lg:focus:bg-gray-800 transition-all px-8`}
                >
                  Add to Cart
                </Link>
              </div>

              <div className="w-1/4">
                <Link
                  href={"/orderNow"}
                  onClick={handleOrderClick}
                  prefetch={true}
                  className={`${styles.fontSatoshi}
                                text-white cursor-pointer bg-black tracking-wide text-center py-2 rounded-3xl
                                lg:hover:scale-110 transition-all px-8`}
                >
                  Order Now
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
