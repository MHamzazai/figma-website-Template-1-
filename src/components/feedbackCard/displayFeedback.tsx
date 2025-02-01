'use client';
import { GetFeedbackData } from "@/sanity/sanity.query";
import { feedbackCardTypes } from "../types/types";
import { useState, useEffect } from "react";
import Feedback from "./Feedback";
import MessageModal from "../MessageModal/MessageModal";
import UseContext from "../ContextApi/stateContext/useContext";

export default function DisplayFeedback() {

    const { refreshFeedback } = UseContext();// Stores feedback data

    const [feedbacks, setFeedbacks] = useState<feedbackCardTypes[]>([]); // for storing all the feedbacks data
    const [isLoading, setIsLoading] = useState<boolean>(true); // Tracks loading state
    const [deletingFeedback, setDeletingFeedback] = useState<string | null>(null); // Tracks feedback being deleted
    const [messageModalVisible, setMessageModalVisible] = useState(false);

    // Fetch feedback data on initial load
    useEffect(() => {
        async function fetchDataInitial() {
            try {
                const data: feedbackCardTypes[] = await GetFeedbackData();
                setFeedbacks(data); // store the data in to context
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchDataInitial();
    }, [refreshFeedback]);

    // a funciton to delete the feedback 
    const handleDeleteFeedback = async (userName: string) => {
        setDeletingFeedback(userName);
        setTimeout(() => {
            setMessageModalVisible(true); // Show modal directly after clicking the button
        }, 1000);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteData`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Name: userName }),
            });

            if (response.ok) {
                setFeedbacks((prevFeedbacks) =>
                    prevFeedbacks.filter((item) => item.Name !== userName)
                );
                setDeletingFeedback(null);
            }
            else {
                alert('Failed to delete the feedback. Please try again.');
                setDeletingFeedback(null);
            };
        }
        catch (error) {
            console.error("Error in deleting feedback!", error);
            setDeletingFeedback(null);
        };
    };


    return (
        <div>
            {isLoading ? (
                // Show loading message while data is being fetched
                <h1 className="text-3xl font-[300] flex justify-center items-center py-10 text-gray-400">
                    Loading...
                </h1>
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mb-16 space-x-2">
                    {feedbacks.map((item: feedbackCardTypes, i: number) => {
                        return (
                            <div
                                key={i}
                                // immediately hidden the feedback which the user clicks to delete
                                className={`${deletingFeedback === item.Name ? 'hidden' : ''}`}
                            >
                                <Feedback
                                    Name={item.Name}
                                    description={item.description}
                                    starsNumbers={item.starsNumbers}
                                    onDelete={() => handleDeleteFeedback(item.Name)} // Trigger delete logic
                                />
                            </div>
                        );
                    })}
                </div>
            )}

            {messageModalVisible && (
                <MessageModal
                    isVisible={messageModalVisible}
                    message="Feedback Deleted successfully!"
                    onClose={() => setMessageModalVisible(false)}
                />
            )}

        </div>
    );
}