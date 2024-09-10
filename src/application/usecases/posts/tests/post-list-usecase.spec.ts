import { PostListUseCase } from "@/application/usecases/posts/post-list-usecase";
import { AxiosHttpClientMock } from "@/infra/http-client/mocks/axios-http-client-mock";
import { postListMock } from "@/application/mocks/posts/post-list-mock";


type SutParams = {
  axiosHttpClientMock?: AxiosHttpClientMock;
}

function makeSut({ axiosHttpClientMock = new AxiosHttpClientMock() }: SutParams = {}) {
  const sut = new PostListUseCase(axiosHttpClientMock);
  return { sut, axiosHttpClientMock };
}

describe("PostListUseCase", () => {
  it("should return list method with correct method", async () => {
    const axiosHttpClientMock = new AxiosHttpClientMock();
    axiosHttpClientMock.response = { statusCode: 200, body: postListMock() };
    
    const { sut } = makeSut({ axiosHttpClientMock });
    await sut.execute();
    
    expect(axiosHttpClientMock.method).toBe("get");
  });

  it("should return list method with correct url", async () => {
    const axiosHttpClientMock = new AxiosHttpClientMock();
    axiosHttpClientMock.response = { statusCode: 200, body: postListMock() };
    
    const { sut } = makeSut({ axiosHttpClientMock });
    await sut.execute();
    
    expect(axiosHttpClientMock.url).toBe("/posts");
  });
})