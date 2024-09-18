import React from "react";
import "../../../app/style.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import EmailBlue from "../../../../public/Icons/EmailBlue";
import PhoneBlue from "../../../../public/Icons/PhoneBlue";
import InstagramGray from "../../../../public/Icons/InstagramGray";
import TwitterGray from "../../../../public/Icons/TwitterGray";
import FacebookGray from "../../../../public/Icons/FacebookGray";
import LinkedinGray from "../../../../public/Icons/LinkedinGray";
import ContactForm from "./Form";
import Background from "../../../../public/Img/ContactUsBackground.png"
import Hand from "../../../../public/Icons/Hand";
import Image from "next/image";
const Contactus = () => {
  const t = useTranslations("HomePage");
  return (
    <article className=" px-4 sm:p-0 relative grid grid-cols-1 lg:grid-cols-2  mb-4   justify-items-center gap-0">
      <Image className=" hidden lg:block h-[480px] top-0 absolute ltr:left-0 rtl:right-0" src={Background} alt="No iamge available" loading="lazy" />
      <section className=" h-fit relative top-10  order-2 lg:order-none  md:w-[414px] 
       bg-white shadow-lg rounded-lg  hidden lg:flex
        flex-col gap-5 p-6   
       md:ltr:left-[0%] md:rtl:right-[0%]
      lg:ltr:left-[20px] lg:rtl:right-[20px] xl:ltr:left-[50px] xl:rtl:right-[50px]">
        {/* <h1 className=" text-[24px] font-bold">{t("Contact us")}</h1> */}
        <h1
          className="
         text-[18px] text-wrap overflow-hidden 
 
    w-full 
           first-letter:   rtl:right-3  ltr:left-3 relative mb-[20px] m-auto
          before:-top-[11px]   rtl:before:rtl:left-[8px]   ltr:before:ltr:right-[8px] 
          ltr:before:right-[8px]   before:relative before:inline-block 
          before:h-[1px] before:w-[38px]  before:border-[1.5px]
          before:border-[#0d738dc9] sm:text-[24px] font-bold"
        >
          {t("Contact us")}
        </h1>
        <div className=" flex flex-row  gap-6 items-center">
          <span>
            <EmailBlue />
          </span>
          <span className="flex flex-col">
            <span className=" text-[#787878]  text-[14px]">{t("Email")}</span>
            <Link
              className=" text-[16px] font-bold"
              href={"Email:info@gammaassets.com"}
            >
              info@gammaassets.com
            </Link>
          </span>
        </div>
        <div className=" flex flex-row  gap-6 items-center">
          <span>
            <PhoneBlue />
          </span>
          <span className="flex flex-col">
            <span className=" text-[#787878]  text-[14px]">{t("Phone")}</span>
            <Link
              className=" text-[16px] font-bold"
              href={"Phone:+966456787654"}
            >
              +966456787654
            </Link>
          </span>
        </div>
        <div className="flex justify-start  mt-6 gap-4">
          <Link
            href={"#"}
            className="  hover:shadow-lg cursor-pointer hover:bg-[#eceaea9a]  bg-[#FAFAFA] rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center"
          >
            <InstagramGray />
          </Link>
          <Link
            href={"#"}
            className=" hover:shadow-lg cursor-pointer hover:bg-[#eceaea9a] bg-[#FAFAFA] rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center"
          >
            <TwitterGray />
          </Link>
          <Link
            href={"#"}
            className="hover:shadow-lg cursor-pointer hover:bg-[#eceaea9a]  bg-[#FAFAFA] rounded-full p-2 w-[40px] h-[40px]     flex justify-center items-center"
          >
            <FacebookGray />
          </Link>
          <Link
            href={"#"}
            className=" hover:shadow-lg cursor-pointer hover:bg-[#eceaea9a] bg-[#FAFAFA] rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center"
          >
            <LinkedinGray />
          </Link>
        </div>
      </section>
      <section className="  w-11/12 sm:w-fit">
        <div className=" flex flex-row gap-3 text-[#1C1C1C] text-[18px] font-semibold">
          <h1>{t("welcomeToGamma")} </h1>
          <Hand />
        </div>
        <p className=" text-[#787878] text-[14px] mt-1">{t("FeelToContact")}</p>
        <ContactForm />
      </section>
    </article>
  );
};

export default Contactus;
