'use client';
import { useContext } from "react";
import { stateContext } from "./Context";

export default function UseContext() {
    const context = useContext(stateContext);

    if (!context) {
        throw new Error('useContext must be used within a ContextProvider');
    };
    return context;
};