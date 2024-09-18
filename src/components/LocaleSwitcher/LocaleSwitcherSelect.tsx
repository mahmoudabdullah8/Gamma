"use client";
import clsx from "clsx";
import { useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@mui/material";

type Props = {
  defaultValue: Locale;
};

export default function LocaleSwitcherButton({ defaultValue }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const nextLocale: Locale = defaultValue === "en" ? "ar" : "en";

  // Function to handle button click

  function onLocaleChange() {
    startTransition(() => {
      router.replace(
        pathname, // Use the current pathname
        { locale: nextLocale } // Switch to the next locale
      );
      router.refresh();
    });
  }

  return (
    <>
      <button
        onClick={onLocaleChange}
        disabled={isPending}
        className={clsx(
          " hover:shadow-lg py-2 px-4 w-[50px] h-[47px] font-bold flex  justify-center items-center text-Primary   border-[0.5px] rounded-[16px] border-Primary",
          isPending && "opacity-30"
        )}
      >
        {nextLocale === "en" ? " EN" : "AR"}
      </button>
    </>
  );
}
