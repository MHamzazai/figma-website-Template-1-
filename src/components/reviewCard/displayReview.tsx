'use client';
import { DeleteSingleFeedback, DeleteSingleReview, GetReviewData } from "@/sanity/sanity.query";
import { reviewCardTypes } from "../types/types";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

export default function DisplayReview() {

    const [reviewData, setReviewData] = useState<reviewCardTypes[]>([]);
    const [isloading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await GetReviewData();
                setReviewData(data);
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching data
            }
        }
        fetchData();
    }, []);

    // function which is used to delete review
    const DeleteReview = async (userName: string) => {
        try {
            await DeleteSingleReview(userName);
            //update the state to remove the deleted Review
            setReviewData((preData) => preData.filter((data) => data.userName !== userName));
            alert(`Mr.${userName} Review is deleted !`);
        } catch (error) {
            console.log("error in deleting Review !", error);
        }
    };

    return (
        <div className="">
            {isloading ? (
                <h1 className="text-2xl font-bold">Loading...</h1>
            ) : (

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mb-16 space-x-2">
                    {reviewData.map((item: reviewCardTypes, i: number) => {
                        return (
                            <div className="" key={i}>
                                <ReviewCard
                                    userName={item.userName}
                                    review={item.review}
                                    ratingStars={item.ratingStars}
                                    postDate={item.postDate}
                                    onDelete={() => DeleteReview(item.userName)}
                                />
                            </div>
                        );
                    })}
                </div>
            )}

        </div>
    )
}