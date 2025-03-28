import React from "react";
import { carrier } from "@/app/db";
import { Description } from "@/app/carrier/Description";
import { Companies } from "@/app/carrier/Companies";
import { Cv } from "@/app/carrier/Cv";
import { DownloadCV } from "./DownloadCV";

function PageProfession() {
  const { description, companies, cv } = carrier;
  return (
    <div id="carrier">
      <Description description={description} />
      <Companies companies={companies} />
      <Cv cv={cv} />
      <DownloadCV />
    </div>
  );
}

export default PageProfession;
