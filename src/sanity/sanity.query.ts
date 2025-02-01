import { groq } from "next-sanity";
import sanityClient from "./sanity.client";
import { cartCardTypes, ProductDataType } from "@/components/types/types";

// 1. Query to get all products based on category
export default async function GetCategoryProduct(
  category: string
): Promise<ProductDataType> {
  const productsData = await sanityClient.fetch(
    groq`
*[_type == "productsData" && category == $category]{
       name,
       price,
       discountPercentage,
     "image": image.asset->url,
     "slug": slug.current,
}`,
    { category }
  );
  return productsData;
}

// 2. query for productdetails page based on slug
export async function GetUserClickProduct(
  slug: string
): Promise<ProductDataType | null> {
  const SingleProductdata = await sanityClient.fetch(
    groq`
    *[_type == "productsData" && slug.current == $slug][0]{
    id,
      name,
      description,
      price,
      discountPercentage,
      "image": image.asset->url,
      colors,
      sizes,
      "slug": slug.current,
      isNew,
    }`,
    { slug }
  );
  return SingleProductdata || null;
}

// 3. query for checking if the order already exists
export async function GetOrderId(
  productId: string,
  size: string,
  color: string,
  finalPrice: string | number,
  quantity: number
) {
  const orderData = await sanityClient.fetch(
    groq`
    *[_type == "orderDetails" && productId == $productId && size == $size && color == $color && finalPrice == $finalPrice && quantity == $quantity]{
      _id
    }
    `,
    { productId, size, color, finalPrice, quantity }
  );
  return orderData.length > 0; // Return true if any order exists
}

// 4.  Query to get all cart items
export async function GetCartData(): Promise<cartCardTypes[]> {
  const cartData = await sanityClient.fetch(
    groq`
    *[_type == "cartSchema"]{
      _id,
      Name,
      discountPercentage,
      actualPrice,
      price,
      sizes,
      colors,
      "imageSrc": imageSrc,
    }`
  );
  return cartData;
}

// 5. query for fetching feedback card data
export async function GetFeedbackData() {
  const feedbackData = await sanityClient.fetch(
    groq`
    *[_type == "feedbackSchema"]{
    Name,
    description,
    starsNumbers,
    }
    `
  );
  return feedbackData;
}

// 6. query for fetching review card data
export async function GetReviewData() {
  const feedbackData = await sanityClient.fetch(
    groq`
    *[_type == "reviewSchema"]{
    Name,
    review,
    postDate,
    ratingStars,
    }
    `
  );
  return feedbackData;
}

// 7. Query for checking if the product already exists in cart
export async function GetDataId(productName: string): Promise<boolean> {
  try {
    const cartProduct = await sanityClient.fetch(
      groq`
      *[_type == "cartSchema" && Name == $productName][0] {
        _id
      }
      `,
      { productName }
    );

    // Check if a valid product is found
    return !!cartProduct; // Return true if cartProduct is not null/undefined
  }
  catch (error) {
    console.error("Error checking if product exists in cart:", error);
    throw new Error("Failed to check product existence.");
  };
};

// 8. removing single product data from sanity
export async function DeleteProduct(productName: string): Promise<void> {
  const result = await sanityClient.fetch(
    groq`
    *[(_type == "feedbackSchema" || _type == "reviewSchema" || _type == "cartSchema") && Name == $productName][0]._id
    `,
    { productName }
  );
  // If the product exists, delete it
  if (result) {
    await sanityClient.delete(result); // Use _id to delete the document
    console.log(`Product with ID "${result}" has been deleted.`);
  } else {
    console.error("Product not found.");
  }
}
