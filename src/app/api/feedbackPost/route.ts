import dotenv from "dotenv";
dotenv.config();

import { feedbackCardTypes } from "@/components/types/types";
import sanityClient from "@/sanity/sanity.client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { Name, description, starsNumbers }: feedbackCardTypes = body;
    if (!Name || !description || starsNumbers === undefined) {  
      return NextResponse.json({ message: "Data is missing" }, { status: 400 });
    }

    // create new feedback document in sanity
    const newFeedback: feedbackCardTypes = await sanityClient.create({
      _type: "feedbackSchema",
      Name,
      description,
      starsNumbers,
    });

    console.log(`New Feedback Named "${newFeedback.Name.toUpperCase()}" Is Added Successfully.`)
    
    return NextResponse.json(
      { message: "Feedback Added Successfully", newFeedback },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error Adding Feedback :", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
