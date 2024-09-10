import { PostModel } from "@/domain/models";
import { HttpUseCase } from "@/domain/ports";

export type HomeProps = {
  postListUseCase: HttpUseCase<void, PostModel[]>;
};