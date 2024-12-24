import React from "react";
import Link from "next/link";

import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "800", // Adjust weight as needed
});

export default function Header() {
  return (
    <div className="bg-white w-full h-24 xl:h-28 ">
      {/* top header */}
      <div className="relative h-[38px] w-full bg-black flex justify-center items-center 2xl:py-5">
        <div className="h-[19px] w-[410px] xl:w-[490px] font-satoshi text-[12px] flex justify-center items-center">
          <span className="text-teal-200 pl-3 md:text-[15px]  xl:text-[18px]">
            Sign up and get 20% off to your first order.
          </span>
          <span className="underline font-lighter mx-1 text-white md:text-[15px] xl:text-[18px]">
            Sign Up Now
          </span>
        </div>
        <div
          className="hidden absolute top-1/2 right-3 transform -translate-y-1/2 w-[20px]
                h-[20px] md:flex justify-center items-center lg:mr-5"
        >
          <i className="text-white ri-close-large-line"></i>
        </div>
      </div>

      {/* navigation bar */}
      <nav className="h-[calc(100% - 38px)] w-full flex items-center justify-between xl:py-2 2xl:py-2">
        <div className="px-1 flex items-center">
          <div className="flex">
            <i className="ri-menu-line text-black text-2xl font-bold py-[11px] lg:hidden"></i>
            <span className="px-3 py-2 xl:px-1">
              <Link href={"/"}>
                <h1
                  className={`${poppinsFont.className} uppercase font-bold text-[25px] lg:px-4
                                lg:text-3xl xl:pl-16 xl:text-4xl`}
                >
                  shop.co
                </h1>
              </Link>
            </span>
          </div>
          <div
            className="hidden lg:flex items-center justify-center gap-4 lg:px-4 lg:gap-7 xl:px-3
                    xl:gap-6
                    xl:text-lg 2xl:px-3 xl:bg-"
          >
            <div className="flex">
              <Link href="">Shop</Link>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <div className="">
              <Link href="">On Sale</Link>
            </div>
            <div className="">
              <Link href="#new-arrivals">New Arrivals</Link>
            </div>
            <div className="">
              <Link href="">Brands</Link>
            </div>
          </div>
        </div>

        <div className="px-3 flex xl:px-0">
          <form className="hidden lg:block relative">
            <input
              type="text"
              className="border-0 pl-10 pr-2 py-1 w-full bg-gray-100 rounded-3xl lg:w-[333px] xl:w-[520px] 2xl:w-[645px]
                            2xl:mr-10 2xl:py-2"
              placeholder="Search For Products..."
            />
            <i
              className="ri-search-line text-xl absolute left-3 top-1/2 transform
                        -translate-y-1/2 text-gray-600"
            ></i>
          </form>
          <div className="">
            <i className="ri-search-line text-2xl px-1 font-bold lg:hidden"></i>
            <i className="ri-shopping-cart-line text-2xl px-3 font-bold 2xl:mr-2"></i>
            <i
              className="ri-user-line text-xl px-[1.9px] py-[1px] font-bold border-[3px]
                        border-black w-8 h-8 rounded-2xl lg:mr-4 xl:mr-16 xl:text-2xl"
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
