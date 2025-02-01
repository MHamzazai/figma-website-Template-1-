import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from "next/link";
import React from 'react';

const poppinsFont = Poppins({
    subsets: ['latin'],
    weight: '800', // Adjust weight as needed
});

export default function Footer() {
    return (
        <div className="">
            {/* footer */}
            <div className="w-full">
                {/* upper footer */}
                <div className="w-[95%] h-[280px] md:h-[220px] bg-black mx-auto relative z-10 flex flex-col md:flex-row rounded-3xl xl:w-[1239px] xl:h-[187px]">

                    {/* Left Side */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full px-4 py-6 md:py-9 md:px-6">
                        <p className={`${poppinsFont.className} text-3xl xl:text-4xl xl:px-5 xl:py-4 uppercase font-bold text-white`}>
                            Stay up to date about our latest offers
                        </p>
                    </div>

                    {/* right side  */}
                    <div className="flex flex-col justify-center items-center xl:w-1/2">
                        {/* Email Input with Icon */}
                        <div className="relative w-full flex justify-center">
                            <i className="ri-mail-line absolute left-[8%] md:left-[5%] xl:left-[25%] top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                            <input
                                type="text"
                                className="bg-white w-[95%] md:w-full py-[6px] pl-10 pr-3 rounded-xl border-2 focus:outline-none xl:w-[54%] xl:rounded-2xl"
                                placeholder="Enter your email address"
                            />
                        </div>

                        {/* Button Centered */}
                        <div>
                            <button
                                className="bg-white text-black my-4 py-2 px-14 rounded-xl capitalize focus:outline-none xl:px-20 xl:rounded-2xl"
                            >
                                Subscribe to newsLetter
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="w-full bg-[#F0F0F0] mt-[-90px] pt-[90px] pb-8 flex flex-col">
                    <div className="flex flex-col lg:flex-row lg:justify-between px-6 lg:px-12">
                        {/* Shop.co Branding */}
                        <div className="p-4">
                            <div className="py-6 px-1 text-center lg:text-start lg:py-0 xl:pt-10">
                                <h1 className={`${poppinsFont.className} text-2xl lg:text-3xl xl:text-4xl uppercase`}>
                                    shop.co
                                </h1>
                                <p className="text-gray-600 text-sm mt-2 lg:text-[16px]">
                                    We have clothes that suit your style and make you proud to wear them. From women to men.
                                </p>
                                {/* Social Icons */}
                                <div className="flex justify-center lg:justify-start mt-4 space-x-3 text-center">
                                    <i className="ri-twitter-fill w-10 h-10 bg-white p-2 rounded-full border border-gray-300 text-black"></i>
                                    <i className="ri-facebook-fill bg-black text-white w-10 h-10 p-2 rounded-full"></i>
                                    <i className="ri-instagram-line bg-white text-black w-10 h-10 p-2 rounded-full border border-gray-300"></i>
                                    <i className="ri-github-fill bg-white text-black w-10 h-10 p-2 rounded-full"></i>
                                </div>
                            </div>
                        </div>

                        {/* Footer Sections */}
                        <div className="w-full flex flex-wrap lg:flex-nowrap justify-between
                        lg:justify-evenly gap-6 xl:pt-10">
                            {/* First Two Sections */}
                            <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:gap-12">
                                <div className="flex flex-col leading-8">
                                    <h1 className="uppercase font-medium tracking-widest text-xl">Company</h1>
                                    <Link href="" className="text-gray-500">About</Link>
                                    <Link href="" className="text-gray-500">Features</Link>
                                    <Link href="" className="text-gray-500">Works</Link>
                                    <Link href="" className="text-gray-500">Career</Link>
                                </div>
                                <div className="flex flex-col leading-8">
                                    <h1 className="uppercase font-medium tracking-widest text-xl">Help</h1>
                                    <Link href="" className="text-gray-500">Customer Support</Link>
                                    <Link href="" className="text-gray-500">Delivery Details</Link>
                                    <Link href="" className="text-gray-500">Terms &amp; Conditions</Link>
                                    <Link href="" className="text-gray-500">Privacy Policy</Link>
                                </div>
                            </div>
                            {/* Second Two Sections */}
                            <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:gap-12">
                                <div className="flex flex-col leading-8">
                                    <h1 className="uppercase font-medium tracking-widest text-xl">FAQ</h1>
                                    <Link href="" className="text-gray-500">Account</Link>
                                    <Link href="" className="text-gray-500">Manage Deliveries</Link>
                                    <Link href="" className="text-gray-500">Orders</Link>
                                    <Link href="" className="text-gray-500">Payment</Link>
                                </div>
                                <div className="flex flex-col leading-8">
                                    <h1 className="uppercase font-medium tracking-widest text-xl">Resources</h1>
                                    <Link href="" className="text-gray-500">Free eBook</Link>
                                    <Link href="" className="text-gray-500">Development Tutorial</Link>
                                    <Link href="" className="text-gray-500">How To - Blog</Link>
                                    <Link href="" className="text-gray-500">Youtube Playlist</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="border-t-[1px] border-gray-400 mt-6 w-[90%] mx-auto">
                        <div className="flex flex-col lg:flex-row justify-between items-center text-center pt-4 text-sm text-gray-700">
                            <p>Shop.co &copy; 2000-2023, All Rights Reserved</p>
                            <div className="flex gap-3 mt-4 lg:mt-0">
                                <Image width={50} height={30} src="https://static.vecteezy.com/system/resources/previews/020/336/493/non_2x/visa-logo-visa-icon-free-free-vector.jpg" alt="Visa" className="w-12 rounded-md xl:w-16 h-10 lg:hover:scale-90 transition-all cursor-pointer" />
                                <Image width={50} height={30} src="https://i.pinimg.com/736x/56/fd/48/56fd486a48ff235156b8773c238f8da9.jpg" alt="Mastercard" className="w-12 rounded-md xl:w-16 h-10" />
                                <Image width={50} height={30} src="https://thumbs.dreamstime.com/b/paypal-logo-paypal-logo-white-background-vector-format-avaliable-124289807.jpg" alt="PayPal" className="w-12 xl:w-16 rounded-md h-10" />
                                <Image width={50} height={30} src="https://thumbs.dreamstime.com/b/apple-pay-logo-white-background-vector-format-available-148122496.jpg" alt="Apple Pay" className="w-12 xl:w-16 rounded-md h-10" />
                                <Image width={50} height={30} src="https://thumbs.dreamstime.com/b/google-pay-logo-white-background-vector-format-available-google-pay-logo-136960347.jpg" alt="G-pay image" className='rounded-md w-12 xl:w-16 h-10' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
