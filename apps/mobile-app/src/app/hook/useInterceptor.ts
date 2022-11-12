import { useEffect, useMemo, useState } from 'react';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { useAuth } from './useAuth';
import axiosInstance from '../util/axios';
import {
  ExpiredAccessTokenException,
  ExpiredRefreshTokenException,
  InvalidRefreshTokenException,
} from '@nest-react-native-monorepo/data-interface';
import { HttpException } from '@nestjs/common';

const MAX_RETRY = 3;

interface ErrorResponseData {
  error: string;
  message: string;
  statusCode: number;
}

const isExceptionMatched = <T extends HttpException>(
  err: ErrorResponseData,
  exception: T
): boolean => {
  return (
    err.statusCode === exception.getStatus() &&
    err.message === exception.message
  );
};

export function useInterceptor() {
  const { accessToken, refreshTokenExpired, refreshAccessToken } = useAuth();
  const [retryCount, setRetryCount] = useState(0);

  const interceptors = useMemo(() => {
    const request = (config: AxiosRequestConfig): AxiosRequestConfig => {
      config.headers['Authorization'] = accessToken
        ? `Bearer ${accessToken}`
        : '';
      return config;
    };

    const response = (res: AxiosResponse): AxiosResponse => {
      return res;
    };

    const error = async (err: AxiosError<ErrorResponseData>) => {
      const invalidRefreshTokenError = isExceptionMatched(
        err.response?.data,
        new InvalidRefreshTokenException()
      );
      const expiredRefreshTokenError = isExceptionMatched(
        err.response?.data,
        new ExpiredRefreshTokenException()
      );

      if (invalidRefreshTokenError || expiredRefreshTokenError) {
        console.error('Refresh token expired or invalid');
        refreshTokenExpired();
        return;
      }

      const accessTokenExpiredError = isExceptionMatched(
        err.response?.data,
        new ExpiredAccessTokenException()
      );

      if (accessTokenExpiredError && retryCount < MAX_RETRY) {
        console.error('Access token expired');
        setRetryCount((prev) => prev + 1);

        return refreshAccessToken().then((issuedAccessToken) => {
          setRetryCount(0);
          err.config.headers.Authorization = `Bearer ${issuedAccessToken}`;
          return axiosInstance.request(err.config);
        });
      }

      return Promise.reject(err);
    };

    return { request, response, error };
  }, [accessToken, retryCount]);

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      interceptors.response,
      interceptors.error
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [interceptors]);
}
