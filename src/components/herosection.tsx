"use client";
import React from "react";

const Herosection = () => {
  return (
    <section className="text-white relative pt-[17.5rem] pb-[10rem]">
      <div className="px-[5%] flex flex-col justify-center items-center relative z-50">
        <div className="text-center mb-6">
          <h1>Master your cash flow</h1>
        </div>
        <div>
          <p className="text-xl mb-12">
            Flexible payments and embedded financing solutions for buyers and
            sellers of technology.
          </p>
        </div>
        <div className="w-full max-w-md">
          <div className="bg-[#031f1c] border-2 border-[#ffffff24] rounded-xl p-2">
            <form
            className="flex items-center"
              onSubmit={() => {
                console.log("submit");
              }}
            >
              <div className="w-full">
                <input type="text" placeholder="Enter your work email*" />
              </div>
              <div className="bg-[#9fe29e] px-4 py-3 rounded-md min-w-auto text-sm">
                <input type="submit" value="Get in touch" className="text-black" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute inset-[0%] z-1">
        <iframe
          src="https://my.spline.design/cubiccopy-58ccfada32ada29de256862c00e83a1f/"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Herosection;
