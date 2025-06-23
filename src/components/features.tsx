"use client";
import Lottie from "lottie-react";
import React from "react";
import FastApproval from "../../public/feature/fastapproval.json";

interface FeaturesProps {
  data: {
    features_section?: boolean;
  } | undefined;
}

const Features: React.FC<FeaturesProps> = ({ data }) => {
  const fullItems = [
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e317a22388dc2c6c08b62a_mercury.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e3179997e1c44221f68383_xero.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799a79803c3bc66281e_freshbooks.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e317997de75aacba812372_ramp.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e3179998bae25c471db131_ncino.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799edd5e82999630995_netsuite.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799ebe4d9b25c239afc_zoho.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e317994d2c69872ce6bcd7_hubspot.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799a79803c3bc66282c_bank-of-america.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799227c6b0463287e38_freshsales.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799243141ce10732bf3_highnote.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e317997de75aacba812376_sage.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799712fb8deaab69929_avaloq.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e3179b98a0f4ed28423846_backbase.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799ba45ecc6a5b56b3c_pipedrive.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e3179956f4f6218cbc97fd_salesforce.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e3179980cf68a90aea104c_quickbooks.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799ed0baf28db8f5648_chase.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799b8738def978e540e_stripe.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e3179936ed048ad7bd250c_gmi.avif",
    },
    {
      src: "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e31799bfb14474bcc2b968_commercetools.avif",
    },
  ];

  const firstColumnItems = fullItems.slice(0, Math.ceil(fullItems.length / 3));
  const secondColumnItems = fullItems.slice(
    Math.ceil(fullItems.length / 3),
    Math.ceil((fullItems.length * 2) / 3)
  );
  const thirdColumnItems = fullItems.slice(
    Math.ceil((fullItems.length * 2) / 3)
  );

  return (
    <section className="py-[7.5rem] bg-[#f7fafa]">
      <div className="w-full px-[5%]">
        <div className="w-full max-w-[80rem] mx-auto">
          <div className="flex flex-col gap-[5rem] max-[991]:gap-16">
            <div className="text-center flex justify-center items-center gap-[3rem]">
              <h2 className="tracking-[-0.03em] text-6xl md:text-[4rem] font-extralight leading-[1.16]">
                Convenience, <em>powered&nbsp;by&nbsp;AI</em>
              </h2>
            </div>
            <div className="gap-8 grid template-rows-auto flex-wrap grid-cols-2 auto-cols-fr max-[991]:flex max-[991]:gap-26">
              <div className="gap-16 text-center flex flex-col justify-start items-center">
                <div
                  className="aspect-[600/517] bg-green-50 rounded-[1.5rem] w-full text-[0.625rem] relative overflow-hidden bg-center bg-cover"
                  style={{
                    backgroundImage: `url(https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e316617d05e7865b020856_card-bg.avif)`,
                  }}
                >
                  <div className="z-[3] flex justify-center items-center w-[5rem] absolute bottom-[1.5rem] right-[1.5rem]"></div>
                  <div className="object-cover w-full h-full absolute inset-0">
                    <Lottie animationData={FastApproval} autoplay={true} />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <p className="tracking-[-0.02em] text-[1.5rem] font-normal leading-[1.5]">
                      Fast approvals
                    </p>
                  </div>
                  <div className="text-[#66687c]">
                    <p className="text-lg">
                      Get next-day approval for non-dilutive payment solutions
                      with AI-powered data integrations and pre-qualification.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gap-[4rem] text-center flex flex-col justify-start items-center">
                <div
                  className="aspect-[600/517] bg-[var(--green--50)] rounded-[1.5rem] w-full text-[0.625rem] relative overflow-hidden bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e316617d05e7865b020856_card-bg.avif')",
                  }}
                >
                  <div className="z-30 flex justify-center items-center w-20 absolute bottom-6 right-6"></div>
                  <div className="gap-5 flex justify-center items-start absolute inset-0 overflow-hidden feature-grid_card-2_visual">
                    <div>
                      <div className="feature-grid_card-2_col">
                        {firstColumnItems.map((logo, index) => (
                          <div key={index} className="aspect-square bg-white rounded-[3.2em] w-[14.8em] mb-[1.2em] relative overflow-hidden feature-grid_card-2_item">
                            <img
                              key={index}
                              src={logo.src}
                              alt={`Company logo ${index + 1}`}
                              className="object-cover w-full h-full absolute inset-0"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="feature-grid_card-2_col">
                        {firstColumnItems.map((logo, index) => (
                          <div key={index} className="aspect-square bg-white rounded-[3.2em] w-[14.8em] mb-[1.2em] relative overflow-hidden feature-grid_card-2_item">
                            <img
                              key={index}
                              src={logo.src}
                              alt={`Company logo ${index + 1}`}
                              className="object-cover w-full h-full absolute inset-0"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="feature-grid_card-2_col">
                        {secondColumnItems.map((logo, index) => (
                          <div key={index} className="aspect-square bg-white rounded-[3.2em] w-[14.8em] mb-[1.2em] relative overflow-hidden feature-grid_card-2_item">
                            <img
                              key={index}
                              src={logo.src}
                              alt={`Company logo ${index + 1}`}
                              className="object-cover w-full h-full absolute inset-0"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="feature-grid_card-2_col">
                        {secondColumnItems.map((logo, index) => (
                          <div key={index} className="aspect-square bg-white rounded-[3.2em] w-[14.8em] mb-[1.2em] relative overflow-hidden feature-grid_card-2_item">
                            <img
                              key={index}
                              src={logo.src}
                              alt={`Company logo ${index + 1}`}
                              className="object-cover w-full h-full absolute inset-0"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="feature-grid_card-2_col">
                        {thirdColumnItems.map((logo, index) => (
                          <div key={index} className="aspect-square bg-white rounded-[3.2em] w-[14.8em] mb-[1.2em] relative overflow-hidden feature-grid_card-2_item">
                            <img
                              key={index}
                              src={logo.src}
                              alt={`Company logo ${index + 1}`}
                              className="object-cover w-full h-full absolute inset-0"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="feature-grid_card-2_col">
                        {thirdColumnItems.map((logo, index) => (
                          <div key={index} className="aspect-square bg-white rounded-[3.2em] w-[14.8em] mb-[1.2em] relative overflow-hidden feature-grid_card-2_item">
                            <img
                              key={index}
                              src={logo.src}
                              alt={`Company logo ${index + 1}`}
                              className="object-cover w-full h-full absolute inset-0"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                <div className="mb-4">
                  <p className="tracking-[-0.02em] text-[1.5rem] font-normal leading-[1.5]">
                    No-code integrations
                  </p>
                </div>
                <div className="text-[#66687c]">
                  <p className="text-lg">
                    Gynger embeds seamlessly into your existing workflows
                    through turn-key integrations with your accounting system,
                    bank, and or CRM.
                  </p>
                </div>
              </div>
              <a className="text-[#688f8f]">
                <p>Explore integrations</p>
              </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
