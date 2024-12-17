import React from 'react';
import { feedbackCardTypes } from '../types/FeedbackTypes';

export default function Feedback(props: feedbackCardTypes) {
    return (
        <div>
            <div className="flex flex-col items-start justify-center border-[1px] border-gray-300 w-[90%] mx-auto my-4 rounded-xl py-6 px-4">

                {/* Star Icons */}
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

                {/* User Feedback */}
                <div className="">
                    <div className="flex items-center space-x-2">
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
                </div>
            </div>
        </div>
    );
}
