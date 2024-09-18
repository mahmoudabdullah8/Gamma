"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AssetBackground from "../../../public/Img/GetAssetChart.png"

const GetAsset = () => {
  const t = useTranslations("HomePage");
  return (
    <section
      className=" bg-gradient-GetAsset       w-full p-8   rounded-xl
 sm:w-10/12 md:w-10/12 
    custom:w-9/12
     lg:w-11/12 
     m-auto  
"
    >
      <div
        className="  
          grid md:grid-cols-1 lg:grid-cols-2
     lg:justify-start lg:items-start justify-items-center lg:justify-items-start"
      >
        <div>
          <span className="  text-[16x] sm:text-[18px] font-bold">
            {t("StartestateTitle")}
          </span>
          <p className=" mt-3 text-[14x] sm:text-[16px] text-[#6E6E6E]">
            {t("StartestateBody")}
          </p>
        </div>
       <div>
        <Image src={AssetBackground} alt="No image available" loading="lazy"/>
       </div>
      </div>
    </section>
  );
};

export default GetAsset;
