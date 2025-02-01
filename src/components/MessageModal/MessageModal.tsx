import { useEffect } from "react";
import { messageModalType } from "../types/types";

export default function MessageModal({ isVisible, message, onClose }: messageModalType) {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-black rounded-lg shadow-md max-w-sm w-full p-6 text-center">
                <div className="flex justify-center items-center mb-4">
                    {/* Tick Mark Icon */}
                    <i className="ri-checkbox-circle-line text-5xl lg:hover:scale-105 transition-all cursor-pointer"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {message}
                </h3>
                <button
                    onClick={onClose}
                    className="px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg lg:hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:scale-90"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
