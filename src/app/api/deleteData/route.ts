import { DeleteProduct } from "@/sanity/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { Name }: { Name: string } = body;

    // Validate request body
    if (!Name || typeof Name !== "string") {
      return NextResponse.json(
        { message: "Please provide a valid product name." },
        { status: 400 }
      );
    }

    console.log(`Deleting product named: "${Name}" from Sanity...`);

    // Attempt to delete the product
    const productDelete: void = await DeleteProduct(Name);

    return NextResponse.json(
      { message: "Product deleted successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    // Handle specific error cases
    console.error("Error deleting product:", error);

    if (error.name === "SyntaxError") {
      return NextResponse.json(
        { message: "Invalid request body." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Error deleting product or product not found." },
      { status: 500 }
    );
  }
}
