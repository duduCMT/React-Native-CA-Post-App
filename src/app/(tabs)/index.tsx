import { PostListUseCase } from "@/data/usecases/posts/post-list-usecase";
import { HomeScreen } from "@/presentation/screens/Home";

export default function Home() {
  const postListUseCase = new PostListUseCase();

  return <HomeScreen postListUseCase={postListUseCase} />;
};