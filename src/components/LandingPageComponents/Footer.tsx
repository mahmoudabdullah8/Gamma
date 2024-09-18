"use client";
import React from "react";
import Container from "../Container";
import LogoGreen from "@/../../public/Icons/LogoGreen.svg";
import Image from "next/image";
import { Divider } from "@mui/material";
import { useTranslations } from "next-intl";
import Twitter from "../../../public/Icons/twitter";
import Linkedin from "../../../public/Icons/linkedin";
import Instagram from "../../../public/Icons/instagram";
import FaceBook from "../../../public/Icons/facebook";
import Link from "next/link";

const style = {
  backgroundColor: "background.paper",
};
const Footer = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="  bg-[#202020] text-white p-6 md:p-0 ">
      <Container className="text-[13px] sm:text-[14px] grid grid-cols-1 md:grid-cols-2 
      justify-between py-[30px]   justify-items-center text-center sm:justify-items-start sm:text-start ">
        <Image src={LogoGreen} alt="fds" />
        <div className=" grid grid-cols-1 sm:grid-cols-2 ">
          <div className=" flex flex-col gap-4 sm:gap-2">
            <h1 className="  text-Primary">{t("QuickLinks")}</h1>
            <Link className=" hover:text-Primary" href={"#"}>{t("WhoAreWe")}</Link>
            <Link className=" hover:text-Primary" href={"#"}>{t("OurServices")}</Link>
            <Link className=" hover:text-Primary" href={"#"}>{t("Contact us")}</Link>
          </div>
          <div className=" flex flex-col gap-4 mt-4 sm:mt-0">
            <h1 className="  text-Primary">{t("FollowUs")}</h1>
            <div className="grid grid-cols-2  sm:flex sm:flex-row gap-4">
            <Link  href={"#"} className=" hover:bg-black bg-[#2C2C2C] rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center">
                <Twitter />
              </Link>
              <Link href={"#"} className=" hover:bg-black bg-[#2C2C2C] rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center">
                <Linkedin />
              </Link>
              <Link href={"#"} className=" hover:bg-black bg-[#2C2C2C] rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center">
                <Instagram />
              </Link>
              <Link href={"#"} className="hover:bg-black bg-[#2C2C2C] rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center">
                <FaceBook />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Divider variant="fullWidth" sx={style} />

      <Container className=" text-[13px] sm:text-[14px] flex-col sm:flex-col  flex md:flex-row justify-between  py-4 gap-4 md:gap-0">
        <div className="   m-auto sm:m-0  flex   sm:flex-row  gap-4  ">
          <Link className=" hover:text-Primary" href={"#"}>{t("privacyPolicy")}</Link>
          <Link  className=" hover:text-Primary" href={"#"}>{t("Terms")}</Link>
        </div>
        <span className=" m-auto sm:m-0  hover:cursor-not-allowed order-1 md:-order-1">{t("AllRights")}</span>
      </Container>
    </div>
  );
};

export default Footer;
