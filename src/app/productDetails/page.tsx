import React from 'react';
import styles from "@/styles/fonts.module.css";
import ReviewCard from '@/components/reviewCard/Review';
import Link from 'next/link';

export default function ProductDetails() {
    return (
        <div className='w-full min-h-screen mb-16'>
            {/* top side  */}
            <div className="w-[95%] border-t-2 pt-10 h-fit flex flex-col md:flex-row items-center mx-auto overflow-hidden">

                {/* sub left / sub top side  */}
                <div className="flex flex-col-reverse justify-around w-full h-1/2 md:w-1/2 md:h-full
                md:flex-row">

                    <div className="space-y-2 mx-auto flex flex-col pt-0 lg:space-y-3 lg:pl-40">
                        <img src="/images/public-shirt-1.png" alt="image1" />
                        <img src="/images/public-shirt-2.png" alt="image2" ></img>
                        <img src="/images/public-shirt-3.png" alt="image3" />
                    </div>

                    <div className="px-5 pt-6 mx-auto">
                        <img src="/images/public-shirt-lg.png" alt="largeImage" />
                    </div>
                </div>

                {/* sub right / sub bottom side */}
                <div className="w-full h-1/2 md:h-full md:w-1/2 ">

                    <div className="mt-10 border-b-[1px] border-gray-300">

                        <h1 className='font-[sans-serif] font-extrabold text-2xl pr-10 uppercase pb-1
                        md:pr-0 lg:text-4xl'>
                            one life graphic t-shirt
                        </h1>

                        <div className="flex space-x-2 py-1">
                            <svg className="w-4  fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="halfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="50%" stopColor="gold" />
                                        <stop offset="50%" stopColor="white" />
                                    </linearGradient>
                                </defs>
                                <polygon points="12,2 15,8.5 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8.5" fill="url(#halfGradient)" />
                            </svg>

                            <h1 className='text-sm text-black pt-1'>
                                4.5/<span className='text-gray-500 px-[2px]'>5</span>
                            </h1>
                        </div>

                        <div className="flex space-x-2">
                            <h1 className={`${styles.fontSatoshi} text-2xl font-[650]`}>$260</h1>
                            <h1 className={`${styles.fontSatoshi} text-2xl text-gray-400 font-[600] pl-1 line-through decoration-1 `}>$300</h1>
                            <h1 className='text-center overflow-hidden w-14 mt-1 h-6 bg-gray-300 text-red-600 rounded-[32px]'>-40%</h1>

                        </div>

                        <div className="my-2 text-[14px]">
                            <p className={`${styles.fontSatoshi} text-gray-500`}>
                                This graphic t-shirt which is perfect for any occasion. Crafted from a soft
                                and breathable fabric, it offers superior comfort and style.
                            </p>
                        </div>
                    </div>

                    <div className="mt-3 border-b-[1px] border-gray-300 pb-5">

                        <div className="pb-2">
                            <h1 className='capitalize text-gray-400 font-[600]'>select colors</h1>
                        </div>

                        <div className="flex space-x-3 ml-1">
                            <img src="/images/circle-tick.png" alt="tick" />
                            <img src="/images/circle-1.png" alt="" />
                            <img src="/images/circle-2.png" alt="" />
                        </div>

                    </div>

                    <div className="mt-4 border-b-[1px] border-gray-300 pb-7">

                        <h1 className='capitalize text-gray-400 font-[600]'>choose size</h1>

                        <div className="mt-2 flex flex-wrap items-center justify-around lg:justify-center xl:justify-start md:space-x-2
                        lg:space-x-4">
                            <button className='px-5 mb-3 py-2 bg-gray-200 rounded-2xl text-gray-500'>
                                Small
                            </button>
                            <button className='px-5  mb-3 py-2 bg-gray-200 rounded-[26px] text-gray-500'>
                                Medium
                            </button>
                            <button className='px-6  mb-3 py-2 bg-black rounded-2xl text-gray-200'>
                                Large
                            </button>
                            <button className='px-4  mb-3 py-2 bg-gray-200 rounded-3xl text-gray-500'>
                                X-Large
                            </button>
                        </div>
                    </div>

                    <div className="flex mt-8 space-x-1 mb-4">
                        <div className="flex justify-center items-center bg-gray-200 px-2 py-1 space-x-8 text-2xl rounded-3xl">
                            <h1 className='text-[22px]'>-</h1>
                            <h1 className='text-sm pl-1 pt-1 text-center'>1</h1>
                            <h1 className='text-[22px]'>+</h1>
                        </div>

                        <div className="w-full flex justify-center items-center cursor-pointer">
                            <Link href={"/cart"} className={`${styles.fontSatoshi}
                                text-white cursor-pointer bg-black w-[333px] text-center py-2 rounded-3xl
                                lg:hover:scale-110 lg:focus:bg-gray-500 transition-all`}>
                                Add to Cart
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
            {/* rating and reviews section */}
            <div className="mt-20 w-[98%] h-fit mx-auto">

                <div className="w-full flex flex-wrap justify-evenly mx-auto items-center h-14 md:border-b-2 border-gray-200">
                    <h1 className={`${styles.fontSatoshi} text-2xl text-[#000000] py-3 px-6 hover:border-b-2
                    lg:px-20 lg:hover:text-black border-b-2 md:border-none lg:hover:border-black transition-all lg:hover:scale-105`}>
                        Product Details
                    </h1>
                    <h1 className={`${styles.fontSatoshi} text-2xl text-[#000000] py-3 px-6 hover:border-b-2
                    lg:px-20 lg:hover:text-black  border-b-2 md:border-none lg:hover:border-black transition-all lg:hover:scale-105`}>
                        Rating &amp; Reviews
                    </h1>
                    <h1 className={`${styles.fontSatoshi} text-2xl text-[#000000] py-3 px-6 hover:border-b-2
                    lg:px-20 lg:hover:text-black  border-b-2 md:border-none lg:hover:border-black transition-all lg:hover:scale-105`}>
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
                            <img src="/images/tools.png" alt="image" className="w-12  h-9" />
                        </div>

                        <div className="flex items-center bg-gray-200 rounded-3xl px-4 py-0">
                            <h1 className="px-2 py-1">latest</h1>
                            <i className="ri-arrow-down-s-line ml-2"></i>
                        </div>

                        <div>
                            <button className="px-5 mt-2 md:mt-0 rounded-3xl py-2 bg-black text-white">
                                Write a Review
                            </button>
                        </div>
                    </div>
                </div>


                {/* cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                    <ReviewCard
                        name="Samantha D."
                        para="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt."
                        date="Posted on August 14, 2023"
                    />
                    <ReviewCard
                        name="Alex M."
                        para="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
                        date="Posted on August 15, 2023"
                    />
                    <ReviewCard
                        name="Ethan R."
                        para="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&apos;s touch in every aspect of this shirt."
                        date="Posted on August 16, 2023"
                    />
                    <ReviewCard
                        name="Olivia P."
                        para="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out."
                        date="Posted on August 17, 2023"
                    />
                    <ReviewCard
                        name="Liam K."
                        para="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It&apos;s like wearing a piece of art that reflects my passion for both design and fashion."
                        date="Posted on August 18, 2023"
                    />
                    <ReviewCard
                        name="Ava H."
                        para="I&apos;m not just wearing a t-shirt; I&apos;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
                        date="Posted on August 19, 2023"
                    />
                </div>

            </div>


            <div className="text-center mt-20 mb-10">
                <button className='px-8 font-[500] py-2 border-[1px] border-gray-400 lg:hover:scale-110
                rounded-3xl transition-all'>Load More Reviews</button>
            </div>

            <div className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
            border-gray-200">

                <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-20 text-center"> You might also like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="w-3/4 bg-gray-20 h-[300px] p-4 overflow-hidden mx-auto">
                            <img src="/images/shirt6.png" alt="Product 1"
                                className="h-full w-full object-cover rounded-2xl " />
                        </div>

                        <div className="pl-7 xl:pl-16 bg-white">
                            <h3 className="text-xl font-bold text-black">Polo with Contrast Trims</h3>
                            {/* stars */}
                            <div className="flex space-x-2">
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <h1 className='text-sm text-black'>
                                    4.0/<span className='text-gray-500 px-[2px]'>5</span>
                                </h1>
                            </div>

                            <div className="flex  items-center space-x-2">
                                <h1 className='font-bold text-xl py-2'>$212</h1>
                                <h1 className='text-gray-400 text-xl font-bold line-through'>$242</h1>
                                <h1 className='bg-gray-200 text-red-600 px-2 rounded-xl text-sm'>-20%</h1>
                            </div>
                        </div>

                    </div>

                    <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="w-2/3 bg-gray-20 h-[300px] p-4 overflow-hidden mx-auto">
                            <img src="/images/shirt7.png" alt="Product 1"
                                className="h-full w-full object-cover rounded-2xl " />
                        </div>

                        <div className="pl-7 xl:pl-16 bg-white">
                            <h3 className="text-xl font-bold text-black">Gradient Graphic T-shirt</h3>
                            {/* stars */}
                            <div className="flex space-x-2">
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="halfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="50%" stopColor="gold" />
                                            <stop offset="50%" stopColor="white" />
                                        </linearGradient>
                                    </defs>
                                    <polygon points="12,2 15,8.5 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8.5" fill="url(#halfGradient)" />
                                </svg>
                                <h1 className='text-sm text-black'>
                                    3.5/<span className='text-gray-500 px-[2px]'>5</span>
                                </h1>
                            </div>

                            <div className="flex  items-center space-x-2">
                                <h1 className='font-bold text-xl py-2'>$145</h1>
                            </div>
                        </div>

                    </div>

                    <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="w-2/3 bg-gray-20 h-[295px] p-4 overflow-hidden mx-auto">
                            <img src="/images/shirt8.png" alt="Product 1"
                                className="h-full w-full object-cover rounded-2xl " />
                        </div>

                        <div className="pl-7 xl:pl-16 bg-white">
                            <h3 className="text-xl font-bold text-black">Polo with Tipping Details, </h3>
                            {/* stars */}
                            <div className="flex space-x-2">
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="halfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="50%" stopColor="gold" />
                                            <stop offset="50%" stopColor="white" />
                                        </linearGradient>
                                    </defs>
                                    <polygon points="12,2 15,8.5 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8.5" fill="url(#halfGradient)" />
                                </svg>
                                <h1 className='text-sm text-black'>
                                    4.5/<span className='text-gray-500 px-[2px]'>5</span>
                                </h1>
                            </div>
                            <h1 className='font-bold text-xl py-2'>$180</h1>
                        </div>
                    </div>

                    <div className="overflow-hidden hover:shadow-md hover:rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="w-2/3 bg-gray-20 h-[290px] p-4 overflow-hidden mx-auto">
                            <img src="/images/shirt9.png" alt="Product 1"
                                className="h-full w-full object-cover rounded-2xl " />
                        </div>

                        <div className="pl-7 xl:pl-16 bg-white">
                            <h3 className="text-xl font-bold text-black">Black Striped T-shirt</h3>
                            {/* stars */}
                            <div className="flex space-x-2">
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <h1 className='text-sm text-black'>
                                    5.0/<span className='text-gray-500 px-[2px]'>5</span>
                                </h1>
                            </div>

                            <div className="flex  items-center space-x-2">
                                <h1 className='font-bold text-xl py-2'>$120</h1>
                                <h1 className='text-gray-400 text-xl font-bold line-through'>$160</h1>
                                <h1 className='bg-gray-200 text-red-600 px-2 rounded-xl text-sm'>-30%</h1>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
