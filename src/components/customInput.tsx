import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
  Path,
  FieldError,
} from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface TextFieldWithIconProps<T extends FieldValues> {
  label: string;
  id: string;
  placeholder: string;
  icon?: React.ReactNode;
  control: Control<T>;
  name: Path<T>;
  error?: any;
  rules?: RegisterOptions<T, Path<T>>;
  type?: string;
  sx?: object;
}

const CustomInput = <T extends FieldValues>({
  label,
  id,
  placeholder,
  icon,
  control,
  error,
  name,
  rules,
  type = "text",
  sx,
}: TextFieldWithIconProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`flex ${error?.message ? "mb-[3px]" :"mb-4"} flex-col`}>
      <label className={"mb-1"} htmlFor={id}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <FormControl fullWidth variant="outlined">
            <TextField
              {...field}
              id={id}
              type={type === "password" && !showPassword ? "password" : "text"}
              value={field.value || ""} // Ensure the value is always controlled
              placeholder={` ${placeholder}`}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.50rem",
                },
                "& .MuiInputAdornment-root": {
                  marginRight: 1,
                },
                ...sx,
              }}
              InputProps={{
                startAdornment: icon && (
                  <InputAdornment className="pl-2" position="start">
                    {icon}
                  </InputAdornment>
                ),
                endAdornment:
                  type === "password" ? (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff className='text-[#01A4AE]' /> : <Visibility className='text-[#01A4AE]' />}
                      </IconButton>
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end"></InputAdornment>
                  ),
              }}
            />
            {error && (
              <div
                style={{ color: "red", fontSize: "13.5px" }}
              >
                {error.message}
              </div>
            )}
          </FormControl>
        )}
      />
    </div>
  );
};

export default CustomInput;
