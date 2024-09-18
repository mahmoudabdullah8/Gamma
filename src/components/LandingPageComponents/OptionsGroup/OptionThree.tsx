"use client";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const OptionThree = () => {
  const t = useTranslations("HomePage");

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".optionOne",
      {
        opacity: 0,
        x: 40,
      },
      {
        opacity: 1, // Final state
        x: 0, // Move to original position
        duration: 0.6,
        delay: 0.3,

        scrollTrigger: {
          trigger: ".optionOne", // The element to trigger the animation
          start: "top 80%", // Trigger when the element reaches 80% of the viewport
          toggleActions: "play none none none", // Play the animation only once
        },
      }
    );
    gsap.fromTo(
      ".optionTwo",
      {
        opacity: 0,
        x: 40,
        delay: 0.4,
      },
      {
        opacity: 1, // Final state
        delay: 0.5,
        x: 0, // Move to original position
        duration: 0.5,
        scrollTrigger: {
          trigger: ".Two", // The element to trigger the animation
          start: "top 80%", // Trigger when the element reaches 80% of the viewport
          toggleActions: "play none none none", // Play the animation only once
        },
      }
    );
    gsap.fromTo(
      ".optionThree",
      {
        opacity: 0,
        x: 40,
        delay: 0.6,
      },
      {
        opacity: 1, // Final state
        delay: 0.7,
        x: 0, // Move to original position
        duration: 0.5,
        scrollTrigger: {
          trigger: ".optionThree", // The element to trigger the animation
          start: "top 80%", // Trigger when the element reaches 80% of the viewport
          toggleActions: "play none none none", // Play the animation only once
        },
      }
    );
  }, []);
  return (
    <section
      className="  

     gap-6  grid md:grid-cols-1 lg:grid-cols-2
     lg:justify-start lg:items-start justify-items-center lg:justify-items-start
    "
    >
      <div className="optionOne">
        <span className="  text-[16x] sm:text-[18px] font-bold">
          {t("StartestateTitle")}
        </span>
        <p className=" mt-3 text-[14px] sm:text-[16px] text-[#6E6E6E]">
          {t("StartestateBody")}
        </p>
      </div>
      <article
        className="  shadow-sm    w-full  bg-gradient-Block   bg-[#E9F4F6] flex
       flex-col 
      
      gap-4 rounded-2xl py-[50px] px-4"
      >
        <div
          className=" optionOne shadow-lg bg-white 
      md:w-[600px]
        custom:w-[521px]  
        lg:w-[400px]  
        xl:w-[521px]  
   
        md:h-fit
        
        rounded-lg p-4 gap-2 "
        >
          <span className=" text-[16px] font-bold">
            {t("estateTitleSectionOne")}
          </span>
          <p className=" mt-3 text-[12px] xl:text-[14px] text-FontColor">
            {t("estateBodySectionOne")}
          </p>
        </div>
        <div
          className="optionTwo shadow-lg  md:-left-[50px] md:rtl:-right-[50px] relative bg-white
                 md:w-[600px] lg:w-[400px]  
        xl:w-[521px]  
        rounded-xl p-4 gap-2 "
        >
          <span className=" text-[16px] font-bold">
            {t("estateTitleSectionTwo")}
          </span>
          <p className=" mt-3 text-[14px] text-FontColor">
            {t("estateBodySectionTwo")}
          </p>
        </div>
        <div
          className="optionThree shadow-lg bg-white
          md:w-[600px]  lg:w-[400px]   xl:w-[521px]  rounded-xl p-4 gap-2 "
        >
          <span className=" text-[16px] font-bold">
            {t("estateTitleSectionThree")}
          </span>
          <p className=" mt-3 text-[14px] text-FontColor">
            {" "}
            {t("estateBodySectionThree")}
          </p>
        </div>
      </article>
    </section>
  );
};

export default OptionThree;


















