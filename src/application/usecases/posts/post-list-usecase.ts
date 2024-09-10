import { PostModel } from "@/domain/models";
import { HttpResponse, IHttpClient } from "@/domain/gateways/http-client";
import { HttpUseCase } from "@/domain/ports/http-use-case";

export class PostListUseCase implements HttpUseCase<void, PostModel[]> {
  constructor(private readonly httpClient: IHttpClient<PostModel[]>) {}
  
  async execute(): Promise<HttpResponse<PostModel[]>> {
    const data = await this.httpClient.request({
      method: "get",
      url: "/posts",
    });

    return data;
  }
}