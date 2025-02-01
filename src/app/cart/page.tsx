'use client';
import CartCard from "@/components/CartCard/CartCard";
import { cartCardTypes } from "@/components/types/types";
import { GetCartData } from "@/sanity/sanity.query";
import WarnModal from "@/components/WarnModal/WarnModal";
import MessageModal from "@/components/MessageModal/MessageModal";
import { useEffect, useState } from "react";

export default function Cart() {
    const [cart, setCart] = useState<cartCardTypes[]>([]); // Cart state
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [isWarnModalOpen, setIsWarnModalOpen] = useState(false); // Warn modal state
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Success modal state
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null); // Selected product for deletion

    useEffect(() => {
        // Fetch cart data from Sanity on page load
        const fetchCartData = async () => {
            try {
                const data = await GetCartData();
                setCart(data);
            } catch (error) {
                console.error("Error fetching cart data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCartData();
    }, []);

    // Function to delete a single product from the cart
    const handleDeleteProduct = async () => {
        if (!selectedProduct) return;

        // Immediately update the cart and show the success modal
        setCart((prevCart) => prevCart.filter((item) => item.Name !== selectedProduct));
        setIsWarnModalOpen(false); // Close the warn modal
        setIsSuccessModalOpen(true); // Open the success modal

        try {
            // Send the delete request to the API in the background
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteData`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Name: selectedProduct }), // Pass the product name to the API
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Failed to delete product:", errorData.message);
                alert("Product deletion failed on the server. Please refresh your cart.");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("An error occurred while deleting the product. Please check your connection.");
        }
    };


    // Open the warn modal and set selected product
    const confirmDelete = (productName: string) => {
        setSelectedProduct(productName);
        setIsWarnModalOpen(true);
    };

    // Close the warn modal
    const cancelDelete = () => {
        setSelectedProduct(null);
        setIsWarnModalOpen(false);
    };

    return (
        <div className="mb-14 w-full min-h-screen">
            <div className="w-[95%] border-t-2 pt-10 mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className="font-[sans-serif] font-extrabold text-3xl uppercase pl-[14px] xl:pl-[194px]">Your Cart</h1>
            </div>
            {isLoading ? (
                <h1 className="text-3xl font-bold flex justify-center items-center">Loading...</h1>
            ) : cart.length > 0 ? (
                <div className="mt-10 w-full space-x-4 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 place-items-center">
                    {cart.map((data: cartCardTypes, index: number) => (
                        <div key={index}>
                            <CartCard
                                Name={data.Name}
                                price={
                                    data.discountPercentage
                                        ? Number(
                                            (data.price / data.discountPercentage) * 100 - data.price
                                        )
                                        : data.price
                                }
                                discountPercentage={data.discountPercentage}
                                imageSrc={data.imageSrc}
                                actualPrice={
                                    data.discountPercentage
                                        ? Number(((data.price / data.discountPercentage) * 100).toFixed(0))
                                        : 0
                                }
                                sizes={data.sizes}
                                colors={data.colors}
                                deleteProduct={confirmDelete}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className="text-3xl font-bold flex justify-center items-center">Cart is Empty</h1>
            )}

            {/* WarnModal Component */}
            <WarnModal
                isVisible={isWarnModalOpen}
                message="Are you sure you want to delete this product?"
                onConfirm={handleDeleteProduct}
                onCancel={cancelDelete}
            />

            {/* Success Modal */}
            <MessageModal
                isVisible={isSuccessModalOpen}
                message="Product Deleted Successfully!"
                onClose={() => setIsSuccessModalOpen(false)}
            />
        </div>
    );
}
