import { HttpResponse } from "@/domain/gateways/http-client";
import { PostModel } from "../../models/post.model";

export interface IPostListRepository {
  listFollowers(): Promise<HttpResponse<PostModel[]>>;
  listDiscovery(): Promise<HttpResponse<PostModel[]>>;
};