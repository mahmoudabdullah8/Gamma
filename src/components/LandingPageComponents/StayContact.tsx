"use client";
import React from "react";
import Container from "../Container";
import { useTranslations } from "next-intl";
import { Input } from "@mui/material";
import FormArrow from "../../../public/Icons/FormArrow";
import Email from "../../../public/Icons/Email";

const StayContact = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="  bg-gradient-GetAsset w-full py-10">
      <Container className="   justify-center items-center  text-center flex flex-col gap-4 ">
      <div className=" w-[80%] sm:w-[503px]">
      <h1 className=" text-[24px] font-bold">{t("StayInTouch")}</h1>
        <p className=" text[20px] text-FontColor">{t("newsletter")}</p>
        {/* Form  */}
        <form className="flex flex-col pt-3 md:py-8  " method="POST">
          <div className="flex flex-col pt-4 ">
            <div className="   bg-white relative flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-Primary">
              <span className="inline-flex items-center   border-gray-300 px-3 text-sm text-gray-500 shadow-sm">
                <Email />
              </span>

              <div className="relative mt-2 w-full">
                <input
                  id="email"
                  type="text"
                  className="text-lg  border-none peer block w-full appearance-none rounded-lg border
                   border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4  text-gray-900 focus:border-Primary 
                   focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <label
                  htmlFor="email"
                  className=" bg-transparent absolute top-2 ltr:left-1 rtl:right-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text 
                  select-none   px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
                  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
                  peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-Primary"
                >
               {t("enterEmail")}
                </label>
              </div>
              <span className="inline-flex items-center   border-gray-300 px-3 text-sm text-gray-500 shadow-sm">
                <FormArrow />
              </span>
            </div>
          </div>
        </form>
      </div>
      </Container>
    </div>
  );
};

export default StayContact;
