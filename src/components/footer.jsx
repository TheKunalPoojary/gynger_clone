"use client";
import React from "react";
import Image from "next/image";
import Gynger from "../../public/gynger.svg";
import Soc from "../../public/licesence/67e1edd12e0f1c1b7b9d6c1b_soc-2.avif";
import Built from "../../public/licesence/67e1edd15128b6e6e78de281_built-in.avif";

const links = [
  { title: "Gynger Pay" },
  { title: "Gynger AP Financing" },
  { title: "Gynger AR Financing" },
  { title: "Blog" },
  { title: "FAQs" },
  { title: "About us" },
  { title: "Careers" },
];
const links2 = [
  { title: "LinkedIn" },
  { title: "X / Twitter" },
  { title: "Privacy Policy" },
  { title: "Terms of service" },
  { title: "contact@gynger.io" },
];

const Footer = () => {
  return (
    <footer className="text-white bg-[#031f1c] pt-16 pb-20">
      <div className="w-full px-[5%]">
        <div className="max-w-[80rem] flex flex-col gap-y-2 max-[992px]:gap-y-14">
          <div className="flex items-start justify-between max-[992px]:flex-col max-[992px]:gap-y-14">
            <div className="w-32">
              <Image
                src={Gynger}
                alt="Logo"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div className="max-w-[27.5rem]">
              <div className="mb-8">
                <p>
                  Check out the latest updates to our products here. Stay up to
                  date on all changes by subscribing to our Newsletter.
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="bg-[#031f1c] border-2 border-[#ffffff24] rounded-xl p-2">
                  <form
                    className="flex items-center"
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("submit");
                    }}
                  >
                    <div className="w-full px-3 py-2">
                      <input type="text" placeholder="Input your email*" />
                    </div>
                    <div className="bg-white px-4 py-3 rounded-md min-w-auto text-sm">
                      <input
                        type="submit"
                        value="Subscribe"
                        className="text-black w-full"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end max-[992px]:flex-col max-[992px]:gap-y-14 max-[992px]:items-start">
            <div className="flex gap-x-20 max-[472px]:flex-col max-[497px]:gap-y-14">
              <div className="flex flex-col items-start gap-y-2">
                {links.map((link, index) => (
                  <a key={index} href="/" className="text-[20px] font-medium">
                    {link.title}
                  </a>
                ))}
              </div>
              <div className="flex flex-col items-start gap-y-2">
                {links2.map((link, index) => (
                  <a key={index} href="/" className="text-[20px] font-medium">
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end max-[992px]:items-start">
                <div className="m-4 gap-x-4 flex">
                    <Image src={Built} alt="Logo" width={100} height={100} className="w-20 h-20"/>
                    <Image src={Soc} alt="Logo" width={100} height={100} className="w-20 h-20"/>
                </div>
                <p  className="text-sm">© 2025 Gynger.io —  157 W 18th Street, Floor 5, New York, NY 10011</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
