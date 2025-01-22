import { createClient } from "next-sanity";
import dotenv from "dotenv";

dotenv.config();
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Client-side accessible
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Client-side accessible
  token: process.env.SANITY_API_TOKEN, // Server-side only
  apiVersion: "2025-01-05",
  useCdn: false,
});

export default sanityClient;
