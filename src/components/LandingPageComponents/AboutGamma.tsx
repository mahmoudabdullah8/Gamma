"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";
import AboutImage from "@/../public/Img/About.png";
import AboutImage2 from "@/../public/Img/About2.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AboutGamma = () => {
  const t = useTranslations("HomePage");

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".AboutOne",
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
          start: "top 100%", // Trigger when the element reaches 80% of the viewport
          toggleActions: "play none none none", // Play the animation only once
        },
      }
    );
  }, []);

  return (
    <div
      className=" AboutOne w-10/12 my-10 flex    flex-col lg:flex-row md:w-11/12 gap-10 lg:gap-0
     lg:w-11/12 xl:w-9/12 custom:w-10/12  justify-center  items-center     
     lg:justify-between lg:items-start m-auto"
    >
      <div className=" flex flex-col lg:w-[40%] md:w-[80%]  items-center text-center lg:text-start lg:items-start">
        <span
          className=" rtl:right-3  ltr:left-3 relative mb-[20px] 
        before:-top-[11px]   rtl:before:rtl:left-[8px]   ltr:before:ltr:right-[8px] 
         ltr:before:right-[8px]   before:relative before:inline-block 
        before:h-[1px] before:w-[38px]  before:border-[1.5px]
         before:border-[#0d738dc9] text-[17px] sm:text-[20px] font-bold"
        >
          {t("GammaAsset")}
        </span>
        <span className=" w-full sm:w-3/4  lg:w-full text-[#6E6E6E]  text-[14px] sm:text-[16px] font-bold">
          {t("Platform")}
        </span>
      </div>
      <div className=" relative flex flex-col w-[60%]   justify-start  items-end">
        <Image
          src={AboutImage2}
          className="  absolute -z-30 md:ltr:top-[60px]  md:rtl:top-[60px] md:ltr:right-[4rem] md:rtl:left-[4rem] md:top-[5rem]"
          alt="No image available"
          loading="lazy"
        />
        <Image
          src={AboutImage}
          className=" rounded-lg shadow-lg"
          alt="No image available"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutGamma;
