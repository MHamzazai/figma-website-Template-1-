import { defineField, defineType } from "sanity";

const productsData = defineType({
  name: "productsData",
  title: "Products Data",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "product Description",
      type: "string",
    }),

    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
    }),

    defineField({
      name: "discountPercentage",
      title: "Product Discount Percentage",
      type: "number",
    }),

    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
    }),

    defineField({
      name: "category",
      title: "Product Category",
      type: "string",
      options: {
        list: [
          { title: "T-Shirt", value: "tshirt" },
          { title: "Short", value: "short" },
          { title: "Jeans", value: "jeans" },
          { title: "Hoddie", value: "hoodie" },
          { title: "Shirt", value: "shirt" },
        ],
      },
    }),

    defineField({
      name: "isNew",
      type: "boolean",
      title: "New Product",
    }),

    defineField({
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "id",
      title: "id",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 100 },
    }),
  ],
});

export default productsData;
