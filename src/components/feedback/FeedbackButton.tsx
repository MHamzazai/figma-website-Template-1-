'use client';
import { useState } from 'react';
import FeedbackModal from './FeedbackModal';
import { feedbackCardTypes } from '../types/types';
import sanityClient from '@/sanity/sanity.client';

const FeedbackButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Store error message

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => {
        setIsModalOpen(false);
        setErrorMessage(null); // Reset error message when closing the modal
    };

    const handleFeedbackSubmit = async (feedback: feedbackCardTypes) => {
        setIsSubmitting(true); // Start submission
        setErrorMessage(null); // Clear previous error

        try {
            const data = await sanityClient.create({
                _type: 'feedbackSchema', // The type of document in Sanity
                ...feedback,
            });

            console.log('Feedback submitted:', data);
            alert('Thank you for your feedback !');
            setIsModalOpen(false); // Close modal on success
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
                title='Add Feedback'
            >
                Add Feedback
            </button>

            <FeedbackModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleFeedbackSubmit}
                isSubmitting={isSubmitting}
                errorMessage={errorMessage}
            />
        </div>
    );
};

export default FeedbackButton;
