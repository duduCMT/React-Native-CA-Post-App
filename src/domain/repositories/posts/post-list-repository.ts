import { PostModel } from "../../models/post.model";

export interface IPostListRepository {
  list(): Promise<PostModel[]>;
};