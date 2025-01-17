import dotenv from "dotenv";
dotenv.config(); // load the environment vaiables

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export const sanityConfig = defineConfig({
    name: "MarketPlace Builder",
    title: "A General E-commerce Website",
    plugins: [structureTool(), visionTool()],
    basePath: "/sanityStudio",
    schema: {},
    projectId: process.env.SANITY_PROJECT_ID || "gz7a88fw",
    dataset: process.env.SANITY_DATASET || "production",
}); 
