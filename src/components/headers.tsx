"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { getHeaderRes } from "@/helper/index";

type HeaderType = {
  logo?: {
    url?: string;
  };
  navbar_menu?: [{ navlink: string }];
};

const Headers = () => {
  const [header, setHeader] = useState<HeaderType | undefined>(undefined);

  useEffect(() => {
    const fetchHeader = async () => {
      const headerRes = await getHeaderRes();
      setHeader(headerRes);
    };
    fetchHeader();
  }, []);

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
          <img src={header?.logo?.url} alt="logo" className="w-22" />
        </Link>
        <nav className="static flex flex-1 justify-start items-center align-center self-center max-[992px]:hidden">
          {header?.navbar_menu?.map((link, index) => (
            <Link
              key={index}
              href="/"
              className="px-2 hover:text-[#00b4d8] transition-all duration-300"
            >
              {link.navlink}
            </Link>
          ))}
        </nav>
        <div className="flex gap-x-2 gap-y-2 items-center ml-auto">
          <a className="px-5 py-4 max-[992px]:hidden" href="/">
            Sign In
          </a>
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
