import { Axios, AxiosRequestConfig, AxiosResponse } from "axios";


export default class AxiosService {
    public instance: Axios = new Axios(this.defaultConfig || {});

    constructor(
        public defaultConfig?: AxiosRequestConfig
    ) {}

    withDefaultConfig(config?: AxiosRequestConfig) {
        return { ...this.defaultConfig, ...(config || {}) };
    }
        
    async request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.request(this.withDefaultConfig(config));
    }
    
    get<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.instance.get(url, this.withDefaultConfig(config));
    }
    
    delete<T = any>(
        url: string,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> {
        return this.instance.delete(url, this.withDefaultConfig(config));
    }
    
    head<T = any>(
        url: string,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> {
        return this.instance.head(url, this.withDefaultConfig(config));
    }
    
    post<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> {
        return this.instance.post(url, data, this.withDefaultConfig(config));
    }
    
    put<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> {
        return this.instance.put(url, data, this.withDefaultConfig(config));
    }
    
    patch<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> {
        return this.instance.patch(url, data, this.withDefaultConfig(config));
    }
    
    get axiosRef(): Axios {
        return this.instance;
    }
}
