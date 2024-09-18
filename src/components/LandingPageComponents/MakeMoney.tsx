"use client";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import CapitalSVG from "../../../public/Icons/CapitalSVG";
import MoneyOne from "../../../public/Icons/MoneyOne";
import MoneyTwo from "../../../public/Icons/MoneyTwo";
import MoneyThree from "../../../public/Icons/MoneyThree";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MakeMoney = () => {
  const t = useTranslations("HomePage");
 
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".Make",
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1, // Final state
        y: 0, // Move to original position
        duration: 0.6,
        scrollTrigger: {
          trigger: ".Make", // The element to trigger the animation
          start: "top 80%", // Trigger when the element reaches 80% of the viewport
          toggleActions: "play none none none", // Play the animation only once
        },
      }
    );
    gsap.fromTo(
      ".Two",
      {
        opacity: 0,
        y: 0,
        delay: 0.3,
      },
      {
        opacity: 1, // Final state
        x: 0, // Move to original position
        duration: 0.5,
        scrollTrigger: {
          trigger: ".Two", // The element to trigger the animation
          start: "top 80%", // Trigger when the element reaches 80% of the viewport
          toggleActions: "play none none none", // Play the animation only once
        },
      }
    );
  }, []);
  return (
    <>
      <div
        className="Make
        w-10/12 md:w-11/12  custom:w-10/12 lg:w-11/12 xl:w-10/12
      my-10 flex    flex-col    gap-10
   justify-center  items-center  lg:justify-between lg:items-start m-auto"
      >
        <div
          className="
          
           w-fit rtl:right-3  ltr:left-3 relative mb-[20px] 
          before:-top-[11px]   rtl:before:rtl:left-[8px]   ltr:before:ltr:right-[8px] 
          ltr:before:right-[8px]   before:relative before:inline-block 
          before:h-[1px] before:w-[38px]  before:border-[1.5px]
          before:border-[#0d738dc9] text-[16px] sm:text-[20px] font-bold "
        >
          {t("CapitalTitle")}
        </div>
        <div
          className="        lg:w-11/12 xl:w-full grid lg:grid-cols-3 md:grid-cols-2 gap-[30px] xl:gap-[50px] sm:grid-cols-2
         grid-cols-1  m-auto justify-center   justify-items-center "
        >
          <div
            className=" bg-gradient-Block lg:p-3 rounded-2xl
             hover:shadow-lg transition-all
          h-[200px]
      sm:w-[265px] sm:h-[253px]
          md:w-[320px] md:h-[240px] md:gap-2 lg:gap-2 flex flex-col  text-[14px] md:text-[15px] p-4
          lg:w-[280px] lg:h-[245px]
         xl:w-[360px]  xl:h-[242px]
             fd:w-[300px]
          "
          >
            <MoneyOne />

            <p className=" font-bold text-[16px] mt-6"> {t("CapitalTitle")}</p>
            <span className=" text-[#6E6E6E]">{t("Capitalbody")}</span>
          </div>
          <div
            className=" bg-gradient-Block lg:p-3 rounded-2xl
                       hover:shadow-lg transition-all 
               h-[200px]
      sm:w-[265px] sm:h-[253px]
          md:w-[320px] md:h-[240px] md:gap-2 lg:gap-2 flex flex-col text-[14px] md:text-[15px] p-4
          lg:w-[280px] lg:h-[245px]
           fd:w-[300px]
     xl:w-[360px]  xl:h-[242px]
          "
          >
            <MoneyTwo />

            <p className=" font-bold text-[16px] mt-6"> {t("CapitalTitle")}</p>
            <span className=" text-[#6E6E6E]">{t("Capitalbody")}</span>
          </div>
          <div
            className=" bg-gradient-Block lg:p-3 rounded-2xl
                   hover:shadow-lg transition-all
         h-[200px]
      sm:w-[265px] sm:h-[253px]
          md:w-[320px] md:h-[240px] md:gap-2 lg:gap-2 flex flex-col text-[14px] md:text-[15px] p-4
          lg:w-[280px] lg:h-[245px]
           xl:w-[360px]  xl:h-[242px]
               fd:w-[300px]
          "
          >
            <MoneyThree />

            <p className=" font-bold text-[16px] mt-6"> {t("CapitalTitle")}</p>
            <span className=" text-[#6E6E6E]">{t("Capitalbody")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeMoney;
