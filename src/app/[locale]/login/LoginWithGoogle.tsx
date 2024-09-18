import { icons } from "@/components/icons";
import React from "react";
import { useTranslations } from "next-intl";
export default function LoginWithGoogle() {

const t = useTranslations("AuthPages");

  return (
    <>
      <button className=" w-full my-2 bg-[#F8FAFB] font-normal rounded-xl border-solid border-[1px] flex items-center justify-center py-3 border-gray-400 hover:bg-slate-200 duration-300">
        {icons.googleIcon}
        <span className="mx-2">{t("SignInWithGoogle")}</span>
      </button>
    </>
  );
}
