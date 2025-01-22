'use client';
import { useState } from 'react';
import { reviewModalProps } from '../types/types';

const ReviewModal: React.FC<reviewModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [userName, setUserName] = useState('');
    const [review, setReview] = useState('');
    const [ratingStars, setRatingStars] = useState<number>(0);
    const [postDate, setPostDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ userName, review, ratingStars, postDate });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-[90%] md:w-2/3 lg:w-1/2">
                <h2 className="text-2xl mb-4 text-center font-bold">Submit Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-left">User Name</label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
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
                        <label className="block text-gray-700 text-left">Raing Stars</label>
                        <input
                            type="number"
                            value={ratingStars}
                            onChange={(e) => setRatingStars(Number(e.target.value))}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
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
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-500 text-white rounded mr-2 hover:bg-gray-600"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ReviewModal;
