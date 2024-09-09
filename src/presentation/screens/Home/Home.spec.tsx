import { render, screen, waitFor } from "@testing-library/react-native";
import { HomeScreen } from ".";

import { postListMock } from "@/application/mocks/posts/post-list-mock";
import { POST_COMPONENT_TEST_ID } from "@/presentation/components/Posts/Post/constants";
import { PostListUseCaseMock } from "@/application/usecases/posts/post-list-usecase-mock";

function makeSut() {
  const posts = postListMock();

  const postListUseCase = new PostListUseCaseMock();

  const sut = render(
    <HomeScreen postListUseCase={postListUseCase} />
  );

  return { sut, posts };
}

describe("HomeScreen", () => {
  it("should render Posts with correct list", async () => {
    const { sut, posts } = makeSut();
    const { getAllByTestId, getByText } = sut;

    await waitFor(() => {
      expect(getByText(posts[0].post)).toBeTruthy()
    }, {
      timeout: 2500,
    });

    expect(getAllByTestId(POST_COMPONENT_TEST_ID).length).toBe(posts.length);
  });
})