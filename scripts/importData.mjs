import dotenv from "dotenv";
dotenv.config();
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "gz7a88fw",
  dataset: process.env.SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2025-01-13",
  token:
    process.env.SANITY_API_TOKEN ||
    "skRovCf0RHP9BOUm1aGp70e8GD1ZIkfmEW256Ws1kFvUOGg5GqURozkiqalnnJbFt8tuKtnkl569uYI3GsOxrCZe7izR10Yqd0nYjCvaajXWVWSzljen0rnyg73TovSz4Ho3iJlTY6ES6XhUZRtfNrfRna56nshT87S59tAzHPfCDVlrShKR",
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload("image", bufferImage, {
      filename: imageUrl.split("/").pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        id: product._id,
        _type: "productsData",
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: "image",
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercentage: product.discountPercent,
        isNew: product.isNew,
        sizes: product.sizes,
        colors: product.colors,
        
      };

      const createdProduct = await client.create(document);
      console.log(
        `Product ${product.name} uploaded successfully:`,
        createdProduct
      );
    } else {
      console.log(
        `Product ${product.name} skipped due to image upload failure.`
      );
    }
  } catch (error) {
    console.error("Error uploading product:", error);
  }
}

async function importProducts() {
  try {
    const response = await fetch(
      "https://template1-neon-nu.vercel.app/api/products"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

importProducts();
