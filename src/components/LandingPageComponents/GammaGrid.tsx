"use client";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import CapitalSVG from "../../../public/Icons/CapitalSVG";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const GammaGrid = () => {
  const t = useTranslations("HomePage");

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".One",
      {
        opacity: 0,
        x: 40,
      },
      {
        opacity: 1, // Final state
        x: 0, // Move to original position
        duration: 0.6,
        scrollTrigger: {
          trigger: ".One", // The element to trigger the animation
          start: "top 80%", // Trigger when the element reaches 80% of the viewport
          toggleActions: "play none none none", // Play the animation only once
        },
      }
    );
    gsap.fromTo(
      ".Two",
      {
        opacity: 0,
        x: 40,
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
      <div className="  w-10/12 md:w-11/12 custom:w-10/12 lg:w-11/12 xl:w-10/12 my-10 flex flex-col gap-10 justify-center items-center lg:justify-between lg:items-start m-auto">
        <div className="w-fit rtl:right-3 ltr:left-3 relative mb-[20px] before:-top-[11px] rtl:before:rtl:left-[8px] ltr:before:ltr:right-[8px] ltr:before:right-[8px] before:relative before:inline-block before:h-[1px] before:w-[38px] before:border-[1.5px] before:border-[#0d738dc9] font-bold text-[18px] sm:text-[20px]">
          {t("CapitalTitle")}
        </div>
        <div className="One w-full grid lg:grid-cols-4 md:grid-cols-2 gap-[30px] sm:grid-cols-2 grid-cols-1 m-auto justify-center justify-items-center">
          <div className=" bg-[#ECF4F6] lg:p-3 rounded-2xl hover:shadow-lg shadow-md h-[200px] sm:w-[265px] sm:h-[253px] md:w-[320px] md:h-[240px] md:gap-2 lg:gap-2 flex flex-col text-[13px] p-4 lg:w-[230px] lg:h-[245px] xl:w-[265px] xl:h-[253px]">
            <CapitalSVG />
            <p className=" font-bold text-lg mt-6"> {t("CapitalTitle")}</p>
            <span className=" text-[#6E6E6E]">{t("Capitalbody")}</span>
          </div>
          <div className="Two bg-[#ECF4F6] lg:p-3 rounded-2xl hover:shadow-lg shadow-md h-[200px] sm:w-[265px] sm:h-[253px] md:w-[320px] md:h-[240px] md:gap-2 lg:gap-2 flex flex-col text-[13px] p-4 lg:w-[230px] lg:h-[245px] xl:w-[265px] xl:h-[253px]">
            <CapitalSVG />
            <p className=" font-bold text-lg mt-6"> {t("CapitalTitle")}</p>
            <span className=" text-[#6E6E6E]">{t("Capitalbody")}</span>
          </div>
          <div className=" One bg-[#ECF4F6] lg:p-3 rounded-2xl hover:shadow-lg shadow-md h-[200px] sm:w-[265px] sm:h-[253px] md:w-[320px] md:h-[240px] md:gap-2 lg:gap-2 flex flex-col text-[13px] p-4 lg:w-[230px] lg:h-[245px] xl:w-[265px] xl:h-[253px]">
            <CapitalSVG />
            <p className=" font-bold text-lg mt-6"> {t("CapitalTitle")}</p>
            <span className=" text-[#6E6E6E]">{t("Capitalbody")}</span>
          </div>
          <div className="Two bg-[#ECF4F6] lg:p-3 rounded-2xl hover:shadow-lg shadow-md h-[200px] sm:w-[265px] sm:h-[253px] md:w-[320px] md:h-[240px] md:gap-2 lg:gap-2 flex flex-col text-[13px] p-4 lg:w-[230px] lg:h-[245px] xl:w-[265px] xl:h-[253px]">
            <CapitalSVG />
            <p className=" font-bold text-lg mt-6"> {t("CapitalTitle")}</p>
            <span className=" text-[#6E6E6E]">{t("Capitalbody")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GammaGrid;
