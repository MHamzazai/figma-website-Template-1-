import { WarnModalProps } from "../types/types";

export default function WarnModal({ isVisible, message, children, onConfirm, onCancel }: WarnModalProps) {
    if (!isVisible) return null; // Hide the modal if it's not visible

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-md max-w-md w-full p-6 text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-700">{message}</h3>
                {children ? (
                    // Render custom children if provided
                    children
                ) : (
                    // Default buttons if children are not provided
                    <>
                        <button
                            onClick={onConfirm}
                            className="text-white bg-gray-900 hover:bg-black focus:ring-1 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3"
                        >
                            Yes, I&apos;m sure
                        </button>
                        <button
                            onClick={onCancel}
                            className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-gray-100"
                        >
                            No, cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );

}