import { postListMock } from "@/application/mocks/posts/post-list-mock";
import { IPostListRepository } from "@/domain/usecases/posts/post-list-repository";

export class PostListUseCaseMock implements IPostListRepository {
  async list() {
    return {
      body: postListMock(),
      statusCode: 200
    }
  }
}
