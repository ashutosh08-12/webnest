import React from "react";

const AdvantageSection = () => {
  return (
    <section className="max-w-[1360px] mx-auto mt-10">
      <div className="bg-[#F3F3F3] rounded-[42px] overflow-hidden">
        
        <div className="grid grid-cols-[430px_1fr]">
          
          <div className="bg-[#ECEAE6] rounded-br-[42px] px-[48px] pt-[82px] pb-[68px]">
            
            <p className="text-[#1F1F1F] text-[18px] leading-[150%] max-w-[320px] font-normal">
              Throughout your customer&apos;s entire buying
              journey, Rotar AI allow you to delight them
              at every step of the way, from their first
              visit to the final purchase.
            </p>

            <button className="bg-black text-white rounded-full mt-[30px] h-[56px] w-full flex items-center gap-4 justify-center gap-3 text-[18px]">
                  Get Started

                  <span className="text-[22px]">
                    ↗
                  </span>
                </button>
          </div>

          <div className="px-[44px] pt-[48px] ">
            
            <div className="rounded-tl-[24px]">
              <h2 className="text-[64px] leading-[150%] tracking-[0px] font-medium text-black">
                
                <span className="bg-[#B8F2CF] px-[18px] rounded-[24px] rounded-br-none  py-[5px]">
                  Redefining
                </span>{" "}
                Conversations

                <br />

                and{" "}
                <span className="bg-[#B8F2CF] px-[18px] rounded-[22px] rounded-tl-none py-[6px]">
                  Enhancing
                </span>{" "}
                User

                <br />

                experience
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[480px_1fr] gap-[14px] px-[32px] pb-[32px] mt-[24px]">
          
          <div className="pt-[6px]">
            
            <div className="bg-[#F1DEB2] rounded-[28px] px-[28px] py-[26px]">
              <h3 className="text-[26px] font-semibold text-[#232323]">
                Engage
              </h3>

              <p className="mt-[16px] text-[18px] leading-[1.7] text-[#4E4E4E]">
                Reach out to visitors proactively using personalized
                chatbot greetings. Turn website visits into sales
                opportunities.
              </p>
            </div>

            <div className="mt-[38px] px-[18px]">
              <h3 className="text-[26px] font-semibold text-[#232323]">
                Nurture
              </h3>

              <p className="mt-[16px] text-[18px] leading-[1.7] text-[#777777]">
                Lead customers to a sale through recommended
                purchases and tailored offerings.
              </p>
            </div>

            <div className="mt-[48px] px-[18px]">
              <h3 className="text-[26px] font-semibold text-[#232323]">
                Qualify
              </h3>

              <p className="mt-[16px] text-[18px] leading-[1.7] text-[#777777]">
                Generate and qualify prospects automatically.
                Transfer high-intent leads to your sales reps in
                real time to shorten the sales cycle.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/advantage-devices.png"
              alt="Devices"
              className="w-full h-[548px] object-cover rounded-[34px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;