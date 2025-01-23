'use client';
import { DeleteSingleFeedback, GetFeedbackData } from "@/sanity/sanity.query";
import { feedbackCardTypes } from "../types/types";
import Feedback from "./Feedback";
import { useState, useEffect } from "react";

export default function DisplayFeedback() {

    const [feedbackData, setFeedbackData] = useState<feedbackCardTypes[]>([]);
    const [isloading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await GetFeedbackData();
                setFeedbackData(data);
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching data
            }
        }
        fetchData();
    }, []);

    // function which is used to delete feedback
    const handleDeleteFeedback = async (userName: string) => {
        try {
            await DeleteSingleFeedback(userName);
            //update the state to remove the deleted feedback
            setFeedbackData((preData) => preData.filter((data) => data.userName !== userName));
            alert(`Mr.${userName} Feedback is deleted !`);
        } catch (error) {
            console.log("error in deleting feedback !", error);
        }
    };

    return (
        <div className="">
            {isloading ? (
                <h1 className="text-2xl font-bold">Loading...</h1>
            ) : (

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mb-16 space-x-2">
                    {feedbackData.map((item: feedbackCardTypes, i: number) => {
                        return (
                            <div className="" key={i}>
                                <Feedback
                                    userName={item.userName}
                                    description={item.description}
                                    starsNumbers={item.starsNumbers}
                                    onDelete={() => handleDeleteFeedback(item.userName)}
                                />
                            </div>
                        );
                    })}
                </div>
            )}

        </div>
    )
}