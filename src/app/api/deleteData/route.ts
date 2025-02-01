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
    await DeleteProduct(Name);

    return NextResponse.json(
      { message: "Product deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Error deleting product or product not found." },
      { status: 500 }
    );
  }
}
