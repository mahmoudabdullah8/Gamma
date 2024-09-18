import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import Cookies from 'js-cookie';
// import i18next from '@/localization/i18n';

export const BASE_URL =
//   import.meta.env.VITE_BASE_URL ||
  'https://xyz.gammaassets.com/';

const instance = axios.create({
  baseURL: BASE_URL + 'api/',
  timeout: 20000,
});

// instance.interceptors.request.use(
//    (config: AxiosRequestConfig)=> {
//     const authToken = Cookies.get('token');
//     if (authToken) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${authToken}`,
//       };
//     }
//     if (i18next.language) {
//       config.headers = {
//         ...config.headers,
//         'Accept-Language': i18next.language,
//       };
//     }
//     return config;
//   },
//   function (error: AxiosError) {
//     return Promise.reject(error);
//   }
// );

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response?.status === 401) {
      Cookies.remove('token');
      Cookies.remove('user');
      // location.reload();
    }
    return Promise.reject(error);
  }
);

export default instance;
