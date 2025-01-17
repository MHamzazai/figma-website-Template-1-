import { ClientConfig } from "next-sanity";
import dotenv from "dotenv";

dotenv.config();
const sanityClient:ClientConfig = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,    
    apiVersion: "2025-01-05",
    useCdn: false,
};
export default sanityClient;