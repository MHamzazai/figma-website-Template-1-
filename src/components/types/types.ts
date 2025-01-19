export type feedbackCardTypes = {
  name: string;
  para: string;
};

export type reviewCardTypes = {
  name: string;
  para: string;
  date: string;
};

export type cartCardTypes = {
  name: string;
  size: string;
  color: string;
  price: string;
  image: string;
};

// type for product details page data
export type ProductDataType = {
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  image: string;
  colors: string[],
  sizes: string[],
  slug: string,
}