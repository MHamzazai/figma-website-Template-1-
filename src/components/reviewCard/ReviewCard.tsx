import React, { useState } from 'react';
import { ReviewkProps } from '../types/types';
import Stars from '../stars/Stars';
import Image from 'next/image';

export default function ReviewCard(props: ReviewkProps) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center flex-wrap">
            <div className="flex flex-col justify-between border-[1px] border-gray-300 w-full h-64 mx-auto my-4 rounded-xl p-6 lg:hover:scale-95 transition-transform transform cursor-pointer duration-300 lg:hover:shadow-xl will-change-transform ">

                {/* top section */}
                <div className="flex justify-between items-center w-full mb-2">

                    {/* stars */}
                    <div className="">
                        <Stars fillStars={props.ratingStars} />
                    </div>

                    <div className="relative inline-block">
                        <div onClick={toggleDropdown}>
                            <Image width={30} height={30} src="/images/three-Dots.png" alt="menu" className='cursor-pointer lg:hover:scale-95' />
                        </div>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg">
                                <button
                                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                    onClick={props.onDelete}
                                    title='Delete this review'
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* User Feedback */}
                <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center space-x-2 mb-2">
                        <h1 className="font-bold py-1">{props.Name}</h1>
                        {/* Tick Image */}
                        <Image
                            src="/images/tick.png"
                            width={20}
                            height={20}
                            alt="Verified tick"
                            className="w-4 h-4"
                        />
                    </div>

                    <div>
                        <p className="text-gray-500">
                            &quot;{props.review}&quot;
                        </p>
                    </div>

                    <div className="mt-6">
                        <h1 className="text-gray-500 font-[500]">Posted On {props.postDate}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
