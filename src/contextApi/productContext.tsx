import { createContext } from "react";
import { ProductContextType } from "@/components/types/types";


const productContext = createContext<ProductContextType | undefined>(undefined);
export default productContext;