import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ProductDataType } from "../types/types";

const ProductCard: React.FC<ProductDataType> = ({
  name,
  price,
  discountPercentage,
  image,
  slug,
}) => {
  return (
    <div className="w-[300px] h-[430px] shadow-xl rounded-xl flex flex-col overflow-hidden cursor-pointer transition-all duration-500 transform-gpu lg:hover:scale-105 lg:hover:shadow-md will-change-transform">
      {/* Image container */}
      <div className="w-full h-[60%] p-4 bg-white relative">
        <Image
          src={image}
          alt="product image"
          fill
          className="object-contain object-center p-2"
        />
      </div>

      {/* Text content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h5 className="text-lg font-bold capitalize text-gray-800 truncate tracking-wide">
            {name}
          </h5>
          <div className="flex flex-wrap justify-between gap-2 mt-2">
            <div className="flex gap-2">
              <h6 className="text-[17px] font-bold text-gray-800">
                ${price.toFixed(0)}
              </h6>
              {discountPercentage ? (
                <h6 className="text-[17px] text-gray-500 text-center line-through decoration-1">
                  ${((price / discountPercentage) * 100).toFixed()}
                </h6>
              ) : (
                ""
              )}
              {discountPercentage ? (
                <h6 className="text-[14px] text-red-800 bg-red-300 rounded-lg px-3 text-center py-[3px]">
                  -{discountPercentage}%
                </h6>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 py-2">
          <Link
            prefetch={true}
            href={`/productDetails/${slug}`}
            className="text-sm px-2 min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded flex justify-center items-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
