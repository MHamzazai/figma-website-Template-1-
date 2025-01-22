import React from 'react';
import { FeedbackProps } from '../types/types';
import Stars from '../stars/Stars';
import Image from 'next/image';

export default function Feedback(props: FeedbackProps) {
    return (
        <div className="w-full max-w-[495px] h-fit">
            <div className="flex flex-col items-start justify-between border-[1px] border-gray-300 w-full h-64 mx-auto my-4 rounded-xl py-6 px-4
            lg:hover:scale-105 transition-all cursor-pointer duration-300 lg:hover:shadow-xl">

                {/* Rating Stars */}
                <Stars fillStars={props.starsNumbers} />

                {/* User Feedback */}
                <div className="flex-1">
                    <div className="flex items-center space-x-2">
                        <h1 className="font-bold py-2 capitalize">{props.userName}</h1>
                        {/* Tick Image */}
                        <Image
                            width={100}
                            height={100}
                            src="/images/tick.png"
                            alt="Verified tick"
                            className="w-4 h-4"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-gray-500">
                            &quot;{props.description}&quot;
                        </p>
                    </div>
                </div>

                {/* Delete Feedback */}
                <div className="flex justify-center md:justify-end items-center">
                    <button
                        className='font-bold bg-gray-300 px-4 py-2 lg:hover:bg-black lg:hover:text-white transition-all tracking-wide rounded-xl'
                        onClick={props.onDelete}
                        title='Delete This Feedback'
                    >
                        Delete Feedback
                    </button>
                </div>

            </div>
        </div>
    );
}
