"use client"; // This marks the component as a Client Component, meaning it runs only on the client side

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import React from "react";

// This is a Client Component that will conditionally render the Header and Footer based on the current pathname
export default function RootLayoutHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  // Access the current pathname using the usePathname hook. This only works on the client-side.
  const pathname = usePathname();

  // Check if the current route is '/sanityStudio'. If it is, set hideHeaderFooter to true.
  // This logic determines whether or not the Header and Footer should be displayed.
  const hideHeaderFooter = pathname && pathname.includes("/sanityStudio");

  return (
    <div>
      {/* Render Header only if the route is NOT '/sanityStudio' */}
      {!hideHeaderFooter && <Header />}

      {/* Render the main content (children) */}
      {children}

      {/* Render Footer only if the route is NOT '/sanityStudio' */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
