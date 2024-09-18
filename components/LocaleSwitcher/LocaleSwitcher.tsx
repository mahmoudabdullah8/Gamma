"use client";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import React, { useLayoutEffect } from "react";
import { Locale } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale(); // Ensure this returns a string that matches Locale

  useLayoutEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("dir", locale === "en" ? "ltr" : "rtl");
  }, [locale]);

  return (
    <LocaleSwitcherSelect defaultValue={locale as Locale}  />
  );
}
