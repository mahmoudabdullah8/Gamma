"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AssetBackground from "../../../public/Img/GetAssetChart.png";
import GammaSlider from "./GammaSlider";

const GammaVideos = () => {
  const t = useTranslations("HomePage");
  return (
    <section
      className="        w-full p-1   rounded-xl
 
 
     m-auto  
"
    >
      <div
        className="
         text-[18px] text-wrap overflow-hidden
         sm:w-10/12 md:w-10/12 
    custom:w-9/12
     lg:w-11/12 
           w-fit rtl:right-3  ltr:left-3 relative mb-[20px] m-auto
          before:-top-[11px]   rtl:before:rtl:left-[8px]   ltr:before:ltr:right-[8px] 
          ltr:before:right-[8px]   before:relative before:inline-block 
          before:h-[1px] before:w-[38px]  before:border-[1.5px]
          before:border-[#0d738dc9] sm:text-[24px] font-bold"
      >
        {t("CapitalTitle")}
      </div>
      <div className=" mx-2 sm:mx-[20px] lg:mx-0 xl:mx-[30px]  ">
        <GammaSlider/>
      </div>
     
    </section>
  );
};

export default GammaVideos;
