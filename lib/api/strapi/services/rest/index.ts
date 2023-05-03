import 'dotenv/config';
import AxiosService from '../../../../services/transport/http/axios';


/**
 * Describes Strapi's REST API via HTTP communication.
 */
export default class RestService {
    public httpService: AxiosService;
    
    constructor() {
        this.httpService = new AxiosService({
            baseURL: process.env.STRAPI_URL + '/api/',
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
            }
        });
    }

    async request<Response = any, Payload = any>(
        method: string,
        url: string,
        payload?: Payload
    ): Promise<Response> {
        const res = await this.httpService.request<string>({
            method, url, data: payload
        });

        return JSON.parse(res.data) as Response;
    }

    async get<Response = any>(url: string): Promise<Response> {
        return this.request<Response>('get', url);
    }

    async delete<Response = any>(url: string): Promise<Response> {
        return this.request<Response>('delete', url);
    }

    async post<Response = any, Payload = any>(
        url: string,
        payload: Payload
    ): Promise<Response> {
        return this.request<Response, Payload>('post', url, payload);
    }

    async put<Response = any, Payload = any>(
        url: string,
        payload: Payload
    ): Promise<Response> {
        return this.request<Response, Payload>('put', url, payload);
    }
}
