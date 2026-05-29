import React from "react";

const CompaniesStrip = () => {
  const companies = [
    "Company",
    "Company",
    "Company",
    "Company",
    "Company",
    "Company",
  ];

  return (
    <div className="flex items-center justify-between mb-5 px-8">
      {companies.map((item, index) => (
        <div
          key={index}
          className="text-[32px] font-semibold text-[#8A8A8A]"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CompaniesStrip;