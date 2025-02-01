import { GetOrderId } from "@/sanity/sanity.query";
import { createClient } from "next-sanity";
import dotenv from "dotenv";
import { orderType } from "@/components/types/types";
import { NextRequest, NextResponse } from "next/server";
dotenv.config();

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Client-side accessible
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Client-side accessible
  token: process.env.SANITY_API_TOKEN, // Server-side only
  apiVersion: "2025-01-05",
  useCdn: false,
});

export async function POST(req: NextRequest) {
  const body: orderType = await req.json();
  const {
    productId,
    name,
    description,
    finalPrice,
    discountPercentage,
    discountedPrice,
    imageSrc,
    size,
    color,
    newProduct,
    quantity,
  }: orderType = body;

  // Validation: Check for required fields
  if (
    !productId ||
    !name ||
    !description ||
    !finalPrice ||
    !discountPercentage ||
    !discountedPrice ||
    !imageSrc ||
    !size ||
    !color ||
    !newProduct ||
    quantity === undefined
  ) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // Check if the order already exists
    const orderExists = await GetOrderId(
      productId,
      size,
      color,
      finalPrice,
      quantity
    );

    if (orderExists) {
      return NextResponse.json(
        { message: "Order already exists" },
        { status: 409 }
      );
    }

    // Create a new order document in Sanity
    const order: orderType = await sanityClient.create({
      _type: "orderDetails",
      productId,
      name,
      description,
      finalPrice,
      discountPercentage,
      discountedPrice,
      imageSrc,
      size,
      color,
      newProduct,
      quantity,
    });

    return NextResponse.json(
      { message: "Order submitted successfully", order },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting order:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  };
};
