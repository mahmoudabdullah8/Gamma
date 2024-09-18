"use client";

import useResultModal from "@/app/hooks/useResultModal";
import { Box, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";   
import { useForm } from "react-hook-form";
import { forgetPassword, UserForgetPassword } from "@/app/services/auth";
import AuthLayout from "@/components/authLayout";
import { icons } from "@/components/icons";
import CustomInput from "@/components/customInput";
import Btn from "@/components/sharedButton";
import { useTranslations } from "next-intl";

export default function ForgetPassword() {
  const t = useTranslations("AuthPages");

  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const globalModal = useResultModal();

  type FormFields = "email";
  const inputsFields: Array<{
    label: string;
    id: string;
    placeholder: string;
    icon: React.ReactNode;
    control: any;
    name: FormFields;
    error: any;
    rules: any;
    type: string;
    defaultValue: string;
    sx: any;
  }> = [
    {
      label:t("Email"),
      id: "email",
      placeholder: t("EnterYourEmailAddress"),
      icon: icons.emailIcon,
      control: control,
      name: "email",
      error: errors.email,
      rules: {
        required: t("EmailIsRequired"),
        pattern: {
          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          message: t("PleaseEnterAValidEmailAddress"),
        },
      },
      type: "email",
      defaultValue: "",
      sx: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "0.75rem",
        },
        "& .MuiInputAdornment-root": {
          marginRight: 1,
        },
      },
    },
  ];
  const forgetMutation = useMutation({
    mutationFn: (values: UserForgetPassword) => forgetPassword(values),
    onSuccess: (res) => {
      console.log(res);
      globalModal.success({
        title:t("Send"),
        subtitle: res?.message || t("SuccessfullyCompleted"),
      });

      // router.push("/reset-password")
    },
    onError: (err: any) => {
      console.log(err);
      globalModal.error(
        err?.response?.data?.message || t("RequestFailed"),
        err?.response?.data?.error
      );
    },
  });

  const onSubmit = (data: any) => {
    forgetMutation.mutate(data);
  };

  return (
    <AuthLayout>
      <div className="px-7 py-10">
        <div>
        <p className="text-[20px] font-black leading-[24px] " >
        {t("WelcomeBackTo")} Gamma Assets 👋
          </p>
          <p
            className="text-[#787878] font-normal leading-[19.2px] my-2 text-[16px]"
          >
            {t("EnterYourEmailAddress")}
          </p>
          <Box
            className="mt-10"
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {inputsFields.map((field, idx) => (
              <div key={idx}>
                <CustomInput {...field} />
              </div>
            ))}

            <Btn text={t("Send")} />
          </Box>
        </div>
      </div>
    </AuthLayout>
  );
}
