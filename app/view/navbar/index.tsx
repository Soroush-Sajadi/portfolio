import React from "react";
import { Pages } from "../pages";
import { Contacts } from "../contacts";

function Navbar() {
  return (
    <div className="flex justify-center bg-gray-950">
      <Pages />
      <div className="divide-y-8"></div>
    </div>
  );
}

export default Navbar;
