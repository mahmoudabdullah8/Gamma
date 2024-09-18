"use client";
import useResultModal from "@/app/hooks/useResultModal";
import { resetPassword, UserResetPassword } from '@/app/services/auth';
import { Box } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import AuthLayout from "@/components/authLayout";
import Btn from "@/components/sharedButton";
import CustomInput from "@/components/customInput";
import { icons } from "@/components/icons";
import { useTranslations } from "next-intl";

export default function ResetPassword() {
  const t = useTranslations("AuthPages");

 const router=useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm();
  const globalModal =useResultModal();

  const inputsFields = [
    {
      label: t("NewPassword") ,
      id: 'newPassword',
      placeholder: t("EnterYourAccountPassword"),
      icon: icons.PasswordIcon,
      control: control,
      name: 'newPassword',
      error: errors.password,
      rules: {
        required: t("PasswordIsRequired"),
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/,
          message: t("PassErrorMsg")
        },
      },
      type: 'password',
      defaultValue: '',
      sx: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '0.75rem',
        },
        '& .MuiInputAdornment-root': {
          marginRight: 1,
        },
      },
    },
  ];

  
  const resetMutation = useMutation({
    mutationFn: (values:UserResetPassword) =>
        resetPassword(values) ,onSuccess: (res) => {
        console.log(res)
        globalModal.success({
          title:t("SuccessfullyCompleted"),
          subtitle:t("SuccessfullyCompleted")
        });
      },
      onError:(err:any)=>{
        console.log(err)
        globalModal.error(
          t("RequestFailed"),""
        )
      }
   
  });
  

  const onSubmit = (data:any) => {
    
    resetMutation.mutate(data)
    
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
                 {t("PleaseEnterNewPassword")}
          </p>
          <Box className='mt-10' component="form" onSubmit={handleSubmit(onSubmit)}>
            {inputsFields.map((field, idx) => (
              <div key={idx}>
                <CustomInput {...field} />
              </div>
            ))}

            <Btn text={t("Send")}/>
          </Box>
        </div>
      </div>
    </AuthLayout>
  );
}
