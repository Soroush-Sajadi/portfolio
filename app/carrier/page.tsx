import React from "react";
import { carrier } from "@/app/db";
import { Description } from "@/app/carrier/Description";
import { Companies } from "@/app/carrier/Companies";

function PageProfession() {
  const { description, companies } = carrier;
  return (
    <>
      <Description description={description} />
      <Companies companies={companies} />
    </>
  );
}

export default PageProfession;
