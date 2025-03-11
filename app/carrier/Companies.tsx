"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CompaniesProps {
  companies: {
    name: string;
    logo: StaticImageData;
    url: string;
  }[];
}
export const Companies = ({ companies }: CompaniesProps) => {
  const addButton = (companyName: string, url: string) => {
    const company = document.getElementById(companyName);
    if (company && !document.getElementById(`button${companyName}`)) {
      company.innerHTML += `
        <a href=${url} target="_blank" rel="noopener noreferrer">
          <button id=button${companyName} class="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white w-32 h-10 text-base font-serif rounded-md">Learn more</button>
        </a> `;
    }
  };

  const removeButton = (companyName: string) => {
    const button = document.getElementById(`button${companyName}`);
    if (button) {
      button.remove();
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-6 mt-8">
      {companies.map((company) => (
        <div
          id={company.name}
          key={company.name}
          className="relative transform transition-transform duration-400 hover:scale-110"
          onMouseEnter={() => addButton(company.name, company.url)}
          onMouseLeave={() => removeButton(company.name)}
        >
          <Image
            className="w-40 cursor-pointer"
            src={company.logo}
            alt={company.name}
          />
        </div>
      ))}
    </div>
  );
};
