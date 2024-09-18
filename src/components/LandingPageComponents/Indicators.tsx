"use client";
import { useTranslations } from "next-intl";
import React from "react";
import "../../app/style.css";
import Background from "../../../public/Img/BackgroundSquare.png";
import Image from "next/image";
const Indicators = () => {
  const t = useTranslations("HomePage");
  return (
    <div
      className=" relative background shadow-lg  shadow-slate-400 transition-shadow 
        lg:h-[144px] content-center  rounded-xl text-center  text-white bg-gradient-Primary  
       w-10/12 md:w-10/12 
        custom:w-9/12
         lg:w-11/12  lg:p-0
        p-6
  my-10  grid 
  lg:grid-cols-4  
  sm:grid-cols-2  sm:p-6
   gap-10
justify-center  items-center  lg:justify-between lg:items-start m-auto"
    >
      {/* <Image className=" absolute z-0"  src={Background} alt="No image availabe" loading="lazy" /> */}
      <div
        className=" flex flex-col  
   
      
      "
      >
        <span className=" text-[20px] md:text-[26px]   font-[700]">+196</span>
        <span className=" text-md ">{t("Registered users")}</span>
      </div>
      <div className=" flex flex-col">
        <span className=" text-[20px] md:text-[26px]  font-[700]">USD 2.5M</span>
        <span className=" text-md ">{t("Real estate transactions")}</span>
      </div>
      <div className=" flex flex-col">
        <span className="text-[20px] md:text-[26px]   font-[700]">+19.5%</span>
        <span className=" text-md ">{t("Return on investment")}</span>
      </div>
      <div className=" flex flex-col">
        <span  className="   text-[20px] md:text-[26px]  font-[700]">+7</span>
        <span className=" text-md ">{t("Auditing companies")}</span>
      </div>
    </div>
  );
};

export default Indicators;

// before:w-[61px] before:h-[2px] before:border-[1px] before:relative before:right-[70%] before:top-[32px] before:rotate-90 before:bg-gradient-Primary
// before:border-Primary
