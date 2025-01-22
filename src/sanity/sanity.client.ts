import { ClientConfig, createClient } from "next-sanity";
import dotenv from "dotenv";

dotenv.config();
const sanityClient:ClientConfig = {
    projectId: process.env.SANITY_PROJECT_ID || "gz7a88fw",
    dataset: process.env.SANITY_DATASET || "production",
    token: process.env.SANITY_API_TOKEN || "skRovCf0RHP9BOUm1aGp70e8GD1ZIkfmEW256Ws1kFvUOGg5GqURozkiqalnnJbFt8tuKtnkl569uYI3GsOxrCZe7izR10Yqd0nYjCvaajXWVWSzljen0rnyg73TovSz4Ho3iJlTY6ES6XhUZRtfNrfRna56nshT87S59tAzHPfCDVlrShKR",    
    apiVersion: "2025-01-05",
    useCdn: false,
};
export default createClient(sanityClient);