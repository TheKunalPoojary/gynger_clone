"use client";
import Image from "next/image";
import React from "react";

interface CtaProps {
  data: {
    cta?: boolean;
  } | undefined;
}

const Cta: React.FC<CtaProps> = ({ data }) => {
  return (
    <section className="py-20 px-[5%]" style={{ backgroundColor: "#dae8e8" }}>
      <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <div
          className="bg-[#dae8e8] flex overflow overflow-hidden max-[992px]:flex-col-reverse"
          style={{
            backgroundImage:
              "url(/cta/67e3f37152e1d4e437ff880e_bottom-cta_bg.avif)",
          }}
        >
          <div className="flex flex-col flex-1 py-30 pl-20 pr-2.5 items-start max-[992px]:p-12 max-[992px]:items-center max-[992px]:text-center">
            <div className="mb-8 max-w-80">
              <p className="text-[4rem] font-extralight tracking-[-0.03em]">
                Ready to learn more?
              </p>
            </div>
            <div className="w-full max-w-md">
                <div className="border-2 border-[#ffffff24] rounded-xl p-2 shadow">
                  <form
                    className="z-20 border-2 border-white/10 rounded-lg flex justify-start items-center p-2 transition-all duration-300 relative shadow-xs"
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
          <div className="flex flex-1 items-center justify-center max-[992px]:py-12">
            <div className="flex flex-col items-center justify-center text-[0.625rem] max-[767px]:text-[1.5vw]">
                <img src="/cta/67e2ec6ff072b4bc5eab6f4a_gynger-card.avif" alt="card" className="w-[38em] ml-[10em] rounded-2xl" />
                <img src="/cta/682a3d2f315fe0e5d7dc5874_bottom-cta.avif" alt="card shadow" className="w-[34em] mt-[-11em] self-start rounded-2xl backdrop-blur-[18px]" />
            </div>
          </div>
        </div>
        <div className="w-full h-2 bg-size-[300px] bg-repeat-x" style={{backgroundImage:"url(/67e436b75a927316f74d3849_color-stripe@2x.avif)"}}></div>
        <div className="bg-white flex flex-wrap items-center justify-between py-12 px-10 cols-6 max-[720px]:justify-center">
            <p className="text-[20px]">Over $100 million in contracts closed</p>
            <p className="text-[18px]">Learn what Gynger can finance</p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
