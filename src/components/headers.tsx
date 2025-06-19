"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/golden-luxury-house-with-pillar-for-bank-court-law-or-museum-logo-design-vector.jpg";

const navlinks = [
  { name: "For buyers" },
  { name: "For sellers" },
  { name: "Product" },
  { name: "Solutions" },
  { name: "Resources" },
  { name: "Company" },
];

const Headers = () => {
  return (
    <div
      className="fixed flex items-center justify-center z-99 mx-[5%] py-8 inset-x-[0%] text-[14px]"
      style={{ color: "#FFFFFF" }}
    >
      <div
        className="w-full index-100 max-w-[84rem] h-20 flex static border-1 border-[#ffffff1a] rounded-[4.5rem] px-8 justify-start items-center backdrop-blur-sm gap-x-[4%]"
        style={{ backgroundColor: "#052b28cc" }}
      >
        <Link href="/">
          <Image src={Logo} alt="logo" width={50} height={50} />
        </Link>
        <nav className="static flex flex-1 justify-start align-center self-center">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              href="/"
              className="px-4 hover:text-[#00b4d8] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-x-2 gap-y-2 items-center">
          <a className="px-5 py-4" href="/">Sign In</a>
          <button
            className="rounded-full px-5 py-4"
            style={{ backgroundColor: "#9fe29e", color: "#000000" }}
          >
            <div className="px-2 text-sm">Get Started</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
