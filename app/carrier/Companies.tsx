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
  return (
    <div className="flex items-center justify-center gap-x-6 mt-8">
      {companies.map((company) => (
        <div
          id={company.name}
          key={company.name}
          className="relative transform transition-transform duration-400 hover:scale-110"
        >
          <a href={company.url} target="_blank" rel="noreferrer">
            <Image
              className="w-40 cursor-pointer"
              src={company.logo}
              alt={company.name}
            />
          </a>
        </div>
      ))}
    </div>
  );
};
