import CartCard from '@/components/CartCard/CartCard';
import React from 'react';
import styles from "@/styles/fonts.module.css";

export default function Cart() {
    return (
        <div className='mb-14'>
            <div className="w-[95%] border-t-2 pt-10 mx-auto">
                <h1 className='font-[sans-serif] font-extrabold text-3xl uppercase pl-[14px] xl:pl-[194px]'>Your Cart</h1>
            </div>

            <div className="mt-5 w-full min-h-[440px] space-x-4 flex flex-col lg:flex-row md:items-center lg:items-start justify-center">
                {/* First Div */}
                <div className="w-[100%] mx-auto lg:mx-0 mb-5 h-auto md:w-[60%] lg:w-[40%] md:h-full rounded-2xl border-2 px-2">
                    <div className="">
                        <div className="border-b-2 w-full pb-2">
                            <CartCard
                                name="Gradient Graphic T-shirt"
                                size="large"
                                color="white"
                                price="$145"
                                image="/images/cart-image.png"
                            />
                        </div>
                        <div className="border-b-2 w-full pb-2">
                            <CartCard
                                name="Checkered Shirt"
                                size="Medium"
                                color="Red"
                                price="$180"
                                image="/images/cart-shirt.png"
                            />
                        </div>
                        <div className="w-full pb-2">
                            <CartCard
                                name="Skinny Fit Jeans"
                                size="large"
                                color="Blue"
                                price="$240"
                                image="/images/cart-pent.png"
                            />
                        </div>
                    </div>
                </div>

                {/* Second Div */}
                <div className="w-[90%] h-1/2 md:h-fit md:w-[90%] lg:w-[40%] xl:w-[30%] space-y-2 py-4 px-2 border-2 rounded-2xl">
                    <h1 className="text-2xl font-[500] px-2 py-2">Order Summary</h1>
                    <div className="flex justify-between px-1">
                        <h1 className="text-gray-500">Subtotal</h1>
                        <h1 className="font-bold">$565</h1>
                    </div>
                    <div className="flex justify-between px-1">
                        <h1 className="text-gray-500">Discount &#40;-20%&#41;</h1>
                        <h1 className="text-red-600 font-bold">$-113</h1>
                    </div>
                    <div className="flex justify-between border-b-2 pb-3 px-1">
                        <h1 className="text-gray-500">Delivery Fee</h1>
                        <h1 className="font-bold">$15</h1>
                    </div>
                    <div className="flex justify-between px-1">
                        <h1 className="text-gray-800">Total</h1>
                        <h1 className="font-bold">$467</h1>
                    </div>
                    <div className="flex mt-6 justify-between px-0">
                        <div className="relative">
                            <form action="">
                                <i className="ri-price-tag-3-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900"></i>
                                <input
                                    type="text"
                                    name="promo-code"
                                    placeholder="Add promo code"
                                    className="bg-gray-100 py-1 rounded-3xl pl-10 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                                />
                            </form>
                        </div>
                        <div>
                            <button type="button" className="px-5 py-1 bg-black text-white rounded-3xl">Apply</button>
                        </div>
                    </div>
                    <div className="w-full mt-6 px-3">
                        <div className="relative">
                            <button
                                type="button"
                                className={`${styles.fontSatoshi} font-[200] bg-black py-2 text-white w-full rounded-3xl flex items-center justify-center`}
                            >
                                Go to checkout
                                <i className="ri-arrow-right-line ml-4"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
