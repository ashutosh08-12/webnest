import React from "react";

const HeroSection = () => {
  return (
    <section className="max-w-[1390px] px-6 pb-10 ml-[60px]">
      <div className="bg-white rounded-[42px] p-8">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-8 items-start ">
          <div className="mt-10">
           <div className="relative w-fit">
  <img
    src="/public/highlight-shape.png"
    alt=""
    className="absolute bottom-[6px] top-16 w-[550px] z-0"
  />

  <div className="relative z-10">
    <h1 className="font-inter font-medium text-[58px] leading-[1.15] tracking-[0px] text-black">
      Website Development
      <br />
      & Designing for
      <br />
      Business Growth
    </h1>
  </div>

  <div className="absolute right-[40px] bottom-[18px] w-[86px] h-[54px] rounded-full bg-white border border-[#D9D9D9] flex items-center px-1 z-20 shadow-sm">
    <div className="w-[44px] h-[44px] rounded-full bg-black"></div>
  </div>
</div>

            <p className="mt-12 font-generalSans font-normal text-[18px] leading-[150%] tracking-[0px] text-[#1D1D21]">
              Embrace AI chatbot technology in a GPT-4-supported <br />
              communication tool to help your customers,
              empower your <br /> team, and reduce your workload.
            </p>

            <div className="mt-12">
  <img
    src="/public/Card.png"
    alt="Guide Card"
    className="w-[610px] h-[258px] object-contain"
  />
</div>
          </div>

          <div>
            <div
  className="
    w-full
    h-full
    rounded-[30px]
    border-[8px]
    border-[#EDCF8F]
    bg-white
    px-[28px]
    pt-[26px]
    pb-[24px]
  "
>
  <h2 className="font-hkGrotesk font-bold text-[20px] leading-[24px] tracking-[0.2px]">
    You can start with just one click.
  </h2>

  <div className="mt-[15px]">
    <div>
      <label className="block font-inter font-medium text-[14px] text-[#60758A] mb-[10px]">
        Name
      </label>

      <input
        type="text"
        placeholder="Name"
        className="
          w-full
          h-[52px]
          rounded-[8px]
          border
          border-[#C8D0DB]
          bg-[#F3F3F3]
          px-[18px]
          text-[14px]
          outline-none
          placeholder:text-[#60758A]
        "
      />
    </div>

    <div className="grid grid-cols-2 gap-[16px] mt-[18px]">
      <div>
        <label className="block font-inter font-medium text-[14px] text-[#60758A] mb-[10px]">
          Email
        </label>

        <input
          type="email"
          placeholder="Email"
          className="
            w-full
            h-[52px]
            rounded-[8px]
            border
            border-[#C8D0DB]
            bg-[#F3F3F3]
            px-[18px]
            text-[14px]
            outline-none
            placeholder:text-[#60758A]
          "
        />
      </div>

      <div>
        <label className="block font-inter font-medium text-[14px] text-[#60758A] mb-[10px]">
          Phone No
        </label>

        <input
          type="text"
          placeholder="Phone No"
          className="
            w-full
            h-[52px]
            rounded-[8px]
            border
            border-[#C8D0DB]
            bg-[#F3F3F3]
            px-[18px]
            text-[14px]
            outline-none
            placeholder:text-[#60758A]
          "
        />
      </div>
    </div>

    <div className="mt-[18px]">
      <label className="block font-inter font-medium text-[14px] text-[#60758A] mb-[10px]">
        Service
      </label>

      <div className="relative">
        <select
          className="
            w-full
            h-[52px]
            rounded-[8px]
            border
            border-[#C8D0DB]
            bg-[#F3F3F3]
            px-[18px]
            text-[14px]
            appearance-none
            outline-none
            text-[#60758A]
          "
        >
          <option>Service</option>
        </select>

        <div className="absolute right-[18px] top-1/2 -translate-y-1/2 text-[14px] text-[#183B56]">
          ▼
        </div>
      </div>
    </div>

    <div className="flex justify-end mt-[40px]">
      <button
        className="
          h-[46px]
          px-[24px]
          rounded-full
          bg-[#00F15A]
          flex
          items-center
          justify-center
          gap-[10px]
          font-inter
          font-semibold
          text-[16px]
          text-black
        "
      >
        Submit

        <span className="text-[20px]">
                ↗
              </span>
      </button>
    </div>
  </div>
</div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="relative overflow-hidden bg-[#B8F2CF] rounded-[34px] p-7 h-[180px]">
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
                </div>

                <div className="relative z-10">
                  <h2 className="text-[68px] font-light leading-none">
                    + 500
                  </h2>

                  <p className="text-[18px] mt-3 leading-[1.5] max-w-[260px]">
                    Big companies use Rotar AI for
                    their services
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-black rounded-[34px] p-7 h-[180px] text-white">
                <div className="absolute top-0 left-0 w-[180px] h-[180px] bg-white/10 rounded-full blur-[20px]"></div>

                <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-white/10 rounded-full blur-[20px]"></div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex gap-2 text-[26px]">
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                  </div>

                  <h2 className="text-[34px] leading-[1.2] font-light">
                    AI-driven
                    <br />
                    customer service
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;