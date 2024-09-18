"use client";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import React, { useEffect } from "react";
import { Locale } from "@/i18n/routing";
import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale(); // Ensure this returns a string that matches Locale



  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("dir", locale === "en" ? "ltr" : "rtl");
  }, [locale]);

  return <LocaleSwitcherSelect defaultValue={locale as Locale} />;
}
