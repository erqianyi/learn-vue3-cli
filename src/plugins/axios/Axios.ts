import axios, { AxiosRequestConfig } from 'axios';
class Axios {
  private instance: any;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.interceptors()
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: any) => {
        // 处理请求
        return config
      },
      (error: any) => {
        // 处理请求错误
        return Promise.reject(error)
      })
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response: any) => {
        // 处理响应
        return response
      },
      (error: any) => {
        // 处理响应错误
        return Promise.reject(error)
      })
  }
}