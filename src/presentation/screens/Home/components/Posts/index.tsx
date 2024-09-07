import { Text } from "@/presentation/components/Text";
import { View } from "react-native";
import { styles } from "./styles";
import { POSTS } from "./mock";
import { Post } from "@/presentation/components/Posts/Post";

export const Posts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts recentes</Text>

      <View style={styles.posts}>
        {POSTS.map(({ id, image, post, time, user }) => (
          <Post 
            time={time} 
            body={post} 
            userName={user.name} 
            userAvatar={user.avatar} 
            key={id} 
            image={image} 
          />
        ))}
      </View>
    </View>
  );
}