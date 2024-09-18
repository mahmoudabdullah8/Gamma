import instance from "../../../utils/instance";
export interface UserRegusterationData {
  body: {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    confirmedTerms: boolean;
    phoneNumber: string;
  };
}

export interface UserLoginData {
  body: {
    email: string;
    password: string;
  };
}

export interface UserVerifyEmail {
  body: {
    email: string;
    code: string;
  };
}
export interface UserForgetPassword {
  body: {
    email: string;
  };
}
export interface UserResetPassword {
  body: {
    email: string;
  };
}

async function login(body: UserLoginData) {
  return instance
    .post("auth/login", body)
    .then((res) => res.data);
}

async function registeration(body: UserRegusterationData) {
  return instance
    .post("auth/register", body)
    .then((res) => res.data);
}

async function verifyEmail(body: UserVerifyEmail) {
  return instance
    .post("auth/verify-email", body)
    .then((res) => res.data);
}
async function forgetPassword(body: UserForgetPassword) {
  return instance
    .post("auth/forgot-password", body)
    .then((res) => res.data);
}
async function resetPassword(body: UserResetPassword) {
  return instance
    .post("auth/forgot-password", body)
    .then((res) => res.data);
}

export { login ,registeration,verifyEmail,forgetPassword,resetPassword };
