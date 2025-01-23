'use client';
import productContext from "@/contextApi/productContext";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";
import sanityClient from "@/sanity/sanity.client";
import dotenv from "dotenv";
import { GetOrderId } from "@/sanity/sanity.query";
dotenv.config();

export default function OrderNow() {

  const context = useContext(productContext); // using the context to store the data

  const [isSubmitting, setIsSubmitting] = useState(false); // For submit state

  //check if the context is empty or undefined
  if (!context) {
    return new Error("context is empty or undefined.");
  }
  const { productData } = context; // extracting the state which store the data

  // Handle order submission
  const handleOrderSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Accessing the form elements using event.target
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const size: string = form.sizes.value;  // Access the selected size value from user
    const color: string = form.colors.value; // Access the selected color value from user
    const quantity: string = form.quantity.value; // Access the given quantity value from user

    const quantityNumber = Number(quantity); // converting the quantity in number


    if (size === "default" || color === "default") {
      alert('Please select both size and color properly');
      setIsSubmitting(false);
      return
    }

    if (quantityNumber > 10) {
      alert("Insufficient Quantity only '10' products Available");
      return;
    }

    const orderDetails = {
      productId: productData?.id || '',
      productName: productData?.name || '',
      description: productData?.description || '',
      finalPrice: productData?.discountPercentage ? ((productData.price / productData.discountPercentage * 100) - (productData.price)).toFixed(0) : productData?.price || 0,
      discountPercentage: productData?.discountPercentage || 0,
      discountedPrice: productData?.discountPercentage ? ((productData.price / productData.discountPercentage) * 100).toFixed(0) : 0,
      imageSrc: productData?.image || '',
      size: size || '',
      color: color || '',
      newProduct: productData?.isNew || false,
      quantity: quantityNumber,
    };

    try {
      // if the order already exists 
      const orderExists = await GetOrderId(orderDetails.productId, orderDetails.size, orderDetails.color);
      if (orderExists) {
        alert('This order already exists.');
        setIsSubmitting(false);
        form.reset();
        return;
      }


      // Create a new document in the 'order-details' schema
      await sanityClient.create({
        _type: 'orderDetails',
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_API_TOKEN,
        ...orderDetails,
      });

      alert('order submit successfully.');
      form.reset();  // Reset the form
      redirect('/');
    }
    catch (error) {
      console.error("Error placing order:", error);

    }
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-18 gap-7">
      <h1 className="text-2xl font-bold capitalize tracking-wide">
        Your Product Details Check and Fill the empty fields
      </h1>

      <form onSubmit={handleOrderSubmit} className="w-[95%] md:w-[80%] lg:w-[80%] mx-auto p-4 bg-teal-50 rounded-xl shadow-xl flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row gap-14 py-4 ">
          <div className="space-y-6 lg:space-y-2">
            <div>
              <label
                htmlFor="productId"
                className="block text-sm lg:text-xl font-bold text-gray-700"
              >
                Product ID
              </label>
              <input
                type="text"
                name="productId"
                id="productId"
                value={productData?.id}
                disabled
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                readOnly
                required
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm lg:text-xl font-bold text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={productData?.name}
                disabled
                id="name"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
            </div>

            {productData?.discountPercentage ?
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="totalPrice"
                    className="block text-sm lg:text-xl font-bold text-gray-700"
                  >
                    Total Price
                  </label>
                  <input
                    type="text"
                    name="totalPrice"
                    id="totalPrice"
                    value={`$${((productData.price / productData.discountPercentage) * 100).toFixed(0)
                      }`}
                    disabled
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-500 line-through decoration-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="discountPercentage"
                    className="block text-sm lg:text-xl font-bold text-gray-700"
                  >
                    Discount Percentage
                  </label>
                  <input
                    type="text"
                    name="discountPercentage"
                    id="discountPercentage"
                    value={`${productData.discountPercentage}%`}
                    disabled
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-500"
                  />
                </div>
              </div>
              : ""}

            <div>
              <label
                htmlFor="originalPrice"
                className="block text-sm lg:text-xl font-bold text-gray-700"
              >
                {productData?.discountPercentage ? "Final Price" : "Product Price"}
              </label>
              <input
                type="text"
                name="originalPrice"
                id="originalPrice"
                value={productData?.discountPercentage ?
                  (`$${((productData.price / productData.discountPercentage * 100) - productData.price).toFixed(0)}`)
                  : `$${productData?.price}`}
                disabled
                required
                className="mt-1 pl-6 p-2 w-full border border-gray-300 rounded"
              />

            </div>

            <div>
              <label
                htmlFor="originalPrice"
                className="block text-sm lg:text-xl font-bold text-gray-700"
              >
                Product Quantity
              </label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                maxLength={10}
                required
                className="mt-1 pl-6 p-2 w-full border border-gray-300 rounded"
              />

            </div>

          </div>

          <div className="space-y-6 lg:space-y-7">
            <div>
              <label
                htmlFor="description"
                className="block text-sm lg:text-xl font-bold text-gray-700"
              >
                Product Description
              </label>
              <textarea
                cols={4}
                rows={4}
                name="description"
                id="description"
                value={productData?.description}
                disabled
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="imageSize"
                className="block text-sm lg:text-xl font-bold text-gray-700"
              >
                Product Image Src
              </label>
              <input
                type="text"
                name="imageSize"
                value={productData?.image}
                id="imageSize"
                disabled
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="sizes"
                className="block text-sm lg:text-xl font-bold text-gray-700"
              >
                Select Size
              </label>
              <select name="sizes" id="sizes" required defaultValue={"default"}>

                <option value="default" disabled>
                  Select a size
                </option>

                {productData?.sizes.map((item: string, index: number) =>
                (
                  <option value={item} key={index}>
                    {item}
                  </option>
                )
                )}

              </select>

            </div>

            <div>
              <label
                htmlFor="colors"
                className="block text-sm lg:text-xl font-bold text-gray-700"
              >
                Select Color
              </label>
              <select name="colors" id="colors" required defaultValue={"default"}>

                <option value="default" disabled>
                  Select a color
                </option>

                {productData?.colors.map((item: string, index: number) =>
                (
                  <option value={item} key={index}>
                    {item}
                  </option>
                )
                )}
              </select>
            </div>

            <div>
              <label
                htmlFor="isNewProduct"
                className="block text-sm lg:text-xl font-bold text-gray-700"
              >
                New Product
              </label>
              <input
                type="checkbox"
                name="isNewProduct"
                id="isNewProduct"
                className="mt-1"
                required
                checked={productData?.isNew}
                disabled={!productData?.isNew}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`p-2 bg-blue-600 text-white rounded w-2/3 lg:w-1/2 ${isSubmitting ? 'opacity-50' : 'lg:hover:scale-105 transition-all duration-500'}`}
        >
          {isSubmitting ? 'Submitting...' : 'Place Order'}
        </button>


      </form>
    </div>
  );
}
