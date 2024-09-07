
export type HttpMethod = 'post' | 'get' | 'put' | 'delete';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  params?: any;
};

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
};

export type HttpResponse<TBody = any> = {
  statusCode: HttpStatusCode;
  body?: TBody;
};

export interface IHttpClient<TBody = any> {
  request(data: HttpRequest): Promise<HttpResponse<TBody>>;
};