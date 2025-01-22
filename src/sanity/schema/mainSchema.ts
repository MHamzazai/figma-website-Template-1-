import cartSchema from "./cartSchema";
import feedbackSchema from "./feedbackSchema";
import orderDetails from "./orderDetails";
import productsData from "./productsData";
import reviewSchema from "./reviewSchema";

const mainSchema = [productsData, orderDetails, cartSchema,feedbackSchema, reviewSchema];

export default mainSchema;
