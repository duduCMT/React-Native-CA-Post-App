import { IPostListRepository } from "@/domain/repositories/posts/post-list-repository"

export type PostsProps = {
  postListUseCase: IPostListRepository;
};