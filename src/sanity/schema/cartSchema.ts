import { defineField, defineType } from "sanity";

const cartSchema = defineType({
  name: "cartSchema",
  title: "Cart Schema",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
    }),

    defineField({
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
    }),

    defineField({
      name: "actualPrice",  
      title: "Discount Price",
      type: "string",
    }),

    defineField({
      name: "price",
      title: "Actual Price",
      type: "string",
    }),

    defineField({
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "imageSrc",
      title: "Product Image Src",
      type: "string",
    }),
  ],
});
export default cartSchema;
