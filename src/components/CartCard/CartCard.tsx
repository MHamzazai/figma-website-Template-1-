import React from 'react';
import styles from "@/styles/fonts.module.css";
import { cartCardTypes } from '../types/types';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const font = Poppins({
    subsets: ["latin"],
    weight: "800",
})
export default function CartCard(props: cartCardTypes) {
    return (
        <div className="p-2 lg:p-4">
            <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:w-[640px] rounded-2xl shadow-md space-y-4 lg:space-y-0 lg:space-x-4">

                {/* Right Side of Card */}
                <div className="w-full lg:w-[72%] flex items-center space-x-4 p-1 flex-col lg:flex-row">

                    <div className="flex-shrink-0 lg:px-3">
                        <Image
                            src={props.imageSrc}
                            width={100}
                            height={100}
                            alt="image"
                            className="rounded-2xl w-[80px] h-28 object-cover"
                        />
                    </div>

                    <div className="space-y-4 lg:space-y-2 text-center lg:text-left">
                        <h1 className={`${font.className} text-lg font-[700] lg:text-xl tracking-wide`}>{props.Name}</h1>

                        {/* Sizes */}
                        <h1 className="font-bold">
                            <span className='text-[18px] text-gray-800'>Available Sizes:</span>
                            <span className="capitalize flex flex-wrap gap-2 pt-1">
                                {props.sizes.map((item: string, i: number) => (
                                    <h1
                                        key={i}
                                        className='bg-black px-3 transition-all text-sm font-medium rounded-xl text-white lg:hover:bg-white lg:hover:text-black cursor-pointer'
                                    >
                                        {item}
                                    </h1>
                                ))}
                            </span>
                        </h1>

                        {/* Colors */}
                        <h1 className="text-sm font-bold pt-2">
                        <span className='text-[18px] text-gray-800 py-1'>Available Colors:</span>
                        <span className="text-gray-500 capitalize flex flex-wrap gap-2 pt-1 font-medium">
                                {props.colors.map((item: string, i: number) => (
                                    <h1
                                        key={i}
                                        className='bg-gray-600 py-1 px-2 transition-all rounded-xl text-white lg:hover:bg-white lg:hover:text-black tracking-wider cursor-pointer'
                                    >
                                        {item}
                                    </h1>
                                ))}
                            </span>
                        </h1>

                        {/* Price */}
                        <div className="mt-2 flex gap-3 p-2 justify-center lg:justify-start">
                            <h1 className={`${styles.fontSatoshi} text-lg font-bold`}>${props.price.toFixed(0)}</h1>
                            {props.discountPercentage ? (
                                <div className="flex gap-4">
                                    <h1 className="text-lg text-gray-400 line-through decoration-1">${props.actualPrice}</h1>
                                    <h1 className="text-[13px] bg-red-300 text-red-800 rounded-xl px-2 py-0 flex justify-center items-center">{props.discountPercentage.toFixed(0)}%</h1>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* Left Side of Card */}
                <div className="w-full lg:w-[28%] flex flex-col items-center lg:items-end mt-4 lg:mt-0 p-2 space-y-8 lg:space-y-12">

                    {/* Delete Icon */}
                    <div className="flex-1">
                        <Image
                            src="/images/delete-image.png"
                            width={30}
                            height={30}
                            alt="delete icon"
                            title='Delete This Product'
                            className="cursor-pointer"
                            onClick={() => props.deleteProduct(props.Name)}
                        />
                    </div>

                    {/* Order Button */}
                    <div className="flex-1 lg:pb-4 xl:pb-0">
                        <Link href={"/orderNow"} className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800">
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
