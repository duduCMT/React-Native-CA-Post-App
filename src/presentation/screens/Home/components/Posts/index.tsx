import { useEffect, useState } from "react";
import { View } from "react-native";

import { Text } from "@/presentation/components/Text";
import { Post } from "@/presentation/components/Posts/Post";
import { RequestData } from "@/presentation/types/request-status";
import { PostModel } from "@/domain/models/post.model";

import { PostsLoading } from "../PostsLoading";
import { styles } from "./styles";
import { PostsProps } from "./types";

export const Posts = ({ postListUseCase }: PostsProps) => {
  const [posts, setPosts] = useState<RequestData<PostModel[]>>({ status: "none" });

  useEffect(() => {
    requestPosts();
  }, []);

  const requestPosts = async () => {
    setPosts({ status: "loading" });
    try {
      const result = await postListUseCase.list();
      setTimeout(() => setPosts({ status: "success", data: result }), 2000);
      
    } catch (error) {
      console.error(error);
      setPosts({ status: "error", error });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts recentes</Text>

      <View style={styles.posts}>
        {posts.status === "loading" ? ( <PostsLoading /> ) : null}
        {posts.status === "error" ? (<Text>Erro ao carregar os posts</Text>) : null}
        {posts.status === "success" && posts.data ? (
          posts.data.map(({ id, image, post, time, user }) => (
            <Post 
              time={time} 
              body={post} 
              userName={user.name} 
              userAvatar={user.avatar} 
              key={id} 
              image={image} 
            />
          ))
        ) : null}
      </View>
    </View>
  );
}