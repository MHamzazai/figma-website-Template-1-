'use client';
import { orderType, ProductDataType } from "@/components/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderNow() {
  const [productData, setProductData] = useState<ProductDataType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // For submit state
  const router = useRouter(); // for navigating to home page

  // Fetch product data from localStorage when the page loads
  useEffect(() => {
    const storedProductData = localStorage.getItem('orderProduct');

    if (storedProductData) {
      setProductData(JSON.parse(storedProductData));
    }
    else {
      // Handle case if no product data is in localStorage
      alert('Product data not found.');
    }

  }, []);

  // Check if productData is available, else show an error
  if (!productData) {
    return <div>Error: Product data not available</div>;
  }

  // Handle order submission
  const handleOrderSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Accessing the form elements using event.target
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const size: string = form.sizes.value;  // Access the selected size value from user
    const color: string = form.colors.value; // Access the selected color value from user
    const quantity: string = form.quantity.value; // Access the given quantity value from user

    const quantityNumber = Number(quantity); // converting the quantity to a number

    if (size === 'default' || color === 'default') {
      alert('Please select both size and color properly');
      setIsSubmitting(false);
      return;
    }

    if (quantityNumber > 10) {
      alert("Insufficient Quantity, only '10' products are available");
      setIsSubmitting(false);
      return;
    }

    if (
      productData?.id &&
      productData.colors &&
      productData.description &&
      productData.isNew &&
      productData.slug &&
      productData.sizes &&
      productData.price &&
      productData.image &&
      productData.discountPercentage &&
      productData.name
    ) {

      const orderDetails: orderType = {
        productId: productData.id,
        name: productData.name,
        description: productData.description,
        finalPrice: productData.discountPercentage
          ? ((productData.price / productData.discountPercentage) * 100 - productData.price).toFixed(0)
          : productData.price,
        discountPercentage: productData.discountPercentage,
        discountedPrice: productData.discountPercentage
          ? ((productData.price / productData.discountPercentage) * 100).toFixed(0)
          : 0,
        imageSrc: productData.image,
        size: size,
        color: color,
        newProduct: productData.isNew,
        quantity: quantityNumber,
      };

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orderDetails`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderDetails),
        });

        // Handle message if the order exists
        if (response.status === 409) {
          // Order already exists
          alert("Your Order Already Exists !"); // Show the alert with the message from the API
          setIsSubmitting(false);
          router.push('/'); // Redirect to the home page
          return;
        }

        const data: Response = await response.json();
        console.log(data);

        if (response.ok) {
          alert('Order submitted successfully');
          form.reset();
          router.push('/');

        } else {
          alert('Failed to submit order');
        }
      }
      catch (error) {
        console.error('Error submitting order:', error);
      }
      finally {
        setIsSubmitting(false);
      }
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
                type="number"
                name="quantity"
                id="quantity"
                max={10}
                min={1}
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
                className="block text-sm lg:text-xl font-bold text-gray-700 mb-2"
              >
                New Product
              </label>
              <Image
                src={productData?.isNew ? "https://cdn-icons-png.flaticon.com/512/665/665939.png" : "https://media.tenor.com/kGq0C1FMxsAAAAAe/crossmark.png"}
                alt="Image"
                width={30}
                height={30}
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
