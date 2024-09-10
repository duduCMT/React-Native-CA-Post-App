import { PostListUseCase } from "@/application/usecases/posts/post-list-usecase";
import { StoryListUseCase } from "@/application/usecases/stories/story-list-usecase";
import { AxiosHttpClient } from "@/infra/http-client/axios-http-client";
import { HomeScreen } from "@/presentation/screens/Home";

export default function Home() {
  const defaultHttpClient = new AxiosHttpClient(process.env.EXPO_PUBLIC_API_URL);
  
  const postListUseCase = new PostListUseCase(defaultHttpClient);
  const storyListUseCase = new StoryListUseCase(defaultHttpClient);

  return (
    <HomeScreen 
      postListUseCase={postListUseCase} 
      storyListUseCase={storyListUseCase} 
    />
  );
};
