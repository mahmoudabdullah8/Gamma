"use client";

import useResultModal from "@/app/hooks/useResultModal";
import { Box, Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "@/components/authLayout";
import { UserVerifyEmail, verifyEmail } from "@/app/services/auth";
import Btn from "@/components/sharedButton";
import CustomInput from "@/components/customInput";
import { icons } from "@/components/icons";

export default function VerifyEmail() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const globalModal = useResultModal();

  type FormFields = "email" | "code";
  const inputsFields: Array<{
    label: string;
    id: string;
    placeholder: string;
    icon: React.ReactNode;
    control: any;
    name: FormFields; // Use FormFields for name property
    error: any;
    rules: any;
    type: string;
    defaultValue: string;
    sx: any;
  }> = [
    {
      label: "البريد الالكتروني",
      id: "email",
      placeholder: "ادخل بريدك الالكتروني ...",
      icon: icons.emailIcon,
      control: control,
      name: "email",
      error: errors.email,
      rules: {
        required: "البريد الالكتروني مطلوب",
        pattern: {
          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          message: "يرجى إدخال بريد إلكتروني صالح",
        },
      },
      type: "text",
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
    {
      label: "الكود",
      id: "code",
      placeholder: "ادخل الكود ...",
      icon: icons.PasswordIcon,
      control: control,
      name: "code",
      error: errors.code,
      rules: {
        required: "ادخل الكود",
        minLength: {
          value: 6,
          message: " الكود يجب أن تكون 6 أحرف على الأقل",
        },
        maxLength: {
          value: 6,
          message: " الكود يجب أن تكون 6 أحرف على الأكثر",
        },
      },
      type: "text",
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
  const verifyMutation = useMutation({
    mutationFn: (values: UserVerifyEmail) => verifyEmail(values),
    onSuccess: (res) => {
      console.log(res);
      globalModal.success({
        title: "تم بنجاح",
        subtitle: "تم بنجاح",
      });

      router.push("/");
    },
    onError: (err: any) => {
      console.log(err);
      globalModal.error(
        err?.response?.data?.message || "Request Failed!!",
        err?.response?.data?.error
      );
    },
  });

  const onSubmit = (data: any) => {
    verifyMutation.mutate(data);
  };

  return (
    <AuthLayout>
      <div className="px-7 py-10">
        <div>
        <p className="text-[20px] font-black leading-[24px] " >
            اهلا بك بعودتك في Gamma Assets 👋
          </p>
          <p
            className="text-[#787878] font-normal leading-[19.2px] my-2 text-[16px]"
          >
                      من فضلك قم بادخال بياناتك حتي تتمكن من تأكيد البريد الالكتروني
            
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

            <Btn text="ارسال" />
          </Box>
        </div>
      </div>
    </AuthLayout>
  );
}
