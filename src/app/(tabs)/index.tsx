import { PostListUseCase } from "@/application/usecases/posts/post-list-usecase";
import { AxiosHttpClient } from "@/infra/http-client/axios-http-client";
import { HomeScreen } from "@/presentation/screens/Home";

export default function Home() {
  const postListUseCase = new PostListUseCase(new AxiosHttpClient(process.env.EXPO_PUBLIC_API_URL));

  return <HomeScreen postListUseCase={postListUseCase} />;
};
