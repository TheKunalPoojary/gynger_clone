"use client";
import Image from "next/image";
import React from "react";

interface ProductProps {
  data: {
    product?: boolean;
  } | undefined;
}

const Product: React.FC<ProductProps> = ({ data }) => {
  return (
    <section className="w-fullpt-30">
      <div className="w-full px-[5%]">
        <div className="w-full max-w-[80rem] mx-auto flex flex-col gap-y-20">
          <div className="w-full flex justify-between items-end max-[992px]:justify-center max-[992px]:text-center">
            <h2 className="text-[3rem] font-light max-w-[40rem] tracking-[-0.02em]">
              Payment solutions purpose-built for the tech industry.
            </h2>
            <a className="text-black text-lg font-medium rounded-lg min-w-37 h-15 max-[992px]:hidden">
              See what I can finance with Gynger
            </a>
          </div>
          <div className="flex flex-col gap-x-6">
            <div className="bg-[#f7fafa] flex relative rounded-3xl overflow-hidden max-[992px]:flex-col-reverse">
              <div className="flex flex-col justify-between py-[7.5rem] px-[6%] relative z-2 w-[46%] max-[992px]:w-full max-[992px]:items-center">
                <h3 className="text-[3rem] font-light">Gynger Pay</h3>
                <div>
                  <p className="mb-10 text-xl ">
                    Extend flexible payment offers to your customers while
                    getting paid up front.
                  </p>
                  <div className="flex flex-wrap">
                    <div className="flex gap-x-2 py-[1.25rem] px-[1rem] bg-[#ebf2f2] rounded-xl max-[992px]:w-full max-[992px]:justify-center">
                      <Image
                        src="/product.svg"
                        alt="product icon"
                        width={24}
                        height={24}
                      />
                      <p>Explore Gynger Pay</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-2 min-h-[37.5rem] text-[0.625em] flex-[1_1_0]">
                <div className="absolute flex items-center justify-start pl-[4em] inset-[0%]">
                  <div className="mt-[3.2em] relative flex-none z-2 right-[-4em]">
                    <div className="backdrop-blur-[18px] bg-white rounded-[2.4em] w-full overflow-hidden shadow-[0_55px_78px_#0a0d120d]">
                      <div className="flex gap-x-[8em] p-[3.2em] text-[#66687c]">
                        <p className="text-[2.7em]">Acme LLC</p>
                        <p className="text-[2.7em]">$80,000</p>
                      </div>
                      <div className="flex flex-col justify-start gap-[3.2em] p-[2.4em]">
                        <div className="flex items-center justify-start gap-x-[2.4em]">
                          <div className="aspect-square cursor-pointer border-2 border-gray-300 rounded-lg flex justify-center items-center w-[4em] transition-colors duration-400">

                          </div>
                          <div className="text-[2.4em]">Pay monthly</div>
                        </div>
                        <div className="flex items-center justify-start gap-x-[2.4em]">
                          <div className="aspect-square cursor-pointer border-2 border-gray-300 rounded-lg flex justify-center items-center w-[4em] transition-colors duration-400">

                          </div>
                          <div className="text-[2.4em]">Net terms</div>
                        </div>
                        <div className="flex text-center cursor-pointer rounded-[1.2em] justify-center items-center w-full h-[7em] py-[1.5em] px-[4em] shadow-[0_2px_9px_#0000000d]">
                          <div className="text-[2.4em]">Send offer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-end width-[28.6em] ml-auto">
                    <div className="p-[4em] bg-[#dae8e8] rounded-t-[2.4em] flex flex-col self-end w-full ml-auto pt-[5.6em] pl-[6em] pb-[3em] gap-y-[4em]">
                      <div className="font-light text-[2em]">
                        Acme LLC — Offer
                      </div>
                      <div className="text-[5.6em] font-light tracking-[-0.02em] leading-[0.7em]">
                        <span>$80,000</span>
                      </div>
                      <div className="flex gap-x-[0.4em]">
                        <div className="flex gap-y-[0.8em] flex-col justify-start items-start w-[12em]">
                          <div className="w-full h-[0.5em] rounded-[0.8em] bg-[#0f4c4a]"></div>
                          <div className="text-[1.8em]">Created</div>
                        </div>
                        <div className="flex gap-y-[0.8em] flex-col justify-start items-start w-[12em]">
                          <div className="w-full h-[0.5em] rounded-[0.8em] bg-[#0f4c4a] opacity-30"></div>
                          <div className="text-[1.8em]">Viewed</div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-[0.8em]">
                        <div className="flex bg-[#c5d9d9] rounded-[1.8em] gap-x-[1.6em] justify-start item-center p-[2em] pr-[0.4em]">
                          <p className="text-[2em] tracking-[-0.02em]">
                            Offer viewed
                          </p>
                        </div>
                        <div className="flex bg-[#c5d9d9] rounded-[1.8em] gap-x-[1.6em] justify-start item-center p-[2em] pr-[0.4em]">
                          <p className="text-[2em] tracking-[-0.02em]">
                            Payment received
                          </p>
                        </div>
                        <div className="flex bg-[#c5d9d9] rounded-[1.8em] gap-x-[1.6em] justify-start item-center p-[2em] pr-[0.4em]">
                          <p className="text-[2em] tracking-[-0.02em]">
                            Offer created
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute opacity-[0.02] font-thin text-[25rem] z-1 top-[-2rem] left-[1rem] leading-[0.7]">
                Pay
              </div>
            </div>
            <div className="relative flex overflow-hidden rounded-3xl bg-[#f7fafa]">
              <div className="z-[2] gap-x-[5rem] gap-y-[5rem] flex flex-col justify-between w-[46%] p-[5rem_6%] relative">
                <h3 className="tracking-[-0.02em] mt-0 mb-0 text-[3rem] font-light leading-[1.3]">
                  Gynger Capital
                </h3>
                <div>
                  <div className="mb-[2.5rem]">
                    <p className="text-[1.25rem]">
                      Access fast, non-dilutive capital with Gynger Capital's
                      embedded AP and AR financing solutions.
                    </p>
                  </div>
                  <div className="flex flex-col flex-wrap gap-y-2">
                    <a className="gap-x-[.875rem] gap-y-[.875rem] bg-green-50 rounded-[.75rem] justify-start items-center p-[1rem_1.25rem] flex">
                      <img
                        src="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e9290f30d76b05050b7ae9_8501452a804098da8241ea0c9eeb7ea8_capital-ap_icon.svg"
                        loading="lazy"
                        className="flex flex-col flex-none justify-center items-center w-8 h-8"
                      />
                      <p>AP Financing</p>
                    </a>
                    <a className="gap-x-[.875rem] gap-y-[.875rem] bg-green-50 rounded-[.75rem] justify-start items-center p-[1rem_1.25rem] flex">
                      <img
                        src="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e929220a753debb8493c93_5c05a343d29c8100431cb6a39f7dccff_capital-ar_icon.svg"
                        loading="lazy"
                        className="flex flex-col flex-none justify-center items-center w-8 h-8"
                      />
                      <p>AR Financing</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="z-[2] flex-[1_1_0%] min-h-[37.5rem] text-[0.625em] relative">
                <div className="flex flex-col justify-center items-start absolute inset-0">
                  <div className="flex flex-col justify-center items-start">
                    <div className="w-[49em] ml-[7em] relative">
                      <img
                        src="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e2ec6ff072b4bc5eab6f4a_gynger-card.avif"
                        loading="lazy"
                        className="aspect-[994/632] rounded-[1.6em] w-full relative shadow-[0_38px_56px_#0a0e351a]"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-center gap-[2.8em] w-[36em] mt-[-8.4em]">
                      <div className="backdrop-blur-[18px] bg-white/50 rounded-[2.4em] flex flex-col justify-start items-center w-full p-[2.4em_4.4em_3.2em] shadow-[0_56px_78px_#0a0d120d] gap-[2.8em]">
                        <div className="gap-[1.6em] text-white flex justify-center items-center">
                          <div className="text-[2em]">Available capital</div>
                        </div>
                        <div className="text-center tracking-[-0.02em] text-[5.4em] leading-[0.7]">
                          $<span>400,000</span>.<sub>00</sub>
                        </div>
                        <div className="bg-[#dfe3e6] rounded-[2.4em] w-full h-[0.9em] relative overflow-hidden">
                          <div className="bg-[#9fe29e] absolute inset-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-10 opacity-[0.02] pointer-events-none text-[var(--green--800)] tracking-[-0.02em] text-[25rem] font-thin leading-[0.7] absolute top-[-2rem] left-[1rem]">Capital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
