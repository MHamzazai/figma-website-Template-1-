'use client';
import { useState } from 'react';
import { feedbackCardTypes } from '../types/types';
import FeedbackModal from './feedbackModal';
import MessageModal from '../MessageModal/MessageModal';
// import { feedbackContext } from '../ContextApi/FeedbackContext/Context';
import UseContext from '../ContextApi/stateContext/useContext';

export default function FeedbackButton() {
    // Use the feedback context
    const { setRefreshFeedback } = UseContext();

    // State for modal and form
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageModal, setMessageModal] = useState(false);

    // Form state
    const [Name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [starsNumbers, setStarsNumbers] = useState<number>(0);

    // Open and close modal handlers
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    // Handle feedback submission
    const handleFeedbackSubmit = async (feedback: feedbackCardTypes) => {
        setIsSubmitting(true);

        try {
            // Submit feedback to the API
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/feedbackPost`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(feedback),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to submit feedback');
            }

            // Parse the response data
            const data: feedbackCardTypes = await response.json();

            // Update the feedbacks array in context
            if (data) {
                setIsModalOpen(false); // Close the modal
                setMessageModal(true); // Show the success message

                setRefreshFeedback((pre) => !pre);

                // Reset form state
                setName('');
                setDescription('');
                setStarsNumbers(0);
            };

        } catch (error) {
            console.error('Error submitting feedback:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleModalOpen}
                className="px-2 py-1 text-sm md:text-[18px] lg:text-xl lg:px-4 md:py-2 bg-black text-white rounded-md lg:hover:bg-gray-200 lg:hover:text-black lg:hover:ring-1 ring-black transition-all lg:hover:border-none"
                title="Add Feedback"
                disabled={isSubmitting}
            >
                Add Feedback
            </button>

            {/* Feedback Modal */}
            <FeedbackModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleFeedbackSubmit}
                // Pass form state and setters as props
                Name={Name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                starsNumbers={starsNumbers}
                setStarsNumbers={setStarsNumbers}
            />

            {/* Success Message Modal */}
            {messageModal && (
                <MessageModal
                    isVisible={messageModal}
                    message="Feedback submitted successfully!"
                    onClose={() => setMessageModal(false)}
                />
            )}
        </div>
    );
};