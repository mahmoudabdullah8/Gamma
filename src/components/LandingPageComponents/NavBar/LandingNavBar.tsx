"use client";
import React, { useState } from "react";
import { NavItems } from "../../../../utils/NavItems";
import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Logo from "../../../../public/Icons/Logo";
import LoginIcon from "../../../../public/Icons/loginIcon";
import SignUpIcon from "../../../../public/Icons/signUpIcon";
import LocaleSwitcher from "../../LocaleSwitcher/LocaleSwitcher";
import "./NavBar.css";
import HideButton from "./HideButton";
import { NewFee } from "../../../../utils/API";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LandingNavBar() {
  useGSAP(() => {
    gsap.from(".rect", {
      duration: 0.5,
      y: -100,
      transformOrigin: "50px 50px",
      opacity: 0,
    });
    gsap.from(".link1", {
      duration: 0.5,
      y: -100,
      delay: 0.5,
      transformOrigin: "50px 50px",
      opacity: 0,
    });
    gsap.from(".link2", {
      duration: 0.5,
      y: -100,
      delay: 0.4,
      opacity: 0,
    });
  });

  const [open, setOpen] = useState(false);
  const t = useTranslations("HomePage");
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <header className=" rect  font-semibold lg:overflow-hidden relative  h-[80px] flex justify-center items-center ">
      {/* Toggle button for mobile view */}
      <HideButton open={open} setOpen={setOpen} />

      {/* Nav links */}
      <div
        className={`   transition-all duration-500 ease-in-out overflow-hidden  md:flex  h-[600px] text-[20px]
          ${
            open
              ? " Show max-h-[500px]  opacity-100   bg-white   md:bg-inherit z-[10000000000000] "
              : "Hide max-h-0 opacity-0 md:opacity-100 md:max-h-full "
          } sm:mt-0 mt-4 shadow-lg md:shadow-none rounded-sm md:rounded-none
        items-center justify-around flex flex-col pb-4    gap-4 text-center 
        absolute bottom-0 left-0 transform translate-y-full w-full md:ml-4   
        md:pb-0 md:static md:transform-none md:flex-row md:items-center md:flex`}
      >
        <div
          className="  gap-4 sm:gap-[11px] lg:gap-4 left-0 flex flex-col  md:flex-row md:justify-start md:right-[28px] justify-start items-center top-3 
        md:top-0 relative md:w-[58%] lg:w-1/2"
        >
          <Logo width="80" height="100" className="hidden md:block lg:block" />
          {NavItems.map((e, i) => (
            <Link
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={clsx(
                `hover:text-teal-200 transition-colors text-black md:text-white text-[17px]`,
                i === selectedIndex ? `UnderLine` : ""
              )}
              href={e.href}
            >
              {t(e.title)}
            </Link>
          ))}
        </div>

        <div className="link2 rtl:lg:-left-[3%] ltr:lg:-right-[3%]  flex flex-col items-center gap-4 md:flex-row justify-center  relative   md:w-[42%] lg:w-1/2">
          <div className="  flex md:flex-row gap-4 flex-col justify-center items-center">
            <button
              className="link1 w-[110px] hover:shadow-lg hover:bg-[#2C2C2C] md:w-[120px] lg:w-[140px] 
            h-[42px] gap-2 text-[12px] font-bold rounded-[16px] bg-black
             text-white flex flex-row justify-center items-center p-2    lg:text-[14px]"
            >
              <LoginIcon width="20" />
              <Link href={"/login"}>{t("Login")}</Link>
            </button>
            <button
              className=" hover:shadow-lg hover:bg-Primary/75 transition-all text-[12px] md:text-[12px]
             lg:text-[14px] w-[110px]
             md:w-[120px] lg:w-[140px] h-[42px] gap-2 font-bold rounded-[16px] bg-Primary
              text-white flex flex-row justify-center items-center p-2"
            >
              <SignUpIcon width="20" />
              <Link href={"/register"}>{t("Register")}</Link>
            </button>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
