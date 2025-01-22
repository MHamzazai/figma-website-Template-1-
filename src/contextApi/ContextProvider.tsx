'use client';
import React, { useState } from "react";
import { ProductDataType } from "@/components/types/types";
import productContext from "./productContext";


export default function ProductProvider({ children }: { children: React.ReactNode }) {
    const [productData, setProductData] = useState<ProductDataType | null>(null); // a single product 
    return (
        <productContext.Provider
            value={{
                productData,
                setProductData,
            }}
        >
            {children}
        </productContext.Provider>
    );
};

