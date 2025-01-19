import React from 'react';
import { reviewCardTypes } from '../types/types';

export default function ReviewCard(props: reviewCardTypes) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-start justify-between border-[1px] border-gray-300
            w-full sm:w-[90%] md:w-[86%] h-full mx-auto my-4 rounded-xl py-6 px-4 bg-white">
                {/* top section */}
                <div className="flex justify-between items-center w-full mb-4">
                    {/* stars */}
                    <div className="flex space-x-2">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="w-4 fill-[#facc15]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        ))}
                    </div>

                    <div>
                        <img src="/images/three-Dots.png" alt="image" />
                    </div>
                </div>

                {/* User Feedback */}
                <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center space-x-2 mb-4">
                        <h1 className="font-bold py-2">{props.name}</h1>
                        {/* Tick Image */}
                        <img
                            src="/images/tick.png"
                            alt="Verified tick"
                            className="w-4 h-4"
                        />
                    </div>

                    <div>
                        <p className="text-gray-500">
                            &quot;{props.para}&quot;
                        </p>
                    </div>

                    <div className="mt-6">
                        <h1 className="text-gray-500 font-[500]">{props.date}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
