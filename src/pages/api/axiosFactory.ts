/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

const apiErrorHandler = async (errorResponse: any) => {
  const errorData = errorResponse?.response?.data;
  const errorMessage = errorData?.message;

  const error = new Error(errorMessage || errorData || 'An unknown error occurred.');

  return Promise.reject(error);
};

const apiResponseInterceptors = [
  function onFulfilled(successResponse: AxiosResponse) {
    return successResponse;
  },
  async function onRejected(errorResponse: any) {
    return apiErrorHandler(errorResponse);
  },
];

export const axiosFactory = (host: string) => {
  const instance = axios.create({ baseURL: host });

  instance.interceptors.response.use(...apiResponseInterceptors);

  return instance;
};
