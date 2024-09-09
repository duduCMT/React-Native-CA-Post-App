import axios from "axios";

import { PostModel } from "@/domain/models/post.model";
import { IPostListRepository } from "@/domain/repositories/posts/post-list-repository";
import { HttpResponse, IHttpClient } from "@/domain/gateways/http-client";

export class PostListUseCase implements IPostListRepository {
  constructor(private readonly httpClient: IHttpClient<PostModel[]>) {}
  
  async list(): Promise<HttpResponse<PostModel[]>> {
    const data = await this.httpClient.request({
      method: "get",
      url: "/posts",
    });

    return data;
  }
}