import React from 'react';
import { FeedbackProps } from '../types/types';
import Image from 'next/image';
import Stars from '../stars/Stars';

export default function Feedback(props: FeedbackProps) {

    return (
        <div className="w-full max-w-[495px] h-fit flex items-center justify-center flex-wrap">

            <div className="flex flex-col justify-between border-[1px] border-gray-300 w-full h-64 mx-auto my-4 rounded-xl p-6 lg:hover:scale-95 transition-transform transform cursor-pointer duration-300 lg:hover:shadow-xl will-change-transform">

                {/* Rating Stars */}
                <div className="">
                    <Stars fillStars={props.starsNumbers} />
                </div>

                {/* User Feedback */}
                <div className="flex-1 w-full overflow-hidden">
                    <div className="flex items-center space-x-2">
                        <h1 className="font-bold py-2 capitalize">{props.Name}</h1>
                        {/* Tick Image */}
                        <Image
                            width={100}
                            height={100}
                            src="/images/tick.png"
                            alt="Verified tick"
                            className="w-4 h-4"
                        />
                    </div>
                    <p className="overflow-hidden text-gray-500 text-[17px] text-left line-clamp-3">
                        &quot;{props.description}&quot;
                    </p>
                </div>

                {/* Delete Feedback */}
                <div className="flex justify-center md:justify-end items-center w-full pt-2">
                    <button
                        className="font-bold bg-gray-300 px-4 py-2 lg:hover:bg-black lg:hover:text-white transition-all tracking-wide rounded-xl"
                        onClick={props.onDelete}
                        title="Delete This Feedback"
                    >
                        Delete Feedback
                    </button>
                </div>

            </div>

        </div>

    );
}
