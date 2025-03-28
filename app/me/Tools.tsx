import React from "react";
import { aboutMe } from "@/app/db";

export const Tools = () => {
  const { tools } = aboutMe;

  return (
    <div className="">
      <div>
        <h4 className="mt-12 text-3xl font-semibold text-blue-500">
          Technologies and Tools
        </h4>
        <p className="mt-4 text-xl text-justify text-gray-500">
          Using a combination of cutting-edge technologies and reliable
          open-source software I build user-focused, performant apps and
          websites for smartphones, tablets, and desktops.
        </p>
      </div>
      <div className="flex flex-wrap mt-8 flex flex-wrap justify-center">
        {tools.map((tool) => (
          <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
            <img
              src={tool.url}
              alt="tool"
              className="w-12 h-12 object-contain"
            />
            <p className="text-gray-600 text-sm font-semibold ml-2">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
