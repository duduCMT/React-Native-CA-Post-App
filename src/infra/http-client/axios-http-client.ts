import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IHttpClient, HttpRequest, HttpResponse } from '@/domain/gateways/http-client';

export class AxiosHttpClient implements IHttpClient {
  private api: AxiosInstance;

  constructor(baseURL?: string) {
    this.api = axios.create({baseURL});
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await this.api.request<HttpResponse>({
        url: data.url,
        method: data.method,
        data: data.body,
        params: data.params,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    console.log(axiosResponse);
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
