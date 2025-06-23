"use client";
import React from "react";

interface HerosectionProps {
  data: any;
}

const Herosection: React.FC<HerosectionProps> = ({ data }) => {
  return (
    <section className="text-white relative pt-[17.5rem] pb-[10rem] z-4">
      <div className="px-[5%] flex flex-col justify-center items-center relative z-50">
        <div className="text-center mb-6">
          <h1 className="text-7xl max-[767px]:text-5xl">{data?.title}</h1>
        </div>
        <div>
          <p className="text-xl mb-12 text-center">
            {data?.description}
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
              <div className="w-full py-2 px-3">
                <input type="text" placeholder="Enter your work email*" />
              </div>
              <div className="bg-[#9fe29e] px-4 py-3 rounded-md min-w-auto text-sm">
                <input
                  type="submit"
                  value="Get in touch"
                  className="text-black"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute inset-[0%] z-1">
        <iframe
          src={data?.url?.href}
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
      <div
        className="absolute inset-[0%] z-2"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #052B28 35%, rgba(5, 43, 40, 0.1) 100%)",
        }}
      ></div>
    </section>
  );
};

export default Herosection;
