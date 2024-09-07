import axios from "axios";

import { PostModel } from "@/domain/models/post.model";
import { IPostListRepository } from "@/domain/repositories/posts/post-list-repository";

export class PostListUseCase implements IPostListRepository {
  async list(): Promise<PostModel[]> {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL + "/posts" || "";
    console.log(apiUrl);
    const { data } = await axios.get<PostModel[]>(apiUrl);
    return data;
  }
}