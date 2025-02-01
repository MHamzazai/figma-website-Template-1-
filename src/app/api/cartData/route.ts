import { createClient } from "next-sanity";
import dotenv from "dotenv";
dotenv.config();

import { cartApiType } from "@/components/types/types";
import { NextRequest, NextResponse } from "next/server";
import { GetDataId } from "@/sanity/sanity.query";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Client-side accessible
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Client-side accessible
  token: process.env.SANITY_API_TOKEN, // Server-side only
  apiVersion: "2025-01-05",
  useCdn: false,
});

export async function POST(req: NextRequest) {
  const body: cartApiType = await req.json();
  const {
    Name,
    sizes,
    colors,
    price,
    imageSrc,
    discountPercentage,
    actualPrice,
  }: cartApiType = body;

  // Validation: Check for required fields
  if (
    !Name ||
    !sizes ||
    !colors ||
    !price ||
    !imageSrc ||
    !discountPercentage ||
    actualPrice === undefined
  ) {
    return NextResponse.json({ message: "Data is missing" }, { status: 400 });
  }

  try { 
    // Check if the product already exists in the cart
    const productExists = await GetDataId(Name);
    if (productExists) {
      return NextResponse.json(
        { message: "Product Already Exists in Cart" },
        { status: 409 }
      );
    }

    // Create a new Cart document in Sanity
    const cartData: cartApiType = await sanityClient.create({
      _type: "cartSchema",
      Name,
      discountPercentage,
      actualPrice,
      price,
      sizes,
      colors,
      imageSrc,
    });

    return NextResponse.json(
      { message: "Product Added successfully To Cart", cartData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Adding Product To Cart :", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
