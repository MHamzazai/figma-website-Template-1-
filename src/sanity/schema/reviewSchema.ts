import { defineField, defineType } from "sanity";

const reviewSchema = defineType({
  name: "reviewSchema",
  title: "Review Schema",
  type: "document",
  fields: [
    defineField({
      name: "userName",
      title: "User Name",
      type: "string",
    }),
    defineField({
      name: "review",
      title: "User Review",
      type: "text",
    }),
    defineField({
      name: "postDate",
      title: "Post Date",
      type: "date",
    }),
    defineField({
      name: "ratingStars",
      title: "Stars Numbers (Out of 5)",
      type: "number",
      validation: (rule) =>
        rule
          .max(5)
          .min(0)
          .error("The number of rating stars must be between 1 and 5."),
    }),
  ],
});

export default reviewSchema;