import React from "react";
import Image from "next/image";
import logo from "../../statics/logo.png";

export const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="Logo" width="60" height="40" />
    </div>
  );
};
