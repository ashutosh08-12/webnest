import React from "react";

const CTASection = () => {
  return (
    <section className="max-w-[1360px] h-[468px] mx-auto mt-10">
      <div className="relative w-full ">
        <img
          src="/cta-bg.png"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 px-[58px] flex flex-col justify-between">
    <div>
    <h2 className=" pt-[40px] text-[64px] leading-[150%] tracking-[0px] font-medium text-[#04132A]">
      Take control of your productivity
      <br />
      with a GPT-4 chatbot now
    </h2>
    <p className="mt-[48px] text-[18px] leading-[150%] text-[#163A3D]">
      Transform your Customer Service with Rotar&apos;s AI and
      <br />
      GPT-4 Powered Chatbot Solution. Try it free now.
    </p>
  </div>
  <div className="flex justify-end mb-[200px]">
    <div className="flex items-center gap-[18px]">
            <button className="bg-black text-white rounded-full h-[56px] w-[199px] px-[24px] flex items-center gap-3 text-[18px]">
                  Book a Demo

                  <span className="text-[22px]">
                    ↗
                  </span>
                </button>

      <button className="h-[56px] px-[34px] w-[199px] rounded-full border border-black text-black flex items-center gap-4 text-[16px] font-medium">
              Contact Us

              <span className="text-[18px]">
                📞
              </span>
            </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default CTASection;