import { HttpMethod, HttpRequest, HttpResponse, IHttpClient } from "@/domain/gateways/http-client";

export class AxiosHttpClientMock implements IHttpClient {
  url?: string;
  method?: HttpMethod;
  body?: any;
  headers?: any;
  params?: any;

  response: HttpResponse<any> = { statusCode: 200, body: "" };

  request(data: HttpRequest): Promise<HttpResponse> {
    this.method = data.method;
    this.url = data.url;
    this.body = data.body;
    this.headers = data.headers;
    this.params = data.params;
    return new Promise(resolve => resolve(this.response));
  }
}
