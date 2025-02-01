import { stateContextType } from "@/components/types/types";
import { createContext } from "react";

export const stateContext = createContext<stateContextType | undefined>(undefined); // context for feedback data