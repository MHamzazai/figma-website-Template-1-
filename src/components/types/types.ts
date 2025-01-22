export type feedbackCardTypes = {
  userName: string;
  description: string;
  starsNumbers: number;
};

export type reviewCardTypes = {
  userName: string;
  review: string;
  postDate: string;
  ratingStars: number;
};

export type cartCardTypes = {
  name: string;
  sizes: string[];
  colors: string[];
  price: number;
  imageSrc: string;
  discountPercentage?: number;
  actualPrice?: string | number;
  deleteProduct: (prodcutName: string) => Promise<void>;
};

// type for product details page data
export type ProductDataType = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  image: string;
  colors: string[];
  sizes: string[];
  slug: string;
  isNew: boolean;
};

export type ProductContextType = {
  productData: ProductDataType | null;
  setProductData: React.Dispatch<React.SetStateAction<ProductDataType | null>>;
};

// type of feedback modal component
export interface feedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: feedbackCardTypes) => void;
  isSubmitting: boolean;
  errorMessage: string | null;
}

// type of feedback component to delete feedback product
export interface FeedbackProps extends feedbackCardTypes {
  onDelete: () => void;
}

// type of feedback modal component
export interface reviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: reviewCardTypes) => void;
  isSubmitting: boolean;
  errorMessage: string | null;
}
export interface ReviewkProps extends reviewCardTypes {
  onDelete: () => void;
}
