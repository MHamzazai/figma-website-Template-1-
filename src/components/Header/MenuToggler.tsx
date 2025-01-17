"use client";
import Link from "next/link";
import { useState } from "react";

export default function MenuToggler() {
  // state to be used for menu toggling and menu bar showing
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // function which helps to toggle between menu and close icon
  const menuToggler = () => {
    setMenuOpen(!menuOpen); // reverse the initial menuOpen value and then store it every time
  };

  // function which close the menu bar when click on any link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="lg:hidden">
      <i
        className={`${
          menuOpen ? "ri-close-large-line" : "ri-menu-line"
        } text-black text-2xl font-bold py-[14px] pl-2 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "rotate-180" : ""
        }`} // Added rotation effect
        onClick={menuToggler}
      ></i>
      <div
        className={`${menuOpen ? "block absolute w-full mt-4" : "hidden"}`} // Added fade and scale transitions
      >
        <div className="flex flex-col justify-center items-center gap-4 bg-red-100 rounded-b-lg py-6 border-b-2 shadow-md">
          
          <div className="flex justify-center items-center">
            <Link href="" className="text-xl font-bold" onClick={closeMenu}>
              Shop
            </Link>
            <i className="ri-arrow-down-s-line font-bold"></i>
          </div>

          <div className="">
            <Link href="" className="text-xl font-bold" onClick={closeMenu}>
              On Sale
            </Link>
          </div>

          <div className="">
            <Link
              href="#new-arrivals"
              className="text-xl font-bold"
              onClick={closeMenu}
            >
              New Arrivals
            </Link>
          </div>

          <div className="">
            <Link href="" className="text-xl font-bold" onClick={closeMenu}>
              Brands
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
