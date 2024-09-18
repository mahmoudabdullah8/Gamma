import Link from "next/link";
import React from "react";

export default function RegistrationRedirect({path,prefix,suffix}:any) {
  return (
    <>
      <button className="py-[13px] w-full my-2 rounded-xl border-solid border-[1px] border-gray-400 bg-[#F8FAFB] hover:bg-slate-200 duration-300">
        <Link href={path} className=" w-full  font-normal text-[#000F0B]">
             {suffix}<span className="text-[#01A4AE] font-semibold"> {prefix} </span>
        </Link>
      </button>
    </>
  );
}
