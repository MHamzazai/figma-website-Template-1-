'use client';
import { useState } from 'react';
import ReviewModal from './reviewModal';
import { reviewCardTypes } from '../types/types';
import sanityClient from '@/sanity/sanity.client';

const ReviewButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Store error message

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => {
        setIsModalOpen(false);
        setErrorMessage(null); // Reset error message when closing the modal
    };

    const handleReviewSubmit = async (review: reviewCardTypes) => {
        setIsSubmitting(true); // Start submission
        setErrorMessage(null); // Clear previous error

        try {
            const data = await sanityClient.create({
                _type: 'reviewSchema', // The type of document in Sanity
                ...review,
            });

            console.log('Feedback submitted:', data);
            alert('Thank you for your Review !');
            setIsModalOpen(false); // Close modal on success
            window.location.reload();
        } catch (error) {
            setErrorMessage('An error occurred while submitting feedback.');
            console.error('Error submitting feedback:', error);
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
            >
                Add Review
            </button>

            <ReviewModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleReviewSubmit}
                isSubmitting={isSubmitting}
                errorMessage={errorMessage}
            />
        </div>
    );
};

export default ReviewButton;
