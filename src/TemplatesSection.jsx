import React from "react";

const templates = [
  {
    title: "Chatbot for Marketing",
    description:
      "Provide recommendations and process transactions in a chat.",
    image: "/public/template-card-1.png",
  },
  {
    title: "Chatbot for HR",
    description:
      "Find talent and interact with candidates in an innovative way",
    image: "/public/template-card-2.png",
  },
  {
    title: "Chatbot for Marketing",
    description:
      "optimise your onboarding process and give your employee satisfaction",
    image: "/public/template-card-3.png",
  },
];

const categories = [
  "E- Commerce",
  "Education",
  "Health Care",
  "Financial",
  "HR",
  "Tourism",
];

const TemplatesSection = () => {
  return (
    <section className="max-w-[1360px] mx-auto mt-10 overflow-hidden">
      <div className="flex gap-[34px]">
        
        <div className="w-[460px] pt-[40px] shrink-0">
          
          <h2 className="text-[64px] leading-[150%] tracking-normal font-medium text-black">
            Use{" "}
            <span className="bg-[#B8F2CF] px-[18px] rounded-[24px]">
              templates
            </span>
            <br />
            to get started
            <br />
            your project
          </h2>

          <div className="flex flex-wrap gap-[14px] mt-[60px] max-w-[430px]">
            {categories.map((item, index) => (
              <button
                key={index}
                className="
                  h-[48px]
                  px-[18px]
                  rounded-full
                  leading-[150%]
                  border
                  border-[#2F2F2F]
                  text-[18px]
                  text-[#1F1F1F]
                  font-medium
                "
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-[18px] overflow-hidden">
          {templates.map((item, index) => (
            <div
              key={index}
              className="
                w-[344px]
                bg-[#F5F5F5]
                rounded-[40px]
                p-[18px]
                shrink-0
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[292px] object-cover rounded-[28px]"
              />

              <div className="mt-[18px]">
                <h3 className="text-[24px] font-semibold leading-[150%] text-[#232323]">
                  {item.title}
                </h3>

                <p className="mt-[12px] text-[18px] leading-[150%] text-[#6B6B6B] min-h-[86px]">
                  {item.description}
                </p>

                <button className="bg-black w-full text-white rounded-full h-[48px] px-[24px] flex items-center justify-center gap-3 text-[16px]">
                  Try template for free

                  <span className="text-[22px]">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;