import { StoryModel } from "@/domain/models";
import { HttpResponse, IHttpClient } from "@/domain/gateways/http-client";
import { HttpUseCase } from "@/domain/ports/http-use-case";

export class StoryListUseCase implements HttpUseCase<void, StoryModel[]> {
  constructor(private readonly httpClient: IHttpClient<StoryModel[]>) {}
  
  async execute(): Promise<HttpResponse<StoryModel[]>> {
    const data = await this.httpClient.request({
      method: "get",
      url: "/stories",
    });

    return data;
  }
}