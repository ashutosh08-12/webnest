// Navbar.jsx

import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-10">
      <div className="text-2xl font-bold">
      </div>

      <div className="hidden md:flex items-center gap-10 font-inter font-medium text-[16px] leading-[150%] tracking-normal">
        <a href="#">Product</a>
        <a href="#">Solutions</a>
        <a href="#">Resources</a>
        <a href="#">Pricing</a>
      </div>

      <button className="bg-[#00FF66] hover:bg-[#00e65c] transition-all duration-300 px-6 py-3 rounded-full text-black font-semibold flex items-center gap-2">
        Book a demo

        →
      </button>
    </nav>
  );
};

export default Navbar;