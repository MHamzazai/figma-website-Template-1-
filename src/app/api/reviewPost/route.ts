import dotenv from "dotenv";
dotenv.config();

import { reviewCardTypes } from "@/components/types/types";
import sanityClient from "@/sanity/sanity.client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { Name, review, postDate, ratingStars }: reviewCardTypes = body;
    if (!Name || !review || !postDate || ratingStars === undefined) {
      return NextResponse.json({ message: "Data is missing" }, { status: 400 });
    }

    // create new review document in sanity
    const newReview: reviewCardTypes = await sanityClient.create({
      _type: "reviewSchema",
      Name,
      review,
      postDate,
      ratingStars,
    });

    console.log(
      `New Review Named "${newReview.Name.toUpperCase()}" Is Added Successfully.`
    );

    return NextResponse.json(
      { message: "Review Added Successfully", newReview },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Adding Review :", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
