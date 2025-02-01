import { defineField, defineType } from "sanity";

const orderDetails = defineType({
  name: "orderDetails",
  title: "Order Details",
  type: "document",
  fields: [
    defineField({
      name: "productId",
      title: "Product ID",
      type: "string",
    }),

    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Product Description",
      type: "text",
    }), 

    defineField({
      name: "finalPrice",
      title: "Product Price",
      type: "string",
    }),

    defineField({
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
    }),

    defineField({
      name: "discountedPrice",
      title: "Discounted Price",
      type: "string",
    }),

    defineField({
      name: "imageSrc",
      title: "Product Image Src",
      type: "string",
    }),

    defineField({
      name: "size",
      title: "Product Size",
      type: "string",
    }),

    defineField({
      name: "color",
      title: "Product Color",
      type: "string",
    }),

    defineField({
      name: "newProduct",
      title: "New Product",
      type: "boolean",
    }),

    defineField({
      name: "quantity",
      title: "Product Quantity",
      type: "number",
    }),
  ],
});
export default orderDetails;
