import { defineField, defineType } from "sanity";

const feedbackSchema = defineType({
  name: "feedbackSchema",
  title: "Feedback Card",
  type: "document",
  fields: [
    defineField({
      name: "Name",
      title: "User Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "starsNumbers",
      title: "Number Of Rating Stars (Out of 5)",
      type: "number",
      validation: (Rule) =>
        Rule.max(5)
          .min(1)
          .error("The number of rating stars must be between 1 and 5."),
    }),
  ],
});

export default feedbackSchema;