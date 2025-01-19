import React from 'react'
import styles from "@/styles/fonts.module.css";
import { cartCardTypes } from '../types/types';

export default function CartCard(props: cartCardTypes) {
    return (
        <div className="p-4">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[620px] h-fit rounded-2xl shadow-md">
                {/* Right Side of Card */}
                <div className="w-full md:w-[60%] h-full flex items-center space-x-4 p-1">
                    <div className="flex-shrink-0">
                        <img src={props.image} alt="image" className="rounded-2xl w-24 h-24 object-cover" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-lg font-bold">{props.name}</h1>
                        <h1 className="text-sm">
                            Size: <span className="text-gray-500 capitalize">{props.size}</span>
                        </h1>
                        <h1 className="text-sm">
                            Color: <span className="text-gray-500 capitalize">{props.color}</span>
                        </h1>
                        <div className="mt-2">
                            <h1 className={`${styles.fontSatoshi} text-lg font-bold`}>{props.price}</h1>
                        </div>
                    </div>
                </div>

                {/* Left Side of Card */}
                <div className="w-full md:w-[40%] h-full flex flex-col items-end md:items-end mt-4 md:mt-0 p-2 space-y-4">
                    <div>
                        <img src="/images/delete-image.png" alt="delete icon" className="w-6 h-6 cursor-pointer" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="flex justify-between items-center bg-gray-200 px-4 py-2 space-x-4 text-lg rounded-3xl">
                            <h1 className="cursor-pointer">-</h1>
                            <h1 className="text-base px-1">1</h1>
                            <h1 className="cursor-pointer">+</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
