import { HttpResponse } from "@/domain/gateways/http-client";
import { PostModel } from "../../models/post.model";

export interface IPostListRepository {
  list(): Promise<HttpResponse<PostModel[]>>;
};