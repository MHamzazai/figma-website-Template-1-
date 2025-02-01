'use client';
import { GetReviewData } from "@/sanity/sanity.query";
import { reviewCardTypes } from "../types/types";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import UseContext from "../ContextApi/stateContext/useContext";
import MessageModal from "../MessageModal/MessageModal";

export default function DisplayReview() {

    const { refreshReviews } = UseContext();// Stores reviews data

    const [deletingReview, setDeletingReview] = useState<string | null>(null); // Tracks feedback being deleted
    const [reviewData, setReviewData] = useState<reviewCardTypes[]>([]);
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [messageModalVisible, setMessageModalVisible] = useState(false);


    useEffect(() => {
        async function fetchData() {
            try {
                const data: reviewCardTypes[] = await GetReviewData();
                setReviewData(data);
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching data
            }
        }
        fetchData();
    }, [refreshReviews]);

    // function which is used to delete review
    const DeleteReview = async (userName: string) => {
        setDeletingReview(userName);
        setTimeout(() => {
            setMessageModalVisible(true); // Show modal directly after clicking the button
        }, 1000);
        try {
            const response = await fetch('/api/deleteData', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name: userName }),
            });

            if (response.ok) {
                setReviewData((prevData) => prevData.filter((item) => item.Name !== userName));
                setDeletingReview(null);
            }
            else {
                alert('Failed to delete the feedback. Please try again.');
                setDeletingReview(null);
            };
        } catch (error) {
            console.log("error in deleting Review !", error);
            setDeletingReview(null);
        };
    };

    return (
        <div className="">
            {isloading ? (
                // Show loading message while data is being fetched
                <h1 className="text-3xl font-[300] flex justify-center items-center py-10 text-gray-400">Loading...</h1>
            ) : (

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mb-16 space-x-2">
                    {reviewData.map((item: reviewCardTypes, i: number) => {
                        return (
                            <div key={i}
                                // immediately hidden the review which the user clicks to delete
                                className={`${deletingReview === item.Name ? 'hidden' : ''}`}
                            >
                                <ReviewCard
                                    Name={item.Name}
                                    review={item.review}
                                    ratingStars={item.ratingStars}
                                    postDate={item.postDate}
                                    onDelete={() => DeleteReview(item.Name)}
                                />
                            </div>
                        );
                    })}
                </div>
            )}

            {messageModalVisible && (
                <MessageModal
                    isVisible={messageModalVisible}
                    message="Review Deleted successfully!"
                    onClose={() => setMessageModalVisible(false)}
                />
            )}

        </div>
    )
}