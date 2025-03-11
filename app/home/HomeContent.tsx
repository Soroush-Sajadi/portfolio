"use client";
import React from "react";
import Image from "next/image";
import Portrate from "../statics/portrate.png";

export const HomeContent = () => {
  return (
    <div className="bg-gray-950 md:flex justify-center">
      <div className="flex justify-center">
        <Image
          className="responsive-image"
          src={Portrate}
          alt="Face"
          width="60"
        />
      </div>
      <div className="w-h flex items-center justify-center">
        <div className="flow">
          <p className="text-6xl font-serif">My name is Soroush</p>
          <p className="text-1xl font-serif">
            I am a full-stack developer with a passion for creating beautiful
            and functional applications.
          </p>
        </div>
      </div>
    </div>
  );
};
