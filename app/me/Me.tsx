import React from "react";
import Image from "next/image";
import { aboutMe } from "@/app/db";
import AboutMe from "@/app/statics/AboutMe.jpeg";
import { Tools } from "@/app/me/Tools";

export const Me = async () => {
  //const meData = await getMeData();
  const { description } = aboutMe;
  return (
    <div>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          About Me
        </h2>
        <div>
          <div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p className="mt-4 text-xl text-justify text-gray-500">
              I'm a self-taught web developer and Mobile App Developer with
              experience in designing new features from ideation to production,
              implementation of wireframes and design flows into high
              performance software applications. I take into consideration the
              user experience while writing reusable and efficient code. I
              passionately combine good design, technology, and innovation in
              all my projects, which I like to accompany from the first idea to
              release.Currently, I'm focused on the backend development.
            </p>
          </div>
        </div>
        <Tools />
      </div>
    </div>
  );
};
