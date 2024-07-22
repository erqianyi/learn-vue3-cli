import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
export default class Axios {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.interceptors()
  }

  public async request<T, R = ResponseResult<T>>(config: AxiosRequestConfig): Promise<R> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<R>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
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