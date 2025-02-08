"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function RootLayoutHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const excludedRoutes: string[] = ["/sanityStudio", "/admin"];
  const hideHeaderFooter = excludedRoutes.some((route) => pathname?.includes(route));

  if (hideHeaderFooter) return <>{children}</>;

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
