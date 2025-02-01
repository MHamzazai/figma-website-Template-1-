'use client';
import { useEffect } from 'react';
import { reviewModalProps } from '../types/types';

export default function ReviewModal(
    {
        Name,
        review,
        isOpen,
        ratingStars,
        postDate,
        onClose,
        onSubmit,
        setName,
        setReview,
        setRatingStars,
        setPostDate,
    }: reviewModalProps
) {
    // Lock page scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ Name, review, ratingStars, postDate });
        onClose(); // Close the modal
    };

    if (!isOpen) return null;

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-[90%] md:w-2/3 lg:w-1/2">
                <h2 className="text-2xl mb-4 text-center font-bold">Submit Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-left">User Name</label>
                        <input
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-left">Write Review</label>
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            rows={3}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-left">Rating Stars</label>
                        <input
                            type="number"
                            value={ratingStars}
                            onChange={(e) => {
                                const value = Math.max(1, Math.min(5, Number(e.target.value)));
                                setRatingStars(value);
                            }} className="w-full p-2 border border-gray-300 rounded mt-1"
                            min={0}
                            max={5}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-left">Post Date</label>
                        <input
                            type="date"
                            value={postDate}
                            onChange={(e) => setPostDate(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-black text-white rounded-lg lg:hover:bg-gray-400 lg:hover:text-white transition-all focus:scale-95 lg:ring-1 lg:outline-none lg:ring-black"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gray-100 text-teal-900 rounded-lg shadow-md border-x-2 focus:scale-90 ring-gray-400 ring-1 lg:hover:bg-gray-300 lg:hover:outline-1 lg:outline-gray-400 lg:hover:text-black transition-all"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};