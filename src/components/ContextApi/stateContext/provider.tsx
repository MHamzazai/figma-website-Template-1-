'use client';
import { ReactNode, useState } from "react";
import { stateContext } from "./Context";

export default function ContextProvider({ children }: { children: ReactNode }) {

    const [refreshFeedback, setRefreshFeedback] = useState<boolean>(false); // referesh state for feedbacks 

    const [refreshReviews, setRefreshReviews] = useState<boolean>(false); // referesh state for reviews


    return (
        <stateContext.Provider value={{
            refreshFeedback,
            setRefreshFeedback,
            refreshReviews,
            setRefreshReviews,
        }}>
            {children}
        </stateContext.Provider>
    )
};