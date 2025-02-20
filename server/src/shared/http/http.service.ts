import { HttpException, Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosPromise, AxiosError } from 'axios';
@Injectable()
export class HttpService {
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.get(url, config);
  }
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return axios.delete(url, config);
  }
  post<T = any>(url: string, data?, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.post(url, data, config);
  }
  put<T = any>(url: string, data?, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.put(url, data, config);
  }
  patch<T = any>(url: string, data?, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.patch(url, data, config);
  }
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T> {
    return axios.request(config);
  }
  handleError(error: AxiosError) {
    if (error.response) {
      throw new HttpException(error.response.data, error.response.status);
    }
    throw new HttpException(error.message ?? 'Internal Server Error', 500);
  }
}
