"use client";
import { InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { registeration, UserRegusterationData } from "@/app/services/auth";
import AuthLayout from "@/components/authLayout";
import { icons } from "@/components/icons";
import CustomInput from "@/components/customInput";
import Btn from "@/components/sharedButton";
import RegistrationRedirect from "@/components/registrationRedirect";
import useResultModal from "@/app/hooks/useResultModal";
import { useTranslations } from "next-intl";

export default function Registration() {
  const t = useTranslations("AuthPages");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const globalModal = useResultModal();
  const router=useRouter();
  const formFields = [
    {
      label: t("Name"),
      id: "name",
      placeholder: t("EnterYourName"),
      icon: <InputAdornment position="start">{icons.name}</InputAdornment>, // Adjust the icon as needed
      control: control,
      name: "name",
      error: errors.name,
      rules: {
        required:t("NameIsRequired"),
      },
      type: "text",
      defaultValue: "",
      sx: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '0.95rem',
        },
        '& .MuiInputAdornment-root': {
          marginRight: '0'
        },
      },
    },
    {
      label:t("Email"),
      id: "email",
      placeholder: t("EnterYourEmailAddress"),
      icon: <InputAdornment position="start">{icons.emailIcon}</InputAdornment>,
      control: control,
      name: "email",
      error: errors.email,
      rules: {
        required: t("EmailIsRequired"),
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: t("PleaseEnterAValidEmailAddress"),
        },
      },
      type: "email",
      defaultValue: "",
      sx: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '0.95rem',
        },
        '& .MuiInputAdornment-root': {
          marginRight: '0'
        },
      },
    },
    {
      label: t("Password"),
      id: "password",
      placeholder: t("EnterYourAccountPassword"),
      icon: (
        <InputAdornment position="start">{icons.PasswordIcon}</InputAdornment>
      ), // Adjust the icon as needed
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
        '& .MuiOutlinedInput-root': {
          borderRadius: '0.95rem',
        },
        '& .MuiInputAdornment-root': {
          marginRight: '0'
        },
      },
    },
    {
      label: t("ConfirmPassword"),
      id: "confirmPassword",
      placeholder: t("ConfirmYourAccountPassword"),
      icon: (
        <InputAdornment position="start">{icons.PasswordIcon}</InputAdornment>
      ), // Adjust the icon as needed
      control: control,
      name: "confirmPassword",
      error: errors.confirmPassword,
      rules: {
        required: t("PasswordConfirmationIsRequired"),
        validate: (value: string, formValues: any) =>
          value === formValues.password ||
        t("PasswordAndConfirmPasswordDoNotMatch"),
      },
      type: "password",
      defaultValue: "",
      sx: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '0.95rem',
        },
        '& .MuiInputAdornment-root': {
          marginRight: '0'
        },
      },
    },
  ];

  const registerMutation = useMutation({
    mutationFn: (values: UserRegusterationData) => registeration(values),
    onSuccess: (res) => {
      globalModal.success({
        title: res?.message,
        subtitle: t("SuccessfullyCompleted"),
      });
      router.push("/login")
    },
    onError: (err: any) => {
      globalModal.error(
        err?.response?.data?.message || t("RequestFailed"),
        err?.response?.data?.error
      );
    },
  });

  const onSubmit = (data: any) => {
    data.phoneNumber = "0101971518";
    data.username = data?.email?.split("@")[0];
    data.name = data?.email?.split("@")[0];
    data.confirmedTerms = true;
    registerMutation.mutate(data);
  };

  return (
    <AuthLayout>
      <div className=" lg:px-7 px-3 pt-2 lg:pt-2">
        <p className="text-[20px] font-extrabold">
            {t("WelcomeBackTo")} Gamma Assets 👋
        </p>

        <p
          className="text-[#787878] font-normal text-[16px]"
      
        >
          {t("PleaseMsg")}
        </p>

        <Box  component="form" onSubmit={handleSubmit(onSubmit)}>
          {formFields?.map((el, idx) => (
            <div  key={idx}>
              <CustomInput {...el} />
            </div>
          ))}

          <Btn text={t("CreateAnAccount")}/>
          <p className="text-center p-0 m-0">او</p>

    
          <RegistrationRedirect  path={'/login'} suffix={t("Don'tHaveAnAccount?")} prefix={t("LogIn")} />
        </Box>
      </div>
    </AuthLayout>
  );
}



