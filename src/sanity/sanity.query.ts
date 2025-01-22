import { groq } from "next-sanity";
import sanityClient from "./sanity.client";
import { cartCardTypes, ProductDataType } from "@/components/types/types";

export default async function GetCategoryProduct(
  category: string
): Promise<ProductDataType> {
  const productsData = await sanityClient.fetch(
    groq`
*[_type == "products-data" && category == $category]{
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

// another query for productdetails page
export async function GetUserClickProduct(
  slug: string
): Promise<ProductDataType | null> {
  const SingleProductdata = await sanityClient.fetch(
    groq`
    *[_type == "products-data" && slug.current == $slug][0]{
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

// query for checking if the order already exists
export async function GetOrderId(
  productId: string,
  size: string,
  color: string
) {
  const orderData = await sanityClient.fetch(
    groq`
    *[_type == "orderDetails" && productId == $productId && size == $size && color == $color]{
      _id
    }
    `,
    { productId, size, color }
  );
  return orderData.length > 0; // Return true if any order exists
}

// Query to get all cart items
export async function GetCartData(): Promise<cartCardTypes[]> {
  const cartData = await sanityClient.fetch(
    groq`
    *[_type == "cartSchema"]{
      _id,
      name,
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

// removing single product data from cart
export async function deleteSingleProduct(productName: string): Promise<void> {
  const result = await sanityClient.fetch(
    groq`
    *[_type == "cartSchema" && name == $productName][0]._id
    `,
    { productName }
  );
  // If the product exists, delete it
  if (result) {
    await sanityClient.delete(result); // Use _id to delete the document
    console.log(`Product with ID ${result} has been deleted.`);
  } else {
    console.error("Product not found.");
  }
}

// Query to fetch all cart document IDs for deleting
export async function getAllCartProductIds() {
  return await sanityClient.fetch(groq`*[_type == "cartSchema"]._id`);
}

// query for fetching feedback card data
export async function GetFeedbackData() {
  const feedbackData = await sanityClient.fetch(
    groq`
    *[_type == "feedbackSchema"]{
    userName,
    description,
    starsNumbers,
    }
    `
  );
  return feedbackData;
}

// removing single product data from feedback
export async function DeleteSingleFeedback(userName: string): Promise<void> {
  const result = await sanityClient.fetch(
    groq`
    *[_type == "feedbackSchema" && userName == $userName][0]._id 
    `,
    { userName }
  );
  // If the product exists, delete it
  if (result) {
    await sanityClient.delete(result); // Use _id to delete the document because sanity wants it
    console.log(`Feedback with User Name "${userName}" has been deleted.`);
  } else {
    console.error("Product not found.");
  }
}

// query for fetching review card data
export async function GetReviewData() {
  const feedbackData = await sanityClient.fetch(
    groq`
    *[_type == "reviewSchema"]{
    userName,
    review,
    postDate,
    ratingStars,
    }
    `
  );
  return feedbackData;
}

// removing single product data from review
export async function DeleteSingleReview(userName: string): Promise<void> {
  const result = await sanityClient.fetch(
    groq`
    *[_type == "reviewSchema" && userName == $userName][0]._id 
    `,
    { userName }
  );
  // If the product exists, delete it
  if (result) {
    await sanityClient.delete(result); // Use _id to delete the document because sanity only wants it
    console.log(`Review with User Name "${userName}" has been deleted.`);
  } else {
    console.error("Product not found.");
  }
}
