import { groq } from "next-sanity";
import sanityClient from "./sanity.client";
import { ProductDataType } from "@/components/types/types";

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
      name,
      description,
      price,
      discountPercentage,
      "image": image.asset->url,
      colors,
      sizes,
    }`,
    { slug }
  );
  return SingleProductdata || null;
}
