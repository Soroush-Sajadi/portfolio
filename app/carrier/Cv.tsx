import React from "react";

interface CvProps {
  cv: {
    frontend: { title: string; technologies: string[] };
    backend: { title: string; technologies: string[] };
    tools: { title: string; technologies: string[] };
  };
}

export const Cv = ({ cv }: CvProps) => {
  return (
    <div className="flex align-center justify-center gap-40 mt-8 mb-24">
      <div className="column">
        <p className="text-[2rem] font-serif">{cv.frontend.title}</p>
        <div className="border-b-2 w-full	mb-4"></div>
        <ul>
          {cv.frontend.technologies.map((item) => (
            <li key={item} className="font-serif">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <p className="text-[2rem] font-serif">{cv.backend.title}</p>
        <div className="border-b-2 w-full	mb-4"></div>
        <ul>
          {cv.backend.technologies.map((item) => (
            <li key={item} className="font-serif">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <p className="text-[2rem] font-serif">{cv.tools.title}</p>
        <div className="border-b-2 w-full	mb-4"></div>
        <ul>
          {cv.tools.technologies.map((item) => (
            <li key={item} className="font-serif">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
