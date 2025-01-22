'use client';
import CartCard from "@/components/CartCard/CartCard";
import { cartCardTypes } from "@/components/types/types";
import sanityClient from "@/sanity/sanity.client";
import { deleteSingleProduct, getAllCartProductIds, GetCartData } from "@/sanity/sanity.query";
import { useEffect, useState } from "react";


export default function Cart() {
    const [cart, setCart] = useState<cartCardTypes[]>([]); // state to store the data of products
    const [isLoading, setIsLoading] = useState(true); // state whichs shows the loading text when the state is not mount

    useEffect(() => {
        // Fetch cart data from Sanity on page load
        const fetchCartData = async () => {
            try {
                const data = await GetCartData(); // Fetch data from Sanity
                setCart(data); // Set the cart data in state
            } catch (error) {
                console.error("Error fetching cart data:", error);
            } finally {
                setIsLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchCartData();
    }, []);

    //function which is used to delete a single product from cart 
    const handleDeleteProduct = async (productName: string) => {
        try {
            await deleteSingleProduct(productName); // Call the delete function
            // Update the state to remove the deleted product
            setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
            alert('Your Product Deleted sucessfully.')
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    // function which deletes all the cart products 
    const clearCart = async () => {
        try {
            // Fetch all document IDs for the cart schema
            const documentIds = await getAllCartProductIds();

            if (documentIds.length > 0) {
                // Delete all documents by their IDs
                await sanityClient.delete(documentIds);
                setCart([]);  // Clear cart from state as well
                alert('Your Cart is clear.');
            } else {
                alert('No cart data to clear.')
            }
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    }

    return (
        <div className='mb-14 w-full min-h-screen'>
            <div className="w-[95%] border-t-2 pt-10 mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className='font-[sans-serif] font-extrabold text-3xl uppercase pl-[14px] xl:pl-[194px]'>Your Cart</h1>
                <button className="text-lg bg-red-500 px-4 rounded-xl mt-3 py-1 text-white font-bold lg:hover:scale-110
                lg:hover:opacity-70 transition-all" onClick={clearCart}>Delete All Products</button>
            </div>
            {/* if data is not fetch yet then show loading... */}
            {isLoading ? (
                <h1 className="text-3xl font-bold flex justify-center items-center">Loading...</h1>
                // if data fetch succesfully then show the block of code based on data
            ) : (
                cart.length > 0 ?
                    <div className="mt-10 w-full space-x-4 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 place-items-center">
                        {cart.map((data: cartCardTypes, index: number) => {
                            return (
                                <div key={index}>
                                    <CartCard
                                        name={data.name}
                                        price={data.discountPercentage
                                            ? Number(((data.price / data.discountPercentage) * 100) - data.price)
                                            : data.price
                                        }
                                        discountPercentage={data.discountPercentage}
                                        imageSrc={data.imageSrc}
                                        actualPrice={data.discountPercentage ? Number(((data.price / data.discountPercentage) * 100).toFixed(0)) : 0}
                                        sizes={data.sizes}
                                        colors={data.colors}
                                        deleteProduct={handleDeleteProduct}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    : // if the cart is empty  
                    <h1 className="text-3xl font-bold flex justify-center items-center">Cart is Empty</h1> 

            )}



        </div>
    )
}
