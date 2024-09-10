import { PostModel } from "@/domain/models";
import { HttpUseCase } from "@/domain/ports";
import { IPostListRepository } from "@/domain/usecases/story-list-usecase";

export type HomeProps = {
  postListUseCase: HttpUseCase<void, PostModel[]>;
  storyListUseCase: IPostListRepository;
};