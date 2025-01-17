import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./schema/mainSchema";
import dotenv from "dotenv";

dotenv.config();
export const sanityConfig = defineConfig({
    name: "MarketPlace Builder",
    title: "A General E-commerce Website",
    plugins: [structureTool(), visionTool()],
    basePath: "/sanityStudio",
    schema: {
        types: schemas,
    },
    projectId: "gz7a88fw",
    dataset: "production",
})