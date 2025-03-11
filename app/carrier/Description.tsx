import React from "react";

interface DescriptionProps {
  description: {
    title: string;
    text: string;
  };
}

export const Description = ({ description }: DescriptionProps) => {
  return (
    <div style={{ padding: "5% 25% 0 25%" }} className="text-center">
      <p className="text-white text-6xl font-serif">{description.title}</p>
      <p className="text-white text-base pt-8 font-serif">{description.text}</p>
    </div>
  );
};
