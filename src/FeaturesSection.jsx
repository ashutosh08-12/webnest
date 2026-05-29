// FeaturesSection.jsx

import React from "react";

const FeaturesSection = () => {
  return (
    <section className="max-w-[1360px] mx-auto mt-10">
      <div className="bg-[#F3F3F3] rounded-[42px] px-[48px] pt-[42px] pb-[54px]">
        
        <div className="grid grid-cols-[1fr_652px] gap-[18px]">
          
          <div>
            
            <div className="relative">
              <h2 className="text-[64px] leading-[150%] tracking-[0px] font-medium text-black">
                Deliver a high-
                <br />
                quality{" "}
                <span className="bg-[#F1DEB2] px-[18px] rounded-[22px] py-[5px] rounded-bl-none">
                  customer
                </span>
                <br />
                <span className="bg-[#F1DEB2] px-[18px] rounded-[22px] py-[6px] rounded-tr-none">
                  experience
                </span>
              </h2>
            </div>

            <p className="mt-[34px] text-[18px] leading-[150%] text-[#363636] max-w-[509px]">
              Embrace AI chatbot technology in a GPT-4-supported
              communication tool to help your customers,
              empower your team, and reduce your workload.
            </p>

            <div className="relative mt-[42px] w-[613px] h-[436px] overflow-hidden rounded-[40px] bg-[#EFEFEF]">
              
              <img
                src="/integration-bg.png"
                alt="Integration Background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <img
                src="/notion-icon.png"
                alt=""
                className="absolute left-[36px] top-[42px] w-[113px] h-[113px]"
              />

              <img
                src="/evernote-icon.png"
                alt=""
                className="absolute left-[342px] top-[66px] w-[80px] h-[80px]"
              />

              <img
                src="/meet-icon.png"
                alt=""
                className="absolute left-[170px] top-[128px] w-[148px] h-[148px]"
              />

              <img
                src="/teams-icon.png"
                alt=""
                className="absolute right-[46px] top-[136px] w-[96px] h-[96px]"
              />

              <div className="absolute left-[26px] bottom-[28px]">
                <h3 className="text-[24px] font-semibold text-[#232323] leading-[130%]">
                  Automate your workflow with our integrations
                </h3>

                <p className="mt-[18px] text-[18px] leading-[150%] text-[#666666] max-w-[563px]">
                  Connect Rotar AI with your customer service,
                  sales, marketing, and recruitment tools using
                  our user-friendly API, webhooks, or Zapier
                  integration.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_320px] gap-[18px]">
            
            <div className="flex flex-col gap-[18px]">
              
              <div className="bg-[#ECECEC] rounded-[34px] p-[24px] h-[496px]">
                
                <div className="flex items-center justify-end gap-3 h-[32px] ">
                  <div className="w-[32px] h-[32px] rounded-full bg-[#D3D3D3]"></div>

                  <span className="text-[16px] font-medium text-[#232323]">
                    James Kokolomel
                  </span>
                </div>

                <div className="flex justify-end mt-[12px]">
                  <div className="bg-[#00F15A] rounded-[8px] px-[14px] py-[10px] text-[12px] leading-[120%] font-normal">
                    I&apos;ve forgotten my password
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-[20px]">
  <div className="w-[34px] h-[34px] rounded-full bg-black flex items-center justify-center">
    <img
      src="/robot.png"
      alt="Rotar Robot"
      className="w-[32px] h-[32px] object-contain"
    />
  </div>

  <span className="text-[16px] font-medium text-[#232323] leading-[150%]">
    Rotar Robot
  </span>
</div>

                <div className="mt-[14px] bg-[#F5F5F5] rounded-[10px] p-[22px]">
                  <p className="text-[12px] leading-[100%] text-[#666666] font-normal">
                    No worries, we&apos;ve all been in a melancholy
                    situation like that. To reset your password,
                    go to the login page and click on Forgot
                    Password? Then, enter the email address and
                    follow it.
                  </p>
                </div>

                <div className="mt-[36px]">
                  <h3 className="text-[24px] leading-[130%] font-semibold text-[#232323]">
                    Boost conversations
                    <br />
                    96% with AI
                  </h3>

                  <p className="mt-[px] text-[18px] leading-[150%] text-[#666666]">
                    Our AI-powered chatbots and
                    automation tools are here to help.
                  </p>
                </div>
              </div>

              <div className="bg-black rounded-[34px] p-[28px] h-[360px] relative overflow-hidden">
                
                <h3 className="text-white text-[24px] leading-[130%] font-semibold">
                  Centralize Your
                  <br />
                  Communication
                </h3>

                <p className="mt-[px] text-gray-500 text-[18px] leading-[150%] text-[#D1D1D1] max-w-[270px] tracking-normal">
                  Easily respond to chats from all
                  of your channels in one overview.
                </p>
<div className="absolute inset-0 flex items-center justify-center mt-[86px]">

  <div className="absolute top-[95px] left-[30px] w-[58px] h-[58px] rounded-full bg-[#1F1F1F] flex items-center justify-center">
    <img
      src="/whatsapp.png"
      alt="whatsapp"
      className="w-[28px] h-[28px] object-contain"
    />
  </div>

  <div className="absolute top-[94px] right-[30px] w-[51px] h-[51px] rounded-full bg-[#1F1F1F] flex items-center justify-center">
    <img
      src="/instagram.png"
      alt="instagram"
      className="w-[28px] h-[28px] object-contain"
    />
  </div>

  <div className="absolute bottom-[28px] left-[48px] w-[55px] h-[55px] rounded-full bg-[#1F1F1F] flex items-center justify-center">
    <img
      src="/messenger.png"
      alt="messenger"
      className="w-[28px] h-[28px] object-contain"
    />
  </div>

  <div className="absolute bottom-[36px] right-[48px] w-[48px] h-[48px] rounded-full bg-[#1F1F1F] flex items-center justify-center">
    <img
      src="/twitter.png"
      alt="twitter"
      className="w-[28px] h-[28px] object-contain"
    />
  </div>

  <div className="w-[69px] h-[69px] mt-14 rounded-full bg-[#1F1F1F] flex items-center justify-center z-10">
    <img
      src="/center-logo.png"
      alt="center"
      className="w-[38px] h-[38px] object-contain"
    />
  </div>

</div>
              </div>
            </div>

            <div className="flex flex-col gap-[18px]">
              
              <div className="bg-[#B8F2CF] rounded-[34px] p-[20px] h-[374px] relative overflow-hidden">
                
                <h3 className="text-[24px] leading-[130%] font-semibold text-[#232323]">
                  Always accessible
                  <br />
                  with our live chat.
                </h3>

                <p className="mt-[6px] text-[18px] leading-[150%] text-[#4A4A4A]">
                  Enhance Communication with
                  Real-Time Live Chat.
                </p>

                <div className="mt-[16px] flex flex-col gap-[14px]">
                  
                  <div className="bg-[#F4F4F4] rounded-[16px] p-[16px] h-[95px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[34px] h-[34px] rounded-full bg-[#D0D0D0]"></div>

                      <div className="w-[120px] h-[24px] rounded-full bg-[#E2E2E2]"></div>
                    </div>

                    <div className="mt-[10px] w-full h-[24px] rounded-full bg-[#E2E2E2]"></div>
                  </div>

                  <div className="bg-[#F4F4F4] rounded-[16px] p-[16px] h-[95px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[34px] h-[34px] rounded-full bg-[#C9B98D]"></div>

                      <div className="w-[120px] h-[24px] rounded-full bg-[#E2E2E2]"></div>
                    </div>

                    <div className="mt-[10px] w-full h-[24px] rounded-full bg-[#E2E2E2]"></div>
                  </div>
                </div>

                <div className="absolute bottom-[-50px] left-0 w-full h-[120px] bg-white/20 blur-[70px]"></div>
              </div>

              <div className="bg-[#00F15A] rounded-[34px] p-[28px] mt-10">

  <div className="relative mx-auto w-[200px] h-[200px]">

    <div className="absolute inset-0 rounded-full border-[20px] border-[#EDEDED]"></div>

    <div
      className="absolute inset-0 rounded-full border-[20px] border-transparent border-t-black border-r-black rotate-[12deg]"
      style={{
        clipPath: "inset(0 0 45% 45%)",
      }}
    ></div>

    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h2 className="text-[42px] font-bold leading-none">
        12,5%
      </h2>

      <p className="mt-[13px] text-[12px] tracking-[4px] font-semibold text-center leading-[18px]">
        CONVERSATION
        <br />
        EMPLOYEE
      </p>
    </div>
  </div>

  <div className="mt-[30px]">
    <h3 className="text-[24px] leading-[130%] font-semibold text-[#232323]">
      Gain valuable insights
      <br />
      from your audience
    </h3>

    <p className="mt-[16px] text-[18px] leading-[150%] text-[#232323]">
      Statistics provide valuable
      insights into how customers
      interact with Rotar AI.
    </p>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;