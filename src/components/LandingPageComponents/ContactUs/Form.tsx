import React from "react";
import FormArrow from "../../../../public/Icons/FormArrow";
import Email from "../../../../public/Icons/Email";
import { useTranslations } from "next-intl";
import PhoneWhite from "../../../../public/Icons/PhoneWhite";
import User from "../../../../public/Icons/User";

const ContactForm = () => {
  const t = useTranslations("HomePage");
  return (
    <form className="flex flex-col  w-full sm:w-[500px]   p-4 md:p-0 md:w-[500px] lg:w-[490px] " method="POST">
      {/* Input One */}
      <div className="flex flex-col pt-4 ">
        <h1 className=" py-2"> {t("name")}</h1>
        <div className="   bg-white relative flex overflow-hidden rounded-xl border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-Primary">
          <span className="inline-flex items-center   border-gray-300 px-3 text-sm text-gray-500 shadow-sm">
            <User />
          </span>

          <div className="relative mt-2 w-full">
            <input
              id="Name"
              type="text"
              className="text-[16px]  border-none peer block w-full appearance-none rounded-lg border
             border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4  text-gray-900 focus:border-Primary 
             focus:outline-none focus:ring-0"
              placeholder=""
            />
            <label
              htmlFor="Name"
              className=" bg-transparent absolute top-2 ltr:left-1 rtl:right-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text 
            select-none   px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-Primary"
            >
              {t("name")}
            </label>
          </div>
        </div>
      </div>
      {/* Input Two */}
      <div className="flex flex-col pt-4 ">
        <h1 className=" py-2"> {t("Email")}</h1>

        <div className="   bg-white relative flex overflow-hidden rounded-xl border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-Primary">
          <span className="inline-flex items-center   border-gray-300 px-3 text-sm text-gray-500 shadow-sm">
            <Email />
          </span>

          <div className="relative mt-2 w-full">
            <input
              id="Email"
              type="text"
              className="text-lg  border-none peer block w-full appearance-none rounded-lg border
     border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4  text-gray-900 focus:border-Primary 
     focus:outline-none focus:ring-0"
              placeholder=""
            />
            <label
              htmlFor="Email"
              className=" bg-transparent absolute top-2 ltr:left-1 rtl:right-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text 
    select-none   px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
    peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-Primary"
            >
              {t("EnterEmail")}
            </label>
          </div>
        </div>
      </div>
      {/* Input Three */}
      <div className="flex flex-col pt-4 ">
        <h1 className=" py-2"> {t("Phone")}</h1>

        <div className="   bg-white relative flex overflow-hidden rounded-xl border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-Primary">
          <span className="inline-flex items-center   border-gray-300 px-3 text-sm text-gray-500 shadow-sm">
            <PhoneWhite />
          </span>

          <div className="relative mt-2 w-full">
            <input
              id="Phone"
              type="text"
              className="text-lg  border-none peer block w-full appearance-none rounded-lg border
     border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4  text-gray-900 focus:border-Primary 
     focus:outline-none focus:ring-0"
              placeholder=""
            />
            <label
              htmlFor="Phone"
              className=" bg-transparent absolute top-2 ltr:left-1 rtl:right-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text 
    select-none   px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
    peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-Primary"
            >
              {t("PhoneNumber")}
            </label>
          </div>
        </div>
      </div>
      {/* End of Input Three */}
      <button
        type="submit"
        className="mt-6 hover:shadow-lg hover:bg-Primary/10   w-full h-[45px] 
        gap-2 text-[14px] font-bold rounded-[16px] bg-gradient-Primary text-white flex flex-row 
        justify-center 
        items-center p-2"
      >
        {t("send")}
      </button>
    </form>
  );
};

export default ContactForm;
