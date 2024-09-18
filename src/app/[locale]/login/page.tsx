"use client";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import LoginWithGoogle from "./LoginWithGoogle";
import useResultModal from "@/app/hooks/useResultModal";
import AuthLayout from "@/components/authLayout";
import { login, UserLoginData } from "@/app/services/auth";
import RegistrationRedirect from "@/components/registrationRedirect";
import Btn from "@/components/sharedButton";
import CustomInput from "@/components/customInput";
import { icons } from "@/components/icons";
import { useTranslations } from "next-intl";


export default function Login() {

  const t = useTranslations("AuthPages");

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const globalModal = useResultModal();

  const inputsFields = [
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
      type: "text",
      defaultValue: "",
      sx: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "0.95rem",
        },
        "& .MuiInputAdornment-root": {
          marginRight: "0",
        },
      },
    },
    {
      label: t("Password"),
      id: "password",
      placeholder: t("EnterYourAccountPassword"),
      icon: icons.PasswordIcon,
      control: control,
      name: "password",
      error: errors.password,
      rules: {
        required: t("PasswordIsRequired"),
        pattern: {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/,
          message: t("PassErrorMsg")
        },
      },
      type: "password",
      defaultValue: "",
      sx: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "0.95rem",
        },
        "& .MuiInputAdornment-root": {
          marginRight: "0",
        },
      },
    },
  ];

  const loginMutation = useMutation({
    mutationFn: (values: UserLoginData) => login(values),
    onSuccess: (res) => {
      console.log(res);
      globalModal.success({
        title: t("SuccessfullyCompleted"),
        subtitle: t("SuccessfullyCompleted"),
      });
      Cookies.set("AuthToken", res?.token);
      router.push("/");
    },
    onError: (err: any) => {
      console.log(err);
      globalModal.error(t("RequestFailed"), "");
    },
  });

  const onSubmit = (data: any) => {
    loginMutation.mutate(data);
  };

  // SVG for unchecked state
  const CustomCheckboxIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="5.5" stroke="#01A4AE" />
    </svg>
  );

  // SVG for checked state (with a checkmark)
  const CustomCheckedIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="5.5" stroke="#01A4AE" />
      <path d="M7 12.5L10.5 16L17 9" stroke="#01A4AE" strokeWidth="2" />
    </svg>
  );
     
  return (
    <AuthLayout>
      <div className="px-7 py-4">
        <div>
          <p className="text-[20px] font-black leading-[24px] " >
               {t("WelcomeBackTo")} Gamma Assets 👋
          </p>
          <p
            className="text-[#787878] font-normal leading-[19.2px] my-2 text-[16px]"
          >
            {t("PleaseMsg")}
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="rememberMe"
                  className="border-[#01A4AE] m-0 p-0"
                  icon={<CustomCheckboxIcon />} 
                  checkedIcon={<CustomCheckedIcon />} 
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} 
                />
                <label className="cursor-pointer font-normal text-[#000F0B] mx-2" htmlFor="rememberMe">
                  {t("RememberMe")}
                </label>
              </div>

              <div className="flex items-center">
                <Link className="font-normal text-[#000F0B]" href="/forget-password">{t("ForgotPassword?")}</Link>
              </div>
            </div>

            <Btn text={t("LogIn")}/>

            <p className="text-center mt-2">{t("Or")}</p>

          
            <RegistrationRedirect  path={'/register'} suffix={t("Don'tHaveAnAccount?")} prefix={t("CreateAnAccount")} />


            <LoginWithGoogle />
          </Box>
        </div>
      </div>
    </AuthLayout>
  );
}
