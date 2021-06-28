import axios from 'axios';

const baseURL = 'https://7.react.pages.academy/wtw';
const timeout = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

export const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized) => { //этот колбэк выполняется если сервер вернул 401
  const api = axios.create({
    baseURL: baseURL,
    timeout: timeout,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
