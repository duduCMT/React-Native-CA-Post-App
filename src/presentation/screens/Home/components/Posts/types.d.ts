import { PostModel } from "@/domain/models/post.model";
import { RequestData } from "@/presentation/types/request-status";

export type PostsProps = {
  posts: RequestData<PostModel[]>;
};