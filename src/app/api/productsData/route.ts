import { ProductDataType } from "@/components/types/types";
import GetCategoryProduct from "@/sanity/sanity.query";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category: string | null = searchParams.get("category");

  // ensuring that the category param is no empty and it is string
  if (!category || typeof category !== "string") {
    return NextResponse.json(
      { errorMessage: "Section parameter is required and must be a string." },
      { status: 400 }
    );
  }

  try {
    // fetch the category data
    const productData = await GetCategoryProduct(category);

    if (!productData) {
      return NextResponse.json(
        { errorMessage: `No data found for category: ${category}` },
        { status: 404 }
      );
    }

    return NextResponse.json(productData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { errorMessage: "Failed to fetch products from sanity !", error },
      { status: 500 }
    );
  }
}
