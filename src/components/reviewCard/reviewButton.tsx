'use client';
import { useState } from 'react';
import ReviewModal from './reviewModal';
import { reviewCardTypes } from '../types/types';
import UseContext from '../ContextApi/stateContext/useContext';
import MessageModal from '../MessageModal/MessageModal';

const ReviewButton: React.FC = () => {
    // Use the feedback context
    const { setRefreshReviews } = UseContext();

    // State for modal and form
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
    const [messageModal, setMessageModal] = useState(false);

    // Form state
    const [Name, setName] = useState<string>('');
    const [review, setReview] = useState<string>('');
    const [postDate, setPostDate] = useState<string>('');
    const [ratingStars, setRatingStars] = useState<number>(0);

    // Open and close modal handlers
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleReviewSubmit = async (review: reviewCardTypes) => {
        setIsSubmitting(true); // Start submission

        try {
            // Submit feedback to the API
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviewPost`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(review),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to submit feedback');
            }

            // Parse the response data
            const data: reviewCardTypes = await response.json();

            // Update the feedbacks array in context
            if (data) {
                setIsModalOpen(false); // Close the modal
                setMessageModal(true); // Show the success message

                setRefreshReviews((pre) => !pre);

                // Reset form state
                setName('');
                setReview('');
                setRatingStars(0);
                setPostDate('');
            }

        } catch (error) {
            console.error('Error submitting review:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleModalOpen}
                className="px-2 py-1 text-sm md:text-[18px] lg:text-xl lg:px-4 md:py-2 bg-black text-white rounded-md lg:hover:bg-gray-500 transition-all lg:hover:border-none"
                title='Add Review'
                disabled={isSubmitting}
            >
                Add Review
            </button>

            <ReviewModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleReviewSubmit}
                // Pass form state and setters as props
                Name={Name}
                setName={setName}
                review={review}
                setReview={setReview}
                ratingStars={ratingStars}
                setRatingStars={setRatingStars}
                postDate={postDate}
                setPostDate={setPostDate}
            />

            {/* Success Message Modal */}
            {messageModal && (
                <MessageModal
                    isVisible={messageModal}
                    message="Review submitted successfully!"
                    onClose={() => setMessageModal(false)}
                />
            )}
        </div>
    );
};

export default ReviewButton;
