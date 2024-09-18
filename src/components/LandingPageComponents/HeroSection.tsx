// pages/index.js
"use client";
import Image from "next/image";
import HeroBackground from "../../../public/Img/HeroImg.png";
import Instagram from "../../../public/Icons/instagram";
import Twitter from "../../../public/Icons/twitter";
import FaceBook from "../../../public/Icons/facebook";
import Linkedin from "../../../public/Icons/linkedin";
import { useTranslations } from "next-intl";
import Arrow from "../../../public/Icons/Arrow";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const t = useTranslations("HomePage");

  useGSAP(() => {
    gsap.from(".HeroOne", {
      duration: 0.7,
      x: 40,
      transformOrigin: "50px 50px",
      opacity: 0,
    });
    gsap.from(".HeroTwo", {
      duration: 0.5,

      delay: 0.5,
      transformOrigin: "50px 50px",
      opacity: 0,
    });
  });

  return (
    <div className="HeroOne  -z-10 text-white    flex items-start justify-center p-4">
      <div className="   mx-auto p-5 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* left Side (Text Section) */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold   mb-4 rtl:text-right leading-tight">
            {t("LandingTitle")}
          </h1>
          <p className=" w-full rtl:text-right mb-6 text-[14px] md:text-[16px] sm:w-7/12 md:w-11/12 lg:w-8/12">
            {t("LandingHeroContent")}
          </p>
          <div className="flex justify-start">
            <Link
              href={"#"}
              className=" hover:shadow-lg cursor-pointer hover:bg-Primary/50 transition-all 
           
           w-[170px] h-[42px] gap-2 text-[14px] font-bold rounded-[16px]
            bg-Primary text-white flex flex-row justify-center items-center p-2"
            >
              <Arrow width="20" />
              <p>{t("investing")}</p>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start  mt-6 gap-4">
            <Link
              href={"#"}
              className=" hover:shadow-lg cursor-pointer hover:bg-Primary/50  bg-Primary rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center"
            >
              <Instagram />
            </Link>
            <Link
              href={"#"}
              className=" hover:shadow-lg cursor-pointer hover:bg-Primary/50 bg-Primary rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center"
            >
              <Twitter />
            </Link>
            <Link
              href={"#"}
              className="hover:shadow-lg cursor-pointer hover:bg-Primary/50  bg-Primary rounded-full p-2 w-[40px] h-[40px]     flex justify-center items-center"
            >
              <FaceBook />
            </Link>
            <Link
              href={"#"}
              className=" hover:shadow-lg cursor-pointer hover:bg-Primary/50 bg-Primary rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
        {/* Left Side (Image Section) */}
        <div className="HeroTwo md:w-1/2 w-full   justify-center hidden md:block">
          {" "}
          {/* Hide on md and smaller */}
          <Image
            src={HeroBackground} // Make sure to place the image in the 'public' folder or adjust the path
            alt="Hand holding a city"
            width={600}
            height={400}
            className="rounded-lg shadow-lg hover:shadow-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
