
import React from "react";

const TestimonialSection = () => {
  return (
    <section className="max-w-[1360px] mx-auto mt-10">
      <div className="bg-[#ECEAE6] rounded-[16px] overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="w-[910px] bg-white rounded-bl-[16px] rounded-tr-[16px] px-[48px] py-[30px]">
            <h2 className="font-inter font-medium text-[64px] leading-[1.5] tracking-[-2px] text-black">
              What top-tier companies
              <br />
              tell about our product
            </h2>
          </div>

          <div className="w-[420px] h-[230px] rounded-bl-[42px] px-[34px] py-[48px]">
            <p className="text-[#262626] text-[18px] leading-[1.5] font-medium">
              Join the growing number of businesses
              and companies that have experienced the
              transformative impact of our chatbot
              services.
            </p>
          </div>
        </div>

        <div className="flex gap-[26px] px-[30px] pb-[28px] mt-[px]">
          <div className="relative w-[594px] h-[534px] mt-[20px]">
            <img
              src="/public/testimonial-left.png"
              alt="testimonial"
              className="w-full h-full object-cover rounded-[42px]"
            />
          </div>
          <div className="bg-white p-5 rounded-tr-[16px] rounded-b-[16px]">
          <div className="flex-1 flex flex-col justify-between">
            <div className="relative">
              <img
                src="/public/testimonial-right.png"
                alt="shape"
                className="w-full h-[378px] object-cover"
              />

              <div className="absolute inset-0 px-[24px] py-[22px] flex flex-col">
                <div className="w-fit border border-black rounded-full px-[18px] py-[10px] flex items-center gap-3 bg-transparent">
                  <span className="text-[18px]">❝</span>

                  <span className="text-[18px] font-medium">
                    Client Testimonial
                  </span>
                </div>

                <p className="mt-[34px] text-[34px] leading-[1.45] font-normal text-black max-w-[640px]">
                  I was amazed by the level of assistance I
                  received from the AI Chatbot provided by
                  ROTAR AI. It quickly understood my
                  questions and provided accurate and helpful
                  responses.
                </p>
              </div>
            </div>

            <div className="mt-[26px]">
              <div className="w-full h-[1px] bg-[#D4D4D4]"></div>
              <div className="flex items-center justify-between mt-[32px]">
                <button className="w-[82px] h-[46px] rounded-full border border-black text-[28px] flex items-center justify-center">
                  1 / 4
                </button>
                <button className="bg-black text-white rounded-full h-[46px] px-[24px] flex items-center gap-3 text-[18px]">
                  See more testimoni

                  <span className="text-[22px]">
                    ↗
                  </span>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;