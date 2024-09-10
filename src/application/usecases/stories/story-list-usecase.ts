import { StoryModel } from "@/domain/models";
import { HttpResponse, IHttpClient } from "@/domain/gateways/http-client";
import { IPostListRepository } from "@/domain/usecases/story-list-usecase";

export class StoryListUseCase implements IPostListRepository {
  constructor(private readonly httpClient: IHttpClient<StoryModel[]>) {}
  
  async listFollowers(): Promise<HttpResponse<StoryModel[]>> {
    const data = await this.httpClient.request({
      method: "get",
      url: "/stories/followers",
    });

    return data;
  }

  async listDiscovery(): Promise<HttpResponse<StoryModel[]>> {
    const data = await this.httpClient.request({
      method: "get",
      url: "/stories/discovery",
    });

    return data;
  }
}