import { Dispatch, ReactNode, SetStateAction } from "react";

export type feedbackCardTypes = {
  Name: string;
  description: string;
  starsNumbers: number;
};

export type reviewCardTypes = {
  Name: string;
  review: string;
  postDate: string;
  ratingStars: number;
};

export type cartCardTypes = {
  Name: string;
  sizes: string[];
  colors: string[];
  price: number;
  imageSrc: string;
  discountPercentage?: number;
  actualPrice?: string | number;
  deleteProduct: (prodcutName: string) => void;
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

// type of feedback modal component
export interface feedbackModalProps {
  Name: string;
  description: string;
  starsNumbers: number;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: feedbackCardTypes) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setStarsNumbers: (starsNumbers: number) => void;
}

// type of feedback component to delete feedback product
export interface FeedbackProps extends feedbackCardTypes {
  onDelete: () => void;
}

// type of rewiew modal component
export interface reviewModalProps {
  Name: string;
  postDate: string;
  review: string;
  ratingStars: number;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: reviewCardTypes) => void;
  setName: (name: string) => void;
  setReview: (review: string) => void;
  setRatingStars: (ratingStars: number) => void;
  setPostDate: (postDate: string) => void;
}

export interface ReviewkProps extends reviewCardTypes {
  onDelete: () => void;
}

// type for order details api route
export type orderType = {
  productId: string;
  name: string;
  description: string;
  finalPrice: string | number;
  discountPercentage?: number;
  discountedPrice: string | number;
  imageSrc: string;
  size: string;
  color: string;
  newProduct: boolean;
  quantity: number;
};

// type for cartData api route
export type cartApiType = {
  Name: string;
  sizes: string[];
  colors: string[];
  price: string | number;
  imageSrc: string;
  discountPercentage?: number;
  actualPrice?: string | number;
};

// types for warn modal component
export interface WarnModalProps {
  isVisible: boolean;
  message: string;
  onConfirm?: () => void;
  children?: ReactNode;
  onCancel?: () => void;
}

// types for message modal component
export type messageModalType = {
  isVisible: boolean;
  message: string;
  onClose: () => void;
};

// types for feedback cntext api
export type stateContextType = {
  refreshFeedback: boolean;
  setRefreshFeedback: Dispatch<SetStateAction<boolean>>;
  refreshReviews: boolean;
  setRefreshReviews: Dispatch<SetStateAction<boolean>>;
};
