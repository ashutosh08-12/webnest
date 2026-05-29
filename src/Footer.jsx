
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[1360px] mx-auto mt-10 mb-6">
      <div className="bg-black rounded-[42px] px-[48px] pt-[52px] pb-[42px]">
        
        <div className="flex justify-between">
          
          <div className="flex gap-[95px]">
            
            <div>
              <h3 className="text-white text-[28px] font-semibold mb-[34px]">
                Company
              </h3>

              <div className="flex flex-col gap-[22px]">
                <a
                  href="#"
                  className="text-[#E7E7E7] text-[18px]"
                >
                  About Rotar AI
                </a>

                <a
                  href="#"
                  className="text-[#E7E7E7] text-[18px]"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-[#E7E7E7] text-[18px]"
                >
                  Demo
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-[28px] font-semibold mb-[34px]">
                Recources
              </h3>

              <div className="flex flex-col gap-[22px]">
                <a
                  href="#"
                  className="text-[#E7E7E7] text-[18px]"
                >
                  Blog
                </a>

                <a
                  href="#"
                  className="text-[#E7E7E7] text-[18px]"
                >
                  Events
                </a>

                <a
                  href="#"
                  className="text-[#E7E7E7] text-[18px]"
                >
                  Tool Library
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-[28px] font-semibold mb-[34px]">
                Legal
              </h3>

              <div className="flex flex-col gap-[22px]">
                <a
                  href="#"
                  className="text-[#E7E7E7] text-[18px]"
                >
                  Terms of Use
                </a>

                <a
                  href="#"
                  className="text-[#E7E7E7] text-[18px]"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[520px]">
            <p className="text-[#D9D9D9] text-[20px] leading-[1.7]">
              We are at the forefront of AI chatbot development,
              revolutionizing the way businesses engage with their
              customers.
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#3A3A3A] mt-[92px]"></div>

        <div className="flex items-center justify-between mt-[56px]">
          
          <div className="flex items-center gap-[16px]">
            {["Instagram", "LinkedIn", "Twitter", "Github"].map(
              (item, index) => (
                <button
                  key={index}
                  className="
                    h-[52px]
                    px-[26px]
                    rounded-full
                    border
                    border-[#D9D9D9]
                    text-white
                    text-[18px]
                    font-medium
                  "
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              border
              border-[#D9D9D9]
              rounded-full
              h-[52px]
              w-[840px]
            "
          >
            <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
              <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
            </div>

            <p className="text-white text-[18px]">
              Rotar AI. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;