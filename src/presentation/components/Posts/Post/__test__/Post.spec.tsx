import { render, screen } from "@testing-library/react-native";
import { Post } from "..";
import { postListMock } from "@/application/mocks/posts/post-list-mock";

function makeSut() {
  const posts = postListMock();
  const post = posts[0];

  const sut = render(
    <Post 
      body={post.post} 
      time={post.time} 
      userAvatar={post.user.avatar} 
      userName={post.user.name} 
      image={post.image}
    />
  );

  return { sut, post };
}

describe("Post", () => {
  it("should render Post with correct post body value", () => {
    const { sut, post } = makeSut();
    const { findByText } = sut;
    expect(findByText(post.user.name)).toBeTruthy();
  });

  it("should render Post with correct user name value", () => {
    const { sut, post } = makeSut();
    const { findByText } = sut;
    expect(findByText(post.post)).toBeTruthy();
  });

  it("should render Post with correct time value", () => {
    const { sut, post } = makeSut();
    const { findByText } = sut;
    expect(findByText(post.time)).toBeTruthy();
  });
})