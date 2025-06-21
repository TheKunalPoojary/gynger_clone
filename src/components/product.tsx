import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <section className="w-fullpt-30">
      <div className="w-full px-[5%]">
        <div className="w-full max-w-[80rem] mx-auto flex flex-col gap-y-20">
          <div className="w-full flex justify-between items-end">
            <h2 className="text-[3rem] font-light max-w-[40rem] tracking-[-0.02em]">
              Payment solutions purpose-built for the tech industry.
            </h2>
            <a className="text-black text-lg font-medium rounded-lg min-w-37 h-15">
              See what I can finance with Gynger
            </a>
          </div>
          <div className="flex flex-col gap-x-6">
            <div className="bg-[#f7fafa] flex relative rounded-3xl overflow-hidden">
              <div className="flex flex-col justify-between py-[7.5rem] px-[6%] relative z-2 w-[46%]">
                <h3 className="text-[3rem] font-light">Gynger Pay</h3>
                <div>
                  <p className="mb-10 text-xl ">
                    Extend flexible payment offers to your customers while
                    getting paid up front.
                  </p>
                  <div className="flex flex-wrap">
                    <div className="flex gap-x-2 py-[1.25rem] px-[1rem] bg-[#ebf2f2] rounded-xl">
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
                                <div className="text-[2.4em]">Pay monthly</div>
                            </div>
                            <div className="flex items-center justify-start gap-x-[2.4em]">
                                <div className="text-[2.4em]">Net terms</div>
                            </div>
                            <div className="flex text-center cursor-pointer rounded-[1.2em] justify-center items-center w-full h-[7em] py-[1.5em] px-[4em] shadow-[0_2px_9px_#0000000d]" ><div className="text-[2.4em]">Send offer</div></div>
                        </div></div>
                    </div>
                    <div className="items-end width-[28.6em] ml-auto">
                        <div className="p-[4em] bg-[#dae8e8] rounded-t-[2.4em] flex flex-col self-end w-full ml-auto pt-[5.6em] pl-[6em] pb-[3em] gap-y-[4em]">
                            <div className="font-light text-[2em]">Acme LLC — Offer</div>
                            <div className="text-[5.6em] font-light tracking-[-0.02em] leading-[0.7em]"><span>$80,000</span></div>
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
                                    <p className="text-[2em] tracking-[-0.02em]">Offer viewed</p>
                                </div>
                                <div className="flex bg-[#c5d9d9] rounded-[1.8em] gap-x-[1.6em] justify-start item-center p-[2em] pr-[0.4em]">
                                    <p className="text-[2em] tracking-[-0.02em]">Offer viewed</p>
                                </div>
                                <div className="flex bg-[#c5d9d9] rounded-[1.8em] gap-x-[1.6em] justify-start item-center p-[2em] pr-[0.4em]">
                                    <p className="text-[2em] tracking-[-0.02em]">Offer viewed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
              </div>
              <div className="absolute opacity-[0.02] font-thin text-[25rem] z-1 top-[-2rem] left-[1rem] leading-[0.7]">Pay</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
